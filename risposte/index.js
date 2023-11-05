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
    "Una Rete di calcolatori è:",
    "Un insieme di dispositivi Hardware collegati l'uno con l'altro da appositi canali di comunicazione, che mediante opportuni Software permettono agli utenti lo scambio di informazioni e la condivisione di risorse e di servizi",
  ],
  [
    "Internet è:",
    "Una specifica rete pubblica che interconnette miliardi di dispositivi distribuiti in tutto il mondo offrendo all’utente una vasta serie di  servizi",
  ],
  [
    "Il vantaggio dell'uso dei  sistemi di calcolo distribuito che impiegano calcolatori in rete, rispetto ai computer di grandi dimensionei, è dato da:",
    "La tolleranza dei guasti, l'economicità dell'Hardware e del Software, la scalabilità che consente gradualità della crescita e flessibilità",
  ],
  [
    "In una Rete di calcolatori i sistemi periferici, detti anche host, sono:",
    "Tutti i dispositivi collegati in rete di qualunque tipologia",
  ],
  ["Un router è:", "Un commutatore di pacchetto usato nel nucleo della rete"],
  [
    "Un commutatore a livello di collegamento (link-layer switch) è:",
    "Un commutatore di pacchetto usato nelle reti di accesso",
  ],
  [
    "La velocità di trasmissione di un collegamento in una rete di calcolatori è misurata in:",
    "Numero di bit al secondo",
  ],
  [
    "La denominazione  ISP (Internet Service Provider) indica:",
    "Un insieme di collegamenti e di commutatori di pacchetto gestito da una struttura commerciale o da un ente, che fornisce vari tipi di accesso a Internet tra cui quello residenziale a banda larga, senza fili (wireless) e in mobilità.",
  ],
  [
    "La denominazione Request For Comment indicata dalla sigla RFC è riferita a:",
    "Gli standard per Internet  sviluppati dalla  Internet Engineering Task Force (IETF)",
  ],
  [
    "Le regole che governano la comunicazione in Internet tra due o più entità remote sono stabilite da:",
    "Protocolli standard specifici per le varie operazioni da svolgere",
  ],
  [
    "Una rete di accesso:",
    "Connette fisicamente un sistema periferico al suo edge router (router di bordo) che è il primo router sul percorso che parte dal sistema di origine verso un qualsiasi altro sistema di destinazione collocato al di fuori della stessa rete di accesso",
  ],
  [
    "Un accesso residenziale ad Internet di tipo DSL (Digital Subscriber Line) utilizza:",
    "La rete analogica telefonica per trasmettere dati digitali convertiti in formato analogico mediante un modem",
  ],
  [
    "Un accesso residenziale ad Internet di tipo FTTH (Fiber To The Home) utilizza:",
    "La rete in fibra ottica fino all’abitazione dell’utente per trasmettere dati digitali convertiti in segnali ottici mediante un terminale ottico detto ONT (Optical Network Terminator)",
  ],
  [
    "In una rete di accesso a Internet DSL lo splitter che si trova nell'abitazione dell'utente effettua:",
    "La suddivisione  del segnale proveniente dalla linea telefonica esterna all'abitazione, separando il segnale analogico del traffico vocale dal segnale analogico del traffico dati, e  invia questi segnali all’apparecchio telefonico ed al modem mediante collegamenti separati",
  ],
  [
    "In una rete di accesso a Internet DSL  la linea telefonica in uscita dall'abitazione collega lo splitter:",
    "Al dispositivo detto DSLAM (Digital Subscriber Line Access Multiplexer) che si trova nella centrale locale della compagnia telefonica",
  ],
  [
    "In una rete di accesso a Internet DSL  il DSLAM (Digital Subscriber Line Access Multiplexer)  che si trova nella centrale locale della compagnia telefonica effettua:",
    "Il multiplexing raccogliendo i dati provenienti dalle abitazioni e istadandoli su un unico collegamento verso il router dell'operatore telefonico, la conversione dei dati da analogico a digitale e la divisioni dei segnali vocali e dei dati digitali istradandoli verso le rispettive reti.",
  ],
  [
    "In una rete di accesso a Internet FTTH  il dispositivo ONT (Optical Network Terminator)  effettua:",
    "La conversione tra segnali ottici e segnali elettrici digitali nell'abitazione dell'utente",
  ],
  [
    "In una rete di accesso a Internet FTTH  il dispositivo OLT (Optical Line Terminator)  effettua:",
    "La conversione tra segnali ottici e segnali elettrici digitali nella centrale locale della compania telefonica e consente il collegamento ad Internet tramite un router del provider",
  ],
  [
    "Nell'accesso a Internet mediante una LAN i dispositivi periferici sono collegati:",
    "Mediante linee costituite da un doppino di rame intrecciato ad uno switch Eternet che è connesso a Internet tramite un router aziendale",
  ],
  [
    "Il simbolo della tecnologia Wi-Fi utilizzata nelle reti WLAN:",
    "Rappresenta la certificazione rilasciata dalla Wi-Fi Alliance che garantisce la interoperabilità  dei dispositivi wireless basati sullo standard IEEE 802.11  prodotti da  costruttori di Hardware diversi",
  ],
  [
    "In Internet i sistemi periferici utilizzano la tecnica di trasmissione:",
    "A commutazione di pacchetto",
  ],
  [
    "Nella trasmissione in Internet un pacchetto è costituito da:",
    "Una parte della sequenza del messaggio trasmesso ed informazioni aggiuntive che identificano la destinazione del messaggio",
  ],
  [
    "La tecnica store and forward nella trasmissione a commutazione di pacchetto stabilisce che:",
    "Il router può iniziare la trasmissione di un pacchetto solo quando lo ha completamente ricevuto",
  ],
  [
    "Il buffer di output è:",
    "Un dispositivo di memoria del router in cui memorizza i bit di un pacchetto che sta ricevendo fino a quando non si completa la ricezione, ed in cui i pacchetti già ricevuti  sono messi in coda in attesa che il collegamento in uscita del router sia disponibile per la trasmissione",
  ],
  [
    "In una trasmissione store and forward il tempo di trasmissione di un pacchetto di L bit dalla sorgente al router su un collegamento con velocità di trasmissione R bps è:",
    "L/R secondi",
  ],
  [
    "In una trasmissione store and forward il tempo di trasmissione di un solo pacchetto di L bit da una sorgente ad una destinazione entrambe connesse ad un router da collegamenti con velocità di trasmissione R bps è:",
    "2L/R secondi",
  ],
  [
    "In una trasmissione store and forward il tempo di trasmissione di N pacchetti di L bit da una sorgente ad una destinazione entrambe connesse ad un router da collegamenti con velocità di trasmissione R bps è:",
    "(N+1)L/R secondi",
  ],
  [
    "In una trasmissione store and forward un pacchetto ricevuto da un router che non può essere trasmesso perché il collegamento in uscita non è disponibile viene:",
    "Memorizzato e messo in coda in attesa della trasmissione nel buffer di output del router",
  ],
  [
    "In una trasmissione store and forward il router individua il collegamento in uscita su cui instradare il pacchetto mediante:",
    "La tabella di inoltro che mette in corrispondenza l'indirizzo IP del pacchetto con i collegamenti di uscita del router",
  ],
  [
    "In una trasmissione store and forward  le tabelle di inoltro sono:",
    "Costruite automaticamentem dal router sulla base di protocolli di instradamento",
  ],
  [
    "In una rete a commutazione di pacchetto il ritardo di nodo è:",
    "La somma dei ritardi di elaborazione, accodamento, trasmissione e propagazione relativi al collegamento in uscita dal nodo",
  ],
  [
    "I programmi traceroute forniscono:",
    "Gli indirizzi IP dei router attraversati nella trasmissione di un pacchetto da una sorgente ad una destinazione con i tempi impiegati dal pacchetto  per coprire il percorso di andata e ritorno da ogni router, ripetendo la trasmissione in tre prove.",
  ],
  [
    "L'overflow del buffer di output di un router determina:",
    "La perdita dei pacchetti in arrivo al router che non possono essere memorizzati nella coda di attesa della trasmissione su un collegamento in uscita",
  ],
  [
    "Se i pacchetti in arrivo ad un router per mancanza di spazio non possono essere memorizzati nel buffer di output in attesa di essere trasmessi sul collegamento di uscita occupato in una trasmissione, si ha che:",
    "I pacchetti vengono eliminati e si ha una perdita di pacchetti per overflow del buffer di output",
  ],
  [
    "In una rete a commutazione di pacchetto il ritardo di elaborazione è il tempo impiegato dal router per:",
    "Esaminare l’intestazione del pacchetto e  determinare su quale collegamento di uscita dirigerlo, più altro tempo per il controllo ed eventualmente la correzione degli errori avvenuti nella trasmissione dei bit",
  ],
  [
    "In una rete a commutazione di pacchetto il ritardo di accodamento relativo ad un collegamento in uscita da un router è il tempo che:",
    "Un pacchetto rimane nella coda  di attesa memorizzata nel buffer di output, prima di essere inviato sul collegamento di uscita del router",
  ],
  [
    "Quando il traffico relativo ad un collegamento di uscita da un router, misurato come rapporto tra il numero medio di bit ricevuti  e il numero di bit inviati  nell'unità di tempo, risulta maggiore di 1 si ha che:",
    "Il ritardo medio di accodamento tende all'infinito poiché la lunghezza della coda di pacchetti memorizzati  nel buffer di output in attesa di essere inviati cresce continuamente",
  ],
  [
    "Quando il traffico relativo ad un collegamento di uscita da un router, misurato come rapporto tra il numero medio di bit ricevuti  e il numero di bit inviati  nell'unità di tempo, risulta minore o uguale a 1 si ha che:",
    "Il ritardo medio di accodamento cresce esponenzialmente al tendere a 1 del valore del rapporto che misura il traffico",
  ],
  [
    "In una rete a commutazione di pacchetto il ritardo di trasmissione relativo ad un collegamento in uscita di un router è il tempo:",
    "Impiegato dal router per instradare il pacchetto verso il collegamento, dato dal valore del rapporto L/R, dove L  è la lunghezza in bit del pacchetto ed R è la velocità di trasmissione in bit per secondi del collegamento in uscita dal router",
  ],
  [
    "In una rete a commutazione di pacchetto il ritardo di propagazione relativo ad un collegamento in uscita di un router è il tempo:",
    "Che un segnale impiega per percorrere il collegamento dato dal valore del rapporto d/v, dove d  è la lunghezza in metri del collegamento che il pacchetto in uscita dal router deve percorrere per giungere al nodo successivo della rete, e v è la velocità in metri al secondo con cui viaggia il segnale caratteristica del materiale di cui è fatto il collegamento",
  ],
  [
    "In una rete di calcolatori, il throughput medio end-to-end di una trasmissione di dati tra due sistemi periferici è dato da:",
    "Throughput medio end-to-end = F/T bps, dove F è il numero di bit trasmessi tra i due sistemi periferici e T il tempo richiesto dalla trasmissione di tutti i bit",
  ],
  [
    "In una rete di calcolatori, il tempo di una trasmissione di dati tra due sistemi periferici che si ricava dall'espressione del throughput medio end-to-end è dato da:",
    "Tempo = F/throughput secondi, dove F è il numero di bit trasmessi tra i due sistemi periferici",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01II/scorm/4379_ThroughputRetiCal_PEG/img/testImage_1549373770100.jpg" title="Domanda3.jpg"><br><br>Considerando solo il ritardo di trasmissione nella rete in figura dove Rs bps ed Rc bps sono, rispettivamente, le velocità di trasmissione dei collegamenti server-router e router-client, il throughput medio end-to-end di una trasmissione di dati tra client e server è approssimato da:',
    "Throughput medio end-to-end = minimo(Rs, Rc) bps",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01II/scorm/4379_ThroughputRetiCal_PEG/img/testImage_1549373785129.jpg" title="Domanda4.jpg"><br><br>Considerando solo il ritardo di trasmissione nella rete in figura dove R<sub>1</sub> bps,…, R<sub>N</sub> bps sono le velocità dei collegamenti attraversati nella trasmissione dei dati, il throughput medio end-to-end di una trasmissione di dati tra client e server è approssimato da:',
    "Throughput medio end-to-end = minimo(R<sub>1</sub>, ..., R<sub>N</sub>) bps",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01II/scorm/4379_ThroughputRetiCal_PEG/img/testImage_1549373417494.jpg" title="Domanda5.jpg"><br><br>Considerando solo il ritardo di trasmissione nella rete in figura dove Rs bps ed Rc bps sono, rispettivamente, le velocità dei collegamenti di accesso al nucleo della rete del server e del client, se tutti i collegamenti presenti nel nucleo della rete hanno velocità di trasmissione molto alta e molto più grande rispetto alle velocità dei collegamenti di accesso al nucleo della rete del server e del client, il throughput medio end-to-end di una trasmissione di dati tra client e server è approssimato da:',
    "Throughput medio end-to-end = minimo(Rs, Rc) bps",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01II/scorm/4379_ThroughputRetiCal_PEG/img/testImage_1549373430678.jpg" title="Domanda6.jpg"><br><br>Considerando solo il ritardo di trasmissione nella rete in figura, quando attraverso il collegamento comune di velocità R nel nucleo della rete, condiviso ad intervalli di tempo uguali, avvengono 10 trasmissioni di dati contemporane tra 10 coppie client-server, la velocità del collegamento comune disponibile per ogni trasferimento dati tra una coppia client-server è:',
    "Il valore R/10 bps",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01II/scorm/4379_ThroughputRetiCal_PEG/img/testImage_1549373458176.jpg" title="Domanda7.jpg"><br><br>Considerando solo il ritardo di trasmissione nella rete in figura, quando attraverso il collegamento comune di velocità R nel nucleo della rete, condiviso ad intervalli di tempo uguali, avvengono 10 trasmissioni di dati contemporane tra 10 coppie client-server, se la velocità del collegamento comune disponibile per ogni trasferimento dati rimane superiore alle velocità di accesso al nucleo della rete Rc dei client ed Rs dei server, il throughput medio end-to-end di una trasmissione di dati tra una coppia client-server è approssimato da:',
    "Throughput medio end-to-end = minimo(Rs, Rc) bps",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01II/scorm/4379_ThroughputRetiCal_PEG/img/testImage_1549373470888.jpg" title="Domanda8.jpg"><br><br>Considerando solo il ritardo di trasmissione nella rete in figura, quando attraverso il collegamento comune di velocità R nel nucleo della rete, condiviso ad intervalli di tempo uguali, avvengono 10 trasmissioni di dati contemporane tra 10 coppie client-server, se la velocità del collegamento comune disponibile per ogni trasferimento dati diventa minore delle velocità di accesso al nucleo della rete Rc dei client e Rs dei server, il throughput medio end-to-end di una trasmissione di dati tra una coppia client-server è approssimato da:',
    "Throughput medio end-to-end = velocità ridotta offerta dal collegamento comune",
  ],
  [
    "In una rete di calcolatori, il throughput medio end-to-end di una trasmissione di dati tra due sistemi periferici è una misura:",
    "Delle prestazioni della rete",
  ],
  [
    "In una rete di calcolatori, la misura del throughput medio end-to-end di una trasmissione di dati tra due sistemi periferici è espressa in:",
    "Bit al secondo",
  ],
  [
    "La strutturazione di Internet come reti di reti consiste:",
    "Nella suddivisione delle reti degli ISP in  gruppi corrispondenti a tre livelli di una gerachia dove: gli ISP di accesso che hanno come clienti gli utenti finali costituiscono il livello più basso e pagano il proprio traffico dati agli ISP regionali posti nel livello superiore, che a loro volta sono clienti degli ISP di livello 1, posti nel grado più alto della gerarchia che non pagano per il proprio traffico dati. A questa gerarchia si aggiungono le reti private dei distributori di contenuti, di cui Google è un esempio",
  ],
  [
    "Il multi-homing consiste:",
    "Nella possibilità per tutti gli ISP di connettersi a due o più fornitori di livello superiore. Sono esclusi gli ISP di livello 1 che non pagano fornitori",
  ],
  [
    "Un PoP (Point of Presence) consiste:",
    "In un gruppo di router collocati  fisicamente vicini che appartiene alla rete di un ISP fornitore.  L'ISP fornitore che possiede un PoP offre ai propri ISP clienti la possibilità di collegare un loro router direttamente ad un router del PoP mediante, un collegamento ad alta velocità. Gli ISP di accesso che hanno come clienti gli utenti finali non posseggono PoP.",
  ],
  [
    "Un servizio di housing (colocation) consiste:",
    "Nel concedere in affitto uno spazio fisico in un Data center (generalmente all'interno di appositi armadi detti rack) dove posizionare i router di proprietà dell’ISP che fruisce del servizio.  Il Data center garantisce  la gestione degli aspetti hardware, software ed infrastrutturali come il condizionamento termico e la vigilanza",
  ],
  [
    "La rete di un ISP di livello 1 si connette a Internet:",
    "Solo con connessione di tipo peering",
  ],
  [
    "Un ISP di accesso si può connettere ad ISP di livello 1:",
    "Sia pagando il traffico ad un ISP regionale che a sua volta paga il traffico ad un fornitore di livello 1, sia direttamente all'ISP di livello 1 pagando il relativo traffico",
  ],
  [
    "Una connessione di tipo peering tra reti di ISP consiste:",
    "In una connessione in cui nessuno degli ISP collegati paga l'altro per lo scambio di traffico che avviene tra le loro reti, ma ciascuno raccoglie separatamente per se stesso i pagamenti dai propri clienti",
  ],
  [
    "Un IXP (Internet exchange Point) consiste:",
    "In un insieme di attrezzature e servizi  che consentono ad ISP di ottimizzare i costi di una connessione di tipo peering tra le loro reti",
  ],
  [
    "La gestione di un IXP (Internet exchange Point) è:",
    "Di tipo commerciale, in cui l’azienda che ha creato e che gestisce l’IXP offre a pagamento i servizi agli ISP che ne diventano clienti, oppure di tipo consortile, in cui gli ISP che intendono stabilire un collegamento di tipo peering si riuniscono in associazioni e partecipano alla gestione dell’IXP",
  ],
  [
    "Una rete privata di un grande distributore di contenuti come Google può connettersi:",
    "Anche alle reti di ISP di livello basso con collegamenti di tipo peering  sia  direttamente sia tramite connessioni a IXP (Internet exchange Point)",
  ],
  [
    "Il vantaggio della modulatità offerto dalla Architettura a livelli consiste nella possibilità di:",
    "Cambiare l’implementazione dei servizi forniti dal protocollo di un particolare livello senza dover cambiare l’implementazione della parte rimanente del sistema",
  ],
  [
    "La suite di protocolli ISO/OSI è:",
    "Il Modello della pila di protocolli di rete definita da 7 livelli nello standard  del 1984",
  ],
  [
    "Il livello di Applicazione dello standard ISO/OSI offre servizi:",
    "Per i processi relativi all’esecuzione delle applicazioni sui sistemi periferici sorgente e destinazione",
  ],
  [
    "Il livello di Trasporto dello standard ISO/OSI offre servizi:",
    "Che permettono un trasferimento di dati affidabile, effettuando anche un controllo degli errori e delle perdite di pacchetti tra due sistemi periferici",
  ],
  [
    "Il livello di Rete dello standard ISO/OSI offre servizi:",
    "Che consentono la comunicazione tra i nodi della rete che vengono attraversati nel percorso che va dal sistema periferico sorgente al sistema periferico destinazione",
  ],
  [
    "Il livello di Collegamento dello standard ISO/OSI offre servizi:",
    "Per il trasferimento di dati tra nodi adiacenti attraverso il tipo di collegamento che sussiste tra di loro",
  ],
  [
    "Il livello Fisico dello standard ISO/OSI offre servizi:",
    "Necessari a livello Hardware per controllare il flusso di dati attraverso i collegamenti e le connessioni ai dispositivi che permettono il passaggio dei segnali che rappresentano le informazioni",
  ],
  [
    "Rispetto ai modelli ISO/OSI e TCP/IP l'approccio cross-layer è:",
    "Diverso perché introduce la capacità di scambiare informazioni anche tra protocolli relativi a livelli diversi",
  ],
  [
    "La suite di protocolli  TCP/IP è:",
    "Il Modello della pila di protocolli implementati in Internet definita da 4 livelli nello standard  RFC 1122 del 1989",
  ],
  [
    "I modelli di protocolli ISO/OSI e TCP/IP sono:",
    "Diversi perché i livelli di Presentazione e di Sessione  non sono presenti nello standard TCP/IP",
  ],
  [
    "La denominazione dei pacchetti relativi ai livelli del Modello TCP/IP è:",
    "Messaggio per il livello di applicazione, segmento per il livello di trasporto, datagramma per il livello di rete, frame per il livello di collegamento, il singolo bit per il livello fisico",
  ],
  [
    "I principali protocolli del livello di applicazione del Modello TCP/IP sono:",
    "Il protocollo HTTP per il trasferimento di documenti Web, il protocollo SMTP per la posta elettronica, il protocollo FTP per il trasferimento di file tra sistemi remoti, il protocollo DNS per la conversione di indirizzi simbolici in indirizzi numerici IP",
  ],
  [
    "I principali protocolli del livello di trasferimento del Modello TCP/IP sono:",
    "Il protocollo TCP che garantisce una trasmissione affidabile tra mittente e destinatario con ritrasmissione dei pacchetti persi,  il protocollo UDP che fornisce una trasmissione con possibilità di perdita di pacchetti ma più veloce",
  ],
  [
    "Il principale protocollo del livello di rete del Modello TCP/IP è:",
    "Il protocollo IP  che gestisce l'instradamento dei pacchetti consentendo di interconnettere reti eterogenee per tecnologia, prestazioni e gestione",
  ],
  [
    "Il campo payload di un pacchetto gestito al livello di Trasporto è costituito da:",
    "Un Messaggio fornito dal livello di Applicazione",
  ],
  [
    "Il campo payload di un pacchetto gestito al livello di Rete è costituito da:",
    "Un Segmento fornito dal livello di Trasporto",
  ],
  [
    "Il campo payload di un pacchetto gestito al livello di Collegamento è costituito da:",
    "Un Datagramma fornito dal livello di Rete",
  ],
  [
    "Il campo payload di un pacchetto gestito al livello  Fisico è costituito da:",
    "Un Frame fornito dal livello di Collegamento",
  ],
  [
    "In una rete a commutazione di pacchetto basata sull'Architettura a livelli l'incapsulamento è:",
    "L'operazione che inserisce, nel campo payload di un pacchetto relativo ad un livello, il pacchetto gestito dal livello superiore",
  ],
  [
    "In una rete a commutazione di pacchetto basata sull'Architettura a livelli l'header è:",
    "Il campo del pacchetto relativo ad un livello, che contiene le informazioni aggiuntive gestite dai protocolli di tale livello",
  ],
  [
    "Un malware è:",
    "Un Software dannoso che l'autore di un attacco può installare sul computer di un utente attraverso una attività svolta in rete",
  ],
  [
    "Un malware viene detto autoreplicante quando:",
    "Può diffondere in rete copie di se stesso, che effettuano lo stesso tipo di attacco su altri computer",
  ],
  [
    "Si definisce botnet:",
    "La rete di computer infettati che l’autore di un attacco controlla",
  ],
  [
    "Un virus informatico è:",
    "Un malware autoreplicante che richiede una qualche forma di interazione con l’utente per poter infettare il dispositivo",
  ],
  [
    "Un worm informatico è:",
    "Un malware autoreplicante che può infettare un dispositivo senza alcuna interazione esplicita con l’utente",
  ],
  [
    "Una DoS provocata da un attacco alla vulnerabilità del sistema è:",
    "Una interruzione del servizio causata dall'invio ad una applicazione vulnerabile o al Sistema Operativo in esecuzione sul server sotto attacco, di una sequenza di pacchetti opportunamente costruiti per determinare il blocco del servizio o anche lo spegnimento del server",
  ],
  [
    "Una DoS provocata da una inondazione di banda è:",
    "Una interruzione del servizio causata dall'invio da parte dell'attaccante di una grande quantità di pacchetti capace di occupare completamente il  collegamento di accesso del server",
  ],
  [
    "Una DoS provocata da una inondazione di connessione è:",
    "Una interruzione del servizio causata da una gran numero di connessioni TCP generate dall'attaccante e mantenute tutte  aperte per ingorgare la capacità ricettiva del server",
  ],
  [
    "Il packet sniffing è:",
    "La copia mediante un ricevitore passivo  di ogni pacchetto in transito su una connessione all’insaputa degli utenti collegati che non hanno modo per potersene accorgere",
  ],
  [
    "La difesa da una attività di packet sniffing è costituita:",
    "Dall'uso di tecniche di crittografia per codificare i messaggi trasmessi",
  ],
  [
    "Quale di queste definizioni meglio definisce X.509:",
    "Rappresenta un framework per servizi di autenticazione basato sull'uso di un repository e di certificati",
  ],
  [
    "Il certificato X.509 contiene:",
    "La chiave pubblica del possessore del certificato",
  ],
  ["I certificati X.509 sono creati da:", "Dall'autorità di certificazione"],
  [
    "In un certificato X.509, esistono sostanzialmente due parti:",
    "La parte non firmata e la parte firmata dalla CA",
  ],
  [
    "Quali dei seguenti campi non fa parte del formato di un certificato X.509:",
    "Chiave privata",
  ],
  [
    'Nel formato del certificato X.509, il campo "periodo di validità" contiene:',
    "La data di inizio e fine della validità",
  ],
  [
    "Se i certificati X.509 sono emessi da CA diverse accade che:",
    "Non ci sono problemi le CA sono autenticate fra di loro",
  ],
  [
    "In quali casi un certificato X.509 non finisce in CRL (Certificate Revocation List):",
    "Certificato scaduto",
  ],
  [
    "Nella CRL dei certificati X.509 quale dei seguenti campi non è presente:",
    "La data in cui il certificato sarà di nuovo valido",
  ],
  [
    "Nell'infrastruttura PKIX per X.509, quale delle seguenti entità può non essere presente:",
    "L'emettitore della CRL",
  ],
  [
    "In IPSec, con il protocollo ESP si può realizzare:",
    "Il servizio di segretezza e opzionalmente il servizio di autenticazione",
  ],
  [
    "In IPSec, il protocollo ESP, diversamente da AH, garantisce:",
    "La segretezza",
  ],
  [
    "In IPSec, nel protocollo ESP, il campo Authentication Data è generato:",
    "Tramite un codice MAC",
  ],
  [
    "In IPSec, nel protocollo ESP, il campo Padding serve fondamentalmente a:",
    "Adattare il campo Payload Data alle esigenze di lunghezza per la cifratura",
  ],
  [
    "In IPSec, nel protocollo ESP in modalità trasporto, l'intestazione ESP si trova:",
    "Dopo l'intestazione IP originaria",
  ],
  [
    "In IPSec, esiste la necessità di impiegare combinazioni di SA per:",
    "Implementare servizi di sicurezza diversi",
  ],
  [
    "Nel caso di accesso host da remoto verso un server posto all'interno di una rete aziendale, quale di queste combinazione di SA appare più adatta:",
    "Una SA di tipo tunnel fra host e gateway della rete con una o due SA fra host e server",
  ],
  [
    "In IPSec  la gestione delle chiavi si basa fondamentalmente su:",
    "Protocolli Oakley e ISAKMP",
  ],
  [
    "In IPSec, il protocollo Oakley permette di difendersi dagli attacchi replay tramite:",
    "L'uso di nonce",
  ],
  [
    "In IPSec, quali delle seguenti affermazioni è falsa nel protocollo ISAKMP:",
    "ISAKMP non prevede un'intestazione ISAKMP ma solo un'intestazione generica",
  ],
  [
    "PGP è uno standard per la posta elettronica basata su:",
    "Cifratura pubblica, cifratura simmetrica e hash.",
  ],
  [
    "Nel PGP la compatibilità con le funzionalità di posta elettronica sono garantite attraverso:",
    "La conversione ASCII radix-64",
  ],
  [
    "In PGP, l'autenticazione viene garantita tramite:",
    "Hash SHA-1 e la cifratura asimmetrica",
  ],
  ["In PGP, l'autenticazione non garantisce:", "La segretezza"],
  ["In PGP, la segretezza è fornita attraverso:", "La cifratura simmetrica"],
  [
    "In PGP, la chiave simmetrica è trasferita usando:",
    "La cifratura asimmetrica",
  ],
  [
    "In PGP, si realizza autenticazione e segretezza tramite:",
    "La chiave privata del mittente, la chiave segreta di sessione e la chiave pubblica del destinatario",
  ],
  [
    "In PGP, la compressione ZIP si effettua:",
    "Dopo aver applicato la firma ma prima della crittografia simmetrica",
  ],
  [
    "In PGP, la conversione radix-64 determina:",
    "Un aumento della dimensione del messaggio",
  ],
  [
    "In PGP, la conversione radix-64 trasforma:",
    "Un gruppo di 6 bit in un carattere ASCII",
  ],
  [
    "Il protocollo IPSec consente di:",
    "Impedire il monitoraggio non autorizzato del traffico",
  ],
  [
    "Mediante il protocollo IPSec si può:",
    "Crittografare e/o autenticare il traffico a livello IP",
  ],
  [
    "Il protocollo IPSec si basa sull'uso di extension header che:",
    "Seguono l'intestazione IP",
  ],
  [
    "In IPSec, gli extension header possono identificare i protocolli:",
    "AH o ESP",
  ],
  [
    "In IPSec, quale dei seguenti protocolli fornisce crittografia e autenticazione combinata:",
    "Encapsulated Security Payload",
  ],
  [
    "In IPSec, quale dei protocolli garantisce un set completo di servizi di sicurezza:",
    "ESP con l'opzione di autenticazione",
  ],
  [
    "In IPSec per Associazione di Sicurezza si intende:",
    "Una relazione monodirezionale fra un mittente e un destinatario riguardante i servizi di sicurezza",
  ],
  [
    "In IPSec, nella modalità tunnel, si fornisce protezione a:",
    "L'intero pacchetto IP",
  ],
  [
    "In IPSec, il campo Sequence Number nell'Authetication Header serve a:",
    "Impedire attacchi replay",
  ],
  [
    "In IPSec, nel protocollo AH, la finestra anti-replay consente di:",
    "Scartare i pacchetti con valore a sinistra della finestra anche se validi",
  ],
  [
    "Il protocollo SSL, nell'ambito dello stack dei protocolli TCP/IP, opera:",
    "Sopra al livello TCP",
  ],
  [
    "Il protocollo SSL è costituito da dei sotto-protocolli con le seguenti caratteristiche:",
    "Un protocollo di base e tre protocolli a livello superirore",
  ],
  [
    "Una connessione SSL presenta le seguenti caratteristiche:",
    "Viene stabilita all'interno di una singola sessione",
  ],
  [
    "In SSL, il protocollo SSL Record fornisce due servizi:",
    "Un servizio di integrità e un servizio di segretezza",
  ],
  [
    "Nel protocollo SSL Record, il servizio di integrità del messaggio è realizzato mediante:",
    "Codice MAC",
  ],
  [
    "Nel protocollo SSL Record, la cifratura si applica a:",
    "Al testo in chiaro/compresso e al codice MAC",
  ],
  [
    "In SSL, il protocollo Change Cipher Spec specifica:",
    "Di cambiare la tipologia di cifratura",
  ],
  [
    "In SSL, il protocollo Alert specifica:",
    "Il livello di severità dell'alert e la sua tipologia",
  ],
  [
    "In SSL, il protocollo Handshake serve a:",
    "Autenticazione vicendevole del server e del client",
  ],
  [
    "In SSL, quale delle seguenti non è una fase del protocollo Handshake :",
    "Autenticazione del client presso la CA",
  ],
  [
    "Il protocollo TLS si presenta rispetto a SSL:",
    "TLS è un'evoluzione di SSL",
  ],
  [
    "Quale delle seguenti non è una differenza fra SSL e TLS:",
    "SSL si appoggia sul livello TCP mentre TLS sul livello IP",
  ],
  [
    "Nel protocollo TLS è prevista un'operazione di padding del tipo:",
    "Tale da ottenere una lunghezza totale multipla della dimensione del blocco",
  ],
  [
    "Nel protocollo TLS, la funzione pseudo-random ha l'obiettivo di:",
    "Espandere i valori segreti in una serie di blocchi di dati sicuri",
  ],
  [
    "Nel protocollo TLS, la funzione pseudo-random può essere:",
    "Iterata più volte per ottenere il numero di dati necessario",
  ],
  [
    "Nel protocollo TLS, la funzione pseudo-random ad ogni iterazione esegue la seguente operazione:",
    "HMAC(secret, A(i-1) || seed)",
  ],
  [
    "Nel protocollo TLS, la funzione pseudo-random prende in ingresso:",
    "Un valore segreto e un valore seed",
  ],
  ["Il protocollo HTTPS è la combinazione di:", "TLS( SSL) e HTTP"],
  ["Nel protocollo HTTPS non vengono cifrati:", "L'intestazione IP"],
  ["Le porte utilizzate da HTTP e HTTPS sono rispettivamente:", "80 e 443"],
  [
    "Nello standard SET la segretezza del pagamento e dell'ordine è garantita tramite:",
    "Cifratura simmetrica DES",
  ],
  [
    "Nello standard SET l'integrità dei dati trasmessi è garantita attraverso:",
    "La firma digitale basata su RSA e i codici hash SHA-1",
  ],
  [
    "Nello standard SET, il  venditore dialoga:",
    "Con il cliente e il gateway di pagamento",
  ],
  [
    "Nello standard SET, la doppia firma serve a:",
    "A collegare due messaggi per due diversi destinatari ma provenienti da stesso mittente",
  ],
  [
    "Nello standard SET, la doppia firma DS è ottenuta:",
    "E(PRC,H[H(PI)||H(OI)])",
  ],
  [
    "Nello standard SET, per verificare la doppia firma il venditore e la banca eseguono una stessa operazione:",
    "La decifratura della doppia firma con la chiave pubblica del cliente",
  ],
  [
    "Nella Purchase Request dello standard SET, il cliente invia:",
    "Una chiave simmetrica monouso cifrata con la chiave pubblica del gateway di pagamento",
  ],
  [
    "Nella Purchase Response dello standard SET, il venditore invia:",
    "Un blocco di conferma cifrato con la sua chiave privata",
  ],
  [
    "Nella fase di Authorization Request dello standard SET, il venditore invia al gateway di pagamento:",
    "Una chiave simmetrica monouso diversa da quella inviatagli dal cliente",
  ],
  [
    "Nello standard SET, la fase di cattura del pagamento avviene tra:",
    "Il venditore e il gateway di pagamento",
  ],
  ["Il firewall si frappone tra:", "La rete interna e Internet"],
  [
    "Il principale scopo del firewall è:",
    "Proteggere la rete interna da eventuali attacchi esterni",
  ],
  ["Il firewall monitora il traffico dati:", "In ingresso e in uscita"],
  [
    "Il firewall non può effettuare filtraggio del traffico sulla base di:",
    "Dati provenienti da reti wireless",
  ],
  [
    "Il firewall è in grado di fornire anche:",
    "Un punto di osservazione di eventi relativi alla sicurezza della rete interna",
  ],
  [
    "Il firewall a filtraggio di pacchetti IP può operare:",
    "A livello di indirizzi sorgente/destinazione",
  ],
  [
    "La regola di firewall a filtraggio di pacchetti con Direzione=Out, Protocollo=TCP, Porta Dest= >1023 consente:",
    "Traffico dati in uscita per il protocollo TCP su una porta di uscita superiore a 1023",
  ],
  [
    "Quale tipo di firewall esercita il filtraggio sulla base delle applicazioni consentite:",
    "Proxy a livello di applicazione",
  ],
  [
    "La sicurezza multilivello indica:",
    "Una politica di sicurezza in cui le informazioni sono accessibili sulla base di diversi livelli gerarchici",
  ],
  [
    'Cosa permette la proprietà "no write down":',
    "Un soggetto di livello 2 non può scrivere in un documento di livello 3",
  ],
  [
    "Qual è il concetto che sta dietro la necessità di comunicazioni anonime:",
    "Proteggere le identità dei soggetti coinvolti",
  ],
  [
    "Quale delle seguenti afformazioni in merito alle comunicazioni anonime è corretta:",
    "La crittografia non è sufficiente a garantire anonimato",
  ],
  [
    "L'idea base del protocollo Crowds è quella di:",
    "Nascondere le comunicazioni di un utente facendole passare casualmente in un gruppo di utenti simili",
  ],
  [
    "Nel protocollo Crowds, la richiesta del mittente:",
    "Attraversa alcuni proxy jondo del crowd",
  ],
  [
    "Nel protocollo Crowds, un proxy jondo decide di inoltrare la richiesta ricevuta verso un altro jondo se:",
    "Il risultato del lancio di una moneta indica di inoltrare",
  ],
  [
    "Nel protocollo Crowds, i collegamenti fra proxy jondo sono:",
    "Cifrati con crittografia a chiave pubblica",
  ],
  [
    "Nel protocollo Mix, ogni proxy possiede:",
    "Una coppia di chiavi pubblica/privata",
  ],
  [
    "Nel protocollo Mix, il messaggio del mittente verso il destinatario è cifrato con:",
    "Le chiavi pubbliche dei proxy da cui deve transitare",
  ],
  [
    "Nel protocollo Mix, il messaggio del mittente verso il destinatario è cifrato nel seguente ordine:",
    "Prima la cifratura relativa all'ultimo proxy e poi le altre",
  ],
  [
    'Nel protocollo Mix, si implementa anche un\'operazione di "mixing" che consiste nel:',
    "Raccogliere richieste in un certo intervallo di tempo e reinoltrarle in ordine casuale",
  ],
  ["La rete Tor è basata su:", "Il protocollo MIX"],
  [
    "Nella rete Tor, la lista dei Tor relay si ottiene da:",
    "Un directory server",
  ],
  [
    "Nella rete Tor, una volta instaurato, il percorso fra i Tor relay viene:",
    "Per un certo periodo di tempo",
  ],
  [
    "Nella rete Tor, i Tor relay di guardia servono a:",
    "Impedire ad un attaccante di diventare il primo relay del circuito",
  ],
  [
    'Nella rete Tor, i "servizi nascosti" sono:',
    "Servizi di cui non è visibile l'indirizzo IP",
  ],
  [
    'Nell\'accesso ai "servizi nascosti" della rete Tor, i punti di introduzione sono:',
    'Dei Tor relay su cui il "servizio nascosto" espone il proprio servizio',
  ],
  [
    'Nell\'accesso ai "servizi nascosti" della rete Tor, cosa rappresenta un relay di rendezvous:',
    "Un Tor relay selezionato dall'utente per ricevere il servizio",
  ],
  [
    "Nell'accesso ai \"servizi nascosti\" della rete Tor, dove l'utente comunica il Tor relay di rendezvous:",
    "In uno dei punti di introduzione",
  ],
  [
    "Quale delle seguenti affermazioni sul Deep Web è vera:",
    "Nel Deep Web ci sono le pagine non indicizzate",
  ],
  ["Il Deep Web è accessibile tramite:", "La rete Tor"],
  [
    "L’insieme delle misure adottate per proteggere i dati durante la loro trasmissione attraverso una serie di reti interconnesse:",
    "Internet Security",
  ],
  [
    "Quali aspetti non sono da considerare fondamentali nella progettazione di un sistema di sicurezza:",
    "Posizione fisica del server",
  ],
  [
    "Un attacco alla sicurezza è:",
    "Qualsiasi azione che compromette la sicurezza delle informazioni",
  ],
  ["Una minaccia è:", "Un potenziale pericolo"],
  [
    "Un attacco passivo tenta di:",
    "Rilevare o utilizzare le informazioni del sistema ma non agisce sulle sue risorse",
  ],
  [
    "Quando un sistema è sottoposto ad un attacco passivo:",
    "I messaggi sono inviati e ricevuti in maniera apparentemente normale",
  ],
  [
    "In un attacco passivo di analisi del traffico:",
    "L'attaccante riesce ad estrarre informazioni sul tipo di trasmissione",
  ],
  [
    "Un attacco attivo prevede:",
    "La modifica del flusso dei dati o la creazione di un flusso falsificato",
  ],
  ["Quali di questi attacchi non è attivo:", "Analisi del traffico"],
  [
    "Un attaccante tenta di accedere all'account di posta di un altro utente, si tratta di un attacco di:",
    "Mascheramento",
  ],
  [
    "Quali di queste categorie non fa parte dei servizi di sicurezza:",
    "Privacy",
  ],
  [
    "Il servizio di autenticazione garantisce:",
    "L'autenticità di una comunicazione",
  ],
  [
    "Il servizio di controllo degli accessi definisce:",
    "Chi può avere accesso a una risorsa, in quali condizioni può farlo e cosa può farne",
  ],
  [
    "Quale servizio si occupa di proteggere il flusso dei dati dall'analisi:",
    "Segretezza del traffico",
  ],
  [
    "Il servizio di Integrità dei dati garantisce che:",
    "I dati ricevuti non sono stati modificati",
  ],
  [
    "Il servizio di Non Ripudiabilità impedisce che:",
    "Il mittente neghi di aver inviato il messaggio",
  ],
  ["I Meccanismi di Sicurezza si dividono in:", "Specifici e pervasivi"],
  [
    "Il Controllo dell'Instradamento è:",
    "Un Meccanismo di Sicurezza da utilizzare nel caso si sospetti di essere sottoposti ad attacco in certi punti della rete",
  ],
  [
    "I Meccanismi di Sicurezza pervasivi sono:",
    "Applicabili a diversi servizi di sicurezza",
  ],
  [
    "Nel modello generale per la sicurezza di rete esistono sempre:",
    "Un componente per la trasformazione delle informazioni",
  ],
  [
    "Cosa si intende per crittografia simmetrica:",
    "Cifratura e decifratura usano la stessa chiave",
  ],
  [
    "Cosa si intende col termine criptologia:",
    "L''insieme di crittografia e analisi crittografica",
  ],
  [
    "Quali di questi elementi non fa parte del modello di cifratura simmetrico:",
    "Terza parte fidata",
  ],
  [
    "Quale delle seguenti affermazioni è vera:",
    "La chiave deve restare segreta",
  ],
  [
    'L\'attacco "Testo in chiaro noto" prevede:',
    "La disponibilità di più coppie di testo in chiaro e cifrato",
  ],
  [
    'L\'attacco "Testo in chiaro scelto" prevede:',
    "La possibilità per il criptanalista di scegliere il testo in chiaro da cifrare",
  ],
  [
    "Nel caso di chiave a 56 bit, l'attacco a forza bruta (106 crittografie/µs), per avere successo, impiega:",
    "Circa 10 ore",
  ],
  [
    "Nella cifratura di Giulio Cesare che cosa si può dire dell'attacco a forza bruta:",
    "La conoscenza della lingua del messaggio dà un vantaggio a questo tipo di attacco",
  ],
  [
    "DJBP è un testo cifrato, secondo la cifratura di Giulio Cesare, del seguente testo in chiaro:",
    "CIAO",
  ],
  [
    "Conoscendo la seguente coppia testo in chiaro/testo cifrato BASE/AZRD secondo la cifratura di Giulio Cesare, determinare la chiave segreta K:",
    "25",
  ],
  [
    "La cifratura monoalfabetica si presenta come:",
    "La cifratura di Cesare ma con un numero di chiavi pari a 26!",
  ],
  ["La cifratura Playfair opera:", "Sui digrammi"],
  [
    "Nella cifratura Playfair una coppia di lettere viene:",
    "Codificata in una coppia di lettere dipendente dalla posizione relativa di tali lettere nella tabella di cifratura",
  ],
  [
    "La cifratura di Vernam prevede:",
    "Una chiave lunga quanto il testo in chiaro e un'operazione di XOR",
  ],
  [
    "Dato K=1101 e P=1101 determinare il testo cifrato:",
    "Il testo cifrato è 0000",
  ],
  [
    "La tecnica One-Time Pad è inviolabile in quanto:",
    "La chiave è lunga quanto il testo cifrato e usata una sola volta",
  ],
  ["La tecnica Rail Fence è:", "Una tecnica a trasposizione"],
  [
    "Il seguente testo cifrato BOAOTNUNFRUA secondo la tecnica Rail Fence equivale al testo in chiaro:",
    "Buona fortuna",
  ],
  [
    "Il seguente testo cifrato ASTENAIXTIUTTLAY secondo la tecnica di trasposizione a righe (4 righe e chiave K=3124) equivale al testo in chiaro:",
    "Tanti saluti a te xy",
  ],
  [
    "Quale affermazione è sbagliata:",
    "Nelle macchine a rotazione l'input di una cifra non determina un cambiamento di stato della macchina",
  ],
  [
    "La cifratura a blocchi è:",
    "Basata sull'elaborazione di un blocco di testo in chiaro",
  ],
  [
    "La cifratura a blocchi ideale non è praticabile perché:",
    "La chiave sarebbe molto lunga",
  ],
  [
    "La cifratura di Feistel:",
    "Usa una dimensione del blocco e della chiave praticabile",
  ],
  [
    "La cifratura di Feistel mette in pratica i concetti di:",
    "Diffusione e confusione",
  ],
  [
    "Nella cifratura di Feistel cosa accade tra una fase e la successiva:",
    "La parte RE<sub>i</sub> viene sostituita nella parte LE<sub>i+1</sub>",
  ],
  [
    "Nella cifratura di Feistel accade che:",
    "La parte LE<sub>i</sub> va in XOR con F(RE<sub>i</sub>, K<sub>i+1</sub>)",
  ],
  [
    "Nella decifratura di Feistel si ha che:",
    "Le sottochiavi si usano in ordine inverso",
  ],
  [
    "Nella decifratura di Feistel quale delle seguenti proprietà permette la generazione del corretto input della fase (i-1)-esima:",
    "F(RE<sub>i-1</sub>, K<sub>i</sub>) ⊕ F(RE<sub>i-1</sub>, K<sub>i</sub>)=0",
  ],
  [
    "Quale di queste affermazioni sulla nascita del DES non è corretta:",
    "Usava una cifratura diversa dalla decifratura",
  ],
  [
    "Uno dei principali dubbi su DES riguardava:",
    "La ridotta dimensione della chiave rispetto a quello dell'algoritmo iniziale",
  ],
  [
    "L'algoritmo DES riceve in input:",
    "Blocco dati di 64 bit e chiave di 56 bit",
  ],
  ["L'algoritmo DES:", "Si basa sulla cifratura di Feistel"],
  [
    "Nell'algoritmo DES i dati subiscono una permutazione iniziale:",
    "Basata su una tabella",
  ],
  [
    "I 64 bit in input a ciascuna fase:",
    "Vengono divisi in due metà, di cui una non viene elaborata ma solo scambiata di posto",
  ],
  [
    "In ciascuna fase la parte R<sub>i-1</sub>:",
    "Viene inizialmente espansa a 48 bit e permutata",
  ],
  [
    "In ciascuna fase la parte R<sub>i-1</sub>:",
    "Dopo essere stata espansa e permutata va in XOR con la sottochiave K<sub>i</sub>",
  ],
  [
    "Nella funzione S-box i 6 bit di input sono così usati nella tabella di permutazione:",
    "Il 1° e il 6° indicano la riga, mentre quelli dal 2° al 5° individuano la colonna",
  ],
  [
    "Nella generazione della chiave DES:",
    "8 bit dei 64 che si trovano nelle posizioni multiple di 8 sono scartati",
  ],
  [
    "I 56 bit della chiave DES:",
    "Sono divisi in due metà ciascuna delle quali subisce delle trasformazioni indipendenti",
  ],
  [
    'Con il termine "effetto valanga" si intende.:',
    "Testi in chiaro che differiscono di pochi bit sono codificati in testi cifrati molto diversi fra loro seppur codificati con la stessa chiave",
  ],
  [
    "L'algoritmo AES risolve il difetto di 3DES di:",
    "Implementazione software molto lenta",
  ],
  [
    "Quale delle seguenti affermazioni è falsa:",
    "L'algoritmo Rijndael si basa sui blocchi di Feistel",
  ],
  [
    "L'algoritmo AES usa:",
    "Una dimensione di blocco di 128 bit e chiave di 128 bit",
  ],
  ["L'algoritmo AES si basa su:", "Fasi composte da quattro funzioni"],
  ["Nella parametrizzazione di AES, una word corrisponde a:", "32 bit"],
  [
    "Nella funzione di Byte substitution:",
    "L'operazione si basa su una S-box composta da 256 valori",
  ],
  [
    "Nella funzione di Shift rows:",
    "Si eseguono degli spostamenti circolari a sinistra ma la prima riga non cambia",
  ],
  [
    "Nella funzione di Mix columns:",
    "Ogni byte generato dipende da tutti e quattro i byte in colonna",
  ],
  [
    "Nella funzione di Add round key:",
    "Si esegue un'operazione di XOR bit a bit tra il testo e la chiave",
  ],
  ["L'espansione della chiave:", "Espande la chiave da 4 word a 44 word"],
  [
    "La crittografia multipla consiste in:",
    "Applicare più volte uno stesso algoritmo",
  ],
  [
    "Nella cifratura 2DES si ha che:",
    "Le due chiavi sono usate in ordine inverso in cifratura e decifratura",
  ],
  [
    "Il vantaggio di usare la cifratura multipla sta:",
    "Nel poter riutilizzare l'algoritmo base estendendone la sicurezza",
  ],
  [
    "Indicare quale relazione implicherebbe la riduzione ad una sola fase nel 2DES:",
    "E(K<sub>2</sub>,E(K<sub>1</sub>,P))=E(K<sub>3</sub>,P)",
  ],
  [
    "Indicare quale relazione descrive l'Attacco MitM:",
    "E(K<sub>1</sub>,P)=D(K<sub>2,</sub>C)",
  ],
  ["Nell'Attacco MitM si suppone di:", "Conoscere almeno una coppia (P, C)"],
  [
    "Nell'Attacco MitM si confrontano:",
    "Tutti i possibili testi cifrati con K<sub>1</sub> a partire da P con i corrispettivi testi decifrati con K<sub>2</sub> a partire da C",
  ],
  [
    "Quale delle seguenti affermazioni non è vera:",
    "Il 3DES è vulnerabile all'Attacco MitM",
  ],
  [
    "Indicare l'espressione corretta per la cifratura 3DES:",
    "C=E(K<sub>1</sub>,D(K<sub>2</sub>,E(K<sub>1</sub>,P)))",
  ],
  [
    "Quale delle seguenti espressioni identifica la compatibilità tra 3DEs e DES:",
    "C=E(K<sub>1</sub>,D(K<sub>1</sub>,E(K<sub>1</sub>,P)))",
  ],
  [
    "Le modalità di funzionamento della cifratura definiscono:",
    "Come vengono eseguite in sequenza le operazioni di cifratura",
  ],
  ["Quale fra le seguenti non è una modalità di cifratura:", "Output chaining"],
  [
    "Nella modalità Electronic Codebook non si usa:",
    "Blocchi di dimensione diversa",
  ],
  [
    "Lo svantaggio principale della modalità Electronic Codebook è:",
    "Lo stesso blocco di testo in chiaro produce lo stesso blocco di testo cifrato",
  ],
  [
    "Nella modalità Cipher Block Chaining come si risolvono i problemi di sicurezza di ECB:",
    "Mettendo in input il testo cifrato al passo precedente",
  ],
  [
    "Nella modalità Cipher Block Chaining quali requisiti ci sono sul vettore di inizializzazione:",
    "Deve essere noto al destinatario",
  ],
  [
    "Nella modalità Cipher Feedback cosa viene messo in input alla funzione di crittografia:",
    "Un registro a scorrimento di b bit (dimensione blocco)e la chiave K",
  ],
  [
    "Nella modalità Cipher Feedback il testo in chiaro è in XOR con:",
    "Con gli s bit più significativi del testo in uscita dalla cifratura",
  ],
  [
    "Nella modalità Output Feedback cosa cambia rispetto a Cipher Feedback:",
    "Nel registro a scorrimento vengono inseriti s bit che escono dalla cifratura al passo precedente e non quelli che escono dallo XOR con il testo in chiaro",
  ],
  [
    "Nella modalità Counter, quale di queste affermazioni è sbagliata:",
    "Il valore di ciascun contatore non cambia da blocco a blocco",
  ],
  [
    "Nell'uso della crittografia simmetrica in un ambiente distribuito cosa è cruciale definire:",
    "Il punto in cui usare la crittografia",
  ],
  [
    "In cosa differiscono la crittografia di canale e quella end-to-end:",
    "Nella crittografia end-to-end la cifratura viene eseguita tra i terminali finali",
  ],
  [
    "La crittografia di canale:",
    "Viene eseguita tra ogni collegamento vulnerabile",
  ],
  [
    "La principale complessità della crittografia di canale riguarda:",
    "La necessità di un grande numero di dispositivi di crittografia e di chiavi",
  ],
  [
    "Nella cifratura end-to-end sono protetti:",
    "I dati utente ma non il loro flusso",
  ],
  [
    "La cifratura end-to-end viene inserita a:",
    "I livelli più alti della gerarchia OSI",
  ],
  [
    "Quale delle seguenti modalità di distribuzione della chiave segreta non è praticabile:",
    "A sceglie una chiave e la invia a B",
  ],
  [
    "Nella crittografia end-to-end se ci sono N host che devono scambiarsi dati, quante chiavi sono necessarie:",
    "[N(N-1)]/2",
  ],
  [
    "Nel protocollo di distribuzione delle chiavi, perché l'utente A invia un nonce:",
    "Per identificare univocamente quella richiesta",
  ],
  [
    "Nel protocollo di distribuzione delle chiavi, cosa contiene il messaggio di risposta del KDC all'utente A:",
    "La chiave di sessione, il messaggio inviato da A e il messaggio da inviare a B cifrato con la chiave di B",
  ],
  [
    "La crittografia asimmetrica prevede:",
    "L'uso di due chiavi di cui una privata",
  ],
  [
    "La crittografia asimmetrica nasce per risolvere il problema:",
    "Della distribuzione delle chiavi e della firma digitale",
  ],
  [
    "Nella crittografia a chiave pubblica è computazionalmente impraticabile:",
    "Ricavare la chiave privata da quella pubblica",
  ],
  [
    "Nel caso di utilizzo della crittografia asimmetrica per la funzione di segretezza:",
    "Il mittente usa in cifratura la chiave pubblica del destinatario",
  ],
  [
    "Nel caso di utilizzo della crittografia asimmetrica per la funzione di segretezza, un eventuale attaccante può riuscire a stimare:",
    "La chiave privata del destinatario e il messaggio in chiaro",
  ],
  [
    "Nel caso di utilizzo della crittografia asimmetrica per la funzione di autenticazione:",
    "Il mittente usa in cifratura la propria chiave privata",
  ],
  [
    "Nel caso di utilizzo della crittografia asimmetrica per la funzione di autenticazione, un eventuale attaccante può riuscire a stimare:",
    "La chiave privata del mittente",
  ],
  [
    "Con la crittografia asimmetrica si riesce a garantire autenticazione e segretezza:",
    "Sì ma usando entrambe le coppie di chiavi del mittente e del destinatario",
  ],
  [
    "Nella crittografia asimmetrica l'operazione Y=fk(X) deve essere:",
    "Facile se X e K noti",
  ],
  ["La crittografia asimmetrica è vulnerabile a:", "Attacchi a forza bruta"],
  [
    "La sicurezza dell'algoritmo RSA sta:",
    "Nella difficoltà dell'operazione di fattorizzazione di grandi numeri",
  ],
  ["In RSA il valore n=p*q è:", "Pubblico e calcolato dall'utente"],
  ["In RSA , a quanto equivale ϕ(n):", "(p-1)*(q-1)"],
  ["In RSA, qual è il legame tra ϕ(n) e il valore e:", "MCD(ϕ(n),e)=1"],
  ["In RSA, qual è il legame tra il valore d e il valore e:", "E*d=1mod(ϕ(n))"],
  [
    "Quale operazione esegue il destinatario del messaggio cifrato C:",
    "Cdmodn=M",
  ],
  [
    "Quale proprietà dell'aritmetica modulare si usa in RSA nella cifratura/decifratura:",
    "[(a mod n)*(b mod n)] mod n =(a*b) mod n",
  ],
  [
    "In RSA, cosa permette di fare l'algoritmo di Miller-Rabin:",
    "Determinare i numeri primi p e q",
  ],
  [
    "Quali operazioni complesse deve effettuare un utente in RSA:",
    "La scelta dei numeri primi p e q",
  ],
  [
    "In RSA, cosa permette di fare l'algoritmo di Euclide esteso:",
    "Selezionare e o d e calcolare l'altro valore",
  ],
  [
    "Uno dei principali usi della crittografia asimmetrica è:",
    "La distribuzione delle chiavi segrete",
  ],
  [
    "La distribuzione delle chiavi pubbliche non avviene:",
    "Mediante la crittografia simmetrica",
  ],
  [
    "Nella distribuzione delle chiavi pubbliche, quale vantaggio dà usare i certificati rispetto al caso di adottare un'autorità di distribuzione:",
    "Evita interazioni continue con l'autorità di distribuzione",
  ],
  [
    "Nella distribuzione delle chiavi segrete, si usa la crittografia asimmetrica perché:",
    "Poi si può usare la crittografia simmetrica che è più veloce",
  ],
  [
    "Nella distribuzione semplice della chiave segreta fra due utenti A e B, cosa invia l'utente A all'utente B per iniziare il dialogo:",
    "La sua chiave pubblica e il suo identificativo",
  ],
  [
    "Nella distribuzione semplice della chiave segreta fra due utenti A e B, cosa invia l'utente B all'utente A in risposta al primo invio dell'utente A:",
    "La chiave segreta di sessione da lui (utente B) generata, cifrata con la chiave pubblica dell'utente A",
  ],
  [
    "Lo scambio di chiavi Diffie-Hellman è reso sicuro da:",
    "La difficoltà nel calcolo dei logaritmi discreti",
  ],
  [
    "Nello scambio di chiavi Diffie-Hellman, i valori q e a sono:",
    "Il valore q è un numero primo e a è un valore intero",
  ],
  [
    "Nello scambio di chiavi Diffie-Hellman, i valori q e a sono:",
    "Entrambi pubblici",
  ],
  [
    "Nello scambio di chiavi Diffie-Hellman, con un attacco a forza bruta l'attaccante dovrebbe calcolare Ya = a (Xa)  mod q conoscendo:",
    "Ya, il valore a e il valore q",
  ],
  [
    "La firma digitale per l'autenticazione soddisfa il requisito:",
    "Ripudio del mittente",
  ],
  ["La crittografia simmetrica può garantire:", "Segretezza e autenticazione"],
  [
    "La crittografia asimmetrica che usa in cifratura la chiave pubblica del destinatario può garantire:",
    "Segretezza ma non autenticazione",
  ],
  [
    "La crittografia asimmetrica che usa in cifratura la chiave privata del mittente può garantire:",
    "Autenticazione ma non segretezza",
  ],
  [
    "Per garantire segretezza, autenticazione e firma, in cifratura asimmetrica si devono usare:",
    "La chiave privata del mittente e poi la chiave pubblica del destinatario",
  ],
  ["Il codice MAC garantisce:", "L'autenticazione"],
  [
    "Il codice MAC per garantire la segretezza ha bisogno di:",
    "Due chiavi distinte",
  ],
  [
    "Qual è la differenza sostanziale fra un codice MAC e una funzione hash:",
    "La funzione hash non dipende da una chiave",
  ],
  [
    "La funzione hash, integrata con la cifratura simmetrica, riesce a garantire:",
    "L'autenticazione e la segretezza",
  ],
  [
    "Con la sola funzione hash si riesce a garantire:",
    "L'autenticazione ma le due parti devono condividere un valore segreto",
  ],
  ["Un codice MAC è caratterizzato da una funzione del tipo:", "MAC=C(K,M)"],
  ["La funzione usata per il codice MAC è:", "Molti-a-uno"],
  [
    "Supponiamo di avere un codice MAC con una chiave lunga k=64 bit e un checksum lungo n=16 bit, quante coppie messaggio-checksum dovrebbe conoscere in media un attaccante per riuscire a individuare la chiave con un attacco a forza bruta:",
    "4",
  ],
  [
    "Nel caso di MAC basato su crittografia DES e CBC, il checksum di uscita è costituito da:",
    "L'output della cifratura DES applicata allo XOR fra l'ultimo blocco del messaggio e la cifratura DES al penultimo passo",
  ],
  [
    "Quale dei seguenti non è un requisito dei codici MAC:",
    "Indicato con n il numero di bit di un codice MAC, la probabilità di collisione deve essere 1/n",
  ],
  [
    "Quale delle seguenti espressioni non rappresenta una funzione hash:",
    "G(k,M)=h",
  ],
  [
    "Nel caso di funzione hash basata sullo XOR di 4 blocchi di messaggio, ciascuno da 3 bit, si ha che:",
    "L'hash è costituto da 3 bit",
  ],
  [
    "Nel caso di funzione hash basata sullo XOR di blocchi di messaggio da 3 bit ciascuno, se un attaccante ha intercettato un hash H=010 quale dei seguenti falsi messaggi M' (da due blocchi) può inviare affinché M' sia accettato come valido rispetto a tale hash H:",
    "M=[111; 101]",
  ],
  [
    "Nel caso di 'attacco a compleanno' nei confronti di un codice hash a 48 bit, l'attaccante deve generare un numero di messaggi fraudolenti F pari a:",
    "F=2<sup>24</sup>",
  ],
  [
    "Il 'paradosso del compleanno' stabilisce che:",
    "Esiste una probabilità del 50% che in un gruppo di circa 23 persone ve ne siano due nate lo stesso giorno",
  ],
  [
    "La struttura di base di una funzione hash come SHA-512 è costituita da:",
    "L'applicazione ripetuta in cascata di una stessa funzione di compressione",
  ],
  [
    "Negli algoritmi hash di tipologia SHA, il numero delle fasi è dell'ordine di:",
    "Circa 100",
  ],
  [
    "Negli algoritmi hash di tipologia SHA, esiste un limite sulla lunghezza del messsaggio in ingresso:",
    "Sì, devono essere minori di 264 o 2128 dipende dalle versioni",
  ],
  ["L'algoritmo SHA-512 prende in input:", "Blocchi di messaggio di 1024 bit"],
  [
    "L'algoritmo SHA-512 prevede di usare dei bit di riempimento per adattare:",
    "La lunghezza del messaggio ad un numero di blocchi multiplo di 1024",
  ],
  [
    "L'algoritmo SHA-512 utilizza un buffer a 8 registri che serve per:",
    "Appoggiare l'elaborazione di ogni fase",
  ],
  [
    "Nell'algoritmo SHA-512 il digest di uscita è ottenuto:",
    "Dopo aver eseguito l'elaborazione  del modulo F ed effettuato la somma con l'output allo stadio precedente, per tutti gli N blocchi del messaggio",
  ],
  [
    "Nell'algoritmo SHA-512, le 80 word sono generate a partire da:",
    "Da un blocco del messaggio",
  ],
  [
    "Quale affermazione sulle funzioni di fase interne al modulo F è falsa:",
    "Prendono in input il buffer dei registri",
  ],
  [
    "Le funzioni di fase interne al modulo F eseguono sostanzialmente:",
    "Operazioni logiche, shift e somme modulari",
  ],
  ["L'algoritmo HMAC è:", "Un algoritmo MAC basato su una funzione hash"],
  [
    "Quali di queste affermazioni è vera per l'algoritmo HMAC:",
    "La sicurezza di HMAC dipende direttamente dalla sicurezza della funzione di hash",
  ],
  [
    "Nell'algoritmo HMAC, i valori ipad e opad servono per:",
    "Invertire lo stato di metà dei bit della chiave",
  ],
  [
    "Nell'algoritmo HMAC, la funzione di hash viene utilizzata:",
    "2 volte con vettore di inizializzazione uguale",
  ],
  [
    "Nell'algoritmo HMAC, la chiave K+ viene ricavata a partire dalla chiave K:",
    "Attraverso un'operazione di riempimento a sinistra con una serie di 0 fino ad avere lunghezza uguale a quello del blocco",
  ],
  [
    "Nell'algoritmo HMAC, la chiave K+ viene usata:",
    "Integrata nel messaggo come input per la funzione di hash",
  ],
  [
    "Nell'algoritmo HMAC, l'uscita del primo hash viene:",
    "Estesa da n (lunghezza del digest) a b bit (lunghezza del blocco)",
  ],
  [
    "Nell'algoritmo HMAC, l'input del primo hash è costituto da:",
    "(L+1) blocchi",
  ],
  [
    "I codici MAC basati su algoritmi di crittografia e cifratura a blocchi possono superare le loro debolezze in termini di sicurezza tramite:",
    "L'introduzione di una doppia chiave generata a partire da una singola",
  ],
  ["L'algortimo CMAC usa come cifratura:", "DES o AES"],
  [
    "Perché è necessaria la firma digitale:",
    "Per proteggere il mittente e il destinatario",
  ],
  [
    "Quali dei seguenti non è un requisito per la firma digitale:",
    "Deve essere indipendente dal messaggio",
  ],
  [
    "Nella firma digitale diretta gli attori in gioco sono:",
    "Il mittente e il destinatario",
  ],
  [
    "La firma digitale diretta può essere realizzata:",
    "Solo con la cifratura a chiave pubblica",
  ],
  [
    "Nella firma digitale diretta è possibile usare solo una coppia di chiavi pubblica/privata:",
    "Sì, usando la coppia del mittente ma senza garantire la segretezza",
  ],
  [
    "Nella firma digitale diretta, il punto debole è costitito da:",
    "Gestione della chiave del mittente",
  ],
  [
    "La firma digitale arbitrata garantisce:",
    "Un'altra modalità di firma digitale",
  ],
  [
    "Nella firma digitale arbitrata con chiave simmetrica si ha che:",
    "Il mittente e il destinatario condividono la stessa chiave e ciascuno di loro una chiave diversa con l'arbitro",
  ],
  [
    "Nella firma digitale arbitrata con chiave simmetrica si ha che:",
    "L'arbitro non legge il messaggio",
  ],
  [
    "Nella firma digitale arbitrata con chiave simmetrica si ha che:",
    "L'arbitro aggiunge un timestamp alla firma del mittente",
  ],
  [
    "Il protocollo Kerberos V4, in una autenticazione client-server, si basa su:",
    "Due server di autenticazione centralizzati",
  ],
  [
    "I server di autenticazione svolgono la funzione di:",
    "Garantire utenti e server",
  ],
  [
    "In Kerberos V4 il TGS ha la funzione di:",
    "Consentire all'utente di accedere ad un altro servizio all'interno della stessa sessione",
  ],
  [
    "In Kerberos V4, la risposta dell'AS alla richiesta del client è:",
    "Cifrata con cifratura simmetrica",
  ],
  [
    "In Kerberos V4, la risposta dell'AS alla richiesta del client contiene fondamentalmente:",
    "La chiave K<sub>c,tgs</sub> e il Ticket<sub>tgs</sub>",
  ],
  [
    "In Kerberos V4, il Ticket<sub>tgs</sub> è cifrato con:",
    "La chiave segreta del server TGS",
  ],
  [
    "In Kerberos V4, l'AutenticatoreC inviato dal client al TGS è cifrato con:",
    "La chiave K<sub>c,tgs</sub>",
  ],
  [
    "In Kerberos V4, il server TGS invia al client:",
    "La chiave per dialogare con il server e il Ticket per il server",
  ],
  [
    "In Kerberos V4, il TicketV per il server contiene:",
    "La chiave di dialogo tra client e server",
  ],
  [
    "In Kerberos V4, il server, per garantire reciproca autenticazione, può inviare al client:",
    "Il timestamp inviato dal client, incrementato di 1 e cifrato con la chiave tra loro condivisa",
  ],
  [
    'Con il termine "intrusione" si intende:',
    "Un accesso non consentito ad un sistema e alla informazioni in esso contenute",
  ],
  [
    "Il file delle password generalmente contiene:",
    "Nome utente e password cifrata",
  ],
  [
    'Con il termine "malware" si intende:',
    "Un programma nascosto all’interno di un altro o indipendente, creato per compiere azioni illegittime e dannose",
  ],
  [
    "Quando un malware si replica effettua:",
    "La copia di se stesso sullo stesso computer o su altri",
  ],
  [
    "Quale delle seguenti affermazioni è falsa:",
    "Tutti i malware si replicano",
  ],
  ["Quale di questi malware è specifico della posta elettronica:", "Spammer"],
  ["Quale dei seguenti malware non è in realtà un software:", "Backdoor"],
  [
    "Un virus è un programma che:",
    "Modifica altri programmi e contenuti eseguibili alterandoli; effettua copie di se stesso",
  ],
  [
    "La fase di propagazione del virus coincide con:",
    "L'inserimento di copie di se stesso in altri programmi, dischi o memorie",
  ],
  [
    'Con il termine "virus polimorfico" si intende:',
    "Un virus che quando si replica modifica il suo aspetto ma esegue la stessa tipologia di attacco",
  ],
  ["La caratteristica principale dei worm è:", "Propagarsi in maniera attiva"],
  [
    "In quale modo un worm decide come propagarsi:",
    "Scansionando la rete sulla base di criteri predefiniti dall'hacker",
  ],
  [
    "La Bomba Logica costituisce nello specifico:",
    "Il codice incorporato in un malware e programmato per attivarsi",
  ],
  [
    "Con il termine Cavallo di Troia si indica un malware:",
    "All'interno di un altro programma apparentemente innocuo",
  ],
  ["Quale dei seguenti non è un malware vero e proprio:", "Backdoor"],
  [
    "Quale delle seguenti definizioni descrive meglio il Backdoor:",
    "Punto di accesso segreto di un programma che viene individuato da un hacker",
  ],
  [
    "Il malware Rootkit permette:",
    "Di mantenere coperto un accesso illecito con profilo root su un certo sistema",
  ],
  [
    "Il malware Keylogger è in grado di:",
    "Di catturare i caratteri inseriti da tastiera",
  ],
  [
    "Un attacco DDoS cerca di minare:",
    "Le risorse interne di un server e/o le risorse di rete verso un certo servizio",
  ],
  [
    "Nell'attacco DDoS di tipo SYN flood si inviano pacchetti TCP/IP SYN:",
    "Con indirizzo del sistema target corretto ma indirizzo di ritorno errato",
  ],
  [
    "Il Digital Forensics è:",
    "Una branca della scienza forense che analizza prove digitali recuperate da sorgenti digitali",
  ],
  [
    "La Mobile Device Forensics si occupa di:",
    "Recuperare prove digitali da dispositivi mobili",
  ],
  [
    "La Network Forensics si occupa di:",
    "Monitorare e analizzare il traffico di rete fra computer",
  ],
  ["Il Multimedia Forensics è un settore specifico del:", "Digital Forensics"],
  ["Il Multimedia Forensics analizza:", "Contenuti multimediali"],
  [
    "Il principio che sta alla base del MMForensics è:",
    "Ogni elaborazione effettuata su un documento multimediale lascia una traccia",
  ],
  [
    "Nell'analisi di un contenuto multimediale, le tecniche di MM Forensics di solito dispongono di:",
    "Nessun contenuto di riferimento",
  ],
  [
    "Le due macro-aree del MM Forensics riguardano:",
    "Identificazione della sorgente di acquisizione e analisi dell'autenticità di un contenuto",
  ],
  [
    "Esistono tecniche di MM Forensics che permettono di:",
    "Determinare la sorgente di acquisizione che ha generato un determinato documento multimediale",
  ],
  [
    "Esistono tecniche di MM Forensics che consentono di determinare se un'immagine digitale è:",
    "Contraffatta e di localizzare l'eventuale alterazione",
  ],
  [
    "Esistono tecniche di MM Forensics che permettono di stabilire se:",
    "Un'immagine proviene da una fotocamera o da uno scanner",
  ],
  [
    "Le tecniche di MM Forensics non consentono di stabilire se:",
    "Un'immagine è stata acquisita dal proprietario di un certo dispositivo",
  ],
  [
    "Quali di questi processi o sistemi lascia una traccia sull'immagine durante la fase di acquisizione:",
    "Il sensore e il processing interno alla fotocamera",
  ],
  [
    "A cosa è dovuta la traccia relativa alla distorsione della lente:",
    "Alla distorsione radiale indotta dal fatto che la lente non è ideale",
  ],
  ["Il CFA serve a:", "Filtrare le componenti di colore"],
  [
    'Cosa si ntende con il termine "demosaicking":',
    "Un'operazione di generazione di valori di colore",
  ],
  [
    "Il rumore PRNU è generato da:",
    "Una risposta differente dei CCD all'intensità di luce",
  ],
  [
    "Il rumore PRNU presenta le seguenti caratteristiche:",
    "Moltiplicativo e sistematico",
  ],
  [
    "Il fingerprint di una fotocamera si ottiene:",
    "Attraverso un'operazione di stima estraendo i PRNU da alcune immagini scattate dalla fotocamera stessa",
  ],
  [
    "Esistono tecniche di MM Forensics che consentono di determinare se un'immagine:",
    "Proviene da un social network ed eventualmente risalire alle condivisioni",
  ],
  [
    "Le tecniche di MM Forensics permettono di stabilire se un contenuto multimediale sia o meno un falso basandosi su:",
    "L'analisi di caratteristiche intrinseche di un contenuto multimediale",
  ],
  [
    "Le tecniche di MM Forensics stabiliscono se un'immagine è reale o è un fake ricorrendo all'uso di:",
    "Analisi di elementi fisici o di descrittori relativi all'immagine",
  ],
  [
    "Alcune tecniche di MM Forensics, per la rilevazione di immagini fake, basate sull'analisi degli elementi fisici presenti nell'immagine stessa, considerano:",
    "L'inconsistenza della direzione di luce",
  ],
  [
    "Le tecniche di MM Forensics, basate sull'analisi delle traiettorie degli oggetti, sono utilizzate per:",
    "Determinare se una sequenza video è manipolata",
  ],
  [
    "Le tecniche di MM Forensics basate sui descrittori servono principalmente per individuare l'attacco di tipo:",
    "Copy-move",
  ],
  [
    "Nel MM Forensics, quali sono generalmente le fasi operative per la localizzazione in un'immagine di un attacco copy-move:",
    "Calcolo dei descrittori, matching, clustering e localizzazione",
  ],
  [
    "Le tecniche di MM Forensics, basate sull'analisi della doppia compressione JPEG, sono specifiche per individuare in un'immagine quale tipo di attacco:",
    "Splicing",
  ],
  [
    "In MM Forensics, nel caso della tecnica JPEG Ghost, si procede calcolando successive differenze fra:",
    "L'immagine da analizzare e le sue versioni ricompresse a differenti fattori di qualità",
  ],
  [
    "Nel caso di uso di tecniche di MM Forensics in applicazioni per il cyberbullismo,si può riuscire a:",
    "Determinare un collegamento tra il dispositivo di acquisizione di una foto/video di un atto di bullismo e la foto/video stesso",
  ],
  [
    "Nel caso di attacchi di Adversarial Machine Learning, l'attaccante ha lo scopo di:",
    "Indurre in errore il classificatore, basato su ML, mantenendo percettivamente minima la modifica apportata all'immagine di ingresso",
  ],
  [
    "La Blockchain è:",
    "Una tecnologia che utilizza strumenti crittografici e DLT",
  ],
  [
    "I vantaggi base offerti da Blockchain sono:",
    "Transazioni quasi istantanee, senza intermediari e costi ridotti",
  ],
  [
    "Quali delle seguenti affermazioni su Blockchain è errata:",
    "Ogni blocco della catena contiene informazioni su delle transazioni ma non si vedono le cifre coinvolte",
  ],
  [
    "Ogni blocco della Blockchain contiene:",
    "Hash del blocco precedente e di quello attuale, le transazioni e anche l'hash di quello successivo",
  ],
  [
    "Per generare l'hash di un blocco della Blockchain, i dati che vengono passati in input all'hash sono:",
    "I dati delle transazioni del blocco attuale, l'hash del blocco precedente e il nonce",
  ],
  [
    "In Blockchain, cosa rappresenta il nonce:",
    "Il numero soluzione della PoW",
  ],
  [
    "In Blockchain, cos'è la Proof-of-Work:",
    "Un problema crittografico computazionalmente complesso ma la cui verifica del risultato ottenuto è molto semplice",
  ],
  [
    "In Blockchain, in cosa consiste la Proof-of-Work:",
    "Trovare un nonce tale che l'hash del nonce stesso e di altri dati produca un codice hash con caratteristiche specifiche",
  ],
  [
    "Se un attaccante modifica un dato di un blocco della Blockchain succede che:",
    "Il blocco attuale e tutti quelli successivi della Blockchain sono invalidati",
  ],
  [
    "Un attaccante che modifica un blocco della Blockchain deve:",
    "Ritrovare un nuovo nonce e conseguentemente un diverso hash valido",
  ],
  [
    "In Blockchain, la sicurezza è data da:",
    "La rete P2P e il Ledger distribuito",
  ],
  [
    'In Blockchain, un attaccante che sia riuscito a ricalcolare una blockchain "modificata" è in grado di:',
    "Alterare il Ledger distribuito solo se guadagna il consenso della metà più uno dei nodi della rete P2P",
  ],
  [
    "In Blockchain, ognuno dei nodi della rete P2P possiede:",
    "Una versione del Ledger sincronizzata",
  ],
  [
    'Il processo di "mining" consiste in:',
    "Risolvere la PoW e ottenere Bitcoin",
  ],
  [
    'I "miner" sono:',
    "Nodi specifici della rete P2P che si occupano di risolvere le PoW",
  ],
  [
    'I "miner" svolgono il compito primario di:',
    "Risolvere un problema crittografico complesso",
  ],
  [
    'Una volta che un "miner" ha trovato la soluzione deve:',
    "Pubblicarla agli altri nodi",
  ],
  [
    "In una transazione blockchain, i nodi della rete verificano:",
    "La correttezza della transazione",
  ],
  [
    'Se un "miner" che sta risolvendo una PoW viene battuto sul tempo da un altro deve:',
    "Controllare la soluzione trovata dall'altro",
  ],
  [
    "Stando ai dati di Giugno 2019, la dimensione della blockchain di Bitcoin era dell'ordine di:",
    "100 GB",
  ],
];


