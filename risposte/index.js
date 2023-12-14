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
    "L'Ingegneria del software riguarda:",
    "teorie, metodi e tecniche nello sviluppo industriale del software",
  ],
  [
    "Per definizione, l'Ingegneria del software copre i seguenti aspetti:",
    "progetto, implementazione, collaudo e documentazione del software",
  ],
  ["Aspetto fondamentale dell'Ingegneria del software è:", "la sistematicità"],
  [
    "La nascita dell'Ingegneria del software è dovuta:",
    'alla "crisi del software"',
  ],
  [
    "Il software nel periodo 1950-1965:",
    "È sviluppato principalmente per singoli clienti; è di tipo batch e deve risolvere problemi spesso molto complessi",
  ],
  [
    "Le innovazioni principali nel periodo 1970-1990 sono:",
    "manutenzione, analisi difettosità e object oriented programming",
  ],
  [
    "Nel periodo dal 1990 ad oggi prendono piede le nuove metodologie di sviluppo del software definite:",
    "agili",
  ],
  [
    "L'Ingegneria del software asserisce che, dal punto di vista del Management:",
    "se il progetto è in ritardo per recuperare non basta aumentare il numero di programmatori",
  ],
  [
    "Il punto di vista di un cliente rispetto ai requisiti del software è che:",
    "i mutamenti dei requisiti del software si gestiscono agevolmente grazie alla flessibilità del software",
  ],
  [
    "L'Ingegneria del software asserisce che, dal punto di vista del Programmatore:",
    "il prodotto di un progetto sono il programma funzionante, la documentazione e la guida alla manutenzione",
  ],
  [
    "Un prodotto software:",
    "In genere viene usato da persone diverse da quelle che lo hanno sviluppato",
  ],
  ["Un prodotto software include:", "Prodotti generici e prodotti specifici"],
  [
    "L'ingegneria del software:",
    "È una disciplina che definisce le regole per il processo di produzione del software",
  ],
  [
    "Ingegneria del software differisce dall'informatica perché:",
    "Ha a che fare con concetti ed aspetti più pratici",
  ],
  [
    "Il principio di rigore dell'ingegneria del software:",
    "È un concetto che riguarda precisione e accuratezza",
  ],
  [
    "I principi dell'ingegneria del software possono essere definiti come:",
    "Rigore e formalità, modularità, astrazione, anticipazione al cambiamento, generalità, incrementalità",
  ],
  [
    "Quale di queste non è una attività richiesta nel processo di sviluppo software:",
    "Ristrutturazione",
  ],
  [
    "Quale è il significato dell'acronimo C.A.S.E.:",
    "Computer Aided Software Engineering",
  ],
  [
    "La qualità di un prodotto software si misura in termini di:",
    "Conformità dei requisiti",
  ],
  [
    "Un sistema software è affidabile:",
    "Se non si manifestano malfunzionamenti",
  ],
  ["Tra le fasi del ciclo di vita del sofware non sempre troviamo:", "Ritiro"],
  [
    "Il ciclo di sviluppo del sofwtare include:",
    "Analisi, progettazione, implementazione, test, installazione e collaudo",
  ],
  [
    "Per modello del ciclo di vita del software si intende:",
    "Una caratterizzazione descrittiva o prescrittiva di come un sistema dovrebbe essere sviluppato",
  ],
  ["Le tipologie di ciclo di vita del sofwtare propste di recente sono:", "4"],
  ["Il modello Waterfall:", "È un modello sequenziale"],
  [
    "Il modello a cascata prevete che la prima fase sia quella di:",
    "Studio di fattibilità",
  ],
  [
    "La progettazione, quale fase del modello a cascata:",
    "È la fase in cui sono accuratamente definite tutti i moduli  e le componenti",
  ],
  [
    "Quali di questi non è una variante del modello waterfall:",
    "Modello sequenziale",
  ],
  [
    "Il modello V&amp;V indica:",
    "Un modello che prevede una fase di verifica e di convalida",
  ],
  ["Nel modello a V:", "La fase centrale è rappresentata dalla codifica"],
  [
    "Le tipologie di prototipi usa e getta si definiscono:",
    "Mock-ups e breadboards",
  ],
  [
    'La prototipazione "throw-away":',
    "Rende più comprensibili i requisiti e facilita la realizzazione del software",
  ],
  [
    "La fase iniziale dello sviluppo incrementale è:",
    "L'individuazione preliminare dei requisiti",
  ],
  [
    "Le fasi dello sviluppo incrementale che devono o possono essere ripetute sono:",
    "4 - Sviluppo dell'incremento, convalida dell'incremento, integrazione dell'incremento, convalida",
  ],
  [
    "Nello sviluppo iterativo il software viene realizzato:",
    "Attraverso una serie di mini progetti brevi chiamati iterazioni",
  ],
  [
    "Lo sviluppo incrementale prevede:",
    "Lo sviluppo di nuove funzionalità durante ogni incremento",
  ],
  [
    "I settori del modello a spirale sono:",
    "Determinazione degli obiettivi, valutazione del rischio, sviluppo e convalida e pianificazione",
  ],
  [
    "Il settore più importante del modello a spirale è:",
    "Sono tutti equamente importanti",
  ],
  [
    "La pianificazione, quale settore del modello a spirale prevede:",
    "La revisione e la pianificazione del prossimo giro della spirale",
  ],
  [
    "La figura di risk manager ha il compito:",
    "Di individuare e minimizzare i rischi",
  ],
  [
    "Le principali componenti di un progetto sono:",
    "Work products, work packages, schedule, participant e task",
  ],
  ['La componente detta anche "deliverable" è:', "work product"],
  [
    'Il "reporting" è un meccanismo di interazione utilizzato:',
    "per scambiarsi informazioni circa lo stato del progetto.",
  ],
  [
    "Le principali metodologie di interazione in in progetto software sono:",
    "Reporting, decisione e comunicazione",
  ],
  [
    "Gli eventi di comunizaione possono essere di due tipi:",
    "pianificati e straordinari",
  ],
  ["Gli eventi di comunicazione pianificati  sono:", "9"],
  [
    "L'ispezione è una procedura che ha l'obiettivo di:",
    "verificare la conformità dei requisiti",
  ],
  [
    'Per tipologia di evento di comunicazione straordinaria "issue resolution" si intende:',
    "selezione di una singola soluzione ad un problema per il quale sono state proposte più soluzioni",
  ],
  ["Tra le tecniche di comunicazione sincrona non troviamo:", "Email"],
  ["Nei meetings il ruolo del segretario spetta:", "al Minute Taker"],
  [
    "Un modello è definito come:",
    "Un'astrazione che descrive un sistema o un sottosistema",
  ],
  ["Un concetto descrive:", "Le proprietà comuni dei fenomeni"],
  [
    "Una Classe nel contesto della modellazione:",
    "E' composta da attributi che ne indicano lo stato e metodi che ne indicano il comportamento",
  ],
  [
    "Per tipo di una variabile si intende:",
    "La rappresentazione di tutte le possibili istanze di una variabile",
  ],
  [
    "La modellazione orientata agli oggetti:",
    "E' un approccio alla modellazione di un sistema software utilizzato all'inizio del ciclo di vita del software",
  ],
  ["UML vuol dire:", "Unified Modeling Language"],
  ["UML definisce:", "5 principali tipologie di diagrammi"],
  ["I rettangoli nelle convenzioni UML rappresentano:", "Classi e Istanze"],
  [
    "Per Activity Diagram si intende:",
    "Una rappresentazione del comportamento dinamico del sistema",
  ],
  [
    "Per Statechart Diagram si intende:",
    "Una rappresentazione del comportamento dinamico di un singolo oggetto come una macchina a stati finiti",
  ],
  [
    "Cosa rappresenta il diagramma di caso d'uso:",
    "la descrizione completa di un comportamento di un sistema osservato dall'esterno",
  ],
  [
    "Cosa rappresenta un caso d'uso:",
    "una specifica modalità di utilizzo del sistema da parte di uno o più utenti",
  ],
  [
    "A cosa corrisponde un attore:",
    "un ruolo interpretato da un utente sul sistema<br><br>",
  ],
  [
    "Un attore primario rappresenta:",
    "un sistema esterno con partecipazione attiva ad un caso d'uso esprimendo un interesse diretto nella sua buona riuscita<br><br>",
  ],
  [
    "Un attore secondario rappresenta:",
    "una entità esterna che interagisce con il sistema nell'ambito del caso d'uso senza perseguire un suo interesse diretto<br><br>",
  ],
  [
    "Cosa rappresenta un'associazione in un diagramma di caso d'uso:",
    "un collegamento tra gli attori e i casi d'uso nel quale sono coinvolti",
  ],
  [
    "Cosa rappresenta una generalizzazione nell'ambito di un diagramma di caso d'uso:",
    "un modo di definire nuovi casi d'uso specializzando altri casi d'uso",
  ],
  [
    "A cosa serve la relazione di estensione in un diagramma di casi d'uso:",
    "ad allargare il comportamento di un caso d'uso<br><br>",
  ],
  [
    "Cosa serve la relazione di inclusione in un diagramma di casi d'uso:",
    "ad inglobare in uno use una sequenza di interazioni definite a parte",
  ],
  [
    "In quale fase di lavoro su un sistema software vengono prodotti i diagrammi di casi d'uso:",
    "definizione dei requisiti del sistema",
  ],
  [
    "Cosa rappresenta uno scenario:",
    "una sequenza di passi che caratterizzano un'interazione tra un utente e il sistema",
  ],
  [
    "Un caso d'uso è caratterizzato da:",
    "un obiettivo perseguito da un utente",
  ],
  [
    "Cosa differenza uno scenario principale di successo dalle estensioni:",
    "lo scenario principale identifica il flusso principale di eventi; le estensioni caratterizzano eventuali variazioni ed eccezioni",
  ],
  [
    "A cosa corrisponde un passo di scenario di un caso d'uso:",
    "a una singola interazione tra attore e sistema",
  ],
  [
    "Come si esprime il contenuto di un caso d'uso:",
    "usando il linguaggio naturale",
  ],
  [
    "Quali informazioni sarebbe opportuno associare a ogni caso d'uso (oltre al nome, scenario principale e estensioni):",
    "precondizioni, garanzia e trigger",
  ],
  [
    "Dire quale di queste effermazioni è vera:<br><br>:",
    "il diagramma di caso d'uso non fornisce i dettagli del comportamento del sistema",
  ],
  [
    "Il contenuto di un caso d'uso racconta:",
    "l'insieme di tutti gli scenari possibili di utilizzo del sistema da parte di un utente<br><br>",
  ],
  [
    "Il caso d'uso si svolge:",
    "attraverso un flusso sequenziale di interazioni tra l'attore e il sistema",
  ],
  [
    "Cosa riporta il campo trigger nella descrizione di un caso d'uso:",
    "l'evento che dà origine al caso d'uso<br><br>",
  ],
  [
    "A cosa serve un diagramma delle classi:",
    "A descrivere i tipi degli oggetti chef anno parte del sistema e le loro relazioni statiche<br><br>",
  ],
  [
    "Cosa rappresentano le tre sezioni di una classe:",
    "nome della classe, attributi e operazioni<br><br>",
  ],
  [
    "Come si potrebbe tradurre nel codice un'associazione monodirezionale?:",
    "con un solo attributo aggiunto alla classe non puntata dalla freccia dell'associazione",
  ],
  [
    "Perché la molteplicità delle associazioni sono importanti:",
    "perché definiscono quanti oggetti potranno entrare a farvi parte e quindi impongono vincoli sulla implementazione",
  ],
  [
    'Dire se questa affermazione è vera o falsa: "I termini operazione e metodo sono sinonimi":',
    "falso, più metodi potrebbero implementare la stessa operazione<br><br>",
  ],
  [
    "Come si possono rappresentare i vincoli in UML:",
    "con OCL o come commenti testuali o espressioni logico-matematiche",
  ],
  [
    "Un attributo descrive:",
    "una caratteristica propria di ogni istanza della classe<br><br>",
  ],
  [
    "Un'operazione descrive:",
    "un'azione che può essere eseguita sull'istanza di una classe<br><br>",
  ],
  ["Un'associazione riflessiva si applica:", "tra istanze della stessa classe"],
  [
    'Un\'operazione di tipo "set" permette di:',
    "modificare lo stato interno di un oggetto di una classe",
  ],
  [
    "Indicare se questa affermazione è vera o falsa: 'Un'interfaccia può avere operazioni private':",
    "falso, può solo avere operazioni pubbliche",
  ],
  [
    "Specificare qual è la differenza tra aggregazione e composizione:",
    "l'aggregazione non implica che il contenuto appartenga a un solo contenitore, mentre la composizione sì",
  ],
  [
    "Indicare cosa differenzia una classe astratta da un'interfaccia:",
    "una classe astratta può fornire l'implementazione di qualche suo metodo mentre un'interfaccia può fornire solo la definizione",
  ],
  [
    "La generalizzazione permette di:",
    "definire una classe a partire da un'altra specializzandone alcuni aspetti",
  ],
  [
    "Una superclasse in una relazione di generalizzazione esprime:",
    "le caratteristiche comuni delle varie sottoclassi",
  ],
  [
    "C'è una relazione di dipendenza tra due classi se:",
    "una delle due classi crea istanze dell'altra classe",
  ],
  [
    "C'è una relazione di dipendenza tra due classi se:",
    "una classe invoca le operazioni dell'altra",
  ],
  [
    "Una relazione di aggregazione fra due classi indica:",
    "una relazione di 'è composta da'/'è parte di'",
  ],
  [
    "Una relazione di composizione fra due classi indica:",
    "una forma di subordinazione strutturale rigida",
  ],
  [
    "Una relazione di generalizzazione è:",
    "anche una relazione di specializzazione vista da una prospettiva diversa",
  ],
  [
    "Cosa descrive un diagramma di sequenza:",
    "la collaborazione di un gruppo di oggetti per implementare un certo comportamento",
  ],
  [
    "La linea di vita di un partecipante rappresenta:",
    "la durata della vita del partecipante nello scenario considerato",
  ],
  [
    "La barra di attivazione di un partecipante rappresenta:",
    "i momenti in cui l'oggetto è attivo nell'interazione",
  ],
  [
    "Una chiamata interna è:",
    "È un messaggio che un oggetto invia a se stesso",
  ],
  [
    "Il messaggio trovato serve a:",
    "definire l'inizio dello scenario e non deriva da nessuno dei partecipanti",
  ],
  [
    "Come si indica la creazione di un nuovo oggetto in un diagramma di sequenza:",
    'con un messaggio "new" che termina sul lato sinistro del nuovo oggetto',
  ],
  [
    "Indicare perché i frame d'interazione sono utili perché:",
    "aggiungono costrutti di controllo e modularità",
  ],
  [
    'L\'operatore "alt" usato in un frame di interazione indica che:',
    "il frame contiene due flussi d'interazione da eseguire in alternativa",
  ],
  [
    'L\'operatore "loop" usato in un frame di interazione indica che:',
    "il frammento può essere eseguito più volte finché la condizione si mantiene vera",
  ],
  [
    "Differenza tra una chiamata sincrona e una sincrona:",
    "una chiamata sincrona presuppone una risposta ed è bloccante; una asincrona no",
  ],
  [
    "Cosa rappresenta il diagramma di macchina a stati:",
    "la sequenza di stati che definiscono il comportamento di un oggetto durante il suo ciclo di vita",
  ],
  [
    "L'uso a cui si prestano particolarmente i diagrammi di macchina a stati è quello di:",
    "per rappresentare il comportamento di un oggetto per il controllo automatizzato di macchine<br><br>",
  ],
  [
    "Lo stato in un diagramma di macchina a stati rappresenta:",
    "un'astrazione di una condizione interna di un oggetto che determina il comportamento al verificarsi di un evento",
  ],
  ["Un evento non può essere:", "una transizione di stato"],
  [
    "Lo pseudo stato iniziale serve per:",
    'puntare al primo stato effettivo della macchina a stati, ma solitamente non è un "vero" stato',
  ],
  [
    "Lo pseudo stato finale server per:",
    'definire il completamento dell\'esecuzione della macchina a stati, ma solitamente non è un "vero" stato<br><br>',
  ],
  [
    "Le tre parti che possiamo usare per annotare una transizione sono:",
    "evento, condizione e azione<br><br>",
  ],
  [
    "Definire un'attività interna di risposta a un evento significa:",
    "voler rispondere all'evento senza definire un transizione di stato<br><br>",
  ],
  [
    'Dire se la seguente affermazione è vera o falsa: "Eseguire una auto-transizione significa sempre eseguire solo l\'attività ad essa associata":',
    "non è detto sia vero, se lo stato definisce attività di ingresso e uscita queste sarebbe eseguite<br><br>",
  ],
  [
    "La differenza tra un'attività interna e una associata a uno stato di attività è:",
    "l'esecuzione di un'attività interna è subordinate all'occorrenza di un certo evento;  l'attività associata allo stato viene eseguita semplicemente perché si trova in quello stato",
  ],
  [
    "Un diagramma di attività serve a:",
    "descrivere la logica procedurale, un processo di business o un workflow",
  ],
  [
    "Una fork introduce un flusso di esecuzione alternativo:",
    "no non è vero, una fork introduce flussi d'esecuzione concorrenti",
  ],
  [
    "Un'azione rappresenta:",
    "un'unità di lavoro atomica al livello di dettaglio di interesse per descrivere l'attività",
  ],
  [
    "Un token rappresenta:",
    "il passaggio del flusso di controllo attraverso le azioni che compongono l'attività",
  ],
  [
    "Un'attività è rappresentata:",
    "tramite un grafo diretto di nodi azioni, archi e nodi di controllo",
  ],
  [
    "La differenza tra un merge e una join è:",
    "la merge riunisce flussi di controllo alternativi, la join flussi in parallelo",
  ],
  [
    "Si usa il simbolo del rastrello per annotare un'attività quando si vuole:",
    "indicare un sottodiagramma di attività, ovvero una decomposizione dell'attività annotata",
  ],
  [
    "E' opportuno definire un diagramma di attività con partizioni quando si ha bisogno di:",
    "rappresentare in modo esplicito chi svolge quale attività",
  ],
  [
    "I diagrammi di attività:",
    "rappresentano una sequenza di azioni che definiscono un'attività",
  ],
  [
    "Il flusso di controllo:",
    "passa da un'azione alla successiva dopo aver terminato l'esecuzione dell'azione seguendo il token",
  ],
  [
    "La notazione di un nodo segnale di tipo temporale consiste in:",
    "una clessidra stilizzata",
  ],
  [
    "Un nodo segnale di tipo temporale rappresenta:",
    "un vincolo temporale da rispettare per l'esecuzione dell'attività a valle",
  ],
  [
    "La notazione di un nodo segnale di accettazione di un  evento consiste in:",
    "rettangolo con la punta rientrante sul lato sinistro",
  ],
  [
    "Un nodo segnale di accettazione di un  evento rappresenta:",
    "un evento che deve verificarsi al fine di proseguire l'esecuzione delle azioni a valle",
  ],
  [
    "La notazione di un nodo di invio segnale consiste in:",
    "da un rettangolo appuntito sul lato destro",
  ],
  [
    "Un nodo  di invio segnale rappresenta:",
    "l'invio di un segnale che deve essere effettuato all'arrivo del token; dopodiché l'attività continua",
  ],
  [
    "E' possibile rappresentare solo la parte iniziale e finale di un arco per evitare di complicare eccessivamente un diagramma:",
    "Vero, usando i connettori",
  ],
  [
    "E' possibile rappresentare invocazioni multiple di una o più azioni:",
    "Vero, le regioni di espansioni consentono di rappresentare invocazioni multiple di azioni per una collezioni di oggetti",
  ],
  [
    "La fine di un particolare flusso in una regione di espansione si rappresenta:",
    "attraverso un nodo di controllo particolare rappresentata da un cerchio con una X nel mezzo",
  ],
  [
    "Un nodo segnale si attiva:",
    "all'arrivo del token su tutti gli archi in ingresso; dopodiché i nodi di attesa aspettano il segnale temporale o l'evento dall'esterno per propagare il token",
  ],
  [
    "Conviene usare i diagrammi delle classi per:",
    "per gli aspetti più importanti e cruciali del sistema software da realizzare",
  ],
  [
    "Per sfruttare al meglio i diagrammi di sequenza occorre:",
    "tenere aggiornati i diagrammi in linea con le interfacce e l'architettura sofware",
  ],
  [
    "Conviene usare i diagrammi di macchina a stati:",
    "per gli oggetti che hanno un comportamento reattivo come componenti delle interfacce grafiche",
  ],
  [
    "Conviene usare i diagrammi di attivitò quando:",
    "il focus è mettere in ordine un insieme di azioni da fare da una o più entità anche in parallelo",
  ],
  [
    "Nei diagrammi di casi d'uso:",
    "è meglio focalizzarsi sulle descrizioni testuali di casi d'uso",
  ],
  [
    "UML è un linguaggio:",
    "apprezzato per la notazione visuale e come valido strumento di comunicazione",
  ],
  [
    "UML è usato al meglio se:",
    "si modula la rappresentazione dei dettagli in base alla situazione",
  ],
  [
    "UML nella prospettiva concettuale è usato:",
    "in fase di analisi a supporto della discussione tra diverse idee su come progettare il software",
  ],
  [
    "Il diagramma degli oggetti mostra:",
    "le specifiche delle istanze degli oggetti del sistema software in un dato momento",
  ],
  [
    "Il diagramma di deployment mostra:",
    "il dispiegamento in esercizio del sistema software fra i vari nodi (server)",
  ],
  [
    "La programmazione orientata agli oggetti:",
    "coinvolge oggetti del mondo reale, dati e comportamenti ad essa associati per portare soluzioni ai problemi",
  ],
  [
    "La programmazione non strutturata:",
    "il codice è un unico blocco in cui si manipolano dati in modo sequenziale",
  ],
  [
    "La programmazione procedurale:",
    "presenta la procedura come unità elementare la quale svolge una precisa funzione che può essere richiamata anche più volte",
  ],
  [
    "Un oggetto è un'entità:",
    "che astrae i dati (attributi) e le procedure su tali dati (operazioni)",
  ],
  ["Un oggetto non può:", "definire operazioni di altri oggetti"],
  [
    "Indicare quale affermazione su l'applicazione basata su approccio orientato agli oggetti è falsa:",
    "presenta la procedura come unità elementare",
  ],
  ["Una classe è una specifica di:", "di una categoria di oggetti"],
  ["Le operazioni di una classe:", "agiscono sui dati dell'oggetto"],
  [
    "Un'applicazione basata su approccio orientato agli oggetti è frutto di:",
    "invocazioni reciproche di operazioni fra oggetti",
  ],
  [
    "Le istanze di una classe:",
    "condividono gli stessi attributi ed operazioni",
  ],
  [
    "In object-oriented, un attributo di un oggetto è:",
    "una proprietà statica che intrinsiamente distingue l'oggetto da tutti gli altri della stessa classe",
  ],
  [
    "In object-oriented un'operazione in un oggetto indica:",
    "È un'azione che un oggetto esegue su invocazione di un suo metodo",
  ],
  [
    "In object-oriented l'identità di un oggetto:",
    "una proprietà che intrinsiamente distingue l'oggetto da tutti gli altri della stessa classe",
  ],
  [
    "In object-oriented, un attributo fra gli oggetti di una stessa classe:",
    "può avere lo stesso valore",
  ],
  [
    "In object-oriented incapsulamento isignfica:",
    "accesso ai dati regolato da apposita interfaccia",
  ],
  [
    "In object-oriented, astrazione signfica:",
    "trascurare elementi non essenziali nella modellazione di un concetto per la risoluzione di un problema",
  ],
  [
    "Una di queste affermazioni è vera:",
    "per ogni entità più astrazioni sono possibili",
  ],
  [
    "In object-oriented, l'ereditarietà:",
    "permette di definire una nuova classe per specializzazione di una classe già definita",
  ],
  [
    "Una di queste affermazioni è falsa:",
    "l'ereditarietà permette di cambiare lo stato di un oggetto tramite una nuova classe",
  ],
  [
    "In object-oriented, il polimorfismo:",
    "insieme al binding dinamico permette di chiamare l'operazione sulla sottoclasse effettivamente istanziata",
  ],
  [
    "L'approccio orientato agli oggetti:",
    "È un nuovo modo di ragionare quando si risolvono problemi con sistemi software",
  ],
  [
    "Nell'approccio orientato agli oggetti per la produzione del software si:",
    "prende decisioni dettagliate solo in fase di implementazione del codice",
  ],
  [
    "L'approccio orientato agli oggetti  dovrebbe coinvolgere:",
    "la fase di analisi, progettazione e implementazione",
  ],
  [
    "Un oggetto nel dominio dell'applicazione:",
    "opportuna espressione di un concetto concreto o astratto significativo per la risoluzione del problema",
  ],
  [
    "Un oggetto nel dominio del problema:",
    "entità del sistema software definita con attributi ed operazioni",
  ],
  [
    "Per identificare le classi in fase di analisi si parte:",
    "dal testo dei requisiti forniti dal committente del sistema software",
  ],
  [
    "Per identificare le classi in fase di progettazione si considera:",
    "il contesto del problema da risolvere per avere classi con una semantica (attributi ed operazioni) coerente ad esso",
  ],
  [
    "Se occorre inserire una classe e nella gerarchia esiste una classe di cui essa è una specializzazione:",
    "si può inserire nella gerarchia come sottoclasse di quella esistente completando con attributi e operazioni mancanti",
  ],
  [
    "Se occorre inserire una classe e nella gerarchia non esiste una classe di cui essa è una specializzazione:",
    "si definisce una classe da zero e non si usa l'ereditarietà lasciando la gerarchia inalterata",
  ],
  [
    "Per inserire una nuova classe in un progetto software occorre:",
    "che la classe abbia un significato semantico in linea con il problema",
  ],
  [
    "Quale di queste affermazione sulla Java Virtual Machine è falsa:",
    "esegue il codice macchina del programma",
  ],
  [
    "Quali fra le seguenti affermazioni sul metodo main in Java è scorretta?:",
    "deve essere sempre definito in ciascuna classe del programma",
  ],
  [
    "Quali fra le seguenti dichiarazioni di classe in Java è corretta?:",
    "public class Auto {...}",
  ],
  [
    "In Java il blocco di codice che definisce un metodo è delimitato da:",
    "parentesi graffe",
  ],
  [
    "In Java è possibile dichiarare un metodo al di fuori del blocco  di codice che definisce una classe?:",
    "no, mai",
  ],
  ["La Java Virtual Machine è un software che simula:", "un hardware"],
  [
    "In Java quale delle seguenti affermazioni sul byte code è falsa?:",
    "contiene il codice sorgente che girerà sulla Java Virtual Machine",
  ],
  [
    "Lo sviluppo Java consiste nel:",
    "scrivere il programma, salvarlo, compilarlo (con il comando javac) e infine mandarlo in esecuzione (con il comando java)",
  ],
  [
    "Per mandare in esecuzione il programma pippo. Java:",
    "occorre eseguire il comando java pippo",
  ],
  [
    "Quale delle seguenti affermazioni sul linguaggio Java è falsa:",
    "funziona anche senza Java Virtual Machine",
  ],
  [
    "L'ambito di attività del compilatore mentre si sviluppa un'applicazione Java si riferisce a:",
    "alla sola fase di codifica",
  ],
  [
    "L'ambito di attività della Java Virtual Machine mentre si sviluppa un'applicazione Java si riferisce a:",
    "alla sola fase di definizione del flusso di esecuzione",
  ],
  [
    "In Java nella dichiarazione di classe il modificatore specifica:",
    "come modificare le caratteristiche della classe",
  ],
  [
    "In Java una volta scritti i file con la dichiarazione delle classi di oggetti:",
    "il programma non compila perché manca il main con il flusso di esecuzione",
  ],
  [
    "In Java le dichiarazioni delle classi fanno parte dell'ambito compilativo:",
    "TRUE",
  ],
  [
    "Un progetto Java:",
    "È composto da più file, uno per ciascuna classe di oggetti e uno per il flusso di esecuzione del programma",
  ],
  ["In Java un metodo definisce:", "una funzionalità della classe di oggetti"],
  [
    "In Java il seguente metodo è dichiarato nel modo corretto:",
    'public void metodo (){System.out.println("Ciao!");}',
  ],
  [
    "In Java una variabile deve essere dichiarata:",
    "una sola volta e prima di essere usata la prima volta",
  ],
  ["In Java la seguente variabile è dichiarata nel modo scorretto:", "int a;;"],
  [
    "In Java una variabile di istanza:",
    "si inizializza al momento della creazione  dell'oggetto con valori predefiniti",
  ],
  [
    "In Java una variabile locale:",
    "deve essere per forza inizializzata dal programmatore altrimento il compilatore segnala un errore",
  ],
  [
    "In Java il cilco di vita di una variabile locale:",
    "coincide con il ciclo di vita del metodo in cui è dichiarata: smette di esistere quando il metodo ha terminato la sua esecuzione",
  ],
  [
    "In Java una variabile di istanza appartiene alla classe in cui è dichiarata:",
    "falso, appartiene ad un oggetto istanziata dalla classe in cui è dichiarata",
  ],
  [
    "In Java i parametri formali:",
    "sono dichiarati con la  dichiarazione di un metodo come specifica di variabili da passare al metodo",
  ],
  [
    "In Java il numero dei parametri formali (varargs):",
    "può essere dichiarato variabile purché tali parametri siano dichiarati dello stesso tipo",
  ],
  [
    "In Java il costruttore è un metodo che:",
    "non restituisce mai niente, infatti non ha tipo di ritorno",
  ],
  [
    "In Java il costruttore è un metodo che:",
    "viene eseguito una e una sola volta al momento in cui si istanzia un oggetto",
  ],
  [
    "In Java il costruttore di default è:",
    "inserito dal compilatore se nessun altro costruttore è dichiarato nella classe",
  ],
  [
    "In Java un package è:",
    "una cartella che contiene file con le classi le quali hanno dichiarato di far parte del package attraverso comando package",
  ],
  ["In Java un identificatore può iniziare per @:", "no, mai"],
  ["In Java gli identificatori:", "non hanno un limite massimo di caratteri"],
  [
    "Secondo le convenzioni di Java gli identficatori della classe:",
    "devono iniziare per lettera maiuscola",
  ],
  [
    "Secondo le convenzioni di Java gli identficatori delle variabili:",
    "devono iniziare per lettera minuscola",
  ],
  [
    "Secondo le convenzioni di Java gli identficatori delle costanti:",
    "devono avere tutte lettere maiuscole",
  ],
  [
    "Secondo le convenzioni di Java gli identficatori dei metodi:",
    "devono iniziare per lettera minuscola",
  ],
  ["In Java, un tipo di dato intero long è memorizzato in:", "8 byte"],
  [
    "In Java, quando passiamo una reference di un oggetto in input ad un metodo, siamo sicuri che terminata l'esecuzione del metodo, il reference:",
    "punta allo stesso oggetto a cui puntava prima dell'esecuzione del metodo",
  ],
  [
    "In Java, al momento della dichiarazione di un oggetto:",
    "si definisce una reference all'oggetto (che vale null) che identifica l'oggetto",
  ],
  [
    "In Java, quando passiamo una reference di un oggetto in input ad un metodo, il parametro locale:",
    "È una copia della reference dell'oggetto",
  ],
  [
    "In Java quale delle seguenti affermazioni è vera:",
    "Un array è un oggetto e quindi puà essere dichiarato, istanziato e inizializzato",
  ],
  [
    "In Java e nell'utilizzo degli array, cosa rappresenta length?:",
    "un attributo che fornisce il numero di elementi di un array",
  ],
  [
    "In Java, un array di stringhe è un array bidimensionale:",
    "FALSO, le stringhe non sono array di caratteri",
  ],
  [
    "In Java, un array di oggetti contiene in ciascun elemento:",
    "i riferimenti (indirizzi) all'area di memoria allocata per ciascun oggetto",
  ],
  [
    "In Java, le istruzioni i++ e ++i con i una variabile int danno per i lo stesso risultato:",
    "sì, sempre",
  ],
  [
    "In Java, d+=1 è equivalente a d++ dove d è una variabile double:",
    "sì, sempre",
  ],
  ['In Java, l\'istruzione System.out.println(1+2+"3"); stamperà:', "33"],
  [
    'In Java, l\'operatore di confronto == "uguale a" si applica a:',
    "tutti i tipi",
  ],
  [
    "In Java, se abbiamo int i=5; int j=++i; int k=j++; int h=k--; boolean flag = ( (i != j) &amp;&amp; ( (j",
    "true",
  ],
  [
    "In Java, se confrontiamo due reference con l'operatore == il risultato sarà true se:",
    "i due reference puntano allo stesso oggetto",
  ],
  [
    "In Java, il costrutto switch può sostituire in ogni caso il costrutto if:",
    "falso, solo in caso di if concatenati e con test su alcuni tipi di variabili (es. interi)",
  ],
  [
    "In Java, il costrutto for può in ogni caso sostituire il costrutto while:",
    "sì, è vero lo può sostituire sempre",
  ],
  [
    "Il costrutto switch può in ogni caso sostituire il costrutti while:",
    "falso, non può mai sostituirlo: la switch è una condizione non un ciclo",
  ],
  [
    "In Java, il costrutto if permette di:",
    "di scegliere un flusso di esecuzione a seconda che si verifichi una certa condizione",
  ],
  [
    "In Java, il costrutto for permette di:",
    "di ripetere un flusso di esecuzione un certo numero di volte",
  ],
  [
    "In Java, è possibile solo usare il costrutto while:",
    "quando non si conosce a priori il numero di iterazioni da fare",
  ],
  [
    "In Java, è possibile usare il costrutto for per i cicli infiniti:",
    "sì sempre anche se è meno chiaro e lineare",
  ],
  [
    "In Java, il costrutto while è preferito al costrutto for per essere usato in caso di:",
    "condizioni espresse sullo stato",
  ],
  ["In Java, nella sintassi del costrutto switch:", "il break è opzionale"],
  [
    "In Java, nella sintassi del costrutto switch è consigliabile:",
    "usare sempre la clausola default anche se non sembra strettamente necessario",
  ],
  [
    "Qual è l'obiettivo principale dell'incapsulamento in Java:",
    "Nascondere la complessità interna di un oggetto",
  ],
  [
    "Quale delle seguenti affermazioni è vera riguardo all'uso dei paradigmi della programmazione ad oggetti in Java:",
    "La programmazione ad oggetti è utile per programmi complessi in quanto consente di organizzare il codice in modo modulare e ridurre la complessità attraverso l'incapsulamento e l'astrazione.",
  ],
  [
    "Quali sono i tre principi fondamentali della programmazione ad oggetti in Java<br><br>:",
    "Incapsulamento, ereditarietà, polimorfismo",
  ],
  [
    "Quale delle seguenti opzioni descrive correttamente come si realizza l'incapsulamento in Java:",
    'Si utilizza la keyword "private" per definire le variabili di istanza della classe e quei metodi che sono usati solo internamente.',
  ],
  [
    "Quale delle seguenti affermazioni riguardo all'interfaccia pubblica di una classe incapsulata in Java è corretta<br><br>:",
    "L'interfaccia pubblica di una classe incapsulata consiste solo dei suoi metodi pubblici.",
  ],
  [
    "Quale dei seguenti non è un vantaggio dell'incapsulamento in Java<br><br>:",
    "Migliore organizzazione e suddivisione del lavoro all'interno del team di sviluppo",
  ],
  [
    'Quale delle seguenti opzioni descrive correttamente il modificatore di accesso "protected" in Java<br><br>:',
    "Consente l'accesso alla variabile di istanza o al metodo solo dai componenti di una classe delle stesso package e dalle sottoclassi.",
  ],
  [
    "Qual è il risultato della seguente riga di codice in JavaMyClass.myMethod():",
    'Viene chiamato il metodo "myMethod" sulla classe "MyClass" (non su un\'istanza specifica dell\'oggetto).',
  ],
  [
    "Qual è l'effetto del modificatore static su un metodo di classe in Java<br><br>:",
    "Consente di accedere al metodo senza creare un'istanza della classe.",
  ],
  [
    "Qual è la relazione tra incapsulamento ed astrazione in Java<br><br>:",
    "A) L'incapsulamento si riferisce alla capacità di nascondere i dettagli di implementazione di un oggetto, mentre l'astrazione si riferisce alla rappresentazione di un concetto tramite una classe con dati e metodi che definiscono delle proprietà ritenute rilevanti",
  ],
  [
    "In Java il reference this:",
    "è un riferimento implicito all'oggetto corrente",
  ],
  [
    "In Java il reference super:",
    "è un riferimento implicito all'oggetto corrente",
  ],
  [
    "In Java si usa il reference this quando:",
    "c'è ambiguità nell'uso delle variabili di istanza dell'oggetto corrente e le variabili locali",
  ],
  [
    "Qual è il ruolo del keyword 'this' in Java:",
    "Rappresenta un riferimento all'oggetto corrente.",
  ],
  [
    "Quale delle seguenti opzioni descrive correttamente l'ereditarietà in Java:",
    "L'ereditarietà permette a una classe di ereditare attributi e metodi da una classe padre.",
  ],
  [
    "Quali sono i principali motivi per utilizzare l'ereditarietà in Java:",
    "Tutte le altre risposte sono vere",
  ],
  [
    "Quali sono i vantaggi strettamente connessi all'utilizzo combinato di ereditarietà e incapsulamento in Java:",
    "Separazione delle responsabilità e controllo dell'accesso ai dati",
  ],
  [
    "In Java, quali sono le opzioni corrette riguardo l'utilizzo dei modificatori di accesso (private, public, protected) con i membri di una classe ereditata:",
    "I membri protected della classe base possono essere accessibili dalle classi derivate e da qualsiasi classe nello stesso package.",
  ],
  [
    "Qual è il comportamento di default del compilatore di Java quando una sottoclasse non chiama esplicitamente il costruttore della superclasse:",
    "Il compilatore chiama automaticamente il costruttore vuoto della superclasse",
  ],
  [
    "Quali delle seguenti affermazioni riguardo l'uso di 'super' in Java sono corrette:",
    "'super' può essere utilizzato per richiamare il costruttore della superclasse in una sottoclasse",
  ],
  [
    "Quali delle seguenti affermazioni sono vere riguardo al polimorfismo in Java:",
    "Il polimorfismo può essere implementato sia con l'ereditarietà che con le interfacce.",
  ],
  [
    "Qual è la definizione corretta di polimorfismo in Java:",
    "L'abilità di una variabile di un tipo di classe padre di riferirsi a un oggetto di una classe figlia",
  ],
  [
    "Qual è il principale vantaggio dell'utilizzo di polimorfismo e ereditarietà in Java?:",
    "Permette l'estensibilità del codice.",
  ],
  [
    "Quale delle seguenti affermazioni riguardo ai metodi astratti in Java è corretta:",
    "Una classe con almeno un metodo astratto deve essere astratta",
  ],
  [
    "Quale delle seguenti affermazioni è vera riguardo alle classi astratte in Java:",
    "Una classe astratta deve contenere almeno un metodo astratto.",
  ],
  [
    "Quale delle seguenti affermazioni è vera riguardo alle interfacce in Java:",
    "Una classe può implementare più di un'interfaccia allo stesso tempo.",
  ],
  [
    "Quale delle seguenti affermazioni descrive correttamente la differenza tra classi astratte e interfacce in Java:",
    "Una classe astratta può avere metodi concreti, mentre un'interfaccia non può.",
  ],
  [
    "Quale delle seguenti affermazioni è vera riguardo all'uso delle interfacce nella progettazione software in Java:",
    "Le interfacce sono utilizzate per definire contratti che le classi devono soddisfare.",
  ],
  [
    "Quale delle seguenti affermazioni descrive correttamente un uso pratico del polimorfismo e delle classi astratte in Java:",
    "Le classi astratte possono essere utilizzate per definire metodi comuni tra diverse classi figlie, mentre il polimorfismo permette di utilizzare tali metodi in modo dinamico, in base al tipo dell'oggetto a cui vengono applicati.",
  ],
  [
    "Qual è l'uso principale del polimorfismo (dinamico) in Java:",
    "Per consentire a un oggetto di riferimento di classe base di eseguire un metodo specifico di una classe derivata.",
  ],
];
