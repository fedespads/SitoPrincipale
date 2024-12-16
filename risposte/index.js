let box = document.querySelector(".box");
let input = document.querySelector("input");
let a;
input.addEventListener("input", function () {
  const inputValue = input.value.toLowerCase().trim();
  box.innerHTML = "";

  if (inputValue !== "") {
    const filteredItems = all.filter(
      (e) =>
        e[0].toLowerCase().includes(inputValue) ||
        e[1].toLowerCase().includes(inputValue)
    );

    const htmlElements = filteredItems.map(
      (e) =>
        `<div class="elemento"><div class="domanda">${
          e[0]
        }</div><div class="risposta">${
          e[1].includes("<img") ? e[1] : escapeHTML(e[1])
        }</div></div>`
    );
    console.log(htmlElements);
    box.innerHTML = htmlElements.join("");
  }
});
input.addEventListener("focus", function () {
  this.value = "";
});

let all = [
  [
    "Per diventare un Manager:",
    'Bisogna studiare il management e praticarlo"\n                    ',
  ],
  [
    "Gli elementi per l'Analisi e la Progettazione dei Processi Aziendali sono:",
    "L'organizzazione d'impresa, i processi decisionali, il marketing e gli acquisti",
  ],
  [
    "L'organizzazione d'impresa e i processi decisionali sono legati tra loro in quanto:",
    "L'articolazione degli obiettivi generali in sotto-obiettivi strumentali deve essere coerente con il disegno organizzativo e gli aspetti meno visibili ma più resistenti dell'organizzazione influenzano fortemente i processi decisionali strategici delle imprese\"\n                    ",
  ],
  [
    "Un Manager deve essere in grado di:",
    "Organizzare e mobilitare le risorse verso obiettivi innovativi",
  ],
  [
    "In generale, il termine organizzazione fa riferimento:",
    "A circostanze in cui un insieme d'individui condivide uno scopo comune, che può essere perseguito tramite azioni collettive",
  ],
  [
    "L'organizzazione può essere definita:",
    "Come istituzione sociale e come atto dell'organizzare",
  ],
  [
    "Il problema centrale della specializzazione e del coordinamento del lavoro è stato studiato:",
    'Da un punto di vista manageriale, sociologico e politico"\n                    ',
  ],
  [
    "Le tematiche organizzative afferenti alle prospettive del pensiero organizzativo riguardano:",
    "Gli aspetti tecnologici, burocratici e decisionali",
  ],
  [
    "La questione tecnologica affronta la relazione complessa tra:",
    "Le tecnologie e le variabili più propriamente organizzative",
  ],
  [
    "L'apparato amministrativo per l'esercizio dell'autorità formale è costituito:",
    "Dalle pubbliche amministrazioni e dalle grandi imprese private industriali e di servizi",
  ],
  [
    "Specializzazione e coordinamento sono due fenomeni che:",
    "Procedono di pari passo e assumono importanza nonché criticità al crescere delle dimensioni dell'organizzazione",
  ],
  ["Organizzazione e  crescita sono due fenomeni:", "Intimamente collegati"],
  [
    "Le imprese crescono di dimensioni anche per:",
    "Sfruttare le economie di scala",
  ],
  [
    "Una delle forze che si oppone alla crescita organizzativa è:",
    "Il timore di perdere la flessibilità e l'agilità che le piccole dimensioni talvolta sembrano garantire meglio",
  ],
  [
    "Dopo una o più fasi di crescita di un'organizzazione, inizia:",
    "Il declino e, spesso, la contrazione dimensionale dell'organizzazione medesima, che può concludersi nell'estinzione o nell'incorporazione della stessa da parte di altre organizzazioni più vitali\"\n                    ",
  ],
  [
    "Verso la metà degli anni '80, l'organizzazione dell'azienda \"Bodin\" era:",
    "Piuttosto semplice",
  ],
  [
    'Il caso dell\'azienda "Bodin" consente di comprendere meglio come:',
    "Con la crescita e il progredire della specializzazione, l'organizzazione si modifica, emergono problemi nuovi e cambiano i meccanismi di base per il coordinamento",
  ],
  [
    "La specializzazione verticale comporta:",
    "La separazione tra la progettazione del lavoro e la sua esecuzione",
  ],
  [
    "La specializzazione orizzontale comporta:",
    'La parcellizzazione del lavoro, attribuendo poche semplici attività a ciascuno degli operatori"\n                    ',
  ],
  [
    "I ruoli professionali si hanno quando:",
    "Un'alta specializzazione orizzontale si accompagna a una bassa specializzazione verticale",
  ],
  [
    "L'adattamento reciproco:",
    "Gioca un ruolo dominante in organizzazioni complesse e con elevati livelli di specializzazione, soprattutto in presenza d'incertezza e ambiguità",
  ],
  [
    "Con la supervisione diretta, il numero di subordinati per capo:",
    "Non può crescere troppo, altrimenti il coordinamento fallisce",
  ],
  [
    "La standardizzazione dei processi:",
    "Incontra seri limiti in contesti innovativi",
  ],
  [
    "Con la standardizzazione dei risultati:",
    'Ciò che viene prefissato è il risultato"\n                    ',
  ],
  [
    "La standardizzazione delle competenze:",
    "E' strettamente connessa alla formazione",
  ],
  [
    "Per un determinato processo aziendale:",
    "All'aumentare del grado di specializzazione orizzontale, diminuiscono i costi d'esecuzione",
  ],
  [
    "In uno specifico processo aziendale:",
    "All'aumentare del grado di specializzazione orizzontale, aumentano i costi di coordinamento",
  ],
  [
    "La progettazione microstrutturale:",
    "S'incrocia con la gestione delle risorse umane",
  ],
  [
    "I processi aziendali sono:",
    'Insiemi organizzati di attività e di decisioni, finalizzati alla realizzazione di output (prodotti, servizi, informazioni) effettivamente richiesti dai clienti (o dagli utenti) e ai quali questi attribuiscono un "valore" ben definito',
  ],
  [
    "Oggi, gli obiettivi aziendali:",
    'Devono soddisfare gli shareholders e gli stakeholders"\n                    }\n                 \n            ',
  ],
  [
    "Un individuo con una capacità superiore rispetto a un altro individuo:",
    "Può ottenere una prestazione maggiore rispetto a quella dell'altro individuo, quando la motivazione di entrambi gli individui è la stessa ed è bassa",
  ],
  [
    "Secondo le teorie del contenuto, i fattori alla base della motivazione sono:",
    "La scala dei bisogni, i fattori duali nonché il successo, il potere e l'affiliazione\"\n                    ",
  ],
  [
    "Secondo le teorie del processo, i meccanismi che spiegano il formarsi, il consolidarsi e l'estinguersi della motivazione sono:",
    "I rinforzi, il goal-setting, l'aspettativa, la valenza e l'equità",
  ],
  [
    "Secondo la teoria della scala dei bisogni di Maslow, i livelli progressivi sono:",
    "I bisogni fisiologici, di sicurezza, di appartenenza, di stima e di autorealizzazione",
  ],
  [
    "Secondo la teoria dei fattori duali di Herzberg:",
    "La presenza di fattori igienici non migliora la prestazione",
  ],
  ["Nelle organizzazioni si formano:", "Sia gruppi formali che informali"],
  [
    "Secondo Pilati, affinché un gruppo funzioni, è necessario un processo riconducibile a:",
    "Quattro fasi (forming, storming, norming e performing)",
  ],
  [
    "Le criticità frequentemente riportate e afferenti ai gruppi riguardano:",
    "La deresponsabilizzazione, il conformismo e l'inerzia sociale",
  ],
  [
    "Le situazioni di conflitto possono essere ricondotte:",
    'A fattori individuali, contingenti e organizzativi"\n                    ',
  ],
  [
    "I fattori contingenti sono:",
    'Legati a situazioni specifiche"\n                    }\n                 \n            ',
  ],
  [
    "La progettazione organizzativa:",
    "Definisce il contenuto del lavoro e il ruolo dei singoli individui all'interno dell'organizzazione, intervenendo, ove necessario, per sviluppare le competenze e le capacita delle persone che operano all'interno dell'organizzazione medesima\"\n                    ",
  ],
  [
    "I concetti chiave della progettazione microstrutturale sono:",
    "Il compito, la mansione, la posizione individuale e il ruolo",
  ],
  [
    "La stessa mansione può essere assegnata:",
    "A più posizioni individuali, in funzione del volume delle attività",
  ],
  [
    "In un poliambulatorio medico, il processo di supporto prevede, quali compiti base:",
    "L'informazione, la prenotazione, l'accoglienza, l'amministrazione e la consegna",
  ],
  [
    "Le interdipendenze possono essere:",
    "Sequenziali, reciproche, legate alle risorse e spazio-temporali",
  ],
  ["Il job enrichment conduce a:", "Ruoli manageriali di livello elevato"],
  [
    "Una caratteristica delle mansioni professionali è:",
    "La conoscenza tecnica",
  ],
  [
    "La formalizzazione del comportamento si ottiene:",
    "Attraverso il mansionario, le norme e le procedure",
  ],
  [
    "In un sistema meccanico:",
    "Gli individui sono sostituibili in ogni momento",
  ],
  ["La formazione:", "Contribuisce alla socializzazione"],
  [
    "Un'unità organizzativa è, per esempio:",
    "Il dipartimento di un'università",
  ],
  [
    "L'ampiezza del controllo:",
    "E' maggiore se maggiore è la dimensione dell'unità organizzativa governata da un supervisore",
  ],
  [
    "Quando si progetta un'organizzazione:",
    'Le sue dimensioni orizzontali e verticali devono essere bilanciate"\n                    ',
  ],
  [
    "Gli organi di staff si occupano:",
    "Anche della gestione delle risorse umane",
  ],
  [
    "Le unità organizzative direttive:",
    "Sono caratterizzate da bassi livelli di standardizzazione",
  ],
  ["Le unità organizzative permanenti:", "Non hanno limitazioni di tempo"],
  [
    "I criteri di raggruppamento possibili sono:",
    "Quello del raggruppamento numerico e quelli di raggruppamento orientati agli input nonché agli output",
  ],
  [
    "Il criterio del raggruppamento in base alle conoscenze e capacità utilizzate per svolgere le mansioni:",
    "Rientra nella tipologia dei criteri di raggruppamento orientati agli input",
  ],
  [
    "Il criterio del raggruppamento in base al cliente:",
    'Rientra nella tipologia dei criteri di raggruppamento orientati agli output"\n                    ',
  ],
  [
    "La struttura organizzativa adottata è determinata:",
    "Dal bilanciamento tra le esigenze di efficienza e di efficacia ai diversi livelli gerarchici dell'organizzazione e dal conseguente utilizzo dei criteri di raggruppamento",
  ],
  [
    "Le principali soluzioni per il coordinamento fra unità organizzative sono:",
    "I ruoli di collegamento, i manager integratori, i team interfunzionali, i sistemi di pianificazione e controllo nonché i sistemi informativi aziendali",
  ],
  [
    "I ruoli di collegamento inglobano, quale meccanismo di coordinamento:",
    "Il mutuo adattamento",
  ],
  [
    "I sistemi di pianificazione e controllo inglobano, quale meccanismo di coordinamento principale:",
    "La standardizzazione degli obiettivi",
  ],
  [
    "Le strutture organizzative tipiche sono:",
    "Quelle semplici, funzionali, divisionali, ibride e a matrice",
  ],
  [
    "Una struttura semplice:",
    "Accentra tutte le decisioni nelle mani dell'impreditore o proprietario\"\n                    ",
  ],
  [
    "Una struttura divisionale:",
    'Riduce la possibilità di ottenere economie di scala"\n                    ',
  ],
  [
    "Una struttura funzionale:",
    "Facilita il raggiungimento di economie di scala",
  ],
  ["La struttura organizzativa ibrida:", "E' la più diffusa"],
  [
    "Una struttura a matrice:",
    "Non applica il principio dell'unicità del comando",
  ],
  ["La gestione di una struttura a matrice:", "Presenta diverse difficoltà"],
  [
    "Il progetto di cambiamento di Cobra Automotive Technologies, avviato nel 2003 e volto a ridisegnare l'organizzazione secondo nuovi principi, ha previsto le seguenti fasi:",
    "La mappatura dei processi aziendali, l'individuazione delle key performance dei processi, l'individuazione dei process owner, la selezione dei processi chiave e la definizione di una modalità di monitoraggio nonché di miglioramento continuo dei processi",
  ],
  [
    "I processi chiave di Cobra Automotive Technologies riguardano:",
    'Il mercato, le operazioni  tecniche, le operations e il supporto"\n                    ',
  ],
  [
    "Nell'ambito dei processi chiave di Cobra Automotive Technologies, alle operazioni tecniche, afferiscono:",
    "I prodotti e i processi nonché la progettazione e lo sviluppo",
  ],
  [
    "I fattori competitivi che hanno spinto diverse aziende ad adottare un orientamento ai processi sono:",
    "L'orientamento al cliente, la time-based competition, la ricerca congiunta di efficienza ed efficacia nonché la necessità di canalizzare le risorse e le competenze verso i risultati",
  ],
  [
    "Gli elementi che caratterizzano un processo aziendale sono:",
    "Gli input, gli output, le prestazioni, i controlli, le risorse, le fasi, le attività, le interdipendenze e i metodi di gestione",
  ],
  [
    'Il "valore" attribuito dal cliente all\'output è funzione:',
    "Del prezzo di acquisizione, della qualità, del tempo e della flessibilità",
  ],
  [
    "Le interdipendenze tra attività possono essere:",
    "Sequenziali, reciproche, di spazio/tempo e legate alle risorse",
  ],
  [
    "Le direzioni di disaggregazione dei processi aziendali sono:",
    "L'aggregazione, la specificazione, la scomposizione e la generalizzazione",
  ],
  [
    "I processi aziendali",
    "Possono essere classificati anche come settoriali e intersettoriali",
  ],
  [
    "L'American Productivity and Quality Centre propone un modello di riferimento dei processi di una tipica azienda industriale o di servizi, individuando:",
    "N. 12 macroprocessi",
  ],
  [
    "Le prestazioni operative che caratterizzano un processo si possono ricondurre:",
    "Alle dimensioni di costo, tempo, qualità e flessibilità",
  ],
  [
    "L'efficienza di un processo è:",
    "La capacità di un processo di ottimizzare il rapporto tra il valore dell'output e l'impiego di risorse",
  ],
  [
    "Le prestazioni operative di un processo possono essere:",
    "Interne ed esterne",
  ],
  [
    "Le prestazioni di flessibilità:",
    "Misurano la capacità del processo di rispondere a cambiamenti richiesti dal cliente con costi ridotti e tempi limitati",
  ],
  [
    "Nell'ambito di un processo, è possibile affermare che:",
    "Non sempre un'azione volta al miglioramento di una dimensione consente di migliorare o anche solo lasciare invariati gli altri risultati\"\n                    ",
  ],
  [
    "L'analisi delle prestazioni di un processo:",
    "Richiede l'individuazione dei trade-off e la loro corretta gestione",
  ],
  ["Un processo è caratterizzato da:", "Una pluralità di prestazioni"],
  [
    "I compiti manageriali connessi con la dimensione processo:",
    "Riguardano il deployment degli obiettivi generali dell'impresa in obiettivi specifici e il monitoraggio delle prestazioni per ciascun processo chiave\"\n                    ",
  ],
  [
    "La categoria tecnologica:",
    "E' una delle principali leve dell'azienda orientata ai processi, insieme alle categorie organizzativa e gestionale",
  ],
  [
    "Lo sviluppo di un sistema di gestione per processi è:",
    "Una leva gestionale",
  ],
  [
    "Le leve organizzative della gestione per processi possono essere ricondotte a:",
    "Introduzione dei process owner, job redesign, delega decisionale, riorganizzazione degli staff e delle attività di supporto nonché lean organisation",
  ],
  [
    "I compiti tipici del process owner prevedono:",
    "La definizione degli obiettivi del processo, la sua progettazione per garantire i risultati auspicati, il coordinamento e la motivazione delle risorse nonché delle unità organizzative e la promozione del miglioramento continuo del processo medesimo",
  ],
  [
    "Il process owner operativo:",
    "Ha competenze prevalentemente relazionali e di leadership (analisi, mediazione, motivazione)",
  ],
  [
    "L'obiettivo del job redesign è:",
    'Quello di ridurre il livello di specializzazione orizzontale"\n                    ',
  ],
  ["Con la delega decisionale:", "Il capo diventa leader"],
  [
    "Per portare la logica cliente-fornitore nelle attività di supporto:",
    "Si puo scorporare le attività di supporto critiche e riportarle nei processi primari, utilizzare l'outsourcing dei processi di supporto e responsabilizzare gli staff su indicatori di servizio\"\n                    ",
  ],
  [
    "Con il modello della lean organization:",
    "Si avvicina il vertice aziendale ai processi primari dell'azienda\"\n                    ",
  ],
  [
    "Gli interventi di natura gestionale:",
    'Fanno riferimento a pratiche manageriali"\n                    ',
  ],
  [
    "Gli interventi di natura gestionale investono:",
    "I sistemi di pianificazione, programmazione e controllo delle attività nonché i sistemi di monitoraggio delle performance",
  ],
  [
    "Le leve gestionali più significative sono:",
    "Lo sviluppo di un sistema di gestione dei processi, l'attivazione di catene clienti-fornitori nonché il bilanciamento tra l'utilizzo di logiche pull e push nella gestione dei processi",
  ],
  [
    "L'organizzazione è influenzata:",
    "Dai fattori ambientali, tecnologici, strategici e anagrafici",
  ],
  [
    "I fattori esterni all'organizzazione sono:",
    "Quelli ambientali e tecnologici",
  ],
  [
    "I fattori interni all'organizzazione sono:",
    "Quelli anagrafici e strategici",
  ],
  [
    "Fanno parte del fattore ambientale:",
    'I mercati finanziari"\n                    ',
  ],
  [
    "Fanno parte del fattore strategico:",
    "L'integrazione verticale e orizzontale",
  ],
  [
    "A livello micro e macrostrutturale, le variabili organizzative dipendono:",
    "Dalle culture e dai valori delle società nazionali e locali in cui operano le organizzazioni, dal quadro istituzionale e normativo nonché dalle condizioni del mercato del lavoro locale",
  ],
  [
    "Le parti dell'ambiente più familiari all'organizzazione e con le quali questa si cimenta ogni giorno sono:",
    "La struttura del settore, l'intensità della competizione, le caratteristiche dei mercati di sbocco e dei canali distributivi, la variabilità della domanda finale, i mercati di fornitura e i mercati dei capitali",
  ],
  [
    "Le caratteristiche organizzative:",
    "Sono influenzate, principalmente, dall'incertezza e dalla complessità\"\n                    ",
  ],
  [
    "Nei servizi professionali di alta gamma:",
    "L'incertezza è medio alta e la complessità è medio bassa",
  ],
  [
    "Livello di outsourcing delle attività di supporto:",
    'Fa parte del fattore di complessità esterna denominato "Mercati di fornitura"',
  ],
  [
    "Nel tempo",
    "I fattori sociali e culturali cambiano le organizzazioni e influenzano lo sviluppo tecnologico",
  ],
  [
    "In corrispondenza di volumi di produzione elevatissimi:",
    'La produzione è continua"\n                    ',
  ],
  [
    "La realizzazione di prodotti unici:",
    'Spesso richiede la predisposizione di un cantiere"\n                    ',
  ],
  ["Un'organizzazione a flusso comporta:", "Costi elevatissimi"],
  [
    "I macrosettori di servizio contemplati dalla classificazione di base del mondo dei servizi sono:",
    "I servizi di distribuzione, i servizi alla produzione, i servizi sociali e i servizi alla persona",
  ],
  [
    "I servizi professionali:",
    "Sono idealmente posizionabili in alto a sinistra nella matrice prodotto-processo",
  ],
  [
    "I servizi di massa:",
    "Sono posizionabili nella parte centrale e in basso a destra della matrice prodotto-processo",
  ],
  [
    "Vi è stretta connessione tra servizi di massa e:",
    "Alta densità di capitale",
  ],
  [
    "Le variabili chiave nell'ambito delle tecnologie dell'informazione e della comunicazione sono:",
    "Il coordinamento, la dimensione, il controllo, l'unità ad hoc e la gestione della conoscenza\"\n                    ",
  ],
  [
    "L'approccio people-to-people:",
    "E' basato sull'interazione diretta e sul dialogo tra le persone",
  ],
  [
    "La molla strategica che fa scattare l'orientamento ai processi è riconducibile:",
    "Alla centralità del cliente, alla time-based competition, al miglioramento del trade-off tra efficacia ed efficienza nonché alla necessità di canalizzare le risorse verso i risultati",
  ],
  ["Le strategie di differenziazione:", "Richiedono bassa formalizzazione"],
  [
    "La strategia di leadership di costo:",
    "Comporta organizzazioni meccaniche",
  ],
  [
    "I fattori anagrafici fanno riferimento:",
    "Alla dimensione, all'età e al posizionamento nel ciclo di vita dell'azienda\"\n                    ",
  ],
  [
    "Le piccole imprese:",
    'Hanno attenzione prevalente, se non esclusiva, al prodotto"\n                    ',
  ],
  ["Le grandi imprese:", "Si dotano di strutture funzionali"],
  [
    "Tra lo stadio della creatività e lo stadio della direzione, si ha:",
    "Una crisi di leadership",
  ],
  [
    "Nello stadio della delega:",
    "La macrostruttura evolve verso forme divisionali che consentono maggiore autonomia attraverso la creazione di responsabilità di prodotto, mercato, area geografica",
  ],
  [
    "Nello stadio della collaborazione:",
    "Vi è un ritorno, almeno parziale, verso forme organiche",
  ],
  [
    "Dopo la crisi di rivitalizzazione:",
    "Può subentrare la fase di declino dell'organizzazione",
  ],
  [
    "World Consulting Network Italia, per effetto della difficile situazione economica degli ultimi anni,:",
    "Ha optato per una riduzione delle proprie tariffe, che ha reso necessario un aumento dell'efficienza interna",
  ],
  [
    "La scala gerarchica (dal livello più alto a quello più basso) dei consulenti di World Consulting Network Italia è:",
    "Partner, Manager, Specialist e Consultant",
  ],
  [
    "La formazione di World Consulting Network Italia prevede:",
    'L\'erogazione di corsi (di base, generici e specialistici), in affiancamento al "training on the job"',
  ],
  ["L'organigramma di World Consulting Network Italia è:", "A matrice"],
  [
    "Alla direzione di World Consulting Network Italia, sono affiancate:",
    'Cinque unità di staff"\n                    ',
  ],
  [
    "Alla direzione di World Consulting Network Italia rispondono direttamente:",
    "Le unità organizzative (Manifacturing, Banking, Pubblica Amministrazione) relative ai diversi settori (industry) in cui opera l'azienda",
  ],
  [
    "In World Consulting Network Italia:",
    "I consultant svolgono una mansione operativa, occupandosi di problemi circoscritti (specializzazione orizzontale medio-alta)",
  ],
  [
    "L'ambiente in cui opera World Consulting Network Italia è caratterizzato:",
    "Da incertezza e complessità elevate",
  ],
  [
    'Il meccanismo di coordinamento di "mutuo adattamento" utilizzato in Word Consulting Network Italia:',
    "E' finalizzato al coordinamento fra le risorse dei progetti nei team",
  ],
  [
    "I meccanismi di coordinamento ex ante utilizzati in Word Consulting Network Italia sono:",
    'La standardizzazione degli obiettivi, la standardizzazione delle competenze e la standardizzazione dei processi"\n                    }\n                 \n            ',
  ],
  [
    "Il processo produttivo del Cotonificio Lombardo:",
    "Inizia nel reparto di tintoria",
  ],
  [
    "I clienti del Cotonificio Lombardo sono:",
    'I confezionisti di camicie, i grossisti di tessuti e i grandi marchi internazionali della moda"\n                    ',
  ],
  [
    "Il contesto di pressione competitiva in cui opera il Cotonificio Lombardo comporta:",
    "La presenza, nel medesimo contesto, di produttori che offrono prodotti di qualità a prezzi bassi",
  ],
  [
    "La struttura organizzativa del Cotonificio Lombardo è di tipo:",
    "Funzionale",
  ],
  [
    "Il Direttore di stabilimento del Cotonificio Lombardo:",
    "Ha una specializzazione orizzontale bassa",
  ],
  [
    "Gli addetti al controllo della qualità del Cotonificio Lombardo:",
    "Svolgono una mansione professionale",
  ],
  [
    "Gli operai del reparto tintoria del Cotonificio Lombardo:",
    'Possiedono un livello di specializzazione orizzontale elevato"\n                    ',
  ],
  [
    "L'ambiente in cui opera il Cotonificio Lombardo è caratterizzato:",
    "Da un elevato numero di varianti di prodotto",
  ],
  [
    "Il Cotonificio Lombardo presenta:",
    "Una produzione per lotti e un'organizzazione per reparti",
  ],
  [
    "Il contesto di operatività del Cotonificio Lombardo presenta:",
    "Un'incertezza piuttosto elevata",
  ],
  [
    "Le decisioni intraprese all'interno delle organizzazioni:",
    "Possono determinare il successo o l'insuccesso dell'organizzazione medesima",
  ],
  [
    'Il caso "esplosione del Challenger":',
    "E' un tipico esempio di decisione organizzativa inconsapevole",
  ],
  [
    "Una decisione programmata riguarda, per esempio:",
    "La programmazione della produzione su una linea di assemblaggio",
  ],
  [
    "Le decisioni non programmate:",
    'Vengono affrontate senza una preparazione specifica"\n                    ',
  ],
  [
    "L'aspetto della tempestività:",
    "Riguarda sia le decisioni programmate che quelle non programmate",
  ],
  [
    "Ai livelli operativi di un'organizzazione:",
    "Il rischio e l'incertezza sono relativamente ridotti",
  ],
  [
    "Le cause dei conflitti organizzativi sono riconducibili:",
    "Alla scomposizione degli obiettivi, alla differenziazione, all'interdipendenza dei compiti e all'accesso a risorse limitate",
  ],
  [
    "Se si genera una competizione tra unità organizzative per l'accesso alle risorse, umane nonché finanziarie, e, talvolta, anche tecnologiche, si è di fronte al concetto:",
    "Dell'accesso a risorse limitate\"\n                    ",
  ],
  [
    "Spesso, per prendere decisioni veloci:",
    "Occorre imporle e limitare il consenso",
  ],
  [
    "Se le unità organizzative all'interno di un'impresa possiedono valori, attitudini e standard di comportamento non omogenei tra loro, si è di fronte al concetto:",
    "Della differenziazione",
  ],
  [
    "Una critica al modello della razionalità limitata:",
    "E' che non è vero che le organizzazioni decidono senza avere abbastanza informazioni",
  ],
  [
    "La ridondanza informativa:",
    "Non coincide con la qualità dell'informazione",
  ],
  [
    "Le caratteristiche tipiche dei processi decisionali nelle organizzazioni sono:",
    "L'ambiguità intrinseca che caratterizza gli obiettivi e le preferenze dei decisori, le tecnologie e i metodi non consolidati nonché l'elevato turnover dei responsabili",
  ],
  [
    "I flussi indipendenti dal cui incrocio casuale scaturiscono le decisioni sono:",
    "I problemi, le potenziali soluzioni, i partecipanti e le opportunità di scelta",
  ],
  [
    "Il modello del garbage can:",
    "Rappresenta bene i processi decisionali nelle grandi organizzazioni",
  ],
  [
    "I processi decisionali strategici, secondo l'approccio contingente, sono accomunati dalla metastruttura:",
    'Identificazione-Sviluppo-Selezione"\n                    ',
  ],
  [
    "In presenza di sensemaking:",
    'Vi è una relazione circolare "fare-dire-pensare e fare di nuovo"',
  ],
  [
    "Quando non vi è ambiguità di obiettivi né incertezza sulle soluzioni, i decisori tendono ad assumere un comportamento riconducibile:",
    "Alla razionalità perfetta",
  ],
  [
    "Se l'ambiguità è elevata e l'organizzazione complessa, è facile che si ritrovino modelli decisionali:",
    "A garbage can",
  ],
  [
    "Se il problema non è eccessivamente ambiguo, ma vi è molta incertezza sulle soluzioni e sui metodi di analisi, è facile che la razionalità limitata si traduca in:",
    "Incrementalismo",
  ],
  [
    "Gestire quotidianamente un'organizzazione, di fatto, significa:",
    "Essere in grado di prendere decisioni consapevoli in merito alle scelte di marketing, alle scelte di fornitura, alle soluzioni tecnologiche, alle soluzioni organizzative, alla formulazione dei budget e alla pianificazione delle attività operative",
  ],
  [
    'La fase del "problem setting" include:',
    "La percezione del problema, la definizione degli obiettivi e l'analisi dei fattori rilevanti per la scelta",
  ],
  [
    'La fase del "problem solving" include:',
    "L'identificazione delle alternative, la valutazione della loro capacità di raggiungere in tutto o in parte gli obiettivi, la scelta e l'attuazione della decisione e il controllo dei risultati ottenuti",
  ],
  [
    "Le variabili endogene sono:",
    'Gli effetti nonché le conseguenze delle decisioni e delle variabili ambientali"\n                    ',
  ],
  [
    "La forma più generale di un modello decisionale è:",
    "Et = ft (Et', Dt, At)\"\n                    ",
  ],
  [
    "Le vendite sono pari a:",
    '(domanda di mercato) x (quota di mercato)"\n                    ',
  ],
  ["I profitto è pari a:", "Ricavi - costi"],
  ["Le tecniche di regressione sono:", "Tecniche quantitative esplicative"],
  ["I focus groups sono:", "Tecniche qualitative basate sulle interazioni"],
  [
    'Nella tecnica del Delphi, la richiesta di motivazioni di "opinioni anomale',
    "Raccolta, analisi e feedback dei risultati",
  ],
  [
    "Le tecniche per la generazione delle alternative:",
    "Hanno l'obiettivo di aiutare i decisori a identificare il numero più ampio possibile di alternative",
  ],
  [
    "Gli effetti (variabili endogene, strumentali e collaterali) associati a ogni alternativa (variabile decisionale):",
    "Dipendono dal modello della realtà sviluppato e dalla previsione sull'evoluzione del contesto",
  ],
  [
    "Quando si utilizza la tecnica del brainstorming:",
    "Deve essere garantita e incoraggiata la massima libertà di espressione da parte dei partecipanti alla seduta",
  ],
  [
    "L'analisi morfologica si basa:",
    "Sulla definizione del problema, sulla definizione dei parametri, sulla lista delle variazioni, sulla realizzazione di differenti combinazioni e sulla valutazione nonché sul miglioramento delle alternative",
  ],
  [
    "I sistemi a punteggio prevedono che i decisori definiscano:",
    'I criteri di valutazione, il peso relativo di ogni criterio e i punteggi che ogni alternativa riceve"\n                    ',
  ],
  [
    'L\'approccio "thinking first":',
    'Implica un\'analisi approfondita del problema ("problem setting"), alla quale segue il "problem solving"',
  ],
  [
    'L\'approccio "doing first":',
    "E' composto dalle fasi di azione, selezione e memoria",
  ],
  [
    'L\'approccio "doing first":',
    "E' tipico delle realtà artigianali e delle micro-imprese\"\n                    ",
  ],
  [
    'Le fasi principali del processo "seeing first" sono:',
    "La preparazione, l'incubazione, l'illuminazione e la verifica",
  ],
  [
    "Nell'ambito dell'approccio \"seeing first",
    "Corrisponde alla fase dell'incubazione",
  ],
  [
    "Il marketing viene tradizionalmente considerato come:",
    "L'insieme di decisioni e di azioni che un'impresa intraprende per creare i prodotti e i servizi, stimolare la conoscenza di prodotti e servizi nonché gestirne la domanda da parte dei clienti, e distribuire i prodotti ai clienti e/o rendere agevole la fruizione dei servizi",
  ],
  [
    "Il compito specifico del marketing è:",
    "Quello di indirizzare il bisogno degli individui verso il desiderio di un determinato prodotto o servizio e di renderne possibile la domanda esplicita",
  ],
  [
    "L'orientamento al marketing è centrato:",
    "Sulla soddisfazione del cliente, sull'esatta comprensione dei suoi bisogni, sul far emergere domande latenti o sul soddisfare, in modo pieno, domande già manifeste, il tutto conseguendo ricavi e profitti soddisfacenti per l'impresa",
  ],
  [
    "Per domanda irregolare si intende:",
    "Una domanda che presenta una sostanziale stabilità nel lungo termine e forti oscillazioni nel breve termine, dovute, ad esempio, a stagionalità o a picchi improvvisi",
  ],
  [
    "L'obiettivo del demarketing è:",
    "Quello di contenere la domanda in modo temporaneo o definitivo, ed, eventualmente, indirizzarla verso le fasce più redditizie e a maggior valore",
  ],
  [
    "Nell'orientamento alla vendita, sono cruciali:",
    'Le tecniche di vendita, una forza vendita aggressiva, le politiche promozionali e gli sconti"\n                    ',
  ],
  [
    "L'offerta di un'impresa è costituita:",
    "Dall'insieme dei benefici funzionali, dei benefici psicologico-emotivi e dei costi di acquisizione",
  ],
  [
    "Le fonti esterne dell'innovazione:",
    'Afferiscono agli utilizzatori, ai fornitori, ai centri di ricerca, alle università, ai partner tecnologici produttori di beni complementari e, talvolta, ai concorrenti"\n                    ',
  ],
  [
    "Gli elementi essenziali delle dinamiche di base dell'innovazione tecnologica sono:",
    "Le fonti dell'innovazione a disposizione dell'impresa, i conflitti di standard e i disegni dominanti, nonché il timing dell'innovazione\"\n                    ",
  ],
  [
    "Il motivo principale per cui si afferma uno standard è che:",
    "Per le tecnologie complesse, i rendimenti sono crescenti con la diffusione e l'utilizzo",
  ],
  [
    "Il marketing management è:",
    "Un insieme di attività e di funzioni molto vicine, e in parte sovrapposte alla strategia d'impresa",
  ],
  [
    "La strategia d'impresa, normalmente, definisce, di volta in volta:",
    "Obiettivi di profittabilità, crescita, sviluppo, diversificazione, o, talvolta, di consolidamento e mantenimento delle posizioni",
  ],
  [
    "Digitalizzazione e connettività:",
    "Offrono opportunità di marketing straordinarie nei mercati B2C",
  ],
  [
    "Il processo di globalizzazione tende, di fatto, :",
    'A creare un "consumatore globale", caratterizzato da mode, gusti e preferenze, che travalicano le barriere linguistiche e culturali"\n                    ',
  ],
  [
    "Le strategie di Corporate Social Responsibility (CSR) sono volte:",
    "Ad accreditare l'immagine delle aziende, le quali, pur non trascurando la loro vocazione al profitto, desiderano essere percepite come attori socialmente positivi\"\n                    ",
  ],
  [
    "Le macro-tendenze riguardanti il mondo del business afferiscono:",
    "All'economia connessa con le società digitali, alla glocalization, alla responsabilità sociale nonché alla sostenibilità, alla privacy, e alla servitization",
  ],
  [
    "Un ciclo di vita standard di un prodotto si compone delle fasi di:",
    "Introduzione, crescita, maturità e declino",
  ],
  [
    "I cicli di vita anomali di un prodotto possono essere:",
    'Fallimentari, deludenti, ridimensionati, rivitalizzati e abbreviati"\n                    ',
  ],
  [
    "E' possibile distinguere prodotti:",
    'Ad acquisto "una tantum", ad acquisto "saltuario" e ad acquisto "frequente"',
  ],
  [
    'Nel caso di acquisto "saltuario":',
    "Alle vendite di primo acquisto, si aggiungono le vendite di sostituzione, volte a sostituire i beni acquistati in passato e diventati obsoleti",
  ],
  [
    'Si è in presenza dello "stadio della funzione integrata" quando:',
    "Le imprese diventano più consapevoli del marketing strategico, della necessità di analizzare in modo sistematico le opportunità e le minacce di mercato, dell'esigenza di investire in immagine, comunicazione e brand",
  ],
  [
    'Si è in presenza dello "stadio della funzione diffusa" quando:',
    "L'orientamento al marketing coinvolge tutta l'impresa e tutte le funzioni aziendali",
  ],
  [
    'Si è in presenza dello "stadio della funzione autonoma" quando:',
    "Si sviluppano effettive competenze specialistiche e le strategie di marketing e comunicazione si fanno più sofisticate e aggressive",
  ],
  [
    'Si è in presenza dello "stadio della funzione assente o nascosta" quando:',
    "Le attività di marketing - intese come l'analisi delle opportunità e delle minacce, le ricerche di mercato, i piani di comunicazione - o sono inesistenti, o sono totalmente gestite in outsourcing e affidate a società esterne specializzate, oppure sono annegate all'interno delle vendite e dunque poste sotto la responsabilità della direzione commerciale\"\n                    ",
  ],
  [
    'La funzione di marketing è organizzata in modo "funzionale":',
    "Quando vi è un'unica unità, coordinata da un Direttore marketing, che è composta da specialisti che presidiano attività diverse",
  ],
  [
    'La funzione di marketing è organizzata in modo "divisionale":',
    "Quando le basi tipiche organizzative sono quelle geografiche, di prodotto e di cliente",
  ],
  [
    'La funzione di marketing è organizzata in modo "a matrice":',
    "Quando la dimensione geografica è combinata con quella di prodotto",
  ],
  [
    'La funzione di marketing è organizzata in modo "ibrida":',
    "Quando marketing e vendite sono divisionali su base geografica, e produzione nonché progettazione sono aggregate in strutture funzionali",
  ],
  [
    "Il processo decisionale di marketing si articola sui livelli di:",
    '"Analisi opportunità di mercato", "Ricerca e selezione mercati obiettivo", "Sviluppo strategia di marketing", "Programmmazione operativa" e "Realizzazione e controllo"',
  ],
  [
    "Le leve di marketing mix possono essere ricondotte alle categorie di:",
    '"Prodotto o Servizio", "Prezzo", "Distribuzione" e "Comunicazione""\n                    }\n                 \n            ',
  ],
  [
    "I macroambienti in chiave marketing sono:",
    "L'ambiente demografico, l'ambiente socioculturale, l'ambiente economico, l'ambiente naturale, l'ambiente politico-istituzionale e l'ambiente tecnologico",
  ],
  [
    "L'ambiente demografico:",
    "Fa riferimento a variabili importanti, quali la dimensione della popolazione, la sua composizione in termini di età, sesso, etnie e livello di istruzione, nonché la sua distribuzione geografica e le tendenze agli spostamenti",
  ],
  [
    "L'ambiente economico:",
    "Include diversi aspetti che influenzano i comportamenti dei consumatori e delle imprese",
  ],
  [
    "L'ambiente naturale:",
    "Riguarda le problematiche legate all'impatto ambientale delle attività economiche",
  ],
  [
    "L'ambiente socioculturale:",
    "Riguarda lo stile di vita, spesso connesso all'atteggiamento delle persone nei confronti di se stessi, della natura, della società, delle istituzioni, delle religioni\"\n                    ",
  ],
  [
    "L'ambiente politico-istituzionale:",
    'Si sostanzia in leggi, organi di governo e gruppi di pressione che limitano o vincolano i comportamenti delle imprese rispetto alle modalità di concorrenza, alla relazione con i consumatori e con la società in genere"\n                    ',
  ],
  [
    "I parametri rilevanti per determinare l'intensità della concorrenza sono:",
    "Il livello di concentrazione del settore, la presenza di barriere all'ingresso o all'uscita, il tasso di crescita, la presenza o meno di fattori di differenziazione e l'utilizzo di manovre o battaglie sui prezzi",
  ],
  [
    "Le principali categorie di mercati sono:",
    "Il mercato dei consumatori, quello delle imprese, quello degli intermediari (rivenditori) e quello delle pubbliche amministrazioni",
  ],
  [
    "Le fasi del processo di acquisto di un bene o di un servizio sono:",
    "La percezione del bisogno, la ricerca di informazioni, la valutazione delle alternative, la decisione di acquisto e il comportamento post-acquisto",
  ],
  [
    "Gli elementi più importanti da valutare nell'analisi del comportamento di acquisto dei clienti industriali sono:",
    "I fattori economici, le strategie e le politiche di approvvigionamento, la struttura organizzativa, le procedure e gli strumenti utilizzati per l'acquisto nonché i criteri e le modalità di valutazione dei fornitori",
  ],
  [
    "Secondo la definizione formale proposta da Kotler, la domanda di mercato di un prodotto è:",
    "Il volume totale che verrebbe acquistato da un determinato segmento di consumatori, in una specifica area geografica, in un determinato intervallo di tempo, dato un certo ambiente di marketing e un certo livello dell'attività di marketing",
  ],
  [
    "Le dimensioni di aggregazione della domanda di mercato possono riguardare il prodotto, il gruppo di clienti, il canale e l'orizzonte temporale; nel caso di aggregazione della domanda medesima per canale distributivo, i diversi livelli di aggregazione possibili sono:",
    "Il singolo punto vendita, la tipologia di punto vendita, il canale e l'intero mercato\"\n                    ",
  ],
  [
    "L'indice di penetrazione del mercato è:",
    "Il rapporto tra il livello attuale della domanda di mercato e il livello potenziale della stessa",
  ],
  [
    "Il mercato disponibile è:",
    "La parte del mercato potenziale che, oltre ad avere interesse, ha anche il reddito necessario e l'accesso all'offerta di prodotto",
  ],
  [
    "La relazione tra la quota di mercato dell'impresa e lo sforzo di marketing è rappresentabile nella formula:",
    "q<sub>i</sub> = [(α<sub>i</sub> × M<sub>i</sub>)<sup>eMi</sup> /[∑i (α<sub>i</sub> × M<sub>i</sub>)<sup>eMi</sup> ",
  ],
  [
    "La quota di mercato di un'impresa può essere analizzata in base alle tre componenti operative - l'introduzione, la copertura e la selettività - che spiegano la composizione dei volumi di vendita; la relazione tra la quota e le componenti operative è:",
    "q = I × C × S",
  ],
  [
    "L'introduzione di un'impresa indica:",
    "Quale parte degli acquisti totali dei suoi clienti è costituita da prodotti da lei venduti, e rappresenta il peso medio relativo dell'impresa come fornitore dei suoi clienti",
  ],
  [
    "La copertura di un'impresa i è data dalla formula:",
    'C<sub>i</sub> = (N<sub>i</sub>)/(N<sub>TOT</sub>)"\n                    ',
  ],
  [
    "Per prevedere la domanda di mercato, è possibile:",
    "Analizzare i comportamenti passati dei clienti ed estrapolare, da questi, i possibili comportamenti futuri; raccogliere informazioni e previsioni, da parte della forza vendita o di esperti; indagare, direttamente presso i clienti, le intenzioni di acquisto e di comportamento futuro; testare il mercato, attraverso la prova del prodotto, per analizzare la risposta degli acquirenti",
  ],
  [
    "Il modello epidemiologico è:",
    "Una tecnica di previsione della domanda adatta a prevedere la domanda di primo acquisto di un prodotto a partire da parametri stimati tramite test di mercato o analisi di prodotti simili venduti nel passato",
  ],
  [
    "Un raggruppamento di clienti può costituire un segmento di mercato se sussistono le caratteristiche di:",
    "Misurabilità, accessibilità, differenziabilità, importanza e durata",
  ],
  [
    "Le commodity sono:",
    "Prodotti indifferenziati che soddisfano esigenze comuni a tutti i clienti",
  ],
  [
    "Nel mercato dei personal computer, vi sono due macrosegmenti costituiti da coloro che lo utilizzano sempre nello stesso luogo, e, quindi, necessitano di un computer fisso, e coloro che hanno bisogno di spostarsi, e, quindi, necessitano di un computer portatile; in questo specifico caso, le preferenze dei clienti sono:",
    'Agglomerate (si è in presenza di segmenti naturali di mercato)"\n                    ',
  ],
  [
    "Per poter perseguire una strategia di marketing mirata, le aziende devono:",
    "Dapprima individuare i gruppi di clienti che presentano bisogni e preferenze omogenee, ovvero segmentare il mercato, in secondo luogo devono selezionare uno o più segmenti nei quali operare, ovvero definire il mercato obiettivo (targeting)",
  ],
  [
    "Nei mercati dei consumatori finali (B2C), possono essere utilizzate tipologie di segmentazione basate:",
    "Sulle caratteristiche dei consumatori (segmentazione descrittiva e segmentazione socioculturale) nonché sui comportamenti dei consumatori (segmentazione basata sui vantaggi ricercati nel prodotto o nel servizio e segmentazione comportamentale)",
  ],
  [
    "Nei mercati dei consumatori finali (B2C), la segmentazione descrittiva differenzia i potenziali consumatori:",
    "In base alle caratteristiche geografiche e demografiche",
  ],
  [
    "Nei mercati industriali (B2B), le variabili rilevanti sono:",
    "Le caratteristiche demografiche, le variabili operative, gli approcci all'acquisto e i fattori contingenti",
  ],
  [
    'Il concetto di "marketing one-to-one" prevede che:',
    "Si arrivi alla segmentazione totale del mercato, secondo la quale ogni segmento è costituito da un singolo cliente, caratterizzato da bisogni e comportamenti diversi, a cui l'azienda risponde in modo personalizzato\"\n                    ",
  ],
  [
    "La scelta di quanti e quali segmenti coprire dipende:",
    "Anche dall'attrattività di ciascun segmento, dai punti di forza e di debolezza che l'azienda ha nell'operare nei diversi segmenti, dalle dimensioni dell'impresa medesima, dagli obiettivi che la stessa si pone, dallo stadio nel ciclo di vita dei prodotti che la medesima offre e dai competitori presenti\"\n                    ",
  ],
  [
    'La strategia di marketing di un\'impresa viene definita di "marketing concentrato" quando:',
    "Le scelte di prezzo, prodotto, distribuzione e promozione sono focalizzate sulle specifiche preferenze del segmento target",
  ],
  [
    "Il posizionamento dell'offerta (sia essa un prodotto o un servizio) in un determinato segmento di mercato consiste:",
    "nella definizione delle caratteristiche specifiche del prodotto e dell'offerta di marketing che permettono all'impresa di differenziarsi dai concorrenti nella percezione dell'acquirente",
  ],
  [
    "Le mappe delle percezioni sintetizzano:",
    "a coppie, gli attributi rilevanti per il posizionamento dell'offerta",
  ],
  [
    "Nella mappa delle percezioni, i marchi Prada e Luis Vuitton sono:",
    "prodotti glamour, caratterizzati da una fascia di prezzo elevata",
  ],
  [
    "I possibili oggetti del marketing sono:",
    "i beni fisici, i servizi, le esperienze, gli eventi, i luoghi e le aree geografiche, le persone, le organizzazioni e le idee",
  ],
  [
    "I servizi possono essere:",
    "di comunicazione, di trasporto, di distribuzione, bancari, finanziari, assicurativi, alla produzione, sociali e alla persona",
  ],
  [
    "Le tipologie di elementi che si affiancano al prodotto essenziale per comporre il prodotto tangibile sono:",
    "la qualità, l'estetica, il packaging e il marchio\"\n                    ",
  ],
  [
    "I concetti di stile ed estetica:",
    "sono, in qualche modo, inclusi e superati dal concetto di design",
  ],
  [
    "Un brand è definito come:",
    "un nome, un termine, un design, un simbolo, o un qualsiasi altro elemento che ha lo scopo di identificare i beni o i servizi di un venditore per differenziarli da quelli dei concorrenti",
  ],
  [
    "I livelli di significato associati alla marca sono:",
    "gli attributi tipici del prodotto che possiede il brand, i benefici o i vantaggi funzionali o psicologico-emotivi che derivano dall'utilizzo del prodotto, i valori del produttore, la cultura associata al prodotto e al brand, la personalità comunicata dal brand e le caratteristiche dell'utente che utilizzerà il prodotto",
  ],
  [
    "Nello stadio di declino:",
    "l'impresa tenderà a eliminare i prodotti o le varianti più deboli, con minor domanda, per concentrare gli sforzi sui prodotti della gamma centrali e con livelli di profitto più elevati",
  ],
  ["L'elasticità della domanda rispetto al prezzo è pari a:", "(ΔQ/Q)/(ΔP/P)"],
  [
    "La relazione che lega i ricavi totali con il prezzo unitario è:",
    "R = P · Q(P)",
  ],
  [
    "Il profitto è legato ai prezzi tramite la relazione:",
    'U = P · Q(P) - Cv(Q) · Q - Cf(Q)"\n                    ',
  ],
  [
    "I passi che vengono generalmente seguiti per la prima definizione del prezzo, quando un prodotto nuovo è immesso sul mercato o quando un prodotto esistente viene venduto in un nuovo mercato, sono:",
    "la definizione della politica e degli obiettivi di prezzo, la scelta del criterio di determinazione del prezzo, la definizione delle modifiche di prezzo ovvero dei prezzi da applicare alle diverse varianti del prodotto nei diversi canali e per diversi clienti o segmenti di mercato, e l'approntamento di manovre di prezzo eventualmente in risposta a manovre dei concorrenti",
  ],
  [
    "Le scelte di prezzo possono essere guidate da:",
    'Obiettivi di mercato, obiettivi di sopravvivenza, obiettivi di profitto e obiettivi di immagine o di scrematura del mercato"\n                    ',
  ],
  [
    "La formula che esprime il metodo del markup, o cost-plus pricing, è:",
    "P = [Cv + (Cf/Q)  (1 + ricarico %)",
  ],
  ["Il ricarico percentuale è pari a:", "Margine/Costo"],
  [
    "Il profitto atteso è pari a:",
    'E(P) = Φ (P) ∙ U (P)"\n                    ',
  ],
  [
    "Le principali tipologie di sconti che le imprese sono solite effettuare sono:",
    "gli sconti quantità, gli sconti di cassa, gli sconti commerciali o funzionali, gli sconti stagionali, i prezzi promozionali e altre forme promozionali",
  ],
  [
    "Nella fase di maturità:",
    "i prezzi dei prodotti, in genere, vengono abbassati, e, in particolare, si fa più frequentemente ricorso a sconti e promozioni, per aumentare i volumi venduti",
  ],
  [
    "I canali di marketing sono l'insieme dei soggetti che svolgono le funzioni essenziali dell'intermediazione, ossia:",
    "la vendita, la distribuzione fisica e il servizio",
  ],
  [
    "Il fattore che accomuna i mercati di consumo e industriali, di prodotti e di servizi, è la compresenza, lungo il canale e in diverse direzioni, :",
    "dei flussi fisici di prodotti e servizi, dei flussi informativi di ordini, dei flussi finanziari di pagamento dal cliente al produttore e dei flussi d'informazioni bidirezionali",
  ],
  [
    "I vari flussi che attraversano il canale possono essere gestiti da diverse tipologie di intermediari, riconducibili, fondamentalmente, :",
    "ai rivenditori, agli agenti, agli ausiliari, ai grossisti e ai dettaglianti",
  ],
  [
    "Il canale diretto:",
    'corrisponde alla situazione in cui non vi è nessun intermediario fra produttore e cliente finale"\n                    ',
  ],
  [
    "Il canale breve:",
    'è costituito da un unico intermediario fra produttore e cliente finale"\n                    ',
  ],
  [
    "Il canale lungo:",
    "è caratterizzato dalla presenza di due o più intermediari, tipicamente un grossista e un dettagliante",
  ],
  [
    "Kotler scompone il servizio offerto dalla distribuzione in:",
    "quantità, tempo di attesa, ubicazione, varietà e servizi aggiuntivi",
  ],
  [
    "Le aziende dispongono, fondamentalmente, :",
    "della distribuzione esclusiva, della distribuzione intensiva e della distribuzione selettiva",
  ],
  [
    "I dettaglianti possono essere:",
    "catene di negozi, unioni volontarie, gruppi d'acquisto, cooperative di consumo, centrali d'acquisto, franchising e conglomerati commerciali\"\n                    ",
  ],
  [
    "Nella fase di introduzione:",
    "la distribuzione è guidata dall'obiettivo di concentrarsi su pochi canali e massimizzarne l'efficacia, piuttosto che seguire una distribuzione intensiva su molti fronti diversi",
  ],
  [
    "La comunicazione è:",
    "l'insieme di attività attraverso le quali l'azienda crea una relazione con il proprio mercato",
  ],
  [
    "La comunicazione d'impresa è:",
    "l'insieme delle attività che ogni azienda (o ente pubblico) mette in campo per rivolgersi ai propri interlocutori",
  ],
  [
    "L'attività di fidelizzazione:",
    "assolve, sempre più, alla necessità di far conoscere un servizio, un vantaggio, di costruire il valore dell'azienda che può costituire la differenza rispetto alla proposta dei propri concorrenti",
  ],
  [
    "La comunicazione d'impresa:",
    "deve assolvere al compito di promuovere sia i prodotti (o servizi), sia l'organizzazione e l'immagine che la medesima organizzazione vuole trasmettere al proprio pubblico\"\n                    ",
  ],
  [
    "La comunicazione di prodotto:",
    "è incentrata sul lancio, sul posizionamento e sul rafforzamento di uno specifico prodotto sul mercato",
  ],
  [
    "Gli strumenti di comunicazione a disposizione delle aziende sono:",
    "la pubblicità, il direct/web marketing, le promozioni, le relazioni pubbliche, la digital PR, la web reputation, le sponsorizzazioni e il packaging",
  ],
  [
    "Nella fase di introduzione:",
    "la comunicazione ha un ruolo molto importante e l'obiettivo è prevalentemente quello di far conoscere il nuovo prodotto al cliente - in particolare ai clienti con maggiore propensione all'innovazione - e di affermare il brand e il posizionamento scelto per il prodotto",
  ],
  [
    "Nella fase di crescita:",
    "le strategie sono volte a sottolineare le caratteristiche del prodotto e indurre i clienti all'acquisto\"\n                    ",
  ],
  [
    "Nella fase di maturità:",
    "le strategie di comunicazione sono volte prevalentemente a sottolineare il valore del prodotto, a sostenere la notorietà del brand e a stimolare la fidelizzazione del cliente",
  ],
  [
    "Nella fase di declino:",
    "le promozioni sono spesso utilizzate in modo massiccio verso il termine della vita del prodotto per favorire l'esaurimento delle scorte",
  ],
  [
    'Nell\'ambito del caso ATP, nella fase di lancio del telefono innovativo denominato "Phoenix":',
    "ATP medesima pensa di concentrarsi sugli utenti che già dispongono di un accesso wireless a casa, in quanto pensa che siano i più sensibili e interessati al nuovo prodotto",
  ],
  [
    "Nell'ambito del caso ATP, il mercato potenziale, essendo costituito da tutti gli attuali utilizzatori di telefono cellulare, ossia dal 95% della popolazione compresa fra i 10 e gli 80 anni (con la predetta popolazione ammontante a 50 mln di persone), è pari a:",
    '47,5 mln di persone"\n                    ',
  ],
  [
    "Nell'ambito del caso ATP, il mercato disponibile, essendo costituito da coloro che, oltre a utilizzare abitualmente il telefono cellulare e ad avere disponibilità economica (ammontanti a 47,5 mln di persone), utilizzano abitualmente Internet con una connessione a banda larga (corrispondente ad un valore percentuale del 20%), è pari a:",
    "9,5 mln di persone",
  ],
  [
    "Nell'ambito del caso ATP, il mercato servito su cui decide di concentrarsi ATP medesima, essendo costituito da coloro che dispongono anche di una connessione Wireless a casa (ammontanti a 1,425 mln di persone), è pari a:",
    "1,425 mln di persone",
  ],
  [
    "Nell'ambito del caso ATP, le variabili di segmentazione che caratterizzanoi segmenti di mercato sono:",
    "le variabili descrittive, le variabili socio-culturali, i vantaggi ricercati e le variabili comportamentali",
  ],
  [
    "Nell'ambito del caso ATP:",
    "in ordine alla leva relativa al prodotto, ATP medesima persegue una strategia di differenziazione, basata su innovatività e qualità",
  ],
  [
    "Se la Quota di mercato (Q) è pari al 15%, l'Introduzione (I) è del 20% e la Copertura (C) è del 50%, la Selettività (S) è pari a:",
    "1.5",
  ],
  [
    "Nell'ambito del caso ATP, essendo la dimensione del mercato servito Qtot = 1.425.000 e le vendite nei primi due mesi dal lancio del prodotto sul mercato q(1) = 20.000 e q(2) = 26.000, il coefficiente di propensione spontanea all'acquisto (p) è pari a:",
    "0.014",
  ],
  [
    'Nell\'ambito del caso ATP, essendo la dimensione del mercato servito Qtot = 1.425.000 e le vendite nei primi due mesi dal lancio del prodotto sul mercato q(1) = 20.000 e q(2) = 26.000, il coefficiente imitativo o "di contagio" (r) è pari a:',
    '0.321"\n                    ',
  ],
  [
    "Nell'ambito del caso ATP, essendo la dimensione del mercato servito Qtot = 1.425.000 e le vendite nei primi due mesi dal lancio del prodotto sul mercato q(1) = 20.000 e q(2) = 26.000, le vendite cumulate alla fine del terzo mese Q(4) sono pari a:",
    '79.595 unità"\n                    }\n                 \n            ',
  ],
  [
    "L'azienda Bug:",
    'ha costruito il suo successo con prodotti tecnicamente innovativi e dal design accattivante nel mercato dei personal computer e dei lettori Mp3"\n                    ',
  ],
  [
    "Nell'ambito del caso Bug, essendo il mercato complessivo dei lettori Mp3 di circa 35 milioni di pezzi venduti ogni anno, il mercato potenziale è pari a:",
    "35 milioni di pezzi all'anno",
  ],
  [
    "Nell'ambito del caso Bug, essendo i soggetti che hanno le disponibilità economiche necessarie per acquistare il lettore Bug 2/5 del totale (rif. 35 milioni di pezzi venduti ogni anno), il mercato disponibile è pari a:",
    "14 milioni di pezzi all'anno",
  ],
  [
    "Nell'ambito del caso Bug, il mercato servito, essendo quello cui si rivolge, effettivamente, Bug, ovvero il 75% del mercato disponibile (rif. 14 milioni di pezzi all'anno) che risiede nelle 20 nazioni in cui l'azienda commercializzerà il nuovo prodotto, è pari a:",
    "10,5 milioni di pezzi all'anno",
  ],
  [
    "Nell'ambito del caso Bug, esprimendo il prezzo in euro e la domanda in milioni di pezzi, ed essendo il punto di coordinate (P1 = 150, D1 = 4) quello relativo allo scenario di lancio con prezzo basso e il punto di coordinate (P2 = 400, D2 = 1) quello relativo all'ipotesi di lancio con prezzo elevato, la relazione tra prezzo e domanda, nell'ipotesi in cui la stessa sia lineare, sarà:",
    "D = 5.800.000 - 12.000 · P",
  ],
  [
    "Nell'ambito del caso Bug, essendo il punto di coordinate (P1 = 150, D1 = 4) quello relativo allo scenario di lancio con prezzo basso e il punto di coordinate (P2 = 400, D2 = 1) quello relativo all'ipotesi di lancio con prezzo elevato, l'elasticità della domanda rispetto al prezzo è pari a:",
    "4.8",
  ],
  [
    "Se l'elasticità della domanda rispetto al prezzo è pari a 100,:",
    "la domanda è molto elastica rispetto al prezzo",
  ],
  [
    "Nell'ambito del caso Bug, essendo il costo variabile unitario 100 €/unità, il costo fisso totale 80.000.000 €, e la funzione di domanda D = 5.800.000 - 12.000 P, il prezzo del nuovo lettore multimediale che consentirebbe a Bug di massimizzare i propri profitti è pari a:",
    "291.67 €",
  ],
  [
    "Nell'ambito del caso Bug, essendo il costo variabile unitario 100 €/unità, il costo fisso totale 80.000.000 €, e la funzione di domanda D = 5.800.000 - 12.000 P, la domanda è pari a:",
    "2,3 milioni di pezzi",
  ],
  [
    "Nell'ambito del caso Bug, la discriminazione di prezzo:",
    'sarebbe la soluzione migliore, dal punto di vista dei profitti"\n                    }\n                 \n            ',
  ],
  [
    "L'azienda LCN, multinazionale che opera nel settore dei ricambi per auto:",
    "non produce direttamente i componenti",
  ],
  [
    "Se l'Introduzione (I) è del 15%, la Copertura (C) è del 15,4% e la Selettività (S) è 5, la Quota di mercato (Q) è pari a:",
    "11.60%",
  ],
  [
    "Se l'Introduzione (I) è del 70%, la Quota di mercato (Q) è del 40% e la Selettività (S) è 1, la Copertura (C) è pari a:",
    "57.10%",
  ],
  [
    "Se la Copertura (C) è del 22,5%, la Quota di mercato (Q) è del 15% e la Selettività (S) è 0,8, l'Introduzione (I) è pari a:",
    '83.30%"\n                    ',
  ],
  ["La Selettività (S) è pari a:", "Q / (I ∙ C)"],
  [
    "Il punto di break-even è:",
    "quello in cui i ricavi eguagliano i costi fissi e variabili",
  ],
  [
    "Nel caso LCN, il punto di break-even è:",
    "quello in cui i ricavi eguagliano i costi di sviluppo e ammortamento nonché i costi di acquisto e trasporto",
  ],
  [
    "Nell'ambito del caso LCN, essendo il costo variabile unitario 1.200 €/unità, il costo fisso totale 720.000 €, e la funzione di domanda D = 5.400,8- 2,18 P, il prezzo del bundle che consentirebbe a LCN di massimizzare i propri profitti è pari a:",
    "1,838.72 €",
  ],
  [
    'Nell\'ambito del caso LCN, essendo la dimensione del mercato complessivo Qtot = 2.000 e le vendite nelle prime due settimane dal lancio del prodotto sul mercato q(1) = 10 (distribuite in modo gratuito le prime 10 unità di prodotto) e q(2) = 15, il coefficiente imitativo o "di contagio" (r), quando p = 0, è pari a:',
    "1.51",
  ],
  [
    "Nell'ambito del caso LCN, essendo la dimensione del mercato complessivo Qtot = 2.000 e le vendite nelle prime due settimane dal lancio del prodotto sul mercato q(1) = 10 (distribuite in modo gratuito le prime 10 unità di prodotto) e q(2) = 15, le unità vendute al termine della quarta settimana [Q(5)], quando p = 0, è pari a:",
    '153"\n                    }\n                 \n            ',
  ],
  [
    "Da sempre, una delle decisioni cruciali che un'impresa si trova ad affrontare è:",
    "quali attività svolgere direttamente al proprio interno e quali affidare a imprese esterne",
  ],
  [
    "Generalmente, il modello di impresa fortemente integrata verticalmente si rivela di successo:",
    "in contesti competitivi stabili",
  ],
  [
    "Una delle fonti di instabilità dei mercati è:",
    'il comportamento delle imprese"\n                    ',
  ],
  [
    "Una conseguenza immediata della deverticalizzazione è:",
    "il progressivo aumento del numero dei rapporti di fornitura",
  ],
  [
    "Nei settori maturi a basso tasso di crescita:",
    "risulta più semplice percorrere la strada della riduzione dei costi di acquisto",
  ],
  [
    "Un'azienda può procurarsi ciò di cui ha bisogno mediante:",
    "il mercato competitivo, il mercato collaborativo e l'integrazione verticale",
  ],
  [
    "Una relazione di mercato competitivo implica:",
    "generalmente transazioni spot in un'ottica di breve periodo\"\n                    ",
  ],
  [
    "In un mercato competitivo:",
    "le parti dedicano pochi sforzi e poco tempo alle singole relazioni",
  ],
  [
    "L'integrazione verticale:",
    "implica l'internalizzazione delle competenze e delle tecnologie necessarie, tramite lo sviluppo interno o tramite la fusione o l'acquisizione di aziende detentrici di tali competenze",
  ],
  [
    "Nel mercato collaborativo:",
    "il processo di outsourcing si traduce in una relazione tra cliente e fornitore, caratterizzata da forte collaborazione",
  ],
  [
    "La complessità descrittiva indica:",
    "quanto è difficile per il cliente comunicare al potenziale fornitore tutte le specifiche del bene o del servizio richiesto",
  ],
  [
    "La specificità misura:",
    "l'entità degli investimenti addizionali che il potenziale fornitore dovrebbe sostenere per fornire al cliente l'attività in questione",
  ],
  [
    "L'incertezza definisce:",
    "l'impossibilità di prevedere che cosa accadrà alla relazione in futuro, ad esempio dal punto di vista tecnologico o dei volumi produttivi",
  ],
  [
    "Il mercato collaborativo è caratterizzato da:",
    "complessità descrittiva media",
  ],
  [
    "L'integrazione verticale è caratterizzata da:",
    'specificità alta"\n                    ',
  ],
  ["Il mercato competitivo è caratterizzato da:", "incertezza bassa"],
  [
    "I driver strategici di scelta per l'outsourcing sono:",
    'la gestione delle competenze, la gestione dei costi e la gestione del capitale"\n                    ',
  ],
  [
    "La scelta dell'outsourcing consente:",
    'una riduzione dei costi"\n                    ',
  ],
  [
    "I rapporti esistenti all'interno di una rete di fornitura:",
    "possono essere classificati in base al tipo di processo nonché in base alla posizione del fornitore in relazione alla filiera di riferimento",
  ],
  [
    "Un rapporto verticale di filiera:",
    "è la relazione che si instaura tra un cliente e un fornitore che svolgono attività poste in sequenza all'interno del loro settore",
  ],
  [
    "Le tipologie di acquisti sono:",
    "gli acquisti diretti, gli acquisti indiretti e i servizi",
  ],
  [
    "Si definiscono acquisti diretti:",
    "tutte le materie prime, i semilavorati e i componenti che confluiscono nei prodotti dell'azienda acquirente",
  ],
  [
    "Gli acquisti indiretti sono:",
    "tutti i beni e servizi che non vengono incorporati nei prodotti/servizi dell'impresa, ma che risultano, comunque, necessari per garantirne l'operatività\"\n                    ",
  ],
  [
    "Le attività primarie:",
    "sono quelle che concorrono direttamente alla produzione dei prodotti e servizi la cui vendita genera valore per il cliente",
  ],
  [
    "Le attività di supporto:",
    "includono la gestione delle risorse umane, l'amministrazione, la gestione della tecnologia e tutte le attività infrastrutturali in genere",
  ],
  [
    "Gli acquisti per attività primarie:",
    "hanno un assortimento di prodotti generalmente limitato",
  ],
  [
    "L'insieme dei sottoprocessi in cui è possibile rappresentare un processo di acquisto è composto:",
    "da strategic purchasing, sourcing e supply",
  ],
  [
    "Le attività complessive in cui si articola lo strategic purchasing sono:",
    "la definizione della rete e delle relazioni, il marketing di acquisto, la gestione dei fornitori e la valutazione strategica",
  ],
  [
    "Le attività complessive in cui si articola il sourcing sono:",
    'la definizione specifiche, talvolta nuove attività di marketing di acquisto, la richiesta di offerta, la negoziazione e la selezione"\n                    ',
  ],
  [
    "Le attività complessive in cui si articola la supply sono:",
    "l'expediting, la ricezione e il controllo, il pagamento e la valutazione operativa",
  ],
  [
    "Gli stadi di sviluppo che, pur non venendo necessariamente percorsi da tutte le aziende negli stessi tempi e nella stessa sequenza, rappresentano con sufficiente generalità l'evoluzione della funzione acquisti nel tempo sono:",
    "l'attività imprenditoriale, gli acquisti frammentati, l'ufficio acquisti e la direzione acquisti",
  ],
  [
    "Afferisce alla categoria merceologica (INPUT):",
    "la necessità di competenza specifica sui materiali",
  ],
  [
    "Il mercato di fornituta:",
    "influenza la scelta, a seconda delle sue caratteristiche",
  ],
  [
    "L'importanza strategica di un bene acquistato:",
    "misura il suo contributo alle prestazioni competitive dell'azienda, distinguendo fra acquisti strategici e acquisti che, sebbene siano necessari, non forniscono vantaggi competitivi",
  ],
  [
    "L'intersezione delle dimensioni di importanza strategica dell'acquisto e di difficoltà del mercato di fornitura dà origine a una matrice di portafoglio con i quadranti:",
    'acquisti non critici, acquisti leva, colli di bottiglia e acquisti strategici"\n                    ',
  ],
  ["Le commodity sono:", "acquisti non critici"],
  ["I veicoli industriali sono:", "acquisti leva"],
  [
    'I drivers che spingono verso il "global sourcing" comprendono:',
    "gli obblighi contrattuali",
  ],
  [
    'I drivers che spingono verso il "local sourcing" comprendono:',
    "i costi logistici",
  ],
  [
    "I parametri rispetto ai quali, generalmente, vengono valutati i fornitori sono:",
    'la valutazione operativa, la valutazione complessiva delle prestazioni e la valutazione strategica"\n                    }\n                 \n            ',
  ],
  [
    "Con la tecnica dell'offerta:",
    "una volta raccolte le offerte da più fornitori, il cliente può già essere in grado di effettuare una scelta, oppure può decidere di escludere alcune aziende, richiedere ulteriori informazioni a quelle rimaste ed effettuare una negoziazione, al fine di ottenere le condizioni migliori possibili",
  ],
  [
    "Con la tecnica della gara:",
    'fra tutte le offerte ricevute, il cliente seleziona quelle che soddisfano alcuni requisiti minimi e definisce quindi un numero ristretto di aziende ammesse alla gara vera e propria"\n                    ',
  ],
  [
    "Con la tecnica dell'asta:",
    "sono consentiti rilanci successivi delle offerte effettuate",
  ],
  [
    "La Request For Information (RFI):",
    "consiste in una richiesta generale di informazioni a un fornitore",
  ],
  [
    "Una caratteristica della negoziazione competitiva è:",
    "lo sfruttamento del potere contrattuale",
  ],
  [
    "Una caratteristica della negoziazione collaborativa è:",
    'la creazione di plusvalore"\n                    ',
  ],
  [
    "Tutti i principali fattori che determinano la posizione negoziale delle parti coinvolte e il loro potere contrattuale sono:",
    'gli obiettivi, le autorità, la competizione, lo "spripta manent", la fiducia, la conoscenza, il tempo, il denaro e le competenze negoziali',
  ],
  [
    "Tra le più note tattiche di negoziazione, vi sono:",
    'il "prendere o lasciare", il "bogey", il "chinese crunch", l\' "auction" e il "poliziotto cattivo-poliziotto buono"',
  ],
  [
    "Un'iniziativa di eProcurement:",
    "consente di razionalizzare il parco fornitori",
  ],
  [
    "I programmi innovativi che hanno avuto per oggetto il mondo degli acquisti sono:",
    "l'allargamento della base dei fornitori, il ridisegno del processo e dell'organizzazione di acquisto, la revisione delle specifiche, il consolidamento dei volumi, le alleanze nonché i contratti quadro, il benchmarking e la negoziazione",
  ],
  [
    "Gli strumenti a disposizione di un'azienda, cliente o fornitore che sia, per instaurare una partnership tutelandosi da rischi eccessivi sono:",
    "i contratti quadro, il monitoraggio delle prestazioni, gli investimenti relazionali, la condivisione di conoscenza, la trasparenza nonché il riconoscimento dei costi e la reputazione",
  ],
  [
    "La trasparenza:",
    'è una delle leve più critiche ma anche più efficaci, in quanto se il fornitore rivela la propria struttura di costo, il cliente è tutelato rispetto alla richiesta di prezzi troppo elevati"\n                    ',
  ],
  [
    "La reputazione:",
    "può giocare un ruolo rilevante in una prospettiva di medio-lungo termine",
  ],
  [
    "La condivisione della conoscenza:",
    "è uno scambio di know-how fra i partner",
  ],
  [
    "La Function Delivery:",
    "è il caso in cui viene progettato un componente nuovo, utilizzando un processo decisionale separato",
  ],
  [
    "Il Process Delivery:",
    "è il caso in cui il componente vero e proprio viene progettato autonomamente dal cliente, mentre il processo produttivo viene sviluppato insieme con il fornitore",
  ],
  [
    "Il Joint Process Development:",
    'è il caso in cui viene sviluppato un nuovo processo produttivo con un processo decisionale condiviso fra cliente e fornitore, che interagiscono strettamente lungo tutte le fasi del codesign"\n                    ',
  ],
  [
    "La Joint Function Development:",
    'consiste nello sviluppo di un componente innovativo tramite un processo decisionale condiviso"\n                    ',
  ],
  [
    "Con il Teamworking:",
    "vengono creati gruppi di lavoro misti, composti da progettisti di entrambe le aziende coinvolte",
  ],
  [
    "Con la Colocation:",
    "si decide di trasferire, temporaneamente, alcuni tecnici di un'azienda presso il partner",
  ],
  [
    "La definizione di economia circolare, secondo Ellen MacArthur foundation è:",
    "un termine generico per definire un'economia pensata per potersi rigenerare da sola. In un'economia circolare i flussi di materiali sono di due tipi: quelli biologici, in grado di essere reintegrati nella biosfera, e quelli tecnici, destinati ad essere rivalorizzati senza entrare nella biosfera»",
  ],
  [
    "Quanti sono i criteri fondamentali , secondo Mac Arthur Foundation, per questa nuova economia circolare:",
    '5"\n                    ',
  ],
  [
    "Quali sono questi nuovi criteri fondamentali:",
    "eco progettazione, Modularità e versatilità, energie rinnovabili, approccio ecosistemico, recupero dei materiali",
  ],
  [
    "La green economy è:",
    "il modello teorico di sviluppo economico che prende in considerazione l'attività produttiva valutandone sia i benefici derivanti dalla crescita, sia l'impatto ambientale provocato dalle attività umane di trasformazione delle materie prime.",
  ],
  [
    "A livello di politica economica, la green economy comporta:",
    "l'attuazione di riforme e di incentivi per la tutela delle risorse naturali, il potenziamento delle infrastrutture per l'ambiente, l'introduzione di nuovi meccanismi di mercato (new market-based mechanisms) per la diffusione delle eco-tecnologie, la creazione di investimenti e l'eliminazione di sussidi dannosi per l'ambiente.",
  ],
  ["Che cos'è l'unep:", "programma ambientale delle Nazioni Unite"],
  [
    "Il problema che viene evidenziato per quanto concerne la green economy è che essa richiede:",
    'una trasformazione profonda della società"\n                    ',
  ],
  [
    "L'economia, tradizionalmente intesa, è prevalentemente a carattere:",
    "lineare",
  ],
  [
    "L'economia circolare può essere vista come la virtuosa e coerente evoluzione della green economy:",
    "si",
  ],
  [
    "In quale settore si realizza, abbastanza per tempo, una felice saldatura fra i principi della green Economy e quelli dell'economia circolare:",
    "settore dei rifiuti",
  ],
  ["Quanti sono gli obiettivi di sviluppo del millennio (MDGs):", "8"],
  [
    "Negli obiettivi di sviluppo sostenibile (SDG) particolare attenzione è rivolta:",
    "all'ambiente",
  ],
  [
    "Da quale conferenza sono scaturiti gli obiettivi di sviluppo sotenibile (SDG):",
    "Rio de Janeiro",
  ],
  [
    "L'obiettivo 7 dei SDG ha come scopo quello di:",
    "assicurare a tutti l'accesso a sistemi di energia economici, affidabili, sostenibili e moderni",
  ],
  [
    "L'obiettivo 9 dei SDG pone particolare attenzione al concetto di:",
    'tecnologia e ricerca&sviluppo"\n                    ',
  ],
  [
    "L'urbanizzazione globale è uno dei processi più significativi di quale secolo:",
    "21°",
  ],
  [
    "La riduzione deilla produzione dei rifiuti deve avvenire attraverso:",
    "la prevenzione, la riduzione, il riciclaggio e il riutilizzo",
  ],
  ["Il focus  dell'obiettivo 13 riguarda:", "i cambiamenti climatici"],
  [
    "L'Obiettivo 17 invita i paesi sviluppati a rinnovare il loro impegno di destinare un tot del reddito lordo nazionale all'aiuto pubblico allo sviluppo. A quanto ammonta il totale da destinare:",
    '0.70%"\n                    ',
  ],
  [
    "L'obiettivo 17 sostiene anche il miglioramento:",
    "della stabilità macroeconomica e la coerenza delle politiche nell'interesse di uno sviluppo sostenibile.",
  ],
  [
    "In che anno  fu istituita la Commissione mondiale per l'ambiente e lo sviluppo:",
    "1983",
  ],
  ["In che anno ci fu il rapporto Brundtland:", "1987"],
  [
    "Quale principio fondamentale introduce il rapporto Brundtland:",
    'il fondamentale principio dello sviluppo sostenibile"\n                    ',
  ],
  [
    "Che cos'è il protocollo di Kyoto:",
    "un trattato internazionale in materia ambientale riguardante il surriscaldamento globale",
  ],
  [
    "I paesi che hanno aderito al protocollo di Kyoto si impegnano a:",
    "rispettare obiettivi di limitazione/riduzione delle emissioni di gas serra.",
  ],
  [
    "Su quali principi si fonda la politica ambientale dell'UE:",
    "precauzione, azione preventiva, correzione alla fonte dei  danni causati dall'inquinamento, nonché sul principio «chi inquina paga»",
  ],
  [
    "PREFER è l'acronomo di:",
    "Product Environmental Footprint Enhanced by Regions",
  ],
  [
    "Con quale legge il Ministero dell'Ambiente e della Tutela del Territorio e del Mare ha introdotto il nuovo Schema Volontario \"Made Green in Italy:",
    'con la legge 221/2015"\n                    ',
  ],
  [
    "Che cos'è la  Raccomandazione 2013/179/UE:",
    "è una guida che fornisce una serie di orientamenti per il calcolo della PEF e/o OEF6 e per la definizione di requisiti metodologici specifici da utilizzare in regole di categoria relative all'impronta ambientale dei prodotti.",
  ],
  [
    "Qual'era il numero minimo dei paesi partecipanti affinchè potesse entrare in vigore l'accordo di Parigi:",
    "55",
  ],
  [
    "Cos'è la biomimetica:",
    "è lo studio consapevole dei processi biologici della natura come fonte di ispirazione per il miglioramento delle attività e tecnologie umane",
  ],
  [
    "Cos'è l'economia blu:",
    "è un modello di business a livello globale dedicato alla creazione di un ecosistema sostenibile grazie alla trasformazione di sostanze precedentemente sprecate in merce redditizia",
  ],
  [
    "I 3 principi fondamentali alla base dell'economia circolare sono:",
    "riscoprire i giacimenti di materia scartata come fonte di materia;Porre fine allo spreco d'uso del prodotto;\r\nFermare la morta prematura della materia\"\n                    ",
  ],
  [
    'Il principio  "riscoprire i giacimenti di materia scartata come fonte di materia',
    "prendere tutto quello che buttiamo, sia nel privato che nel mondo industriale e re- introdurlo in cicli di produzione.",
  ],
  [
    "Il car sharing è un esempio di quale principio:",
    "porre fine allo spreco d'uso del prodotto;",
  ],
  [
    "Trasformare l spreco in risorsa ha senso:",
    "dal punto di vista finanziario( pensiamo alle nuove start up che si basano su questo nuovo modello economico e che hanno fatto del rifiuto il loro impero), ma permette di far affermare e sviluppare imprese ed economie in crescita senza far aumentare la necessità di risorse naturali sempre più limitate",
  ],
  [
    "Due dei chiari segnali  che le risorse della terra vengono consumate rapidamente sono:",
    "la crescita dell'economia mondiale e l'aumento della popolazione del pianeta",
  ],
  [
    "Cosa di intende con uso più efficiente delle risorse:",
    "produrre maggior valore grazie a un minor impiego dei materiali e a modalità di consumo diverse",
  ],
  [
    "Cosa vuole dire sharing economy:",
    'economia della condivisione"\n                    ',
  ],
  [
    "Chi ha studiato a fondo il concetto della sharing economy offrendo nuovi risultati e teorie:",
    "Rachel Botsman",
  ],
  [
    "Perchè è considerato cruciale misurare la circolarità:",
    "per dare concretezza e riferimenti univoci alle scelte di policy, per valutare in modo quantitativo e ripetibile le prestazioni ottenute e per guidare e supportare i processi decisionali a tutti i livelli.",
  ],
  [
    "I criteri comuni di misurabilità devono essere:",
    "validi a livello internazionale, attra- verso il ricorso ad unità di misura riconosciute. Devono inoltre essere in grado di esprimere puntualmente il livello di circolarità di prodotti, servizi, e risorse indipendentemente dalla loro natura",
  ],
  ["La prima teoria organica degli stakeholder è attribuibile a:", "Freeman"],
  [
    "Misurare l'economia circolare appare rilevante a livelli interrelati che sono:",
    'macro, meso e micro"\n                    ',
  ],
  [
    "Cosa vuole dire misurare l'economia circolare a livello micro:",
    "lavorare sulla valutazione di circolarità delle aziende sia in termini di processi, sia in ambito di prodotti e servizi.",
  ],
  [
    "Che cosa calcola la metrica proposta da Circle economy:",
    "il livello di circolarità",
  ],
  [
    "Secondo le metodologie proposte da circle economy, come può essere calcolata la circolarità:",
    "in modo aggregato o suddivisa per tipologia di esigenze della società",
  ],
  [
    "Cosa misura il lead indicator:",
    'la produttività delle risorse"\n                    ',
  ],
  [
    "Cosa misura un indicatore tematico:",
    "monitorare i progressi verso gli obiettivi dell'Unione Europea e valutare l'efficacia delle azioni sui temi al centro della Tabella di marcia.",
  ],
  [
    "Cosa descrive il Complementary impact indicators:",
    "il livello di impatto, in termini di consumo di acqua e di energia e produzione di emissioni di CO2.",
  ],
  [
    "L'economia circolare punta a:",
    "trasformare rifiuti o scarti  così da farli diventare risorse e materie prime per altre filiere produttive.",
  ],
  [
    "Cosa richiede la transazione verso un'economia circolare:",
    "nuovi modelli produttivi e di business, sinergie tra settori, nuove competenze e una creatività improntata alla sostenibilità, e prevede che la pubblica amministrazione lavori ad una facilitazione normativa e burocratica che possa sbloccare tutto questo potenziale.",
  ],
  [
    "Cosa vuol dire filiera circolare:",
    "costruire delle filiere sulla base di criteri di compatibilità ambientale e sociale",
  ],
  [
    "Da cosa è formato il modello della filiera circolare:",
    "una sistema articolato di aziende, partner o fornitrici, che coinvolge tutte le attività della supply chain, in particolare nelle fasi di approvvigionamento delle materie prime e distribuzione delle risorse e dei beni.",
  ],
  [
    "Cosa deve fare la finanza sostenibile:",
    'Rafforzarsi e trovare alternative per le PMI"\n                    ',
  ],
  [
    "Cos'è la materia seconda:",
    "la materia proveniente da riutilizzo, reimpiego di scarti e residui di lavorazione , da preparazione per il riutilizzo, riciclo e recupero rifiuti;",
  ],
  ["Lo smaltimento in discarica si è ridotto:", "dal 27% al 14%"],
  [
    "Da cosa è costituita l'industria di preparazione al riciclo:",
    'costituita da quell\'insieme di imprese che selezionano e qualificano rifiuti avviabili al riciclo predisponendo la "materia seconda" impiegata dalle industrie di riciclo."\n                    ',
  ],
  [
    "Nell'ultimo decennio, quale è stata una delle novità della filiera industriale del reciclo:",
    "l'introduzione della raccolta differenziata dei rifiuti alimentari e vegetali e la loro valorizzazione industriale, agronomica ed energetica.",
  ],
  [
    "Quali sono i benefici apportati dall'eco innovazione:",
    "riduzione della pressione sull'ambiente, l'approvvigionamento sostenibile e programmabile di materie prime, l'aumento di competitività e innovazione, la creazione di nuovi posti di lavoro",
  ],
  [
    "A quale conclusione giunge il  quinto Rapporto di valutazione (AR5) del Gruppo intergovernativo sul cambiamento climatico dell'ONU (IPCC):",
    "le attività umane, in particolare l'emissione di anidride carbonica, sono la causa principale del cambiamento climatico. I mutamenti climatici sono evidenti ovunque sul pianeta",
  ],
  [
    'Quale miglioramento apporta la strategia definita dei "tetti verdi":',
    "migliorano le condizioni microclimatiche degli edifici, soprattutto mitigando gli effetti termici delle temperature estreme nel corso dell'anno e possono migliorare anche la qualità dell'aria nelle aree urbane",
  ],
  [
    "Cosa significa efficienza dei sistemi e dell'infrastruttura:",
    "impiegando le moderne tecnologie nell'infrastruttura si ottengono le case passive o gli edifici autarchici. Il fabbisogno energetico è ridotto al minimo o coperto dall'impianto energetico proprio dello stabile.",
  ],
  [
    "La norma Uni EN ISO 14001 specifica:",
    "la norma specifica i requisiti di un sistema di gestione ambientale che un'organizzazione può utilizzare per sviluppare le proprie prestazioni ambientali.",
  ],
  [
    "Come possono essere considerati i territori urbani:",
    "sistemi complessi di altri numerosi sottosistemi complessi: rifiuti, acqua, edifici, ciclo alimentare, energia, mobilità.",
  ],
  [
    "Da cosa è costituito il territorio urbanizzato:",
    "dalla città compatta e dall'urbanizzazione diffusa negli spazi periurbani",
  ],
  [
    "Cosa è sharing cities:",
    "il progetto europeo che vedrà la collaborazione di alcune metropoli e che punta a trovare soluzioni per città e comunità intelligenti che integrano i settori dell'energia, trasporti e ICT attraverso progetti pilota.",
  ],
  [
    "Cos'è il luogo pierurbano:",
    'luogo di transizione tra i centri densi e i sobborghi esterni, dove le componenti urbane e quelle naturali e rurali interagiscono"\n                    ',
  ],
  [
    "Gli impianti da realizzare sono indispensabili soprattutto per:",
    "il riciclaggio, per la frazione organica del rifiuto",
  ],
  [
    "Quali concetti sono alla base per costruire la pianificazione della termovalorizzazione:",
    "il ciclo di vita dei prodotti e la gerarchia dei rifiuti",
  ],
  [
    "Da cosa inizia l'eco efficienza:",
    "con l'assunzione di un flusso lineare e unidirezionale dei materiali attraverso i sistemi industriali",
  ],
  ["Cos'è un downcycling:", "un downgrade della qualità del materiale"],
  [
    "Cosa propone l'eco-efficacia:",
    "la trasformazione dei prodotti e dei loro flussi materiali in modo tale da formare una relazione di supporto tra i sistemi ecologici e la futura crescita economica",
  ],
  [
    "L'upcycling permette:",
    "ai materiali di mantenere il loro status nel tempo",
  ],
  [
    'La teoria "cradle to cradle" , dalla culla alla culla, è stata elaborata da:',
    "Braungart e McDonough",
  ],
  [
    "Su cosa si basa la teoria dalla culla alla culla:",
    "per prosperare, l'uomo deve cambiare strategia e quindi passare dal concetto di eco-efficienza al concetto di eco -efficacia e riformulare quindi il suo modello di sviluppo.\"\n                    ",
  ],
  [
    "Come si esplica il concetto  di eco-efficacia:",
    "nella riprogettazione delle attività umane che vede nel materiale utilizzato un flusso che non può essere interrotto",
  ],
  [
    "Nella logica di McDonough, l'edificio è:",
    "una fonte di nutrienti che possono essere inseriti nuovamente nel processo produttivo apportando valore",
  ],
  [
    "In quale progetto sostenibilità ed architettura trovano la loro perfetta sinergia:",
    "Park 20|20",
  ],
  [
    "Cosa è Breeam:",
    "uno dei metodi più utilizzati al mondo di valutazione e certificazione ambientale per le costruzioni, che stabilisce lo standard di bioedilizia di più alta qualità.",
  ],
  ["La green economy è una produzione di sistema che deriva:", "dal basso"],
  ["Alla green economy si devono circa:", "3 milioni di green jobs"],
  [
    "Di quante unità è cresciuta l'occupazione green nell'anno 2018, rispetto all'anno 2017:",
    "100 mila unità",
  ],
  [
    "Qual'è la regione italiana che concentra piùoccupati in materia green:",
    'Lomardia"\n                    ',
  ],
  [
    "Per cosa si differenzia la domanda dei lavori green:",
    "elevato livello dei titoli di studi",
  ],
  [
    "Per raggiungere gli obiettivi di crescita dei green jobs, un progetto di formazione integrato dovrebbe agirebbe sui versanti:",
    "formazione manageriale      formazione di specifiche professionalità settoriali \r\ndell'assistenza e affiancamento allo sviluppo dei green jobs",
  ],
  [
    "Quale regione italiana è leader per specializzazione green dei contratti:",
    "Lombardia",
  ],
  [
    "Quali imprese che hanno investito nel green hanno avuto risultati positivi nell'export:",
    "manifatturiere",
  ],
  [
    "Quale è la seconda area italiana per  eco- investimenti:",
    'Veneto"\n                    ',
  ],
  [
    "In termini pratici, per l'Italia, cosa vuol dire essere green:",
    "crescita virtuosa, posti di lavoro ben pagati, innovazione, competitività, migliore qualità della vita",
  ],
  [
    "La teoria degli stakeholder è il punto di partenza per comprendere i meccanismi con cui l'impresa ottiene:",
    "legittimazione sociale",
  ],
  [
    "La prima teoria organica degli stakeholder è attribuibile a:",
    'Freeman"\n                    ',
  ],
  ["Come vengono definiti gli stakeholder:", "portatori di interesse"],
  ["Chi sono gli shareholder:", "azionisti"],
  ["Gli stakeholder possono essere:", "interni ed esterni all'impresa"],
  [
    "La responsabilità sociale di impresa è:",
    "interamente interna all'impresa",
  ],
  [
    "Usare materiale riciclato e comunicarlo sui packaging è una strategia di differenziazione:",
    "si",
  ],
  [
    "Chi sono gli studiosi che teorizzano il framework della service dominant logic:",
    "Vargo e Lusch",
  ],
  [
    "La co-creazione del valore si colloca in una dimensione:",
    "aziendalistica",
  ],
  ["Cos'è effettivamente la co-creazione:", "la creazione di massa"],
  [
    "Cosa può favorire la quarta rivoluzione industriale:",
    "può far aumentare competitività ed efficienza, ma anche favorire l'introduzione di nuovi modelli di business sino a trasformare profondamente il comparto industriale e i meccanismi attraverso cui produrre valore, innovazione, occupazione e benessere",
  ],
  [
    "La digitalizzazione può rappresentare un fattore abilitante per la transizione a un modello circolare:",
    "si",
  ],
  [
    "Quali sono le parole chiave che caratterizzano l'economia circolare:",
    "riduzione, raccolta, riuso, recupero e riciclo",
  ],
  [
    "Come devono essere progettati i macchinari dell'industria 4.0 che rispettano le leggi dell'economia circolare:",
    "devono essere progettati con sensori per la manutenzione predittiva e per l'efficienza della produzione",
  ],
  [
    "Cosa concepisce la simbiosi industriale:",
    "Concepisce e realizza un eco-sistema industriale in aree geograficamente definite",
  ],
  [
    "Cos'è l'ENEA:",
    "Ente pubblico di ricerca italiano che opera nei settori dell'energia, dell'ambiente e delle nuove tecnologie a supporto delle politiche di competitività e di sviluppo sostenibile",
  ],
  [
    "Cosa si intende per ubiquitous computing:",
    'Un modello post-desktop di interazione uomo-macchina"\n                    ',
  ],
  [
    "Qualo sono le tendenze importanti per la crescita del sistema produttivo, secondo il Rapporto ASviS 2017:",
    "L'innovazione basata sulle tecnologie digitali; il passaggio all'economia circolare; \r\nlo sviluppo di una nuova generazione di infrastrutture adeguate al 21esimo secolo",
  ],
  [
    "L'unione fra Industria 4.0 ed Economia Circolare costituisce la base per nuovi modelli di business quali:",
    "product-Service System e Pay per use",
  ],
  ["L'economia ecologica è stata introdotta da:", "Herman Daly"],
  [
    "Come viene definita l'urgenza delle aspettative degli stakeholder nei confronti dell'impresa:",
    "in base alla sensibilità temporale",
  ],
  [
    "In base a quali eventi l'impresa assume un ruolo significativo nella società rispetto al passato:",
    "globalizzazione dei mercati e della nascita di nuove sfide globali sociali e ambientali",
  ],
  [
    "Cosa permette la terza generazione di stakeholder engagement all'impresa:",
    "di allineare la performance sociale, ambientale ed economica alla strategia",
  ],
  [
    "Cosa offre la AA1000SES all'impresa:",
    "una guida esauriente su come fare in modo che lo stakeholder engagement sia in linea con le tematiche rilevanti per l'impresa e per i suoi stakeholder e sulle attività da mettere in atto affinché il coinvolgimento degli stakeholder risulti allineato alla strategia dell'organizzazione\"\n                    ",
  ],
  [
    "Quali parametri bisogna considerare per comprendere il livello di inclusività degli stakeholder:",
    "la rilevanza, completezza e rispondenza",
  ],
  [
    "La AA1000SES struttura il processo di engagement in 4 fasi:",
    "Pianificare, Preparare, Implementare rendicontare",
  ],
  [
    "Grazie all'upcycling:",
    "Gli oggetti possono rinascere sotto altra forma con un valore intrinseco quasi sempre più alto rispetto a quello che avevano nella loro prima vita",
  ],
  [
    "I vantaggi dell'upcycling sono principalmente legati a:",
    "risparmio di energia e tutela dell'ambiente",
  ],
  [
    "Il riciclaggio, nonostante i suoi vantaggi contribuisce a:",
    'alimentare la mentalità usa e getta"\n                    ',
  ],
  ["La matita perpetua utilizza il legno:", "no"],
  [
    "Ai fini della rendicontazione di sostenibilità è condizione necessaria:",
    "misurare le sensibilità interne ed esterne all'organizzazione",
  ],
  [
    "Le tematiche che risultano essere rilevanti, in seguito ad un bilanciamento sostenibile da parte dell'organizzazione, vengono denominate:",
    "materiali",
  ],
  [
    "La definizione dello IAASB, pur avendo una validità di matrice prettamente economica, definisce gli interlocutori dell'azienda:",
    "users",
  ],
  [
    "Cos'è Account Ability 1000:",
    "uno standard di adesione volontaria per l'acquisizione di un profilo di responsabilità sociale di una organizzazione attraverso l'attenzione all'impegno etico e sociale verso i propri portatori d'interesse\"\n                    ",
  ],
  [
    "L'analisi delle informazioni, secondo l'AA1000, prende in considerazione:",
    "i driver della sostenibilità e la capacità di rendere conto sulla base delle preoccupazioni ed aspettative dell'organizzazione e dei suoi stakeholder",
  ],
  [
    "Chi è responsabile del processo di determinazione della materialità:",
    "l'organizzazione",
  ],
  [
    "Cos'è l'Integrated Report:",
    "un modello innovativo in grado di dare contezza della modalità con cui le aziende generano valore",
  ],
  [
    'La rappresentazione della "matrice di materialità',
    "di creare una tabella di elementi, il più delle volte ordinati su valori che dipendono da due (o più) parametri, che rappresenta la base di costruzione del piano di sostenibilità e della rendicontazione di questa",
  ],
  [
    "Il GRI sviluppa quattro fasi necessarie per la determinazione della materialità:",
    'identificazione delle tematiche \t\t\t\t\t\tDeterminazione delle priorità\r\nConvalida \r\nRevisione"\n                    ',
  ],
  [
    "Le fasi solite dello sviluppo di un corretto engagement sono:",
    "la gestione bilanciata fra le aspettative sociali ed economiche degli stakeholder e quelle dell'impresa;il coinvolgimento (engagement) all'interno del quale l'organizzazione internalizza gli stakeholder nel proprio processo decisionale, facendoli partecipare alla gestione, alla condivisione di informazioni, al dialogo ed alla creazione di modelli condivisi di responsabilità.",
  ],
  [
    "L'incapacità dei bilanci di esercizio di rispondere alle richieste degli stakeholder si è manifestata attraverso:",
    "una perdita di fiducia nell'attendibilità delle informazioni presentate. una dichiarata focalizzazione sulle performance economiche,  una disattenzione  all'eterogenità delle risorse",
  ],
  [
    "Il bilancio di esercizio è:",
    "un documento che rendiconta le performance economiche di un'azienda, ma fornisce limitate informazioni per esprimere un giudizio sulle risorse che determinano prospettive di performance future",
  ],
  [
    "Cosa ha portato all'affermarsi della necessità di condurre l'azienda rispetto all'insieme degli effetti prodotti sugli stakeholder e di quelli che gli stakeholder possono produrre su di essa:",
    "L'ampliamento delle responabilità aziendali e l'avvento della stakeholder view",
  ],
  [
    "In una prima fase i bilanci di sostenibilità erano:",
    "documenti volontari finalizzati a rendicontare la capacità di un'azienda di perseguire congiuntamente tre ordini di risultati",
  ],
  [
    "Quali sono le categorie, ordini di risultati, che il bialncio di sostenibilità deve considerare:",
    "economici, sociali e ambientali",
  ],
  [
    "L'obiettivo legato alla valutazione economica nel bilancio di sostenibilità significa:",
    "la capacità di generare ricchezza",
  ],
  [
    "Cos'è il GRI:",
    "un'organizzazione internazionale indipendente, con sede ad Amsterdam, che dal 1997 sviluppa le linee guida e gli standard per il report di sostenibilità.\"\n                    ",
  ],
  [
    "Un Rapporto di Sostenibilità conforme agli Standard GRI descrive:",
    "l'organizzazione e la sua governance, le modalità di coinvolgimento  degli stakeholder ed i temi ritenuti più rilevanti.",
  ],
  [
    "Come si individuano i temi ritenuti rilevanti da inserire nel bilancio di sostenibilità:",
    "con l 'analisi della materialità",
  ],
  [
    "Gli Standard prevedono due modalità di redazione del Bilancio di sostenibilità:",
    "core e Comprehensive",
  ],
  [
    "Cosa sono le green practice:",
    "una serie di strumenti e assetti organizzativi - gestionali che sono volti a ridurre l'impatto dell'attività d'impresa e ad implementare strategie green - oriented",
  ],
  [
    "Quali sono le principali aree aziendali entor cui l'impresa opera in una logica sostenibile:",
    "produzione di energia da fonti alternative;recupero di scarti e prodotti, secondo i modelli dell'economia circolare;\r\nottimizzazione della logistica;\r\ninnovazione di prodotto;\r\nefficienza nei processi produttivi o/e nelle strutture di staff.\"\n                    ",
  ],
  [
    "Perchè le imprese sono meno sensibili agli investimenti nel settore delle energie rinnovabili:",
    "a causa delle normative esistenti",
  ],
  [
    "Quali sono i principali obiettivi green da parte delle aziende, in questo momento:",
    "il tema dell'efficienza e risparmio dei costi",
  ],
  [
    "Le green practice afferiscono per più del 50% all'area:",
    "della corporate e dell'operation",
  ],
  [
    "Cosa significa eco-design:",
    "progettare e realizzare prodotti dal design sostenibile ovvero gli eco prodotti",
  ],
  [
    "La prpgetazione dell'eco design  di un bene o prodotto tiene conto di diversi fattori:",
    "la collocazione geografica , l'habitat, la cultura, il sistema socio-politico, la disponibilità di risorse naturali ed altre peculiarità locali",
  ],
  [
    "I packaging alternativi, sicuri e sostenibili sono composti da:",
    'batteri e microorganismi in grado di sostituire i materiali derivati dal petrolio"\n                    ',
  ],
  [
    "Cos'è comieco:",
    "il consorzio italiano per il recupero e il riciclo degli imballaggi a base cellulosica",
  ],
  [
    "A cosa punta Deliveroo nel lungo periodo:",
    "ad azzerare l'uso della plastica nel packaging del cibo.",
  ],
  [
    "Cosa ci rappresenta il codice dell'ambiente:",
    "che la gestione dei rifiuti costituisce attività di pubblico interesse",
  ],
  [
    "La gestione dei rifiuti deve seguire i principi:",
    "precauzione, prevenzione, sostenibilità, proporzionalità, responsabilizzazione e di cooperazione di tutti i soggetti coinvolti nella produzione, nella distribuzione, nell'utilizzo e nel consumo di beni da cui originano i rifiuti, nonché del principio chi inquina paga",
  ],
  [
    "La gestione dei rifiuti è effettuate secondi i criteri di:",
    "efficacia, efficienza, economicità, trasparenza, fattibilità tecnica ed economica, nonché nel rispetto delle norme vigenti in materia di partecipazione e di accesso alle informazioni ambientali",
  ],
  [
    "Quale principio ha un ruolo chiave nell'ottica della realizzazione dell'economia circolare:",
    "la responsabilità estesa del produttore",
  ],
  ["EPF è l'acronimo di:", "extended Producer Responsability"],
  [
    "La responsabilità estesa del produttore, pertanto, è quel principio per cui:",
    'il produttore di un dato manufatto non può disinteressarsi del prodotto che ha immesso sul mercato, ma, al contrario, è tenuto ad occuparsi anche del fine vita dello stesso."\n                    ',
  ],
  [
    "Rifiuto è:",
    "qualsiasi sostanza o oggetto di cui il detentore si disfi o abbia l'intenzione o abbia l'obbligo di disfarsi",
  ],
  [
    "Il sottoprodotto:",
    'non passa mai per una fase in cui siamo in presenza di un rifiuto, ragione per la quale nessuno si "disfa" del sottoprodotto.',
  ],
  [
    "Se la sostanza o l'oggetto è originato da un processo di produzione, di cui costituisce parte integrante e il cui scopo primario non è la produzione di tale sostanza od oggetto, parliamo di:",
    'sottoprodotto"\n                    ',
  ],
  [
    "Un rifiuto cessa di essere tale (End of Waste) quando:",
    "è stato sottoposto ad un'operazione di recupero e soddisfa criteri specifici da adottare nell'ambito delle definite condizioni",
  ],
  [
    "Dalla prima indagine svolta da EY e Confindustria risulta he la disponibilità dati più uniforme sul perimetro di tutte le società coinvolte riguarda le fasi di:",
    "approvvigionamento, produzione e reimpiego di materie ottenute da rifiuti",
  ],
  [
    "Quali sono gli indicatori sviluppati dallo studio:",
    "il Circularity Index, il Pricing Index \r\nl'Opportunity Index",
  ],
  [
    "Questi indicatori misurano l'economia circolare a diversi livelli di aggregazione, quali:",
    "materia prima, associazione, filiera nazionale",
  ],
  [
    "Più alto è il valore del circular index e:",
    "maggiore è il livello di circolarità dell'associazione, della filiera, o del settore, a seconda del perimetro considerat\"\n                    ",
  ],
  [
    "L'analisi dell'andamento negli anni del Circularity Index, calcolato grazie ai dati storici forniti dalle associazioni, consente:",
    "l'identificazione dei trend dell'economia circolare nelle filiere considerate ai fini di questo studio, in termini di volumi di materie prime in ingresso rispetto ai processi di produzione",
  ],
  [
    "Il Pricing Index si propone di:",
    "quantificare la convenienza di acquistare materie prime seconde  rispetto all'acquisto di materie prime vergini",
  ],
  [
    "L'Opportunity Index, deriva da:",
    "dalla combinazione dei di circularity e pricing index",
  ],
  [
    "L'Opportunity Index valuta:",
    'benefici ottenibili variando la quota di materia prima seconda rispetto al totale dei volumi di acquisto"\n                    ',
  ],
  ["Un limite dell'opportunity index è:", "il perimetro di osservazione"],
  [
    "Cosa rappresentano le reti di impresa:",
    "una risposta innovativa del nostro ordinamento per consentire alle imprese di affrontare insieme le sfide della concorrenza internazionale",
  ],
];

// inserisci dentro a le response fetch [{},{},{}]
a = [];
let b = [];
a.forEach((e) => {
  estrai(e);
});
function estrai(a) {
  a = a["data"]["testSource"];
  [...a].forEach((e) => {
    b.push([
      e["question"],
      [...e["answers"]][+e["correct_answer"] - 1]["answer"],
    ]);
  });
}
console.log(JSON.stringify(b));

console.log(
  all.replace(/\["/g, "[`").replace(/","/g, "`,`").replace(/\"]/g, "`]")
);

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, function (match) {
    const escapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return escapes[match];
  });
}
