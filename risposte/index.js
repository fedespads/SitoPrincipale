let box = document.querySelector(".box");
let input = document.querySelector("input");
let a;
input.addEventListener("input", function () {
  const inputValue = input.value.toLowerCase().trim();
  box.innerHTML = "";

  if (inputValue !== "") {
    const filteredItems = all.filter((e) =>
      e[0].toLowerCase().includes(inputValue)||e[1].toLowerCase().includes(inputValue)
    );

    const htmlElements = filteredItems.map(
      (e) =>
        `<div class="elemento"><div class="domanda">${
          e[0]
        }</div><div class="risposta">${
          e[1].includes('<img')?e[1]:
          escapeHTML(e[1])
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
  ["Il Web 1.0 può essere descritto come:", "only read web"],
  [
    "L'utenza poteva solo usufruire dei contenuti senza creare interazione e le pagine; stiamo parlado di:",
    "web 1.0",
  ],
  [
    "Se non ci sei non esisti è una frase che identifica:",
    'web 1.0"\n                    ',
  ],
  ["Il Web 2.0 può essere descritto come:", "read-write web"],
  [
    "Se non ci sei comunichi la tua assenza, è una frase che identifica:",
    "web 2.0",
  ],
  [
    "Persone e i contenuti sono i due temi chiave del:",
    'web 2.0"\n                    ',
  ],
  ["Il Web 3.0 può essere descritto come:", "read-write-execute web"],
  ["Un web adattabile ai diversi dispositivi:", "responsive web design"],
  [
    "Il Web3 si propone come:",
    "web decentralizzato e basato su tecnologie come blockchain, crypto e NFT",
  ],
  [
    "Il Web 4.0 potrebbe essere descritto come:",
    'rete simbiotica"\n                    ',
  ],
  ["Il dato è:", "un valore grezzo"],
  [
    "Una informazione:",
    "rappresenta il processo di elaborazione del significato di un dato o di un insieme",
  ],
  ["Dato + elaborazione:", "informazione"],
  [
    "Un Sistema informativo decisionale:",
    "riguarda l'insieme di informazioni necessarie per guidare i singoli processi operativi nel loro divenire\"\n                    ",
  ],
  [
    "La comunicazione è un processo relazionale, in cui due o più individui:",
    'negoziano un insieme di significati condivisi"\n                    ',
  ],
  [
    "In un processo di comunicazione ci sono sempre due soggetti:",
    "mittente e destinatario",
  ],
  [
    "Il canale:",
    'è lo strumento utilizzato per trasferire il messaggio dal mittente al destinatario"\n                    ',
  ],
  [
    "Nella comunicazione in rete:",
    "il canale di trasmissione delle informazioni è internet",
  ],
  [
    "Il modello ISO/OSI:",
    'è stato progettato per creare uno standard per offrire una base per gli standard di comunicazione indipendentemente dai fornitori"\n                    ',
  ],
  ["Sulla rete internet:", "gli host scambiano dati"],
  ["Per generare informazione, il dato ha bisogno di:", "elaborazione"],
  ["Le peer entities sono:", "entità sullo stesso livello"],
  [
    "Un protocollo di comunicazione è:",
    'un insieme di regole formali definite al fine di realizzare quanto due peer entities si sono proposte"\n                    ',
  ],
  [
    "Un servizio è:",
    "un insieme di funzionalità offerte da un livello a quello superiore",
  ],
  ["Il service-user è:", "chi usufruisce del servizio"],
  [
    "Il set di servizi offerti da un livello viene definito:",
    "interfaccia di livello",
  ],
  ["Il numero di livelli in un sistema di comunicazione:", "è variabile"],
  [
    "Nella comunicazione in rete:",
    "il canale di trasmissione delle informazioni è internet",
  ],
  ["Nel modello OSI i livelli di comunicazione sono:", "7"],
  [
    "L'ufficio postale:",
    'offre servizi ed usufruisce di servizi"\n                    ',
  ],
  [
    "Si riferisce si riferisce a una specifica area di funzionalità o a un insieme di responsabilità:",
    "livello",
  ],
  [
    "Le funzionalità per la cooperazione (end-to-end) sono proprie dei seguenti livelli:",
    "Application - Presentation - Session",
  ],
  [
    "Offre un servizio di controllo della correttezza sintattica e semantica delle informazioni scambiate; i principali compito sono la traslazioni, crittografia e compressione:",
    "Presentation Layer",
  ],
  ["Uno dei suoi compiti è segmentare e ri-assemblare:", "Transport Layer"],
  ["Uno dei suoi compiti è l'instradamento:", "Network Layer"],
  [
    "I dispositivi che operano a questo livello sono switch e bridge:",
    "Data Link Layer",
  ],
  ["Il dispositivo che opera a questo livello è il router:", "Network Layer"],
  [
    "Uno dei suoi principali compiti è la consegna del messaggio al destinatario, ovvero al giusto processo:",
    "Transport Layer",
  ],
  ["La PDU è composta da:", "PCI ed SDU"],
  ["Packet è il nome della PDU nel livello:", "Network"],
  [
    "Nel modello OSI, il livello di rete:",
    'si occupa di inoltrare i pacchetti su una rete, utilizzando indirizzi di rete per indirizzare i pacchetti verso la destinazione"\n                    ',
  ],
  [
    "Le funzionalità per la interconnessione fisica tra un sistema elaborativo e un sistema di telecomunicazione sono realizzate nei livelli:",
    "Network - Data Link - Physical",
  ],
  [
    "TCP/IP è stato progettato:",
    "per le esigenze specifiche della comunicazione su Internet",
  ],
  [
    "Il protocollo IP:",
    "è responsabile dell'inoltro dei pacchetti di dati sulla rete, utilizzando indirizzi di rete per indirizzare i pacchetti verso la destinazione",
  ],
  [
    "Il protocollo TCP:",
    'è responsabile del trasporto affidabile dei dati sulla rete"\n                    ',
  ],
  [
    "In questo livello viene utilizzato il protocollo ARP:",
    "Network Access Layer",
  ],
  ["In questo livello viene utilizzato il protocollo IP:", "Internet Layer"],
  ["In questo livello viene utilizzato il protocollo ICMP:", "Internet Layer"],
  ["In questo livello viene utilizzato il protocollo UDP:", "Transport Layer"],
  [
    "In questo livello viene utilizzato il protocollo SMTP:",
    'Application Layer"\n                    ',
  ],
  [
    "E' stato sviluppato come un modello di riferimento generale per la comunicazione di rete:",
    "il modello OSI",
  ],
  [
    "I modelli OSI e TCP/IP hanno rispettivamente il seguente numero di livelli:",
    "7, 4",
  ],
  ["Il repeater è un dispositivo di livello:", "1"],
  ["Il router è un dispositivo di livello:", "3"],
  ["Lo switch è un dispositivo di livello:", '2"\n                    '],
  [
    "Nel flooding:",
    "il pacchetto viene smistato su tutte le porte tranne quella di provenienza",
  ],
  [
    "Quando il router non è in grado di risolvere l'indirizzo logico:",
    'viene creato un frame verso il router successivo (next hop) su una delle reti a cui è connesso"\n                    ',
  ],
  [
    "E' un dispositivo che protegge una rete da accessi non autorizzati:",
    "firewall",
  ],
  ["Ci aiuta a determinare latenza e perdita di pacchetti:", "ping"],
  ["Ci dice chi è connesso al nostro host e su quali porte:", "netstat"],
  [
    "HTTP è un protocollo di tipo request-response:",
    "pensato originariamente per l'interscambio di ipertesti",
  ],
  ["È un linguaggio di markup che viene interpretato da software:", "html"],
  [
    "Linguaggio nato per definire il modo in cui vanno visualizzati i vari elementi di un documento scritto in un linguaggio di markup:",
    'css"\n                    ',
  ],
  [
    "Permette di spostare la logica dell'applicazione dal server al client:",
    "ajax",
  ],
  [
    "Le tecnologie che compongono MEAN sono:",
    "mongodb, express, angular e node",
  ],
  ["Nella fase web 1.0:", "è stato introdotto l'html"],
  ["Nella fase web 2.0:", 'è stato introdotto ajax"\n                    '],
  ["Nella fase web 3.0:", "è stato introdotto angularjs"],
  ["Nella fase web 3.0:", "è stato introdotto vuejs"],
  [
    "Nella fase web 4.0 il web development sarà certamente impattato da tecnologie come:",
    "l'intelligenza artificiale",
  ],
  ["HTTP è un protocollo di tipo:", "sincrono"],
  [
    "Nell'uso comune, se il client corrisponde al browser, il server corrisponde alla macchina su cui risiede:",
    "il sito web",
  ],
  [
    "I messaggi HTTP sono di tipo request e:",
    'response"\n                    ',
  ],
  [
    "Nei messaggi HTTP di ripo request, il <method> non può essere:",
    'SET"\n                    ',
  ],
  [
    "Nei messaggi HTTP di tipo response, lo <status> nel range (200-299) indica:",
    "successful responses",
  ],
  [
    "Nei messaggi HTTP di tipo response, lo <status> nel range (400-499) indica:",
    'client error responses"\n                    ',
  ],
  [
    "Nei messaggi HTTP di tipo response, lo <status> nel range (300-399) indica:",
    "redirection responses",
  ],
  [
    "L'header set-cookie:",
    "è utilizzato dal server per chiedere al client di memorizzare un generico token",
  ],
  ["L'ultima versione del protocollo HTTP è:", "HTTP/3"],
  ["Il web adotta principalmente", "HTTP/1.1 ed HTTP/2"],
  ["Il client invia una richiesta al server, specificando:", "la URL"],
  [
    "Quando il server invia al client i dati richiesti:",
    "il messaggio di stato è presente",
  ],
  ["L'HTTP si colloca sul livello:", 'Application"\n                    '],
  [
    "Permette di spostare la logica dell'applicazione dal server al client:",
    "ajax",
  ],
  [
    "Per full-duplex si intende:",
    "sulla stessa connessione si può trasmettere e ricevere",
  ],
  ["Nel set-up della sessione TCP:", "avviene il three way handshake"],
  [
    "Per controllo di flusso si intende:",
    "un meccanismo per evitare che il destinatario sia sovraccaricato dalla ricezione di troppi pacchetti",
  ],
  ["L'ack è usato per:", "confermare la ricezione di ogni pacchetto"],
  ["La stringa www.mydestination.it rappresenta:", "un hostname"],
  [
    "Quando si inserisce una URL nel browser il metodo dell'HTTP request è:",
    "GET",
  ],
  [
    "Questa versione di HTTP questa versione introduce il supporto per le richieste multiple in parallelo sulla stessa connessione:",
    "HTTP/2.0",
  ],
  ["Cosa si intende per MIME:", "il tipo di una risorsa"],
  ["Cosa rappresenta application/JSON:", "il MIME type per una stringa json"],
  ["Identifica una risorsa in base al posto in cui si trova:", "URL"],
  [
    "Serve come nome univoco per la risorsa, indipendentemente da dove si trova",
    "URN",
  ],
  [
    "La parte path in una url rappresenta:",
    'il nome (locale) della risorsa sul server"\n                    ',
  ],
  [
    "a=b&c=d rappresenta:",
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/35044_risorse_PEG/img/testImage_1675268781354.png" alt="" title="domanda7r1.png" />',
  ],
  [
    "Http, ftp ed rtsp possono trovare in quale parte della url:",
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/35044_risorse_PEG/img/testImage_1675268063721.png" alt="" title="domanda8r3.png" />',
  ],
  [
    "È utilizzato per inviare informazioni al server per la creazione o l'aggiornamento di una risorsa:",
    'POST"\n                    ',
  ],
  ["È idempotente:", "GET, in ogni circostanza"],
  ["L'HTTP è anche chiamato:", "senza stato"],
  ["Il security Layer si colloca:", "tra livello application e transport"],
  [
    "L'HTTPS fornisce integrità della trasmissione, cioè:",
    'è possibile rilevare se i dati scambiati fra client e server sono stati manomessi da un terzo agente"\n                    ',
  ],
  ["Nella crittografia simmetrica:", "si usa una sola chiave"],
  ["Nella crittografia asimmetrica:", "si usano due chiavi"],
  [
    "La firma digitale:",
    "consente al sottoscrittore di rendere manifesta l'autenticità del documento informatico",
  ],
  [
    "Un certificato digitale è firmato da:",
    'una terza parte"\n                    ',
  ],
  ["Un certificato digitale è emesso:", "da una Certification Authority (CA)"],
  [
    "La TLS:",
    "autentica e verifica che il server a cui si sta effettuando la connessione sia sicuro",
  ],
  ["In HTTPS:", "si stabilisce una connessione sulla porta 443"],
  [
    "Uno stateless server:",
    "tratta ogni richiesta come una transazione indipendente da ogni precedente richiesta",
  ],
  [
    "In presenza di un forward proxy:",
    "tutti i client inviano le loro richieste al forward proxy e questo invierà le richieste del client verso l'esterno",
  ],
  [
    "Il metodo della Fat Url prevede che:",
    "sia inserito un ID univoco su tutti gli URL di una certa web application",
  ],
  ["Un reverse proxy:", "risiede lato server"],
  ["Un session cookie:", "ha durata limitata al ciclo di vita del browser"],
  ["Un persistent cookie:", "ha durata stabilita dal server"],
  [
    "Un secure cookie:",
    'si usa solo in presenza di HTTPs"\n                    ',
  ],
  [
    "Un cookie può essere impostati solo sul dominio principale della risorsa corrente e sui suoi sottodomini:",
    "e non su un altro dominio e sui suoi sottodomini",
  ],
  [
    "I cookie che corrispondono al dominio del sito corrente:",
    "sono detti first party cookies",
  ],
  [
    "I cookie provenienti da domini diversi dal presente sito:",
    "sono detti third party cookies",
  ],
  [
    "In un cookie, oltre a nome e valore:",
    "non sono obbligatori altri attributi",
  ],
  ["La scadenza del cookie:", 'è opzionale"\n                    '],
  ["In un cookie è possibile specificare più di una coppia nome/valore:", "si"],
  ["Max-age va specificato in termini di:", "numero di secondi"],
  [
    "L'attributo HttpOnly:",
    'se impostato, non consente al client di accedere alle informazioni del cookie tramite Javascript"\n                    ',
  ],
  ["Set-Cookie: sessionId=1234 indica un cookie di tipo:", "session"],
  [
    "Set-Cookie: id=1234; Max-Age=2001000 indica un cookie di tipo:",
    "persistent",
  ],
  [
    "Se in un cookie, l'attributo domain non è presente:",
    "il cookie verrà inviato anche a risorse richieste a sottodomini",
  ],
  [
    "Se in un cookie, l'attributo domain è presente:",
    "il cookie sarà inviato soltanto per risorse richieste a quel dominio",
  ],
  [
    "Se si vuole cancellare un cookie:",
    'occorre settare una data di expires nel passato"\n                    ',
  ],
  ["In interner il livello di trasporto è:", "TCP o UDP"],
  [
    "In un Server concorrente, una richiesta:",
    "può essere accettata anche prima del termine di quella (o quelle) attualmente in corso di servizio",
  ],
  [
    "La connessione telefonica può essere considerata un esempio di connessione Client Server del tipo:",
    'connection-oriented"\n                    ',
  ],
  [
    "Le API consentono ad un prodotto o servizio di comunicare con altri prodotti e servizi:",
    "senza dover sapere come sono implementati",
  ],
  [
    "Quanto si parla di Remote API:",
    "ci stiamo riferendo ad API progettate per interagire attraverso una rete di comunicazione",
  ],
  [
    "I microservizi sono un'architettura software che si basa sull'idea:",
    "di dividere un'applicazione in piccoli servizi autonomi che comunicano tra loro tramite un'interfaccia ben definita",
  ],
  ["Le RESTful API si basano sull'utilizzo di standard:", "HTTP"],
  ["Cosa si intende per CRUD", "Create, Read, Update, Delete"],
  [
    "La Cacheability:",
    'può eliminare la necessità di alcune interazioni Client-Server"\n                    ',
  ],
  [
    "Nessun contenuto del client viene memorizzato sul server tra le richieste, è caratteristico del server:",
    "stateless",
  ],
  ["SGML:", "è uno standard per la descrizione logica dei documenti"],
  [
    "L'XML:",
    'può essere usato per lo scambio delle informazioni tra sistemi diversi"\n                    ',
  ],
  ["In XML ogni tag:", "deve essere chiuso"],
  ["Un file XML ha una struttura:", "ad albero"],
  [
    "XPath:",
    "è un linguaggio con cui è possibile individuare porzioni di un documento XML",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/35099_xml_PEG/img/testImage_1675699841242.png" alt="" title="domenda6.png" width="342" height="29" />',
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/35099_xml_PEG/img/testImage_1675698224992.jpg" alt="" title="domanda6r3.jpg" width="82" height="16" />',
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/35099_xml_PEG/img/testImage_1675699863336.png" alt="" title="domenda7.png" width="256" height="29" />',
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/35099_xml_PEG/img/testImage_1675698317936.jpg" alt="" title="domanda7r3.jpg" width="41" height="17" />',
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/35099_xml_PEG/img/testImage_1675699215962.png" alt="" title="domenda8.png" width="236" height="30" />',
    "errata",
  ],
  [
    "Relativamente alla scelta tra element ed attribute in XML:",
    "non ci sono regole",
  ],
  [
    "La seguente Xquery /bookstore/book[1]/title indica:",
    "la selezione del titolo del primo libro",
  ],
  [
    "JSON è basato su due strutture:",
    "un insieme di coppie nome/valore ed un elenco ordinato di valori",
  ],
  ["Un oggetto JSON:", "è una serie non ordinata di nomi/valori"],
  ["Un array JSON:", "inizia con la ["],
  ['Il seguente oggetto {"name":"Mario"}:', "è corretto"],
  ["La funzione parse:", "converte una stringa JSON in un oggetto Javascript"],
  [
    "La funzione stringify:",
    "converte un oggetto Javascript in una stringa JSON",
  ],
  ['Il seguente oggetto {"name":"Mario"}:', "ha 1 proprietà"],
  ["Sia JSON che XML sono:", 'autodescrittivi"\n                    '],
  ["Relativamente agli array:", "JSON può utilizzarli ed XML no"],
  ["Per scorrere un documento XML, AJAX:", "usa il DOM XML"],
  ["ASCII è un sistema di codifica a:", "7bit"],
  ["UTF-8 è un sistema di codifica a:", "8bit"],
  [
    "I linguaggi di mark-up sono stati divisi in:",
    'linguaggi procedurali e dichiarativi"\n                    ',
  ],
  [
    "HTML 4.01 introduce:",
    "la separazione del livello di presentazione della formattazione in un'entità separata dall'HTML (i CSS)",
  ],
  ["HTML5 è introdotto nel:", "2014"],
  ["HTML5 è un linguaggio", "ubiquo"],
  [
    "L'obiettivo del WHAT era di:",
    "aiutare lo sviluppo di un web più orientato alle applicazioni che ai documenti",
  ],
  ["Il linguaggio HTML:", "non è touring completo"],
  ["Il linguaggio CSS:", "non è touring completo"],
  ["Il linguaggio HTML, CSS con l'input utente:", "è touring completo"],
  ["In HTML ciascun elemento è individuato da:", "tag"],
  ["Well formed indica che:", "ogni tag aperto deve essere chiuso"],
  [
    "L'ordine con cui sono riportati gli attributi all'interno della lista degli attributi nel tag di apertura (o apertura-chiusura):",
    'non è importante"\n                    ',
  ],
  ["In HTML l'annidamento è:", "permesso"],
  ["ASCII è una codifica a:", "7bit"],
  ["UTF-8 è una codifica a:", "8bit"],
  [
    "Il meta charset è usato per:",
    "indicare il tipo di codifica usata nel documento",
  ],
  ["Il simbolo   indica:", "no breaking space"],
  [
    "Il primo elemento di un documento HTML è:",
    "la definizione del tipo di documento",
  ],
  ["Per l'elemento body:", "non ci sono attributi specifici"],
  ["In HTML l'intestazione è racchiusa nei tag:", "head"],
  ["L'HTML DOM è:", "il modello standard per i documenti HTML"],
  [
    "I metodi HTML DOM sono:",
    'azioni che si possono eseguire"\n                    ',
  ],
  ["In una pagina HTML un nodo:", "può essere sia un tag che un testo"],
  ["In una pagina HTML un elemento:", "è contraddistinto da un tag"],
  [
    "In un HTML COM, un element eredita da node:",
    'come dog eredita da animal"\n                    ',
  ],
  [
    "Nell'head, definisce come vengono gestiti i riferimenti relativi nei link:",
    "base",
  ],
  ["Nell'head, definisce i collegamenti verso file esterni:", "link"],
  ["Nell'head, definisce metadati:", 'meta"\n                    '],
  [
    "L'attributo in meta che da informazioni al browser su come gestire la pagina ed hanno una struttura di questo tipo è:",
    "http-equiv",
  ],
  [
    "In HTML, l'header contiene:",
    'informazioni di servizio"\n                    ',
  ],
  ["In HTML, il body può avere come attributo:", "background"],
  [
    "Gli elementi 'block-level': costituiscono un blocco attorno a sé, e di conseguenza:",
    "vanno a capo",
  ],
  ["Gli elementi 'in-line':", "non vanno a capo"],
  ["I blocchi 'div':", "vanno a capo"],
  ["I blocchi 'span':", "non vanno a capo"],
  ["Nell'img, src è:", "un attributo"],
  [
    "In HTML gli elementi di una ordered list sono indicati con:",
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/35130_HtmlCor_PEG/img/testImage_1675785876503.jpg" alt="" title="domanda8r3.jpg" width="39" height="20" />',
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/35130_HtmlCor_PEG/img/testImage_1675785838580.png" alt="" title="domanda9.png" width="135" height="29" />',
    'è stato introdotto con HTML5"\n                    ',
  ],
  [
    "HTML5:",
    "estende notevolmente la possibilità di integrazione di contenuti multimediali nella pagina",
  ],
  [
    "Quando parliamo di autenticazione:",
    "facciamo riferimento a un accesso privilegiato per alcuni utenti a determinate sezioni di un'applicazione web",
  ],
  [
    "I token che si usano on-line per l'autenticazione:",
    "sono tipicamente challenge-response based",
  ],
  ["Nella basic-authentication le credenziali sono inviate:", "in plain text"],
  [
    "Una HTTP response del tipo HTTP/1.1 401 Unauthorized indica:",
    "che l'utente non è autenticato",
  ],
  ["In basic-authentication la concatenazione avviene tramite:", "i due punti"],
  [
    "Nella digest authentication, il campo qop indica:",
    'quality of protection"\n                    ',
  ],
  [
    "Nella digest authentication, il campo response indica:",
    "il digest prodotto dal client",
  ],
  ["Il campo WWW-Authenticate è usato:", "nella basic authentication"],
  ["JWT e Bearer Token sono usati in ambito:", "oauth2"],
  [
    "Il fatto di conoscere il Bearer token, dà la possibilità di:",
    'accedere alla risorsa"\n                    ',
  ],
  [
    "L'attributo action dell'elemento form:",
    "ha come valore una URI che determina l'azione della form stessa\"\n                    ",
  ],
  ["Application/x-www-form-urlencoded è un possibile valore di:", "enctype"],
  [
    "Quando il browser chiede una pagina web al server via HTTP:",
    "la richiesta che viene effettuata per mezzo di una get",
  ],
  ["Input type submit è:", "bottone per trasmettere il contenuto del form"],
  ["Input type file è:", "un controllo che consente di caricare un file"],
  [
    "Il bottone con type reset è usato per:",
    "riportare il contenuto dei campi al valore originale",
  ],
  ["Un input puà essere disabilitato agendo sull'attributo:", "disabled"],
  [
    "Usando l'elemento input con il type='password':",
    "si ha la possibilità di creare un campo che permette l'inserimento di dati riservati",
  ],
  [
    "Il Content-Type: application/x-www-form-urlencoded può essere usato per:",
    'accedere ad una URL"\n                    ',
  ],
  [
    "La seguente coppia {'key':'value'} può essere usata come body per una:",
    "HTTP post in json",
  ],
  [
    "I CSS hanno lo scopo fondamentale di:",
    'separare contenuto e presentazione nelle pagine Web"\n                    ',
  ],
  [
    "I CSS servono a definire:",
    "come il contenuto deve essere presentato all'utente",
  ],
  [
    "CSS1 è un primo esempio di:",
    "di sistema per separare contenuto da formattazione",
  ],
  [
    '<table></table>\n<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/35149_introduzione_PEG/img/testImage_1675867473923.png" alt="" title="domanda4.png" width="223" height="29" />',
    "non è considerata una buona pratica",
  ],
  [
    "In CSS1 i richiami tra i due codici HTML e CSS venivano effettuati tramite due particolari attributi:",
    "class ed ID",
  ],
  [
    "In CSS2 viene gestito per la prima volta il problema:",
    "degli smartphone e palmari",
  ],
  ["Nel CSS3 vengono introdotte:", "le media queries"],
  [
    "La fruizione di una pagina web in termini di funzionalità:",
    "non è dipendente dal CSS",
  ],
  [
    "I CSS sfruttano una delle caratteristiche fondamentali del HTML:",
    "struttura ad albero",
  ],
  [
    "Con la regola del cascading si intende che:",
    'la regola più specifica viene scelta"\n                    ',
  ],
  ["Nei CSS il cascading indica che:", "la regola più specifica viene scelta"],
  [
    "La possibilità di selezionare un elemento in base alla presenza di un attributo o in base alla presenza di particolari stringhe al suo interno è tipica del:",
    "CSS 3",
  ],
  [
    "L'insieme  di regole che definisce la presentazione di un documento è definito:",
    'stylesheet"\n                    ',
  ],
  [
    "In CSS l'istruzione che permette di specificare l'aspetto stilistico di uno o più elementi è detta:",
    "regola",
  ],
  [
    "Una regola in CSS è composta da:",
    'selettore e dichiarazione"\n                    ',
  ],
  [
    "E' possibile raggruppare le regole che hanno dichiarazioni uguali in una unica regola:",
    "sempre",
  ],
  ["Utilizzare uno stylesheet esterno:", "è preferibile"],
  [
    "Uno stile in linea:",
    "ha la massima priorità e sovrascriverà gli stili interni ed esterni e le impostazioni predefinite del browser",
  ],
  ["L'elemento link per associare uno stylesheet va inserito:", "nell'head"],
  ["L'elemento style va inserito:", "nell'head"],
  [
    "Nel CSS Il selettore serve:",
    "per collegare uno stile agli elementi a cui deve essere applicato",
  ],
  [
    "Il selettore identificato dal simbolo * indica:",
    "il selettore universale",
  ],
  [
    "Il selettore identificato da #myid si applica:",
    'agli elementi che presentano l\'attributo id="myid""\n                    ',
  ],
  [
    "In CSS le shorthand properties consentono:",
    "di definire un insieme di aspetti, correlati fra di loro usando una sola proprietà",
  ],
  ["Una regola marcata come !important:", "ha sempre precedenza sulle altre"],
  [
    "Nel box model, il padding:",
    "indica spazio vuoto tra contenuto e bordo dell'elemento",
  ],
  [
    "Nel box model, il margin:",
    "indica lo spazio vuoto tra l'elemento e gli altri adiacenti",
  ],
  [
    "Nel box model, il border:",
    'indica un bordo che circonda il padding e il contenuto"\n                    ',
  ],
  [
    "La proprietà overflow permette di definire il comportamento da adottare quando:",
    "il contenuto deborda dalle dimensioni fissate",
  ],
  [
    "Nel box model, se non si imposta specificamente il valore width:",
    "la dimensione del contenuto viene stabilita automaticamente dal browser",
  ],
  [
    "Nel box model del CSS con margin si intende:",
    "lo spazio vuoto tra l'elemento e gli altri adiacenti",
  ],
  [
    "Il display è una proprietà che determina:",
    'come un elemento viene visualizzato sulla pagina"\n                    ',
  ],
  [
    "Il posizionamento è una proprietà che determina:",
    "la posizione di un elemento rispetto ai suoi elementi fratelli o rispetto al suo contenitore",
  ],
  ["Nel display block:", "l'elemento diventa di tipo blocco"],
  ["Display block in CSS indica:", "che l'elemento diventa di tipo blocco"],
  [
    "Display inline in CSS indica:",
    "che l'elemento diventa di tipo inline\"\n                    ",
  ],
  ["In un inline-block:", "è possibile configurare altezza e  larghezza"],
  [
    "Con display:inline, l'elemento si comporta come:",
    'uno <span>"\n                    ',
  ],
  ["Con display:none:", "l'elemento viene trattato come se non ci fosse"],
  ["Con display:block, l'elemento si comporta come:", "un <div>"],
  ["In CSS3 sono stati introdotti:", "flex e grid"],
  [
    "In CSS, con display inline si intende:",
    "che l'elemento diventa di tipo inline\"\n                    ",
  ],
  [
    "In CSS, con display inline-block si intende:",
    "l'elemento diventa come appartenente ad un inline blocco di tipo contenitore su cui è possibile settare altezza e larghezza",
  ],
  [
    "Nel CSS, con float:",
    "è possibile estrarre un elemento dal normale flusso del documento e spostarlo su uno dei lati (destro o sinistro) del suo elemento contenitore",
  ],
  [
    "Nel CSS, se float è settato a left:",
    "l'elemento viene spostato sul lato sinistro del box contenitore, il contenuto scorre a destra\"\n                    ",
  ],
  [
    "La proprietà clear in CSS serve:",
    "a disattivare l'effetto della proprietà float sugli altri elementi",
  ],
  ["Con position static si intende:", "il posizionamento naturale nel flusso"],
  [
    "Con position relative si intende:",
    "che l'elemento viene posizionato relativamente al box che l'elemento avrebbe occupato nel normale flusso del documento",
  ],
  [
    "Con position absolute si intende:",
    "che il box dell'elemento viene rimosso dal flusso ed è posizionato rispetto al box contenitore del primo elemento antenato «posizionato», ovvero non static\"\n                    ",
  ],
  ["Con position fixed si intende:", "il posizionamento rispetto al viewport"],
  ["Javascript è un linguaggio di programmazione:", "interpretato"],
  [
    "In un linguaggio interpretato:",
    "il codice sorgente viene eseguito direttamente, senza la necessità di una fase di compilazione",
  ],
  [
    "L'interprete Javascript:",
    "può essere meno efficiente di un programma compilato",
  ],
  [
    "Lo script Javascript non può essere inserito:",
    'in un file css"\n                    ',
  ],
  [
    "Se lo script si trova nel body subito prima la chiusura del tag stesso:",
    "siamo certi che lo script funzionerà correttamente",
  ],
  ["Le variabili dichiarate con let:", "hanno un block scope"],
  [
    "Se time è pari a 7:",
    'saluto è pari a "Buongiorno""\n                    ',
  ],
  ["Se time è pari a 27:", 'saluto è pari a "Buonasera"'],
  ["In un ciclo for, l'espressione 1:", "viene eseguita una sola volta"],
  [
    "In un ciclo do..while:",
    "il blocco di codice all'interno del ciclo viene eseguito almeno una volta, indipendentemente dalla verità della condizione",
  ],
  [
    "Nel seguente oggetto Javascript:",
    'address è una proprietà di person"\n                    ',
  ],
  ["Nel seguente oggetto Javascript:", "person ha 3 proprietà"],
  ["Nel seguente oggetto Javascript:", "person ha 3 proprietà"],
  [
    "Nel seguente oggetto Javascript:",
    "la proprietà posts ha la struttura di un array",
  ],
  [
    'Nel seguente oggetto Javascript, se volessi usare la funzione "saluta" dovrei eseguire il seguente codice:',
    "persona.saluta()",
  ],
  ["Nel seguente codice Javascript:", "frutti["],
  ["Il metodo push(x) su un array:", "aggiunge x alla fine dell'array"],
  ["Il metodo pop() su un array:", "elimina l'ultimo elemento dell'array"],
  [
    "In Javascript, la funzione splice:",
    'viene utilizzata per aggiungere o rimuovere elementi da un array in una posizione specifica"\n                    ',
  ],
  [
    "In Javascript, la funzione splice:",
    "può essere usata per creare una copia di un array",
  ],
  ["Il seguente è un esempio di:", "Arrow function"],
  ["La seguente funzione:", "è un esempio di arrow function"],
  [
    "In Javascript, la conversione da oggetto o array a JSON viene effettuata utilizzando il metodo:",
    "stringify()",
  ],
  [
    "In Javascript, la conversione da JSON a oggetto o array viene effettuata utilizzando il metodo:",
    "parse()",
  ],
  [
    'Questo metodo restituisce l\'elemento HTML che ha un attributo "id" corrispondente al valore specificato come argomento:',
    "getElementById()",
  ],
  [
    "Questo metodo restituisce una collezione di tutti gli elementi HTML che hanno una classe CSS corrispondente al valore specificato come argomento:",
    "getElementByClassName()",
  ],
  [
    "Questo metodo restituisce una collezione di tutti gli elementi HTML che hanno un tag HTML corrispondente al valore specificato come argomento:",
    "getElementByTagName()",
  ],
  [
    "Questo metodo restituisce il primo elemento HTML che corrisponde al selettore CSS specificato come argomento:",
    'querySelector()"\n                    ',
  ],
  [
    "Seleziona tutti gli elementi figli di un altro elemento:",
    'selettore discendente"\n                    ',
  ],
  [
    "Seleziona gli elementi in base a uno stato o una condizione specifici:",
    "selettore di pseudo-classe",
  ],
  [
    "Questa proprietà restituisce o imposta il contenuto HTML di un elemento, compresi eventuali tag HTML al suo interno:",
    "innerHTML",
  ],
  [
    "Questa proprietà restituisce o imposta il testo contenuto in un elemento, ignorando eventuali tag HTML al suo interno:",
    "textContent",
  ],
  [
    "Questa proprietà restituisce o imposta il valore di un elemento input:",
    "value",
  ],
  [
    "Se si sta manipolando un elemento HTML che contiene solo testo è preferibile utilizzare:",
    "textContent",
  ],
  [
    "Quale dei seguenti non è un metodo ammesso:",
    'createAndAppend"\n                    ',
  ],
  [
    "Gli eventi in JavaScript:",
    "rappresentano azioni o comportamenti che si verificano nella pagina web",
  ],
  [
    "I listener in JavaScript:",
    'permettono di gestire in modo personalizzato gli eventi"\n                    ',
  ],
  [
    "L'evento associato al fatto che il cursore del mouse entra in un elemento è:",
    "mouseenter",
  ],
  [
    "L'evento associato al fatto che un pulsante del mouse viene rilasciato su un elemento è:",
    'mouseup"\n                    ',
  ],
  [
    "L'evento associato al fatto che un pulsante del mouse viene premuto su un elemento è:",
    "mousedown",
  ],
  [
    "Un file esterno javascript script.js non può essere inserito in una pagina HTML:",
    'nello style di un elemento"\n                    ',
  ],
  [
    "Se uno script javascript è inserito nell'head:",
    "viene invocato immediatamente",
  ],
  [
    'Il seguente codice<br /><img src="data:image/jpeg;base64,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" alt="" title="D3.jpg" />',
    'presuppone un oggetto esterno itemList"\n                    ',
  ],
  [
    'Il seguente codice<br /><br /><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCABqAa0DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9+2YIpZiFUckntUX9pW//AD8Q/wDfYo1L/kHz/wDXNv5V8L6l8RdT+MH7ffxN8JeIPjBrPwt0b4XW2hT6DoOl31lp7eIku4TNPf3LXMTtcQmUfZhGm1FMbZJdhgA+6P7St/8An4h/77FH9pW//PxD/wB9ivy9/ad/ah8bafJ+0p4ytvjBqngvxd8EfE1tpHg74fQGz+xa7Ebaylt1urWSNri8bUZbiWNGjddmFCYZWJT4z/Gb4reG9W+NXxGt/ip4ssLX4b/Gjw74W0fwlHHaf2Stjef2FHeW91uiMswb+0JdmJF8thuXJY0AfqH/AGlb/wDPxD/32Khj8R6fNfS2q31m1zAqvJCJlMkatnaSucgHa2CeuD6V+ffxr+M/iz4Ift/x3njjxn4sn+G2teLNK8P+Fbbwf4h0w2emT3CRQix1nS3j+2SmW6MjmeF3CxyJlYwhJp/C/wCBdnoX/BWj4uRX3xn+J9hfrofhXW7XTZ/EtrCmsxNcanm2aNoA01rG6iNUQgqJGUsSwIAP0W/tK3/5+If++xWHD8XfCdz8RbjwfH4o8OyeLbXT01afRF1KE6jDZPIY1uWt93mLC0gKCQrtLAjOeKzT1r5N8AeIh4R/4K8+KvD3/CeX2uab4g+Gyawunalf2k/9mXv9svD9ntisaypGsYOIWZsEk9TmgD7at/Een3dzcQxX1nJNasFnjSdWaEkBgGGcqSpBGeoOam/tK3/5+If++xX51/sVfAyy8Jf8FFP2gra8+MnxNn1TR/FOh3SaPqXiO1I16CbQrTbJcw+QrzoGEkaFCoxCFySpJ80/ZX/ar+Pnxz+L2h+KvtmrW9te+NdY0XxNomo+K/D8ei6bptvLeQC2tdNVv7Sjv4PJgk3PlpcSkrsdcAH6vjUrc/8ALxD/AN9iquk+LNL1+0a4sdS0+9gWR4TJBcJIgdGKOuVJG5WBUjqCCDyK/HX9jP8Aai+N+reOPg/rHiL4z+KPE1lr178PW1DSrm1s0tbw+ILG/a7VikQfy0FrCYlDAiTzHJbftH19/wAEjvE+kp+zJqumrqWmf2h/wsjxufsf2mPzz/xUmot/q87unPTpzQB9daB8XvCfivxfr3h/S/FHh3Ute8LNAmtaba6lDNeaQZk8yEXESsXhMiAsm8DcoyMitz+0rf8A5+If++xXw9+xH4mXQv26v2kfCMnj688YWGmr4Zv9Ok1a+tLq7jNxaXklwiyRJG0kabEADbiiqBkCuG/Yy+I/jC/+P998Mfiv8Q/iBqHxC8ZeH9Uv7DVfD/ibS9Q8K3drFcRK15p0dvCJ9NniWaEIlypB3PhpSM0AfopZeI9P1KN3t76zuFjkaJmjmVgrqcMpweoIII6g1N/aVv8A8/EP/fYr89/+CQ/wrsfCGleNph8VfHniDVNJ8f8Ai7TLvw3quv21xbxMNYnIuZbZYVkE7oUkLkgEylgoDAD7C+IWq3uheAdcvtNUtqNnp889qBYyX5Mqxsyf6PEyyTfMB+7RlZ/uggkGgD0b+0rf/n4h/wC+xR/aVv8A8/EP/fYr4x/Y1/aN+LHxZ+LFxpfji2nh0ePTZbhGf4P6/wCER5yvGF/0u/vJoW4Zv3QQO3UEBSD6T+3b8Ztc/Z1/Yv8Ail488M2sd34g8I+Gb3VNPSWLzY1mjiJWRk/iVPvle4QigD3H/hY/h7/hM/8AhG/7e0X/AISEWI1P+y/tsf237IZDELjyd2/yvMBTfjbuBGc8Vqf2lb/8/EP/AH2K/Hn4jfGC+/Zn/aL+MXi/wL8XNY+Mfi3w3+z5aajNrOr3NpqceizzaypaZY7aKOJYY4ZDd+RzhQOdpFemfE79qHxt+ybefFm18A/FPVPjxp2h/Bqfx7Feay9pqzaBqqXSwwSeZZxxg29xC004tznAs2KkKxoA/Tr+0rf/AJ+If++xR/aVv/z8Q/8AfYr8+/jl4x1D9n3/AIJy/Ejxt4R/aC8TfErXIdG0zWBrt1qmn3i6arXMXm3NuttCqwQSxtIdrbkVUOCMMa439qf9sPxN4s/an+K3hP4cfFRrPSdL1H4aaLb3GjS297Hos2q6zdQX+zIZDLJbmEEMWAwhx1BAP02/tK3/AOfiH/vsUf2lb/8APxD/AN9ivxV0b9vD46fCX4CeItUm+ImveMr7W/CmiXiXuoLp8LeGEm8YX2hS3cLyIkCOLKCNnluSY/PzKwVAVHrmp/F74+eFf2ePHFqfGOveHIZvHvgfSvCeuat4g0PxR4g0+LUdVtrbUYblrHMEkRVg0QmUMyzuuSFGAD9Sb3X7HTbOa4uL20t7e3QySyyTKqRqBksxJwABySafHq1rKistzbsrAEESAgj1r8sv2lNA8W+Mv2Uv25vhpq3xQ+JWu2Pwl0173Rr97y2XVL+G68NNdS6fdvHbqs9qZWc7Aitghd2FFfXX7L8Xhv4O/s4Nr7/FXXfHHhuHS4tZu9b8Q69b6lHpdslosj7ZYY0WOFYwXIOT1OaAPpX+0rf/AJ+If++xR/aVv/z8Q/8AfYr4v/bE/akTxB8KPgnefD/x9BoPg341eMrDRJ/HWmyQt9h02a0u7lXt5ZlaKOS4kt47dJHU7TMcDftrwP4G/tfa9Z3ljHb/ABg1bxh4L039pk+A18RapfW0wvtGGgtItrNcpGkbob0gBwAWYLhjnkA/Uz+0rf8A5+If++xR/aVv/wA/EP8A32K/Jn4kf8FA/HviDwVrP/CI+LNS1zw/4p/aI1XwPBr2javptjNp+jwaYtxDZ2V9eYtITLcIY1lkJJ3sqEu6V1B+Jvx4vvhn8GfDGr+PtY8H6h4s+Ntz4UTWrbU9H1zWbnw9/ZF/cpDdzWoezN4jx7N4XIMUUjKTkEA/T7+0rf8A5+If++xWf4o8f6D4H0SXUta1rSdH023IEt3e3kdvBHngZdyFGfc18N/HDXfiB/wT38MfD/xx4u+LGueNPhz4Z8b3Fh4suNUt4kni8Oamogs5rx0UCaawvDCTOqpuilfcpIyeJ1L4JeNP2m/gF8HfiZ4s8WeA5PHseq6x4403wZ8Sokl8PXen6kp+zafJECHjks7NrcRzhJTFJJMWVt9AH6P6J4v0nxNpFvqGm6pp2oWN2nmQXNtcpNDMv95XUkMPcGua+K/7S3w5+A76Svjj4geCfBja9ObXTBruuWunHUZhtBjh8518x/mX5VyfmHqK/NDxr+3l4l+J/gn9n3Qvh74Y1X4aeFfHH/CUQ6lZ+C/EWi6Qz32kXSWwtdO1G9VLRrWR2uLlWiQSTRxggBRJXW/tXeOfF2s/8EQ764+LeoeHz46kuLGGSeLU7G6+3xReIbdIZvMtmMDTNbrE03kHYshfAA4AB+mR1G3B/wBfD/32KP7St/8An4h/77Ffnz/wUf8A2kPHGn/tP/DH4e+D9Q8SWfhjxZ4f1bXZb/wr4k0bRL7Vbu2nt4o7eK91ImApGkryvFFmSTK/wI9Ydl8b/ih46vP2b/h38TviQnwtufG3hbW9X8ReIvDep6cs3iLULCaCK1sre+xLaxtJBM11KIASxjZUwitQB+jlz4j0+zuLeKa+s4pbpzHAjzKrTMFLEKCfmIUE4HYE1N/aVv8A8/EP/fYr85f25/g3Z6p+0T+yfq118a/iPpuk32vXmjprNn4hs7W3aQeH9RaO7SXyDELm4I2M4+V1YhVBOa1fjb491C//AGmtU+GupfHzxL8K/CPgX4X2fijSNci1LT4r7xVdPPdRXF7c3NxCyXEVstvBvijVVY3WW4KgAH6C/wBpW/8Az8Q/99isvxj8SvDnw70NtU8QeINF0LTVmitzd6hfRWsAllkWOJN7sF3PIyoozlmYAZJAr83fhD8TfjB+2p8U/hDoerfErxd8LV8UfAaDxprdt4ctbe1mutVe/ECXC+fFIYFIcO0agErtTKjOfU/Heg61eftp/sr+B/iLrdv4nfQ/DGveJJ75LMWdr4h8S2ENhbxXPkbiqMkN3e3CR5OxjuH3AQAfZviX4oeGfBmraLp+seItD0m+8SXZ0/Sba8v4oJtUuRG0pggRmBlkEaO+xAW2oxxgE1Pq/jvQ9Adlv9Y0qxZYWuSLi7jjIiUqrSfMR8oZlBboCwHcV5t8Qfgt4b+KXivwbrmuaf8AbdT+H+qvregzec8f2K7e2mtWkwpAfMM8q7WyPmBxkAj8s/8Agr9rPjrxd+2p4t0fS/8AheC2EPhbQvDsEGlaR4bm06SLV/ENpGyRPcN55inaxOwviQ3Ee07IM7gD9iNf+LvhPwp4w0Lw9qnijw7puv8Aihp00bTLrUoYbzV2gTzJhbxMweYxp8zhAdq8nA5rWPiPTxqAs/t1n9qMfnCHzl8wx5279uc7c8Z6Zr4R+OOvXXw1/bu/Zaub74jeIZH8SS6ppeu6Prt1p0cS+V4fup1uHhjjAt7mSZUMhhdY2I2qNuBXN/E/4GWb/wDBYiKbUvjJ8TPCp8QfDOTUrKKDxHa2UbGPWVEljb+ZAc26hkcxAlgXB3YIoA/Rj+0rf/n4h/77FH9pW/8Az8Q/99ivyp/aB/aj+PPiv9rv4xaT4HvNW0u++FuvaXp3hzTJPFXh/SPD9zayW1pcPNqdtesLy6W6M08ayQlVTYojPmK9efftJftOfHDR/iV8V9S0v4z+K9F03w+/xBv7LSLe2s2t7WLw/PpJs7dWeJnw0l/KJWJJeJUjG3liAfsv/aVv/wA/EP8A32K4/Qf2lvhz4q+K+qeA9L+IHgnUvHOhxGfUvDtrrlrNq2nxjZl5rVXMsa/vI+WUD519RnzyX4s+Nh8W7DQ4fhXq954VukhaXxbHr2mx2kG+IO5+yNL9qIVzswEJJGRkc141498TaNb/APBZL4axf2lpMdz/AMKp8RwSJ9piWTzTq2j7UYZzvPZTycUAfXjfF3wmvxGXwefFHh0eLm046wuhnUof7SayEgiN0Lfd5nkiQhPM27dxAznitz+0rf8A5+If++xXw/p/iL/hCv8AgsPHo/8Awnl9qum+KPhtqGpS6RqN9aTR6XeR6rZQxwWuEWWNdrufJLtksTjNcnpfxn8XfDD/AIKHWtj8RvGnizUtB8b+L7nRPBEfhfxDplx4cRDaSNFp2paYIxfQ3EflTM1wGdC6oWZAdlAH6DW/iPT7u6uIYr6zkmtSqzxpOrNCWAYBhnK5UgjPUHNZ9n8T/DWoeNr7wzb+ItDn8SaXaQ395pUd/E19aW0zOsU0kIbekbtHIFdgFYowBODX5/8A7GXwOs/Bv/BRD9oS3uvjJ8TrrVNF8TaFdx6PqfiS1b/hIIZdAs9slzD5CvOgZZIlKbQBAF5Kkn6+0n4LeG9C+M+ufEG10/y/FviTSrPRNRvfOc/aLS0knkt49hOwbWuJjuABO7BJAGAD0Lwx8TfDfjebVI9F8QaHq8mh3r6ZqS2V9FcNp92gVnt5gjHy5VVlJRsMAwJHIrW/tK3/AOfiH/vsV8bxWy+CP+CwBt9DHlwePvhVLqviu3j/ANW11YanBb6dduOgleK5u4dx5ZIFHSPj1j4PalDc/Hv4qW6/ET/hMJbW50zzPCxWFf8AhBt1mCIsoN5+0/6/MnPzYHGKAPcNS/5B8/8A1zb+VeU+OPgj4L+J2v6Vq3iXwd4V8RapoL+bpl7qmkW95cac4O4NDJIjNGcjOVI55r1bUv8AkHz/APXNv5VyNAHNa58GPBvif4gaf4s1Lwj4X1HxVpC7LDWrrSbebUbJfSK4ZDIg5P3WHWrN98MfDWqWmoW914d0G4t9Xvo9Tv4pdPidL27j8sx3EoK4klXyYtrtlh5SYI2jG5RQByKfADwHH8UH8cL4H8HL42kGH8QjRbb+1W+XbzdbPN+6APvdOKm8a/BHwX8SvEuj614j8H+FfEGs+HZVn0q/1PSLe7utLkVg4eCWRC8TBgGBQgggHrXUUUAGea89tP2R/hPp/wARP+Evt/hf8OYPFovDqI1uPw1ZLqX2oksZ/tAj8zzSSSX3biSTmvQqKAOY1/4JeC/FfxA0vxbqng/wrqXivRBt07WrvSbebUdPHPENwyGSPqfusOp9aiX4C+BV+JUnjQeCfB48YzIY5NeGi239qOpXaVNzs80jbxjd04rrKKAOZ0z4K+DdFFn9j8I+F7P+zzata+RpMEf2Y2qstqUwg2+SruI8Y8sOwXGTWP4e/ZT+FvhH4inxhpPw0+H2l+LmmkuTrlp4cs4NSMsgYSSfaFjEu5wzbm3Zbcc5ya76igDz3wH+yL8J/hZ4tj1/wv8AC74c+G9eiEipqWleGbKzvEEilZAJY4lcblJDc8gkHOa1fht8AfAfwZvtQuvB/gfwf4TutWbdfTaLottp8l6c5zK0KKX5JPzZ5rraKAOYsfgl4L0v4m3Hja18H+FbbxneQm3uNfi0i3TVJ4yACj3ITzWUhV4LEcD0rp6KKACmzwR3cEkUsaSxSqUdHUMrqRggg8EEcEHrTqKAOV8D/AvwP8MYfL8NeC/CXh2PyJLXZpej21mphkfzJI8Roo2M/wAzL0J5IJqb4dfBvwf8HtJu7Dwj4T8MeFbG/lNxdW2j6VBYQ3MhGC7pEihmI4yQTXSUUAcj4L+AHgL4b6TrGn+HfA/g3w/Y+IizarbaboltaQ6mWBDeekaBZchmB3g5BI703wz+zv8AD7wVpkNlo3gPwXo9nbm3aK3sdDtbeKM28rTQEKiAAxSu8iYHyOzMuCSa7CigDnbD4QeEdLt5obXwr4bt4bmxbTJo4tLgRZbRpHla3YBcNEZJZHMZ+UtI5xliTR8I/s8fD/4f+Fv7D0HwH4L0PRDeRaidP0/Q7W1tTdROskU/lIgTzUdVZXxuVlBBBArsKKAM+z8JaTp+pareW+l6bBea6UbU547VFk1EonloZmAzJtj+Qb84XgccVieBPgP4F+Fnh/VNJ8L+CvCPhvSdcdpNRstK0a2s7bUGZdjNNHGirIWX5SWByOOldXRQBzur/B7wjr/w4Xwbf+FPDN94PWBLZdCuNLgl0xYkwUjFsymLauBhduBgYrg/hl+xL4F+HmifEfRrrSdL8SeGviV4lbxJeaHqml202m2bG1tbZbaOAoYzEi2kbKGUkEnsBXr1FAHLzfA/wTc+CdQ8MyeDfCcnhvVmD32kto9ubG9YKigywbPLc7Y0GWU8Io7DDvDvwW8G+D9C0XS9I8I+F9K0zw5cm90mzs9Jt7e30ucqyGaBEQLFJtd13oAcOwzgmumooA8o/ao/ZXh/a20Gz8M+IPFGsWPgC4Yf8JF4asra28nxVEskciW9xO6NNHDmPDpCyeYrFScV1fxO+AvgT42WNla+M/BPg/xda6aS1nDrei22oR2hIAPlrMjBOAB8uOg9K6yigDmfGHwV8GfEPwLD4X8QeEPCuueGbcIIdI1HSLe6sIdnCbYHQxrt7YXjtWT4y/ZX+F/xF0HR9K8QfDX4f69pfh2NotJs9R8O2d1b6WjY3LBHJGViU7VyEABwPSu8ooA4vWf2bvh14j+G9j4N1D4f+B9Q8H6WQ1loVzoNrNptmQSQYrdozEhBJPyqOp9at+LfgZ4I8feBLbwtr3gzwlrfhiy2fZtHv9HtrnT7fYMJsgdDGu0cDCjHaupooA5zxX8HfCHjzwHH4V13wn4Z1rwvCkccej3+lQXOnxrHxGBA6GMBf4QF47Yqh4j/AGdfh74x0PQdL1jwF4J1bTfC2z+xbS90K1uINH2ABPsyOhWHaAANgGAB6V2VFAFH/hFtL/4SZda/s3T/AO2ltPsAv/syfahbb9/kCXG7y9/zbM7d3OM1x/x9/Z20f9oKy8OPfXmpaNrfg3WYNe0HWtNdY73SrqPKtsLKytHLC8kMkbAq8crAjOCO+ooAGOWPGPb0rH1T4faBrmqtf32h6PeXzNbObmeyikmLW0hltzvZScxSMzxnPyMxZcEk1sUUAee/ED9kj4T/ABZ8Wya/4q+F/wAOfE2vTKiSalq3hqyvryQIAEBlljZyFAAAJ4AGK2/iV8EvBfxnjsE8Y+D/AAr4tXSpfPshrWkW+oCzk4+eLzkbY3A5XB4FdPRQBynjL4DeBfiL4v0zxB4h8E+ENe1/Rcf2fqepaNbXd5YYOR5U0iF48HkbSMHmpdQ+Cvg3Vnu2uvCPhe6bUBdLdGXSoHNyLooboPlPm84xRGTOfMMabs7RjpqKAERRGiqoCqowABwBXn1/+yP8J9V+IZ8XXXwv+HNz4sa8XUDrcvhqyfUjcqQVn+0GPzPMBAIfduBA5r0KigDz2b9kj4UXPxE/4TCT4X/DqTxd9sGo/wBuN4asjqX2oHcJ/tHl+Z5obnfu3Z5zWpoXwA8BeFviLe+MNL8D+DtN8XaluN3rlrottDqV1u+95lwqCV93fLHPeuuooA5jXvgl4L8VfEDS/FuqeD/CupeK9EG3TtautJt5tRsBzxDcMhkj6n7rDqfWunoooA4P4Y/s+aT8NPih428afbNS1rxR48uYmvb+/dWe0s4FK2unwBVUR20O+RgoGWeWR2LM2ah+Cv7PsPwj+JfxA8YXWuah4n8QfEK9gnu5762t4EsbW2R47SzhSFE/dxI7DfIWkcsSzdh6FRQB12pf8g+f/rm38q5EDI+lddqX/IPn/wCubfyr41+O/jDxNoH/AAUo+AunX1vbf8Irr0evW2ly2HiG+t5/Pj03z5vt1iE+zXKfIBESxaMlmxk0AfTlFfIetfFb9ox/+Cl2teDdFPwol8G23gu31m2sb+/1CPED6pPD9pby4CfthSPaUDGIBVwck1yHxl/4LT6X8M/2jfFPhmzsfBt5oPgXxXaeENVsZ9anTxXqc8rW6T3NhZJA0TwW7XIyJJVaQQzFdu1dwB910V+fPxB/4LEfEbwb478U28Hwn8L3Xhvw1da65v5PEcsdxLYaNrltpV3N5QhI8yRryDyU3Y3JKXKrtz9G/so/E3X/ABv+03+01o2ratd6hpXg3xrpunaJbS42abbyaBp1y8ceBna00sjnJPLntxQB7zg4z26Zor5j0vxh4mtP+CtR0HXre3TTdQ+G97f6FJp3iC9aA2sGp2sbfa9PkQW4ui85xNGWIRducGofh1+3h4g8fftweIPhbeWPw/8ACFroWq3Gn2+ma9qt5beKfEFvHCJF1GwgMAtri2kY8COV2VVYsVYFQAfUVFfIf7JvxX/aL8bftgfGbQ/FTfCm48JeEfEum2VxDa3+oNPpcEuj2txssQ0CiTcZd7ecww7uB8oWvr4RsdvyttY4Bx1oAbRXx34b/wCCpMb/ALcHh/4U3998I9c0/wAV6pqmk2z+FPE9xqWraHLZWs91uvomgSHa0dvIrCKQmOTCndyRxOmftm/Ez45/Hv8AZZ8dXFjo/gv4N/ETVNd1DTray1u5n1bVbGPRL2aBtShESQbWWNZ1jV5DG20HLAkAH31RXwb4L/a0+Kv7QX7Uv7Kfiq607R/B3wr+KCeI9T0nTrDXLm41LUrUaJNPaHU4vLS3zt2TKiNJ5bnGSRuqn/wSe+LPi74yfAnR/F114h/aH8XfETUPCt5e+V4xtprfwPqN7uYRrbzi3VDlggUo7EKXIBxQB9/UV8l/Db/gqTY/ErRfh/q1r4fSHTL74b6p8RvHeZma48Iw2JFubNUA/eTtepdwgMV4s5D1rz/9nj/gtEfjPqF5DNpHgO7bUPAmq+ONJh8Oa/calNpH2KBJ/wCz9W3QRpFM8cgw8LOm6OVedoLAH3pRXyN8CP24/i/8XPFvhjw7qfw9+H/hnXviZ8O/+FgeD0fxDdXkFuqS2aS22pMluCjFbyN1aDeBypyRuOR+xH8b/jt8QP8Agn7rXjX4g33gmb/imNeu9M1bSbq6fWGvIJ7tY2lSSFIVRBEQpQk/JHkcmgD7QoI215L+yL408TfEP9hD4W+IpLu21jxlrvgHSNSe61V2WG9v5tOhkMk7RqWCvKxLlFzgnA7V5D+xn8cPEXhL9iP4weKrjwxrHinxb4F8XeLkl0Kw1671qTWLyzuHJgsprpBKkUjjbFFs/dqQAD0IB9cUV8m/CD9sf4h/tKfspeOvFHg/UvgVqPijRYN9tBpetalLFpOIXkmiv45bZLi3uowPkRowGIOQoBrm/hh+3P8AEb9nv/gl5pnxq+NFv4L1tf8AhFtCutKfR9RuUu9Yu74Qwob95oVig3SzxM7xB1QeacEKoIB9rUV8HaD/AMFitW1T4XfEa5sPDXgXx14q8CX/AIbgtT4S8QTy6DrkesagtkkaXVxBG8NxC+/erIVwY2zhiB0fxC/4Kla5+zr4F+LcfxM8KeEtN8afDXxDoPh+2j0vXZn0PUH1uKOSzkluZoFkgSLdIZ28tsLCSgO4LQB9nUV8K6b/AMFgtSv/ANm/4jeJtN8MeD/Gnij4d+JvDugqPDetzP4f8RJrF5bW8b213PCjxyR+dIrpIhCvGMkq3Hp/xS/ax+LX7P8A+y58bvF/xC+HvhrRdc+HWl/bfDtxo+rvqGkeIHlh/dJmRI5kaG4ZY5dyBWHzISCQAD6bIxRXlfw9/Z+1fwZ+yZN4Dk8Z69eeKtS0W7hvvFdzcPLetql3G5mvU+YeWFnkZ440KrGqoq7Qorl/ip8Wtc/Ym/Zq+F/huGOb4mfETWrrR/AOlTajevaR63qj25El7dzt5rxx7LeeeQ/vHONo3MwNAHvgGaAMnHevnH9rTw94y8X/APBPj4jXfjq4Xwr4w8N6Bqus2lz4A8UalYxRzW1pNJbyLOvkTld2C0T5QlRncMY5L9qPx34ysv8AgjhJ4o0lrbVLy3+GkOteIJ7zXr3SdQntY9J+0XD2t5bI8qXjso2u2F+ZiT6gH13RXgnxl/af1j4S+BPg7ofg/wAO2viPx18WZYdK0K11fU5LextBHp7Xlzc3lyEeVkihiY4RGkkdlHGSR5B+3j+2Fr37Hvin9m/xZ8SrxdEt21rXovEmleE7y4urHWnGkXAs7dBIsbS75zBsEyhUkYEsAu+gD7aAzRXifjn4c/Ez9p/9jaTRNa1Nfg38RPEK21zLL4ev5bxtACXkU5t/PVomkkaBDDIyFV3SPt3KBn24jzHO1fcAUANo60V8c/8ABW742/ErwJoXw78J+C/Cfiy40nx5410TRNS1zQPE1no95PHPPL5umQu8izwSzLEo+0LtVVcjep5AB9jdKK+b/gz8atU+F/jKy+GFz4T1zSP7M+HF543ePxD4ofxBq1tNHqDQC0lvC8vnKVIYP5jFQQvavMtF/wCCl3xU+KPhjwbP4H+Gngm8vfEHwYsvi7qUmseIbi0tNOEryq9gnlwySSs3l4jfCgHcXwAAwB9u0V8t6d+3l4u+O+s/DvQvhD4N8O3uueMvh5Y/EvUp/FerTWdhomnXhVLa3zbxSSTXEkhkHCqiLEWJO4LWT+0T8WP2i9B/br+Ffhbwevwqh8P+JPDut3x0/U9R1BVu5raLT/MNy0duSPKkncQ+XwyuxcKcCgD66AyPp1or5d/a58ZeMPCn7T/7NKX9rpp8M634wTS5X0vxDf2V0mpPpd/K/m26p5F3ZBYDtSVg29g2Bjlvx5/bk8feGPG/xbh+HfgHw14o0D4C6dBf+LptX1yWwvdRkksjqD2mnIkLoZI7TY++dlRnkVB0LAA+pKAM18Q/Fz/gqj418NwfFLxT4T+HfhrWPhn8JdL8P+IdT1PUtcmtNS1Kx1Owt7wxW1ukLr9oijmLZkdYyAq53MSvq/xM8Q6p8Yf+ChHhP4cw6pqGl+FPAHhpfiFrEVncNbya5eS3j2mnW0jKQxt4jFczvH0kcQhsqpBAPoeivhP9pb/gtNpvwL+P/jjw1Z2Pgu+0n4Y6pZaRrlje63PB4m1uadIJZjpdokDxyLBHcIT5siGVkkVdu0MfQPib/wAFFdY+HWpfFLwt/wAInptz8RPCvjLQvDHhLSTeSLD4nt9a8k2F4zbdyKAL7zQoIX7DJg0AfVlFfCfxK/4LUaX4J/aR17wxZ2Xgy98P+EvGtv4F1GyfWp18WX9w80EE97Z2SwNE1tBLPgh5Q7pDKwwAobp9Z/4KNfELQfiHrV1cfDrwunwz8N/Fu3+FV5qf9vS/2xeSXN1BbRXkFsITGEjkuIhIskgLfPs4UFgD7FoIIH16e9fInwV+Kv7RviL9vz4seF9UPwnn8HeGP7Ake1F/qPm2Fpcpcuz2o+zgPcSIgLiVggZVCnGTXW6tr+qfAj/gpT4b0iHVNQvvCPx50PUp5dMubh5o9H1rSYoHFxbhifKiuLN2SSNcL5lvG4ALuSAfR1OEbMhba21epxwKao3HHrXyn+zpr2k/tMf8FF/jF4u+163qFh8KbXR/C3h+3vJLuwi0q9khvJNTdbGQpv8ANEluq3EkbLIqfumIQmgD6sooooA67Uv+QfP/ANc2/lXyz8cf2EYvjl8ffDfxDuPir8WPD2peD5ZZtDsNHu9Nj0/TGmtxb3BRJrKSRvOjBDb5G+8Su3jH1NqX/IPn/wCubfyrkaAPJfi/+yLpvxT+NGi/ELT/ABf468C+LdJ006LLeeHL23iXVdPM4uPstzFcQTRuglBZWVVdd7gMAxqo/wCxZpml/GrWPGnhvxx8SvBa+JtUi1vX9B0PV4odH1y9RI4zPLFJDJJG0kcMSyeRJEJAg3AnJPstfN/ir4p+KtO/4Ki+A/COp2up6b4Y1nwjrt1pD2HidZLDVmtmsDLJfac1oGSaNpwsTpcsNu8lckAAB4l/4Jb/AA28VRa8tzeeK1HiK21u1uvLvol2pq2r22rXWz90cEXFpEEznahYHcSGG9F+w3Dov7Qvir4h+H/if8UvC83jfV7PW9d0PTbvTv7J1Ge2tYLVQyTWUkyo8NtGrhJlJ+YgqTkfP/x2/aV+I3xV/wCCjMfwxtPC/wC0V4X8J+G/Cy6vs8HzaFaT6tcvqb2y6hNLNdMzaeI4sLGNshLOWi+7X3kRg+vv60AeD6l+wlDqf7Wlr8Ym+KnxXj16xt5dOt9MS700aVFp0txHcSWAj+xeb5DSRRkkymTC4Egq9rP7EWk+MfjnovjfxN42+IniuPwtrj+JPD/h7U9Qtm0fQr9o5I1lgSO3SchEmkVElmdF3dCQMZvhvxx4g+Nv/BQXxNoVrq19pfgr4KaVYrdWNrJ5Y8Q61qkMko+0Hq0FtaBCsfRpbjcc+WleV6D/AMFoPBfiD9ojT/CsNr4Xbwxq3jd/h9bX6eM7KTxAdSWd7YTvooHnrYtcoYhMZN+CshiEZDUAe8R/sjabpP7S2pfE7Q/F3jjw3feIntZfEOiWF7bnRfEUltD5EMlxDLBI6uIgiFoJIiwjTdnFbXhj9nnS/Cn7R3ij4nQ6x4quNY8WaXZ6Tc6bc6q8uj2sdsSUkt7U/LFK2fnYHnngEtnybwV/wUUXxpZ+C9Lj8GzQ+PPE3xL1D4b3/h06kGbRZNPM8t5etL5fzwpZxRXCjYu8XUK5G7dXEfCn/gs74M+K/wC0D4Z8MWdr4Z/4Rnxp4qufBui39v4zsrrX2vYWnRZ7nRkHn29pK9vIscpdm+aNnjRXBoA7b4Uf8EsPAnwg8eeBdY0/xT8Sr3Tfhjqt9qvhXw7fa1HLouiteQ3UM8aQLCrSIVu5iGld5FOAHC7lMnwr/wCCWPw9+EvxE8Ea/Z658QNSg+Gc18fCei6nrQuNJ8P215DNDNZwweWMwlZjjzGeRQiKH2LsrlvgT/wU78SfGLWvhvJffCGbw34b+LWoazoXhnU7jxNFPNc6lp0V3KRLbpDmK1mWzmCTbi4K8xAFS1/9hT9pD48fGn4qfEzT/HXgjwPY+HPDHjq/0Jryx8Wvc3GjJFZ2siWsUH9nxC6UPLkzPJGx81vl+QBgDc+Dn/BLrwD8FPiX4D8Taf4h+ImpN8L47608I6bqmuC507w9ZXdvJbyWUEXlj90Ek+VnZpR5camQogSui/ZM/Yfh/Y90/S9J0H4nfFHXPCeh2T2OneG9butOm02yRm3AqYrOKcshJ2lpT945B4x7J4iuNQs/D99NpNnbahqkdvI9na3FybWG5mCnZG8oRzGrNgFwjbQc7TjFfMn/AATu/aM+OHx5Hi2T4heDfBtnouk+MvEWjLqen+KWubq0NnfSQxWa2v2GJZI027PtDSqzgbygJ2gA7/4K/sD/AA5+BHiv4sato+n3l03xlvJLnX7TUJxPapHJ5zSWtum0eVbvJc3UrR5OZLiQ55AFX4ZfsKab8MvAmreEV+InxX13wbfeH7jwxZaDrGtw3VnoljLH5W23PkLKzRxgJG9xJMyLxnk1w/wf/wCCmUPjz9pm7+F+s6L4Jt9afQdT16xbwz4+tPEzRCwaITW1/HDGjWc5Eyso/eI21xuyuKb+zR/wUU8ZfHD4d+FPHmufA3xF4X+HnjLwfdeK7LV7XWYtXntRb26TmG6t44l8nz1L/Z28xmkKYZIiQKAPXvBn7J3hjwJ8Rfh/4osZtYbUvhv4Nk8DaSstwrRPYObQlpV2AtNmyh+YFRy/y8jGD8I/2GdD+Cvh7xX4d0nxf4/n8D+KLXULWPwte39vPpmhC+keWdrM+QLhDull2rJNIiiQgLgDHhPwh/4LHXHjLWL7UfFHgHw34e8A6f8ADGf4rz6zpXjmLXry00tSBHBPaw2yrHduSB5ZmK5DBXcowHRfs1f8FUbj9p/xtqHg3w94V8A3vj248Nr4r0DTNP8AiTaatZXdqLiGGa3v7q0gkNhdxefGxj8qZGyQkjbWIAPUPgL+xVc/s9/Dd/Cel/GL4vanott4fj8O6PFqd1pUjeHYYo1jhmtWjsEPnRoiqpm81cfeVjzVT9n39gm3/Zy8J+NtH0n4qfFzUofHN1d6ncTahf6f9o07ULuUy3F9bPDZx7Jnc5+bfGOyCue/4JZ/tC/GD9pX9mTwp4p+J3hvwrZR6xpRuoNa03XzdXGpy/aJEIksxaQpbgKvG2WTO0cckj3D45+IvFXhH4U61qXgvRdJ8QeI7O3MtrZanqraZbOByzNOsMxBVcsF8s7iAuVzkAHH/Ar9jbw/8FPEXjLXrrXPFnjvxV8QLW20/Xtc8TXUM13fWlssqwW+23hhhWNBPN92MMfMO5jxjm/B3/BOjwn4b/Z51j4T6l4q+Iniz4e31nbWGmaTrOrRO3hiK2kElsLC5hhjuEaJ1iZHlkkdTBHg8HPP/sIftL/F74p/sM+HfiF8RPCPg+K+vfBOn69ZX1r4sVf+EgmktRLJJcq9pDDpynKscPKqbmGcLk8n4U/4LDaHc/C340a1q+g+Hr3Uvgxp+nandxeDvGdp4k0rVIb93it9l+qRJCyyxsswlRREo35ZeaAPYpP2KLPxD8Mrzwv4s+IvxR8eWt1q2l6ut1r+qW0lxayaddx3cCReTbRRqjSRJ5hKF3A5bIBDviT+wb4F+K+t/EjUdWfxAt98TLvRtSvLi01A202k3mkIq2F1YyIoeGaNkV9xLAsOm0lT8j/tI/8ABSz46+NvhX470XwH4b8E+A/H3hHxt4R8M2Oq6Z4ph8Wabqs+rTo32bJs4kRTGyo5z5iFwQFBVz658AP+ChWrfGzxB8UfFGlrpt14Z0XwL4T1/TdE1fUrfRoNHvbx9Uj1GG6vZEPleVLaBH8zdta3YKuWIIB65rf7FFh46+DF14K8Y+PviV46tbvW9M11tR1vUrZr2KXT7uC7gjj8m3jiSIy28e9VjBYFstk5HffHj4PaN+0Z8GfFngXxIkz6H4y0u50m+8ltsiRzIULoezrkMp7MoNfJ+h/8Fh28UeBdQbRPAeh+KvGOm+ObPwK1j4c8b22qaJdT3mnS31vdQ6okIVoQsTLKDEHjKv8AKxAVqPhb/gt3pF78Dr7xh4i8AzeD7i8Xw1J4asNU8SWsMWrR68kzWclzdOqw2SKLaeSRnL7YlVuWbywAfV37NejeOPDPwU0LSfiNeaTqni7R4jp93qems3k6ukLGOK8KMAYpJo1SR4xuCOzAMwANR/tG/s4+Hv2oPAFvoPiCXWLFtN1K31rStT0i8NnqWjX9uxaG6tpgDskXLDkMrK7KysrEVxf7Dn7b+k/toaJ4wW1h0K21zwDrCaNrCaF4hg8Q6TK8lvHcwzWt/CqrPG8coByiOjo6soI59D+M/wAY7f4JeGrfVLnw5448TJcXAthbeFtAn1q7jJVm3vFCCyx/LjeeMkDvQBxHxA/Y6l+Jf7ON58N9U+K3xYktdW+0R6prgvtPOr6pbTxvFLayO1mYVhKORiKFGGAQwOc4Pir/AIJ8WvjH9kNfgtefFb4uf8Iu1lLpF1eJeaYupX2mPbfZv7Pkk+w7PIEXAKRrLnkyGumm/bF0+D4aQeKP+Fc/G5oZ9RbTRpq+Ab9tWRljD+c1rt8xYDnaJSNpYFeoovf2x9Psvh3Y+JD8OfjhJDfXslkunxeAL99UgKKrebLbBfMSFt2FkI2sQwHQ0AZfiL9g3RfGPwc8H+F9Y8b/ABHv9Y+H2ojVPDfjAajbW/iHR5xE8I8uWG3SBk8h3iKPCyujYcMeaveKv2IfCnxMsfAcPjbUvEfj5vATamUk8QTwXP8AbY1Czms7lL1VhVJEMM7hVRYwuF4wMV3/AMJvidD8XvBkWt2+h+LPD0c0rxCy8R6NNpN+u043NBKA4U9mPB7VjftR+AvGHxR/Z78WeH/h/wCKv+EH8aarZeTpGvYJ/syfep8zhWP3Qw4B+9QBc+APwWs/2ePhPpPg3TdY8Ra3pOgo1vp8ut3gvLy3ttxMVuZtqtIkS4RDJufYqhmYjNeb/wDBRL4IePv2lvgTbeBfh/qDeG77W9YsZr3xNFrk2m3Hhy3trmK4aWJIlL3LOsbRiHcindlmxU/7Svxf8SfDf9pP9nHw3pOo/Z9J8deJdU0zXYmhjkN9DBod5dRruZSyYmhjfKFScYPBIrlP+CsHijx58Lv2YZvGvgH4jeIPAeqaFqWm2bxWGn6deQail7qdnaMZRd20xBjSVynllPmPzbgAKAPp49e59z3rivjT8BdE+PP/AAiP9tyahH/whPiex8W6f9klWPdeWZcxCTKtujO87lGCeORWB8bPgv8AEDXf2fbPwn4S+JeqWHjCw1LTZJvFV/DDHdX9tBfwy3aSLbwpErT2yyw/u4lXLjgcmua/4KP+JfE3wn/Zx1P4qeD9WvbDVPhEX8WXGmCXFl4j06BSb6wuU6NvtvNMT9Y5kjYcZBANP9oz9iHw3+0n45sfEV94h8deF9Uh0W58M30vhrV/7POs6VcSJLLZXB2M3lmRAweIxyrlgHAYgx/DH9grwR8JrDT7XSZtfMOm/Di3+F0Imukf/iUwPKyMcRj/AEjMrZf7uAPlr2DRNZt/EeiWWo2jM1rqFvHdQFhgmORQ65/Aivm39v8A+JSeIfiP8G/gvpPizVtD134keLIJdZtND1CXT9Wl8PW9teTXUkdzHh4YzLBCjPG6yEFlUjJNAGzef8E4vCdlpXw9Xwz4s+IvgTXPhv4Vg8E2Gu+H9Vhh1C/0iFYwlrdiWCSGYBow4YxBkdmKFNxrq/jv+yLpfx01DwZqw8WeOfCHirwCtxFpHiLw/qEMWorFcRJFcRS+fDNDMkojjLB4z8yKwwRXqdhZrp1jBbxtI0dvGsSmSRpHIUADczEszccsSSTySTUtAHgv7RX7B0f7SHjPwbrd/wDFj4teH7jwHcQ6hpEOi3emRQw38cE1v9uYTWMpaZ4p5VYE+X82QikCo/jH/wAE6fCHxp8Y6/q934m+ImiR+ONNttI8Z6dousrZ2XjW3gjMSC9TyiwYxM0TPbtC7xnYSVAA9+ooA8S+IP7AfgL4i+C/i54fuP7ZsdK+M9jYadrcNjcRwizgsrSO0gW0HlkRYiiQHcH56Y6VY+LHwB15/wBqrwH8WPBlxpy6lp1lL4T8VaffSNHFq2hTSrOHjZVbF1a3CiWMEbXWWZCV3Kw9looA8Z1z9ijS5vjVrHjfw945+JXgW58U3VvfeI9L8PavFb6b4guII0iSaaOSGRo5DFFHG727xF1jUMTgGrnjz9inwP8AEb9rnwf8atSg1L/hMvBOnzafZJFchLG4DiYRyzw7T5ksAubkRNuGz7RJwc8etUUAeM2n7FWl+HfjNq3i/wAN+OfiV4Rt/Emrrr2ueHNH1eKPRdYvgsavPJFJC8sZlWJBIsEsayYywJJJNf8A2F/BfiPwrrGj3Fxry2mt/EO3+JlwUukDjVIbuC6RFPl8W/mW8YKYLbSw3DOR7NRQB5P4j/ZH07Uv2k2+KOj+LvHXhPXNQt7Kz1yx0i9txpniSGzeRrdLuGaCU5USyJvhaJyjYLcDFWw+A2u+Lv20pvib4pm05NI8G6NL4f8AA+nWsrSOgvPJk1DULklQFmkMMUEca5CRxOxYmUhfYqKACvDvDPwk8aeAP2/PGfjS103R9W8C/Ezw/o9lfXp1LyL/AEG70xb4KPs5jIuIpxdIAVdShViQRivcaKACiiigDrtS/wCQfP8A9c2/lXI112pf8g+f/rm38q5GgAr59+Jf7E3iX4hftb+HfixD8ZvFGjy+E4bqx0rQ4PD+lS2dtZ3Ztjd25kkhMz+abWP52YumW2kV9BUUAcDD+z5psH7VN58WFv77+1rzwnF4Rawwn2VbeO8kuxKDjf5haQr1xgDjNd9RXgev/wDBRXwT4d+KN1oMuj+NJvD+meJIPB2peM4dMRvDema1M8ccdjLP5gl3ebNFE0iRNEkkio0itkAAv2fwU8TfDL9uy/8AH/huG1v/AAf8TtGttO8YW8lwIZ9Jv9OSX7DqEIP+tWSKRreWMYYFYHGQHxlfC79gG1+Cvxbuta8MeOdd07wne67deI5PCcmj6XcW6XdzK004jvZLY3kcDzO0nlLL8pYhWVeBon/goB4KHgu61X7D4l+3WfxEHwvfRfskf9pHWjdLAqiPzNpiMbC5D7v+PfL4yNtVrL/gol4Kv/i1a+HY9G8af2Df+J38E2njRtMQeG7rXEdozYJP5nmlvOR4RL5PkmVTGJC3FAF7wj+wl4T8GftxeIPjva32rN4g8QaZ9iOlOyf2bZ3LJbQz38S43C4mgs7WJ2JwVh9WNZfwH/YEtf2cPiTHf+F/HGu2/gu31S61e28JT6Ppc0NrLcyyTSRpfNbfbRAJZXdY/N+XhQ20YrN8B/8ABULwP8QfiPpOg2vhf4j2dhrXivUPA1p4hvNGSHR5dcs2uQ9isvm72ZxaylJFjMROFLq+VFH9mH9vnxh8d/2hviB4N1T4I/Ebw7pvhXxDBo8WqTrpfk6XG+nW90Tf7L923s0x2/Z0kGx4s4bcFAOm8A/8E/8Aw78PvD3wV02317XLiP4I67qWvaY8qRbtRlvYL6F0nwvCqL+QrswcxpnPOdj4d/sn3nwm/aD8VeMfD/xA8R2fhzxxqz6/rXhCaxsrjT59Qe2jt3niuGi+0whhDE5RZNpZTwAxFeuajdNY6dcTx2811JBE8iwQ7fMnKgkIu4hdzYwMkDJGSBzXzT+xp+3l4t/aZ+J/jrQda+DPj/wpY+G/Ft5oEWq3S6b9j0+OC1t5ljvTHfSSfaS0pB8mN48PH833iAD174afA66+Hfxl+IXi6bxv4y8QW/jyezng0LU7tZdM8Mi3h8opYxhQY1lPzvknLAVx/wAOf2MH+F/jXx02m/EDxS3gP4gXuqarf+D5bazNva3mogm6mt7wRi7jBkZ5AnmFVZzjjAFjwz+2lpup/HzTPh7rngf4jeCdT8SJfP4evtf0yCGw8Q/Y18y4WB455HVlj/eBZ0iLICVBwa5H9nz/AIKkeBv2i7vwjJp/hX4l6D4f8dWd7daH4h1vQltdLvnsommuoA6yu6tHGkjb2QRSeWwjkcjFAGH+zh/wSf0X9nfxt4P1hfiF4q8QR+AfC1/4N0KwuNL0uxtrTT7qOGM7/stvE006iBMzSMzOeTjnPojfswXfwk/4J23Xwb8D3LazfaH4Bn8J6HPqtybM3kgsnt4WmlhAMW5iuWjA29RXH/CD/gqb4S+MHxJ8P6JF4F+J/h3RfFXhe88baR4p13TrOy0a+0S1EZkvw32ozrGRNCQrwq+Jo2Kqp3DZ+Gf/AAUX8P8AxV1G3s9O8A/FK3vte0GfxP4RtdQ0m3s5PHenwmIPJpxkuAoYCeFvLujA+yVW2hTkAHzt+w3+xZ8UtI0q9+GvjrwbDo/wd8TeDbjQfG0Gq6X4a0/UNYvGt47eJ7ObQ/3ki7TOXlvMOB5e0bsmvqz9lz9lfUv2bbtvtXxE1zxtaW9lHYWEOo6JpVlJaRIV2tJNaW0UlxLtUKXkY55JGTmuR/4J9ftueKP2w/BLah4g+FPjLwXi81WFdVulsf7JlFrqM1qkCmO8ln88LGN+YxHvSTaxXbu998X+LdM8AeEtU17Wr630zRtEs5b+/vJ22xWtvEhkkkY9lVVJPsKAPLv2Sv2Trr9kXTJvD+m/EDxF4i8B2nmroXhzVbGy26Akk7TGNLqKJJ5kXeyKJmbC4GSRmug/Z++AU3wP+H2reH9S8aeMfiCur6rfak174lu1uLqCO6ct9kRlC4gjBKoOwJ+gxfgf+0jc/tV+DdSuvD/hP4heAbS/01bvQPEHiXRIIrfUY5lPk3MMHntIQPlk8q4SFipXIAPHJ/sM/H7xl48/Z88far44un8Z694D8a+I/Diy6JoyWtxq8GnXJii8u1RyvnOoxtDYLEcigDJ0v/gmdb/8MheIvgXrXxO8aeIvhxf6TbaLoVpdWWnx3fhm2t5BJCiTxwBrpV2RIRchwyR7WBDNny39pH/gll4lsPgB8YJvCHirWviD8QvidaeHbC7TUIdL0eCO20vUftP+iQwQRWocxSSAQzgwyMoWQlXYV7npn/BRXwdY+G/iZfeMfD/jj4b3vwj0WLxJ4h0rxHp0S3qabMJjDdQi2mmjmR2t5kAV9yuhVgprVi/ba0nQf2d/F3xQ8aeDPH3w58L+D7H+052160tXnv7XZvEtutpcTq4OQuCysCwyAOaAPAf2Z/2NfiR8QNFuvDHj/Tn8B/DPw34k0Hxh4Wsf7I8PadrTapYXpup1mi0YGx+ySbIBu/15JkOQMV13iv8A4I8eA/EOrfGe7tfEnibSf+Fx+INF8USW0UdtPa+H7/TLmW8ja3hljaOWGa6mlmlhmV0ZpG4GeOi/aF/bk8SfD79hL4mfFbTfhz4l8Iaz4MsEvNOsPGcFt5epBmi2yr9iupQ0RWQj/WKwI5Fe7fFvxZf+A/h9q+qaVoOueJtQs4j9n07R47eS9nYkKDGtxLDE23O8hpFyFODnAIB88eBP+CV2h+EvEl/rWoePfFniHWdW8Y6f41vLq5s7C1WS7s9Nn09Ikit4Y4o4THOW2qoIKLyeSaun/wDBIfwRYfDW38Pr4o8VfaNL0jwrp+kaqqW32rSbnw9HMlleorRtFI7idxLHIjRspK7QDW78Gf24tK8Lf8E0vB3xs8d65q3iG2vtLtZLm+j0KLTr3VLq4uxaQotlHNJFDI8zxxhfOKDOS4GSG/tR/t2eK/gh+xP4w+KGn/Bf4jQa54ftrt00XWItOV7PyoTIt5c+VfFGsycAmGR5M8BO9AHrnwA+D2ofBjwlc6fqniy88ZX11cm4e+n0iw0vYNqqI0hsoYowowTkhmJY84wBZ+Nf7Pfgf9pHwzb6L4+8K6N4u0mzuReQ2mpQedFFMFZRIB/e2swz6E1F8Bfi1qnxk8GtqmreA/GPw/uI5FjFl4iWyE9yDGr+dH9lubhPLJYqNzK2VPy4wT57/wAFFf2tfEH7GP7N+peMvDngXWvG99bvFGBaC3Nrp++4hi33PmXEL7W80qvlbzvxuCrlqANab/gnx8D7j4ZQeC5PhX4Nbwnbai2rxaSbL/RY7xoxE04XP3zGAufQUXv/AAT2+BupfDmx8H3Hwr8GzeF9MvZdStNLayzbW9zKqpJKq54ZlVQT6AVV8V/tt2vw/wDAGian4i+HPxM0PxJ4q1ttA0DwbLaWNxr+t3CxNMTEkF1JbrGIkkdpJJ0VFiYsV+XOIn/BSrwZeeA9N1Cx8M/EHUvFWqeKLjwVH4Jg0qNfEUOsW8DXM9rLHJMsEYjt1MxlM/lGNlZXbcMgHsPwi+C/hP4A+CovDfgnw9pfhfQYZXnjsNPi8qBJHOXYL6k9a6avmXwf/wAFRfDPjj4ReG/E1h8PfitJq3jLxLqPhTQvCZ0yz/t3Ur3T/O+24QXXkRRwm3nDtNMmDEeDld3G/H79vDxV8UP+CY/jD4+fCWTWvhrceCItUuzp3i7w7aXlxqhsGeCW3eJLhxAvno67928GJvlwQSAe3ftT/sp3H7R2vfD3XNK8c614A8RfDXV7jV9K1HTtPtL/AHPPZzWciSRXSPGymKZ8cZBwa5b9pX9h7xR+1F+z7pPgDXPjZ4qs44J47rV9TtPDuki416SG8iu7ZnQwGOHynhQYhChwDuzmuz+N37Vem/AyTwnpTeH/ABX418YeMoZZtK8O+GbOK41C7jgjR7m4PnSxQxwxeZGC8kigtIiruZgK4P4vftyx+Kf2WvB/iT4T7bzxN8XNdg8H+FV1a0eIaXqMkk0dzJeQHDA2S2128sWclrYpn5s0Ae9+BtG1Tw74Q0+x1rXrjxRq1rFsutWuLWG1lv3ySZGihVY0JzjCKBxXln7dPwi8VftH/Bhvhn4fjt7TRfiBONJ8WaxJcKkmk6KRuuxDH1lnnjBt0x8qecXbhQDuftB2fxQ0n4GWlv8ADO80vVPHVvfaTDNd6tDEkV3aC7gXUZSmVjWQ2v2h1UYAfAUdBVX9oz9rnR/2fPG/hXwtH4b8XeNvF/jZL240bQfDsFtJeXMFmIjczFrmeCFVTzouDJuYv8qnBwAepWVlDpllDa20Sw21tGsMMa/djRQFVR7AAD8K8N/bt+GXizxppPwx8SeDfD6+LNW+GPjyy8Vy6Kt7DZ3Op2qW13azx28szLEswW6DgSMit5ZUsuQaufF79t3SfhJquh6Mvgn4j+KvF2r6E3ia48N6BpcNzqei6chVZLi7DzJGm2QmMIsjySOjiNX2muF/ac/ai8RQ+C/gT8Tvhb420uXwB8QvF/hrRrmwn0JLj+2bHVr2KPz0ndlkt3WJyAu04brgjFAH0/YXD3djBNJBJaySxq7wyFWeFiAShKkqSp4JBIyOCRzUteM/tDftu6B+z741k8OL4X8eeONcsdGbxJq1n4V0uO9k0LSw7xi8ufMljAVmjlCRxl5pPKkKxsFNUvF/7f3hKw1vwzpXg/QvGfxU1bxV4eh8XW1n4QsIrlrbRpiBDfTvcSwxxpIchE3mWQo+1DtOAD3Oivl743ft+eLvhV+2Z4T+G+mfBP4jeKtH1zw7qmsPeabHpouL57Y6ftNqJ7+ICKP7W6TecqPv8vYGXcw6f45f8FCvCfwG8S6xpt94a8fa6PB+k2+u+MbvRNKju7bwTZTh2jlvm81TnZHI5jtxNIscZcrtwSAe9UV8e/8ABQ//AIKcP8A/gj8UG+F/h/xJ4w8V+BdBt9Su9bsNMgutB8NSXSJLbG8klmjMm+F1kMcCysqSIzBQwr6C8fP8Rv8Ahffw5HhwaR/wrtotTPjIzqhvFfyE+weRkhsGbzN+0HjGcCgD0CivDvjZ8avE3wG/at+Gcd9dW9/8M/ilcnwgYDbqlxoGu+VNc2k4kHMkN0kUsDK33JEhKnDsK7vxN8dLLwv8e/Cvw+k0LxZdX3izTr3UoNWtdLeXR7FbXZujubkHbFK+8eWpB3Y7cZAO2ooooAKKKKACiiigAooooA67Uv8AkHz/APXNv5VyNddqX/IPn/65t/KuRoAKKK8V1n43+MvBH7d/hj4e6mvhnUPBfxC8P6pqmiyW1tNb6ppVzpv2Pzo53aRoriOUXRZSiRsmzBD/AHqAPagcGvimw/4JCaT4e/aj13xjBpHwb8ReH/EnjBvGc8niXwlPeeI9LuJJUnlhtrpLlISgmQvE8sRaIv8Ax7RX2tRQB81y/wDBPrf/AMFGl+NS+JIx4V8tdZk8Jm0OH8TJZtpqat5u7bxp7GLZtyXAfdxivPfg3/wSG0n4LftIN4kt9H+DWveGx4uufGFtfav4Snl8WafNPcvd+THeLciA+VM5MUzQ71XaCGI3V9rUUAfMek/8E/tS03wR8NtJbxRYSP4D+Ll/8TJZfsb4vIbm51OcWajd8rqL9QXOQTETjkY6rwV+zz4++FX7WPjbxZ4f8S+ELjwD8StTtNY13SdS0q4bVrK5gsIrI/ZLmOZYtjrbwsRLExUh8E5GPcqKAOA8D+CPiBo/x98c63rnjix1jwDrFvYp4Z8Nx6OlvP4eljjYXTyXQJafznIYBgNgGB78V8IP2c/HvwT/AGhPiBqWl+KPCd58N/iN4hn8U3lhc6VcLr2mXk1nDA6QXKzeQ0W+3jkHmRFgGZcng17pRQB8Hfssf8EfvEHwG/aX+HHxC1rxd4F1u8+H/wDa8d3qlr4fu4/EPjD7dZzW4uNRvZrqXfMpkViqIsfDYx8oX6A+A37P2ufsmf8ABPPT/hvZ3kvijxB4P8JXen202motq+pXIjmaIQiYlUZmZQvmEqDgnivcaKAPyv8A+CYnwA17S4dJ+HOs/B37NpXiz4e3XhXxn4ml8NeIdB1DwtGbVVNrFLqs0tvOs07NlNPVIt6+aRjAr6Y/YD/4JlR/sZeONM1K60n4K3cnhvR20fTtd0HwhPpniK+UiNPNup2uZIlZ44/3iwxgOzZyoG0/XGc0UAeGfshfs7ePP2YL3WPDN34l8I+IPhm2qapq2jRppVxba9avfX0l4YZ5vOa3kjjaaVQyxqzDYTjBzasf2a/FnxJ+AXxX+H/xc8dQ+NLH4i3GsWVlc6bpMely6Lot5GYobMBSwklhVm/etyxIznFe00UAeMfAn4e/G74b/DC90PxN4y+GnibUNH0eLTvDV9b+HbyxEs0SbEuNRT7U4bICbkt/LH3iCMgDyD4dfsC/GCx/Zh+NXw3174leDNLk+KWpatr2n614U0q/s7zR77Ubr7RMjGS5Ja3xmMCNkk2s3zg4NfY1FAHxj+yt/wAExdf/AGZfFvxY8SWF18HLPUPiR4V0/QINE0nwldQ+H7OW1lu2Z7iGW6kluklW5AfdIrHBHTGei/Zk/YC8Tfs5/Dv4qWdpqnw3huPiEsAsPClloN4fA2hmONo5SthNcvIRchz5yo8aHYmEyGLfVlFAHxLpH/BKXxBafsffHT4br4s8J+H5fjBFbpp2k6Dpd5D4V8INEqhmtbWa4klXz2XfKEdEyq7VXBLe/wCkab8fH+HOvR6prPwXk8XTSQ/2NNaaNqiaXFHu/f8A2mNroyuxX7hjdQD94EcV63RQB8r/ALOv7GvxN+Df7AEfwX1zWPg34uuNHtE0vTJNQ8NXlxo99ZGRnmjv7V7jdIzbmAMbKF4JBxUfwj/4JsXXhH9iv4sfCPWPFlrDbfFIXy29voVpPHo/gyO5tEtxb6dBczSyCFXQzFGkCl5HCqikCvqyigDyfwp4L+Mkv7O/iHQdf8Y+A7P4gS2EtloHiHQNCuEs7B/s4SG5ntbmaTzHWXLlVYIRgY65ofGP9mXxF+0B+w1e/C/xR4zhn8YaroVtZ3vim30tY4ptShaKUXgtAwURtPErGIMPlJAI617PRQB85fEv9mj4tfFzS/h74q1Lxf8ADrTfi78L9eutV0i80/Qrx/D99bXNm9pcWtzbSXJnHmRyMd8coKMiEAjcD8u/tx/sYeM/AuleA9Q1CG8+IGpeJ/iTqfjvx1q2keGtVutN026fRxYWaQ2WlzrqkaRxpFFFLFMSCsjy53gD9L6M4oA/KH4x+APH/jz9nr4B2l18ErjwX4T8C+K9fP2fSPDOv3FqLX7IY7LUX06xmTW7Wa5luJyCZSykStNu8xRXu2j/AAB+K/7V3/BLW++FGj+Ffh78C7bXI9T8MPa3+i6gI5NILYgv7a0Myz2s0xLyNHdNI+TlsljX3RmigD5B/ah/4Jxa/wDtZW3ww8TeLJfhHrXxC+HdrqGmzWeq+HLy98LapaXZhyBCblbmGZPs8LLIJWGfMBUqwxd+MH7IGtfCv9lH4aH4e+HfCj+Lvgd4nh8a2Xh7wxp50nTNaI+0pf2drFJI/lST215c7C8h3TbSxAY4+saKAKmg6uviDQrHUEt7yzW+t47hYLyEw3EAdQ2yRDyjrnDKehBFeHft5fso63+1t4T0vQ7Gz+Et9p1uZXlPjLQbvULmwnYAR3NjNbXEL28yDdyGBPy/MMc++UUAfEfxk/4JCN471b4b68dY8E/EbxN4M8D23gXVJ/idoM+sQ67FBIZY7/ME8UsV15jzbss6usmDyoY9h+0d+xN8RvG3wm+E/gj4c6x8IfB/h34Z6noev/Zbjw7fCF73S7lZ44baKC5VYbNyoHlks6gnD9DX1ZRQB8bftUf8Eurn9o346aX8Trq3+Duv+K7zwraeGvEOn+L/AAxdappDNbySyrdWHl3Mc0LbriZSkjOHQx5IZcnsb79izxp8KPi5pHjL4O+I/h/4VuP+EK03wNrGh6t4bnn0drXT3le0mso7e4jktmi+0ToIi7oUZASCuT9MUUAeHftG/s6+OvGfxl+HvxI+H3ibwppPi7wPpmqaLPbeItKnvNL1S01D7I0vEE0csUiS2cTKQzDBZSD1rx/9pX/gk3b/ABs/aV174kR6f8G/EVz4403T7LX7Hxz4TuNXjtJrSEwCexeK5iKrJEVVoZtykxKdwywP2jRQB8V/tN/8Ev8Axv8AFLQfjN4V8C/Ebwz4L8C/G62sZNYs7jw491e2F3aWUFmEtZBMsaWssVrbh1MbOgRgjDdlftRRhQPQYoooA8A/aM+H2vftBftUfCXw/Do99aeC/hrq8fxB1rXJo9tve3kMVxBp+nWx6vJ5srzykDCJDGpJMoAseO/iB8UdR/4KA/D/AMN+FLbUE+Fum6Hqd149mvdE8uxkndI/7MFpetgyTiTzN8UW5VQMXIJUV7vRmgAooooAKKKKACiiigAooooA67Uv+QfP/wBc2/lXI12bqHRgRkEYIPeq32CD/njD/wB8CgDla+Sv2kI/C/7S3/BSb4NfD+S6/tpfhrp+t+LddtNNupoLjQr3y7GPTTczwFXiWVZrgiEuFmAyyuqgV9v/AGCD/njD/wB8Cnf2dbqvFvD8x5+Qc0Acmzbmz680V1X2CD/njD/3wKPsEH/PGH/vgUAcrRXVfYIP+eMP/fAo+wQf88Yf++BQBytFdV9gg/54w/8AfAo+wQf88Yf++BQBytFdV9gg/wCeMP8A3wKPsEH/ADxh/wC+BQBytFdV9gg/54w/98Cj7BB/zxh/74FAHK0V1X2CD/njD/3wKPsEH/PGH/vgUAcrRXVfYIP+eMP/AHwKPsEH/PGH/vgUAcrRXVfYIP8AnjD/AN8Cj7BB/wA8Yf8AvgUAcrRXVfYIP+eMP/fAo+wQf88Yf++BQBytFdV9gg/54w/98Cj7BB/zxh/74FAHK0V1X2CD/njD/wB8Cj7BB/zxh/74FAHK0V1X2CD/AJ4w/wDfAo+wQf8APGH/AL4FAHK0V1X2CD/njD/3wKPsEH/PGH/vgUAcrRXVfYIP+eMP/fAo+wQf88Yf++BQBytFdV9gg/54w/8AfAo+wQf88Yf++BQBytFdV9gg/wCeMP8A3wKPsEH/ADxh/wC+BQBytFdV9gg/54w/98Cj7BB/zxh/74FAHK0V1X2CD/njD/3wKPsEH/PGH/vgUAcrRXVfYIP+eMP/AHwKPsEH/PGH/vgUAcrRXVfYIP8AnjD/AN8Cj7BB/wA8Yf8AvgUAcrRXVfYIP+eMP/fAo+wQf88Yf++BQBytFdV9gg/54w/98Cj7BB/zxh/74FAHK0V1X2CD/njD/wB8Cj7BB/zxh/74FAHK0V1X2CD/AJ4w/wDfAo+wQf8APGH/AL4FAHK0V1X2CD/njD/3wKPsEH/PGH/vgUAf/9k=" alt="" title="D4.jpg" />',
    "aggiunge un listener sull'evento click degli elementi di una lista",
  ],
  [
    'Il seguente codice<br /><img src="data:image/jpeg;base64,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Hh/jRRQAf2Bd/wDPL/x4f40f2Bd/88v/AB4f40UUAH9gXf8Azy/8eH+NH9gXf/PL/wAeH+NFFAB/YF3/AM8v/Hh/jR/YF3/zy/8AHh/jRRQAf2Bd/wDPL/x4f40f2Bd/88v/AB4f40UUAH9gXf8Azy/8eH+NH9gXf/PL/wAeH+NFFAB/YF3/AM8v/Hh/jR/YF3/zy/8AHh/jRRQAf2Bd/wDPL/x4f40f2Bd/88v/AB4f40UUAH9gXf8Azy/8eH+NH9gXf/PL/wAeH+NFFAB/YF3/AM8v/Hh/jR/YF3/zy/8AHh/jRRQAf2Bd/wDPL/x4f40f2Bd/88v/AB4f40UUAH9gXf8Azy/8eH+NH9gXf/PL/wAeH+NFFAB/YF3/AM8v/Hh/jR/YF3/zy/8AHh/jRRQAf2Bd/wDPL/x4f40f2Bd/88v/AB4f40UUAH9gXf8Azy/8eH+NH9gXf/PL/wAeH+NFFAB/YF3/AM8v/Hh/jR/YF3/zy/8AHh/jRRQAf2Bd/wDPL/x4f40f2Bd/88v/AB4f40UUAH9gXf8Azy/8eH+NH9gXf/PL/wAeH+NFFAB/YF3/AM8v/Hh/jR/YF3/zy/8AHh/jRRQB1FFFFAH/2Q==" alt="" title="D5.jpg" />',
    "aggiunge un listener sull'evento click degli elementi di una lista",
  ],
  [
    '<br /><img src="data:image/jpeg;base64,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" alt="" title="D6.jpg" /><br />La funzione "something()"',
    'può essere usata per validare la form"\n                    ',
  ],
  [
    'Questa successione di caratteri<br /><img src="data:image/jpeg;base64,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" alt="" title="D7.jpg" />',
    "potrebbe essere usata in una regular expression",
  ],
  [
    '<img src="data:image/jpeg;base64,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" alt="" title="D8.jpg" /><br />Nel seguente codice, l\'evento associato al codice 13',
    "è il tasto 'invio' premuto",
  ],
  [
    '<img src="data:image/jpeg;base64,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" alt="" title="D9.jpg" /><br />Nel seguente codice',
    "ogni secondo la funzione aggiornaTimer è richiamata",
  ],
  [
    '<img src="data:image/jpeg;base64,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" alt="" title="D10.jpg" /><br />Nel seguente codice, la funzione parseInt()',
    'è usata per convertire il valore contenuto in inputTentativo in un numero"\n                    ',
  ],
  ["In bootstrap vale il paradigma:", "mobile-first"],
  [
    "L'integrazione di Boostrap nelle pagine web prevede:",
    "integrazione di CSS e JS",
  ],
  ["Il viewport:", "l'area visibile di una pagina web all'interno del browser"],
  [
    "Il settaggio del viewport width=device-width:",
    "imposta la larghezza del viewport pari a quella del dispositivo",
  ],
  [
    "Il settaggio del viewport initial-scale=1.0:",
    'fa si che pagina venga visualizzata senza alcun ingrandimento o ridimensionamento iniziale"\n                    ',
  ],
  [
    "Il settaggio initial-scale=1.0, maximum-scale=1.0, user-scalable=no:",
    "blocca completamente la capacità dell'utente di ingrandire o ridurre la scala della pagina",
  ],
  [
    "La caratteristica principale di Flexbox è:",
    "consentire la definizione di un sistema di assi (uno orizzontale e uno verticale) e di una serie di proprietà che permettono di definire come gli elementi all'interno di un contenitore debbano essere posizionati e distribuiti lungo questi assi",
  ],
  [
    "Se flex-wrap è settato a nowrap:",
    'gli elementi devono essere disposti su una sola riga"\n                    ',
  ],
  [
    "La proprietà flex-direction non può assumere il seguente valore:",
    'reverse"\n                    ',
  ],
  [
    "La proprietà justify-content non può assumere il seguente valore:",
    "flex-around",
  ],
  ["Quale delle seguenti non è una proprietà di Flexbox:", "display-items"],
  [
    "Questa proprietà definisce l'asse principale di un contenitore Flexbox e il modo in cui gli elementi al suo interno debbano essere posizionati lungo questo asse:",
    "flex-direction",
  ],
  [
    "Nel seguente codice, justify-content non può assumere:",
    'space-off"\n                    ',
  ],
  [
    "Se flex-wrap è settato a flex, qualora la dimensione dello schermo fosse ridotta cosa accadrebbe:",
    "il contenuto sarebbe posizionato su più righe",
  ],
  [
    "Se flex-wrap è settato a no-wrap, qualora la dimensione dello schermo fosse ridotta cosa accadrebbe:",
    "il contenuto resterebbe posizionato su un'unica riga ma le singole colonne sarebbero ridotte in larghezza\"\n                    ",
  ],
  [
    "Di default, il box model di CSS calcola le dimensioni di un elemento:",
    "includendo solo la sua larghezza e altezza, escludendo il padding e il bordo",
  ],
  [
    "Con box-sizing: border-box;, il browser calcola la dimensione totale dell'elemento includendo anche:",
    "bordo e padding",
  ],
  [
    "Specifica quanto un elemento può espandersi rispetto agli altri elementi all'interno del container flessibile:",
    "flex-grow",
  ],
  [
    "Specifica quanto un elemento può ridursi rispetto agli altri elementi all'interno del container flessibile quando lo spazio disponibile diminuisce:",
    "flex-shrink",
  ],
  [
    "Specifica la dimensione base di un elemento flessibile prima che il contenitore flessibile distribuisca lo spazio disponibile:",
    "flex-basis",
  ],
  [
    "Nel grid-layout di Bootstrap, la griglia è composta da un insieme di:",
    "12 colonne",
  ],
  [
    "La classe di breakpoint per dispositivi medium con larghezza dello schermo uguale o superiore a 768px è:",
    ".col-md",
  ],
  [
    "Se una colonna utilizza le classi col-sm-6 col-md-4 col-lg-3, significa che:",
    "occupa 6 colonne virtuali su dispositivi di larghezza 'small', 4 colonne virtuali su dispositivi di larghezza 'medium' e 3 colonne virtuali su dispositivi di larghezza 'large'\"\n                    ",
  ],
  [
    "La classe di breakpoint per dispositivi con larghezza dello schermo inferiore a 576px:",
    ".col",
  ],
  [
    "Se si vuole creare una griglia con 2 colonne, per entrambe le colonne si devono usare la classe:",
    "col-6",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/36861_BootsGridLay_PEG/img/testImage_1687160014568.png" alt="" title="D6.png" width="367" height="125" /><br />Dato il seguente container, se lo screen dovesse avere dimensione <500px cosa accadrebbe:',
    "le 3 colonne sarebbero posizionate su righe differenti",
  ],
  [
    "La classe 'navbar-expand-md' specifica che:",
    "la barra di navigazione deve espandersi sui dispositivi medi",
  ],
  [
    "La classe 'navbar-dark' specifica che il testo all'interno della barra di navigazione:",
    "deve essere chiaro",
  ],
  [
    "Il contenuto del modale è definito all'interno di un div con classe 'modal-content', che contiene:",
    'intestazione, corpo e piè di pagina"\n                    ',
  ],
  [
    "I componenti modali:",
    "possono essere utilizzati per creare finestre popup che mostrano informazioni aggiuntive o richiedono l'input dell'utente",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/36872_BootsEse_PEG/img/testImage_1687160360564.png" alt="" title="D1.png" width="393" height="99" /><br />Data la sequente media query, cosa succede se lo schermo ha una dimensione pari a 1300px:',
    "la larghezza è fissata a 1200px",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/36872_BootsEse_PEG/img/testImage_1687160374620.png" alt="" title="D2.png" width="414" height="102" /><br />Data la sequente media query, cosa succede se lo schermo ha una dimensione pari a 1400px:',
    'la larghezza è fissata a 1200px"\n                    ',
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/36872_BootsEse_PEG/img/testImage_1687160392296.png" alt="" title="D3.png" width="377" height="102" /><br />Data la sequente media query, cosa succede se lo schermo ha una dimensione pari a 995px:',
    "la larghezza è fissata a 1000px",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/36872_BootsEse_PEG/img/testImage_1687160414033.png" alt="" title="D4.png" width="402" height="106" /><br />Data la sequente media query, cosa succede se lo schermo ha una dimensione pari a 1000px:',
    "la larghezza è fissata a 1000px",
  ],
  [
    "Composto da un'area in cui viene mostrata una singola immagine alla volta, accompagnata da controlli (come frecce o punti) per navigare tra le immagini, si tratta di:",
    "carosello",
  ],
  [
    "Viene utilizzato per mostrare messaggi temporanei all'utente, come ad esempio notifiche di successo, errori, avvisi; si tratta di:",
    "toast",
  ],
  [
    "Costituito da un contenitore che può includere un'immagine o un'icona, un titolo e un testo descrittivo; si tratta di:",
    "toast",
  ],
  [
    "Componente che viene utilizzato per indicare il caricamento di un'azione in corso:",
    'spinner"\n                    ',
  ],
  [
    "Componenti che permettono di mostrare un elenco di elementi in modo stilizzato e facilmente personalizzabile",
    "list-group",
  ],
  [
    "Componenti che scompaiono automaticamente dopo un certo periodo di tempo:",
    "toast",
  ],
  [
    "La versione slim di jQuery è indicata:",
    "per applicazioni web che non richiedono tutte le funzioni di jQuery",
  ],
  [
    "La versione compressa di jQuery:",
    "è indata per la distribuzione in produzione",
  ],
  [
    "E' una versione compressa di jQuery che rimuove tutti i commenti e gli spazi vuoti dal codice:",
    "minified",
  ],
  ["Una CDN:", "fornisce una copia del file ospitata su un server remoto"],
  [
    "In jQuery, il selettore:",
    "è un'istruzione che indica l'elemento HTML su cui eseguire l'azione",
  ],
  [
    "In jQuery, il metodo:",
    "è l'azione che vogliamo eseguire sull'elemento selezionato",
  ],
  ["In jQuery, il simbolo $:", "indica l'utilizzo della libreria"],
  [
    "Le funzioni di callback:",
    "ci consentono di eseguire azioni dopo che un'azione jQuery è stata completata\"\n                    ",
  ],
  [
    'Il selettore $("ul li:first-child") è un esempio di:',
    "selettore di primo figlio",
  ],
  [
    "L'evento hover:",
    "viene eseguito quando si posiziona il mouse sopra o fuori da un elemento",
  ],
  [
    "Una chiamata sincrona:",
    "è un tipo di chiamata in cui il thread principale di esecuzione del programma viene bloccato fino a quando la chiamata non viene completata",
  ],
  [
    "Una chiamata asincrona:",
    "è un tipo di chiamata in cui il thread principale di esecuzione del programma non viene bloccato durante l'esecuzione della chiamata",
  ],
  [
    "XMLHttpRequest e Fetch API:",
    'sono dei metodi "nativi" perchè direttamente implementati nel browser"\n                    ',
  ],
  [
    "La richiesta HTTP inviata dall'oggetto XMLHttpRequest al server non può essere:",
    'POP"\n                    ',
  ],
  [
    "Una Promise:",
    "rappresenta un'operazione asincrona che potrebbe non essere ancora completata e ci consente di gestire il risultato dell'operazione una volta che è disponibile",
  ],
  [
    "La funzione fetch restituisce:",
    "una Promise che rappresenta la risposta HTTP alla richiesta effettuata",
  ],
  [
    "Il metodo $.get():",
    "richiede solo l'URL della risorsa da richiedere e una funzione di callback per gestire la risposta",
  ],
  [
    "Il metodo $.post():",
    "richiede solo l'URL della risorsa da richiedere, i dati da inviare al server e una funzione di callback per gestire la risposta\"\n                    ",
  ],
  [
    "Il metodo $.getJSON():",
    "richiede solo l'URL della risorsa da richiedere e una funzione di callback per gestire il corpo della risposta json",
  ],
  [
    "Il metodo $.ajaxSetup():",
    "consente di impostare opzioni di default per tutte le richieste AJAX effettuate con jQuery",
  ],
  [
    "Una chiamata sincrona:",
    "è un tipo di chiamata in cui il thread principale di esecuzione del programma viene bloccato fino a quando la chiamata non viene completata",
  ],
  [
    "Una chiamata asincrona:",
    "è un tipo di chiamata in cui il thread principale di esecuzione del programma non viene bloccato durante l'esecuzione della chiamata",
  ],
  ["La Fetch API:", "è inclusa di default in tutti i moderni browser web"],
  ["La Fetch API:", "supporta i Promise"],
  ["Nella Fetch API è possibile:", "usare più then concatenati"],
  [
    "Se si verifica un errore in qualsiasi fase del fetch:",
    'viene utilizzato il metodo .catch()"\n                    ',
  ],
  [
    "Se si tenta di effettuare una richiesta AJAX a un sito web che non ha abilitato il CORS:",
    "il browser impedirà la richiesta e restituirà un error",
  ],
  [
    "Un proxy server:",
    "è un server intermedio che agisce come un ponte tra il client e il server di destinazione",
  ],
  [
    "Il JSONP è una tecnica:",
    "utilizzata per effettuare richieste AJAX a un server di destinazione che non supporta il CORS",
  ],
  [
    "In una richiesta JSONP, il server di destinazione:",
    'restituisce quindi i dati JSON incapsulati nella funzione specificata nella callback"\n                    ',
  ],
  [
    "Sono pacchetti di codice che possono essere pubblicati su un registro pubblico e scaricati da altri sviluppatori per essere utilizzati nei propri progetti Node.js:",
    "moduli NPM",
  ],
  [
    "Node.js è basato:",
    "su un modello di eventi non bloccanti e un'architettura asincrona",
  ],
  [
    "WebSocket e Socket.IO sono le tecnologie principali per gestire:",
    "la comunicazione bidirezionale in tempo reale tra client e server",
  ],
  [
    "Per installare un pacchetto NPM occorre usare la direttiva:",
    "npm install <nome modulo>",
  ],
  [
    "Per usare un pacchetto NPM installato occorre inserire nel codice la direttiva:",
    "require <nome modulo>",
  ],
  [
    "Il PATH è:",
    "una variabile d'ambiente che definisce la lista dei percorsi di ricerca per gli eseguibili e i file di sistema\"\n                    ",
  ],
  [
    "Quando una funzione viene chiamata, il programma si ferma finché la funzione non ha completato l'operazione e restituito un risultato; stiamo parlando di:",
    "programmazione sincrona",
  ],
  [
    "Quando una funzione viene chiamata, il programma non si ferma ma continua a eseguire altre operazioni, mentre la funzione viene eseguita in parallelo; stiamo parlando di:",
    "programmazione asincrona",
  ],
  ["In Node.js, le operazioni di I/O sono:", "sempre asincrone"],
  [
    "L'utilizzo di await:",
    "sospende l'esecuzione della funzione asincrona in attesa del completamento della Promise\"\n                    ",
  ],
  [
    "Il protocollo WebSocket, per stabilire la connessione:",
    "utilizza il protocollo di handshake HTTP",
  ],
  [
    "Il campo Upgrade nell'header della richiesta HTTP per la connessione WebSocket:",
    "è impostato a 'WebSocket'",
  ],
  [
    "I messaggi inviati tramite il protocollo WebSocket:",
    "sono divisi in frame",
  ],
  [
    "Nel protocollo WebSockets, se il server non risponde o se la connessione viene persa:",
    'il client può inviare un messaggio di chiusura per terminare la connessione in modo pulito"\n                    ',
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37124_websockets_PEG/img/testImage_1687159017769.png" alt="" title="D5.png" width="588" height="123" /><br />Lo scambio di messaggi in figura:',
    "rappresenta una comunicazione client/server tramite websockets",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37124_websockets_PEG/img/testImage_1687159042920.png" alt="" title="D6.png" width="505" height="29" /><br />Il seguente codice:',
    'rappresenta la creazione di un server WebSocket"\n                    ',
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37124_websockets_PEG/img/testImage_1687159066606.png" alt="" title="D7.png" width="448" height="55" /><br />Il seguente codice rappresenta la creazione di un server WebSocket e:',
    "quando un nuovo client WebSocket si connette al server, viene emesso l'evento 'connection' e viene passato un oggetto socket che rappresenta la connessione",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37124_websockets_PEG/img/testImage_1687159100120.png" alt="" title="D8.png" width="412" height="28" /><br />Il seguente codice:',
    "è necessario per istanziare un server usando Socket.io",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37124_websockets_PEG/img/testImage_1687159123854.png" alt="" title="D9.png" width="619" height="26" /><br />Il seguente codice rappresenta:',
    'la creazione di una WebSocket alla url definita nel parametro della chiamata"\n                    ',
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37124_websockets_PEG/img/testImage_1687159141809.png" alt="" title="D10.png" width="563" height="114" /><br />Il seguente codice, posto in uno script Javascript nella pagina web:',
    "gestisce il messaggio di risposta del server connesso tramite WebSocket",
  ],
  [
    "Quali tra le seguenti funzionalità non sono offerte da Express:",
    'gestione deploy"\n                    ',
  ],
  [
    "Un middleware:",
    "sono funzioni che vengono eseguite prima o dopo la gestione delle richieste HTTP",
  ],
  ["Express:", "supporta template Engine"],
  [
    "Il Model",
    "rappresenta i dati dell'applicazione e definisce le operazioni per accedere e manipolare questi dati",
  ],
  [
    "La View:",
    "rappresenta l'interfaccia utente dell'applicazione e visualizza i dati forniti dal Model",
  ],
  [
    "Il Controller:",
    "si occupa di coordinare l'interazione tra il Model e la View",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37135_NodExpr_PEG/img/testImage_1687172716166.png" alt="" title="D7.png" width="400" height="55" /><br />Nel seguente codice:',
    "si importano 3 router per 3 differenti rotte",
  ],
  [
    "Le rotte:",
    "definiscono un percorso, il metodo HTTP corrispondente e il callback da eseguire per gestire la richiesta",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37135_NodExpr_PEG/img/testImage_1687172700413.png" alt="" title="D9.png" width="266" height="87" /><br />Il seguente codice indica che:',
    "l'url / può essere raggiunta solo in POST",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37135_NodExpr_PEG/img/testImage_1687172684488.png" alt="" title="D10.png" width="245" height="60" /><br />Se nel seguente codice, al posto di "/" fosse presente" /hello":',
    "contattando la url '/hello' si riceverebbe in risposta 'Hello World!'",
  ],
  [
    "Un modulo in Nodejs è:",
    "un file che contiene codice, variabili, funzioni o oggetti che possono essere esportati e utilizzati in altri moduli",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37148_views_PEG/img/testImage_1687240220636.png" alt="" title="D2.png" width="479" height="128" /><br />Il seguente codice:',
    'è errato: manca il nome della funzione dopo module.exports ="\n                    ',
  ],
  [
    "Per importare un modulo nel nostro codice, possiamo utilizzare la funzione:",
    "require",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37148_views_PEG/img/testImage_1687240253982.png" alt="" title="D4.png" width="515" height="127" /><br />Il seguente codice:',
    'è errato: manca myModule dopo module.exports ="\n                    ',
  ],
  ["Se ho più funzioni all'interno di un modulo:", "posso esportarle tutte"],
  [
    "EJS:",
    "è un motore di template che permette di incorporare codice JavaScript all'interno di pagine HTML",
  ],
  [
    "Data una istruzione res.render('hello', { name }); se volessimo usare 'name' all'interno della nostra view usando EJS dovremmo inserire:",
    "<%= name %>",
  ],
  [
    "Se volessi passare dei valori contenuti nelle variabili 'a', 'b' e 'c' ad una view, dovrei usare come parametri nella chiamata res.render('myView', :",
    "{a,b,c}",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37148_views_PEG/img/testImage_1687240326155.png" alt="" title="D9.png" width="252" height="50" /><br />Il seguente codice:',
    "è corretto",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37148_views_PEG/img/testImage_1687240367034.png" alt="" title="D10.png" width="437" height="94" /><br />Il seguente codice:',
    'è corretto"\n                    ',
  ],
  [
    "Il controller è il componente del pattern MVC che:",
    "gestisce la logica di business",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37155_NodContr_PEG/img/testImage_1687264461249.png" alt="" title="d2.png" width="388" height="21" /><br />Affinchè tale codice sia eseguibile, è necessario che sia presente una istruzione del tipo:',
    "const usersController = require('./controllers/usersController');",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37155_NodContr_PEG/img/testImage_1687264487829.png" alt="" title="d3.png" width="376" height="22" /><br />La seguente istruzione indica che:',
    "la route /users viene associata alla funzione listUsers() del controller usersController",
  ],
  [
    "Il controller accetta le richieste dal client, accede ai dati necessari per elaborare la richiesta e:",
    'restituisce una risposta al client"\n                    ',
  ],
  ["Se ho più funzioni all'interno di un modulo:", "posso esportarle tutte"],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37155_NodContr_PEG/img/testImage_1687264522783.png" alt="" title="d6.png" width="463" height="23" /><br />La seguente istruzione indica che:',
    "la route/register viene associata alla funzione registerUser() del controller usersController",
  ],
  [
    "Il model è il componente del pattern MVC che:",
    "rappresenta la struttura dei dati che saranno gestiti dall'applicazione",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37155_NodContr_PEG/img/testImage_1687264550080.png" alt="" title="d8.png" width="206" height="317" /><br />Il seguente file json può essere usato come struttura dati per il model:',
    "si",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37155_NodContr_PEG/img/testImage_1687264584749.png" alt="" title="d9.png" width="536" height="91" /><br />Tale funzione:',
    "è corretta",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37155_NodContr_PEG/img/testImage_1687264746179.png" alt="" title="d10.png" width="394" height="79" /><br />Tale rotta:',
    "restituisce il json presente nel file users.json",
  ],
  [
    "Un middleware non può essere utilizzato per:",
    'renderizzazione pagine"\n                    ',
  ],
  ["I middleware sono eseguiti:", "in cascata"],
  [
    "La funzione next() nel Middleware:",
    "viene utilizzata per passare il controllo al prossimo middleware nella catena di gestione delle richieste",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37168_NodMiddl_PEG/img/testImage_1687276008797.png" alt="" title="d4.png" width="342" height="121" /><br />Il seguente codice:',
    "può rappresentare un middleware di autenticazione",
  ],
  [
    "Relativamente al tema middleware, Passport è:",
    "un middleware per autenticazione in Node.js",
  ],
  [
    "Passport non supporta la seguente strategia di autenticazione:",
    'LLS authentication strategy"\n                    ',
  ],
  [
    "La serializzazione:",
    "è il processo di conversione dei dati utente in un formato che può essere memorizzato in modo persistente",
  ],
  [
    "La de-serializzazione:",
    "è il processo di conversione dei dati utente memorizzati in modo persistente in un oggetto utente",
  ],
  [
    "Passport utilizzerà per gestire l'autenticazione con Facebook:",
    "una url di callback",
  ],
  [
    "Passport utilizzerà per gestire l'autenticazione con Google:",
    "una url di callback",
  ],
  [
    "I database NoSQL sono progettati per gestire grandi quantità di dati:",
    "non strutturati o semistrutturati",
  ],
  ["I database NoSQL:", "possono scalare orizzontalmente"],
  ["I database NoSQL:", "non necessitano di uno schema definito a priori"],
  [
    "La creazione di un cluster su MongoDB Atlas prevede 'almeno':",
    'scelta del provider di cloud, della regione e della dimensione del cluster"\n                    ',
  ],
  [
    "L'accesso ad un database MongoDB:",
    "può essere limitato sulla base di un set di IP",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37199_mongodb_PEG/img/testImage_1687354367716.png" alt="" title="d6.png" />',
    "seleziona il database su cui si desidera lavorare",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37199_mongodb_PEG/img/testImage_1687354625617.png" alt="" title="d7.png" />',
    "visualizza tutti i documenti nella collezione specificata",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37199_mongodb_PEG/img/testImage_1687354633805.png" alt="" title="d8.png" />',
    "aggiunge un nuovo documento alla collezione specificata",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37199_mongodb_PEG/img/testImage_1687354640306.png" alt="" title="d9.png" />',
    "elimina la collezione specificata",
  ],
  ["Le collezioni in MongoDB sono:", "schemaless"],
  [
    "Axios è una libreria JavaScript che semplifica:",
    "l'esecuzione di richieste HTTP asincrone verso un server",
  ],
  ["Axios supporta:", "sia richieste sincrone che asincrone"],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37302_NodAxi_PEG/img/testImage_1687439967815.png" alt="" title="d3.png" width="471" height="142" /><br />La parola mancante nel seguente codice è:',
    "axios",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37302_NodAxi_PEG/img/testImage_1687439983779.png" alt="" title="d4.png" width="430" height="146" /><br />La parola mancante nel seguente codice è:',
    'fetch"\n                    ',
  ],
  ["Vuejs si basa su pattern:", "MVVM"],
  [
    "Il ViewModel si occupa di mappare i dati:",
    "dal modello alla vista e viceversa",
  ],
  [
    "Rispetto ad MVC, MVVM:",
    "offre una maggiore separazione tra la vista e il modello",
  ],
  [
    "Se un'applicazione prevede una forte interazione tra la vista e il modello, è preferibile il pattern:",
    "MVVM",
  ],
  [
    "Se l'applicazione prevede una forte separazione tra la logica di presentazione e la logica di business, è preferibile il pattern:",
    "MVC",
  ],
  [
    "Il metodo mounted() è un metodo del ciclo di vita di un componente in Vue.js:",
    'che viene chiamato automaticamente quando il componente viene montato nel DOM"\n                    ',
  ],
  ["Angularjs utilizza il pattern architetturale:", "MVC"],
  [
    "In Angularjs si parla di binding dei dati, cioè:",
    'un sistema che consente di collegare i dati del Model alla View e di aggiornare automaticamente i dati quando vengono modificati"\n                    ',
  ],
  [
    "In Angularjs, un modulo:",
    "è un contenitore che raggruppa gli elementi dell'applicazione Angular",
  ],
  [
    "In Angularjs, un controller:",
    "è una funzione JavaScript che gestisce il modello dell'applicazione e fornisce i dati e le funzionalità necessarie alla vista",
  ],
  [
    "In Angularjs, quando si parla di $scope si intende:",
    "un oggetto che rappresenta il contesto di esecuzione del controller",
  ],
  [
    "In Angularjs, quando si parla di direttiva si intende:",
    "un'etichetta HTML che definisce il comportamento della vista e permette di estendere le funzionalità degli elementi HTML",
  ],
  [
    "Collega l'input dell'utente all'applicazione AngularJS, creando un collegamento bidirezionale tra il modello e la UI:",
    'ng-model"\n                    ',
  ],
  [
    "Consente di inizializzare il valore di una variabile del quando si carica la pagina HTML:",
    "ng-init",
  ],
  [
    "La direttiva ng-bind:",
    "permette solo di visualizzare il valore del modello nella vista",
  ],
  [
    "La direttiva ng-model:",
    "permette di creare un legame bidirezionale tra la vista e il modello dell'applicazione",
  ],
  [
    "Lo scope è l'oggetto JavaScript che rappresenta:",
    "il modello dell'applicazione in AngularJS",
  ],
  [
    "Lo scope in Angularjs:",
    "consente al controller di definire le proprietà e i metodi che saranno utilizzati dalla vista, e di interagire con il modello per modificare i dati visualizzati dall'utente\"\n                    ",
  ],
  [
    "Se definiamo la proprietà $scope.name nel controller, per visualizzare il valore della proprietà nella vista possiamo utilizzare la sintassi di interpolazione delle stringhe:",
    "{{ name }}",
  ],
  [
    "Se definiamo la proprietà $scope.name nel controller, per visualizzare il valore della proprietà nella vista possiamo utilizzare la direttiva:",
    "ng-bind='name'",
  ],
  [
    "In Angularjs, la direttiva ng-init='firstName='John'':",
    "inizializzare la variabile $scope.firstName con il valore 'John'",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37606_AngulEve_PEG/img/testImage_1687766215482.png" alt="" title="d6.png" width="327" height="230" /><br />Il seguente codice:',
    "stampa una lista non ordinata contenente nome e nazione degli elementi presenti nell'array",
  ],
  [
    "La direttiva ng-disabled può essere utilizzata:",
    "per impedire all'utente di interagire con l'interfaccia utente durante l'attesa della risposta dal server\"\n                    ",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/37606_AngulEve_PEG/img/testImage_1687766244011.png" alt="" title="d8.png" width="428" height="21" /><br />Tale direttiva:',
    "presuppone un controller in cui è stata definita la funzione showMessage()",
  ],
  [
    "La seguente direttiva non è valida:",
    'ng-mouseclick"\n                    ',
  ],
  ["La seguente direttiva non è valida:", "ng-clicked"],
  [
    "In React, ogni elemento dell'interfaccia utente viene rappresentato come:",
    "un componente riutilizzabile",
  ],
  [
    "In React, la sintassi che permette di definire la struttura dell'interfaccia utente in modo dichiarativo è detta:",
    "JSX",
  ],
  [
    "Un componente React è:",
    "una funzione o una classe JavaScript che restituisce JSX attraverso una sintassi simile all'HTML, utilizzata per definire la struttura dell'interfaccia utente\"\n                    ",
  ],
  [
    "In React, props e state sono caratteristiche importanti:",
    "dei componenti",
  ],
  [
    "Le props sono proprietà:",
    "che vengono passate da un componente genitore a un componente figlio e possono essere utilizzate per personalizzare il comportamento e l'aspetto di un componente",
  ],
  [
    "Gli stati sono gestiti all'interno di un componente e:",
    "possono essere aggiornati in risposta alle interazioni dell'utente o a eventi esterni\"\n                    ",
  ],
  [
    "Gli handler degli eventi:",
    "sono funzioni che vengono chiamate quando si verifica un evento specifico",
  ],
  [
    "Il rendering condizionale:",
    "consente di mostrare o nascondere parti dell'interfaccia utente in base alle condizioni del componente",
  ],
  [
    "L'utilizzo delle callbacks consente ai componenti figli di comunicare con i componenti genitori:",
    'passando loro delle funzioni di callback come props"\n                    ',
  ],
  [
    "Il pattern di sollevamento dello stato:",
    "consente ai componenti di comunicare tra loro sollevando lo stato a un livello superiore nella gerarchia dei componenti",
  ],
  [
    "In React, lo stato di un componente può essere gestito utilizzando:",
    "setState() e useState()",
  ],
  [
    "In React, il metodo setState():",
    "consente di aggiornare lo stato di un componente in modo asincrono",
  ],
  [
    "In React, una delle funzionalità degli hook personalizzati:",
    "è quella di riutilizzare la logica di gestione dello stato in diversi componenti senza doverla duplicare",
  ],
  [
    "Tra i fattori che possono rallentare un'applicazione React non vi sono:",
    'memoization"\n                    ',
  ],
  [
    "Consente di memorizzare il risultato di una funzione in modo che non debba essere eseguita di nuovo se viene chiamata con gli stessi argomenti:",
    "memoization",
  ],
  [
    "Consente di evitare il rendering di un componente finché non sono stati caricati tutti i dati necessari:",
    "sospensione del rendering",
  ],
  [
    "Di default, ogni volta che lo stato di un componente viene aggiornato:",
    'React deve aggiornare il DOM corrispondente"\n                    ',
  ],
  [
    "Il rendering dei componenti:",
    "è un'operazione costosa in termini di prestazioni",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/42447_ReaEse_PEG/img/testImage_1689333082911.png" alt="" title="d9.png" width="462" height="107" /><br />La seguente porzione di codice:',
    "è corretta",
  ],
  [
    "Lo spread operator:",
    "consente di 'spalmare' un array o un oggetto in un altro array o oggetto",
  ],
  [
    "La filosofia alla base di React Native non prevede:",
    'la priorità della navigazione su desktop rispetto a quella su mobile"\n                    ',
  ],
  [
    "In React Native:",
    "i componenti sono creati utilizzando componenti nativi",
  ],
  [
    "I componenti React Native:",
    "vengono compilati in codice nativo per il dispositivo in uso, anziché essere interpretati da un browser web",
  ],
  [
    "In React Native, gli eventi vengono gestiti:",
    'utilizzando i gestori di eventi nativi per il sistema operativo in uso"\n                    ',
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/42516_ReaNat_PEG/img/testImage_1689576946720.png" alt="" title="d5.png" width="536" height="17" />',
    "View",
  ],
  [
    '<img src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01IV/scorm/42516_ReaNat_PEG/img/testImage_1689576887067.png" alt="" title="domendetest_corretto.png" width="547" height="17" />',
    'Text"\n                    ',
  ],
  ["La seguente parola non è in naming convention camel:", "my-name"],
  ["La seguente parola non è in naming convention camel:", "hello-world"],
  ["La seguente parola non è in naming convention kebab:", "HelloWorld"],
  [
    "Per quanto riguarda lo styling, in React Native si utilizza:",
    "uno stile basato sulla sintassi di JavaScript",
  ],
  [
    "Questa libreria offre una vasta gamma di opzioni di navigazione, tra cui stack, tab e drawer:",
    "React Navigation",
  ],
  [
    "Questa libreria offre una navigazione basata su scene, che rappresentano uno stato della vista dell'applicazione:",
    "React Native Router Flux",
  ],
  [
    "Supporta solo la navigazione basata su stack, ma offre un'esperienza di navigazione molto fluida e veloce grazie al rendering nativo dei componenti:",
    "Native Navigation",
  ],
  [
    "Gestisce la navigazione basata su una pila di schermate sovrapposte:",
    "Stack Navigator",
  ],
  [
    "Gestisce la navigazione basata su tab, in cui ogni tab rappresenta una schermata separata:",
    "Tab Navigator",
  ],
  [
    "Gestisce la navigazione basata su un menu laterale che si apre da un lato dello schermo:",
    "Drawer Navigator",
  ],
  ['Quando si preme il pulsante "Indietro', "Stack Navigator"],
  [
    "Gli utenti possono passare da una scheda all'altra toccando la scheda corrispondente; è tipico di:",
    "Tab Navigator",
  ],
  [
    "L'utente può aprire il menu laterale toccando un pulsante di menu nella navigation bar; è tipico di:",
    "Drawer Navigator",
  ],
  [
    "Se l'applicazione ha un flusso di lavoro lineare, il navigator migliore è:",
    "Stack Navigator",
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
