let dati = {
    passaggio: 0,
    titoli: [
        "Inserisci il pattern",
        "Inserisci il primo pezzo",
        "Inserisci il secondo pezzo",
        "Inserisci il terzo pezzo",
        "Piazza il primo pezzo qui",
        "Piazza il secondo pezzo qui",
        "Piazza il terzo pezzo qui",
    ],
    griglia: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    pezzo1:[],
    pezzo2:[],
    pezzo3:[],
    risultato1:[],
    risultato2:[],
    risultato3:[],
    
};

console.log(Object.values(dati)[3]);


(function create(){
    let g = document.createElement("div");
    g.id = "grid";
    
    let t = document.createElement("div");
    t.id = "title";
    
    let d = document.createElement("div");
    d.id = "buttons";
    let b1 = document.createElement("button");
    b1.id = "back";
    let b2 = document.createElement("button");
    b2.id = "next";
    b1.innerText = "Indietro";
    b2.innerText = "Avanti";
    b1.addEventListener("click",()=>{
        dati.passaggio--;
        if(dati.passaggio<0){
            dati.passaggio = 0;
        }
        caricaGriglia();
    });
    b2.addEventListener("click",()=>{
        dati.passaggio++;
        if(dati.passaggio>dati.titoli.length-1){
            dati.passaggio = dati.titoli.length-1;
        }
        caricaGriglia();
    });
    d.appendChild(b1);
    d.appendChild(b2);
    
    
    
    t.innerText = dati.titoli[dati.passaggio];
    
    g.appendChild(t);
    g.appendChild(d);
    document.body.appendChild(g);
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let b = document.createElement("div");
            b.id = "cell" + i + j;
            b.classList.add("cell");
            b.classList.add("empty");
            g.appendChild(b);
        }
    }
})();
function caricaGriglia(){
    if(dati.passaggio>=4){
        console.log(dati);
        let soluzione = trovaCombinazioneVincente(dati.griglia,[dati.pezzo1,dati.pezzo2,dati.pezzo3]);
        console.log(soluzione);
    }
    let grid=Object.values(dati)[dati.passaggio+2];
    console.log(grid);
    document.querySelector("#title").innerText = dati.titoli[dati.passaggio];
    document.querySelectorAll(".full").forEach(e=>{
        e.classList.remove("full");
    })
    document.querySelectorAll(".highlight").forEach(e=>{
        e.classList.remove("highlight");
    })
    document.querySelectorAll(".cell").forEach(e=>{
        e.classList.add("empty");
    })
    grid.forEach((e,i)=>{
        e.forEach((f,j)=>{
            if(f==1){
                document.getElementById(`cell${i}${j}`).classList.remove("empty");
                document.getElementById(`cell${i}${j}`).classList.add("full");
            }
            else if(f==2){
                document.getElementById(`cell${i}${j}`).classList.remove("empty");
                document.getElementById(`cell${i}${j}`).classList.add("highlight");
            }
        })
    })
}

function scrivigriglia(){
    let f = [...document.getElementById("grid").querySelectorAll(".cell")];
    f = f.map(e => e.classList.contains("full") ? 1 : 0);
    let a = [
        [], [], [], [], [], [], [], []
    ];
    f.map((e,i) => {
        a[Math.floor(i/8)].push(e);
    });
    
    dati[Object.keys(dati)[dati.passaggio+2]]=a
};


function change(e) {
    if (e.target.classList.contains("empty")) {
        e.target.classList.remove("empty");
        e.target.classList.add("full");
    }
    else if (e.target.classList.contains("full")) {
        e.target.classList.remove("full");
        e.target.classList.add("empty");
    }
    scrivigriglia();
    
}

dati[Object.keys(dati)[dati.passaggio+2]]=dati.griglia;

// Funzione per verificare se un pezzo può essere posizionato in una data posizione
function puoPosizionare(pezzo, riga, colonna, grigliaAttuale) {
    for (let i = 0; i < pezzo.length; i++) {
        for (let j = 0; j < pezzo[i].length; j++) {
            if (pezzo[i][j] === 1) {
                if (riga + i >= 8 || colonna + j >= 8 || 
                    grigliaAttuale[riga + i][colonna + j] === 1) {
                    return false;
                }
            }
        }
    }
    return true;
}

// Funzione per posizionare un pezzo nella griglia
function posizionaPezzo(pezzo, riga, colonna, grigliaAttuale) {
    let nuovaGriglia = grigliaAttuale.map(row => [...row]);
    for (let i = 0; i < pezzo.length; i++) {
        for (let j = 0; j < pezzo[i].length; j++) {
            if (pezzo[i][j] === 1) {
                nuovaGriglia[riga + i][colonna + j] = 1;
            }
        }
    }
    return nuovaGriglia;
}

// Funzione per controllare e rimuovere righe/colonne complete
function rimuoviRigheColonneComplete(grigliaAttuale) {
    let nuovaGriglia = grigliaAttuale.map(row => [...row]);
    let modificata = false;
    let continua;
    
    do {
        continua = false;
        
        // Array per tenere traccia delle righe e colonne da rimuovere
        let righeToRemove = [];
        let colonneToRemove = [];
        
        // Identifica tutte le righe complete
        for (let i = 0; i < 8; i++) {
            if (nuovaGriglia[i].every(cell => cell === 1)) {
                righeToRemove.push(i);
                modificata = true;
                continua = true;
            }
        }
        
        // Identifica tutte le colonne complete
        for (let j = 0; j < 8; j++) {
            if (nuovaGriglia.every(row => row[j] === 1)) {
                colonneToRemove.push(j);
                modificata = true;
                continua = true;
            }
        }
        
        // Rimuovi tutte le righe complete
        righeToRemove.forEach(i => {
            nuovaGriglia[i] = new Array(8).fill(0);
        });
        
        // Rimuovi tutte le colonne complete
        colonneToRemove.forEach(j => {
            for (let i = 0; i < 8; i++) {
                nuovaGriglia[i][j] = 0;
            }
        });
        
        // Se sono state fatte rimozioni, verifica se si sono create nuove linee complete
        if (continua) {
            console.log("Rimozione effettuata:", {
                righeRimosse: righeToRemove,
                colonneRimosse: colonneToRemove
            });
        }
        
    } while (continua); // Continua finché non ci sono più righe o colonne da rimuovere
    
    return { 
        griglia: nuovaGriglia, 
        modificata: modificata,
        // Aggiungi informazioni sulle rimozioni per debug
        debug: {
            statoFinale: nuovaGriglia.map(row => [...row])
        }
    };
}

function visualizzaGriglia(griglia) {
    return griglia.map(riga => riga.join(' ')).join('\n');
}

function trovaCombinazioneVincente(griglia, pezzi) {
    let soluzioni = [];
    
    // Funzione per estrarre la forma effettiva del pezzo
    function estraiFormaPezzo(pezzo) {
        let minRiga = 8, maxRiga = -1, minCol = 8, maxCol = -1;
        
        // Trova i limiti del pezzo
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (pezzo[i][j] === 1) {
                    minRiga = Math.min(minRiga, i);
                    maxRiga = Math.max(maxRiga, i);
                    minCol = Math.min(minCol, j);
                    maxCol = Math.max(maxCol, j);
                }
            }
        }
        
        // Se non trova nulla, ritorna null
        if (minRiga > maxRiga) return null;
        
        // Estrai solo la parte del pezzo che contiene 1
        let formaPezzo = [];
        for (let i = minRiga; i <= maxRiga; i++) {
            let riga = [];
            for (let j = minCol; j <= maxCol; j++) {
                riga.push(pezzo[i][j]);
            }
            formaPezzo.push(riga);
        }
        return formaPezzo;
    }
    
    // Estrai le forme effettive dei pezzi
    let pezziEffettivi = pezzi.map(estraiFormaPezzo).filter(p => p !== null);
    
    function provaCombinazione(grigliaAttuale, pezziRimanenti, sequenza) {
        // Prima rimuovi eventuali righe/colonne complete
        let risultatoRimozione = rimuoviRigheColonneComplete(grigliaAttuale);
        let grigliaCorrente = risultatoRimozione.griglia;
        
        if (pezziRimanenti.length === 0) {
            if (sequenza.length === pezziEffettivi.length) {
                soluzioni.push([...sequenza]);
                return true;
            }
            return false;
        }
        
        let pezzo = pezziRimanenti[0];
        let altezzaPezzo = pezzo.length;
        let larghezzaPezzo = pezzo[0].length;
        
        // Prova tutte le possibili posizioni
        for (let i = 0; i <= 8 - altezzaPezzo; i++) {
            for (let j = 0; j <= 8 - larghezzaPezzo; j++) {
                if (puoPosizionare(pezzo, i, j, grigliaCorrente)) {
                    let nuovaGriglia = posizionaPezzo(pezzo, i, j, grigliaCorrente);
                    let risultatoDopoPos = rimuoviRigheColonneComplete(nuovaGriglia);
                    
                    sequenza.push({
                        indicePezzo: pezziEffettivi.length - pezziRimanenti.length,
                        posizione: [i, j],
                        rimozioneAvvenuta: risultatoDopoPos.modificata
                    });
                    
                    if (provaCombinazione(
                        risultatoDopoPos.griglia,
                        pezziRimanenti.slice(1),
                        sequenza
                    )) {
                        return true;
                    }
                    
                    sequenza.pop();
                }
            }
        }
        return false;
    }
    
    let grigliaIniziale = rimuoviRigheColonneComplete(griglia).griglia;
    provaCombinazione(grigliaIniziale, pezziEffettivi, []);
    
    if (soluzioni.length > 0) {
        console.log("Soluzione trovata!");
        return formattaSoluzione(soluzioni[0], griglia, pezziEffettivi);
    }
    return "Nessuna soluzione trovata";
}

function formattaSoluzione(soluzione, griglia, pezzi) {
    let risultato = "Sequenza di mosse:\n";
    let grigliaCorrente = griglia.map(row => [...row]);
    
    soluzione.forEach((mossa, index) => {
        risultato += `\n${index + 1}. Posiziona il pezzo ${mossa.indicePezzo + 1} ` +
        `alla posizione [${mossa.posizione[0]}, ${mossa.posizione[1]}]`;
        
        // Creiamo una copia temporanea della griglia per la visualizzazione
        let grigliaVisualizzazione = grigliaCorrente.map(row => [...row]);
        let pezzo = pezzi[mossa.indicePezzo];
        
        // Visualizza il pezzo con 2
        for (let i = 0; i < pezzo.length; i++) {
            for (let j = 0; j < pezzo[i].length; j++) {
                if (pezzo[i][j] === 1) {
                    grigliaVisualizzazione[mossa.posizione[0] + i][mossa.posizione[1] + j] = 2;
                }
            }
        }
        
        // Aggiorna i risultati nell'oggetto dati
        dati[`risultato${mossa.indicePezzo + 1}`] = grigliaVisualizzazione;
        
        risultato += "\n\nStato della griglia (0=vuoto, 1=occupato, 2=nuovo pezzo):\n" + 
        visualizzaGriglia(grigliaVisualizzazione) + "\n";
        
        // Aggiorna la griglia reale con il pezzo
        grigliaCorrente = posizionaPezzo(pezzo, mossa.posizione[0], mossa.posizione[1], grigliaCorrente);
        
        // Applica tutte le rimozioni possibili
        let risultatoRimozione;
        do {
            risultatoRimozione = rimuoviRigheColonneComplete(grigliaCorrente);
            grigliaCorrente = risultatoRimozione.griglia;
        } while (risultatoRimozione.modificata);
    });
    
    return risultato;
}

["touchstart","click"].forEach(
    event=>{
        document.addEventListener(event,e=>{
            if(dati.passaggio<4){
                change(e)
            }
        })
        
    }
)
