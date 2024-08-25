let box = document.querySelector(".box");
let input = document.querySelector("input");
let a;
input.addEventListener("input", function () {
  const inputValue = input.value.toLowerCase().trim();
  box.innerHTML = "";

  if (inputValue !== "") {
    const filteredItems = all.filter((e) =>
      e[0].toLowerCase().includes(inputValue)
    );

    const htmlElements = filteredItems.map(
      (
        e
      ) => `<div class="elemento"><div class="domanda">${e[0]}</div><div class="risposta">${e[1]}</div>
      </div>
    `
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
    "Python è un linguaggio di programmazione:",
    "di alto livello e interpretato",
  ],
  [
    "Nella programmazione orientata agli oggetti:",
    "si individuano le entità in un determinato contesto denominate oggetti",
  ],
  ["La versione attualmente in uso di Python è la:", "3.9.5"],
  ["L'IDLE di Python:", "È un ambiente di sviluppo  integrato"],
  ["Python permette di programmare:", "in script ed interactive mode"],
  [
    "La comparsa del prompt nella shell:",
    "indica che la shell è pronta per la prossima istruzione",
  ],
  ["Print:", "È una funzione"],
  ["Gli script Python hanno estensione:", ".py"],
  [
    "L'asterisco a fianco del nome del file nella finestra dello script sta ad indicare:",
    "che lo script non è stato salvato dopo le ultime modifiche",
  ],
  ["Untitled si riferisce:", "alla finestra dello script mode"],
  [
    "La sequenza corretta delle fasi in un programma è:",
    "input, elaborazione, output",
  ],
  [
    "Se ho necessità di utilizzare le virgolette in una stringa, in Python contrassegno la sequenza di caratteri con:",
    'triple virgolette """',
  ],
  [
    "I commenti:",
    "sono utilizzati dal programmatore per una migliore comprensione del codice sorgente",
  ],
  ["Nell'istruzione a=b:", "b può essere un valore numerico"],
  ["L'istruzione 3a_ = 10.5:", "contiene un errore"],
  [
    "A seguito delle istruzioni: a=10 A=20:",
    "il valore di a rimarrà invariato",
  ],
  [
    "In Python è possibile:",
    "utilizzare cifre numeriche nel nome della variabile, ma con delle limitazioni",
  ],
  [
    "La funzione type() permette:",
    "di conoscere il tipo di dato della variabile",
  ],
  ["La funzione input() di Python:", "restituisce stringhe"],
  [
    "La composizione di funzioni  in gergo informatico si chiama:",
    "nested function call",
  ],
  [
    "In Python per la divisione:",
    "si utilizzano l'operatore / e l'operatore //",
  ],
  ["L'operatore resto:", "fornisce il resto della divisione intera"],
  ["Per la conversione di misure di tempo e distanza si utilizza:", "il resto"],
  [
    "La precedenza degli operatori in Python è:",
    "parentesi, **, * / // %, + -",
  ],
  [
    "Il risultato di un operazione con tipi misti int e float è:",
    "di tipo float",
  ],
  ["Il risultato dell'operazione int(6.7) è:", "6"],
  [
    "Il numero dei parametri da stampare nella funzione print():",
    "non ha limiti",
  ],
  [
    'L\'istruzione print("ciao","casa",sep=\'m\') produce come risultato a schermo:',
    "ciaomcasam",
  ],
  [
    "L'istruzione print(\"ciao\",\"casa\",sep='.', end =':') produce come risultato a schermo:",
    "ciao.casa:",
  ],
  [
    'Lo specificatore di formato "10,.3e" indica che il numero da stampare:',
    "occuperà 10 caratteri, avrà il separatore delle miglia, avrà 3 cifre decimali e sarà espresso in notazione scientifica",
  ],
  [
    "La struttura decisionale differisce dalla struttura sequenziale perché permette di:",
    "controllare l'ordine in cui vengono eseguite le istruzioni",
  ],
  [
    "L'istruzione if a=b: print('a e b sono uguali'):",
    "è errata perché non confronta le due variabili",
  ],
  [
    "Per risolvere il problema del maggiore tra 4 numeri ho necessità di utilizzare:",
    "7 blocchi if-else",
  ],
  [
    "Il risultato logico dell'operazione a and b è vero quando:",
    "la condizione a e la condizione b sono vere",
  ],
  [
    "Per determinare se un numero è al di fuori di un intervallo è più corretto utilizzare l'operatore:",
    "or",
  ],
  ["Il ciclo while è conosciuto anche come:", "pre-test loop"],
  ["Le istruzioni a=-1 while a&lt;0 a=a-1:", "è un ciclo infinito"],
  ["La funzione range():", "ritorna un oggetto iterabile"],
  [
    "I tre argomenti per la funzione range() rappresentano, rispettivamente:",
    "limite inferiore (incluso), limite superiore (escluso), incremento",
  ],
  [
    "L'istruzione for i in range(1,100,5): print(i) visualizza a schermo:",
    "20 valori",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36523_EsercitStrut_PEG/img/testImage_1684234383695.png" title="d1.png">:',
    "b è il maggiore",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36523_EsercitStrut_PEG/img/testImage_1684234400328.png" title="d2.png">:',
    "3",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36523_EsercitStrut_PEG/img/testImage_1684234411711.png" title="d3.png">:',
    "0",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36523_EsercitStrut_PEG/img/testImage_1684234422320.png" title="d4.png">:',
    "0",
  ],
  [
    "La formulax = -b/2a è la formula della/e soluzione/i nel caso in cui:",
    "delta = 0",
  ],
  ["La libreria math si importa per la funzione:", "radice quadrata"],
  [
    "Il ciclo di validazione dell'input serve a:",
    "utilizzare i valori dei dati corretti per una variabile",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36523_EsercitStrut_PEG/img/testImage_1684234436529.png" title="d8.png">:',
    "2.3",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36523_EsercitStrut_PEG/img/testImage_1684234444329.png" title="d9.png">:',
    "nulla",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36523_EsercitStrut_PEG/img/testImage_1684234707583.png" title="d10.png">:',
    "0",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36530_EsercitStrut_PEG/img/testImage_1684309003953.png" title="d1.png">:',
    "64 volte 'a'",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36530_EsercitStrut_PEG/img/testImage_1684309012657.png" title="d2.png">:',
    "72",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36530_EsercitStrut_PEG/img/testImage_1684309020529.png" title="d3.png">:',
    "48",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36530_EsercitStrut_PEG/img/testImage_1684309031640.png" title="d4.png">:',
    "84",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36530_EsercitStrut_PEG/img/testImage_1684309039178.png" title="d5.png">:',
    "75",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36530_EsercitStrut_PEG/img/testImage_1684309045791.png" title="d6.png">:',
    "un'eccezione",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36530_EsercitStrut_PEG/img/testImage_1684309053610.png" title="d7.png">:',
    "4",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36530_EsercitStrut_PEG/img/testImage_1684309060913.png" title="d8.png">:',
    "errato dal punto di vista logico",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36530_EsercitStrut_PEG/img/testImage_1684309070123.png" title="d9.png">:',
    "errato",
  ],
  [
    "La media pesata dei voti degli esami rispetto alla media semplice dei voti degli esami è:",
    "alle volte maggiore",
  ],
  [
    "Nell'esercizio da numero a cento con passo 2, supposto che il numero sia positivo, il massimo numero di somme è uguale a:",
    "50",
  ],
  [
    "Nell'esercizio da numero a cento con passo 2, supposto che il numero sia positivo e compreso tra 45 e 100, il massimo numero di somme è uguale a:",
    "28",
  ],
  [
    "Nell'esercizio da numero a cento con passo n, supposto che il numero sia negativo e compreso tra -45 e -100 e l'incremento sia compreso tra 23 e 72, il massimo numero di somme è uguale a:",
    "9",
  ],
  [
    "Nell'esercizio da numero a cento con passo n, supposto che il numero sia positivo e compreso tra 45 e 90 e l'incremento sia compreso tra 23 e 72, il massimo numero di somme è uguale a:",
    "3",
  ],
  [
    "Nell'esercizio da numero a cento con passo n, supposto che il numero sia negativo e compreso tra -45 e -100 e l'incremento sia compreso tra 23 e 72, il minimo numero di somme è uguale a:",
    "3",
  ],
  [
    "Nell'esercizio da numero a cento con passo n, supposto che il numero sia negativo e compreso tra -15 e -100 e l'incremento sia compreso tra 23 e 72, il minimo numero di somme è uguale a:",
    "2",
  ],
  [
    "Nell'esercizio da numero a cento con passo n, supposto che il numero sia positivo e compreso tra 45 e 90 e l'incremento sia compreso tra 23 e 72, il minimo numero di somme è uguale a:",
    "1",
  ],
  [
    "Riformulando l'intero algoritmo di somma di numeri relativi, per il confronto tra la somma dei numeri positivi e la somma dei numeri negativi per tenere traccia dell'importo maggiore tra i due è/sono sufficiente/i:",
    "1 variabile",
  ],
  [
    "Il numero minimo di variabili per esaminare l'andamento di una sequenza numerica è pari a:",
    "2",
  ],
  [
    "Il flag nell'esame dell'andamento di una sequenza numerica è necessario perché:",
    'indica lo "stato" di una particolare sottosequenza',
  ],
  ["Nell'istruzionea= b//3600 dove b sono i secondi, a rappresenta:", "le ore"],
  ["Nell'istruzionea= b%60 dove b sono i secondi, a rappresenta:", "i secondi"],
  [
    "Nell'istruzionea= (b//60)%60 dove b sono i secondi, a rappresenta:",
    "i minuti",
  ],
  [
    "Nell'istruzionea= (b//3600)/24 dove b sono i secondi, a rappresenta:",
    "i giorni",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36568_EsercitStrut_PEG/img/testImage_1684415298093.png" title="d5.png">:',
    "che la condizione num_suc&gt;=num_prec avviene durante una sottosequenza crescente",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36568_EsercitStrut_PEG/img/testImage_1684415305728.png" title="d6.png">:',
    "che la lunghezza della sottosequenza deve essere inizializzata",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36568_EsercitStrut_PEG/img/testImage_1684415312484.png" title="d7.png">:',
    "che la lunghezza della sottosequenza crescente deve essere incrementata",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36568_EsercitStrut_PEG/img/testImage_1684415320264.png" title="d8.png">:',
    "verificare che il numero inserito è maggiore di quello precedente",
  ],
  [
    "Il caso in cui cresc=1 e decresc=1:",
    "può avvenire per sottosequenze decrescenti",
  ],
  [
    "Se dal codice Python delle sottosequenze crescenti e decrescenti si eliminano le istruzioni cresc=0 e decresc=0 nelle strutture di selezione:",
    "vengono individuate al massimo solo due sottosequenze",
  ],
  [
    "Una funzione è caratterizzata da:",
    "nome, eventuali parametri, eventuale valore restituito",
  ],
  ["La funzione def somma(a,b): print(a+b) è:", "void"],
  [
    "Nel codice sorgente, i parametri che vengono passati alla funzione nella chiamata:",
    "possono avere lo stesso nome di quelli contenuti nella defizione della funzione",
  ],
  [
    "L'approccio top-down:",
    "prevede l'analisi del problema più complesso ed una successiva individuazione dei sottoproblemi",
  ],
  [
    "Le variabili locali:",
    'possono essere "visualizzate" da funzioni diverse da quella in cui sono state definite se vengono passate come parametri',
  ],
  [
    "Lo scope individua:",
    "la parte del programma che può accedere alla variabile",
  ],
  [
    "Nei linguaggi di programmazione incluso Python:",
    "È sconsigliato l'uso delle variabili globali e consigliato quello delle costanti globali",
  ],
  [
    "Per definire una costante globale in Python:",
    "non utilizzare la keyword global nel programma",
  ],
  ["I moduli:", "devono essere importati per poterli utilizzare"],
  ["Math:", "È un modulo della standard library"],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36573_EsercitSul_PEG/img/testImage_1684423549606.png" title="d1.png">:',
    "Sempre False",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36573_EsercitSul_PEG/img/testImage_1684423558249.png" title="d2.png">:',
    "non primo",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36573_EsercitSul_PEG/img/testImage_1684423569609.png" title="d3.png">:',
    "non primo",
  ],
  [
    "Il numero minimo di verifiche su un numero per vedere se è primo o meno sui primi 200 numeri è:",
    "100",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36573_EsercitSul_PEG/img/testImage_1684423591196.png" title="d5.png">:',
    "un'eccezione se l'ultima definizione è stato prodotto con due parametri",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36573_EsercitSul_PEG/img/testImage_1684423602814.png" title="d6.png">:',
    "ok",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36573_EsercitSul_PEG/img/testImage_1684423613013.png" title="d7.png">:',
    "ok in alcuni casi particolari",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36573_EsercitSul_PEG/img/testImage_1684423623306.png" title="d8.png">:',
    "un'eccezione",
  ],
  [
    "Nell'esercizio del calcolo del perimetro di un poligono per le coordinate dei punti sono necessarie minimo:",
    "6 variabili",
  ],
  [
    "Nell'esercizio del calcolo del perimetro di un poligono di N vertici, la funzione distanza() viene richiamata:",
    "N volte",
  ],
  [
    "Il simulatore di dadi:",
    "non prevede limiti nè sul numero di dadi da simulare, né sul numero di lanci",
  ],
  [
    "I sottoproblemi individuati:",
    "corrispondono indirettamente alle opzioni che verrano offerte all'utente",
  ],
  [
    "La gestione del menu:",
    "avviene tramite una struttura iterativa e una struttura decisionale",
  ],
  ["Solitamente l'opzione di uscita:", "È l'ultima opzione resa disponibile"],
  [
    "La funzione randint():",
    "È compresa nel modulo random e restituisce un numero casuale intero",
  ],
  [
    "Per stampare una stringa e un numero contenuto nella variabile a posso utilizzare la/e seguente/i istruzione/i:",
    'print("Risultato:"+str(a))print("Risultato", a)',
  ],
  ['L\'istruzione print("Media", format(m,".6f):', "È errata"],
  [
    "L'inizializzazione della variabile di scelta dell'opzione nel menu:",
    "si fa ad un valore fuori dall'intervallo logico delle opzioni",
  ],
  [
    "La funzione visualizza_menu():",
    "È opzionale e serve ad alleggerire il codice della funzione menu()",
  ],
  [
    "La funzione sessione_lanci() richiama la funzione lancia_dadi():",
    "indirettamente sessioni*num*lanci volte",
  ],
  ["Per i file binari:", "la decodifica dipende dall'estensione del file"],
  [
    "Scrittura e lettura su file corrispondono, rispettivamente, a:",
    "output e input su file",
  ],
  ["C:\\folder\\articolo.txt è:", "il nome fisico del file"],
  [
    "L'istruzione di apertura del file:",
    "deve indicare un solo modo di apertura",
  ],
  [
    "Il metodo write:",
    "appartiene all'oggetto file e riceve come parametro una stringa",
  ],
  [
    "A seguito di un'operazione di scrittura del file, al fine di procedere con un'operazione di lettura:",
    "sono necessarie sia la chiusura del file sia l'apertura in lettura",
  ],
  [
    "Il metodo rstrip serve:",
    "ad eliminare specifici caratteri al termine della stringa",
  ],
  [
    "I valori numerici possono essere scritti su un file se:",
    "si utilizza la funzione di casting str()",
  ],
  ["L'istruzione while line=='':", "non permette di leggere un file di testo"],
  ["Le istruzioni for linea in infile: a = int(linea):", "sono incomplete"],
  [
    "Un'eccezione è:",
    "un errore a tempo di esecuzione rilevabile con il traceback",
  ],
  [
    "Nel traceback si riporta:",
    "il nome del programma che ha sollevato l'eccezione, l'istruzione che ha sollevato l'eccezione, il tipo di eccezione, la linea dell'istruzione che ha sollevato l'eccezione",
  ],
  [
    "Il ciclo di validazione dell'input serve a:",
    "evitare errori logici sull'input",
  ],
  ["L'exception handler:", "È successivo all'except"],
  [
    "Il codice del gestore delle eccezioni:",
    "viene eseguito solo se sono state sollevate eccezioni",
  ],
  [
    "L'except senza l'indicazione del tipo di eccezione:",
    "si riporta come ultima",
  ],
  [
    "L'else opzionale è un blocco di istruzioni che viene eseguito:",
    "solo se nessuna eccezione viene sollevata",
  ],
  ["Il blocco di istruzioni: a = 6 b=3 media=a/b:", "ha un errore logico"],
  ["La clausola finally:", "si esegue sempre"],
  [
    "Se non sono previsti except per un determinato tipo di eccezione:",
    "il programma potrebbe terminare in modo brusco",
  ],
  [
    "Le fasi dell'attività di sviluppo dei programmi sono:",
    "analisi del problema, problem solving e formalizzazione della soluzione",
  ],
  [
    "Nella gestione del magazzino del caffè la descrizione e la quantità di caffè:",
    "sono memorizzate su righe diverse del file",
  ],
  [
    "Le attività da rendere disponibili alla proprietaria dell'azienda sono:",
    "5",
  ],
  [
    "Nella funzione di ricerca():",
    "È necessario sapere la descrizione del caffè",
  ],
  [
    "Nella funzione di modifica() per come analizzata:",
    "È obbligatorio utilizzare due file",
  ],
  ["L'istruzione outfile.write(3+'a') contiene:", "1 errore"],
  [
    "L'istruzione d=d.rstrip('\\n') serve a:",
    "eliminare un carattere alla fine della stringa",
  ],
  [
    "Nell'istruzione  os.remove(a):",
    "os è il modulo, remove è una funzione, a è il file",
  ],
  [
    "L'eccezione ValueError viene sollevata quando:",
    "si effettua un casting non consentito",
  ],
  [
    "L'eccezione FileNotFoundError viene sollevata quando:",
    "il file non esiste e si apre in lettura",
  ],
  [
    "Le tuple e le liste sono, rispettivamente:",
    "non modificabili e modificabili",
  ],
  ["Per l'inizializzazione delle liste si utilizzano:", "parentesi quadre"],
  ["Gli elementi di una lista:", "possono essere di tipo diverso"],
  [
    "L'istruzione lista[3]:",
    "serve per accedere al quarto elemento della lista",
  ],
  [
    "Per accedere all'ultimo elemento di una lista devo usare l'indice uguale a:",
    "lista[len(lista)-1]",
  ],
  [
    "Nel caso di utilizzo del metodo index() della lista:",
    "È possibile che venga sollevata un'eccezione ValueError",
  ],
  ["Il metodo reverse():", "inverte l'ordine degli elementi nella lista"],
  [
    "Per calcolare il totale degli elementi e contenuti in una lista a, le migliori istruzioni sono:",
    "c=0for e in a:    c=c+e",
  ],
  [
    "Per accedere ad un elemento di una lista bidimensionale:",
    "È obbligatorio due indici, ma non due cicli nidificati",
  ],
  ["Con le tuple è possibile utilizzare:", "il metodo index()"],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36595_EsercitSul_PEG/img/testImage_1684743768966.png" title="d1.png">:',
    "Maggio",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36595_EsercitSul_PEG/img/testImage_1684743776510.png" title="d2.png">:',
    "Novembre",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36595_EsercitSul_PEG/img/testImage_1684743785540.png" title="d3.png">:',
    "31",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36595_EsercitSul_PEG/img/testImage_1684743792705.png" title="d4.png">:',
    "Febbraio",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36595_EsercitSul_PEG/img/testImage_1684743802672.png" title="d5.png">:',
    "Gennaio",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36595_EsercitSul_PEG/img/testImage_1684743811386.png" title="d6.png">:',
    "90",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36595_EsercitSul_PEG/img/testImage_1684743820710.png" title="d7.png">:',
    "365",
  ],
  [
    "Nell'esercizio dell'ordinale di una data, la correzione dovuta all'anno bisestile viene effettuata se:",
    "bisestile(a) and m&gt;2",
  ],
  [
    "Nell'esercizio della distanza tra date dello stesso anno, la correzione dovuta all'anno bisestile viene effettuata per la coppia di date:",
    "07/01/2012,03/04/2012",
  ],
  [
    "Nell'esercizio della distanza tra date di anni diversi, la correzione dovuta all'anno bisestile viene effettuata per la coppia di date:",
    "07/01/2012,03/04/2015",
  ],
  [
    "Indicando con m il mese di una data, la funzione g_mesi() nell'esercizio di verifica della data stessa restituisce:",
    "giorni_mesi[m-1]",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36606_EsercitAvan_PEG/img/testImage_1684828607197.png" title="d2.png">:',
    "29",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36606_EsercitAvan_PEG/img/testImage_1684828617233.png" title="d3.png">:',
    "31",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36606_EsercitAvan_PEG/img/testImage_1684828624936.png" title="d4.png">:',
    "30",
  ],
  [
    "Nell'esercizio di verifica data, il numero dei cicli di validazione dell'input è pari a:",
    "3",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36606_EsercitAvan_PEG/img/testImage_1684828637096.png" title="d6.png">:',
    "giorni mancanti al termine dell'anno",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36606_EsercitAvan_PEG/img/testImage_1684828644434.png" title="d7.png">:',
    "la sottrazione di un certo numero di giorni ad una data",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36606_EsercitAvan_PEG/img/testImage_1684828651982.png" title="d8.png">:',
    "la somma di un certo numero di giorni ad una data",
  ],
  [
    "Nella funzione insert_data() che permette l'inserimento di una data valida si utilizzano:",
    "4 costrutti while",
  ],
  [
    "Nella gestione completa di un menu con 7 funzionalità offerte inclusa l'uscita dal programma, il numero di if-elif da utilizzare è pari a:",
    "8",
  ],
  ["Il dizionario è:", "una collezione dati composta da chiavi e valori"],
  ["Per inizializzare un dizionario si usano:", "le parentesi graffe"],
  ["Per ritrovare un valore in un dizionario si usano:", "le parentesi quadre"],
  [
    "Quando si cerca un valore nel dizionario:",
    "È possibile che venga sollevata l'eccezione KeyError",
  ],
  [
    "Il metodo items():",
    "restituisce le chiavi e i valori del dizionario sotto forma di una sequenza di tuple",
  ],
  [
    "Il metodo popitem():",
    "serve ad estrarre in modo casuale una coppia nel dizionario e a rimuoverla",
  ],
  [
    "A seguito dell'esecuzione delle seguenti istruzioni l = [1,2,3,3] s = set(l):",
    "s conterrà 3 elementi",
  ],
  ["Le istruzioni l=set() l.discard(1):", "non sollevano nessuna eccezione"],
  [
    "La differenza simmetrica tra due set permette di individuare un nuovo set che:",
    "contiene gli elementi non condivisi tra i due set",
  ],
  [
    "L'istruzione s.issuperset(t):",
    "restituisce un valore True se s contiene tutti gli elementi di t",
  ],
  ["L'acronimo UML, sta per:", "Unified Modeling Language"],
  [
    "Nella programmazione ad oggetti, l'Information hiding è:",
    "il meccanismo che permette l'occultamento dei dati e del codice dell'oggetto verso l'esterno. L'accesso allo stato avviene solo tramite l'interfaccia",
  ],
  [
    "Il linguaggio di modellazione UML è:",
    "un formalismo grafico che consente di progettare un sistema software in termini di diagrammi secondo il paradigma a oggetti (OO)",
  ],
  [
    "Il legame tra le classi:Cartella -- File:",
    "è un esempio di associazione compositiva",
  ],
  [
    "Il legame tra le classi:Commissione -- Docente:",
    "è un esempio di associazione aggregativa",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36652_EsercitAvan_PEG/img/testImage_1685087470203.png" title="d6.png">:',
    "Sempre lo stesso risultato",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36652_EsercitAvan_PEG/img/testImage_1685087484070.png" title="d7.png">:',
    "un messaggio di errore",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36652_EsercitAvan_PEG/img/testImage_1685087495321.png" title="d8.png">:',
    "Sempre lo stesso risultato",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36652_EsercitAvan_PEG/img/testImage_1685087507545.png" title="d9.png">:',
    "Sempre lo stesso risultato",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36652_EsercitAvan_PEG/img/testImage_1685087514625.png" title="d10.png">:',
    "Il numero di cellulare del proprietario, ma deve essere implementato il metodo get_cell() sia nella classe Casa che nella classe Persona",
  ],
  [
    "Nella programmazione OO, il 'polimorfismo' è:",
    "la possibilità di ridefinire nelle classi derivate i comportamenti originali dei metodi ereditati dalla classe base",
  ],
  [
    "Nella programmazione OO, i termini 'overriding' e 'overloading':",
    "l'overloading si applica nell'ambito di una stessa classe, mentre l'overriding si applica nell'ambito di una classe derivata da una classe base",
  ],
  [
    "Tra le classi:Felino -- Gatto esiste un'associazione di tipo:",
    "specializzazione",
  ],
  [
    "Tramite il meccanismo dell'ereditarietà:",
    "la classe derivata eredita tutti i metodi e tutti gli attributi dalla classe base ma l'accesso agli attributi privati può avvenire solo tramite interfaccia",
  ],
  [
    "Per essere accessibile in tutta la gerarchia l'attributo 'eta', deve essere definito nel seguente modo:",
    "eta",
  ],
  [
    "Con riferimento all'esercitazione relativa all'ereditarietà e al polimorfismo, nel costruttore della classe Cane si vuole assegnare   alla variabile '__speranza_vita'  il valore 20. Il codice corretto è:",
    "self.set_speranza_vita(20)",
  ],
  [
    "Con riferimento all'esercitazione relativa all'ereditarietà e al polimorfismo, le variabili '__habitat' dopo aver creato due Gatti e un Cane sono:",
    "2",
  ],
  [
    "Con riferimento all'esercitazione relativa all'ereditarietà e al polimorfismo, nella classe Gatto si aggiunge un metodo che stampa a video la razza. Il codice corretto è:",
    "def print_razza(self):        print(self.get_razza())",
  ],
  [
    "Con riferimento all'esercitazione relativa all'ereditarietà e al polimorfismo, la seguente riga di codice nella funzione display_obj: print(obj.__colore) visualizza a schermo:",
    "sempre un messaggio di errore",
  ],
  [
    "Con riferimento all'esercitazione relativa all'ereditarietà e al polimorfismo, le variabili 'descrizione' dopo aver creato un Gatto e un Cane sono:",
    "5",
  ],
  ["DBMS è l'acronimo di:", "Database Management System"],
  ["Oracle DB:", "È un DBMS commerciale"],
  ["Il modello più utilizzato per i database è il modello:", "relazionale"],
  ["Le fasi principali di modellazione di un database sono:", "tre"],
  ["Il diagramma E/R prevede che per ciascuna entità ci sia:", "un rettangolo"],
  [
    "Tutte le tuple della stessa entità hanno:",
    "stesso numero, nome e tipo, ma diversi valori di attributi",
  ],
  ["La cardinalità di un'associazione può essere di:", "tre tipi"],
  [
    "Le chiavi primarie e le chiavi esterne indicano:",
    "in modo univoco un'istanza e un metodo per mantenere l'integrità referenziale",
  ],
  [
    "Il modello logico deve:",
    "contenere tutte le informazioni necessarie per definire le tabelle",
  ],
  [
    "Il mapping prevede:",
    "delle regole di derivazione per la trasformazione degli elementi dello schema concettuale in elementi dello schema logico",
  ],
  [
    "SQL consente di interagire con:",
    "i dati del DB a livello di tupla e di schema",
  ],
  ["DML contiene i comandi per:", "interrogazione e modifica dei dati"],
  ["Una query SQL è suddivisa in:", "comandi, costrutti e clausole"],
  ["Dopo la keyword SELECT si inserisce:", "lista campi da estrarre"],
  [
    "Il comando SELECT * FROM Studenti; permette di:",
    "estrarre tutti i campi e tutte le tuple della tabella Studenti",
  ],
  [
    "Il comando SELECT Matricola, Nome AS N, Città FROM Studenti; permette di ottenere una tabella:",
    "che rappresenta una proiezione della tabella originale",
  ],
  [
    'Il comando SELECT * FROM Studenti WHERE Country = "IT" AND Country = "FR";  permette di:',
    "estrarre tutti gli studenti italo-francesi",
  ],
  [
    "Il comando SELECT DISTINCT Nome FROM Studenti ORDER BY Nome DESC; permette di:",
    "estrarre tutti i nomi non ripetuti in ordine alfabetico inverso",
  ],
  [
    "Il comando SELECT * FROM Studenti WHERE Nome LIKE '%to% permette di:",
    "estrarre tutti gli studenti il cui nome contiene la coppia di lettere to",
  ],
  [
    'Il comando SELECT * FROM Studenti WHERE Country IN ("IT","FR");  permette di:',
    "estrarre tutti gli studenti italiani e francesi",
  ],
  [
    "Il comando SELECT * FROM Studenti INNER JOIN Voti ON Studenti.Matricola = Voti.MatricolaS; permette di ottenere:",
    "una tabella composta dalla somma dei campi delle due tabelle di partenza",
  ],
  [
    "Il comando SELECT Studenti.Nome, Voti.Votofinale FROM Studenti LEFT JOIN Voti ON Studenti.Matricola = Voti.MatricolaS; permette di ottenere:",
    "una tabella composta dal numero di tuple della tabella Studenti",
  ],
  [
    "Il comando SELECT * FROM Studenti FULL OUTER JOIN Voti ON Studenti.Matricola = Voti.MatricolaS; permette di ottenere:",
    "una tabella composta dalla somma dei campi delle due tabelle di partenza",
  ],
  [
    "Il comando SELECT * FROM Studenti A, Studenti B WHERE A.Matricola = B. Matricola AND A.Città = B.Città:",
    "non è un self join propriamente corretto",
  ],
  ["Il comando SELECT Count(*),* FROM Studenti;:", "È errato"],
  [
    "Il comando SELECT Count(Matricola), Nome, Città FROM Studenti GROUP BY Città:",
    "È errato",
  ],
  [
    "Il comando SELECT Count(Matricola), Città FROM Studenti GROUP BY Città HAVING Città LIKE 'a%';:",
    "permette di conoscere il numero di studenti delle città il cui nome comincia per a",
  ],
  ["Le funzioni di aggregazione:", "prevedono la keyword STDEV"],
  ["GROUP BY serve a:", "partizionare in gruppi le righe di una tabella"],
  [
    "Il comando SELECT * FROM Studenti WHERE Città IN  (SELECT Nome FROM Tab_Città  WHERE Abitanti =  (SELECT MAX(Abitanti) FROM Tab_Città));:",
    "permette di conoscere gli studenti della città con la popolazione più grande",
  ],
  ["I tipi di dato SQL possono essere raggruppati in:", "tre categorie"],
  ["I tipi di dato numerici in SQL sono:", "9"],
  ["Il sinonimo del tipo di dato REAL in SQL è:", "DOUBLE"],
  [
    "Il timestamp in SQL corrisponde:",
    "al numero di secondi trascorsi dal 01/01/1970",
  ],
  ["Il formato del tipo di dato DATETIME in SQL è:", "AAAA-MM-GG HH:MM:SS"],
  [
    "Nella stringa di formattazione della funzione DATE_FORMAT() in SQL, il carattere %M indica:",
    "il nome del mese",
  ],
  [
    "La lunghezza prevista di una stringa di tipo CHAR in SQL è di:",
    "255 caratteri",
  ],
  [
    "La lunghezza prevista di una stringa di tipo VARCHAR in SQL è di:",
    "65535 caratteri",
  ],
  ["Il comando CREATE:", "appartiene al linguaggio DDL di SQL"],
  [
    "La vista creata con il comando CREATE:",
    "È una tabella virtuale che non fa parte della base di dati",
  ],
  ["MySQL è un:", "DBMS"],
  [
    "Al termine della procedura di installazione vengono installati:",
    "3 prodotti",
  ],
  ["Per connettersi a MySQL si utilizza il comando:", "\\connect"],
  ["CREATE serve a creare:", "un database, un utente, una tabella"],
  ["Nel caso di un database esistente bisogna:", "usare il database"],
  ["Il comando \\s permette di:", "verificare lo stato della connessione"],
  ["Per i valori numerici esistono:", "5 tipi"],
  ["Per le date esistono:", "4 tipi"],
  [
    "Il comando pip viene utilizzato soprattutto per:",
    "installare moduli e/o aggiornamenti di Python",
  ],
  [
    "Il metodo fetchall():",
    "È un metodo dell'oggetto cursore e restituisce tutte le tuple di una tabella",
  ],
  [
    "Oltre al comando CREATE, il DDL di SQL prevede altri:",
    "3 comandi principali per la modifica dei DB",
  ],
  [
    "Il comando SQLALTER TABLE Personale ADD INDEX indice_data_nascita(data_nascita); è:",
    "un comando DDL",
  ],
  [
    "Il comando SQLALTER TABLE Personale ADD INDEX indice_data_nascita(data_nascita); :",
    "crea un indice sul campo data_nascita della tabella Personale",
  ],
  [
    "Il comando SQLALTER TABLE Prodotti ADD costo_produzione DOUBLE NOT NULL DEFAULT 0; permette di:",
    "aggiungere un campo nella tabella Prodotti",
  ],
  [
    "Oltre al comando SELECT, per la modifica, il DML di SQL prevede:",
    "3 comandi principali per la modifica dei dati",
  ],
  ["I comandi DML per la modifica sono:", "INSERT, DELETE, UPDATE"],
  ["Il comando INSERT permette di:", "creare nuovi dati"],
  ["Il comando DELETE permette di:", "eliminare dati"],
  ["Gli usi tipici di un trigger in un database sono:", "4"],
  [
    "Nel caso di trigger che deve mantenere e aggiornare una tabella di log degli aggiornamenti di un campo di un'altra tabella, nella creazione del trigger è necessario utilizzare la seguente combinazione di keyword:",
    "AFTER UPDATE",
  ],
  ["Le stringhe sono sequenze di caratteri in codifica:", "Unicode (16 bit)"],
  [
    "Il risultato dell'elaborazione del seguente codice <br><br>a = 1 <br><br>s = 'ciao' <br><br>for i in s: <br><br>a-=1 <br><br>print(a) <br><br>è:",
    "-3",
  ],
  ["Stringa[4] equivale al:", "quinto carattere"],
  [
    "Il codice <br><br>s = 'ciao' <br><br>print(s[5]) <br><br>visualizza a schermo:",
    "Traceback IndexError",
  ],
  [
    "Il metodo isalnum() restituisce True se:",
    "stringa contiene solo caratteri alfanumerici e ha lunghezza &gt;=1",
  ],
  [
    "Il metodo lstrip(a) restituisce:",
    "una stringa con tutti gli i caratteri a iniziali rimossi",
  ],
  [
    "Il codice <br><br>s = 'va pensiero' <br><br>s1 = 'va' <br><br>s1 = s1+'pensiero' <br><br>print(s.replace(s,s1) <br><br>visualizza a schermo:",
    "vapensiero",
  ],
  [
    "Il codice <br><br>s = '''Ei fu. Siccome immobile, Dato il mortal sospiro, Stette la spoglia immemore Orba di tanto spiro, Così percossa, attonita La terra al nunzio sta''' <br><br>a = s.split(',') <br><br>print(len(a))<br><br> visualizza a schermo:",
    "5",
  ],
  [
    "L'istruzione <br><br>a = ''.join(cons + voc + ['x']*2)[0:3] permette di:",
    "calcolare la porzione del codice fiscale relativa al cognome",
  ],
  [
    "Nell'istruzione controllo[((a+b)%26)].upper() controllo è:",
    "un dizionario",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36691_EsercitSul_PEG/img/testImage_1685450370964.png" title="d1.png">:',
    "14",
  ],
  [
    "Per lo sviluppo di un programma con le funzioni è preferibile utilizzare:",
    "un approccio top down",
  ],
  [
    "Due parole per avere lo stesso valore di frequenza relativa (fr), devono:",
    "avere lo stesso numero di occorrenze",
  ],
  [
    "La grandezza del vocabolario V di un testo è definita come:",
    "il numero di parole/token distinte/i del testo esclusa la punteggiatura",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36691_EsercitSul_PEG/img/testImage_1685450381584.png" title="d5.png">:',
    "una sola riga",
  ],
  [
    "La ricchezza lessicale di un testo è data da:",
    "rapporto tra la grandezza del vocabolario e il numero totale di parole/token",
  ],
  [
    "La frequenza assoluta (fa) di una parola/token è definita come:",
    "numero di occorrenze della parola/token nel testo",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36691_EsercitSul_PEG/img/testImage_1685450394970.png" title="d8.png">:',
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36691_EsercitSul_PEG/img/testImage_1685450690514.png" title="d8r4.png">',
  ],
  [
    "Il metodo da utilizzare per suddividere una frase in parole/token è:",
    "split()",
  ],
  [
    "La frequenza relativa (fr) di una parola/token è definita come:",
    "rapporto tra la frequenza assoluta della parola/token e il numero totale delle parole/token del testo",
  ],
  [
    'Il codice def f(): a = 0 c = [] s = "ciao" for b in s: c.append(a) a+=2 return c restituisce:',
    "un lista di 4 elementi",
  ],
  [
    "L'istruzione locale.setlocale(locale.LC_MONETARY,'de_DE') serve ad impostare:",
    "la valuta secondo le convenzioni tedesche",
  ],
  [
    "Nella lettura di un file, l'istruzione while riga!='': indica che:",
    "si deve leggere fino all'EOF",
  ],
  [
    "Il codice a = riga.rstrip() b = infile.readline().rstrip() d[a] = b presuppone che le informazioni nel file:",
    "siano scritte su righe diverse",
  ],
  [
    "L'istruzione s.isdigit() restituisce:",
    "vero se s contiene solo cifre numeriche",
  ],
  ['Il codice s="ciao" s1=s+"" print(len(s)', "falso"],
  ["Nelle liste la ricerca è:", "lineare"],
  ["Time.time() è:", "una funzione che restituisce il timestamp"],
  ["L'istruzione l = list(set(l)) permette di:", "eliminare i duplicati in l"],
  [
    "Il codice a= dict(zip(b,c)) d = a.popitem() print(d) visualizza a schermo:",
    "una coppia chiave-valore a caso",
  ],
  [
    "Le espressioni regolari sono:",
    "modelli descritti con una sintassi formale per cercare corrispondenze in un testo",
  ],
  [
    "Le espressioni regolari in Python possono essere viste come:",
    "linguaggio di programmazione",
  ],
  ["L'espressione eb*a* troverà corrispondenza in:", "eaaa"],
  ["L'espressione e[abc]* troverà corrispondenza in:", "e"],
  ["L'espressione eb*a+ troverà corrispondenza in:", "eaaa"],
  ["L'espressione eb*a- troverà corrispondenza in:", "e"],
  ["A|b è:", "un operatore di base che indica a o b"],
  ['L\'istruzione print(r"\\\\n") visualizza a schermo:', "\\\\n"],
  ["Il flag re.U:", "interpreta i caratteri come set di caratteri Unicode"],
  [
    'Il codice import re r = re.match(r"\\d+","ciao") print(r.group()) visualizza a schermo:',
    "messaggio di traceback",
  ],
  ["La funzione findall() del modulo re:", "restituisce una lista di stringhe"],
  [
    'Il codice import re r = re.findall(r"[0-9a-z]+","1 2 3 a b c d") print(len(r)) visualizza a schermo:',
    "7",
  ],
  [
    'Il codice import re r = re.findall(r\'".+"\',\'"1 2 3" "a b c d"\') print(len(r)) visualizza a schermo:',
    "1",
  ],
  [
    'Il codice import re r = re.sub(r\'".*?"\',"*",\'"1 2 3" "a b c d"\') print® visualizza a schermo:',
    "**",
  ],
  [
    "Il codice import re r = re.findall(r'\\d (?=[a-z])','1 2 3 a b c d') print® visualizza a schermo:",
    "['3 ']",
  ],
  [
    "Il codice import re p = re.compile(r'\\d (?=[a-z])') r = p.findall('1 2 3 a b c d') print® visualizza a schermo:",
    "['3 ']",
  ],
  ["Il codice import re p = re.compile(r'\\d (?", "[ ]"],
  [
    "Il codice import re p = re.compile(r'a(b(c)d)') r = p.match('abcd') print(r.group(1)) visualizza a schermo:",
    "bcd",
  ],
  [
    "Il codice import re p = re.compile(r'a(?:b(c)d)') r = p.match('abcd') print(r.group(1)) visualizza a schermo:",
    "c",
  ],
  [
    "Per verificare le mail del tipo nome_utente@unimercatorum.it è necessario utilizzare la seguente espressione regolare:",
    "r'[a-zA-Z][\\w-]*@unimercatorum.it'",
  ],
  [
    "Il globbing è:",
    "un'operazione che consiste nel ricercare stringhe tramite espressioni regolari semplificate",
  ],
  [
    "Nel globbing l'asterisco e il punto interrogativo rappresentano:",
    "zero o più caratteri ed esattamente un carattere, rispettivamente",
  ],
  [
    "La funzione iglob() è:",
    "simile a glob(), ma non memorizza simultaneamente tutti i valori restituiti da glob()",
  ],
  [
    "Per poter leggere e scrivere su file binario è necessario:",
    "deserializzare e serializzare gli oggetti, rispettivamente",
  ],
  [
    "Per poter leggere e scrivere su file binario si ricorre:",
    "alla funzione load e dump, rispettivamente",
  ],
  [
    "Nel codice import pickle ifile = open('a.dat','rb') b = pickle.load(inputfile) b è:",
    "un oggetto",
  ],
  [
    "La sentinella è:",
    "uno o più valori di una variabile in una struttura iterativa",
  ],
  [
    "Nell'istruzione pickle.dump(a,b) a e b sono:",
    "oggetto e gestore del file",
  ],
  [
    'L\'istruzione r = re.findall(r"\\w+", line, re.I) serve per:',
    "trovare le parole in line senza considerare la differenza minuscolo/maiuscolo",
  ],
  [
    "Nell'indicizzatore di file, l'istruzione d[p.upper()] = d[p.upper()]+lista permette di:",
    "aggiornare la lista dei valori di p includendo un nuovo file",
  ],
  [
    "Data una lista v di 11 elementi, le operazioni di somma che vengono effettuate nella funzione somma(v) sono:",
    "11",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36702_EsercitSul_PEG/img/testImage_1685459309152.png" title="d2.png">:',
    "9",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36702_EsercitSul_PEG/img/testImage_1685459317080.png" title="d3.png">:',
    "1.5",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36702_EsercitSul_PEG/img/testImage_1685459324322.png" title="d4.png">:',
    "2.25",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36702_EsercitSul_PEG/img/testImage_1685459331804.png" title="d5.png">:',
    "2",
  ],
  [
    "Il codice necessario per lo shifting è:",
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36702_EsercitSul_PEG/img/testImage_1685459555418.png" title="d6r1.png">',
  ],
  [
    "Nell'inserimento ordinato in una lista, il nuovo elemento viene posto in coda alla lista in:",
    "due casi",
  ],
  [
    "Nell'esercizio sliding window con larghezza della finestra uguale a 3, il codice che imposta la struttura iterativa che permette lo scorrimento della finestra e che ha corpo del ciclo uguale av[i-1]+v[i]+v[i+1])/3.0 è:",
    "for i in range(1,len(v)-1):",
  ],
  [
    "Per applicare l'algoritmo della sliding window con una finestra di larghezza k=4, è possibile usare la lista:",
    "[1,2,3,4]",
  ],
  [
    "Data una sliding window di larghezza k, il codice che permette di impostare la struttura iterativa che permette lo scorrimento della finestra stessa sulla lista è:",
    "for i in range(k//2,len(v)-k//2)",
  ],
  [
    "Dato x l'indice dell'elemento centrale di una sottolista/lista, il codice corretto per aggiornare l'indice sinistro nella ricerca binaria se l'elemento non è stato trovato è:",
    "l = x+1",
  ],
  [
    "Dato x l'indice dell'elemento centrale di una sottolista/lista, il codice corretto per aggiornare l'indice destro nella ricerca binaria se l'elemento non è stato trovato è:",
    "u = x-1",
  ],
  [
    "Dati x e y rispettivamente l'indice sinistro e destro della sottolista/lista durante la ricerca binaria in una lista, il codice migliore per aggiornare l'indice dell'elemento centrale è:",
    "m = (l+u)//2",
  ],
  [
    '<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312212INF01III/scorm/36733_EsercitSul_PEG/img/testImage_1685531166347.png" title="d4.png">:',
    "indicato perché la lista è ordinata",
  ],
  [
    "Nell'algoritmo della ricerca binaria in una lista, nel caso di numero non presente nella lista, la condizione che si verifica per l'uscita dal ciclo di ricerca è:",
    "low&lt;=up",
  ],
  [
    "Data una struttura iterativa (con indice i di riga) con cui si vogliono 'visitare' gli elementi della diagonale secondaria di una matrice quadrata di dimensioni k, la formula dell'indice di colonna è:",
    "k-i-1",
  ],
  [
    "Il totale degli elementi della diagonale principale e della diagonale secondaria di una matrice quadrata m di dimensione n è:",
    "2n-1",
  ],
  [
    "Le strutture di selezione nella funzione di calcolo della media di tutti gli elementi della diagonale secondaria di una matrice quadrata sono:",
    "0",
  ],
  [
    "Il prodotto scalare di una matrice:",
    "avviene tra una matrice e un numero e restituisce una matrice",
  ],
  ["Il prodotto scalare di una matrice:", "opera su matrice rettangolare"],
  [
    "Per calcolare il prodotto matriciale tra due matrici, con c la matrice risultato già impostata, sono necessari:",
    "3 strutture iterative",
  ],
  [
    "Per eseguire il prodotto matriciale XY è necessario che:",
    "Il numero di colonne di X sia uguale al numero di righe di Y",
  ],
  [
    "Date due matrici K(3x4) e Z(4x1), la matrice risultato del prodotto matriciale KZ avrà dimensioni:",
    "3x1",
  ],
  [
    "Una volta impostati correttamente gli intervalli di variazione degli indici, la forma più corretta per il calcolo degli elementi della matrice Z risultato del prodotto matriciale XY è:",
    "z[a][b] += x[a][c]*y[c][b]",
  ],
  [
    "Nell'esercizio della matrice bersaglio con l'uso della matrice booleana corrispondente, una volta valorizzato l'elemento al centro della matrice, sono necessarie:",
    "tre strutture iterative e una condizionale",
  ],
  [
    "Dato n la dimensione della matrice quadrata m e k la \"distanza\" dello strato che si sta valorizzando e il centro della matrice, l'intervallo di variazione dell'indice di riga da inserire come codice nella struttura iterativa nell'esercizio della matrice bersaglio  che utilizza la matrice booleana corrispondente (maschera) è:",
    "n//2-k+1, n//2+k",
  ],
  [
    "Dato n la dimensione della matrice quadrata m e k la \"distanza\" dello strato che si sta valorizzando e il centro della matrice, l'intervallo di variazione dell'indice di colonna da inserire come codice nella struttura iterativa  nell'esercizio della matrice bersaglio che utilizza la matrice booleana corrispondente (maschera) è:",
    "n//2-k+1, n//2+k",
  ],
  [
    "Nell'esercizio della girella di numeri, l'inizializzazione della matrice viene scomposta in:",
    "4 parti",
  ],
  [
    "Nell'esercizio della girella di numeri, data n la dimensione della matrice quadrata m, ciascuna parte in cui viene scomposta l'inizializzazione della matrice viene ripetuta:",
    "n//2 volte",
  ],
  [
    "Per poter risolvere l'esercizio della girella di numeri così come visto nell'esercizio svolto, nella funzione carica_matrice_gir(), avendo la matrice già impostata, sono necessarie ulteriori:",
    "5 strutture iterative",
  ],
  [
    "Nella successione di Fibonacci:",
    "Il valore di un elemento in una determinata posizione è uguale alla somma dei due elementi che lo precedono ad eccezione dei primi due elementi",
  ],
  [
    "La sezione aurea:",
    "È il limite del rapporto dei valori consecutivi della successione di Fibonacci per n tendente ad infinito",
  ],
  [
    "Nel selection sort:",
    "si confronta ogni elemento con i successivi in posizione",
  ],
  [
    "Per scambiare due elementi tra di loro il codice corretto per farlo è:",
    "a = l[j] l[j] = l[j+1] l[j+1] = a",
  ],
  [
    "Nel selection sort nell'ipotesi di un ordinamento crescente:",
    "la sottosequenza ordinata è nelle prime posizioni",
  ],
  [
    "In una sequenza di N elementi, con l'algoritmo selection sort, si effettuano:",
    "meno di N2/2 confronti tra elementi",
  ],
  [
    "Per gli indici degli elementi della diagonale secondaria vale la seguente relazione:",
    "i = N-1-j",
  ],
  [
    "Il seguente codice for i in range(N) for j in range(i+1,N) è tipico:",
    "della verifica di simmetricità nelle matrici",
  ],
  [
    "Il seguente codice for i in range(N) for j in range(i,N) è tipico:",
    "dell'inizializzazione di matrici triangolari superiori in una matrice di elementi tutti nulli",
  ],
  [
    "Il seguente codice for i in range(N) for j in range(i+1) è tipico:",
    "dell'inizializzazione di matrici triangolari inferiori in una matrice di elementi tutti nulli",
  ],
  [
    "Il Navigator di Anaconda è:",
    "un pannello in cui esiste un comando per ogni strumento invocabile",
  ],
  [
    "Un notebook Jupyter è:",
    "un applicativo che permette di scrivere un flusso di lavoro in verticale",
  ],
  ["La libreria Numpy si basa su:", "array"],
  [
    "Le librerie built-in di Python rispetto a NumPy presentano:",
    "prestazioni e produttività inferiori",
  ],
  ["Un alias è:", "un nome (diminutivo) per chiamare una libreria/modulo"],
  ["Gli array differiscono dalla lista principalmente per:", "due motivi"],
  ["DI che tipo è realmente un array:", "numpy.ndarray"],
  [
    "La seguente istruzione n = np.array(range(1,12)) produce:",
    "un array da 11 elementi",
  ],
  [
    "Il tipo uint64 è:",
    "un tipo supportato da numpy e corrisponde ad  un intero senza segno su 64 bit",
  ],
  [
    "Per modificare il tipo degli elementi di un array è necessario:",
    "esplicitare il parametro dtype",
  ],
  [
    "Per effettuare il casting degli elementi dell'array è necessario:",
    "utilizzare la funzione astype",
  ],
  [
    "Il codice corretto per modificare la forma dell'array è:",
    "v.shape = [a,b]",
  ],
  [
    "L'effetto dell'istruzione m.transpose(0,2,1) è:",
    "primo asse rimane verticale, altri due assi scambiati",
  ],
  ["L'istruzione m = np.random(3,3):", "è errata"],
  ["La funzione random() di numpy produce:", "numeri casuali da 0 a 1"],
  [
    "La forma corretta di generare una matrice con tutti valori uguali è:",
    "np.full((a,b),x)",
  ],
  [
    "Il risultato della seguente istruzione print(np.linspace(1, 10 ,num=3)) è:",
    "[ 1. 5.5 10.]",
  ],
  [
    "Il tipo di dato di a dopo l'esecuzione della seguente istruzione a=v&lt;0 è:",
    "booleano",
  ],
  [
    "In Python e NumPy, rispettivamente, gli operatori relazionali rispetto agli operatori booleani:",
    "hanno priorità maggiore per Python e priorità inferiore per Numpy",
  ],
  ["L'operatore asterisco:", "in Python può indicare la moltiplicazione"],
  [
    "Data una matrice m di dimensioni 7x5 la seguente istruzione m[3:5][1][0] permette di raccogliere:",
    "il primo elemento della quinta riga",
  ],
  [
    "Per inserire elementi in un array è possibile utilizzare:",
    "la funzione append e la funzione insert",
  ],
  [
    "Il risultato a schermo del seguente codice v=np.array(range(-2,2)) v2=v[v&gt;=0] print(len(v2)) è:",
    "2",
  ],
  [
    "Il risultato a schermo del seguente codice&nbsp;v=np.array(range(-2,2))&nbsp;v2=v[v&lt;=0]&nbsp;print(len(v2))<br><br>è:",
    "3",
  ],
  [
    "Il risultato a schermo del seguente codice v=np.array(range(1,10)) v2 = np.where(v%2==1,'1','0') print(v2) è:",
    "['1' '0' '1' '0' '1' '0' '1' '0' '1']",
  ],
  [
    "Il risultato a schermo del seguente codice v=np.array(range(1,100)) v2=np.unique(v) print(len(v2)) è:",
    "99",
  ],
  ["Il risultato dell'istruzione np.in1d(v2,v) è:", "un array booleano"],
  ["La funzione load() serve per:", "caricare gli array da file binario"],
  ["Il file binario di salvataggio di array numpy ha estensione:", ".npy"],
  [
    "L'istruzione a = np.where(var==max)[0][0] serve a:",
    "individuare la posizione del valore massimo nell'array",
  ],
  ["La libreria per i grafici in Python si chiama:", "Matplotlib"],
  ["La funzione plot() serve per:", "rappresentare un grafico lineare"],
  [
    "Per poter rappresentare un grafico lineare:",
    "sono necessarie un numero pari di liste di numeri",
  ],
  [
    "L'espressione [-10*x+2 for x in range(-100,100) permette di generare:",
    "una retta decrescente",
  ],
  ["Explode è relativo a:", "grafici a torta"],
  ["Explode è:", "una tupla"],
  [
    "La funzione axhline permette:",
    "di visualizzare una linea orizzontale nel grafico",
  ],
  [
    "Il metodo gfc:",
    "estrae la figure corrente o la crea se non esiste ancora",
  ],
  ["Per poter graficare gli array:", "non sono necessarie trasformazioni"],
  [
    "La proprietà kde:",
    "È della funzione displot e serve a calcolare una stima della densità del kernel per uniformare la distribuzione",
  ],
  [
    "Nella generazione dei numeri casuali, il modulo numpy.random:",
    "utilizza un seed",
  ],
  [
    "La funzione di massa della probabilità si definisce:",
    "per le distribuzioni discrete",
  ],
  ["I parametri della funzione uniform() sono:", "3"],
  [
    "Nella funzione rand():",
    "i parametri sono tutti di default ad esclusione della shape",
  ],
  ["I parametri della funzione hist() sono:", "1"],
  [
    "La funzione randint() permette di generare numeri casuali secondo una distribuzione:",
    "uniforme discreta",
  ],
  [
    "Nella funzione hist(), bins indica:",
    "il numero degli intervalli per il conteggio",
  ],
  [
    "Dopo l'istruzione v=np.cumsum(a):",
    "l'array v avrà lo stesso numero di elementi di a",
  ],
  ["Le matrici di covarianza e di correlazione sono:", "entrambe simmetriche"],
  [
    "Il risultato dell'esecuzione del seguente codice: import numpy.random as rnd x = rnd.randint(0,100, size=100) y = rnd.randint(0,100, size=100) v = np.corrcoef(x,y) print(v[1][1]):",
    "1",
  ],
  ["Le strutture dati principali di Pandas sono:", "Series e DataFrame"],
  [
    "Il risultato del seguente codice a = pd.read_csv('a.csv', delimiter='.') print(type(a)) è:",
    "DataFrame",
  ],
  [
    "L'attributo dtypes:",
    "È relativo al DataFrame ed elenca il tipo di tutti i campi",
  ],
  [
    "In Pandas, la forma corretta di far riferimento ad una colonna è:",
    "df['colonna']",
  ],
  [
    "Per poter applicare una funzione ad una colonna di un DataFrame si utilizza la funzione:",
    "apply",
  ],
  [
    "Per poter specificare più colonne di un DataFrame si utilizza la seguente notazione:",
    "df[['colonna1','colonna2']]",
  ],
  [
    "Iloc e loc sono gli operatori  per accedere:",
    "rispettivamente alla posizione e all'etichetta di un elemento",
  ],
  [
    "L'operatore index:",
    "restituisce l'etichetta di una riga in base alla sua posizione",
  ],
  ["Una Series:", "È composta da una sequenza di elementi omogenei"],
  [
    "Una Series può essere prodotta da:",
    "una lista o un dizionario o un array NumPy",
  ],
  [
    "Per estrarre tutte le righe con il campo colonna1 pari al carattere C si usa la notazione:",
    "df['colonna1']=='C'",
  ],
  [
    "L'istruzione d = df.sort_values(by='a') permette di:",
    "ordinare i dati secondo i valori del campo 'a'",
  ],
  [
    "Quando si utilizza loc con un indice non presente nel DataFrame:",
    "si ottiene la creazione di una nuova riga",
  ],
  ["Il codice df.index[-1] si riferisce:", "all'ultimo indice"],
  [
    "L'istruzione df = df.drop(30, axis = 0) permette di:",
    "eliminare la riga con etichetta 30",
  ],
  [
    "L'istruzione df = df.drop(df.index[-1]) permette di:",
    "eliminare l'ultima riga",
  ],
  [
    "Il metodo iterrows() permette di ottenere:",
    "un generatore che ad ogni iterazione fornirà un indice di riga e la Series contenente i suoi valori",
  ],
  ["Il risultato restituito da describe() è composto da:", "8 elementi"],
  ["Groups è:", "È una proprietà che contiene un dizionario"],
  [
    "Per ottenere le statistiche complessive massime calcolate su un DataFrame raggruppato sul campo 'c' in base al valore del campo 'c2' è necessario utilizzare la seguente istruzione:",
    "df.groupy('c')['c2'].describe()['max']",
  ],
  ["Il metodo per eseguire un join su due DataFrame in Pandas è:", "merge"],
  [
    "Per indicare i due DataFrame per la congiunzione:",
    "entrambi i DataFrame vengono passati al metodo per il join",
  ],
  [
    "L'istruzione pd.cut(s,x) permette di:",
    "effettuare la discretizzazione di s in x categorie",
  ],
  [
    "Un DataFrame può essere creato:",
    "vuoto o da lista o da Series o da file csv",
  ],
  [
    "Le istruzioni corrette per scrivere un DataFrame su file Excel sono:",
    "w = pd.ExcelWriter('a.xlsx', engine = 'xlsxwriter') dataframe.to_Excel(w, sheet_name='prova') w.save()",
  ],
  [
    "In relazione al DataFrame Pandas, sono possibili le operazioni:",
    "di lettura, scrittura e interrogazione su un database relazionale",
  ],
  [
    "Oltre all'importazione delle librerie opportune, la migliore sequenza di istruzioni per graficare il contenuto della colonna  a di un DataFrame Pandas df con un grafico lineare è:",
    "df['a'].plot(kind='line') matplot.show()",
  ],
  ["Il metodo per ottenere la media mobile su una Series è:", "rolling"],
  [
    "Dati i due file conti.csv e transazioni.csv presentati nell'esercizio, per ottenere i dati riferiti al tipo di operazione e al numero di conto è necessaria:",
    "la sola tabella transazioni",
  ],
  [
    "L'istruzione transazioni.groupby('conto')['importo'].sum() restituisce:",
    "calcolare il saldo per ciascun conto",
  ],
  [
    "Nella formulazione originale della regola delle 3V, le 3V corrispondono a:",
    "volume, velocità e varietà",
  ],
  [
    "Il/i motivo/i alla base della difficoltà di gestione dell'accumulazione dei dati è/sono:",
    "il volume e la velocità di accumulazione dei dati",
  ],
  [
    "La strutturazione dei dati al momento della loro introduzione nel sistema è tipico del paradigma:",
    "Datawarehouse",
  ],
  ["Hadoop è costituita da:", "4 componenti principali"],
  [
    "HDFS e YARN sono:",
    "rispettivamente file system distribuito e ambiente di elaborazione MapReduce",
  ],
  [
    "L'affidabilità della gestione dei file è garantita da:",
    "suddivisione in blocchi dei singoli file replicati su più nodi",
  ],
  [
    "Nella modalità di installazione e funzionamento pseudo-distributed:",
    "il funzionamento sarà suddiviso in più processi Java e si avrà un single-node cluster",
  ],
  ["I moduli principali di Apache Spark sono:", "4"],
  [
    "I Worker Node sono:",
    "tutti i nodi del cluster tra i quali sarà parallelizzato il lavoro",
  ],
  ["I componenti principali di un cluster Spark sono:", "3"],
  ["Le modalità per ottenere un RDD sono:", "2"],
  [
    "Genericamente, per trasformare una struttura dati Python in un RDD è necessario:",
    "parallelizzarla",
  ],
  [
    "Il risultato di una trasformazione e di un'azione è:",
    "un RDD e un risultato specifico, rispettivamente",
  ],
  [
    "Le operazioni di map e reduce:",
    "sono trasformazioni e azioni, rispettivamente",
  ],
  [
    "Il metodo collect():",
    "corrisponde ad un'azione e restituisce gli elementi del RDD in una struttura dati Python",
  ],
  ["Gli argomenti da passare allo SparkContext sono:", "2"],
  ["Il metodo stats() restituisce:", "un oggetto"],
  [
    "Nell'applicazione dell'algoritmo MapReduce in Spark:",
    "possono esserci solo map",
  ],
  ["Una reduce:", 'può essere "sostituita" da una funzione'],
  [
    "Quando si utilizza il metodo reduceByKey, la numerosità della lista risultante è pari:",
    "al numero di chiavi",
  ],
  [
    "Le istruzioni rdd=sc.parallelize([1,2,3,4]) rddf = rdd.filter(lambda x: x&gt;=6) print(rddf.collect()) producono il seguente output:",
    "[]",
  ],
  [
    "Le istruzioni rdd=sc.parallelize([1,2,3,4]) rddf = rdd.filter(lambda x: x%2==1) print(rddf.collect()) producono il seguente output:",
    "[1,3]",
  ],
  [
    "Le istruzioni rdd=sc.parallelize([1,2,3,4]) rddf = rdd.filter(lambda x: 'D' if x%2==1 else 'P') print(rddf.mapValues(list).count()) producono il seguente output:",
    "2",
  ],
  ["Una partizione è:", "una suddivisione logica di un dataset"],
  ["La funzione coalesce():", "riduce il numero di partizioni"],
  [
    "Per definire il numero di partizioni in cui suddividere un RDD si fa ricorso alla funzione:",
    "parallelize()",
  ],
  [
    "La funzione per leggere dati da file e copiarli in un RDD è:",
    "textFile()",
  ],
  [
    "La funzione countByKey() permette di:",
    "contare gli elementi in un RDD in base alla chiave/etichetta",
  ],
  ["Il DataFrame è una:", "collezione immutabile"],
  [
    "Il metodo agg() si usa per:",
    "personalizzare maggiormente le aggregazioni da svolgere",
  ],
  ["Un grafo è definito da:", "due insiemi"],
  ["Un multigrafo è un grafo:", "con archi paralleli"],
  [
    'Nel caso di due nodi non collegati da archi, si assume che il peso dell\'arco "virtuale" sia:',
    "infinito",
  ],
  ["Il grado di un nodo indica sempre:", "numero di archi connessi al nodo"],
  [
    "La densità di un grafo fornisce una misura di:",
    "quanto il grafo si avvicini ad un grafo completo",
  ],
  [
    "L'ordine e la dimensione di un grafo sono:",
    "rispettivamente il numero dei nodi e degli archi",
  ],
  [
    "Il diametro di un grafo è:",
    "massima distanza fra due nodi qualsiasi del grafo",
  ],
  ["Il GCC è:", "la più grande componente connessa del grafo"],
  ["La modularità misura:", "la qualità della struttura comunitaria"],
  ["La centralità locale è:", "il numero di nodi adiacenti di A"],
  [
    "La libreria per l'accesso ai dati sul Web in Python si chiama:",
    "urlib.request",
  ],
  [
    "Per ottenere il testo HTML di una pagina web si utilizzano le seguenti parole chiave:",
    "with, as",
  ],
  ["La funzione urlparse() suddivide un URL in una tupla di:", "sei elementi"],
  [
    "Il valore restituito dalla funzione urlunparse() a cui è stato passato il valore restituito dalla funzione urlparse():",
    "può essere diverso dall'URL originale ma è funzionalmente equivalente",
  ],
  ["Beautiful Soup permette di:", "estrarre dati da file"],
  [
    "Il metodo prettify() permette di:",
    "visualizzare come i tag HTML sono annidati nel documento",
  ],
  [
    "Il metodo get_text() permette di:",
    "accedere al testo del contenuto dell'HTML",
  ],
  ["Il metodo findall(a) permette di:", "estrarre tutti i tag indicati da a"],
  ["Strings è:", "una proprietà"],
  [
    "Per accedere alla cella di una tabella è necessario:",
    "accedere gerarchicamente prima a ",
  ],
  ["La sequenza di analisi di una rete consta principalmente di:", "4 fasi"],
  [
    "Networkx non permette di ottenere un risultato professionale nell'attività di:",
    "visualizzazione dei grafi",
  ],
  [
    "Il metodo add_node() permette di aggiungere:",
    "nodi numerici, di stringhe e di altri oggetti",
  ],
  ["Per calcolare l'ordine del grafo esistono:", "3 metodi"],
  ["Per calcolare la dimensione del grafo esistono:", "2 metodi"],
  [
    "Le funzioni Graph() e DiGraph() permettono di:",
    "ottenere grafi non orientati e orientati, rispettivamente",
  ],
  ["L'operatore compose() permette di ottenere:", "l'unione di due grafi"],
  [
    "Per assegnare un peso di 3,5 all'arco tra il nodo 1 e il nodo 2 in un grafo pesato è necessario utilizzare la/le seguente/i istruzione/i:",
    "g.add_edge(1,2, weight = 3.5)",
  ],
  [
    "Per accedere al peso dell'arco tra il nodo 1 e il nodo 2 è possibile utilizzare la seguente istruzione:",
    "g[1][2]['weight']",
  ],
  [
    "Per conoscere i nodi adiacenti ad un nodo a, si utilizza il metodo:",
    "neighbors()",
  ],
  [
    "Per visualizzare un grafo con layout circular è necessario utilizzare la seguente istruzione:",
    "networkx.draw_circular(g)",
  ],
  ["L'istruzione plt.clf() permette di:", "azzerare il plot precedente"],
  [
    "Per impostare le opzioni di visualizzazione di un grafo si utilizza:",
    "un dizionario",
  ],
  [
    "La posizione dei nodi per la visualizzazione di un grafo viene impostata attraverso:",
    "un dizionario",
  ],
  [
    "Il formato del file contenente un grafo generato con Networkx per la successiva visualizzazione con Gephi è:",
    ".graphml",
  ],
  [
    "Connected_components() è:",
    "una funzione di networkx che funziona solo per grafi non orientati",
  ],
  [
    "I metodi in_degree() e out_degree() si usano per:",
    "calcolare il grado entrante e uscente di tutti i nodi di un grafo orientato",
  ],
  [
    "Clustering() è:",
    "una funzione di networkx che funziona solo per grafi non orientati",
  ],
  ["Le funzioni di centralità restituiscono:", "un dizionario"],
  ["Best_partition() restituisce:", "una partizione comunitaria"],
  [
    "Per recuperare i dati della tabella di Wikipedia e generare la struttura dati propedeutica al grafo sono necessari:",
    "BeautifulSoup, urllib.request, pandas",
  ],
  [
    "I chilometri di confine degli Stati sono memorizzati nel grafo come:",
    "attributo dei nodi",
  ],
  [
    "Il formato di salvataggio del grafo da parte di Networkx per il successivo editing con Gephi è:",
    ".graphml",
  ],
  [
    "In Gephi, anche senza elaborazioni del grafo, è attiva la funzionalità di:",
    "individuazione del vicinato di un nodo",
  ],
  [
    "Il grado medio dei nodi si ottiene:",
    "dal rapporto tra dimensione e ordine del grafo",
  ],
  [
    "La distribuzione del grado dei nodi permette di comprendere immediatamente:",
    "il massimo numero di vicini dei nodi",
  ],
  [
    "La funzione clustering() applicata ad un grafo:",
    "restituisce un dizionario con chiave lo Stato e valore il coefficiente di clustering",
  ],
  [
    "La modularità ottenuta ci da una misura:",
    "della qualità della struttura comunitaria della rete",
  ],
  [
    "Le categorie della sezione Statistics di Gephi sono:",
    "network overview, node overview, edge overview, dynamic",
  ],
  [
    "L'Average Path Length è definito come:",
    "il numero medio di archi lungo i cammini più brevi per tutte le possibili coppie di nodi di rete",
  ],
  ['Il concetto "user friendly" si applica a:', "GUI"],
  ["Tkinter è:", "una libreria della standard library per le GUI"],
  ["Il widget è:", "un elemento grafico"],
  ["L'oggetto master è:", "la finestra principale"],
  ["Il metodo pack() è:", "il metodo di gestione della geometria"],
  [
    "L'ultima istruzione di un programma che usa Tkinter è l'istruzione che:",
    "richiama il main event loop",
  ],
  ["Il subclassing è possibile grazie a:", "ereditarietà"],
  [
    "I tipi di dato offerti dalla libreria Tkinter sono da preferirsi ai tipi di dati built-in di Python per:",
    "2 motivi",
  ],
  [
    "Per associare al click su un pulsante una funzione è necessario:",
    "passare il riferimento alla funzione nel costruttore di Button attraverso il parametro command",
  ],
  [
    "Per stabilire il font del testo di una Label è necessario utilizzare:",
    "una tupla di due elementi",
  ],
  [
    "Una GUI serve principalmente:",
    "ad inserire dati, avviare elaborazioni, mostrare risultati",
  ],
  ["Un form serve principalmente:", "ad inserire dati"],
  ["L'uso del form è consigliato per:", "verificare integrità dei dati"],
  ["Per l'equipment fault, i valori ammissibili sono:", "2"],
  ["Il widget Spinbox viene usato maggiormente per:", "numeri"],
  [
    "Il widget OptionMenu viene usato maggiormente per:",
    "scelta tra diversi valori",
  ],
  ["Il widget Checkbutton viene usato maggiormente per:", "valori booleani"],
  ["Il widget Scale viene usato maggiormente per:", "numeri"],
  [
    "Solitamente, in una GUI, oltre al form, quanti elementi si inseriscono per completezza:",
    "3",
  ],
  ["Il widget LabelFrame è:", "un frame con etichetta e bordo opzionale"],
  [
    "Nel widget Entry, il parametro textvariable è:",
    "l'argomento di tipo StringVar collegato al widget",
  ],
  [
    "Nel widget Checkbutton, il parametro textvariable è:",
    "l'argomento che collega variabile al testo dell'etichetta del widget",
  ],
  [
    "Nel widget Spinbox, il parametro textvariable è:",
    "l'argomento di tipo StringVar collegato al widget",
  ],
  [
    "Nel widget Checkbutton, il parametro variable è:",
    "l'argomento di tipo BooleanVar a cui lo stato booleano è collegato",
  ],
  [
    "In un widget tk.Text, l'indice 3.7 wordend - 2 chars corrisponde a:",
    "penultimo carattere della parola contenente l'ottavo carattere della linea 3",
  ],
  [
    "Data la funzione ok(), nella chiamata al costruttore di un pulsante Button per impostare ok() come funzione di callback è necessario riportare:",
    "command = ok",
  ],
  ["Il widget di default della wrapper class LabelInput è:", "Entry"],
  [
    "Per i widget con pulsante, l'etichetta è impostabile con l'argomento:",
    "text",
  ],
  [
    "Per aggiungere un widget alla seconda riga in un layout a griglia è necessario passare al metodo grid:",
    "row=1",
  ],
  ["I metodi della classe LabelInput sottoposti a overriding sono:", "3"],
  ["La classe corrispondente al form è:", "DataRecordForm"],
  ["La classe corrispondente ad una sezione del form è:", "LabelFrame"],
  ["Il campo Serra è un widget:", "Combobox"],
  ["Il campo Seme campione è un widget:", "Entry"],
  ["Il campo Equipment fault è un widget:", "Checkbutton"],
  [
    "In un LabelInput per un widget Text, il parametro input_args è:",
    "un dizionario",
  ],
  [
    "Una volta terminato il form è necessario scrivere il codice per:",
    "recuperare dati dal form e resettare i dati inseriti nel form",
  ],
  ["La status bar è un widget:", "Label"],
  [
    "Le librerie utili presentate per il salvataggio dei dati del form su file CSV sono:",
    "3",
  ],
  [
    "Il metodo DictWriter del modulo csv della standard library richiede come parametri:",
    "gestore del file e chiavi del dizionario corrispondente ai widget",
  ],
  ["R è:", "un linguaggio di scripting"],
  ["RStudio è:", "l'ambiente di sviluppo creato per R"],
  ["Il quadrante che funge da schermo e comando rapido è:", "console"],
  [
    "Gli oggetti creati negli script sono visualizzati nel quadrante:",
    "workspace",
  ],
  [
    "Per caricare manualmente i dataset è necessario interagire con il quadrante:",
    "quadrante in basso a destra",
  ],
  [
    "Il risultato dell'esecuzione delle seguenti istruzioni a = c(1,2) names(a) = c(2,1) a è:",
    "a <br><br>2 1 <br><br>1 2",
  ],
  [
    "Dato il vettore numeric a, la somma dei valori di a si ottiene con la seguente istruzione:",
    "sum(a)",
  ],
  [
    "L'indicizzazione a[2] fa riferimento all'elemento del vettore in:",
    "seconda posizione",
  ],
  [
    "Il risultato dell'esecuzione delle seguenti istruzioni a = c(1,2,3) b = a&lt;0 a[b] è:",
    "numeric(0)",
  ],
  [
    "Il risultato dell'esecuzione delle seguenti istruzioni a = c(1,2,3,5,6) b = sum(a[2:4]) b è:",
    "10",
  ],
  ["I fattori sono:", "vettori con un numero limitato di livelli"],
  [
    "Il tipo dell'oggetto a dopo la seguente istruzione a = c('a','b','c') è:",
    "vettore",
  ],
  [
    "Il tipo dell'oggetto a dopo la seguente istruzione a = factor(c('a','b','c')) è:",
    "fattore",
  ],
  [
    "La funzione table() permette di:",
    "visualizzare la tabella di frequenza di un vettore",
  ],
  [
    "Il tipo dell'oggetto a dopo la seguente istruzione a = factor(c('a','b','c'), ordered = TRUE, levels = c('a','b','c')) è:",
    "fattore ordinato",
  ],
  [
    "La matrice ottenuta dalla seguente istruzione matrix(c(1,2,3,4,5,6)), nrow = 2, byrow = TRUE):",
    "ha un numero di colonne pari a 3",
  ],
  [
    "La matrice ottenuta dalla seguente istruzione matrix(c(1,3,5,7)), nrow = 2, ncol=2, byrow = FALSE) è la seguente:",
    "1 5<br><br>3 7",
  ],
  [
    "Per rinominare le due colonne di una matrice m 5x2 è necessario richiamare la seguente istruzione:",
    "colnames(m) = c('a','b')",
  ],
  ["La funzione cbind() permette di:", "aggiungere una colonna alla matrice"],
  [
    "Per eliminare la terza e la quarta riga nella matrice m è necessario richiamare la seguente istruzione:",
    "m[-(3:4),]",
  ],
  [
    "Solitamente, i dataframe hanno il numero di righe e di colonne pari a:",
    "numero di osservazioni e numero di variabili, rispettivamente",
  ],
  [
    "Dati i vettori a,b,c, il codice per creare il dataframe d è:",
    "d = data.frame(a,b,c)",
  ],
  ["La funzione summary() si comporta:", "in modo dipendente dalla variabile"],
  ["Il simbolo $ viene usato per:", "selezionare una variabile"],
  ["La funzione rownames() serve:", "modificare il nome delle osservazioni"],
  ["Per creare una nuova variabile in un dataframe esistono:", "2 metodi"],
  [
    "Dato il dataframe d, l'istruzione dim(t)[1] permette di visualizzare:",
    "il numero delle righe del dataframe",
  ],
  [
    "La funzione list() permette:",
    "sia di creare una lista, sia di ridenominare gli oggetti di una lista",
  ],
  ["Per inserire un nuovo oggetto in una lista esistono:", "2 metodi"],
  ["Per rinominare gli oggetti di una lista si usa la funzione:", "names()"],
  ["Il risultato della seguente operazione c(3,4)*c(2,1) sarà:", "6  4"],
  [
    "Il risultato della seguente operazione seq(0,10,3) sarà composto da:",
    "4 elementi",
  ],
  [
    "Il risultato della seguente operazione rep(c(2), each = 3, times = 4) sarà composto da:",
    "12 elementi",
  ],
  [
    'Il risultato della seguente operazione paste(c(1), collapse = "*") sarà:',
    '"1"',
  ],
  [
    "Il risultato delle seguenti operazioni v = as.logical(c(0,0,1,1,1)) sum(v) sarà:",
    "3",
  ],
  ["Il prodotto di due matrici di dimensioni 3x2 e 3x3:", "È impossibile"],
  [
    "Per poter visualizzare due grafici sovrapposti nella stessa area è necessario:",
    "invocare prima la funzione plot() e poi la funzione point()",
  ],
  [
    "La funzione per tracciare la retta di tendenza in un grafico è:",
    "abline()",
  ],
  [
    "L'istruzione par(mfrow = c(2,3)) permette di ottenere:",
    "un'area dei grafici composta da 2 righe e 3 colonne",
  ],
  [
    "Il boxplot è una rappresentazione grafica utile per:",
    "verificare la dispersione di una determinata variabile numerica",
  ],
  [
    "L'ultima versione dell'acronimo SPSS è:",
    "Statistical Product and Service Solutions",
  ],
  ["Le tipologie di comandi in  SPSS sono:", "3"],
  ["Le tipologie di file in  SPSS sono:", "5"],
  [
    "Nella struttura a matrice di SPSS:",
    "sulle righe si dispongono i casi e sulle colonne le variabili",
  ],
  [
    "Le tipologie di stato che vengono riportate nella barra di stato sono:",
    "4",
  ],
  [
    "Il formato del nome attribuito di default da SPSS alle variabili se non diversamente indicato è:",
    "var0000n",
  ],
  [
    "Il tipo di dato maggiormente utilizzato per le variabili in SPSS è:",
    "numerico",
  ],
  ["Il dizionario delle variabili ha estensione:", ".sav"],
  [
    "Per procedere con l'inserimento dei dati nella matrice di SPSS è necessario innanzitutto:",
    'definire le variabili nella scheda "Vista Variabile"',
  ],
  [
    'Per modificare e/o integrare un\'analisi statistica avviata tramite menu "Analizza" è necessario modificare il comando corrispondente a tale analisi:',
    'premendo "Incolla" nella finestra relativa all\'analisi',
  ],
  ["L'acronimo SAS sta per:", "Statistical Analysis System"],
  ["Le applicazioni di SAS che ne costituiscono il nucleo sono:", "6"],
  ["LOG è:", "una scheda della finestra SAS per i messaggi di SAS"],
  [
    "I dataset SAS di esempio si trovano:",
    'nel pannello navigazione alla voce "Librerie"',
  ],
  [
    "Per visualizzare una tabella di esempio di SAS tra i risultati è necessario:",
    "un data step seguito da un proc step",
  ],
  ["I componenti principali dei comandi in linguaggio SAS sono:", "3"],
  [
    "In un archivio SAS:",
    "le osservazioni sono in riga e le variabili sono in colonna",
  ],
  [
    "I tipi di variabile nei dataset SAS possono essere:",
    "numeriche e carattere",
  ],
  ["Un data step:", "inizia con l'istruzione data"],
  [
    "Per il raggruppamento delle osservazioni per una particolare categoria si usa la parola chiave:",
    "class",
  ],
  ["L'acronimo KPI sta per:", "Key Performance Indicator"],
  ["Per definire e riconoscere un problema è possibile individuare:", "5 fasi"],
  [
    "Le metriche vengono individuate e concordate nella fase di:",
    "elaborazione dei dati e flusso di lavoro",
  ],
  ["L'approccio per esplorare i KPI si basa su:", "4 passi"],
  ["Le metriche:", "possono essere prodotte con una manipolazione sui dati"],
  [
    "La variabile indipendente e la variabile dipendente sono, rispettivamente:",
    "la variabile esplicativa e la variabile target",
  ],
  ["Per esaminare le tendenze dei dati:", "si utilizza l'analisi descrittiva"],
  [
    "Il grafico a barre e l'istogramma si utilizzano per rappresentare:",
    "variabili categoriali e numeriche, rispettivamente",
  ],
  [
    "Il metodo per predisporre una variabile categoriale in base alla variabile target alla rappresentazione grafica è:",
    "groupby",
  ],
  ["La matrice di correlazione si ottiene grazie al metodo:", "corr"],
  [
    "L'istruzione d.describe().show(1) dove d è un dataframe spark permette di:",
    "il conteggio dei valori non mancanti nel dataframe",
  ],
  [
    "Per recuperare i record relativi ai valori mancanti in un dataframe Spark, si utilizza il metodo:",
    "where",
  ],
  [
    "Quante operazioni si possono mettere in pratica per gestire i dati mancanti:",
    "2",
  ],
  [
    "Per sostiuire i valori mancanti con un valore numerico costante si utilizza il metodo:",
    "fillna",
  ],
  [
    "I suggerimenti individuati per ottenere la riproducibilità utilizzando Jupyter notebook in Python sono:",
    "6",
  ],
  [
    "La modularizzazione del processo serve a:",
    "evitare di duplicare il codice",
  ],
  [
    "Per aumentare la riproducibilità con Jupyter Notebook si utilizzano le celle:",
    "Markdown",
  ],
  ["Il metodo più importante di pandas_profiling è:", "ProfileReport"],
  [
    "Cosa permette di visualizzare il metodo più importante della libreria pandas_profiling:",
    "Overview e correlazione",
  ],
  [
    "A livello di documentazione di un progetto di data science, quanti segmenti di documentazione è possibile individuare:",
    "2",
  ],
  [
    "E' possibile ricondurre le principali applicazioni economiche dei Big Data a:",
    "3 aspetti",
  ],
  ["L'unità di misura zettabytes equivale a:", "10<sup>21</sup> bytes"],
  [
    "La mole di dati sempre maggiore deriverà principalmente da:",
    "video online e IoT",
  ],
  [
    "Esempi di software commerciali per analizzare i dati sono:",
    "Google Analytics e Facebook insight",
  ],
  [
    "Il marketing 3.0 rispetto al marketing tradizionale permette di:",
    "riattivare clienti silenti e attivare iniziative una tantum",
  ],
  ["Nel 2017 il giro di affari dei Big Data era di:", "50 miliardi di dollari"],
  ["Gli attori principali dell'ecosistema dei Big Data sono:", "6"],
  [
    "L'asimmetria informativa:",
    "è tra utenti e operatori ed è dovuta sia alla mancanza di informazioni, sia al basso grado di conoscenza",
  ],
  ["Più di metà delle app a pagamento è stata scaricata:", "circa 10 volte"],
  [
    "Se due fenomeni presentano un'elevata correlazione vuol dire che:",
    "tra i due non esiste necessariamente una relazione causale",
  ],
  [
    "Lo scambio tipico tra le piattaforme online e gli utenti prevede che:",
    "gli utenti rilascino e generino le informazioni e le piattaforme offrano servizi gratuiti e la personalizzazione dell'esperienza",
  ],
  [
    "Con fonti algoritmiche di informazione si intendono:",
    "i motori di ricerca e i social network",
  ],
  [
    "Le principali categorie di algoritmi utilizzati dalle piattaforme online con riferimento all'ecosistema dell'informazione sono:",
    "5",
  ],
  [
    "EdgeRank è:",
    "un algoritmo che determina la visibilità dei contenuti e la personalizzazione dell'esperienza",
  ],
  [
    "Gli operatori in grado di acquisire la maggiore varietà e il maggior volume di dati sulle persone sono:",
    "social network",
  ],
  [
    "Nelle fonti di informazione, i social network si distinguono essenzialmente per:",
    "3 motivazioni principali",
  ],
  [
    "Dal punto di vista dell'autorevolezza dell'informazione, l'aspetto principale dei social network è rappresentato dal fatto che:",
    "i social network consentono l'ingresso nell'ecosistema informativo di fonti estranee al classico circuito dell'informazione",
  ],
  [
    "I fenomeni di viralizzazione dei contenuti informativi sono dovuti al fatto che:",
    "sui social network gli utenti diventano parte attiva nella diffusione di informazioni, opinioni e punti di vista",
  ],
  [
    "L'aspetto principale dei social network nella formazione dell'opinione pubblica è:",
    "la capacità di influire sugli stati emotivi",
  ],
  [
    "Nella diffusione del comportamento di voto offline incidono maggiormente:",
    "i legami forti",
  ],
  ["Infosphere è la soluzione per i Big Data di:", "IBM"],
  ["AWS fornisce una risposta per:", "enterprise data warehouse"],
  [
    "Le piattaform BI permettono di supportare:",
    "chi fa parte del processo decisionale",
  ],
  ["ML e AI:", "ML è un sottinsieme di AI"],
  [
    "Il componente di AWS destinato principalmente al machine learning si chiama:",
    "Amazon SageMaker",
  ],
  [
    "Il componente di AWS destinato principalmente ai Big Data si chiama:",
    "Amazon EMR",
  ],
  ["Il provisioning è:", "la configurazione dell'infrastruttura IT"],
  ["Software on-premises indica che:", "il software è in locale"],
  ["I servizi edge sono servizi:", "esposti su Internet"],
  [
    "Il modello hub-and-spoke:",
    "prevede un data center principale e più data center periferici",
  ],
  [
    "HPC e HTC sono acronimi rispettivamente di:",
    "High Performance Computing e High Technology Computer",
  ],
  ["Le prestazioni per HPC si misurano tipicamente in:", "PetaFLOPS"],
  [
    "I domini principali in ambito Big Data che sono significativi anche per i progetti europei di ricerca sono:",
    "10",
  ],
  [
    "I componenti principali di un ecosistema pervasivo di tecnologie abilitanti sono:",
    "reti ad alta velocità e repository di grandi volumi",
  ],
  ["I pilastri dell'industry 4.0 sono:", "9"],
  [
    "Nelle scienze sociali ed economia globali, i dati sono principalmente di tipo:",
    "comportamentale e psicologico",
  ],
  ["Il processo di data-mining è costitutito da:", "2 componenti"],
  [
    "Il principio fondamentale del machine learning è:",
    "l'addestramento basato su dati storici",
  ],
  [
    "L'apprendimento per rinforzo è:",
    "tipico del machine learning e prevede due comportamenti in merito al rinforzo",
  ],
  [
    "Nell'esempio del caso del NCSU, i Big Data sono stati integrati con tecniche di:",
    "intelligenza artificiale e, soprattutto, di  deep learning",
  ],
  [
    "Secondo lo psicologo francese Alfred Binet, le caratteristiche che distinguono l'intelligenza sono:",
    "3",
  ],
  [
    "Secondo lo psicologo francese Alfred Binet, le parole che riassumono l'intelligenza sono:",
    "4",
  ],
  ["Un sistema di AI deve essere dotato di:", "4 elementi"],
  [
    "Comparando l'intelligenza artificiale con un essere umano, l'intelligenza artificiale dovrebbe compiere in modo razionale:",
    "4 azioni",
  ],
  [
    "In un'attività complessa come quella di una partita a scacchi, la macchina utilizza un sistema:",
    "di weak AI",
  ],
  [
    "Nella tassonomia di Alom et al.:",
    "gli algoritmi ispirati al funzionamento del cervello costituiscono un sottoinsieme del Machine Learning",
  ],
  [
    "Nella tassonomia che mette in relazione le aree dell'AI e quelle della data science, l'area che non appartiene all'intersezione tra le due è:",
    "data analytics",
  ],
  [
    "Coloro che tendono a rispondere a richieste dei decision-maker sono:",
    "data scientist",
  ],
  ["Le categorie di problemi affrontabili con l'AI sono:", "4"],
  [
    "Gli algoritmi di ricerca e gli algoritmi di pianificazione:",
    "differiscono tra loro perché i primi cercano la soluzione, i secondi anche gli stati intermedi",
  ],
  [
    "Gli approcci computazionali in ambito AI si possono dividere, a grandi linee, in:",
    "4 paradigmi",
  ],
  [
    "Gli approcci computazionali in ambito AI di maggiore interesse per l'ambito Big Data sono:",
    "2 paradigmi",
  ],
  [
    "Il paradigma di AI, principalmente, si seleziona sulla base  di:",
    "3 motivi",
  ],
  [
    "Se ad un sistema, per la risoluzione di un problema, non si fornisce una formula matematica, ma delle coppie ordinate (input, soluzione), dal punto di vista dell'AI è possibile ricorrere a:",
    "Machine Learning",
  ],
  [
    "Se ad un sistema, per la risoluzione di un problema, non si fornisce una formula matematica, ma si forniscono informazioni teoriche inerenti il campo di applicazione, dal punto di vista dell'AI è possibile ricorrere a:",
    "Sistemi esperti",
  ],
  [
    "In un neurone artificiale la base dell'apprendimento è costituito:",
    "dal valore nel tempo del peso sinaptico",
  ],
  [
    'Il componente del modello del neurone che effettua l\'elaborazione ("calcoli") è:',
    "soma",
  ],
  ["Le sinapsi eccitatorie si dividono in:", "2 categorie"],
  [
    "Il percettrone non riesce a risolvere il problema di simulazione della porta logica:",
    "XOR",
  ],
  [
    "Le reti neurali che permettono, in linea teorica, di individuare classi con regioni incuneate sono caratterizzate da:",
    "3 strati",
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
