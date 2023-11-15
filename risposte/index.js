let box = document.querySelector(".box");
let input = document.querySelector("input");
let a;
input.addEventListener("input", function () {
  box.innerHTML = "";
  clearInterval(a);
  let i = 0;
  if (input.value != "") {
    a = setInterval(() => {
      if (!all[i]) {
        clearInterval(a);
      }
      if (all[i][0].toLowerCase().includes(input.value.toLowerCase())) {
        box.innerHTML += `
      <div class="elemento">
        <div class="domanda">${all[i][0]}</div>
        <div class="risposta">${all[i][1]}</div>
      </div>
      `;
      }
      i++;
    }, 0);
  }
});
input.addEventListener("focus", function () {
  this.value = "";
});

let all = [
  [
    "La Statistica Descrittiva:",
    "Rappresenta l'insieme delle metodologie di analisi  che si prefiggono la descrizione di determinati fenomeni",
  ],
  [
    "La Statistica inferenziale:",
    "Comporta processi di inferenza in probabilità per  l'interpretazione dei risultati dell'analisi",
  ],
  [
    "I principi sanciti dall art. 285 del trattato di  Amsterdam:",
    "Imparzialita', affidabilita', obiettivita',  indipendenza scientifica, efficacia e riservatezza",
  ],
  [
    "Indicare quale delle seguenti affermazioni, riguardo  l'informazione statistica, è vera:",
    "Le principali dimensioni dell'informazione  Statistica sono accuratezza, tempestivita', regolarita', accessibilita', chiarezza,  comparabilita'",
  ],
  [
    "Quale affermazione, che indica le principali  modalità di trattamento dell'informazioni statistiche, è vera:",
    " In qualunque problema di analisi statistica sara'  necessario Elencare, Misurare e Sintetizzare, Correlare, Presentare",
  ],
  [
    "Per popolazione o collettivo  statistico s'intende:",
    "L'insieme delle unita' statistiche sulle quali si  effettua la rilevazione di uno o più caratteri",
  ],
  [
    "Per Campione s'intende:",
    " Un qualsiasi  sottoinsieme derivato da una popolazione finalizzato ad uno studio statistico",
  ],
  ["Le mutabili si distinguono come:", "Sconnesse e Ordinali"],
  ["Le variabili si distinguono come:", "Discrete e Continue"],
  [
    "La statistica si propone di:",
    "Descrivere – Illustrare – Proporre - Raccogliere - Sintetizzare - Interpretare",
  ],
  [
    "Un'indagine statistica è un:",
    "Processo produttivo, dove il prodotto finale consiste in  un'informazione statistica corretta",
  ],
  [
    "L'ordine delle fasi necessarie per progettare  un'indagine è:",
    "Definizione degli obiettivi, analisi 'a priori' delle fonti,  individuazione del campo di osservazione, selezione delle variabili, analisi  statistica delle unita' e delle variabili",
  ],
  [
    "La classificazione è l'insieme delle categorie assunte da una variabile:",
    "Qualitativa sconnessa  o ordinale",
  ],
  ["I caratteri statistici si dividono in:", "Quantitativi e qualitativi"],
  ["L'indagine statistica può essere:", "Totale o campionaria"],
  [
    "Indicare eqale affermazione sulla rilevazione dei dati è  vera:",
    "E' l'operazione di accertamento della presenza del carattere o fenomeno",
  ],
  [
    "Indicare quale di queste affermazioni sul piano di codifica  è vera:",
    "Definisce una corrispondenza tra i codici delle modalità delle variabili  e le risposte ottenute",
  ],
  ["L'elaborazione statistica:", "E' utile per predisporre nuove indagini"],
  [
    "Il controllo di qualità è:",
    "La  metodologia in base alla quale gli errori vengono corretti",
  ],
  [
    "Le azioni previste da un sistema di controllo di  qualità si dividono in:",
    "Preventive, di controllo in corso d'opera e di valutazione",
  ],
  [
    "La rilevazione statistica statistica è un processo:",
    "Finalizzato alla produzione di informazioni statistiche",
  ],
  [
    "Indicare quale delle seguenti affermazioni non rappresenta  un obiettivo della rilevazione:",
    "La classificazione dei dati per formulare ipotesi e teorie",
  ],
  [
    "Indicare in cosa consiste la rilevazione indiretta:",
    "Nell'utilizzo di archivi amministrativi",
  ],
  [
    "Si indichi quali tra questi svantaggi delle tecniche di  indagine CATI è vero:",
    "Maggiore addestramento dei rilevatori",
  ],
  [
    "Il piano di rilevazione deve stabilire:",
    "Perche', cosa (o chi), dove, come e quando",
  ],
  [
    "Indicare quale di queste affermazioni sulle rilevazioni  preliminari è vera:",
    "Sono svolte prima di quelle principali",
  ],
  ["Il piano di spoglio è:", "Il programma delle prime operazioni"],
  [
    "Indicare quali sono i principali indicatori statistici:",
    "Tasso di rifiuto e tasso di risposta",
  ],
  [
    "Il tasso di interruzione definitivo si calcola:",
    "Numero di interviste  interrotte definitivamente sul totale delle interviste",
  ],
  [
    "Le principali tipologie di errore sono:",
    "Errore nell’assunzione o nello spoglio dei dati",
  ],
  [
    "Il questionario serve a:",
    "A facilitare l'interazione tra ricercatore, rilevatore e rispondente",
  ],
  [
    "Le&nbsp;forme  delle interviste e dei questionari possono essere:",
    "Standardizzate o libere",
  ],
  [
    "La risposta libera prevede:",
    "Una risposta del tutto personale da parte del rispondente",
  ],
  [
    "Le risposte strutturate consistono:",
    "In risposte  predefinite tra le quali scegliere",
  ],
  [
    "Quali fasi prevede la costruzione del questionario:",
    "Individuazione delle informazioni, scelta, prima traccia, revisione,  prova e stesura del questionario",
  ],
  ["Le scale di valutazione possono essere:", "Numeriche o verbali"],
  ["La mancata risposta consiste:", "Nell'assenza di risposta ad una domanda"],
  [
    "Il metodo di correzione probabilistico prevede:",
    "la sostituzione con delle informazioni valide",
  ],
  [
    "La revisione dei dati e':",
    "Un riesame attento ed approfondito del materiale raccolto",
  ],
  [
    "Indicare quale di queste affermazioni sulla memorizzazione  dei dati e' vera:",
    "E' la fase di registrazione dei dati",
  ],
  [
    "La statistica economica è:",
    "La scienza che studia i fenomeni economici con l’ausilio di degli strumenti statistici",
  ],
  [
    "La statistica economica è impegnata:",
    "Nella ricerca di metodologie e modelli di riferimento e nell’elaborazione e gestione di sistemi di dati e di indicatori",
  ],
  [
    "Tra le fonti di documentazione della statistica economica troviamo:",
    "I censimenti, le indagini e le rilevazioni varie",
  ],
  [
    "Sono fonti della statistica economica:",
    "La teoria dei numeri indici e delle serie storiche",
  ],
  ["Tra i compiti dell’ISTAT rientrano:", "Tutte le voci precedenti"],
  [
    "Sull’ imparzialità e completezza dell’ indagini svolte dall’ISTAT:",
    "Vigila la Presidenza del Consiglio dei Ministri",
  ],
  [
    "Nel SISTAN rientrano:",
    "Tutti gli uffici di statistica di regioni, amministrazioni dello stato, comuni, ASL e camere di commercio",
  ],
  [
    "Gli obiettivi del SISTAN sono:",
    "Ridurre duplicazioni e incongruenze e razionalizzare le statistiche",
  ],
  ["Il Programma Statistico Nazionale è:", "Triennale"],
  [
    "Il Programma Statistico Nazionale:",
    "Delinea le attività di interesse pubblico da realizzare",
  ],
  [
    "I numeri indici rappresentano:",
    "Uno strumento per lo studio nel breve periodo delle fluttuazioni dei prezzi e delle produzioni",
  ],
  [
    "I numeri indici si classificano in:",
    "Semplici, complessi, sintetici,compositi",
  ],
  [
    "I numeri indice che mettono a confronto l’intensità di uno stesso fenomeno in due o più situazioni diverse sono:",
    "I numeri indici semplici",
  ],
  [
    "Se le componenti di un numero indice sono tutte della stessa specie definiamo:",
    "I numeri indici sintetici",
  ],
  [
    "Le fasi di costruzione dei numeri indici sono:",
    "Scelta delle grandezze,della base,del criterio di aggregazione,del sistema di ponderazione",
  ],
  [
    "In una serie di numeri indici se le variazioni sono calcolate rispetto allo stesso denominatore abbiamo:",
    "Numeri indici a base fissa",
  ],
  [
    "Le formule di Laspeyres, Paasche e Fisher sono:",
    "Formule utilizzate nella costruzione dei numeri indici dei prezzi e delle quantità",
  ],
  [
    "Indicare quale delle seguenti affermazioni è vera:",
    "L’indice di Laspeyres è un indice a base fissa mentre quello di Paasche è a ponderazione variabile",
  ],
  [
    "Indicare quale delle seguenti affermazioni relativamente agli indici a catena è vera:",
    "L’indice incorpora tutte le variazioni economiche verificatesi nel periodo in esame",
  ],
  [
    "Indicare quale delle seguenti affermazioni è vera:",
    "Secondo l’approccio economico il soggetto reagisce alle variazioni dei prezzi dei beni modificando le quantità di beni acquistati",
  ],
  [
    "I numeri indici delle produzioni e dei prezzi sono utilizzabili per:",
    "Confrontare nel tempo aggregati espressi in moneta corrente",
  ],
  [
    "La deflazione consiste nel:",
    "Depurare gli aggregati monetari correnti, riferiti a tempi diversi, dagli effetti derivanti dalle variazioni dei prezzi",
  ],
  ["La deflazione può essere:", "Diretta,indiretta e doppia"],
  [
    "La deflazione diretta consiste nel:",
    "Ricalcolare anno per anno gli aggregati moltiplicando i prezzi unitari dell’anno base per le quantità dei singoli anni considerati",
  ],
  [
    "Il criterio della doppia deflazione consiste nel:",
    "Esprimere in termini reali gli aggregati che costituiscono il saldo",
  ],
  [
    "Per operare la deflazione è necessario distinguere i casi di:",
    "Grandezze monetarie, flussi finanziari e saldi contabili",
  ],
  [
    "La costruzione dei deflatori risponde all’esigenza di:",
    "Determinare i tassi di equivalenza del potere di acquisto o parità di potere di acquisto (PPA)",
  ],
  [
    "Il problema dei confronti internazionali, trae origine dai limiti e dalle distorsioni derivanti dall’impiego dei:",
    "Tassi di cambio ufficiali delle monete",
  ],
  [
    "I dazi doganali ed i costi di trasporto influenzano:",
    "I prezzi interni all’ingrosso ed al consumo",
  ],
  [
    "I metodi più noti per calcolare la parità di potere d’acquisto sono:",
    "Il metodo proposto da Geary e Khamis ed il metodo proposto da Gerardi",
  ],
  [
    "Gli strumenti di indagine nello studio delle fluttuazioni sono:",
    "I metodi di analisi delle serie economiche temporali ",
  ],
  [
    "Le serie storiche sono:",
    "Sequenze di osservazioni effettuate nella successione dei periodi di tempo",
  ],
  [
    "Nella formazione delle serie è fondamentale:",
    "Individuare periodi caratterizzati da una situazione ambientale quanto più possibile uniforme e omogenea",
  ],
  [
    "L’approccio classico muove dal presupposto che:",
    "Le singole osservazioni siano le risultanti dell’azione combinata di movimenti non direttamente osservabili",
  ],
  [
    "Secondo l’approccio tradizionale le grandezze osservate sono scomponibili in:",
    "Una componente sistematica ed una componente irregolare o aleatoria",
  ],
  [
    "I modelli di tipo additivo, moltiplicativo o misto servono a:",
    "Individuare le relazioni tra le singole componenti di una serie storica",
  ],
  [
    "I cicli economici sono caratterizzati da:",
    "Una fase di espansione seguita da una fase di contrazione",
  ],
  [
    "Sulla base dei dati grezzi alcune informazioni immediate sull’andamento del trend-ciclo si possono ottenere:",
    "Confrontando fra loro il dato corrente e quello dello stesso periodo dell’anno precedente",
  ],
  [
    "La destagionalizzazione consiste nel:",
    "Depurare le serie rilevate dalle distorsioni dovute ad elementi stagionali",
  ],
  [
    "L’elaborazione di stime trimestrali di Contabilità Nazionale può essere effettuata in base a molteplici metodologie:",
    "Approccio diretto ed approccio indiretto",
  ],
  [
    "In base al tipo di approccio i metodi di previsione si distinguono:&nbsp;:",
    "Estrapolativo, proiettivo e normativo",
  ],
  [
    "Il metodo estrapolativo:&nbsp;:",
    "Si basa sull’invarianza dell’andamento delle variabili del modello nel corso del tempo",
  ],
  [
    "L’approccio proiettivo:&nbsp;:",
    "Punta a prefigurare risultati al verificarsi di determinati eventi&nbsp;",
  ],
  [
    "Il metodo Delphi consiste nel:&nbsp;:",
    "Sottoporre individualmente ai componenti di un gruppo di esperti i quesiti oggetto di valutazione",
  ],
  [
    "Per estendere i risultati a tutta la popolazione è necessario che il campione sia di tipo:&nbsp;:",
    "Probabilistico",
  ],
  [
    "Il metodo degli scenari punta ad individuare:&nbsp;:",
    "Un insieme di futuri plausibili determinati dall’evolversi delle variabili chiave l",
  ],
  [
    "La procedura di Box e Jenkins prevede:",
    "Analisi preliminare, identificazione, stima e verifica&nbsp;&nbsp;",
  ],
  [
    "Il processo stocastico identifica:",
    "Una famiglia di variabili casuali ordinate secondo il tempo&nbsp;",
  ],
  [
    "Il processo stocastico deve essere:&nbsp;:",
    "Stazionario, gaussiano, ergodico ed invertibile&nbsp;",
  ],
  [
    "In una serie temporale:",
    "vi è autocorrelazione globale quando i valori al tempo t della variabile considerata risultano correlati positivamente o negativamente con i valori al tempo t+1",
  ],
  [
    "Il sistema di Leontief può essere immaginato come soluzione di un problema di:&nbsp;:",
    "Massimizzazione dell’output e minimizzazione dei costi dei fattori&nbsp;",
  ],
  [
    "La tavola input-output si divide nelle seguenti sezioni:&nbsp;:",
    "Branche produttive, risorse primarie e impieghi finali&nbsp;",
  ],
  [
    "La lettura della tavola di input-output nel senso delle righe permette di analizzare:&nbsp;:",
    "La produzione delle varie branche secondo la loro destinazione",
  ],
  [
    "Il valore aggiunto al costo dei fattori cfYj è pari:&nbsp;:",
    "Alla somma di salari, oneri sociali, altri redditi ed ammortamenti&nbsp;",
  ],
  [
    "Il valore aggiunto ai prezzi di mercato PmYj è pari alla:&nbsp;:",
    "Somma del costo dei fattori, imposte indirette al netto dei contributi alla produzione&nbsp;",
  ],
  [
    "Attraverso l’equazione di bilancio si analizzano:",
    "Le produzioni delle varie branche secondo i rispettivi impieghi",
  ],
  [
    "L’impostazione matriciale della tavola di input-output rende possibile la registrazione dei flussi:",
    "Operando indifferentemente per riga o per colonna&nbsp;",
  ],
  ["Le fasi per il computo della tavola di input-output sono:", "Cinque&nbsp;"],
  [
    "La rilevazione dei consumi intermedi richiede informazioni dettagliate per consentire:&nbsp;:",
    "La ripartizione dei costi di produzione per branca di origine",
  ],
  [
    "I prezzi départ-usine o ex fabrica sono comprensivi anche:&nbsp;:",
    "Delle imposte indirette sulla produzione o sul primo scambio&nbsp;",
  ],
  [
    "Le tavole intersettoriali rappresentano un o strumento essenziale per:&nbsp;:",
    "Assicurare la coerenza delle stime contabilità nazionale",
  ],
  [
    "I coefficienti si dicono “tecnici” se:&nbsp;:",
    "Le grandezze sono espresse in unità fisiche&nbsp;",
  ],
  [
    "Il coefficiente di spesa indica:&nbsp;:",
    "Quante unità monetarie relative allo stesso bene sono necessarie per produrre una unità monetaria della branca j",
  ],
  [
    "Nella matrice dei coefficienti di fabbisogno diretto degli input di produzione interna ogni sua colonna indica:",
    "L’ammontare delle merci di origine interna richiesto direttamente dalla produzione unitaria della branca j",
  ],
  [
    "Ogni colonna della matrice dei coefficienti di fabbisogno diretto degli input primari esprime:&nbsp;:",
    "Gli input primari per unità di prodotto impiegati in ciascuna attività di produzione",
  ],
  [
    "Il calcolo dei coefficienti di spesa è utile perché consente di:&nbsp;:",
    "Collegare alla domanda finale gli input intermedi e gli input primari&nbsp;",
  ],
  [
    "Il calcolo degli indici di integrazione settoriale consente di:&nbsp;:",
    "Definire gli ambiti entro cui si propagano gli impulsi attivati dai singoli settori&nbsp;",
  ],
  [
    "L’indicatore wi consente di esprimere l’intensità dei collegamenti:",
    "A valle di ciascuna branca&nbsp;",
  ],
  [
    "La triangolarizzazione consiste nello:&nbsp;:",
    "Spostare righe e colonne in modo che i valori prossimi allo zero siano al di sopra della diagonale principale",
  ],
  [
    "In caso di trangolarizzazione perfetta il processo produttivo è:&nbsp;:",
    "Perfettamente lineare&nbsp;",
  ],
  [
    "Il metodo dell’inventario permanente si basa sull’idea che:&nbsp;:",
    "Lo stock di capitale in un dato istante di tempo corrisponde alla somma degli investimenti degli anni precedenti al netto degli ammortamenti&nbsp;",
  ],
  [
    "La classificazione dei beni capitali avviene secondo:",
    "La durata media della loro vita utile",
  ],
  [
    "Il capitale lordo si converte in capitale netto mediante:&nbsp;:",
    "La detrazione del cumulo degli ammortamenti di tutto il periodo di vita decorso&nbsp;",
  ],
  [
    "Il concetto di capacità produttiva indica:",
    "La massima produzione ottenibile nell’unità di tempo da uno stock di capitale utilizzato a livello normale",
  ],
  [
    "Il grado di utilizzazione degli impianti produttivi è dato dal:&nbsp;:",
    "Rapporto tra la produzione effettiva e la produzione potenziale&nbsp;",
  ],
  [
    "La capacità produttiva in senso tecnico si riferisce:&nbsp;:",
    "A parametri tecnici che esprimono l’utilizzazione massima teorica di un impianto&nbsp;",
  ],
  [
    "La misura della capacità produttiva avviene sulla base di:&nbsp;:",
    "Indagini dirette ed elaborazioni di variabili economiche",
  ],
  [
    "Il metodo della Wharton School consiste nel :&nbsp;:",
    "Calcolo di un indice che misura la capacità produttiva di tutti i fattori",
  ],
  [
    "Il metodo del rapporto capitale /prodotto si basa:&nbsp;:",
    "Sulla relazione tecnica che lega lo stock di capitale al prodotto ottenibile&nbsp;",
  ],
  [
    "Il metodo della Banca d’Inghilterra fornisce:&nbsp;:",
    "Una misura del grado di utilizzazione del capitale&nbsp;",
  ],
  [
    "La rilevazione delle forze di lavoro avviene…:",
    "Trimestralmente su base campionaria&nbsp;",
  ],
  [
    "Lo scopo della rilevazione delle forze di lavoro è…:",
    "Di accertarne la consistenza numerica e la distribuzione territoriale&nbsp;",
  ],
  [
    "Le forze di lavoro comprendono…:",
    "Gli occupati e le persone in cerca di occupazione&nbsp;",
  ],
  [
    "I sottoccupati sono…:",
    "Coloro che hanno lavorato un numero di ore inferiore a quello abituale",
  ],
  [
    "Tra forze di lavoro, popolazione attiva e popolazione in condizioneprofessionale vengono fatte distinzioni...:",
    "Nelle statistiche ufficiali",
  ],
  [
    "Il potenziale di lavoro disponibile indica…:",
    "Coloro che, in un dato momento, posseggono i requisiti fisici e giuridici per svolgere un’attività produttiva",
  ],
  [
    "Il concetto di capitale umano fa riferimento…:",
    "Alla capacità di un soggetto di produrre reddito&nbsp;",
  ],
  [
    "Il capitale umano corrisponde…:",
    "Alla quota di popolazione, tra i 15 e 65 anni, che partecipa al processo di produzione&nbsp;",
  ],
  [
    "Il valore del capitale umano si accresce per effetto…:",
    "Dell’istruzione e dell’addestramento&nbsp;",
  ],
  ["Il capitale umano può essere…:", "Tangibile ed intangibile"],
  [
    "Il tasso generico di attività rappresenta:",
    "Il rapporto tra popolazione attiva e popolazione totale&nbsp;",
  ],
  [
    "L’indice reale di dipendenza esprime:",
    "Il carico di inattivi per ogni attivo&nbsp;",
  ],
  [
    "Sui tassi specifici di attività si riflettono principalmente:",
    "Gli effetti di fattori sociali, economici e culturali che spingono gli individui a cercare lavoro&nbsp;",
  ],
  [
    "Nel terzo stadio di sviluppo della società cresce:",
    "La quota di popolazione che si dedica alle attività terziarie/servizi",
  ],
  [
    "Il tasso di professionalità industriale e dato dal rapporto tra:",
    "Le forze di lavoro del settore e l’ammontare totale delle forze lavoro&nbsp;",
  ],
  [
    "Statisticamente si considera “occupazione” :",
    "Solo l’attività che procura reddito monetario&nbsp;",
  ],
  [
    "Statisticamente sono considerati “disoccupati”:",
    "Quelli che vorrebbero lavorare, ma non possono&nbsp;",
  ],
  [
    "Alcuni studi condotti negli anni sessanta hanno messo in luce:",
    "L’esistenza di una relazione di breve periodo fra il livello dell’offerta di lavoro ed il livello della domanda aggregata di beni e servizi&nbsp;",
  ],
  [
    "Nell’ipotesi del “Lavoratore scoraggiato”:",
    "L’offerta di lavoro diminuisce al diminuire della domanda di lavoro",
  ],
  [
    "Nell’ipotesi del “Lavoratore addizionale”:",
    "Al crescere dell’occupazione diminuisce l’offerta di lavoro&nbsp;",
  ],
  [
    "Indicare quale di queste affermazioni sull'Istat è falsa:",
    "E' stato istituito con il D. L.vo n.322/89",
  ],
  [
    "I segni per la lettura delle pubblicazioni dell'Istat/Sistan sono:",
    "Una linea, quattro puntini o due puntini",
  ],
  [
    "I numeri relativi sono:",
    "Numeri calcolati su dati assoluti non arrotondati",
  ],
  [
    "La fonte più importante sulla capacità di spesa del Sistan e':",
    "L'Ufficio Italiano dei Cambi",
  ],
  [
    "La fonte dei dati (sul turismo internazionale  dell'Italia) dell’Ufficio Italiano dei Cambi e':",
    "I'indagine campionaria",
  ],
  ["Indicare in quante aree si divide lo STARNET:", "2"],
  [
    "Indicare quale di queste affermazioni sulle fonti  internazionali e' falsa:",
    "La Regions: Annuaire statistique diffonde, in modo sintetico, i risultati delle  indagini, di studi e di ricerche",
  ],
  [
    "Le due colonne con le quali si presenta la  seriazione corrispondono a:",
    "Modalita' e frequenze",
  ],
  [
    "La seguente affermazione: 'Si occupa della  distribuzione di due variabili congiuntamente considerate' si riferisce:",
    "All'analisi bivariata",
  ],
  [
    "Il rapporto statistico e':",
    "Un quoziente tra due termini di cui almeno uno e' di natura statistica",
  ],
  [
    "Indicare cosa mette in relazione il rapporto di consistenza:",
    "L'intensita' di un fenomeno in luoghi diversi o di due diversi fenomeni  in uno stesso luogo",
  ],
  [
    "Indicare a quale rapporto si riferisce la seguente  affermazione: 'Mette in relazione la consistenza media di un fenomeno con  l'ammontare del suo rinnovamento periodico'.",
    "Rapporto di durata",
  ],
  ["I numeri indici sono:", "Rapporti"],
  [
    "Indicare quale di queste proprieta' sui numeri indici non e'  vera:",
    "Relativita'",
  ],
  ["I numeri indici possono essere:", "Semplici e complessi"],
  [
    "C' e'connessione statistica quando:",
    "Un carattere si presenta con modalita' diverse ogni volta che  cambiano le modalita' dell'altro carattere",
  ],
  [
    "Si ha concordanza o discordanza quando:",
    "Entrambi i caratteri sono qualitativi",
  ],
  [
    "L'analisi della contingenza si basa su:",
    "La differenza tra frequenze effettive e frequenze teoriche",
  ],
  ["Le Contingenze cij si calcolano:", "cij = fij-Fij"],
  [
    "Quale di queste affermazioni sull'indice di  correlazione e' falsa:",
    "E' sempre positivo",
  ],
  [
    "Cosa indica la correlazione d'ordine:",
    "Il legame tra caratteri 'graduati'",
  ],
  [
    "Un modello di predittivo ha lo scopo di:",
    "\n\t\t\t  \tIpotizzare una possibilità giacchè, in un senso più profondo, non è possibile predire il futuro\t\t\t  ",
  ],
  [
    "Con il termine previsione in campo statistico si intende:",
    "\n\t\t\t  \tUn paradigma matematico dal valore meramente probabilistico\t\t\n\t\t\t  ",
  ],
  [
    "L'esempio del cigno nero è volto a demolire:",
    "\n\t\t\t  \tL'induttivismo\t\t\t  ",
  ],
  [
    "L'espressione steccata previsiva indica:",
    "\n\t\t\t  \tUna predizione errata\t\t\n\t\t\t  ",
  ],
  [
    "La predizione di Irving Fisher, secondo il quale la borsa nel 1929 aveva raggiunto un plateau costantemente elevato:",
    "\n\t\t\t  \tE' un esempio lapalissiano di steccata previsiva\t\t\t  ",
  ],
  [
    'La previsione della nota azienda Philips enucleata nel progetto "Vision of the Future":',
    "\n\t\t\t  \tSi è rivelata una previsione centrata\t\t\t  ",
  ],
  [
    "Felix Somary riteneva che:",
    "\n\t\t\t  \tPronosticare il futuro non fosse compito di statistici, matematici o accademici\t\t\t  ",
  ],
  [
    "Il tempo può essere definito come:",
    "\n\t\t\t  \tUn qualcosa di ineffabile e difficilmente rappresentabile in termini scientifici\t\t\t  ",
  ],
  [
    "Secondo il poeta Paul Valery:",
    "\n\t\t\t  \tIl futuro non è più come una volta\t\t\n\t\t\t  ",
  ],
  [
    "L'idea di uno spazio - tempo ricurvo è riferibile alla speculazione di:",
    "\n\t\t\t  \tHawking\t\t\t  ",
  ],
  [
    "In base a quanto appreso nella videolezione introduttiva, il futuro è:",
    "\n\t\t\t  \tNon anticipabile\t\t\t  ",
  ],
  [
    "Uno dei rischi afferenti alle previsioni sul futuro è:",
    "\n\t\t\t  \tL'analogia\t\t\t  ",
  ],
  [
    "Il sovvertimento delle previsioni effettuate dagli istituti di sondaggistica elettorale sono talora riconducibili a:",
    "\n\t\t\t  \tAutoinfluenzamento\t\t\n\t\t\t  ",
  ],
  [
    "Gli approcci per lo studio del futuro sono i seguenti:",
    "\n\t\t\t  \tEstrapolativo, simulativo, normativo\t\t\n\t\t\t  ",
  ],
  [
    "Prevedere per estrapolazione è come:",
    "\n\t\t\t  \tGuidareun'automobile seguendo le indicazioni di unapersona che guarda fuori dal lunotto posteriore\t\t\t  ",
  ],
  [
    "Implementando gli approcci previsionali allo studio della serie storica del petrolio e dei relativi prezzi...:",
    "\n\t\t\t  \tNon si indovinerebbe mai\t\t\t  ",
  ],
  [
    "Affinchè i paradigmi statistici si rivelino più accurati occorre:",
    "\n\t\t\t  \tConnettere i modelli quantitativi a una certa dose di divergenza, flessibilità e creatività\t\t\t  ",
  ],
  [
    "In statistica per breve periodo si intende:",
    "\n\t\t\t  \tUn lasso di tempo compreso convenzionalmente tra uno e tre anni\t\t\n\t\t\t  ",
  ],
  [
    "In statistica per medio periodo si intende:",
    "\n\t\t\t  \tUn lasso di tempo compreso convenzionalmente tra tre e cinque anni\t\t\t  ",
  ],
  [
    "Secondo recenti indagini di statistica economica, la maggior criticità planetaria sul lungo periodo sarà:",
    "\n\t\t\t  \tIl fabbisogno d'acqua\t\t\t  ",
  ],
  [
    "Lo studio della demografia assurge a chiave di volta preponderante nell'edificazione di modelli statistici in quanto:",
    "\n\t\t\t  \tLa disamina delle popolazioni risulta elemento ineludibile per qualsivoglia indagine statistica\t\t\n\t\t\t  ",
  ],
  [
    "Il termine statistica è etimologicamente riconducibile a:",
    "\n\t\t\t  \tStato, in senso economico e sociale\t\t\t  ",
  ],
  [
    "Con l'espressione rei publicae fundamentum ci si riferisce:",
    "\n\t\t\t  \tAi ruoli dell'aumentare della popolazione e dellesue ripartizioni\t\t\t  ",
  ],
  [
    "Una delle più evidenti anomalie demografiche in Cina è:",
    "\n\t\t\t  \tL'asimmetria demografica della natalità maschile, maggioritaria rispetto a quella femminile\t\t\t  ",
  ],
  [
    "Tra gli aspetti preponderanti degli studi demografici va rammentato:",
    "\n\t\t\t  \tLe problematiche della denatalità\t\t\t  ",
  ],
  [
    "Il censimento:",
    "\n\t\t\t  \tSe ne trova traccia anche nella Torah ebraica\t\t\t  ",
  ],
  [
    "L'ultimo censimento effettuato in Italia ammonta al:",
    "\n\t\t\t  \t2011\t\t\t  ",
  ],
  [
    "Attualmente, nel nostro Paese, il censimento su scala generale appare:",
    "\n\t\t\t  \tDestinato al declino\t\t\n\t\t\t  ",
  ],
  [
    "I dati definitivi relativi al censimento:",
    "\n\t\t\t  \tSono rilasciati anche a distanza di anni rispetto alla rilevazione\t\t\t  ",
  ],
  [
    "I quattro elementi da computare nei calcolo complessivo della popolazione sono:",
    "\n\t\t\t  \tNascite, decessi, immigrati, emigrati\t\t\t  ",
  ],
  [
    "Le indagini sui consumi effettuate dall'ISTAT si innestano a partire da:",
    "\n\t\t\t  \tRilievi sugli indici dei prezzi e sulle stime del reddito nazionale\t\t\t  ",
  ],
  [
    "I consumi interni sono:",
    "\n\t\t\t  \tRelativi al territorio nazionale, da parte di residenti e non residenti\t\t\t  ",
  ],
  [
    "Le rilevazioni ISTAT del 28/5/2014 hanno concluso che:",
    "\n\t\t\t  \tLa contrazione dei consumi era superiore rispetto a quella del reddito disponibile\t\t\t  ",
  ],
  [
    "Secondo l'originale  paradigma keynesiano (oggi in parte superato):",
    "\n\t\t\t  \tI consumi variano in ragione direttamente e simultaneamente proporzionale al variare del reddito familiare disponibile\t\t\n\t\t\t  ",
  ],
  [
    'Con l\'espressione "povertà assoluta" intendiamo:',
    "\n\t\t\t  \tLa spesa minima necessaria per unpaniere di beni e servizi essenziale ad uno standard divita minimamente accettabile\t\t\t  ",
  ],
  [
    "Secondo il distillato ISTAT del 28/5/2014, la povertà relativa è ascritta:",
    "\n\t\t\t  \tRiguarda il 12,6% delle famiglie\t\t\t  ",
  ],
  [
    "L'indagine ISTAT sui consumi:",
    "\n\t\t\t  \tSi estende a tutte le regioni, conun campione a due stadi: il primo è rappresentatodai comuni, il secondo dalle famiglie\t\t\t  ",
  ],
  [
    "I risultati delle indagini ISTAT sui consumi sono particolarmente funzionali:",
    "\n\t\t\t  \tAgli studi sugli indici dei prezzi\t\t\t  ",
  ],
  [
    "Le indagini della Nielsen:",
    "\n\t\t\t  \tHanno carattere continuativo e si basano su un campione di 9000 famiglie\t\t\t  ",
  ],
  [
    "Le indagini della Nielsen si rivelano efficaci:",
    "\n\t\t\t  \tPer poter avere una copertura delle iniziative di marketing\t\t\n\t\t\t  ",
  ],
  [
    "Gli indici dei prezzi al consumo misurano:",
    "\n\t\t\t  \tLe variazioni nel tempo dei prezzi di un paniere di beni e servizi rappresentativi di tutti quelli destinati al consumo finale delle famiglie presenti sul territorio nazionale e acquistabili sul mercato\t\t\t  ",
  ],
  [
    "Gli indici dei prezzi al consumo sono calcolati:",
    "\n\t\t\t  \tUtilizzando l'indice a catena del tipo Laspeyres in cui sia il paniere sia il sistema di pesi vengono aggiornati annualmente\t\t\t  ",
  ],
  [
    "L'Istat produce tre diversi indici dei prezzi alconsumo:",
    "\n\t\t\t  \tL'Indice Nazionale dei prezzi per l'interacollettività (NIC); l'Indice dei prezzi al consumo per le famiglie di operai e impiegati (FOI); l'indice dei prezzi al consumo armonizzato per i paesi dell'Unione Europea (IPCA)\t\t\n\t\t\t  ",
  ],
  [
    "L' IPCA è stato sviluppato:",
    "\n\t\t\t  \tNessuna delle altre risposte è corretta\t\t\t  ",
  ],
  [
    "Il paniere utilizzato per il NIC:",
    "\n\t\t\t  \tE' composto da 1.447 prodotti, aggregati in 614 posizioni rappresentative\t\t\t  ",
  ],
  [
    "Ai sensi della legge n. 621/1975:",
    "\n\t\t\t  \tL'obbligo di condurre l'indagine riguarda “tutti i comuni capoluogo di provincia e quelli con oltre 30.000 abitanti che abbiano un ufficio di statistica idoneo”\t\t\t  ",
  ],
  [
    "Con riferimento alla struttura della classificazione adottata per gli indici 2015:",
    "\n\t\t\t  \tSi desume che dal 1989 al 2014 la svalutazione è stata quasi del 50%\t\t\n\t\t\t  ",
  ],
  [
    "La struttura di ponderazione:",
    "\n\t\t\t  \tViene effettuata mediante l'utilizzo dei dati relativi ai consumi finali delle famiglie stimati dalla contabilità nazionale dell'ISTAT e di quelli derivanti dall'indagine sui consumi delle famiglie oltre che da altre fonti ausiliari\t\t\t  ",
  ],
  [
    "Nel NIC e nel FOI sono incluse:",
    "\n\t\t\t  \tLe spese sostenute dalla Pubblica Amministrazione per i consumi di prodotti farmaceutici e la fruizione dei servizi sanitari da parte delle famiglie che risultano, invece, escluse dal calcolo dell'IPCA\t\t\t  ",
  ],
  [
    "Con riferimento agli indici dei prezzi al consumo, i Comuni capoluogo che effettuano la rilevazione per l'intero paniere:",
    "\n\t\t\t  \tSono 80, pari al 26,1 della popolazione\t\t\t  ",
  ],
  ["L'indagine Excelsior è rivolta:", "\n\t\t\t  \tAlle imprese\t\t\t  "],
  [
    "L'indagine Excelsior è realizzata da:",
    "\n\t\t\t  \tUnioncamere con il sostegnodel Ministero del Welfare\t\t\t  ",
  ],
  [
    "Il Sistema Informativo Excelsior:",
    "\n\t\t\t  \tSi colloca stabilmente, a partire dal 1997, tra le maggiori fonti informative disponibili in Italia sui temi del mercato del lavoro e della formazione ed è inserito tra le indagini con obbligo di risposta previste dal Programma Statistico Nazionale\t\t\t  ",
  ],
  [
    "I dati raccolti dall'Indagine Excelsior:",
    "\n\t\t\t  \tMettono a disposizione degli utenti una serie di informazioni sulla domanda di lavoro delle imprese in Italia e sulle principali caratteristiche (età, livello di istruzione, esperienza, difficoltà di reperimento, necessità di ulteriore formazione ecc.) delle figure professionali richieste\t\t\n\t\t\t  ",
  ],
  [
    "Attraverso il Sistema Informativo Excelsior èpossibile:",
    "\n\t\t\t  \tQuantificare in modo puntuale il fabbisogno occupazionale e di professionalità per il breve e medio periodo distinto per le 105 province italiane (con l'inclusione delle province di Monza e Brianza e Fermo) e disaggregato per classe dimensionale e per attività economica di impresa\t\t\t  ",
  ],
  [
    "L'indagine Excelsior fa riferimento:",
    "\n\t\t\t  \tA un campione di imprese fino a 50 dipendenti e considera invece l'universo delle imprese con oltre 50 dipendenti\t\t\t  ",
  ],
  [
    "Dall' indagine ISTAT si traggono, tra gli altri, i dati relativi al seguente fenomeno e/o indice:",
    "\n\t\t\t  \tForze di lavoro\t\t\n\t\t\t  ",
  ],
  [
    'Nella categoria "inattivi" o "non forze lavoro" vanno sussunti:',
    "\n\t\t\t  \tPersone non occupate né in cerca di occupazione\t\t\t  ",
  ],
  [
    "I dipendenti assenti dal lavoro sono consideratioccupati se:",
    "\n\t\t\t  \tL'assenza non supera i tre mesi, oppure se continuano a percepire almeno il 60% della retribuzione\t\t\t  ",
  ],
  [
    "L'indagine campionaria sulle forze di lavoro è condotta dall'Istat:",
    "\n\t\t\t  \tE' stata ristrutturata nel 2004, a seguito di un Regolamento del Consiglio dell'Unione Europea\t\t\n\t\t\t  ",
  ],
  [
    "I campioni non casuali:",
    "\n\t\t\t  \tSono estratti per il tramite di un preciso algoritmo razionale\t\t\t  ",
  ],
  [
    "Il termine sondaggio:",
    "\n\t\t\t  \tVa tutelato come sinonimo di campione statistico\t\t\t  ",
  ],
  [
    "Al sondaggio come metodo di ricerca:",
    "\n\t\t\t  \tNon vanno ascritti servizi giornalistici e simili\t\t\t  ",
  ],
  [
    "Le indagini campionarie posono innestarsi a partire da:",
    "\n\t\t\t  \tCampioni casuali e campioni non probabilistici\t\t\t  ",
  ],
  [
    "Le componenti di errori non campionari possono afferire a:",
    "\n\t\t\t  \tListe, sostituzione di irreperibili, questionari\t\t\n\t\t\t  ",
  ],
  [
    "Le risposte inesatte relative ad un sondaggio sono raggruppabili in tre tipologie fondamentali:",
    "\n\t\t\t  \tRelative al passato, relative al futuro, menzogne\t\t\t  ",
  ],
  [
    "Il coefficiente di correlazione fu introdotto ad uso statistico:",
    "\n\t\t\t  \tAlla fine del XIX secolo\t\t\t  ",
  ],
  [
    "Nel 1802 Laplace aveva effettuato una stima sulla numerosità della popolazione francese attraverso una rilevazione condotta ad hoc:",
    "\n\t\t\t  \tSul 7% di quella complessiva\t\t\t  ",
  ],
  [
    "Anders Nicolai Kiaer – che diresse il Central Bureau di statistica norvegese dal 1876 (anno di costituzione) al 1913 – presentò alla riunione dell'InternationalStatistical Istitute (ISI), svoltasi a Berna nel 1895,una proposta innnovativa, foriera di notevoli sviluppi:",
    "\n\t\t\t  \tProspettò la possibilità di effettuare rilevazioni non esaustive, in grado di fornire un attendibile quadro della realtà complessivaa\t\t\n\t\t\t  ",
  ],
  [
    "Alla luce delle critiche mosse alla pionieristica proposta di Kiaer, si può concludere che:",
    "\n\t\t\t  \tIl campione avrebbe dovuto il 15% circa dei dati censurati\t\t\t  ",
  ],
  [
    "E' indispensabile, una volta formulato il questionario:",
    "Sottoporlo a una prova con modalità sperimentali",
  ],
  [
    "Nella somministrazione di un questionario, uno dei maggiori rischi di natura psicologica è:",
    "Il rischio di acquiescenza, ossia una sorta di reticenza da parte dell'intervistatore nell'ammettere personali lacune epistemiche",
  ],
  [
    "Gli aspetti oggetto di un’intervista possono essereclassificati in cinque categorie:",
    "Fatti, conoscenze, opinioni, atteggiamenti, motivazioni",
  ],
  [
    "Per decine di anni, nei questionari relativi alla stima del reddito si è fatto ricorso a due domande concatenate:",
    "La prima sul reddito necessario, la seconda sul reddito effettivo",
  ],
  [
    "In riferimento a redditi bassi, le rilevazioni tradizionali hanno sovente condotto:",
    "A campionamenti statisticamente rilevanti, per quanto non omogenei",
  ],
  [
    "Tra i seguenti, un riguardevole criterio empirico nella formulazione dei quesiti sulle intenzioni di acquisto è:",
    "Quello di evitare formulazioni generiche",
  ],
  [
    "Quanto alla valutazione delle intenzioni di acquisto, è auspicabile che:",
    "Le classi tra le quali suddividere le manifestazioni di unavariabile siano il più spesso possibile formate ex post",
  ],
  [
    "In un questionario teso a profilare le intenzioni d'acquisto, le domande:",
    "Seguiranno una successioneordinata secondo criteri psicologici",
  ],
  [
    "All'interno di un questionario indirizzato alla statisticazione delle intenzioni d'acquisto, è possibile individuare un quesito mal posto dal seguente elemento:",
    'Una cospicua porzione degli intervistati elude la domanda ricorrendo al refugium ignorantiae garantito dalla risposta "non so"',
  ],
  [
    "Le scale ordinali cosiddette di Likert prevedono che perogni item:",
    "Siano rilevati diversi livelli diaccordo/disaccordo",
  ],
  [
    "Il Sistema di informazioni statistiche della Contabilità Nazionale descrive:",
    "In termini quantitativi l'attività economica di un Paese",
  ],
  [
    "La Contabilità Nazionale è realizzata secondo schemi che:",
    "Garantiscono la confrontabilità delle grandezze economiche misurate",
  ],
  [
    "Il SEC 95 – il Sistema europeo dei conti nazionali e regionali - permette:",
    "Una descrizione quantitativa completa e comparabile dell'economia dei paesi membri dell'attuale Unione europea",
  ],
  [
    "In Italia i conti nazionali sono costruiti annualmente da:",
    "Dall'Istituto Nazionale di Statistica (ISTAT)",
  ],
  [
    "La Relazione sulla situazione economica del paese contiene:",
    "I conti economici nazionali relativi all'anno precedente",
  ],
  [
    "Le categorie di soggetti (o operatori che agiscono nel sistema economico), osservati dalla Contabilità Nazionale, sono:",
    "Imprese, Famiglie, Pubbliche Amministrazioni e Resto del mondo",
  ],
  [
    "Le transazioni economiche, ovvero lo  scambio di beni, servizi o attività finanziare a titolo oneroso o non oneroso hanno carattere:",
    "Bilaterale e si realizza attraverso scambi tra operatori sul mercato",
  ],
  [
    "L'insieme di transazioni dello stesso tipo in un determinato periodo contabile definisce:",
    "Flusso aggregato di transazioni",
  ],
  [
    "La Contabilità Nazionale, attraverso i cosiddetti conti patrimoniali, descrive:",
    "Gli stock delle attività reali e finanziarie e delle passività finanziarie detenute dagli operatori alla fine (e all'inizio) del periodo contabile",
  ],
  [
    "Le pubbliche amministrazioni (in sigla PA) producono:",
    "Servizi non destinabili alla vendita",
  ],
  [
    "I tre stadi fondamentali del processo economico descritti dalla Contabilità Nazionale sono:",
    "La formazione e l'impiego delle risorse, la distribuzione e redistribuzione del reddito, la formazione del capitale",
  ],
  [
    "Gli “aggregati” che si determinano in uno stadio del processo economico figurano:",
    "In uno o più conti o equazioni contabili che descrivono quello stadio",
  ],
  [
    "Il prodotto lordo, reddito nazionale, reddito disponibile, risparmio svolgono:",
    "Una funzione di collegamento tra le diverse equazioni contabili",
  ],
  [
    "Il mercato dei fattori produttivi primari e quello dei beni finali possono essere rappresentati;",
    "Dal classico schema che ne descrive due circuiti, uno reale e uno monetario",
  ],
  [
    "Il valore della produzione finale, che per definizione è dato dalla somma dei costi sostenuti per realizzarla, coincide con:",
    "Le remunerazioni dei fattori produttivi primari",
  ],
  [
    "La Contabilità Nazionale è un sistema integrato di equazioni contabili, ognuna delle quali descrive:",
    "Uno stadio del processo economico ed è collegata alla successiva",
  ],
  [
    "L'aggregato Valore aggiunto (o prodotto lordo) è come differenza tra altri aggregati:",
    "Il Valore della Produzione e il Valore dei Consumi Intermedi",
  ],
  [
    "Il valore dei consumi intermedi è dato:",
    "Dalla somma di tutti gli acquisti di beni e servizi intermedi da parte delle medesime imprese",
  ],
  [
    "In economia chiusa, il Risparmio, per assicurare un consumo futuro, dovrà:",
    "Essere destinato all'acquisto di beni di investimento",
  ],
  [
    "Indicare cosa s'intende per Consumi intermedi:",
    "Il valore dei beni e dei servizi consumati quali input in un processo di produzione",
  ],
  [
    "Per i paesi europei il sistema di Contabilità Nazionale utilizzato a partire dal 1999 è:",
    "Il Sistema Europeo dei Conti SEC2010",
  ],
  [
    "Per gli aggregati di Contabilità Nazionale dei paesi europei, sono stati fissati una serie di norme e definizioni atti a garantire:",
    "La Confrontabilità",
  ],
  [
    "Il territorio economico dove sono compiute le operazioni rilevanti per la Contabilità Nazionale di un paese è per lo più costituito:",
    "Dal territorio geografico",
  ],
  [
    "Per un operatore appartenente al sistema economico di un Paese europeo, per Centro di Interesse Economico s'intende:",
    "Il luogo dove svolge una attività economica significativa a tempo indeterminato",
  ],
  [
    "Posto che gli operatori economici sono centri elementari di decisione economica; questi sono caratterizzati:",
    "Da autonomia di decisione in campo economico e finanziario",
  ],
  [
    "Il Sistema Europeo dei Conti SEC95 definisce gli operatori economici come:",
    "Unità istituzionali",
  ],
  [
    "Il settore, denominato dal SEC95 Istituzioni sociali private (ISP), comprende:",
    "Tutti gli organismi senza scopo di lucro dotati di personalità giuridica che producono servizi",
  ],
  [
    "Per unità di attività economica a livello locale (UAELL) s'intende:",
    "La cellula operativa di tipo funzionale caratterizzata da un'unica attività e un processo di produzione e un output omogeneo",
  ],
  [
    "Le operazioni economiche sono classificate in tre classi fondamentali:",
    "Le operazioni su beni e servizi, quelle di distribuzione e redistribuzione del reddito e della ricchezza e quelle su strumenti finanziari",
  ],
  [
    "Le operazioni su beni e servizi o su strumenti finanziari sono sempre:",
    "Bilaterali",
  ],
  [
    "Il SEC stabilisce che l'Attività di Produzione è:",
    "è un flusso di beni o servizi atto a soddisfare bisogni",
  ],
  [
    "Le Attività Informali Esplicitate dal SEC95 e quindi comprese nelle Attività di Produzione sono:",
    "Quelle che riguardano unità istituzionali caratterizzate da relazioni di lavoro basate su vincoli di parentela o relazioni personali",
  ],
  [
    "Le Attività rientranti nel così detto Sommerso Economico rientrano:",
    "Quelle originate dalla volontà di una parte delle imprese di evadere il fisco o i contributi sociali",
  ],
  [
    "Nell'ambito del concetto di Produzione sono identificabili tre categorie di beni e servizi:",
    "Quelli destinabili alla vendita, quelli destinati ad uso finale del produttore e quelli non destinabili alla vendita",
  ],
  [
    "La Produzione e il Valore Aggiunto a livello di impresa, sono dati:",
    "Dal valore dei beni e servizi prodotti in un dato intervallo di tempo e che sono stati venduti",
  ],
  [
    "I flussi che formano gli aggregati della Contabilità Nazionale vengono in genere valutati:",
    "Ai prezzi di mercato",
  ],
  [
    "L'aggregato Consumi Finali rappresenta:",
    "La spesa sostenuta per soddisfare i bisogni",
  ],
  [
    "Gli investimenti lordi - da parte dei produttori di beni destinati a generare reddito  - sono costituiti:",
    "Dalle acquisizioni, al netto delle cessioni",
  ],
  [
    "Le importazioni e le esportazioni di beni comprendono:",
    "Gli scambi di merci a titolo oneroso o gratuito tra residenti e non residenti",
  ],
  [
    "Le fasi della distribuzione e ridistribuzione del reddito riguardano:",
    "Le operazioni mediante le quali il risultato della attività produttiva viene ripartito tra i soggetti titolari dei fattori produttivi",
  ],
  [
    "I flussi di reddito che compaiono nei conti della Distribuzione Primaria del Reddito sono detti:",
    "Redditi primari",
  ],
  [
    "I Redditi da lavoro dipendente sono:",
    "Composti dalle retribuzioni lorde e dai contributi sociali effettivi e figurativi",
  ],
  [
    "Il saldo aggregato dei redditi primari delle unità residenti costituisce:",
    "Il Reddito Nazionale",
  ],
  [
    "La Distribuzione Secondaria del Reddito rappresenta:",
    "L'insieme dei trasferimenti obbligatori o volontari di risorse tra le unità istituzionali, non dipendenti dall'impiego di fattori produttivi",
  ],
  [
    "Il Risultato netto di gestione, è composto da:",
    "Un insieme di redditi da capitale e d'impresa ricevuti in cambio dell'impiego di tali attività e fattori nel processo produttivo",
  ],
  [
    "Il SEC95 prevede che la distribuzione primaria del reddito venga descritta attraverso due conti:",
    "Conto della generazione del reddito e quello della attribuzione dei redditi primari",
  ],
  [
    "Il risultato di gestione e i redditi misti esprimono:",
    "Il reddito da capitale-impresa delle società e i redditi misti dei lavoratori in proprio e delle micro-imprese familiari",
  ],
  [
    "I trasferimenti in conto capitale sono:",
    "Flussi unilaterali (in denaro o in natura) prevalentemente erogati o prelevati dalle PA nell'ambito dei processi di accumulazione",
  ],
  [
    "La ricchezza nazionale esprime:",
    "Il valore di tutte le attività reali e finanziarie, al netto delle passività, possedute dai soggetti economici del paese in un determinato momento",
  ],
  [
    "La bilancia dei pagamenti di un paese registra:",
    "Sia gli esborsi effettuati, sia gli introiti percepiti",
  ],
  [
    "Le transazioni internazionale che vengono registrati nella bilancia dei pagamenti sono:",
    "Le esportazioni ed importazioni di beni e servizi, i  trasferimenti di ricchezza tra paesi e gli acquisti o vendite di attività finanziarie",
  ],
  [
    "Il Conto Corrente della bilancia dei pagamenti di un paese include:",
    "Le esportazioni e le importazioni",
  ],
  [
    "Il Conto Finanziario della bilancia dei pagamenti di un paese, misura:",
    "La differenza tra le vendite di attività finanziarie agli stranieri e gli acquisti di attività finanziarie emesse all'estero",
  ],
  [
    "Per posizioni lavorative si definiscono:",
    "I contratti contratto di lavoro, esplicito o implicito, tra una persona e una unità produttiva residente, finalizzato allo svolgimento di una attività produttiva retribuita",
  ],
  [
    "La principale fonte statistica per l'analisi del mercato del lavoro è:",
    "La rilevazione delle forze di lavoro",
  ],
  [
    "Le forze di lavoro sono costituite da:",
    "Le persone residenti che lavorano o comunque esprimono la volontà di lavorare",
  ],
  [
    "Le persone in cerca di occupazione sono:",
    "Le persone non occupate che sono alla ricerca “attiva” di una occupazione e sono immediatamente disponibili a lavorare",
  ],
  [
    "Lo stock di capitale netto misura:",
    "Il valore dei beni durevoli impiegati nel processo produttivo al netto della perdita di valore da essi subita con il tempo a seguito della obsolescenza economica, perdita di valore misurata dagli ammortamenti",
  ],
  [
    "Indicare quale di queste affermazioni sulla rappresentazione grafica e' vera",
    "Coglie con immediatezza le principali caratteristiche della distribuzione statistica",
  ],
  ["L'istogramma:", "Una rappresentazione di mutabili"],
  [
    "Un diagramma a settori circolari e':",
    "Un metodo di rappresentazione delle parti che compongono il totale tramite settori di un cerchio",
  ],
  [
    "Indicare quale di questi grafici ha come coordinate l'argomento ed il raggio vettore:",
    "Il diagramma polare",
  ],
  [
    "La principale rappresentazione del cartogramma e':",
    "La distribuzione geografica",
  ],
  ["Le coordinate del diagramma cartesiano sono:", "Ascissa ed ordinata"],
  [
    "Quale di queste rappresentazioni grafiche non utilizza variabili continue:",
    "Il cartogramma",
  ],
  [
    "Quale di queste affermazioni sul poligono di frequenza e' vera",
    "Permette di congiungere fra loro i punti centrali delle basi",
  ],
];
