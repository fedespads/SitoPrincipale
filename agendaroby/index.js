// Aggiungi questo all'inizio del file
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('ServiceWorker registrato');
      })
      .catch(error => {
        console.log('Errore nella registrazione del ServiceWorker:', error);
      });
  });
}

// Utilizziamo IndexedDB per il salvataggio persistente
class Storage {
    constructor() {
        this.dbName = 'fitplanDB';
        this.dbVersion = 1;
        this.init();
    }

    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);
            
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };
            
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('planData')) {
                    db.createObjectStore('planData', { keyPath: 'id' });
                }
            };
        });
    }

    async savePlan(data) {
        await this.waitForDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['planData'], 'readwrite');
            const store = transaction.objectStore('planData');
            const request = store.put({ id: 'currentPlan', ...data });
            
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    async getPlan() {
        await this.waitForDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['planData'], 'readonly');
            const store = transaction.objectStore('planData');
            const request = store.get('currentPlan');
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }

    async saveShoppingState(dayIndex, items) {
        await this.waitForDB();
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['planData'], 'readwrite');
            const store = transaction.objectStore('planData');
            const request = store.get('currentPlan');
            
            request.onsuccess = () => {
                const data = request.result;
                if (!data.shoppingState) {
                    data.shoppingState = {};
                }
                data.shoppingState[dayIndex] = items;
                
                store.put(data).onsuccess = () => resolve();
            };
            request.onerror = () => reject(request.error);
        });
    }

    // Metodo per assicurarsi che il DB sia inizializzato
    async waitForDB() {
        if (!this.db) {
            await new Promise(resolve => {
                const checkDB = setInterval(() => {
                    if (this.db) {
                        clearInterval(checkDB);
                        resolve();
                    }
                }, 50);
            });
        }
    }
}

class App {
    constructor() {
        this.storage = new Storage();
        // Ottieni il giorno corrente (0 = Lunedì, 6 = Domenica)
        const today = new Date().getDay();
        // Converti da formato JavaScript (0 = Domenica) al nostro formato (0 = Lunedì)
        this.currentDay = today === 0 ? 6 : today - 1;
        this.currentTab = 'nutrition';
        this.planData = null;
        
        this.createNotificationContainer();
        this.initializeEventListeners();
        this.loadData();
        this.initializeImportModal();
    }

    createNotificationContainer() {
        const notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
    }

    showNotification(message, isError = false, duration = 3000) {
        const notification = document.querySelector('.notification');
        notification.textContent = message;
        notification.classList.toggle('error', isError);
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.classList.remove('error');
            }, 500);
        }, duration);
    }

    async loadData() {
        try {
            this.planData = await this.storage.getPlan();
            if (!this.planData) {
                this.showEmptyState();
            } else {
                // Attiva il pulsante del giorno corrente in tutti i selettori
                document.querySelectorAll('.day-selector').forEach(selector => {
                    selector.querySelectorAll('.day-btn').forEach((btn, index) => {
                        btn.classList.toggle('active', index === this.currentDay);
                    });
                });
                this.renderCurrentView();
            }
        } catch (error) {
            console.error('Error loading data:', error);
            this.showEmptyState();
        }
    }

    showEmptyState() {
        const nutritionContainer = document.querySelector('.meals-container');
        const workoutContainer = document.querySelector('.workout-container');
        
        const emptyStateHtml = `
            <div class="empty-state">
                <h3>Nessun piano disponibile</h3>
                <p>Clicca sull'icona in alto a destra per importare il tuo piano.</p>
            </div>
        `;
        
        nutritionContainer.innerHTML = emptyStateHtml;
        workoutContainer.innerHTML = emptyStateHtml;
    }

    initializeEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Day selection - Modificato per gestire tutti i selettori di giorni
        document.querySelectorAll('.day-selector').forEach(selector => {
            selector.querySelectorAll('.day-btn').forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    this.switchDay(index);
                });
            });
        });
    }

    switchTab(tab) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.id === tab);
        });
        this.currentTab = tab;
        this.renderCurrentView();
    }

    switchDay(dayIndex) {
        if (this.planData?.alimentazione?.giorni?.[dayIndex]) {
            this.currentDay = dayIndex;
            document.querySelectorAll('.day-selector').forEach(selector => {
                selector.querySelectorAll('.day-btn').forEach((btn, index) => {
                    btn.classList.toggle('active', index === dayIndex);
                });
            });
            this.renderCurrentView();
        } else {
            this.showNotification('Giorno non disponibile', true);
        }
    }

    async importPlan() {
        const jsonInput = document.getElementById('jsonInput');
        try {
            const data = JSON.parse(jsonInput.value);
            await this.storage.savePlan(data);
            this.planData = data;
            this.renderCurrentView();
            this.showNotification('Piano importato con successo');
            jsonInput.value = '';
        } catch (error) {
            this.showNotification('Errore nell\'importazione del piano. Verifica il formato JSON.', true, 4000);
        }
    }

    renderCurrentView() {
        if (!this.planData) return;

        if (this.currentTab === 'nutrition') {
            this.renderNutrition();
        } else if (this.currentTab === 'workout') {
            this.renderWorkout();
        } else if (this.currentTab === 'shopping') {
            this.renderShopping();
        }
    }

    renderNutrition() {
        const container = document.querySelector('.meals-container');
        if (!this.planData?.alimentazione?.giorni?.[this.currentDay]) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>Nessun dato disponibile</h3>
                    <p>Non ci sono dati per questo giorno.</p>
                </div>
            `;
            return;
        }

        const dayData = this.planData.alimentazione.giorni[this.currentDay];
        
        let html = '';
        for (const [meal, data] of Object.entries(dayData.pasti)) {
            html += `
                <div class="meal-card">
                    <h3>${this.formatMealName(meal)}</h3>
                    <ul>
                        ${data.alimenti.map(alimento => `
                            <li>${alimento}</li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }
        
        container.innerHTML = html;
    }

    renderWorkout() {
        const container = document.querySelector('.workout-container');
        if (!this.planData?.allenamento?.giorni?.[this.currentDay]) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>Nessun dato disponibile</h3>
                    <p>Non ci sono dati per questo giorno.</p>
                </div>
            `;
            return;
        }

        const dayData = this.planData.allenamento.giorni[this.currentDay];
        
        let html = `
            <div class="workout-card">
                <h3>Focus: ${dayData.focus}</h3>
                ${dayData.esercizi.map(ex => `
                    <div class="exercise">
                        <h4>${ex.nome}</h4>
                        ${ex.serie ? `<p>Serie: ${ex.serie}</p>` : ''}
                        ${ex.ripetizioni ? `<p>Ripetizioni: ${ex.ripetizioni}</p>` : ''}
                        ${ex.durata ? `<p>Durata: ${ex.durata}</p>` : ''}
                    </div>
                `).join('')}
                ${dayData.finisher ? `
                    <div class="finisher">
                        <h4>Finisher: ${dayData.finisher.nome}</h4>
                        <p>Serie: ${dayData.finisher.serie}</p>
                        ${dayData.finisher.ripetizioni ? `<p>Ripetizioni: ${dayData.finisher.ripetizioni}</p>` : ''}
                        ${dayData.finisher.durata ? `<p>Durata: ${dayData.finisher.durata}</p>` : ''}
                    </div>
                ` : ''}
            </div>
        `;
        
        container.innerHTML = html;
    }

    renderShopping() {
        const container = document.querySelector('.shopping-container');
        if (!this.planData?.alimentazione?.giorni?.[this.currentDay]) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>Nessun dato disponibile</h3>
                    <p>Non ci sono dati per questo giorno.</p>
                </div>
            `;
            return;
        }

        const dayData = this.planData.alimentazione.giorni[this.currentDay];
        const checkedItems = this.planData.shoppingState?.[this.currentDay] || [];
        
        let allItems = new Set();
        Object.values(dayData.pasti).forEach(meal => {
            meal.alimenti.forEach(item => allItems.add(item));
        });

        let html = `
            <div class="shopping-list">
                ${Array.from(allItems).map(item => `
                    <div class="shopping-item ${checkedItems.includes(item) ? 'checked' : ''}">
                        <input type="checkbox" 
                               class="shopping-checkbox" 
                               id="item-${item.replace(/\s+/g, '-')}"
                               ${checkedItems.includes(item) ? 'checked' : ''}>
                        <label for="item-${item.replace(/\s+/g, '-')}">${item}</label>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.innerHTML = html;

        // Aggiungi event listeners per i checkbox
        container.querySelectorAll('.shopping-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', async () => {
                const item = checkbox.nextElementSibling.textContent;
                const itemContainer = checkbox.parentElement;
                itemContainer.classList.toggle('checked', checkbox.checked);

                // Aggiorna lo stato nel database
                const currentCheckedItems = this.planData.shoppingState?.[this.currentDay] || [];
                if (checkbox.checked) {
                    currentCheckedItems.push(item);
                } else {
                    const index = currentCheckedItems.indexOf(item);
                    if (index > -1) currentCheckedItems.splice(index, 1);
                }

                if (!this.planData.shoppingState) {
                    this.planData.shoppingState = {};
                }
                this.planData.shoppingState[this.currentDay] = currentCheckedItems;
                
                try {
                    await this.storage.saveShoppingState(this.currentDay, currentCheckedItems);
                } catch (error) {
                    console.error('Errore nel salvataggio dello stato:', error);
                    this.showNotification('Errore nel salvataggio', true);
                }
            });
        });
    }

    formatMealName(meal) {
        return meal
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    initializeImportModal() {
        const importTrigger = document.querySelector('.import-trigger');
        const importModal = document.querySelector('.import-modal');
        const cancelButton = importModal.querySelector('.cancel');
        const confirmButton = importModal.querySelector('.confirm');

        importTrigger.addEventListener('click', () => {
            importModal.classList.add('show');
        });

        cancelButton.addEventListener('click', () => {
            importModal.classList.remove('show');
            document.getElementById('jsonInput').value = '';
        });

        confirmButton.addEventListener('click', () => {
            this.importPlan();
            importModal.classList.remove('show');
        });

        importModal.addEventListener('click', (e) => {
            if (e.target === importModal || e.target.classList.contains('import-modal-backdrop')) {
                importModal.classList.remove('show');
            }
        });
    }
}

// Initialize the app when the page loads
window.addEventListener('load', () => {
    new App();
});
