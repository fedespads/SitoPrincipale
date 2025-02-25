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
    "L'inizio dell'era moderna dei computer avvenne all'incirca:",
    "metà anni '40\"\n                    ",
  ],
  [
    "Le reti che consentono di migliaia di computer all'interno dello stesso edificio tra loro sono dette:",
    "LAN",
  ],
  ["Un sistema distribuito è:", "un insieme di unità di calcolo"],
  [
    "Un gruppo aperto è:",
    "è un gruppo in cui qualsiasi nodo può unirsi al sistema distribuito",
  ],
  [
    "Per ammettere un nuovo nodo in un gruppo chiuso serve:",
    'un meccanismo di autenticazione"\n                    ',
  ],
  ["In un overlay strutturato ogni nodo:", "comunica con in nodi più vicini"],
  [
    "La trasparenza della distribuzione:",
    "rende accessibili le risorse tramite un'interfaccia di file system unificata",
  ],
  [
    "Il middleware tipicamente non prevede servizi di:",
    "monitoraggio ed elaborazione dati",
  ],
  [
    "I sistemi distribuiti si scambiano messaggi tramite la comunicazione:",
    "RPC",
  ],
  [
    "Perché sia garantito che qualsiasi messaggio inviato da un processo sia ricevuto da tutti o nessuno degli altri processi si usa il toolkit:",
    'Horus"\n                    }\n                 \n            ',
  ],
  [
    "Uno degli obiettivi primari di un sistema distribuito è render il processo di distribuzione delle risorse:",
    "sicuro",
  ],
  [
    "Le reti per la condivisione file più rilevanti nei sistemi distribuiti sono:",
    "P2P",
  ],
  [
    "La trasparenza nelle reti distribuite che si riferisce al nascondere le differenze nella rappresentazione dei dati è detta di:",
    "accesso",
  ],
  [
    "La trasparenza nelle reti distribuite che si riferisce al nascondere che un sistema sposti un oggetto da un nodo all'altro è detta di:",
    "riposizionamento",
  ],
  [
    "La trasparenza nelle reti distribuite che si riferisce al nascondere che un utente sposti un oggetto da un nodo all'altro è detta di:",
    "migrazione",
  ],
  [
    "La trasparenza di concorrenza si riferisce a:",
    'nascondere dove si trova un oggetto"\n                    ',
  ],
  [
    "La trasparenza di errore si riferisce a:",
    "nascondere il ripristino di un oggetto",
  ],
  [
    "Perché cla trasparenza di relicazione sia effettiva tutte le copie:",
    "devono avere lo stesso nome",
  ],
  [
    "La trasparenza completa può essere dannosa quando:",
    "si vuole mascherare un errore temporaneo del server prima di tentare di utilizzare un altro server",
  ],
  ["Una trasparenza completa:", "deve essere valutata in base ai costi"],
  [
    "Un IDL è:",
    "linguaggio di definizione dell'interfaccia\"\n                    ",
  ],
  [
    "Spesso le definizioni di interfaccia pubblicate in un IDL contengono solo:",
    "la sintassi",
  ],
  [
    "Il grado in cui due implementazioni di sistemi o componenti di produttori diversi possono coesistere e funzionare insieme semplicemente dipendendo dai servizi reciproci come stabilito da una norma comune è noto come:",
    'interoperabilità"\n                    ',
  ],
  [
    "Il grado in cui un'applicazione creata per un sistema distribuito A può essere eseguita, senza modifiche, su un altro sistema distribuito B che implementa le stesse interfacce di A è indicato come:",
    "portabilità",
  ],
  [
    "Un sistema dsitribuito in cui parti sono solo teoricamente divise ma sono effettivamente implementate come un unico, enorme programma è detto:",
    "monolitico",
  ],
  [
    "Il numero di livelli su cui tipicamente si valuta la scalabilità dei sistemi distribuiti è:",
    "3",
  ],
  [
    "La scalabilità delle dimensioni:",
    "mira ad ospitare utenti e risorse ulteriori",
  ],
  [
    "Nascondere i ritardi nella trasmissione è una tecnica che si applica in genere nel contesto di:",
    'scalabilità geografica"\n                    ',
  ],
  ["Il DNS è un esempio di:", "partizionamento"],
  [
    "Si può ottenere scalabilità orizzontale:",
    'nascondendo i ritardi nella trasmissione"\n                    }\n                 \n            ',
  ],
  [
    "Il passaggio da grid computing a cloud comuting è rappresentato da:",
    'esternalizzazione delle risorse"\n                    ',
  ],
  ["Il cluster computing viene in genere utilizzato per:", "calcolo parallelo"],
  ["Nei cluster Beowulf i nodi sono interamente gestiti:", "da un nodo master"],
  [
    "Il nodo master nel cluster Beowulf non:",
    "offre servizi di archiviazione ai nodi",
  ],
  [
    "Un sistema MOSIX differisce da Beowulf perché:",
    "fa sembrare un cluster come un signgolo computer",
  ],
  [
    "Un sistema di cluster computing che specializza i nodi a seconda delle funzioni è detto:",
    "ibrido",
  ],
  [
    "Nel grid computing la collaborazione tra persone e macchine di amministrazioni diverse è detta:",
    "organizzazione virtuale",
  ],
  [
    "Nel grid computing il livello che permette le transazioni in rete è detto:",
    "Connectivity layer",
  ],
  [
    "Nel grid computing il livello chefunge da interfaccia per le risorse locali disponibili in una determinata posizione è detto:",
    "Fabric layer",
  ],
  [
    "Nel grid computing un livello che implemente funzioni di avvio di processo o lettura dati è detto:",
    'Resource Layer"\n                    }\n                 \n            ',
  ],
  [
    "L'importante framework industriale che si focalizza sull'integrazione delle applicazioni aziendali è detto in forma abbreviata:",
    "EAI",
  ],
  [
    "La programmazione che utilizza transazioni richiede:",
    'primitive specializzate"\n                    ',
  ],
  [
    "La proprietà fondamentale delle transazioni è:",
    "ogni transazione deve terminare tutte le operazioni o lasciare il sistema allo stato originale",
  ],
  [
    "La proprietà per cui una transazione appare al mondo esterno come se fosse un singolo evento è detta:",
    "atomica",
  ],
  [
    "La proprietà per cui una transazione transazione non viola in alcun modo alcuna invariante di sistema è detta:",
    "coerente",
  ],
  [
    "La proprietà per cui le transazioni che si svolgono contemporaneamente non interferiscono l'una con l'altra è detta:",
    'isolata"\n                    ',
  ],
  [
    "Il componente responsabile del coordinamento delle sottotransazioni mediante un protocollo standard è detto:",
    "TP monitor",
  ],
  [
    "Quando un componente dell'applicazione può effettivamente inviare una richiesta a un altro componente dell'applicazione usando funzioni invia:",
    "RPC",
  ],
  [
    "Quando un componente dell'applicazione può effettivamente inviare una richiesta a un altro componente dell'applicazione usando oggetti invia:",
    "RMI",
  ],
  ["MOM significa:", "Message Oriented Middleware"],
  ["Caratteristica fondamentale dei sistemi pervasivi è:", "stabilità"],
  ["I nodi si un sistema pervasivo sono tipicamente:", "statici"],
  [
    "In molti casi le componenti dei sistemi pervasivi sono caratterizzati da:",
    "mobilità",
  ],
  ["Un sistema ubiquo:", "è pervasivo e presente"],
  [
    "Non è caratteristica fondamentale di un sistema ubiquo:",
    'resistenza"\n                    ',
  ],
  [
    "Azioni che non sono finalizzate a interagire con un sistema computerizzato, ma che un tale sistema comprende come input, sono dette:",
    "implicite",
  ],
  [
    "Per determinare il constesto di interazione, un sistema ubiquo deve avere:",
    "input sensoriale",
  ],
  ["Un esempio di autonomia per sistemi ubiqui è:", "DHCP"],
  [
    "Mobile computing differisce dai generici sistemi pervasivi perché:",
    "la posizione di un dispositivo si sposta nel corso di una sessione",
  ],
  ["MANET sta per:", "Mobile Ad-hoc NETwork"],
  ["Caratteristica fondamentale dei sistemi pervasivi è:", "stabilità"],
  ["I nodi si un sistema pervasivo sono tipicamente:", "statici"],
  [
    "In molti casi le componenti dei sistemi pervasivi sono caratterizzati da:",
    "mobilità",
  ],
  ["Un sistema ubiquo:", "è pervasivo e presente"],
  [
    "Non è caratteristica fondamentale di un sistema ubiquo:",
    'resistenza"\n                    ',
  ],
  [
    "Azioni che non sono finalizzate a interagire con un sistema computerizzato, ma che un tale sistema comprende come input, sono dette:",
    "implicite",
  ],
  [
    "Per determinare il constesto di interazione, un sistema ubiquo deve avere:",
    "input sensoriale",
  ],
  ["Un esempio di autonomia per sistemi ubiqui è:", "DHCP"],
  [
    "Mobile computing differisce dai generici sistemi pervasivi perché:",
    "la posizione di un dispositivo si sposta nel corso di una sessione",
  ],
  ["MANET sta per:", "Mobile Ad-hoc NETwork"],
  [
    "Un componente è:",
    "unità modulare sostituibile che ha interfacce ben definite e funziona in modo indipendente all'interno del suo ambiente",
  ],
  [
    "Un connettore è:",
    "meccanismo che media la comunicazione, il coordinamento o la cooperazione",
  ],
  [
    "Per garantire affidabilità un componente deve:",
    "essere sempre sostituibile",
  ],
  [
    "La regola generale tra i componenti in un'architettura stratificata di un sistema distribuito è:",
    "un componente ad un livello superiore è sempre in grado di effettuare una downcall ad un componente ad un livello inferiore",
  ],
  ["La risposta di uno strato in seguito ad una upcall è detta:", "Handle"],
  [
    "Un protocollo di comunicazione è:",
    "unità che definisce le linee guida che ogni parte deve rispettare prima di poter condividere informazioni tra loro",
  ],
  [
    "Il Transmission Control Protocol (TCP) non garantisce:",
    'che i messaggi siano recapitati in modo efficiente"\n                    ',
  ],
  [
    "Quando si tratta di usare il TCP, gli utenti per stabilire una connessione, inviare e ricevere messaggi e terminare la connessione usano:",
    "un interfaccia",
  ],
  [
    "In un'applicazione stratificata, il livello che gestisce l'interazione con utenti o altre applicazioni esterne è:",
    "livello dell'interfaccia dell'applicazione",
  ],
  [
    "In un'applicazione stratificata, il livello che contiene le funzionalità principali dell'applicazione è:",
    "livello di elaborazione",
  ],
  [
    "Non è un vantaggio delle architetture basate su oggetti:",
    "semplicità nella gestione della comunicazione tra oggetti distribuiti",
  ],
  [
    "Lo scopo dei proxies nella comunicazione tra oggetti distribuiti è:",
    "convertire le chiamate di metodo in messaggi e viceversa",
  ],
  [
    "Non è uno svantaggio delle architetture basate su oggetti:",
    'non è possibile sostituire gli oggetti con interfacce simili"\n                    ',
  ],
  [
    "Il ruolo degli stubs nella comunicazione tra oggetti distribuiti è:",
    "convertire le chiamate di metodo in messaggi e viceversa",
  ],
  [
    "Nelle architetture RESTful:",
    "una volta completata un'operazione presso un servizio, quel componente dimenticherà tutto della persona che ha effettuato la chiamata\"\n                    ",
  ],
  ["Un bucket in Amazon S3 rappresenta:", "un'equivalente di una directory"],
  ["Quando si lavora con Amazon S3 si usa il protocollo:", "HTTP"],
  [
    "Un servizio è stateless se:",
    "non mantiene alcuna informazione sulla sessione o il client che ha effettuato la chiamata",
  ],
  [
    "Il coordinamento si verifica quando c'è un accoppiamento temporale e referenziale tra due processi è:",
    'coordinamento diretto"\n                    ',
  ],
  [
    "Il coordinamento si verifica quando c'è un disaccoppiamento referenziale e accoppiamento temporale  tra due processi è:",
    "coordinamento basato sugli eventi",
  ],
  [
    "E' possibile integrare componenti legacy in un sistema distribuito:",
    "utilizzando wrapper o adattatori",
  ],
  [
    "Un wrapper o un adattatore in un sistema distribuito serve:",
    "a facilitare l'accesso alle funzionalità dei componenti da parte delle applicazioni client",
  ],
  [
    "I wrapper nei sistemi distribuiti possono essere usati:",
    "per garantire che le applicazioni possano accedere alle funzionalità dei componenti esistenti",
  ],
  [
    "Il problema di sviluppare un wrapper specifico per ogni applicazione in un sistema distribuito è che:",
    'non è scalabile"\n                    ',
  ],
  [
    "La fase della chiamata di un oggetto remoto viene convertita in un messaggio che viene poi trasmesso attraverso l'interfaccia di rete a livello di trasporto è:",
    "terza fase, quando viene convertita in un messaggio trasmesso attraverso l'interfaccia di rete a livello di trasporto del sistema operativo locale di A",
  ],
  [
    "Il momento in cui vengono eseguiti gli intercettori a livello di risposta è:",
    "dopo l'esecuzione di un metodo e prima che la risposta venga inviata al chiamante",
  ],
  [
    "La migliore descrizione del ruolo degli intercettori nel processo di apertura del middleware è:",
    "gli intercettori sono uno degli strumenti più importanti per personalizzare il middleware e soddisfare i requisiti di una particolare applicazione",
  ],
  [
    "Il compito degli intercettori a livello di richiesta nel caso di chiamate replicate a un oggetto replicato è:",
    "eseguire le operazioni di chiamata del metodo per ciascuna replica senza che l'oggetto A o il middleware debbano essere consapevoli delle repliche o gestirle in modo speciale\"\n                    ",
  ],
  [
    "Una modifica che sicuramente può essere fatta al middleware senza interrompere il suo funzionamento è:",
    "modificare il flusso di controllo del middleware senza modificare il comportamento dei componenti",
  ],
  [
    "Il late binding:",
    "è un metodo per caricare e scaricare moduli a discrezione dell'utente\"\n                    }\n                 \n            ",
  ],
  [
    "Un sistema distribuito centralizzato è diviso:",
    "in due gruppi, client e server",
  ],
  [
    "Un protocollo senza connessione:",
    "è più facile da implementare di un protocollo con connessione",
  ],
  [
    "Il comportamento noto come richiesta-risposta è definito in modo completo come:",
    'un processo che effettua una richiesta e riceve una risposta da un server"\n                    ',
  ],
  [
    "Un processo che può essere eseguito un numero illimitato di volte senza causare effetti negativi è detto:",
    "idempotente",
  ],
  [
    "Il vantaggio principale dell'utilizzo di un protocollo senza connessione in un sistema distribuito è che:",
    "è efficiente",
  ],
  [
    "Una configurazione di distribuzione di base per un'applicazione client-server deve:",
    "avere solo la parte dell'interfaccia utente dipendente dal terminale del computer client",
  ],
  [
    "Viene utilizzato un livello intermedio, noto come middleware, tra il front-end e il back-end del server in una:",
    "architettura a quattro livelli",
  ],
  [
    "Una possibile organizzazione in cui le funzionalità di editing fondamentali dell'elaboratore di testi sono eseguite dal front-end del computer client e il back-end del server gestisce solo la formattazione finale del testo è una:",
    "architettura a tre livelli",
  ],
  [
    "Il front-end del computer client gestisce la verifica dei dati e altre operazioni di elaborazione prima di inviarli al server in una:",
    "architettura a tre livelli",
  ],
  [
    "Una distribuzione di un'applicazione client-server su più computer include solo l'interfaccia utente sul computer client e il resto dei programmi sul server è realizzata con una:",
    "architettura a due livelli",
  ],
  [
    "La distribuzione delle applicazioni client-server su più macchine con ogni macchina adattata a un gruppo specifico di funzioni è:",
    "distribuzione distribuita",
  ],
  [
    "I sistemi peer-to-peer supportano la distribuzione orizzontale perché:",
    "tutti i processi sono uguali e supportano le funzioni che devono essere svolte",
  ],
  [
    "Nella distribuzione orizzontale:",
    "ogni parte opera sulla propria quota di dati completi",
  ],
  [
    "La struttura utilizzata per organizzare i nodi in una rete peer-to-peer strutturata è:",
    "indice semantico",
  ],
  [
    "Il termine viene utilizzato per descrivere la capacità di un sistema peer-to-peer strutturato di mappare una chiave a un nodo esistente:",
    "lookup",
  ],
  [
    "In un sistema peer-to-peer strutturato come un ipercubo, ogni dato è associato a:",
    "un nodo",
  ],
  [
    "L'elenco di nodi vicini in un sistema peer-to-peer non strutturato viene costruito:",
    "in modo ad hoc",
  ],
  [
    "Lo scopo del valore time-to-live (TTL) in una richiesta di flooding è:",
    "limitare il numero di volte che la richiesta viene inoltrata",
  ],
  [
    "I nodi di una normale rete peer-to-peer possono trovare elementi di dati pertinenti:",
    "flooding o random walk attraverso la rete.",
  ],
  [
    "I super peer sono organizzati in una rete peer-to-peer:",
    "in modo asimmetrico, con ogni weak peer collegato a un solo super peer",
  ],
  [
    "Il tipo di sistema distribuito che utilizza i server perimetrali è:",
    'edge-server"\n                    ',
  ],
  [
    "I server perimetrali svolgono la funzione principale di:",
    "gestire il contenuto",
  ],
  [
    "Il tipo di sistema distribuito utilizza dispositivi utilizzati dagli utenti finali come parte del sistema complessivo è detto:",
    "fog computing",
  ],
  [
    "La principale sfida nell'implementazione di sistemi distribuiti collaborativi ibridi è:",
    "essere avviati la prima volta",
  ],
  [
    "Un tracker in BitTorrent:",
    "mantiene una lista puntuale dei nodi attivi che hanno il file richiesto",
  ],
  [
    "Un nodo attivo in BitTorrent è:",
    "un nodo che sta scaricando attivamente il file",
  ],
  [
    "Freeriding siginifica:",
    'scaricare file senza contribuire in alcun modo"\n                    ',
  ],
  [
    'Un "seeder" in BitTorrent è:',
    "un nodo che possiede tutti i pezzi di un file e continua a prendere parte alle attività dello sciame",
  ],
  [
    "Un modo per aggiornare il neighbor set di un nodo in BitTorrent è:",
    'quando un nuovo peer si unisce allo sciame"\n                    ',
  ],
  ["La dimensione standard di un blocco di dati in BitTorrent è:", "16 Kb"],
  [
    "Una descrizione che meglio rappresenta il modello di un servizio di file remoto è:",
    "un client ha accesso completamente trasparente a un file system amministrato da un server remoto",
  ],
  [
    "Una descrizione che meglio rappresenta il modello di upload/download è:",
    "un client accede a un file localmente dopo averlo scaricato dal server",
  ],
  [
    "Il componente responsabile della gestione dell'accesso ai file archiviati su un server remoto quando si utilizza NFS è:",
    "client NFS",
  ],
  [
    "Lo scopo del Virtual File System (VFS) è:",
    "interfacciare a più file system",
  ],
  [
    "La tipologia di sistemi operativi che include di base un file system virtuale è:",
    "praticamente ogni sistema operativo moderno",
  ],
  [
    "L'operazione utilizzata per creare file regolari nella versione 3 di NFS è:",
    "create",
  ],
  [
    "Il modello di progettazione utilizzato dalle versioni precedenti alla 4 di NFS è:",
    "stateless",
  ],
  [
    "l'operazione utilizzata per eliminare file nella versione 4 di NFS è:",
    "remove",
  ],
  [
    "L'operazione utilizzata per modificare gli attributi di un file nella versione 4 di NFS è:",
    "setattr",
  ],
  [
    "L'operazione utilizzata per creare file specializzati come file di periferica, socket e named pipe è nel sistema NFS è:",
    "mknod",
  ],
  [
    "La granularità più fine dei processi aumenta la semplicità di costruzione di applicazioni distribuite e le prestazioni",
    "aggiungendo più thread di controllo per ogni processo",
  ],
  [
    'La "trasparenza della concorrenza" nei sistemi operativi significa che:',
    'i processi indipendenti non possano influenzare intenzionalmente o accidentalmente il comportamento reciproco."\n                    ',
  ],
  [
    "La separazione dei processi nella maggior parte dei casi nei sistemi operativi è garantita:",
    'non garantendo alcuna separazione dei processi"\n                    ',
  ],
  [
    "Il problema principale dell'utilizzo di un solo thread di controllo in un'applicazione come un programma di fogli di calcolo è:",
    'il calcolo non può procedere mentre il programma è in attesa di input e fornire input mentre vengono calcolate le dipendenze può essere un compito difficile"\n                    ',
  ],
  [
    "E' possibile sfruttare il calcolo parallelo con il multithreading:",
    "utilizzando il multithreading solo su sistemi informatici costosi",
  ],
  [
    "L'uso del multithreading nel contesto di applicazioni di grandi dimensioni è utile:",
    'quando le applicazioni sono sviluppate come una raccolta di programmi cooperanti"\n                    ',
  ],
  [
    "Il modello di threading che si applica quando si utilizzano le librerie di thread a livello utente è:",
    "molti-a-uno",
  ],
  [
    "Il vantaggio principale delle librerie di thread a livello utente è:",
    'il basso costo di creazione e distruzione dei thread"\n                    ',
  ],
  [
    "Il vantaggio principale dei thread a livello kernel è:",
    "la possibilità di utilizzare più processori o core della CPU",
  ],
  [
    "Il costo di creazione e distruzione dei thread a livello utente è tipicamente:",
    "dipende dalle esigenze dell'applicazione\"\n                    }\n                 \n            ",
  ],
  [
    "I browser web multi-thread possono migliorare le prestazioni nel nascondere la latenza di comunicazione tra processi a lunga distanza:",
    "creando più connessioni al server contemporaneamente",
  ],
  [
    "Un vantaggio dell'utilizzo di server web replicati nel nascondere la latenza di comunicazione tra processi a lunga distanza è:",
    "consente la creazione di più connessioni con più repliche contemporaneamente",
  ],
  [
    "La cache delle pagine web contribuisce a ridurre l'impatto dei tempi di ritardo nella comunicazione tra processi a lunga distanza:",
    "archiviando una copia della pagina localmente, evitando la necessità di una connessione al server",
  ],
  [
    "In un browser web multi-thread, il ruolo di ogni thread è:",
    "recuperare un elemento specifico della pagina",
  ],
  [
    "Quando si utilizza un client multi-thread per recuperare elementi di pagina web da un server, il vantaggio di avere ogni thread creare la propria connessione unica al server è:",
    "consentire la creazione di più connessioni al server contemporaneamente",
  ],
  [
    "L'applicazione principale del multithreading nei sistemi distribuiti è:",
    "lato server",
  ],
  [
    "Il multithreading semplifica il codice del server perché:",
    "permette di gestire più compiti contemporaneamente",
  ],
  [
    "Lo scopo del thread dispatcher in un file server multi-thread è:",
    "leggere le richieste in entrata per le operazioni sui file",
  ],
  [
    "Un file server a macchina a stati finiti single-thread differisce da un  file server multithread perché:",
    "utilizza un singolo thread per elaborare le richieste e pianifica operazioni disco asincrone invece di bloccare",
  ],
  [
    "Uno svantaggio potenziale dell'utilizzo di una macchina a stati finiti single-thread per un file server è:",
    'impossibilità di gestire più task contemporaneamente"\n                    }\n                 \n            ',
  ],
  [
    "Il principale scopo delle macchine client in una rete è:",
    'abilitare la comunicazione tra gli utenti e i server situati altrove nella rete"\n                    ',
  ],
  [
    "La principale differenza tra il primo e il secondo approccio di interzione tra client e server è:",
    "il primo approccio prevede l'utilizzo di protocolli a livello di applicazione, mentre il secondo approccio prevede l'utilizzo di un'interfaccia utente semplice",
  ],
  ["X Window System è:", "un protocollo per trasferire dati tra due computer"],
  [
    "Il kernel X nel X Window System è responsabile:",
    "dell'unità centrale di elaborazione del sistema\"\n                    ",
  ],
  [
    "La libreria Xlib nel X Window System:",
    "rende l'interfaccia disponibile per le applicazioni",
  ],
  [
    "Nel X Window System non è vero che:",
    'Xlib e il kernel X devono essere ospitati sullo stesso computer"\n                    ',
  ],
  [
    "Il comportamento sincrono di X quando si lavora in reti di larga area con latenze lunghe:",
    "può avere un impatto negativo sulla prestazione",
  ],
  [
    "Il metodo principale per ridurre i requisiti di larghezza di banda nella ri-progettazione del protocollo X è:",
    "confrontare i messaggi con lo stesso identificatore e inviare solo le differenze",
  ],
  [
    "Un approccio che consente a un'applicazione il completo controllo del display remoto è:",
    "VNC",
  ],
  [
    "Il principale vantaggio dell'utilizzo dei comandi di display di alto livello di THINC rispetto alle operazioni di pixel grezzo o a un protocollo come X è:",
    "rendono i server di display più semplici",
  ],
  [
    "L'organizzazione responsabile dell'assegnazione di endpoint riconosciuti a livello globale per i servizi internet è:",
    "Internet Assigned Numbers Authority (IANA)",
  ],
  [
    "Lo scopo di un superserver in un sistema Unix è:",
    "ascoltare più endpoint associati a un particolare servizio e creare un processo per ogni richiesta",
  ],
  [
    "Nel modello di comunicazione client-server, lo scopo di un endpoint è:",
    'consentire al client di connettersi alla macchina host del server"\n                    ',
  ],
  [
    "La principale differenza tra una progettazione di server senza stato e con stato è:",
    "un server con stato memorizza informazioni persistenti sui suoi client mentre un server senza stato non lo fa",
  ],
  [
    "Un esempio di soft state nella progettazione di server è:",
    "un server che mantiene lo stato a nome del client, ma solo per un periodo di tempo limitato",
  ],
  [
    "Uno svantaggio della progettazione di server con stato è:",
    "se il server si blocca, deve recuperare l'intero stato come esisteva prima del crash\"\n                    ",
  ],
  [
    "Il principale scopo di un server stateless è:",
    'rispondere alle richieste dei client senza tenere traccia dello stato"\n                    ',
  ],
  [
    "Il ruolo di un object server nella distribuzione di oggetti è:",
    "ospitare gli oggetti che implementano particolari servizi",
  ],
  [
    "I due componenti principali di un oggetto sono:",
    'dati che rappresentano lo stato e il codice per eseguire i metodi"\n                    ',
  ],
  [
    "Alcuni esempi di politiche di invocazione degli oggetti possono essere:",
    "oggetti transitori, segmentazione della memoria, condivisione del codice",
  ],
  [
    "La forma più semplice di cluster di server è:",
    "un gruppo di server connessi tramite una rete locale",
  ],
  [
    "Il front-end di un cluster di server è chiamato in genere:",
    'switch"\n                    ',
  ],
  [
    "Il bilanciamento del carico in un cluster di server serve a:",
    "distribuire le richieste dei client in modo equo tra i server",
  ],
  [
    "Un esempio di scenario in cui TCP handoff è particolarmente efficiente in un cluster di server è:",
    "quando le risposte sono significativamente più grandi delle richieste, come con i server Web",
  ],
  [
    "Il principale beneficio dell'utilizzo dei fornitori di servizi cloud per i sistemi distribuiti a area larga è:",
    "evita complicazioni nell'interagire con molte organizzazioni",
  ],
  [
    "Un dispatcher di richieste stima la latenza tra un client e più server:",
    'misurando il tempo che impiega una richiesta per essere inviata e ricevuta da ogni server"\n                    ',
  ],
  [
    "Il principale vantaggio dell'inserimento di macchine virtuali in un unico data center per la comunicazione interprocesso è:",
    "permette l'utilizzo di reti locali a bassa latenza",
  ],
  [
    "PlanetLab è:",
    "un sistema distribuito collaborativo in cui varie organizzazioni donano uno o più computer",
  ],
  [
    "La funzione principale del Virtual Machine Monitor (VMM) in PlanetLab è:",
    "isolare i Vserver in modo che i processi vengano eseguiti contemporaneamente e indipendentemente",
  ],
  ["La funzione di SCS in PlanetLab è:", "creare nuove slice e alloca risorse"],
  [
    "la principale ragione per migrare il codice nei sistemi distribuiti è:",
    "migliorare le prestazioni complessive del sistema spostando i processi dalle macchine fortemente cariche a quelle leggermente cariche",
  ],
  [
    "l'obiettivo principale della migrazione del codice nei data center è:",
    'ottimizzare il consumo energetico"\n                    ',
  ],
  [
    "il principale beneficio della migrazione del codice è:",
    "ridurre la comunicazione",
  ],
  [
    "la migrazione del codice si basa su ragionamenti qualitativi piuttosto che su modelli matematici nei sistemi distribuiti moderni:",
    "a causa dell'eterogeneità delle piattaforme sottostanti e dei reti informatiche",
  ],
  [
    "la principale ragione per cui gli agenti mobili non sono riusciti ad ottenere un'ampia diffusione è:",
    "non hanno avuto un vantaggio competitivo chiaro rispetto ad altre tecnologie",
  ],
  [
    "la principale caratteristica dell'adattabilità nel contesto della migrazione del codice è:",
    "la capacità del codice di spostarsi tra diverse macchine",
  ],
  [
    "è stato proposto per la prima volta di generare codice intermedio indipendente dalla macchina per una macchina virtuale astratta come soluzione per i problemi di portabilità in Pascal negli:",
    "anni 70",
  ],
  [
    "il principale vantaggio della migrazione della macchina virtuale nella migrazione del codice per i sistemi distribuiti è:",
    'i processi possono restare inconsapevoli della migrazione e non dovrebbero incontrare problemi con le risorse utilizzate"\n                    ',
  ],
  [
    "il linguaggio di programmazione usato per la prima volta per generare codice intermedio indipendente dalla macchina per una macchina virtuale astratta è:",
    'Pascal"\n                    ',
  ],
  [
    "la strategia principale utilizzata nei linguaggi di scripting e nei linguaggi altamente portabili come Java per affrontare la migrazione del codice in sistemi eterogenei è:",
    "implementazione di una macchina virtuale che interpreta direttamente il codice sorgente o il codice intermedio generato da un compilatore",
  ],
  [
    "il modello ISO OSI è:",
    "un modello di riferimento sviluppato per gestire i livelli e le questioni nella comunicazione",
  ],
  [
    "il livello OSI responsabile del mantenimento della sincronizzazione tra mittente e destinatario è quello:",
    "del link dati",
  ],
  [
    "il livello OSI responsabile del supporto alle applicazioni, come l'istituzione di una comunicazione affidabile o la facilitazione della trasmissione in streaming di dati in tempo reale:",
    'di trasmissione"\n                    ',
  ],
  [
    "lo scopo del modello OSI è:",
    "facilitare la comunicazione tra sistemi aperti",
  ],
  [
    "seguendo il modello OSI il middleware si trova principalmente nel:",
    'livello di applicazione"\n                    ',
  ],
  [
    "i protocolli del middleware in base alla loro relazione con la comunicazione possono essere classificati:",
    "indirettamente correlati",
  ],
  [
    "l'obiettivo dei protocolli di comunicazione del middleware è:",
    "facilitare la comunicazione tra diversi sistemi operativi o piattaforme",
  ],
  [
    "la differenza tra comunicazione persistente e transitoria è:",
    "la comunicazione persistente si riferisce alla memorizzazione dei messaggi per la durata dell'esecuzione dell'applicazione mentre la comunicazione transitoria si riferisce alla memorizzazione dei messaggi per il tempo necessario per consegnarli al destinatario",
  ],
  [
    "le tre possibilità di sincronizzazione nei servizi di comunicazione middleware sono:",
    "sincronizzazione all'invio della richiesta, sincronizzazione alla ricezione della richiesta dal destinatario e sincronizzazione al completamento del processing della richiesta",
  ],
  [
    "il tipo di comunicazione caratterizzato dal fatto che il mittente continua immediatamente dopo aver inviato un messaggio per la trasmissione è:",
    'comunicazione asincrona"\n                    }\n                 \n            ',
  ],
  [
    "L'obiettivo principale della chiamata di procedura remota (RPC) è:",
    "fare in modo che le chiamate di procedura remota appaiano il più possibile come locali",
  ],
  [
    "La controparte lato server di un client stub in RPC è:",
    'un server stub"\n                    ',
  ],
  [
    "La funzione principale di un client stub in una RPC è:",
    "incapsulare i parametri all'interno del messaggio ed inviarlo al server",
  ],
  [
    "Quando un messaggio raggiunge un server in durante una RPC:",
    "viene inoltrato al server stub",
  ],
  [
    "Il problema con i puntatori e i riferimenti nelle chiamate di procedura remota è il fatto che:",
    "sono significativi solo all'interno dello spazio indirizzi del processo in esecuzione",
  ],
  [
    "La differenza tra marshalling e unmarshalling è:",
    "marshalling è il processo di trasformare i dati in un formato indipendente dalla macchina e dalla rete, mentre unmarshalling è il processo di trasformare i dati nuovamente nel loro formato originale",
  ],
  [
    "La soluzione al problema delle differenze nell'architettura delle macchine nel marshalling dei parametri è:",
    "trasformare i dati in un formato indipendente dalla macchina e dalla rete",
  ],
  [
    "Il principale vantaggio dell'inclusione diretta dell'RPC in un linguaggio di programmazione è:",
    "semplifica lo sviluppo delle applicazioni",
  ],
  [
    "Lo scopo di una Lingua di Definizione di Interfaccia (IDL) in un'applicazione basata su RPC è:",
    "definire l'interfaccia dell'applicazione",
  ],
  [
    "Le due strategie per supportare lo sviluppo di applicazioni basate su RPC sono:",
    "abilitare lo sviluppatore a specificare cosa deve essere chiamato in modo remoto e incorporare l'RPC in un ambiente di programmazione",
  ],
  [
    "L'operazione listen nelle operazioni di socket TCP per i server:",
    "riserva buffer sufficienti per le richieste di connessione",
  ],
  [
    "Il principale svantaggio dell'utilizzo delle Remote Procedure Calls (RPC) nei sistemi distribuiti è:",
    'impossibilità di funzionare quando il lato ricevente non è in esecuzione"\n                    ',
  ],
  [
    "L'operazione bind nelle operazioni di socket TCP per i server:",
    "assegna un indirizzo locale al socket",
  ],
  [
    "L'operazione  di socket TCP che non fa parte di quelle eseguite da un server è:",
    "connect",
  ],
  [
    "Lo scopo principale di ZeroMQ è:",
    "fornire un approccio più robusto ed efficiente per la comunicazione orientata ai messaggi",
  ],
  [
    "Il beneficio della comunicazione asincrona in ZeroMQ è:",
    "consente la trasmissione dei messaggi anche se il destinatario non è pronto",
  ],
  [
    "Il tipo di socketche viene utilizzato per inviare messaggi nel modello richiesta-risposta in ZeroMQ è:",
    "REQ",
  ],
  [
    "Il tipo di socketche viene utilizzato  per ricevere messaggi nel modello pubblicazione-sottoscrizione in ZeroMQ è:",
    'SUB"\n                    ',
  ],
  [
    "La principale differenza tra le operazioni MPI_bsend e MPI_send è:",
    "MPI_bsend supporta la comunicazione asincrona transitoria mentre MPI_send è un'operazione bloccante",
  ],
  [
    "L'operazione di MPI che consente di evitare la copia dei messaggi dai buffer utente è:",
    'MPI_isend"\n                    }\n                 \n            ',
  ],
  [
    "La differenza chiave tra i sistemi message-queuing e socket/MPI è:",
    "i sistemi message-queuing sono progettati per trasferimenti di messaggi che durano minuti, mentre socket e MPI sono progettati per trasferimenti che durano millisecondi",
  ],
  [
    "Lo scopo principale dell'operazione put in un sistema message-queuing è:",
    "passare un messaggio al sistema sottostante per l'aggiunta alla coda specificata",
  ],
  [
    "I messaggi in un sistema  message-queuing sono garantiti per essere consegnati:",
    "ogni volta che vengono inviati, indipendentemente dall'attività del mittente, del destinatario o del server di destinazione\"\n                    ",
  ],
  [
    "Lo scopo principale dell'operazione poll in un sistema message-queuing è:",
    'rimuovere il messaggio pendente più lungo dalla coda specificata"\n                    ',
  ],
  [
    "La mappatura di nome-indirizzo a un gestore di code:",
    "viene implementata come tabella di ricerca e distribuita a tutti i gestori di code",
  ],
  [
    "Un problema comune nella manutenzione della mappatura di nome-indirizzo in un sistema di messaggistica di grandi dimensioni è:",
    "la tabella diventa troppo grande e difficile da gestire",
  ],
  [
    "Lo scopo di un gestore di code router è:",
    "monitorare i router adiacenti per determinare dove inoltrare i messaggi",
  ],
  [
    "La principale funzione di un  broker di messaggi in un sistema di messaggistica è:",
    "convertire i messaggi in ingresso in modo che l'applicazione di destinazione possa comprenderli",
  ],
  [
    "Le conversioni in un normale sistema di messaggistica vengono gestite:",
    "da un broker di messaggi",
  ],
  [
    "I broker di messaggi gestiscono le conversioni in un sistema di messaggistica:",
    'fornendo un sottoprogramma separato per ogni coppia di applicazioni che possono convertire i messaggi tra loro"\n                    }\n                 \n            ',
  ],
  [
    "La comunicazione multicast è:",
    "il processo di invio di dati a più ricevitori",
  ],
  [
    "Il link stress è definito come:",
    "il numero di volte in cui un pacchetto attraversa lo stesso link",
  ],
  [
    "Lo stretch misura:",
    'il rapporto tra il ritardo tra due nodi di overlay e il ritardo che quegli stessi nodi incontrerebbero nella rete sottostante"\n                    ',
  ],
  [
    "La principale differenza tra broadcast e multicast è:",
    "il broadcast invia un messaggio a tutti i nodi in una rete, mentre il multicast invia un messaggio a un sottoinsieme specifico di nodi",
  ],
  [
    "Lo svantaggio principale dell'utilizzo del flooding come metodo di consegna dei messaggi è il fatto che:",
    "invia circa il doppio dei messaggi rispetto ai collegamenti presenti nella rete sovrapposta",
  ],
  [
    "Il flooding è ottimale come metodo di consegna dei messaggi quando:",
    "la rete è strutturata come un albero",
  ],
  [
    "L'obiettivo principale degli algoritmi epidemici:",
    "propagare rapidamente informazioni attraverso un gran numero di nodi utilizzando solo dati locali",
  ],
  [
    "Secondo il modello anti-entropia la strategia più efficace quando solo un nodo è infetto è:",
    "approccio push-pull",
  ],
  [
    "Negli algoritmi epidemici applicati ai sistemi distribuiti, il numero di round necessari per propagare un singolo aggiornamento a tutti i nodi ha una complessità di:",
    "O(log(N))",
  ],
  [
    "Il funzionamento del rumor spreading prevede:",
    "invio degli aggiornamenti ad altri nodi, ma se il nodo è già stato aggiornato da un altro nodo, l'aggiornamento non viene accettato",
  ],
  [
    "Una delle funzioni proncipali del naming nei sistemi distribuiti è:",
    'identificare le entità"\n                    ',
  ],
  [
    "Un nome in un sistema distribuito è:",
    "una stringa di numeri utilizzata per fare riferimento a un'entità",
  ],
  [
    "Un punto di accesso in un sistema distribuito è:",
    "un tipo speciale di entità",
  ],
  [
    "Quando un indirizzo viene utilizzato per fare riferimento a un'entità specifica e l'indirizzo viene sostituito o assegnato a un'entità diversa:",
    "viene creato un riferimento non valido",
  ],
  [
    "Un esempio di entità in un sistema distribuito può essere:",
    "punto di accesso",
  ],
  ["Un identificatore:", "punta sempre alla stessa entità"],
  [
    "Il problema principale della risoluzione dei nomi è:",
    "come tradurre nomi e identificatori in indirizzi",
  ],
  [
    "Il problema con l'utilizzo di una tabella centralizzata per la risoluzione dei nomi nei sistemi distribuiti è:",
    "non è utile perché i sistemi distribuiti richiedono la denominazione di un gran numero di risorse",
  ],
  [
    "La risoluzione dei nomi viene eseguita:",
    "utilizzando una ricerca ricorsiva dei componenti del nome",
  ],
  [
    "Supponendo di volere accedere ad un ipotetico server ftp.a.b.com, la richiesta sarà instradata:",
    "NS(.) → NS(com) → NS(b.com) → indirizzo di ftp.a.b.com",
  ],
  [
    "Un modo per risolvere i problemi di scalabilità causati dalla trasmissione è:",
    "utilizzare il multicasting",
  ],
  [
    "Il beneficio principale dell'utilizzo di puntatori di inoltro per individuare è:",
    "è semplice da implementare",
  ],
  [
    "All'aumentare delle dimensioni della rete, il principale problema con la trasmissione è il fatto che:",
    "la trasmissione diventa meno efficiente e spreca larghezza di banda della rete",
  ],
  [
    "Lo scopo di un home-agent nel processo del Mobile IP è:",
    "eseguire ricerche di posizione e inoltrare o tunnelizzare i pacchetti",
  ],
  [
    "La redirezione della posizione alla posizione attuale del destinatario nel processo di Mobile IP è gestita da:",
    "dal software lato client",
  ],
  [
    "Un vantaggio dell'approccio  home-based è:",
    "elevato livello di trasparenza della posizione",
  ],
  ["Uno svantaggio dell'approccio home-based è:", "posizione della home fissa"],
  [
    "La sfida principale dei sistemi di naming basati su DHT è:",
    "mappare le chiavi per gli indirizzi dei nodi associati",
  ],
  [
    "Il sistema Chord assegna gli identificatori:",
    "utilizzando uno spazio di identificatore di m bit",
  ],
  [
    "Nello spazio di identificatore del sistema Chord vengono usati tipicamente:",
    "160 bit",
  ],
  [
    "Il principale svantaggio del flat naming per gli esseri umani è che i nomi:",
    "sono poco leggibili",
  ],
  [
    "In un namespace, la tabella memorizzata da un nodo di directory è detta",
    "directory table",
  ],
  ["Un grafo di naming ha tipicamente:", "1 nodo radice"],
  [
    "Il nome di un percorso in un grafo dei nomi è generato da:",
    "la sequenza delle etichette degli edge del grafo",
  ],
  [
    "Lo scopo principale di un meccanismo di chiusura nel processo di risoluzione dei nomi è:",
    "selezione del nodo iniziale in uno spazio dei nomi",
  ],
  ["In alias è:", "un nome alternativo per la stessa entità"],
  [
    "Un approccio per implementare un alias in un sistema di denominazione dei grafici è:",
    "consentire a più nomi di percorso assoluti di fare riferimento allo stesso nodo",
  ],
  [
    "Un approccio per implementare un alias in un sistema di denominazione dei grafici è:",
    "rappresentazione di un'entità da parte di un nodo foglia che memorizza un nome di percorso assoluto\"\n                    ",
  ],
  [
    "Il nome del nodo di directory nel namespace esterno in un file system montato è:",
    "punto di mount",
  ],
  [
    "Le informazioni minime richieste per montare un namespace esterno in un sistema distribuito sono:",
    "la designazione di un protocollo di accesso, il nome host del server e il nome del punto di mount nel namespace esterno",
  ],
  [
    "Il ruolo di un sistema di naming basato su attributi è:",
    "restituire una o più entità che corrispondono alla descrizione dell'utente",
  ],
  [
    "I sistemi di denominazione basati sugli attributi sono noti anche come:",
    "servizi di directory",
  ],
  [
    "Il fondamento del modello RDF è:",
    "le risorse sono descritte come triplette soggetto-predicato-oggetto",
  ],
  [
    "Secondo il modello RDF, non avere descrizioni delle risorse nella stessa posizione:",
    'potrebbe causare un problema significativo di prestazioni"\n                    ',
  ],
  ["L'antenato del servizio directory di LDAP è:", "X.500"],
  [
    "Un DIB in LDAP è:",
    'un insieme di tutte le directory entry"\n                    ',
  ],
  [
    "Lo scopo di un DIT in LDAP è:",
    "rappresentare una voce di directory all'interno del grafico dei nomi di un servizio directory LDAP",
  ],
  [
    "Il concetto fondamentale della creazione di un indice distribuito è:",
    "una query di ricerca è formulata come un elenco di coppie (attributo,valore)",
  ],
  [
    "L'output di una query di ricerca in un sistema di archiviazione file peer-to-peer può essere rappresentato come:",
    "elenco di chiavi",
  ],
  [
    "Si può impedire a un server di mantenere un insieme molto ampio di entità in un indice distribuito:",
    "partizionando e distribuendo il set su più subserver",
  ],
  ["Il tempo in un sistema centralizzato:", "non è mai ambiguo"],
  [
    "Il make conosce quali file deve ricompilare perché:",
    "controlla i timestamp",
  ],
  [
    "In un sistema decentralizzato, se un file sorgente viene aggiornato ma il timestamp rimane fisso a causa del fatto che l'orologio sulla sua macchina è leggermente in ritardo:",
    "make non avvia il processo di compilazione",
  ],
  [
    "I programmi di grandi dimensioni sono tipicamente suddivisi in più file sorgente in Unix per:",
    "renderli più facili da modificare",
  ],
  ["I registri CPU che controllano il clock di una macchina sono:", "2"],
  [
    "Quando il registro contatore del timer all'interno della CPU raggiunge lo zero:",
    "viene generato un interrupt di sistema",
  ],
  [
    "Il termine usato per descrivere la differenza nei valori temporali quando più CPU possiedono il proprio clock è:",
    "clock drift",
  ],
  [
    "Lo standard usato per la sincronizzazione globale è:",
    'UTC"\n                    ',
  ],
  ["UTC sta per:", "Universal Coordinated Time"],
  [
    "Il Geostationary Operational Environment Satellite fornisce il servizio UTC con una precisione di circa:",
    "0,5 ms",
  ],
  ["I clock atomici si basano su transizioni stabili di:", "cesio-133"],
  [
    "Data una macchina p in un sistema e un tempo UTC t, la precisione del clock di p è governata da:",
    "∀t,∀p,q: | C_p (t)-C_q (t)| ≤ π",
  ],
  [
    "Il clock drift rate di un tipico clock hardware basato su quarzo è di circa:",
    "10^-6 secondi l'anno",
  ],
  [
    "Livello dello stratum di A dopo la sincronizzazione con B, se il livello dello stratum di A era già maggiore di B è:",
    "un livello superiore a B",
  ],
  ["La precisione globale tipica raggiunta da NTP è:", "da 1 a 50 msec"],
  [
    "Dati T1, timestamp invio da A a B, T2, timestamp ricezione di B, T3, timestamp di invio da B ad A,T4, timestamp ricezione di A, allora il ritardo tra A e B è dato da:",
    '((T4 - T1)+ (T3 - T2))/2"\n                    ',
  ],
  [
    "La principale differenza tra il time server in Berkeley Unix e il classico NTP è:",
    "il time server in Berkeley Unix è attivo, mentre in NTP è passivo",
  ],
  [
    "E' appropriato utilizzare l'algoritmo di Berkeley quando:",
    "nessuna macchina dispone di ricevitori UTC",
  ],
  [
    "Usando Berkeley Unix, il fatto che il tempo di tutte le macchine non coincida con il tempo attuale:",
    "non è necessario",
  ],
  [
    "Usando Berkeley Unix, se l'orologio del demone ntpd non viene mai calibrato manualmente:",
    "non c'è danno finché nessun altro nodo comunica all'esterno",
  ],
  [
    "un clock logico è:",
    'un orologio in un sistema distribuito su cui tutti i nodi concordano"\n                    ',
  ],
  [
    "è importante concordare tutti i processi in un sistema distribuito su:",
    "l'ordine degli eventi",
  ],
  [
    "la relazione happensbefore definita da Lamport è:",
    "una realzione tra due eventi nello stesso processo in cui uno si verifica prima dell'altro",
  ],
  [
    "l'algoritmo proposto da Lamport per assegnare i tempi agli eventi si basa sull'assunzione che:",
    "ogni processo gestisce un contatore locale, che viene incrementato di un valore specifico",
  ],
  [
    "il motivo per includere il tempo di invio in un messaggio secondo Lamport è:",
    'per garantire che il clock del ricevitore sia aggiornato correttamente"\n                    ',
  ],
  [
    "la procedura utilizzata per aggiornare il contatore locale per l'implementazione dei clock logici di Lamport è:",
    "il contatore viene incrementato prima dell'esecuzione di un evento e il timestamp per un messaggio viene impostato sull'ora corrente",
  ],
  [
    "il metodo viene utilizzato per tracciare la causalità nei sistemi distribuiti è:",
    "clock vettoriali",
  ],
  [
    "il problema nel determinare la relazione tra due eventi a e b in un sistema distribuito utilizzando gli clock Lamport è:",
    'è impossibile determinare la relazione tra due eventi semplicemente confrontando i rispettivi valori temporali"\n                    ',
  ],
  [
    "una storia causale in un sistema distribuito è:",
    'una storia di tutti gli eventi che si sono verificati in un particolare processo e hanno causato un particolare evento"\n                    ',
  ],
  [
    "un clock vettoriale in un sistema distribuito è:",
    "un clock che registra il numero di eventi che si sono verificati in ogni processo",
  ],
  [
    "La mutua esclusione nei sistemi distribuiti è:",
    "controllo dell'accesso a una risorsa condivisa consentendo un solo processo alla volta\"\n                    ",
  ],
  [
    "Le due categorie di algoritmi per l'esclusione reciproca distribuita sono:",
    "soluzioni basate su token e autorizzazioni",
  ],
  [
    "E' il metodo per raggiungere l'esclusione reciproca in un sistema distribuito in modo centralizzato è:",
    "simulare un sistema a processore singolo",
  ],
  [
    "Quando un secondo processo richiede l'accesso a una risorsa già utilizzata da un altro processo:",
    'il secondo processo viene temporaneamente accodato e sono attesi ulteriori messaggi"\n                    ',
  ],
  [
    "L'algoritmo di  di mutua esclusione distribuito risolve i conflitti tra i processi che tentano di accedere contemporaneamente a una risorsa condivisa stabilendo che:",
    "il processo con il timestamp più basso vince",
  ],
  [
    "Un processo prima di entrare nella sua sezione critica nell'algoritmo distribuito di mutua esclusione deve inviare un numero di messaggi pari a:",
    '2(N-1)"\n                    ',
  ],
  [
    "Le modifiche che possono essere apportate all'algoritmo distribuito di mutua esclusione per evitare che un arresto anomalo del processo causi un rifiuto di autorizzazione sono:",
    'il mittente deve riprovare fino a quando non viene ricevuta una risposta o la destinazione non è morta"\n                    ',
  ],
  [
    "Nell'algoritmo token-ring il token viene passato da un processo a un altro:",
    "tramite messaggi punto-a-punto",
  ],
  [
    "Quando il token viene perso nell'algoritmo succede che:",
    "il token viene rigenerato",
  ],
  [
    "Quando un processo si arresta in modo anomalo nell'algoritmo viene rilevato:",
    'richiedendo a un destinatario di token di confermare la ricezione"\n                    }\n                 \n            ',
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
