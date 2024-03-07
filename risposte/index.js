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
    `La Macchina di Turing e la Macchina di Von Neuman sono:`,
    `Modelli teorici di computazione algoritmica`,
  ],
  [
    `I problemi che possono essere risolti con un algoritmo sono:`,
    `Un sottoinsieme di tutti i problemi`,
  ],
  [
    `Rispetto alla Macchina di Turing la Macchina di Von Neuman risolve:`,
    `Gli stessi problemi`,
  ],
  [
    `In ogni transizioni di stato  della Macchina di Turing lo stato successivo  dipende:`,
    `Dallo stato attuale e dal simbolo letto sul nasto`,
  ],
  [
    `Il Sistema Operativo è un programma che:`,
    `Gestisce le risorse Hardware del computer assegnandole ai programmi da eseguire e l\'interazione con l\'utente`,
  ],
  [
    `Le componenti Hardware del computer comunicano tra loro utilizzando:`,
    `Canali di comunicazione detti bus`,
  ],
  [
    `La valutazione delle prestazioni di un computer misura:`,
    `L\'efficienza della esecuzione di un programma su un computer`,
  ],
  [
    `Un algoritmo è:`,
    `Una lista finita  di azioni comprensibili ed eseguibili  da una macchina`,
  ],
  [
    `I progressi della tecnologia hanno:`,
    `Migliorato le prestazioni del computer ma non hanno cambiato l\'insieme dei problemi algoritmicamente risolubili`,
  ],
  [
    `Nella Macchina di Turing gli stati, le trasizioni di stato, i simboli dell\'alfabeto, i caratteri della sequenza scritta sul nastro sono:`,
    `Insiemi  comunque grandi, ma sempre finiti`,
  ],
  [
    `Una Architettura RISC è caratterizzata da:`,
    `Istruzioni in Linguaggio Macchina più semplici ed un Hardware meno complesso`,
  ],
  [
    `Una istruzione in Linguaggio Macchina del MIPS è  rappresentata da:`,
    `Una sequenza di 32 cifre binarie`,
  ],
  [
    `L\'Assembler è:`,
    `Un programma che traduce un programma scritto in Assembly in un programma scritto in Linguaggio Macchina`,
  ],
  [
    `Per accedere al contenuto di un particolare registro è necessario conoscere:`,
    `L\'indirizzo di tale registro`,
  ],
  [
    `Nel Linguaggio Assembly del MIPS il simbolo $ seguito da  caratteri alfanumerici rappresenta:`,
    `L\'indirizzo di un registro del processore`,
  ],
  [
    `In un registro del Processore MIPS si può memorizzare:`,
    `Una sequenza di 32 cifre binarie`,
  ],
  [
    `Un programma scritto in un Linguaggio ad Alto Livello ed uno scritto in Assembly possono essere eseguiti:`,
    `Il primo su un qualunque computer il secondo solo su un computer con Architettura corrispondente all\'Assembly`,
  ],
  [
    `Una istruzione Assembly corrisponde sempre a:`,
    `Una sola istruzione in Linguaggio Macchina`,
  ],
  [
    `I registri del  Processore  MIPS con indirizzi da $t0 a $t9 e da $s0 a $s7 sono utilizzati per:`,
    `Memorizzare sequenze di 32 bit che rappresentano il valore degli operandi delle istruzioni`,
  ],
  [
    `Gli indirizzi dei registri del Processore MIPS sono:`,
    `I 32  numeri da 0 a 31`,
  ],
  [
    `La Sintassi di un Linguaggio Formale stabilisce:`,
    `Le regole per scrivere ogni istruzione del Linguaggio Formale in modo corretto`,
  ],
  [
    `La traduzione  dal  Linguaggio C in Assembly MIPS dell\'istruzione  max=200; con l\'associazione max--&gt; $s5  è:`,
    `addi  $s5,  $zero, 200`,
  ],
  [
    `La traduzione  dal  Linguaggio C in Assembly MIPS dell\'istruzione  a=a*2; con l\'associazione a--&gt; $s0  è:`,
    `add  $s0,  $s0,  $s0`,
  ],
  [
    `La traduzione  dal  Linguaggio C in Assembly MIPS dell\'istruzione  h=b+c; con l\'associazione b--&gt;$s5    c--&gt;$s2  h--&gt; $t0   è:`,
    `add  $t0,  $s5,  $s2`,
  ],
  [`Il registro destinazione nell\'istruzione add  $s2, $t0,  $t1   è:`, `$s2`],
  [
    `Il Codice Operativo di una istruzione aritmetica dell\'Assembly stabilisce:`,
    `L\'operazione aritmetica da eseguire e come reperire gli operandi`,
  ],
  [
    `Nell\'istruzione addi dell\'Assembly MIPS l\'operando costante è contenuto:`,
    `Nell\'istruzione`,
  ],
  [
    `La traduzione  dal  Linguaggio C in Assembly MIPS dell\'istruzione  n=0; con l\'associazione n--&gt; $s3  è:`,
    `addi  $s3,  $zero,  0`,
  ],
  [
    `La traduzione  dal  Linguaggio C in Assembly MIPS dell\'istruzione  val=i-k; con l\'associazione val--&gt; $s1   i--&gt; $s3  k--&gt; $s2  è:`,
    `sub  $s1,  $s3,  $s2`,
  ],
  [
    `La traduzione  dal  Linguaggio C in Assembly MIPS dell\'istruzione  m=m+k; con l\'associazione  k--&gt; $s3   m--&gt; $s0  è:`,
    `add  $s0,  $s0,  $s3`,
  ],
  [
    `Il numero di sequenze binarie diverse di lunghezza K è:`,
    `Il numero 2<sup>K</sup>`,
  ],
  [
    `In Notazione posizionale pesata il massimo valore rappresentabile con una sequenza binaria di lunghezza M è:`,
    `Il valore 2<sup>M</sup>-1`,
  ],
  [
    `La scelta dell\'alfabeto binario consente di:`,
    `Minimizzare l\'errore dovuto ad oscillazioni del valore dei segnali elettrici`,
  ],
  [
    `In Notazione posizionale pesata la cifra più significativa di una sequenza è:`,
    `La cifra che occupa la posizione più a sinistra`,
  ],
  [
    `In Notazione posizionale pesata una sequenza binaria con cifra meno significativa uguale a 0 rappresenta:`,
    `Un numero pari`,
  ],
  [
    `In Notazione posizionale pesata la cifra più significativa di una sequenza di lunghezza K è associata al peso:`,
    `Dato dal valore 2<sup>K-1</sup>`,
  ],
  [
    `In Notazione posizionale pesata il massimo valore che si può rappresentare nel contenuto di un registro del processore è:`,
    `Il valore 2<sup>32</sup>-1`,
  ],
  [
    `Per specificare l\'indirizzo di un registro del processore MIPS occorre:`,
    `Una sequenza di 5 bit`,
  ],
  [
    `Il risultato di un calcolo determina un overflow quando:`,
    `Per rappresentare il risultato è necessario un numero di bit maggiore della lunghezza dei registri del processore`,
  ],
  [
    `In Notazione posizionale pesata la sequenza binaria 11011 rappresenta il valore:`,
    `Del numero 27 in base 10`,
  ],
  [
    `In Notazione posizionale pesata, l\'addizione di due interi positivi si effettua:`,
    `Ponendo a 0 il riporto sulla cifra meno significativa e sommando in sequenza su ogni posizione i bit degli operandi e del riporto a partire da destra`,
  ],
  [
    `Nella notazione in modulo e segno, il segno del risultato dell\'addizione è:`,
    `Quello del numero con modulo maggiore`,
  ],
  [
    `Nella Notazione in complemento a 2, il peso del bit più a sinistra in una sequenza di lunghezza K è:`,
    `Il valore -2<sup>K-1</sup>`,
  ],
  [
    `Nella Notazione in complemento a 2, il segno del numero è determinato da:`,
    `Il bit più a sinistra con il relativo peso negativo`,
  ],
  [
    `Nella Notazione in complemento a 2, la somma di due interi con segni opposti viene eseguita:`,
    `Addizionando i due numeri`,
  ],
  [
    `Nella Notazione in complemento a 2, il massimo numero rappresentabile con sequenze di lunghezza M è:`,
    `Il valore 2<sup>M -1</sup> -1`,
  ],
  [
    `Nella Notazione in complemento a 2, il minimo numero rappresentabile con sequenze di lunghezza M è:`,
    `Il valore -2<sup>M -1</sup>`,
  ],
  [
    `Nella Notazione in complemento a 2, la sequenza binaria 0101 rappresenta:`,
    `Il valore +5`,
  ],
  [
    `Nella Notazione in complemento a 2, la sequenza binaria 1001 rappresenta:`,
    `Il valore -7`,
  ],
  [
    `Nella Notazione in complemento a 2, la sequenza binaria 1111 rappresenta:`,
    `Il valore -1`,
  ],
  [
    `In Notazione in complemento a 2, la rappresentazione dell\'opposto del valore rappresentato da una sequenza di N bit si ottiene:`,
    `Complementando la sequenza bit a bit ed aggiungendo il valore 1`,
  ],
  [
    `In Notazione in complemento a 2, la sottrazione di due operandi si esegue:`,
    `Addizionando al primo operando il secondo complementato bit a bit e sommato con il valore 1`,
  ],
  [
    `La dichiarazione di tipo intero per una variabile in un Linguaggio ad Alto Livello indica al Compilatore che:`,
    `Per la variabile si deve utilizzare la Notazione in complemento a 2`,
  ],
  [`L\'overflow può verificarsi:`, `Addizionando numeri con lo stesso segno`],
  [
    `In Notazione in complemento a 2, l\'overflow viene segnalato quando gli ultimi due riporti c<sub>N</sub> e c<sub>N-1</sub>:`,
    `Sono diversi`,
  ],
  [
    `In Notazione in complemento a 2, l\'estensione del segno:`,
    `Aumenta la lunghezza di una sequenza senza modificarne il valore rappresentato`,
  ],
  [
    `L\'estensione del segno di una sequenza con bit più significativo uguale a 1 si effettua:`,
    `Ponendo a sinistra di tale bit tutte cifre uguali a 1`,
  ],
  [
    `Eseguendo un\'addizione in Notazione in complemento a 2, se c<sub>N</sub> ha valore 0 e c<sub>N-1</sub> ha valore 1:`,
    `Il risultato è sbagliato`,
  ],
  [
    `Eseguendo un\'addizione in Notazione in complemento a 2, se c<sub>N</sub> ha valore 1 e c<sub>N-1</sub> ha valore 1:`,
    `Il risultato è corretto`,
  ],
  [
    `Eseguendo un\'addizione in Notazione in complemento a 2, i riporti c<sub>N</sub> e c<sub>N-1</sub> che segnalano l\'Overflow nell\'Architettura MIPS sono:`,
    `I riporti con indici c<sub>32</sub> e c<sub>31</sub>`,
  ],
  [
    `L\'estensione del segno di una sequenza con bit più significativo uguale a 0 si effettua:`,
    `Ponendo a sinistra di tale bit tutte cifre uguali a 0`,
  ],
  [
    `Il Formato di una istruzione in Linguaggio Macchina  è definito da:`,
    `Una suddivisione concettuale della sequenza binaria che rappresenta l\'istruzione in sottosequenze di lunghezza e posizione fissata`,
  ],
  [
    `La Modalità di Indirizzamento di una istruzione in Linguaggio Macchina stabilisce:`,
    `La regola per determinare gli indirizzi degli operandi utilizzando il contenuto dei campi stabiliti dal Formato`,
  ],
  [
    `Nel Linguaggio Macchina MIPS, i campi del Formato di Tipo R sono:`,
    `Sottosequenze della sequenza binaria che rappresenta l\'istruzione di lunghezze 6, 5, 5, 5, 5, 6`,
  ],
  [
    `Nel Linguaggio Macchina  MIPS, il campo Codice Operativo di una istruzione stabilisce:`,
    `L\'operazione da eseguire ed il Formato dell\'istruzione`,
  ],
  [
    `Nel Linguaggio Macchina  MIPS, il campo funct è:`,
    `Un campo di 6 bit del Formato di Tipo R che indica l\'operazione Aritmetico-Logica da eseguire`,
  ],
  [
    `Nel Linguaggio Macchina  MIPS, con l\'Indirizzamento tramite registro gli indirizzi degli operandi sono contenuti:`,
    `Nei campi rs e rt del Formato di Tipo R`,
  ],
  [
    `Le lunghezze dei campi dell\'istruzione in Linguaggio Macchina MIPS  che traduce l\'istruzione Assembly add $t0, $s0, $s1  sono:`,
    `I valori 6, 5, 5, 5, 5, 6`,
  ],
  [
    `Le istruzioni del Linguaggio Macchina MIPS con Codice operativo 0 hanno:`,
    `Il Formato di Tipo R`,
  ],
  [
    `La suddivisione in campi dell\'istruzione in Linguaggio Macchina MIPS 00000010000100010100000000100000 in base al suo Formato è data:`,
    `Dalle sottosequenze 000000, 10000, 10001, 01000, 00000, 100000`,
  ],
  [
    `Nell\'istruzione  in Linguaggio Macchina MIPS con valori dei campi del Formato dati da 000000, 01000, 01001, 10000, 00000, 100010 l\'indirizzo del registro che contiene il risultato è:`,
    `Il campo 10000`,
  ],
  [
    `L\'operatore AND ha valore 1 quando:`,
    `Gli operandi hanno entrambi valore 1`,
  ],
  [
    `L\'operatore OR ha valore 0 quando:`,
    `Gli operandi hanno entrambi valore 0`,
  ],
  [
    `Per le istruzioni Aritmetico-Logiche del Linguaggio Macchina MIPS il campo Codice Operativo contiene:`,
    `La sequenza di 6 bit 000000`,
  ],
  [
    `Il Formato dell\'istruzione in Linguaggio Macchina MIPS 00000010000100010100000000100101 è:`,
    `Di Tipo R`,
  ],
  [
    `Nel Linguaggio Macchina  MIPS, il campo shamt del Formato di Tipo R contiene:`,
    `Il numero di posizioni da scorrere nelle istruzioni di shift, altrimenti 0`,
  ],
  [
    `Nell\'istruzione in Linguaggio Macchina MIPS con campi del Formato dati da 000000, 01000, 01001, 11110, 00000, 100101 gli indirizzi degli operandi sono:`,
    `I valori binari 01000, 01001`,
  ],
  [
    `Nel Linguaggio Macchina  MIPS, la Modalità di Indirizzamento delle  istruzioni and ed or è:`,
    `Tramite registro per entrambe`,
  ],
  [
    `La traduzione in Assembly MIPS  dell\'OR bit a bit con operandi nei registri $s1  e $s2  e risultato nel registro $t0   è:`,
    `L\'istruzione or  $t0,  $s1,  $s2`,
  ],
  [
    `La traduzione   in Assembly MIPS dello Shift a sinistra di 4 posizioni con registro operando $s3 e registro destinazione $t0 è:`,
    `L\'istruzione  sll   $t0, $s3, 4`,
  ],
  [
    `La traduzione  in Assembly MIPS dell\'AND bit a bit con operandi nei registri $s1  e  $s2  e risultato nel registro $s5   è:`,
    `L\'istruzione  and   $s5, $s1,  $s2`,
  ],
  [
    `Nel Linguaggio Macchina MIPS, i campi del Formato di Tipo I contengono:`,
    `Sequenze di lunghezza 6, 5, 5, 16`,
  ],
  [
    `Nel Linguaggio Macchina MIPS, la suddivisione in campi dell\'istruzione 00100001000010011000000000100101 con Formato di Tipo I è data:`,
    `Dalle sequenze 001000, 01000, 01001, 1000000000100101`,
  ],
  [
    `Nel Linguaggio Macchina MIPS, il Formato e la Modalità di Indirizzamento dell\'istruzione addi sono:`,
    `Formato di Tipo I con Indirizzamento immediato`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento val = b - 300 con l\'associazione tra variabi e indirizzi di registri b--&gt;$s1 e val--&gt;$t0 è:`,
    `L\'istruzione addi $t0, $s1, -300`,
  ],
  [
    `Nel Formato di Tipo I, i valori del campo immediato sono compresi tra:`,
    `Il minimo -2<sup>15</sup> ed il massimo 2<sup>15</sup>-1`,
  ],
  [
    `L\'operando immediato dell\'istruzione Assembly MIPS addi $t0, $s1, 30 è rappresentato in Linguaggio Macchina mediante:`,
    `Una sequenza di 16 bit in Notazione in complemento a 2`,
  ],
  [
    `Prima della esecuzione di una istruzione con Formato di Tipo I il valore del campo immediato viene:`,
    `Inviato all\'ALU aggiungendo 16 bit mediante estensione del segno alla sequenza contenuta nel campo`,
  ],
  [
    `La Modalità di Indirizzamento immediato è utilizzata con:`,
    `Solo il Formato di Tipo I`,
  ],
  [
    `Nel Linguaggio Macchina MIPS, la Modalità di Indirizzamento immediato fornisce due operandi mediante due campi del Formato di Tipo I che contengono:`,
    `Un numero intero in Notazione in complemento a 2 che costituisce un operando e l\'indirizzo di un registro che contiene l\'altro operando`,
  ],
  [
    `L\'esecuzione dell\'istruzione Assembly MIPS addi $s7, $t0, -35 ha l\'effetto di:`,
    `Addizionare -35 al contenuto del registro di indirizzo $t0 e scrivere il risultato come contenuto del registro di indirizzo $s7`,
  ],
  [
    `Gli indirizzi della Memoria principale MIPS sono dati da:`,
    `Sequenze di 32 bit`,
  ],
  [
    `Le dimensioni di 1 Kappa, 1 Mega, 1 Giga corrisponsono:`,
    `Ai valori 1 Kappa = circa Mille, 1 Mega = circa un Milione, 1 Giga = circa un Miliardo`,
  ],
  [
    `Il numero di locazioni della Memoria principale MIPS è dato dal:`,
    `Valore 2<sup>32</sup>`,
  ],
  [
    `Il contenuto di una locazioni della Memoria principale MIPS è dato da:`,
    `Una sequenza di 8 bit`,
  ],
  [
    `In Assembly MIPS, l\'operazione di leggere la parola che inizia all\'indirizzo di Memoria calcolato tramite il registro Base di indirizzo $t1 e l\'Offset 9 e scriverla nel registro di indirizzo $s2 è eseguita dalla:`,
    `Istruzione lw $s2, 9 ($t1)`,
  ],
  [
    `L\'istruzone Assembly MIPS lw $t5, 4($s0):`,
    `Legge la parola di Memoria che inizia dall\'indirizzo dato dalla somma del contenuto del registro Base di indirizzo $s0 più l\'Offset 4, e la scrive come contenuto del registro di indirizzo $t5`,
  ],
  [
    `In Assembly MIPS, l\'operazione di scrittura del contenuto del registro di indirizzo $s3 nella parola che inizia all\'indirizzo di Memoria calcolato tramite il registro Base di indirizzo $t0 e l\'Offset 8 è eseguita dalla:`,
    `Istruzione sw $s3, 8 ($t0)`,
  ],
  [
    `L\'istruzone Assembly MIPS sw $t1, 4($s5):`,
    `Scrive il contenuto del registro di indirizzo $t1 nella parola di Memoria che inizia dall\'indirizzo dato dal contenuto del registro Base di indirizzo $s5 più l\'Offset 4`,
  ],
  [
    `Per l\'istruzione load word la modalità di indirizzamento tramite Base e Offset calcola:`,
    `L\'indirizzo di una parola di Memoria da cui leggere un dato`,
  ],
  [
    `Per l\'istruzione store word la modalità di indirizzamento tramite Base e Offset calcola:`,
    `L\'indirizzo di una parola di Memoria in cui scrivere un dato`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento val = A[3], associando a val il registro di indirizzo $t0, ed assumendo che l\'indirizzo del registro Base dell\'Array di numeri interi è $s1, è data da:`,
    `L\'istruzione lw $t0, 12 ($s1)`,
  ],
  [
    `Il valore dell\'Offset nell\'istruzione Assembly MIPS lw $t0, 5($s3) è rappresentato nel Formato corrispondente in Linguaggio Macchina mediante:`,
    `I 16 bit del campo immediato del Formato di Tipo I`,
  ],
  [
    `Nel Linguaggio Macchina MIPS, la Modalità di Indirizzamento dell\'istruzione store word calcola:`,
    `L\'indirizzo del primo Byte della parola di Memoria dove scrivere il dato letto da un registro`,
  ],
  [
    `La suddivisione in campi del Formato dell\'istruzione load word 10001110000010010000000000000111 in Linguaggio Macchina MIPS è data da:`,
    `Le 4 sottosequenze 100011, 10000, 01001, 0000000000000111`,
  ],
  [
    `L\'indirizzo del registro Base nel Formato dell\'istruzione in Linguaggio Macchina store word 101011, 01000, 01111, 0000000000000001 è dato da:`,
    `La sottosequenza 01000`,
  ],
  [
    `Il registro Base di un Array contiene:`,
    `L\'indirizzo del primo Byte della parola di Memoria in cui è memorizzato l\'elemento A[0]`,
  ],
  [
    `L\'errore "Array out of bounds" avviene quando:`,
    `Si utilizza un valore dell\'indice dell\'Array che determina un accesso a locazioni di Memoria fuori dallo spazio destinato a contenere gli elementi dell’Array`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento A[5] = val, associando a val il registro di indirizzo $s2 ed assumendo che l\'indirizzo del registro Base dell\'Array di numeri interi è $t3, è data da:`,
    `L\'istruzione sw $s2, 20 ($t3)`,
  ],
  [
    `L\'indirizzo di Memoria dell\'elemento B[9] di un Array di numeri interi è dato da:`,
    `L\'indirizzo del primo Byte dell\'elemento B[9] ottenuto sommando l\'Offset 36 al contenuto del registro Base dell\'Array`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento val = A[0], associando a val il registro di indirizzo $t0, ed assumendo che l\'indirizzo del registro Base dell\'Array di numeri interi è $s1, è data da:`,
    `L\'istruzione lw $t0, 0 ($s1)`,
  ],
  [
    `L\'esecuzione dell\'istruzione Assembly MIPS beq $t1, $t2, NOME determina:`,
    `Un salto all\'esecuzione dell\'istruzione con etichetta NOME se i contenuti dei registri con indirizzi $t1 e $t2 sono UGUALI`,
  ],
  [
    `Nel Linguaggio Assembly MIPS il salto ad una istruzione con etichetta NEW se il valore dei registri con indirizzi $s0, $s1 sono DIVERSI è eseguito dalla:`,
    `Istruzione bne $s0, $s1, NEW`,
  ],
  [
    `Nel Linguaggio Macchina MIPS l\'istruzione beq ha:`,
    `Formato di Tipo I e Indirizzamento relativo al Program Counter`,
  ],
  [
    `Il campo immediato del Formato di Tipo I dell\'istruzione in Linguaggio Macchina MIPS  che traduce l\'istruzione Assembly bne $t3, $t5, NOME contiene:`,
    `Il numero di istruzioni da saltare in Notazione in complemento a 2`,
  ],
  [
    `I campi del Formato dell\'istruzione in Linguaggio Macchina MIPS  00010010000010000000000000000111 che traduce l\'istruzione Assembly beq $s0, $t0, ETICHETTA sono dati dalle:`,
    `Sottosequenze  000100,  10000,  01000,  0000000000000111 rispettivamente di lunghezza 6, 5, 5, 16`,
  ],
  [
    `Nella Modalità di Indirizzamento relativo al Program Counter il contenuto del campo immediato è esteso di segno a 32 bit perchè:`,
    `Il contenuto del campo immediato moltiplicato per 4 è addizionato al valore del Program Counter dall\'ALU che richiede operandi a 32 bit`,
  ],
  [
    `Nella traduzione in Linguaggio Macchina MIPS gli indirizzi dei registri che figurano nell\'istruzione Assembly beq $s2, $s3, ETICHETTA sono posti:`,
    `Nei campi di 5 bit del Formato di Tipo I nello stesso ordine che presentano nell\'istruzione Assembly`,
  ],
  [
    `La Modalità di Indirizzamento relativo al Program Counter è associata:`,
    `Alle istruzioni beq e bne`,
  ],
  [
    `La Modalità di Indirizzamento relativo al Program Counter calcola l\'indirizzo:`,
    `Della istruzione a cui saltare, addizionando al contenuto del Program Counter  il valore del campo immediato esteso di segno e moltiplicato per 4`,
  ],
  [
    `Nella Modalità di Indirizzamento relativo al Program Counter il contenuto del campo immediato è moltiplicato per 4 perchè:`,
    `Rappresenta il numero di  istruzioni da saltare e ogni istruzione occupa 4 Byte di Memoria`,
  ],
  [
    `Nel Linguaggio Assembly MIPS l\'istruzione  j NOME esegue:`,
    `Il salto incondizionato all\'istruzione del programma preceduta dall\'etichetta NOME`,
  ],
  [
    `L\'istruzione Assembly MIPS di salto incondizionato ha:`,
    `La forma sintattica  j ETICHETTA`,
  ],
  [
    `L\'istruzione del Linguaggio Macchina MIPS che traduce l\'istruzione Assembly   j NOME  ha:`,
    `Formato di Tipo J e Indirizzamento pseudodiretto`,
  ],
  [
    `I campi del Formato dell\'istruzione in Linguaggio Macchina MIPS  00001011111000000000011111000011 che traduce l\'istruzione Assembly  j NOME sono dati dalle:`,
    `Sottosequenze  000010,   11111000000000011111000011  di lunghezze 6, 26`,
  ],
  [
    `Il campo di 26 bit del Formato di Tipo J del Linguaggio Macchina MIPS contiene:`,
    `Una parte dell\'indirizzo di salto incondizionato dell\'istruzione Assembly j`,
  ],
  [
    `I campi del Formato J dell\'istruzione del Linguaggio Macchina MIPS che traduce l\'istruzione Assembly   j NOME  contengono:`,
    `Sottosequenze binarie  di lunghezze 6, 26`,
  ],
  [
    `Nel Linguaggio Macchina MIPS l\'Indirizzamento pseudodiretto è associato:`,
    `All\'istruzione j ed al Formato di Tipo J`,
  ],
  [
    `Nel Linguaggio Macchina MIPS l\'Indirizzamento pseudodiretto calcola:`,
    `L\'indirizzo dell\'istruzione a cui saltare`,
  ],
  [
    `L\'Indirizzamento pseudodiretto completa i 26 bit nel campo del formato di Tipo J mediante:`,
    `L\'aggiunta di due bit 00 a destra, e dei 4 bit più significativi del Program Counter a sinistra`,
  ],
  [
    `L\'Indirizzamento pseudodiretto richiede che:`,
    `Tutte le istruzioni del programma siano memorizzate in locazioni di Memoria i cui indirizzi hanno i 4 bit più significativi che non cambiano`,
  ],
  [
    `<img alt="" height="153" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/2872_CicliForWhile_PEG/img/testImage_1538061439530.jpg" title="B2.jpg" width="212"><br><br>Per mantenere lo schema dell\'istruzione IF-ELSE mostrato in figura la traduzione in Assembly MIPS della condizione logica su uguaglianza è:`,
    `L\'istruzione bne $t0, $zero, ELSE, dove ELSE è l\'etichetta di istruzione_2`,
  ],
  [
    `<img alt="" height="175" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/2872_CicliForWhile_PEG/img/testImage_1538061467566.jpg" title="B3.jpg" width="243"><br><br>Per mantenere lo schema dell\'istruzione IF-ELSE mostrato in figura la traduzione in Assembly MIPS della condizione logica su disuguaglianza è:`,
    `L\'istruzione beq $t0, $t1, ELSE, dove ELSE è l\'etichetta di istruzione_2`,
  ],
  [
    `L\'istruzione IF_ELSE del Linduaggio ad Alto Livello, nel Linguaggio Assembly:`,
    `Non ha una corrispondente istruzione e viene tradotta combinando istruzioni di salto condizionato ed incondizionato`,
  ],
  [
    `In Linguaggio Assembly la ripetizione di un insieme di istruzioni per un numero fissato di volte può essere ottenuta:`,
    `Mediante combinazioni delle istruzioni di salto condizionato e incondizionato`,
  ],
  [
    `<img alt="" height="143" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/2872_CicliForWhile_PEG/img/testImage_1538061493455.jpg" title="B6.jpg" width="271"><br><br>Per ottenere lo schema dell\'istruzione FOR mostrato in figura la traduzione in Assembly MIPS della condizione logica su disuguaglianza è:`,
    `L\'istruzione beq $t0, $t1, END_FOR, dove END_FOR è l\'etichetta della istruzione_2`,
  ],
  [
    `L\'istruzione FOR nel Linguaggio Assembly:`,
    `Non ha una corrispondente istruzione e viene tradotta combinando istruzioni di salto condizionato ed incondizionato`,
  ],
  [
    `La traduzione della inizializzazione del ciclo FOR in Linguaggio Assembly è posta:`,
    `Prima dell\'insieme di istruzioni che viene ciclicamente ripetuto`,
  ],
  [
    `<img alt="" height="150" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/2872_CicliForWhile_PEG/img/testImage_1538061531252.jpg" title="B9.jpg" width="250"><br><br>Per ottenere lo schema dell\'istruzione WHILE mostrato in figura la traduzione in Assembly MIPS della condizione logica su uguaglianza è:`,
    `L\'istruzione bne $t0, $t1, END_WHILE, dove END_WHILE è l\'etichetta della istruzione_2`,
  ],
  [
    `L\'istruzione WHILE nel Linguaggio Assembly:`,
    `Non ha una corrispondente istruzione e viene tradotta combinando istruzioni di salto condizionato ed incondizionato`,
  ],
  [
    `La traduzione in Assembly di un ciclo WHILE di un programma in Linguaggio ad Alto Livello determina un ciclo infinito:`,
    `Quando il WHILE del programma in Linguaggio ad Alto Livello determina un ciclo infinito`,
  ],
  [
    `Nel Linguaggio Macchina  per passare alla esecuzione di una procedura è necessario:`,
    `Porre l\'indirizzo della prima istruzione della procedura nel Program Counter, e salvare l\'indirizzo di ritorno all\'esecuzione del programma chiamante con una istruzione di salto`,
  ],
  [
    `Nel Linguaggio Macchina l\'indirizzo di ritorno dalla chiamata di una procedura è:`,
    `L\'indirizzo della istruzione del programma chiamante successiva alla istruzione jal di salto alla esecuzione della procedura`,
  ],
  [
    `Nel Linguaggio Macchina MIPS i valori dei parametri vengono passati alla procedura chiamata:`,
    `Nella esecuzione del programma chiamante scrivendoli nei registri  $a0, $a1,  $a2,  $a3   prima di effettuare il salto alla esecuzione della procedura`,
  ],
  [
    `Nel Linguaggio Macchina MIPS i valori calcolati dalla procedura chiamata vengono passati al programma chiamante:`,
    `Nella esecuzione della procedura scrivendoli nei registri $v0, $v1 durante l\'esecuzione della procedura`,
  ],
  [
    `Nel Linguaggio Macchina MIPS l\'indirizzo di ritorno al programma chiamante è salvato:`,
    `Nel registro riservato $ra nella esecuzione della istruzione jal che effettua il salto alla procedura`,
  ],
  [
    `Nel Linguaggio Macchina MIPS il ritorno alla esecuzione del programma chiamante è effettuato:`,
    `Mediante l\'esecuzione della istruzione jr che alla fine della procedura effettua il salto  di ritorno al  programma  chiamante`,
  ],
  [
    `Le chiamate di procedura annidate sono gestite:`,
    `Utilizzando una struttura dati di Tipo stack,  scrivendo le informazioni relative ad ogni procedura in un segmento,  detto frame, delle locazioni di Memoria assegnate allo stack`,
  ],
  [
    `L\'errore di call stack overflow avviene quando:`,
    `Si esaurisce lo spazio di Memoria assegnato alla struttura dati call stack`,
  ],
  [
    `Nel Linguaggio macchina MIPS il Formato e la Modalità di Indirizzamento dell\'istruzione jal sono:`,
    `Formato di Tipo J e Indirizzamento pseudodiretto`,
  ],
  [
    `Nel Linguaggio macchina MIPS il Formato e la Modalità di Indirizzamento dell\'istruzione jr sono:`,
    `Formato di Tipo R e Indirizzamento tramite registro`,
  ],
  [
    `L\'esecuzione dell\'istruzione Assembly MIPS slt $t0, $s1, $s2:`,
    `Pone nel registro $t0 il valore 1 se, in Notazione in complemento a 2, il valore contenuto nel registro $s1 è minore del valore contenuto nel registro $s2 , altrimenti pone 0`,
  ],
  [
    `La traduzione in Linguaggio Macchina MIPS dell\'istruzione slt $s1, $t3, $t4 ha:`,
    `Formato di Tipo R e Indirizzamento tramite registro`,
  ],
  [
    `Il Tipo di dato unsigned è rappresentato da:`,
    `Sequenze binarie nella Notazione posizionale pesata`,
  ],
  [
    `Nella rappresentazione con 32 bit del Tipo di dato unsigned il bit più a sinistra è:`,
    `Associato al peso positivo 2<sup>31</sup>`,
  ],
  [
    `I valori unsigned rappresentati da sequenze di 32 bit sono compresi:`,
    `Nell\'intervallo [0, 2<sup>32</sup>-1 ]`,
  ],
  [
    `La regola che segnala l\'Overflow per la somma di interi con segno nella Notazione in Complemento a 2 in base agli ultimi due riporti calcolati:`,
    `Non si applica per gli interi unsigned`,
  ],
  [
    `Le istruzioni Assembly MIPS con Codici Operativi addu e subu eseguono:`,
    `Addizione e sottrazione di operandi unsigned contenuti in due registri del processore`,
  ],
  [
    `Per le istruzione Logiche and, or il Linguaggio Assembly:`,
    `Non ha le corrispondenti istruzioni per operandi unsigned perché le operazioni sono eseguite bit a bit`,
  ],
  [
    `L\'esecuzione dell\'istruzione Assembly MIPS sltu $t0, $s1, $s2:`,
    `Pone nel registro $t0 il valore 1 se, in Notazione posizionale pesata senza segno, il valore contenuto nel registro $s1 è minore del valore contenuto nel registro $s2 , altrimenti pone 0`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3080_InteriUnsigned_PEG/img/testImage_1539599584152.jpg" title="Dom10.jpg"><br><br><br><br>Le istruzioni in figura possono essere tradotte in Assembly MIPS:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3080_InteriUnsigned_PEG/img/testImage_1539599601183.jpg" title="Risp101.jpg"><br><br><br><br>Dalle istruzioni in figura`,
  ],
  [
    `L\'esecuzione dell\'istruzione Assembly MIPS slti $s1, $t2, 35:`,
    `Stabilisce se il contenuto del registro di indirizzo $t2 è minore del valore costante 35, e pone in $s1 il valore 1 se la relazione è vera altrimenti pone 0`,
  ],
  [
    `L\'istruzione in Linguaggio Macchina MIPS che traduce set on less then immediato ha:`,
    `Formato di Tipo I e Indirizzamento immediato`,
  ],
  [
    `Il valore della costante presente nell\'istruzione Assembly MIPS slti $s1, $t2, -50 viene scritto:`,
    `In Notazione in complemento a 2 nei 16 bit del campo immediato del formato di Tipo I`,
  ],
  [
    `L\'operando costante dell\'istruzione slti $s0, $t1, -70 si ottiene:`,
    `Effettuando l\'estensione del segno a 32 bit della sequenza di 16 bit nel campo immediato che rappresenta il valore costante`,
  ],
  [
    `L\'operando costante dell\'istruzione set on less then immediato ha un valore compreso:`,
    `Tra il minimo negativo -2<sup>15</sup> ed il massimo positivo 2<sup>15</sup>-1`,
  ],
  [
    `L\'operando costante dell\'istruzione ori $s0, $t2, 25 si ottiene:`,
    `Completando a 32 bit la sequenza di 16 bit nel campo immediato, che rappresenta il valore costante, con bit tutti uguali a 0`,
  ],
  [
    `Le istruzioni in Linguaggio Macchina MIPS che traducono le istruzioni logiche andi e ori:`,
    `Hanno Formato di Tipo I e Indirizzamento immediato`,
  ],
  [
    `L\'istruzione Assembly MIPS ori $s0, $t3, 9 effettua:`,
    `L\'OR bit a bit tra il valore contenuto nel registro $t3 e il valore 9 rappresentato nei 16 bit del campo immediato completato a 32 bit aggiungendo tutti bit uguali a 0, il risultato è posto in $s0`,
  ],
  [
    `Un valore la cui rappresentazione richiede più di 16 bit significativi:`,
    `Non può essere l\'operando immediato di una istruzione Assembly MIPS con Formato di Tipo I`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3086_ImmediatiCostanti_PEG/img/testImage_1539613686326.jpg" title="Dom10.jpg"><br><br><br><br>Le istruzioni in figura possono essere tradotte in Assembly MIPS:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3086_ImmediatiCostanti_PEG/img/testImage_1539613721802.jpg" title="Risp103.jpg"><br><br><br><br>Dalle istruzioni in figura`,
  ],
  [
    `I caratteri rappresentati nella codifica ASCII sono:`,
    `In totale 128 costituiti da 95 caratteri stampabili e 33 simboli non stampabili`,
  ],
  [`Il codice ASCII utilizza sequenze binarie:`, `Di lunghezza 7`],
  [`Il codice ASCII esteso utilizza sequenze binarie:`, `Di lunghezza 8`],
  [`I codici ASCII sono compresi tra:`, `Il minimo 0 e il massimo 127`],
  [
    `Il sistema di codifica Unicode:`,
    `Include la codifica ASCII come sottinsieme`,
  ],
  [
    `Il sistema di codifica Unicode UTF-8 utilizza:`,
    `Sequenze composte da un numero variabile di Byte per codificare i caratteri`,
  ],
  [
    `Il sistema di codifica Unicode UTF-16 utilizza sequenze binarie:`,
    `Di lunghezza 16`,
  ],
  [
    `L\'assegnamento val=\'A\' con val corrispondente al registro $s1 si traduce in Assembly MIPS:`,
    `Con l\'istruzione ori $s1, $zero, 65`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3094_CarattereStringa_PEG/img/testImage_1539684359276.jpg" title="Dom9.jpg"><br><br><br><br>Una traduzione in Assembly MIPS delle istruzioni in figura è data:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3094_CarattereStringa_PEG/img/testImage_1539684420521.jpg" title="Risp91.jpg"><br><br>Dalle istruzioni in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3094_CarattereStringa_PEG/img/testImage_1539684466626.jpg" title="Dom10.jpg"><br><br>Ricordando che il carattere A ha codice ASCII decimale 65, una traduzione Assembly MIPS delle istruzioni in figura è data:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3094_CarattereStringa_PEG/img/testImage_1539684497066.jpg" title="Risp103.jpg"><br><br>Dalle istruzioni in figura`,
  ],
  [
    `L\'operazione effettuata dall\'esecuzione dell\'istruzione lb $t0, 30($s1) è:`,
    `Leggere la sequenza di 8 bit contenuti in una locazione  di Memoria e scriverla negli 8 bit meno significativi del registro $t0 di 32 bit, con estensione del segno a 32 bit`,
  ],
  [
    `L\'operazione effettuata dall\'esecuzione dell\'istruzione lhu $t0, 30($s1) è:`,
    `Leggere la sequenza di 16 bit contenuti in due locazioni successive di Memoria e scriverla nei 16 bit meno significativi del registro $t0 di 32 bit, ponendo a 0 il valore dei rimanenti bit`,
  ],
  [
    `L\'operazione effettuata dall\'esecuzione dell\'istruzione sb $t0, 30($s1) è:`,
    `Scrivere la sequenza di 8 bit  in una locazione  di Memoria dopo averla letta negli 8 bit meno significativi del registro $t0`,
  ],
  [
    `L\'operazione effettuata dall\'esecuzione dell\'istruzione sh $t0, 30($s1) è:`,
    `Scrivere la sequenza di 16 bit  in due locazioni successive di Memoria dopo averla letta nei 16 bit meno significativi del registro $t0`,
  ],
  [
    `La traduzione in Linguaggio Macchina dell\'istruzione lbu utilizza:`,
    `Il Formato di Tipo I e l\'Indirizzamento tramite Base e Offset`,
  ],
  [
    `La traduzione in Linguaggio Macchina dell\'istruzione sh utilizza:`,
    `Il Formato di Tipo I e l\'Indirizzamento tramite Base e Offset`,
  ],
  [
    `La Modalità di Indirizzamento di lh fornisce:`,
    `L\'idirizzo della prima delle due locazini di Memoria da cui leggere il dato rappresentato da 16 bit`,
  ],
  [
    `La Modalità di Indirizzamento di sb fornisce:`,
    `L\'idirizzo della locazine di Memoria in cui scrivere il dato rappresentato da 8 bit`,
  ],
  [
    `Le istruzioni  lhu, sh possono essere utilizzate:`,
    `Per il trasferimento di caratteri Unicode a 16 bit e di valori dichiarati short`,
  ],
  [
    `Le istruzioni  lbu, sb possono essere utilizzate:`,
    `Per il trasferimento di caratteri ASCII a 7 e 8 bit e di valori dichiarati byte`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento val = A[6] con $s3 registro Base dell\'Array di INTERI A[] e assegnado il registro $t0 alla variabile val è data:`,
    `Dell\'istruzione lw $t0, 24 ($s3)`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento A[3] = val con $s3 registro Base dell\'Array di INTERI A[] e assegnado il registro $t0 alla variabile val è data:`,
    `Dell\'istruzione sw $t0, 12 ($s3)`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento val = A[k] con A[] Array di INTERI è data:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3107_ArrayVariabile_PEG/img/testImage_1539766361895.jpg" title="Risp31.jpg"><br><br><br><br>Dalle istruzioni in figura`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento A[k] = val con A[] Array di INTERI è data:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3107_ArrayVariabile_PEG/img/testImage_1539766412571.jpg" title="Risp42.jpg"><br><br><br><br>Dalle istruzioni in figura`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento val = testo[9] con $t1 registro Base dell\'Array di caratteri ASCII testo[] e assegnado il registro $s5 alla variabile val è data:`,
    `Dell\'istruzione lbu $s5, 9 ($t1)`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento testo[9] = val con $t1 registro Base dell\'Array di caratteri ASCII testo[] e assegnado il registro $s5 alla variabile val è data:`,
    `Dell\'istruzione sb $s5, 9 ($t1)`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento val = testo[k] con testo[] Array di caratteri ASCII è data:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3107_ArrayVariabile_PEG/img/testImage_1539766475993.jpg" title="Risp72.jpg"><br><br><br><br>Dalle istruzioni in figura`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento testo[k] = val con testo[] Array di caratteri ASCIII è data:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3107_ArrayVariabile_PEG/img/testImage_1539766518784.jpg" title="Risp82.jpg"><br><br><br><br>Dalle istruzioni in figura`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento val = A[8] con $t4 registro Base dell\'Array di caratteri Unicode a 16 bit A[] e assegnado il registro $s2 alla variabile val è data:`,
    `Dall\'istruzione lhu $s2, 16 ($t4)`,
  ],
  [
    `La traduzione in Assembly MIPS dell\'assegnamento A[8] = val con $t4 registro Base dell\'Array di caratteri Unicode a 16 bit A[] e assegnado il registro $s2 alla variabile val è data:`,
    `Dall\'istruzione sh $s2, 16 ($t4)`,
  ],
  [
    `Il calcolo dell\'indirizzo dell\'elemento A[k] di un Array di numeri INTERI si effettua:`,
    `Moltiplicando l\'indice k per 4 e addizionando il valore ottenuto al contenuto del registro Base dell\'Array`,
  ],
  [
    `La moltiplicazione per 4 dell\'indice k si effettua:`,
    `Mediante l\'istruzione sll di shift logico a sinistra indicando uno shift di 2 posizioni`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3117_StringheAssembly_PEG/img/testImage_1539788328727.jpg" title="Dom3.jpg"><br><br>Le istruzioni in figura possono essere tradotte in Assembly MIPS:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3117_StringheAssembly_PEG/img/testImage_1539788344425.jpg" title="Risp31.jpg"><br><br><br><br>Dalle istruzioni in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3117_StringheAssembly_PEG/img/testImage_1539788431845.jpg" title="Dom4.jpg"><br><br><br><br>Le istruzioni in figura possono essere tradotte in Assembly MIPS:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3117_StringheAssembly_PEG/img/testImage_1539788458495.jpg" title="Risp42.jpg"><br><br><br><br>Dalle istruzioni in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3117_StringheAssembly_PEG/img/testImage_1539788503087.jpg" title="Dom5.jpg"><br><br><br><br>Le istruzioni in figura possono essere tradotte in Assembly MIPS:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3117_StringheAssembly_PEG/img/testImage_1539788563185.jpg" title="Risp54.jpg"><br><br><br><br>Dalle istruzioni in figura`,
  ],
  [
    `Il calcolo dell\'indirizzo dell\'elemento A[k] di un Array che implementa una stringa di CARATTERI ASCII si effettua:`,
    `Addizionando il valore dell\'indice k al contenuto del registro Base dell\'Array`,
  ],
  [
    `Il calcolo dell\'indirizzo dell\'elemento A[k] di un Array che implementa una stringa di CARATTERI Unicode a 16 bit si effettua:`,
    `Moltiplicando l\'indice k per 2 e addizionando il valore ottenuto al contenuto del registro Base dell\'Array`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3117_StringheAssembly_PEG/img/testImage_1539788584169.jpg" title="Dom8.jpg"><br><br><br><br>Le istruzioni in figura possono essere tradotte in Assembly MIPS:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3117_StringheAssembly_PEG/img/testImage_1539788604331.jpg" title="Risp82.jpg"><br><br><br><br>Dalle istruzioni in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3117_StringheAssembly_PEG/img/testImage_1539788664366.jpg" title="Dom9.jpg"><br><br><br><br>Le istruzioni in figura possono essere tradotte in Assembly MIPS:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3117_StringheAssembly_PEG/img/testImage_1539788702908.jpg" title="Risp93.jpg"><br><br><br><br>Dalle istruzioni in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3117_StringheAssembly_PEG/img/testImage_1539788743810.jpg" title="Dom10.jpg"><br><br><br><br>Le istruzioni in figura possono essere tradotte in Assembly MIPS:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3117_StringheAssembly_PEG/img/testImage_1539788753953.jpg" title="Risp101.jpg"><br><br><br><br>Dalle istruzioni in figura`,
  ],
  [
    `In Notazione in virgola fissa il valore della sequenza binaria 1001,011 è calcolato:`,
    `<br><br><img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3151_VirgFissaMobile_PEG/img/testImage_1540205642700.jpg" title="Risp11.jpg"><br><br><br><br>In base alla regola della Notazione posizionale pesata mediante la formula in figura`,
  ],
  [
    `Le cifre significative della rappresentazione di un numero sono:`,
    `Le cifre che contribuiscono alla determinazione del valore del numero`,
  ],
  [
    `Rappresentando i numeri frazionari con sequenze di lunghezza fissata si può:`,
    `Rappresentare con esattezza un sottoinsieme finito di numeri nell\'intervallo compreso tra il minimo ed il massimo rappresentabili, e con errore di arrotondamento i rimanenti infiniti numeri in tale intervallo`,
  ],
  [
    `L\'errore di underflow si verifica quando:`,
    `Il numero da rappresentare ha modulo minore del minimo modulo rappresentabile`,
  ],
  [
    `Se il minimo modulo rappresentabile è 0.01 ed il massimo è 999 l\'errore di underflow si verifica quando il valore da rappresentare è:`,
    `Compreso nell\'intervallo (-0.01 , 0.01)`,
  ],
  [
    `La rappresentazione troncata con errore di arrotondamento di un numero frazionario si ottiene:`,
    `Sostituendo cifre meno significative del numero con il valore 0`,
  ],
  [
    `L\'errore di arrotondamento è:`,
    `Minore del valore del peso associato alla cifra meno significativa della rappresentazione troncata`,
  ],
  [
    `La misura dell\'errore di arrotondamento della rappresentazione troncata 79854,84000 del numero 79854,84219 è data:`,
    `Dal valore 0,00219`,
  ],
  [
    `La misura dell\'errore di arrotondamento della rappresentazione troncata 79854,84000 del numero 79854,84219 è limitata superiormente:`,
    `Dal valore 10<sup>-2</sup> = 0,01`,
  ],
  [
    `Il numero in Base 10 rappresentato in virgola fissa dalla sequenza 53498,03 è rappresentato in Notazione scientifica in virgola mobile:`,
    `Dalla sequenza 5,349803E+4`,
  ],
  [
    `Il formato dei numeri frazionari fissato dallo standard IEEE 754 precisione SEMPLICE è:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3154_StandardIEEE_PEG/img/testImage_1540217979180.jpg" title="Risp11.jpg"><br><br><br><br>Dato dai campi e dalla formula in figura`,
  ],
  [
    `In Notazione polarizzata il valore del numero rappresentato dalla sequenza binaria si ottiene:`,
    `Sottraendo la costante di polarizzazione dal valore della sequenza binaria calcolato in Notazione posizionale pesata`,
  ],
  [
    `Nello standard IEEE 754 le cifre significative del numero rapresentato si ottengono:`,
    `Considerando un bit sottinteso uguale a 1 come parte intera, e la sequenza binaria contenuta nel campo mantissa come parte frazionaria`,
  ],
  [
    `Nello standard IEEE 754 precisione SINGOLA le 24 cifre binarie significative corrispondono:`,
    `A 7 cifre decimali significative`,
  ],
  [
    `Il formato dei numeri frazionari fissato dallo standard IEEE 754 precisione DOPPIA è:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3154_StandardIEEE_PEG/img/testImage_1540218052976.jpg" title="Risp51.jpg"><br><br><br><br>Dato dai campi e dalla formula in figura`,
  ],
  [
    `La notazione in doppia precisione consente:`,
    `Di estendere l\'intervallo del minimo e massimo modulo rappresentabile aumentando l\'esponente, e di ridurre l\'errore di arrotondamento aumentando il numero di cifre significative`,
  ],
  [
    `Nello standard IEEE 754 precisione DOPPIA le 53 cifre binarie significative corrispondono:`,
    `A 15 cifre decimali significative`,
  ],
  [
    `Quando si verifica l\'errore di underflow:`,
    `Il valore del numero viene approssimato con il numero 0`,
  ],
  [
    `Nello standard IEEE 754 precisione SINGOLA il massimo modulo rappresentabile è:`,
    `Circa 3.4x10<sup>38</sup>`,
  ],
  [
    `Nello standard IEEE 754 precisione DOPPIA il massimo modulo rappresentabile è:`,
    `Circa 1.7x10<sup>308</sup>`,
  ],
  [
    `Le istruzioni aritmetiche Assembly MIPS per operandi  rappresentati in virgola mobile hanno codice operativo:`,
    `Con suffisso .s per la singola precisione e .d per la doppia precisione`,
  ],
  [
    `Le istruzioni  Assembly MIPS per operandi  rappresentati in virgola mobile utilizzano:`,
    `I 32 registri aggiuntivi indicati con le lettere $f`,
  ],
  [
    `I numeri dichiarati float con più di 7 cifre decimali significative sono rappresentati:`,
    `Con 32 bit nello standard IEEE 754 singola precisione con errore di arrotondamento`,
  ],
  [
    `I numeri dichiarati double con più di 15 cifre decimali significative sono rappresentati:`,
    `Con 64 bit nello standard IEEE 754 doppia precisione con errore di arrotondamento`,
  ],
  [
    `Nello standard IEEE 754 il valore MASSIMO dell\'esponente polarizzato  con mantissa 0 è riservato a rappresentare:`,
    `Il valore infinito, che segnala la situazione anomale di un valore non rappresentabile per errore di overflow`,
  ],
  [
    `Nello standard IEEE 754 il valore MASSIMO dell\'esponente polarizzato con mantissa diversa da 0 è riservato a rappresentare:`,
    `Il valore NaN (not a number) che segnala la situazione anomale di un calcolo non ammissibile come la divisione per zero`,
  ],
  [
    `Nello standard IEEE 754 il  numero 0 è rappresentato da una sequenza:`,
    `Con mantissa 0 ed esponente 0`,
  ],
  [
    `Nello standard IEEE 754 il valore 0 dell\'esponente polarizzato con mantissa diversa da 0 è riservato a rappresentare:`,
    `L\'uso della notazione  dei numeri denormalizzati che restringe l\'intervallo dei numeri per i quali si ha l\'errore di underflow`,
  ],
  [
    `La conversione di una sequenza binaria  nella corrispondente rappresentazione ottale si può effettuare direttamente:`,
    `Suddividendo la sequenza binaria in gruppi di 3 simboli a partire da destra (cifre meno significative), e sostituendo ad ogni gruppo il corrispondente simbolo della base 8`,
  ],
  [
    `La conversione di una sequenza binaria  nella corrispondente rappresentazione esadecimale si può effettuare direttamente:`,
    `Suddividendo la sequenza binaria in gruppi di 4 simboli a partire da destra (cifre meno significative), e sostituendo ad ogni gruppo il corrispondente simbolo della base 16`,
  ],
  [
    `Una pseudoistruzione è:`,
    `Una istruzione del Linguaggio Assembly non implementata a livello Hardware, che esegue operazioni mediante altre istruzioni Assembly implementate`,
  ],
  [
    `Il codice oggetto contiene:`,
    `La traduzione del programma in Linguaggio Macchina fornita dall\'Assembler`,
  ],
  [
    `Il codice oggetto di un programma che utilizza una libreria deve:`,
    `Essere passato al programma Linker che effettua i collegamenti tra il codice oggetto del programma e il codice oggetto delle procedure che utilizza`,
  ],
  [
    `Il Linker effettua:`,
    `I collegamenti tra il codice oggetto del programma e il codice oggetto delle procedure che utilizza`,
  ],
  [
    `Il Loader effettua:`,
    `Il caricamento del programma eseguibile in Memoria, l\'assegnazione dello spazio alle strutture dati utilizzate e le inizializzazioni necessarie ad avviarne l\'esecuzione`,
  ],
  [
    `L\'approccio alla compilazione basato sul caricamento dinamico delle librerie effettua:`,
    `I collegamenti tra il codice oggetto del programma e il codice oggetto di una procedura solo quando la procedura è chiamata in fase di esecuzione`,
  ],
  [`Il programma eseguibile è prodotto:`, `Dal Linker`],
  [
    `Il Bytecode Java è:`,
    `Eseguibile su qualunque computer che disponga di un Interprete Java`,
  ],
  [
    `La Java Virtual Machine è:`,
    `La macchina astratta capace di eseguire il bytecode Java`,
  ],
  [
    `Un Interprete Java è:`,
    `Un programma Software che esegue il bytecode Java emulando la Java Virtual Machine su una specifica piattaforma`,
  ],
  [
    `Un sistema dinamico ha la caratteristica detta feedback (retroazione) quando:`,
    `Il comportamento del sistema descritto dallo stato in un istante di tempo influenza il comportamento nell\'istante di tempo successivo`,
  ],
  [
    `La caratteristica di feedback in un circuito digitale è rappresentata dallo schema:`,
    `<img alt="" title="FileZilla_base.xml"><img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3406_AlgebraBoole_PEG/img/testImage_1542033525878.jpg" title="Risposta21.jpg"><br><br><br><br>In figura`,
  ],
  [
    `L\'Algebra di Boole è:`,
    `Una struttura di calcolo definita da un Dominio costituito da due elemeti e dagli operatori AND, OR e NOT`,
  ],
  [
    `Le funzioni Booleane sono:`,
    `Tutte le funzioni binarie di variabili binarie`,
  ],
  [
    `L\'operatore XOR assume valore \'vero\' solo quando:`,
    `Uno solo dei valori delle variabili è \'vero\'`,
  ],
  [
    `Una porta logica è:`,
    `Un circuito digitale capace di calcolare un operatore logico dell\'Algebra di Boole`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3406_AlgebraBoole_PEG/img/testImage_1542033565945.jpg" title="Domanda7.jpg"><br><br><br><br>Il sembolo grafico in figura rappresenta:`,
    `Una porta AND`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3406_AlgebraBoole_PEG/img/testImage_1542033574432.jpg" title="Domanda8.jpg"><br><br><br><br>Il sembolo grafico in figura rappresenta:`,
    `Una porta OR`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3406_AlgebraBoole_PEG/img/testImage_1542033584027.jpg" title="Domanda9.jpg"><br><br><br><br>Il sembolo grafico in figura rappresenta:`,
    `Una porta XOR`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3406_AlgebraBoole_PEG/img/testImage_1542033594043.jpg" title="Domanda10.jpg"><br><br><br><br>Il sembolo grafico in figura rappresenta:`,
    `Una porta NOT detta invertitore`,
  ],
  [
    `La valutazione di una Espressione Booleana è rappresentata:`,
    `Dalla Tavola di verità della funzione calcolata dall\'Espressione`,
  ],
  [
    `Due Espressioni Booleane sono equivalenti quando:`,
    `Le loro valutazioni forniscono Tavole di verità uguali`,
  ],
  [
    `Le proprietà degli operatori logici rappresentate da identità tra Espressioni Booleane consentono di:`,
    `Trasformare una Espressione Booleana in un\'altra equivalente`,
  ],
  [
    `La forma canonica Somma di Prodotti e data da:`,
    `Un OR di AND tale che ogni AND contiene tutte le variabile in forma normale o complementata`,
  ],
  [
    `Un mintermine è:`,
    `Una funzione la cui tavola di verità contiene un solo valore 1, data dall\'AND di tutte le variabili in forma normale o complementata`,
  ],
  [
    `La forma canonica Prodotto di Somme e data da:`,
    `Un AND di OR tale che ogni OR contiene tutte le variabile in forma normale o complementata`,
  ],
  [
    `Un Maxtermine è:`,
    `Una funzione la cui tavola di verità contiene un solo valore 0, data dall\'OR di tutte le variabili in forma normale o complementata`,
  ],
  [
    `La proprietà dell\'insieme di opertatori AND, OR, NOT di essere funzionalmente completo significa che:`,
    `Data una qualunque funzione Booleana si può determinare una Espressione Booleana in cui figurano solo gli operatori AND, OR, NOT, e la cui valutazione è uguale alla funzione data`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3424_FunzioniBooleane_PEG/img/testImage_1542106029986.jpg" title="Domanda9.jpg"><br><br><br><br>La forma canonica Somma di Prodotti della funzione Boleanna rappresentata dalla Tavola di verità in figura è data:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3424_FunzioniBooleane_PEG/img/testImage_1542106065902.jpg" title="Risposta93.jpg"><br><br><br><br>Dall\'Espressione Booleana in figura`,
  ],
  [
    `<br><br><img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3424_FunzioniBooleane_PEG/img/testImage_1542106083679.jpg" title="Domanda10.jpg"><br><br><br><br>La forma canonica Somma di Prodotti della funzione Boleanna rappresentata dalla Tavola di verità in figura è data:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3424_FunzioniBooleane_PEG/img/testImage_1542106123368.jpg" title="Risposta102.jpg"><br><br><br><br>Dall\'Espressione Booleana in figura`,
  ],
  [
    `Una Rete Combinatoria è:`,
    `Un circuito digitale costituito dalla connessione di porte logiche senza determinare la presenza di cicli`,
  ],
  [
    `In circuito digitale è presente un ciclo quando:`,
    `Un segnale di uscita torna ad alimentare una porta che ha contribuito a generarlo`,
  ],
  [
    `La funzione Booleana calcolata da una Rete Combinatoria è:`,
    `La funzione binaria di variabili binarie che fornisce la corrispondenza tra i valori applicati ai terminali input della rete e i valori che si ottengono sui terminali output della rete`,
  ],
  [
    `L\'Analisi di una Rete Combinatoria si effettua:`,
    `In due passi, associando alla Rete Combinatoria la equivalente Espressione Booleana e valutando la funzione Booleana realtiva a tale Espressione`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3552_ReteCombFunzione_PEG/img/testImage_1543243456700.jpg" title="Domanda5.jpg"><br><br><br><br>L\'Analisi della Rete Combinatoria in figura è ottenuta mediante:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3552_ReteCombFunzione_PEG/img/testImage_1543243469901.jpg" title="Risposta51.jpg"><br><br><br><br>I due passi in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3552_ReteCombFunzione_PEG/img/testImage_1543243509050.jpg" title="Domanda6.jpg"><br><br><br><br>L\'Analisi della Rete Combinatoria in figura è ottenuta mediante:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3552_ReteCombFunzione_PEG/img/testImage_1543243543183.jpg" title="Risposta62.jpg"><br><br><br><br>I due passi in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3552_ReteCombFunzione_PEG/img/testImage_1543243599955.jpg" title="Domanda7.jpg"><br><br><br><br>L\'Analisi della Rete Combinatoria in figura è ottenuta mediante:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3552_ReteCombFunzione_PEG/img/testImage_1543243659742.jpg" title="Risposta74.jpg"><br><br><br><br>I due passi in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3552_ReteCombFunzione_PEG/img/testImage_1543243671605.jpg" title="Domanda8.jpg"><br><br><br><br>La Rete Combinatoria equivalente che si ricava dalla Espressione Booleana riportata in figura è:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3552_ReteCombFunzione_PEG/img/testImage_1543243681216.jpg" title="Risposta81.jpg"><br><br><br><br>La rete riportata in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3552_ReteCombFunzione_PEG/img/testImage_1543243730444.jpg" title="Domanda9.jpg"><br><br><br><br>La Rete Combinatoria equivalente che si ricava dalla Espressione Booleana riportata in figura è:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3552_ReteCombFunzione_PEG/img/testImage_1593011436493.jpg" title="Risposta92.jpg"><br><br><br><br>La rete riportata in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3552_ReteCombFunzione_PEG/img/testImage_1543243782010.jpg" title="Domanda10.jpg"><br><br><br><br>La Rete Combinatoria equivalente che si ricava dalla Espressione Booleana riportata in figura è:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3552_ReteCombFunzione_PEG/img/testImage_1543243812809.jpg" title="Risposta103.jpg"><br><br><br><br>La rete riportata in figura`,
  ],
  [
    `La Sintesi di una Rete Combinatoria capace di calcolare una funzione Booleana si effettua:`,
    `In due passi, determinando l\'Espressione canonica Somma di Prodotti della funzione Booleana e costruendo la Rete Combinatoria ad essa associata`,
  ],
  [
    `La Rete Combinatoria corrispondente ad una Espressione canonica Somma di Prodotti è detta:`,
    `Rete AND to OR`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3559_SintesiReteComb_PEG/img/testImage_1543313533545.jpg" title="Domanda3.jpg"><br><br><br><br>La Sintesi di una Rete Combinatoria che calcola la funzione Booleana in figura è ottenuta mediante:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3559_SintesiReteComb_PEG/img/testImage_1543314127817.jpg" title="Risposta31.jpg"><br><br><br><br>I due passi in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3559_SintesiReteComb_PEG/img/testImage_1543314183916.jpg" title="Domanda4.jpg"><br><br><br><br>La Sintesi di una Rete Combinatoria che calcola la funzione Booleana in figura è ottenuta mediante:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3559_SintesiReteComb_PEG/img/testImage_1543314230786.jpg" title="Risposta44.jpg"><br><br><br><br>I due passi in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3559_SintesiReteComb_PEG/img/testImage_1543314248386.jpg" title="Domanda5.jpg"><br><br><br><br>La Sintesi di una Rete Combinatoria che calcola la funzione Booleana in figura è ottenuta mediante:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3559_SintesiReteComb_PEG/img/testImage_1543314273235.jpg" title="Risposta52.jpg"><br><br><br><br>I due passi in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3559_SintesiReteComb_PEG/img/testImage_1543314312663.jpg" title="Domanda6.jpg"><br><br><br><br>La Sintesi di una Rete Combinatoria che calcola la funzione Booleana in figura è ottenuta mediante:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3559_SintesiReteComb_PEG/img/testImage_1543314360293.jpg" title="Risposta64.jpg"><br><br><br><br>I due passi in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3559_SintesiReteComb_PEG/img/testImage_1543314371699.jpg" title="Domanda7.jpg"><br><br><br><br>La Sintesi di una Rete Combinatoria che calcola la funzione Booleana in figura è ottenuta mediante:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3559_SintesiReteComb_PEG/img/testImage_1543314409762.jpg" title="Risposta73.jpg"><br><br><br><br>I due passi in figura`,
  ],
  [
    `I criteri di minimizzazione di un circuito digitale cercano di ridurre:`,
    `Lo spazio occupato e la velocità del circuito digitale`,
  ],
  [
    `Il numero di livelli attraversati da un segnale in una Rete Combinatoria è dato da:`,
    `Il numero di porte che il segnale attraversa a partire da un terminale input fino a raggiungere un terminale output della Rete Combinatoria`,
  ],
  [
    `Per ottenere una Rete Combinatoria minimale occorre ridurre:`,
    `Il numero delle porte logiche e il massimo numero di livelli attraversato da un segnale nella Rete`,
  ],
  [
    `La funzione realizzata dal Multiplexer 2<sup>N</sup> a 1 è:`,
    `Se la sequenza binaria degli N segnali di Controllo rappresenta il numero K, allora sul terminale output è instradato il valore del dato input relativo al terminale associato al numero K`,
  ],
  [
    `Per scegliere un valore tra 16 dati input disponibili e instradarlo su un solo terminale output si utilizza il modulo combinatorio:`,
    `Multiplexer 2<sup>4</sup>=16 a 1`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3571_Multiplexer_PEG/img/testImage_1543330672178.jpg" title="Domanda3.jpg"> Il simbolo grafico in figura rappresenta:`,
    `Un Multiplexer 2<sup>2</sup> = 4 a 1`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3571_Multiplexer_PEG/img/testImage_1543330750162.jpg" title="Domanda4.jpg"> Il circuito digitale in figura realizza la funzione:`,
    `Se S=0 allora R=x∙y, se S=1 allora R=x+y`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3571_Multiplexer_PEG/img/testImage_1543330772657.jpg" title="Domanda5.jpg"> Il circuito digitale in figura realizza la funzione:`,
    `Se S=0 allora R=IR[20,16], se S=1 allora R=IR[15,11]`,
  ],
  [
    `La funzione realizzata dal Decodificatore N a 2<sup>N</sup> è:`,
    `Se la sequenza binaria degli N segnali input rappresenta il numero K, allora solo il terminale output associato al numero K ha valore 1, tutti gli altri terminali output hanno valore 0`,
  ],
  [
    `Per assegnare il valore 1 al terminale output individuato tra 16 possibili uscite disponibili e il valore 0 ai rimanenti output si utilizza il modulo combinatorio:`,
    `Decodificatore 4 a 2<sup>4</sup> = 16`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3571_Multiplexer_PEG/img/testImage_1543331310795.jpg" title="Domanda8.jpg"><br><br><br><br>Il simbolo grafico in figura rappresenta:`,
    `Un Decodificatore 3 a 2<sup>3</sup> = 8`,
  ],
  [
    `Per individuare la locazione da raggiungere in un blocco di registri si utilizza:`,
    `Un Decodificatore con un numero N di terminali input uguale alla lunghezza dell\'indirizzo dei registri`,
  ],
  [
    `Per selezionare uno dei 32 registri del processore MIPS si utilizza:`,
    `Un Decodificatore 5 a 2<sup>5</sup> = 32 perché l\'indirizzo dei registri è di 5 bit`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544613848491.jpg" title="Domanda1.jpg"><br><br><br><br>L\'Espressione Booleana in forma Somma di Prodotti della funzione Resut che fornisce il bit del Risultato rappresentata nella Tavola di verità dell\'Addizione riportata in figura è data da:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544613871937.jpg" title="Risposta12.jpg"><br><br><br><br>L\'espressione in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544613902747.jpg" title="Domanda2.jpg"><br><br><br><br>L\'Espressione Booleana in forma Somma di Prodotti della funzione CarryOut che fornisce il bit del Riporto sulla posizione successiva rappresentata nella Tavola di verità dell\'Addizione riportata in figura è data da:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544613917721.jpg" title="Risposta21.jpg"><br><br><br><br>L\'espressione in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544613965812.jpg" title="Domanda3.jpg"><br><br><br><br>La Rete Combinatoria associata all\'Espressione Booleana in forma Somma di Prodotti (rappresentata in figura) della funzione Result che fornisce il bit del Risultato dell\'Addizione è data da:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544614513383.jpg" title="Risposta34.jpg"><br><br><br><br>Il circuito in figura`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544621054504.jpg" title="Domanda4.jpg"><br><br><br><br>La Rete Combinatoria associata all\'Espressione Booleana in forma Somma di Prodotti (rappresentata in figura) della funzione CarryOut che fornisce il bit del Riporto sulla posizione successiva è data da:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544614992137.jpg" title="Risposta43.jpg"><br><br><br><br>Il circuito in figura`,
  ],
  [
    `Il simbolo grafico riportato in figura rappresenta:<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544621068680.jpg" title="Domanda5.jpg">:`,
    `Il Sommatore completo che calcola l\'Addizione dei bit relativi alla singola posizione della sequenza binaria, costruito utilizzando le Reti Combinatorie minimali`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544614588009.jpg" title="Domanda6.jpg"><br><br><br><br>La Rete Combinatoria in figura rappresenta:`,
    `L\'ALU ad un bit relativa alla singola posizione della sequenza binaria`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544614612788.jpg" title="Domanda7.jpg"><br><br><br><br>Nell\'ALU a un bit in figura, per selezionare il risultato delle istruzioni AND e OR ai due bit del segnale di controllo OperationS1S0 sono assegnati i valori:`,
    `OperationS<sub>1</sub>S<sub>0</sub>=00 per AND, e OperationS<sub>1</sub>S<sub>0</sub>=01 per OR`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544614628003.jpg" title="Domanda8.jpg"><br><br><br><br>Nell\'ALU a un bit in figura, per selezionare il risultato dell\'istruzione ADD ai due bit del segnale di controllo OperationS1S0 sono assegnati i valori:`,
    `OperationS<sub>1</sub>S<sub>0</sub>=10`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3758_SommatoreALU_PEG/img/testImage_1544614643444.jpg" title="Domanda9.jpg"><br><br><br><br>Il segnale output denotato con CarryOut nella Rete Combiatoria in figura è inviato:`,
    `All\'ALU ad un bit relativa alla posizione successiva come riporto input CarryIn`,
  ],
  [
    `Il segnale Less è selezionato dal multiplexed 4 a 1 nella Rete Combinatoria in figura per l\'esecuzione:`,
    `Dell\'istruzione set on less then`,
  ],
  [
    `La Rete Combinatoria dell\'ALU a 32 bit è implementata:`,
    `Collegando 32 ALU ad un bit relative alle specifiche posizioni con propagazione dei riporti calcolati`,
  ],
  [
    `La propagazione del riporto nell\'ALU si effettua:`,
    `Inviando il riporto CarryOut calcolato dall\'ALU ad un bit relativa ad una posizione come riporto input CarryIn dell\'ALU ad un bit relativa alla posizione successiva`,
  ],
  [
    `Il riporto CarryIn0 input dell\'ALU ad un bit relativa alla posizione meno significativa è utilizzato:`,
    `Come segnale di controllo posto al valore 0 nel caso dell\'Addizione, e al valore 1 nel caso della Sottrazione; negli altri casi il suo valore non influenza il risultato`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3763_Alu32Bit_PEG/img/testImage_1544629078156.jpg" title="Domanda4.jpg"><br><br><br><br>Nel circuito dell\'ALU ad un bit riportato in figura, per l\'esecuzione dell\'istruzione SUB l\'opposto del secondo operando si ottiene:`,
    `Ponendo a 1 il segnale di controllo Bnegate per selezionare il valore dell\'operando complementato, e ponendo a 1 il segnale di controllo CarryIn0 dell\'ALU ad un bit relativa alla posizione meno significativa per sommare il valore 1 alla sequenza complementata`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3763_Alu32Bit_PEG/img/testImage_1544629130948.jpg" title="Domanda5.jpg"><br><br><br><br>Nel circuito dell\'ALU ad un bit riportato in figura, la selezione mediante il multiplexer 4 a 1 del risultato dell\'esecuzione dell\'istruzione SUB si realizza:`,
    `Ponendo il valore del segnale di controllo OperationS<sub>1</sub>S<sub>0</sub>=10 per scegliere l\'output del Sommatore`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3763_Alu32Bit_PEG/img/testImage_1544629172573.jpg" title="Domanda6.jpg"><br><br><br><br>Nel circuito dell\'ALU a 32 bit riportato in figura, il segnale di controllo Bnegate fornisce anche il valore del segnale di controllo CarryIn0 del riporto input dell\'ALU a un bit relativa alla posizione meno significativa perché:`,
    `Il segnale CarryIn0 influenza solo le operazioni Aritmetiche che coinvolgono il Sommatore e in questi casi ha lo stesso valore del segnale Bnegate; negli altri casi il risultato non dipende dal valore di CarryIn0`,
  ],
  [
    `In base alla Legge di De Morgan l\'operatore logico NOR è uguale:`,
    `All\'AND degli operandi complementati`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3763_Alu32Bit_PEG/img/testImage_1544629194279.jpg" title="Domanda8.jpg"><br><br><br><br>Nel circuito dell\'ALU a un bit in figura, il risultato dell\'\'istruzione NOR si ottiene:`,
    `Ponendo Ainvert=1 e Bnegate=1 per complementare bit a bit gli operandi, ed il segnale di controllo OperationS<sub>1</sub>S<sub>0</sub>=00 per scegliere l\'output della porta AND`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3763_Alu32Bit_PEG/img/testImage_1544629316063.jpg" title="Domanda9.jpg"><br><br><br><br>Nel circuito dell\'ALU a 32 bit riportato in figura, i segnali Ainvert e Bnegate consentono di:`,
    `Scegliere il valore dell\'operando complementato quando sono posti a 1 e non complementato quando sono posti a 0`,
  ],
  [
    `La pseudoistruzione dell\'Assembly MIPS not $s1, $t0 è eseguita mediante:`,
    `L\'istruzione nor $s1, $t0, $zero`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3777_AluOverflow_PEG/img/testImage_1544709498025.jpg" title="Domanda1.jpg"><br><br><br><br>Nell\'ALU ad un bit relativa alla posizione più significativa il figura, il segnale output Overflow generato dalla porta XOR è uguale a 1 quando:`,
    `I riporti sono diversi perché il calcolo dell\'Addizione ha determinato l\'Errore di Overflow`,
  ],
  [
    `Il valore del segnale Zero utilizzato nell\'esecuzione dell\'istruzione BEQ è calcolato dall\'ALU mediante:`,
    `La porta NOR che calcola l\'OR negato dei bit del risultato della sottrazione dei due operandi dell\'istruzione BEQ`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3777_AluOverflow_PEG/img/testImage_1544709519870.jpg" title="Domanda3.jpg"><br><br><br><br>Nell\'ALU a 32 bit in figura quando il segnale output Zero vale 1 si ha che:`,
    `Nella esecuzione dell\'istruzione BEQ di salto condizionato su uguaglianza il salto viene effettuato perché gli operandi risultano uguali`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3777_AluOverflow_PEG/img/testImage_1544709534319.jpg" title="Domanda4.jpg"><br><br><br><br>Nel simbolo grafico dell\'ALU in figura, i 4 bit del segnale indicato col nome controllo ALU, che fornisce i valori dei segnali Ainvert, Bnegate, OperationS1S0, per l\'esecuzione dell\'istruzione ADD sono posti uguali a:`,
    `Controllo ALU = 0010`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3777_AluOverflow_PEG/img/testImage_1544709548584.jpg" title="Domanda5.jpg"><br><br><br><br>Nel simbolo grafico dell\'ALU in figura, i 4 bit del segnale indicato col nome controllo ALU, che fornisce i valori dei segnali Ainvert, Bnegate, OperationS1S0, per l\'esecuzione dell\'istruzione SUB sono posti uguali a:`,
    `Controllo ALU = 0110`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3777_AluOverflow_PEG/img/testImage_1544709563055.jpg" title="Domanda6.jpg"><br><br><br><br>Nel simbolo grafico dell\'ALU in figura, i 4 bit del segnale indicato col nome controllo ALU, che fornisce i valori dei segnali Ainvert, Bnegate, OperationS1S0, per l\'esecuzione dell\'istruzione AND sono posti uguali a:`,
    `Controllo ALU = 0000`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3777_AluOverflow_PEG/img/testImage_1544709575316.jpg" title="Domanda7.jpg"><br><br><br><br>Nel simbolo grafico dell\'ALU in figura, i 4 bit del segnale indicato col nome controllo ALU, che fornisce i valori dei segnali Ainvert, Bnegate, OperationS1S0, per l\'esecuzione dell\'istruzione OR sono posti uguali a:`,
    `Controllo ALU = 0001`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3777_AluOverflow_PEG/img/testImage_1544709590585.jpg" title="Domanda8.jpg"><br><br><br><br>Nel simbolo grafico dell\'ALU in figura, i 4 bit del segnale indicato col nome controllo ALU, che fornisce i valori dei segnali Ainvert, Bnegate, OperationS1S0, per l\'esecuzione dell\'istruzione NOR sono posti uguali a:`,
    `Controllo ALU = 1100`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3777_AluOverflow_PEG/img/testImage_1544709603587.jpg" title="Domanda9.jpg"><br><br><br><br>Nel simbolo grafico dell\'ALU in figura, i 4 bit del segnale indicato col nome controllo ALU, che fornisce i valori dei segnali Ainvert, Bnegate, OperationS1S0, per l\'esecuzione dell\'istruzione BEQ sono posti uguali a:`,
    `Controllo ALU = 0110`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/3777_AluOverflow_PEG/img/testImage_1544709612775.jpg" title="Domanda10.jpg"><br><br><br><br>Nel simbolo grafico dell\'ALU in figura, i 4 bit del segnale indicato col nome controllo ALU, che fornisce i valori dei segnali Ainvert, Bnegate, OperationS1S0, per l\'esecuzione delle istruzioni SUB e BEQ sono:`,
    `Uguali perché l\'ALU effettua in entrambi i casi una sottrazione, ma per SUB si utilizza il Risultato e per BEQ si utilizza il segnale Zero calcolato in base al Risultato.`,
  ],
  [
    `Il processo di computazione di una Rete Sequenziale è analogo a quello di una Macchina di Turing perché:`,
    `La Rete Sequenziale può assumere un numero finito di stati e il valore dello stato successivo dipende dal valore dello stato attuale e dell\'input esterno`,
  ],
  [
    `Il circuito di una Rete Sequenziale è caratterizzato da:`,
    `Presenza di cicli nei collegamenti tra le porte logiche, che determinano il verificarsi di feedback nel comportamento dinamico del circuito`,
  ],
  [
    `Dal punto di vista implementativo l\'Unità Centrale di Elaborazione (CPU) di un computer è:`,
    `Una Rete Sequenziale`,
  ],
  [
    `In una Rete Sequenziale il segnale periodico clock è utilizzato per:`,
    `Individuare l\'istante in cui avviene il cambiamento di stato della Rete Sequenzialecon con la scrittura dei registri, e assicurare la stabilità dei valori dei segnali calcolati`,
  ],
  [
    `La relazione che lega la Frequenza con la Durata di un segnale periodico è:`,
    `Frequenza = 1 / Durata`,
  ],
  [
    `La Frequenza di un segnale periodico è data da:`,
    `Il numero di ripetizioni del periodo che si verificano nell\'unità di tempo`,
  ],
  [
    `L\'unità di misura della Frequenza di un segnale periodico, denominata Hertz e rappresentata dal simbolo Hz, è riferita a:`,
    `Il numero di ripetizioni del periodo che si verificano in un secondo`,
  ],
  [
    `La frequenza di un segnale periodico data da un Giga Hertz corrisponde al valore:`,
    `1 GHz = 10<sup>9</sup> cicli al secondo`,
  ],
  [
    `La tecnica di Temporizzazione sensibile ai fronti utilizzata per sincronizzare una Rete Sequenziale sceglie uno dei fronti del segnale di clock (di salita o di discesa), detto "fronte attivo", come istante di tempo in cui:`,
    `Memorizzare il cambiamento di stato nei registri della Rete Sequenziale`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4049_ReteSeqTemp_PEG/img/testImage_1547559795416.jpg" title="Domanda10.jpg"><br><br><br><br>Lo schema in figura rappresenta la strutturazione di base del circuito che implementa:`,
    `Una Rete Sequenziale`,
  ],
  [
    `L\'Unità Centrale di Elaborazione (CPU) è una Rete Sequenziale costituita da:`,
    `L\'Unità di Controllo e l\'Unità di Elaborazione Dati (datapath)`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4058_ImplCPUMips_PEG/img/testImage_1547567949246.jpg" title="Domanda2.jpg"><br><br><br><br>Lo schema riportato in figura rappresenta:`,
    `La struttura del circuito della Unità Centrale di Elaborazione (CPU) a ciclo singolo dell\'Architettura MIPS per le istruzioni lw, sw, beq, Aritmetico-Logiche con Formato di Tipo R, e le sue connessioni con la Memoria`,
  ],
  [
    `I dispositivi di memorizzazione posti all\'interno della Unità Centrale di Elaborazione a ciclo singolo del MIPS (CPU) sono:`,
    `Il registro Program Counter ed il blocco dei 32 Registri del processore`,
  ],
  [
    `L\'implementazione della Unità Centrale di Elaborazione (CPU) in base all\'approccio a ciclo singolo richiede che:`,
    `Le operazioni relative alla esecuzione di una istruzione devono avvenire tutte durante un unico ciclo di clock`,
  ],
  [
    `La temporizzazione sensibile ai fronti della Unità Centrale di Elaborazione (CPU) richiede che:`,
    `Il cambiamento di stato determinato dalla scrittura dei registri deve avvenire nell\'istante di tempo individuato dal fronte di salita o di discesa scelto come fronte attivo del segnale di clock`,
  ],
  [
    `La fase di Prelievo con cui inizia l\'esecuzione di ogni istruzione consiste nella:`,
    `Lettura in Memoria della sequenza binaria che rappresenta l\'istruzione in Linguaggio Macchina`,
  ],
  [
    `L\'indirizzo di accesso in Memoria utilizzato nella fase di prelievo dell\'istruzione è contenuto:`,
    `Nel registro Program Counter`,
  ],
  [
    `La lettura anticipata di due Registri del processore, fatta dopo la fase di Prelievo mentre l\'Unità di Controllo calcola il valore dei segnali di controllo, è effettuata allo scopo di:`,
    `Ridurre il tempo di esecuzione delle istruzioni che richiedono la lettura degli operandi nei Registri`,
  ],
  [
    `Se l\'istruzione in esecuzione non richiede operandi, la lettura anticipata dei due Registri, fatta dopo la fase di Prelievo mentre l\'Unità di Controllo calcola il valore dei segnali di controllo, risulta:`,
    `Inutile, ma non determina spreco di tempo perché è effettuata contemporaneamente ad altre operazioni necessarie per l\'esecuzione dell\'istruzione`,
  ],
  [
    `Quando l\'Unità di Controllo termina il calcolo dei valori dei segnali di controllo l\'esecuzione dell\'istruzione viene completata dalla Unità di Elaborazione Dati effettuando:`,
    `Le operazioni relative all\'istruzione e la scrittura dei registri`,
  ],
  [
    `I 32 bit contenuti nel Program Counter forniscono:`,
    `L\'indirizzo del primo dei 4 Byte della parola di Memoria che contiene l\'istruzione da eseguire rappresentata in Linguaggio Macchina`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4067_MipsPrelievoIstr_PEG/img/testImage_1547635678678.jpg" title="Domanda2.jpg"><br><br><br><br>Lo schema in figura rappresenta la parte del circuito della CPU MIPS a ciclo singolo coinvolta in:`,
    `Fase di Prelievo dell\'istruzione da eseguire`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4067_MipsPrelievoIstr_PEG/img/testImage_1547635700957.jpg" title="Domanda3.jpg"><br><br><br><br>Nello schema in figura la notazione Istruzione[31-26] rappresenta:`,
    `I 6 bit del campo Codice Operativo dell\'istruzione in esecuzione inviati in input alla Unità di Controllo`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4067_MipsPrelievoIstr_PEG/img/testImage_1547635714956.jpg" title="Domanda4.jpg"><br><br><br><br>Lo schema in figura rappresenta la parte del circuito della CPU MIPS a ciclo singolo coinvolta in:`,
    `Aggiornamento del Program Counter con l\'indirizzo della prossima istruzione da eseguire`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4067_MipsPrelievoIstr_PEG/img/testImage_1547635728506.jpg" title="Domanda5.jpg"><br><br><br><br>Nello schema in figura il multiplexer seleziona l\'indirizzo con cui aggiornare il Program Counter scegliendo tra:`,
    `L\'indirizzo dell\'istruzione successiva a quella in esecuzione e l\'indirizzo di salto condizionato da usare nell\'esecuzione dell\'istruzione beq`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4067_MipsPrelievoIstr_PEG/img/testImage_1547635739533.jpg" title="Domanda6.jpg"><br><br><br><br>Nello schema in figura, quando si ha il valore del segnale di controllo Branch=0 il multiplexer seleziona:`,
    `L\'indirizzo dell\'istruzione successiva a quella in esecuzione calcolato dal Sommatore ed inviato sull\'ingresso dati 0`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4067_MipsPrelievoIstr_PEG/img/testImage_1547635753073.jpg" title="Domanda7.jpg"><br><br><br><br>Nello schema in figura, quando si ha il valore del segnale di controllo Branch=1 e il segnale generato dall\'ALU Zero=1 il multiplexer seleziona:`,
    `L\'indirizzo di salto condizionato inviato sull\'ingresso dati 1 dalla parte del circuito della CPU che lo calcola`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4067_MipsPrelievoIstr_PEG/img/testImage_1547635766185.jpg" title="Domanda8.jpg"><br><br><br><br>Nello schema in figura, quando si ha il valore del segnale di controllo Branch=1 e il segnale generato dall\'ALU Zero=0 il multiplexer seleziona:`,
    `L\'indirizzo dell\'istruzione successiva a quella in esecuzione calcolato dal Sommatore ed inviato sull\'ingresso dati 0`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4067_MipsPrelievoIstr_PEG/img/testImage_1547635777514.jpg" title="Domanda9.jpg"><br><br><br><br>Lo schema in figura rappresenta la parte del circuito della CPU MIPS a ciclo singolo coinvolta in:`,
    `Lettura anticipata dei due Registri del processore i cui contenuti possono costituire operandi dell\'istruzione in esecuzione`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4067_MipsPrelievoIstr_PEG/img/testImage_1547635790901.jpg" title="Domanda10.jpg"><br><br><br><br>Nello schema in figura le notazione Istruzioni[25-21] e Istruzioni[20-16] rappresentano:`,
    `I due campi di 5 bit che forniscono gli indirizzi degli operandi da leggere anticipatamente nei Registri del processore`,
  ],
  [
    `Nell\'implementazione delle istruzioni Aritmetico-Logiche di Tipo R l\'indirizzo del registro in cui viene scritto il risultato è nel campo:`,
    `Istruzione[15-11] dell\'istruzione letta dalla Memoria`,
  ],
  [
    `Per le istruzioni Aritmetico-Logiche MIPS di Tipo R la lettura anticipata dei Registri del processore è una ottimizzazione del tempo di esecuzione perché:`,
    `Fornisce sui terminali output Dato letto 1 e Dato letto 2 i valori dei due operandi dell\'ALU contenuti nei Registri con indirizzi nei campi Istruzione[25-21] e Istruzione[20-16]`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4073_IstrLogicheR_PEG/img/testImage_1547648248150.jpg" title="Domanda3.jpg"><br><br><br><br>Lo schema in figura rappresenta la computazione che si svolge nella parte del circuito della CPU MIPS a ciclo singolo relativa a:`,
    `Istruzioni Aritmetico-Logiche di Tipo R`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4073_IstrLogicheR_PEG/img/testImage_1547648264529.jpg" title="Domanda4.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa alle istruzioni Aritmetico-Logiche MIPS di Tipo R riportata in figura, il multiplexer controllato dal segnale AluSrc seleziona:`,
    `Il secondo operando dell\'ALU`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4073_IstrLogicheR_PEG/img/testImage_1547648278433.jpg" title="Domanda5.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa alle istruzioni Aritmetico-Logiche MIPS di Tipo R riportata in figura, il multiplexer controllato dal segnale MemtoReg seleziona:`,
    `Il Dato da scrivere nel Registro del processore`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4073_IstrLogicheR_PEG/img/testImage_1547648291455.jpg" title="Domanda6.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa alle istruzioni Aritmetico-Logiche MIPS di Tipo R riportata in figura, il multiplexer controllato dal segnale RegDst seleziona:`,
    `L\'indirizzo del Registro del processore in cui scrivere`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4073_IstrLogicheR_PEG/img/testImage_1547648332057.jpg" title="Domanda7.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa alle istruzioni Aritmetico-Logiche MIPS di Tipo R riportata in figura, con il valore del segnale di controllo MemtoReg=0 il multiplexer seleziona:`,
    `Il risultato calcolato dall\'ALU come Dato da scrivere nel registro`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4073_IstrLogicheR_PEG/img/testImage_1547648344925.jpg" title="Domanda8.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa alle istruzioni Aritmetico-Logiche MIPS di Tipo R riportata in figura, con il valore del segnale di controllo RegDst=1 il multiplexer seleziona:`,
    `Il contenuto del campo di 5 bit Istruzione[15-11] come indirizzo del Registro del processore in cui scrivere il Dato`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4073_IstrLogicheR_PEG/img/testImage_1547648357224.jpg" title="Domanda9.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa alle istruzioni Aritmetico-Logiche MIPS di Tipo R riportata in figura, con il valore del segnale di controllo AluSrc=0 il multiplexer seleziona:`,
    `Il contenuto del Registro del processore letto in anticipo disponibile sul termiminale output Dato letto 2 come secondo operando dell\'ALU`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4073_IstrLogicheR_PEG/img/testImage_1547648369950.jpg" title="Domanda10.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa alle istruzioni Aritmetico-Logiche MIPS di Tipo R riportata in figura, i 4 bit del segnale Controllo ALU forniscono:`,
    `I valori dei segnali di controllo Ainvert, Bnegate, OperazioneS<sub>1</sub>S<sub>0</sub> che stabiliscolo l\'operazione che l\'ALU deve eseguire`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4077_TrasfDatiLWSW_PEG/img/testImage_1547715124829.jpg" title="Domanda1.jpg"><br><br><br><br>Lo schema in figura rappresenta la computazione che si svolge nella parte del circuito della CPU MIPS a ciclo singolo relativa a:`,
    `Esecuzione dell\'istruzione Load word`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4077_TrasfDatiLWSW_PEG/img/testImage_1547715138289.jpg" title="Domanda2.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione LOAD word riportata in figura, l\'indirizzo di accesso in Memoria proviene:`,
    `Direttamente dal terminale output dell\'ALU che fornisce il risultato dell\'addizione del contenuto nel Registro Base con indirizzo nel campo Istruzione[25-21] con il valore dell\'Offset contenuto nel campo Istruzione[15-0] Esteso di segno a 32 bit`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4077_TrasfDatiLWSW_PEG/img/testImage_1547715150448.jpg" title="Domanda3.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione LOAD word riportata in figura, il multiplexer controllato dal segnale AluSrc effettua la selezione:`,
    `In base al valore AluSrc=1, che instrada in output il valore nel campo Istruzione[15-0] Esteso di segno a 32 bit, come operando dell\'ALU`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4077_TrasfDatiLWSW_PEG/img/testImage_1547715164371.jpg" title="Domanda4.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione LOAD word riportata in figura, il multiplexer controllato dal segnale MemtoReg effettua la selezione:`,
    `In base al valore MemtoReg=1, che instrada in output il valore letto in Memoria attivando la lettura con MemRead=1, come dato da scrivere nel Registro del processore`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4077_TrasfDatiLWSW_PEG/img/testImage_1547715177400.jpg" title="Domanda5.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione LOAD word riportata in figura, il multiplexer controllato dal segnale RegDst effettua la selezione:`,
    `In base al valore RegDst=0, che instrada in output il campo Istruzione[20-16], come indirizzo del Registro del processore dove scrivere`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4077_TrasfDatiLWSW_PEG/img/testImage_1547715190635.jpg" title="Domanda6.jpg"><br><br><br><br>Lo schema in figura rappresenta la computazione che si svolge nella parte del circuito della CPU MIPS a ciclo singolo relativa a:`,
    `Esecuzione dell\'struzione Store word`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4077_TrasfDatiLWSW_PEG/img/testImage_1547715201946.jpg" title="Domanda7.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione STORE word riportata in figura, il multiplexer controllato dal segnale AluSrc effettua la selezione:`,
    `In base al valore AluSrc=1, che instrada in output il valore nel campo Istruzione[15-0] Esteso di segno a 32 bit, come operando dell\'ALU`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4077_TrasfDatiLWSW_PEG/img/testImage_1547715214589.jpg" title="Domanda8.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione STORE word riportata in figura, l\'indirizzo di accesso in Memoria proviene:`,
    `Direttamente dal terminale output dell\'ALU che fornisce il risultato dell\'addizione del contenuto nel Registro Base con indirizzo nel campo Istruzione[25-21] con il valore dell\'Offset contenuto nel campo Istruzione[15-0] Esteso di segno a 32 bit`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4077_TrasfDatiLWSW_PEG/img/testImage_1547715227884.jpg" title="Domanda9.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione STORE word riportata in figura, il valore del Dato da scrivere in Memoria proviene:`,
    `Direttamente dal terminale output Dato letto 2 del blocco dei Registri, che fornisce il contenuto del registro di indirizzo Istruzione [20-16] letto anticipatamente, e la scrittura è attivata con MemWrite=1`,
  ],
  [
    `Per le istruzioni di trasferimento dati Load word e Store word la lettura anticipata dei Registri del processore è una ottimizzazione del tempo di esecuzione perché:`,
    `Fornisce sul terminale output Dato letto 1 il contenuto del Registro Base di indirizzo Istruzione[25-21] come operando dell\'ALU per il calcolo dell\'indirizzo di accesso in Memoria`,
  ],
  [
    `Per l\'istruzione di salto condizionato su uguaglianza BEQ l\'implementazione della regola per il calcolo dell\'indirizzo di salto è data da:`,
    `Valore contenuto nel Program Counter addizionato al numero di istruzioni da saltare contenuto nel campo Istruzione[15-0] Esteso di segno a 32 bit e Shiftato a sinistra di 2 posizioni`,
  ],
  [
    `Per l\'istruzione di salto condizionato su uguaglianza BEQ la lettura anticipata dei Registri del processore è una ottimizzazione del tempo di esecuzione perché:`,
    `Fornisce sui terminali output Dato letto 1 e Dato letto 2 il contenuto dei Registri di indirizzo Istruzione[25-21] e Istruzione[20-16] come operandi dell\'ALU da confrontare per stabilire la condizione di salto`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4082_SaltoCondBeq_PEG/img/testImage_1547723217017.jpg" title="Domanda3.jpg"><br><br><br><br>Lo schema in figura rappresenta la computazione che si svolge nella parte del circuito della CPU MIPS a ciclo singolo relativa a:`,
    `Esecuzione dell\'struzione di salto condizionato su uguaglianza BEQ`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4082_SaltoCondBeq_PEG/img/testImage_1547723230935.jpg" title="Domanda4.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione BEQ riportata in figura, l\'indirizzo di salto condizionato su uguaglianza è calcolato:`,
    `Dal Sommatore a destra che riceve come operandi il contenuto del Program Counter incrementato di 4 e il contenuto nel campo Istruzione[15-0] Esteso di segno a 32 bit e Shiftato a sinistra di 2 posizioni`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4082_SaltoCondBeq_PEG/img/testImage_1547723242353.jpg" title="Domanda5.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione BEQ riportata in figura, l\'esito del test sulla condizione di uguaglianza per il salto condizionato è calcolato:`,
    `Dall\'ALU che fornisce in output il valore del segnale Zero come NOR dei bit del risultato della sottrazione tra Dato letto 1 e Dato letto 2, che sono i contenuti dei Registri di indirizzo Istruzione[25-21] e Istruzione[20-16] letti in anticipo`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4082_SaltoCondBeq_PEG/img/testImage_1547723254322.jpg" title="Domanda6.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione BEQ riportata in figura, il multiplexer controllato dal segnale AluSrc effettua la selezione:`,
    `In base al valore AluSrc=0, che instrada come operando dell\'ALU il valore Dato letto 2 contenuto nel Registro di indirizzo Istruzione[20-16] letto in anticipo`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4082_SaltoCondBeq_PEG/img/testImage_1547723265123.jpg" title="Domanda7.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione BEQ riportata in figura, il multiplexer che sceglie l\'indirizzo della prossima istruzione da scrivere nel Program Counter effettua la selezione:`,
    `In base al valore output della porta che fornisce l\'and tra il segnale di controllo Branch=1 e il segnale Zero calcolato dall\'ALU`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4082_SaltoCondBeq_PEG/img/testImage_1547723277129.jpg" title="Domanda8.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione BEQ riportata in figura, il dispositivo combinatorio Estensione del segno effettua:`,
    `L\'estensione a 32 bit della sequenza input Istruzione[15-0] aggiungendo i bit nelle posizioni più significative con valore uguale al bit di segno`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4082_SaltoCondBeq_PEG/img/testImage_1547723287251.jpg" title="Domanda9.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione BEQ riportata in figura, il dispositivo combinatorio Shift a sinistra effettua:`,
    `Lo shift a sinistra di 2 posizioni della sequenza di 32 bit ricevuta in input dal dispositivo Estensione del segno, ponendo a 0 le posizioni lasciate libere`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4082_SaltoCondBeq_PEG/img/testImage_1547723297542.jpg" title="Domanda10.jpg"><br><br><br><br>Nella parte della CPU a ciclo singolo relativa all\'istruzione BEQ riportata in figura, il valore del segnale Zero influenza:`,
    `La scelta effettuata dal multiplexer che seleziona l\'indirizzo da scrivere nel Program Counter in base all\'output della porta and che riceve in input il segnale di controllo Branch`,
  ],
  [
    `I 4 segnali di controllo Ainvert, Bnegate, OperationS<sub>1</sub>S<sub>0</sub> sono utilizzati per gestire:`,
    `Le operazioni effettuate dall\'ALU`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4093_MipsCicloSing_PEG/img/testImage_1547804560323.jpg" title="Domanda2.jpg"><br><br><br><br>Lo schema riportato in figura con il colore azzurro rappresenta:`,
    `I due livelli di decodifica delle informazioni rappresentate dal codice operativo Istruzione[31-26] e dal campo funct Istruzione[5-0], realizzati mediante due dispositivi separati che forniscono i valori dei segnali di controllo`,
  ],
  [
    `Il segnale di controllo ALUop fornito dall\'Unità di Controllo è inviato in input:`,
    `All\'Unità di Controllo dell\'ALU che effettua il secondo livello di decodifica e genera i valori dei segnali di controllo dell\'ALU Ainvert, Bnegate, OperationS<sub>0</sub>S<sub>1</sub>`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4093_MipsCicloSing_PEG/img/testImage_1547804600844.jpg" title="Domanda4.jpg"><br><br><br><br>Nello schema riportato in figura, quando il primo livello di decodifica fornisce il segnale di controllo ALUop=00, il secondo livello di decodifica fornisce i valori dei 4 segnali di controllo dell\'ALU in base ai quali l\'ALU esegue:`,
    `Una Addizione per calcolare l\'indirizzo di accesso in Memoria nell\'esecuzione di lw e sw , indipendentemente dal valore del campo funct`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4093_MipsCicloSing_PEG/img/testImage_1547804615463.jpg" title="Domanda5.jpg"><br><br><br><br>Nello schema riportato in figura, quando il primo livello di decodifica fornisce il segnale di controllo ALUop=01, il secondo livello di decodifica fornisce i valori dei 4 segnali di controllo dell\'ALU in base ai quali l\'ALU esegue:`,
    `Una Sottrazione per verificare la condizione di uguaglianza tra i Registri nell\'esecuzione di beq, indipendentemente dal valore del campo funct`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4093_MipsCicloSing_PEG/img/testImage_1547804629729.jpg" title="Domanda6.jpg"><br><br><br><br>Nello schema riportato in figura, quando il primo livello di decodifica fornisce il segnale di controllo ALUop=10, il secondo livello di decodifica fornisce i valori dei 4 segnali di controllo dell\'ALU in base ai quali l\'ALU esegue:`,
    `Una operazione stabilita in base al valore del campo funct Istruzione[5-0] per l\'esecuzione delle istruzioni Aritmetico-Logiche di Tipo R`,
  ],
  [
    `Per la realizzazione della CPU a ciclo singolo, l\'Unità di Controllo e l\'Unità di controllo dell\'ALU sono implementate mediante:`,
    `Due Reti Combinatorie separate, realizzate sulla base delle funzioni Booleane costituite dalle relazioni input-output che forniscono i valori dei segnali di controllo per l\'esecuzione delle istruzioni`,
  ],
  [
    `Nella realizzazione della CPU in base all\'approccio multiciclo l\'Unità di Controllo è implementata mediante:`,
    `Una Rete Sequenziale che, per l\'esecuzione di una istruzione, consente di tenere memoria mediante transizioni di stato della successione delle operazioni che avvengono in cicli di clock separati`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4093_MipsCicloSing_PEG/img/testImage_1547804646972.jpg" title="Domanda9.jpg"><br><br><br><br>La tabella riportata in figura rappresenta:`,
    `La Tavola di verità della funzione Booleana costituita dalla relazione input-output dell\'Unità di Controllo che effettua il PRIMO livello di decodifica nella CPU MIPS a ciclo singolo per l\'esecuzione delle istruzioni elencate in rosso`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4093_MipsCicloSing_PEG/img/testImage_1547804659443.jpg" title="Domanda10.jpg"><br><br><br><br>La tabella riportata in figura rappresenta:`,
    `La Tavola di verità della funzione Booleana costituita dalla relazione input-output dell\'Unità di Controllo che effettua il SECONDO livello di decodifica nella CPU MIPS a ciclo singolo per l\'esecuzione delle istruzioni elencate in rosso`,
  ],
  [
    `Lo stato SET del LATCH SR che rappresenta il simbolo 1 corrisponde alla configurazione in cui:`,
    `Gli output sono diversi e l\'output Q=1`,
  ],
  [
    `Lo stato RESET del LATCH SR che rappresenta il simbolo 0 corrisponde alla configurazione in cui:`,
    `Gli output sono diversi e l\'output Q=0`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4103_FlipFlop_PEG/img/testImage_1547819878794.jpg" title="Domanda3.jpg"><br><br><br><br>A partire dal LATCH SR riportato in figura, il circuito del Flip/Flop SR si ottiene:`,
    `Introducendo il segnale clock posto in AND con ciascuno degli input S ed R`,
  ],
  [
    `Nel Flip-Flop SR l\'input S=0 ed R=0 determina:`,
    `Il mantenimento invariato dello stato rappresentato dai valori output`,
  ],
  [
    `Nel Flip-Flop SR l\'input S=1 ed R=0 determina:`,
    `La transizione dei valori output nello stato SET`,
  ],
  [
    `Nel Flip-Flop SR l\'input S=0 ed R=1 determina:`,
    `La transizione dei valori output nello stato RESET`,
  ],
  [
    `Nel Flip-Flop SR l\'input S=1 ed R=1 determina:`,
    `Nessuna transizione perché è una configurazione input esclusa`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4103_FlipFlop_PEG/img/testImage_1547819897077.jpg" title="Domanda8.jpg"><br><br><br><br>A partire dal Flip-Flop SR riportato in figura, il circuito del Flip/Flop D si ottiene:`,
    `Ponendo R = NOT(S)`,
  ],
  [
    `Nel Flip-Flop D l\'input D=1 determina:`,
    `La transizione dei valori output nello stato SET`,
  ],
  [
    `Nel Flip-Flop D l\'input D=0 determina:`,
    `La transizione dei valori output nello stato RESET`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4110_ImplRegProc_PEG/img/testImage_1547828953253.jpg" title="Domanda1.jpg"><br><br><br><br>Il grafico in figura relativo al processore MIPS rappresenta:`,
    `Il circuito di Lettura dei Registri del processore`,
  ],
  [
    `Il circuito di Lettura dei Registri del processore MIPS utilizza:`,
    `Un multiplexer 2<sup>5</sup> a 1 per selezionare il Registro mediante il relativo indirizzo di 5 bit`,
  ],
  [
    `L\'attivazione della Lettura per proteggere i 32 Registri del processore MIPS:`,
    `Non è implementata non essendo necessaria la protezione in lettura poiché non è distruttiva`,
  ],
  [
    `Nel circuito di Lettura il contenuto dei Registri del processore MIPS è collegato:`,
    `Ai terminali input del multiplexer relativi ai dati da selezionare utilizzando i valori sui terminali input di controllo del multiplexer costituiti dall\'indirizzo del Registro`,
  ],
  [
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/4110_ImplRegProc_PEG/img/testImage_1547829009794.jpg" title="Domanda5.jpg"><br><br><br><br>Il grafico in figura relativo al processore MIPS rappresenta:`,
    `Il circuito di Scrittura dei Registri del processore`,
  ],
  [
    `Il circuito di Scrittura dei Registri del processore MIPS utilizza:`,
    `Un decodificatore 5 a 2<sup>5</sup> per selezionare il Registro mediante il relativo indirizzo di 5 bit`,
  ],
  [
    `L\'attivazione della Scrittura nei 32 Registri del processore MIPS è controllata mediante:`,
    `Il segnale output dell\'AND tra il segnale di controllo RegWrite e l\'output del decodificatore relativo a ciascun registro`,
  ],
  [
    `Nel circuito di Scrittura il Dato da scrivere in un Registro del processore MIPS è collegato:`,
    `In input al contenuto di tutti i Registri, ma la scrittura è attivata solo nel registro che corrisponde all\'indirizzo fornito in input al decodificatore`,
  ],
  [
    `Il Codice a controllo di parità consente di:`,
    `Riconoscere ma non correggere il verificarsi di un numero dispari di errori`,
  ],
  [
    `Il Codice di Hamming consente di:`,
    `Correggere ogni errore su un singolo bit`,
  ],
  [
    `Nell\'ambito della valutazione delle prestazioni, con il termine metrica si indica:`,
    `Una valutazione in termini numerici di un aspetto del comportamento del sistema`,
  ],
  [
    `Nell\'ambito della valutazione delle prestazioni Hardware con il termine benchmark si indica:`,
    `Un insieme di programmi campione appositamente scelto per impegnare un dispositivo nell\'esecuzione di un numero adeguato di istruzioni significative ai fini della valutazione da effettuare`,
  ],
  [
    `Ai fini della valutazione delle prestazioni Hardware, il tempo di CPU viene definito come:`,
    `Il tempo di CPU utente speso per l\'esecuzione delle istruzioni del programma utente più il tempo di CPU di sistema speso per l\'esecuzione delle funzioni del Sistema Operativo necessarie per eseguire il programma utente`,
  ],
  [
    `La relazione che lega la frequenza di clock al periodo di clock è data da:`,
    `Frequenza uguale all\'inverso del periodo`,
  ],
  [
    `Utilizzando il periodo di clock, il tempo di CPU utente relativo alla esecuzione di un programma può essere calcolato con la formula:`,
    `Numero di cicli di clock impiegati per l\'esecuzione del programma moltiplicato per il periodo di clock`,
  ],
  [
    `Utilizzando la frequenza di clock, il tempo di CPU utente relativo alla esecuzione di un programma può essere calcolato con la formula:`,
    `Numero di cicli di clock impiegati per l\'esecuzione del programma diviso la frequenza di clock`,
  ],
  [
    `Considerando un computer con un periodo di clock di 2 ns/ciclo ed un programma che richiede 12000000 di cicli di esecuzione, il tempo di CPU utente è dato da:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/5287_ValPrestHardware_PEG/img/testImage_1551106739065.jpg" title="Risposta72.jpg">`,
  ],
  [
    `Considerando un computer con una frequenza di clock di 3 GHz ed un programma che richiede 12000000 di cicli di esecuzione, il tempo di CPU utente è dato da:`,
    `<img alt="" src="https://lms-courses.pegaso.multiversity.click/efs-courses/0312209INF01/scorm/5287_ValPrestHardware_PEG/img/testImage_1636707715957.jpg" title="Risposta83.jpg">`,
  ],
  [
    `La relazione che lega il tempo di CPU utente con la frequenza di clock e il periodo di clock è:`,
    `Inversa proporzionalità con la frequenza e diretta proporzionalità con il periodo`,
  ],
  [
    `Per migliorare le prestazioni di un computer la frequenza di clock può essere:`,
    `Aumentata, ma senza superare il limite fisico costituito dalla possibilità di disperdere il calore generato`,
  ],
  [
    `In una gerarchia di memorie, il livello più vicino alla CPU è:`,
    `Più veloce e meno grande`,
  ],
  [
    `La tecnica detta mappatura diretta di una cache costituita da K = 2<sup>s</sup> locazioni pone:`,
    `Gli indirizzi della cache costituita da K=2<sup>s</sup> locazioni uguali al valore modulo s degli indirizzi delle locazioni della Memoria principale, che coincide con il valore rappresentato dagli s bit meno significativi di tali indirizzi`,
  ],
  [
    `Il campo tag di un elemento della Tabella associata alla cache fornisce:`,
    `I rimanenti bit dell\'indirizzo della locazione nella Memoria principale associata alla locazione nella cache relativa alla riga della Tabella, che vengono persi effettuando l\'operazione modulo prevista dalla tecnica di mappatura diretta della cache`,
  ],
  [
    `Il campo di validità di un elemento della Tabella associata alla cache fornisce:`,
    `Il valore di un bit uguale a 1 se la locazione nella cache relativa alla riga della Tabella è occupata da un dato copiato dalla Memoria principale, uguale a 0 se tale locazione nella cache è libera`,
  ],
  [
    `I termini hit rate e miss rate indicano:`,
    `Le metriche che forniscono rispettivamente la frequenza di hit e la frequenza di miss che si verificano in un fissato numero di accessi in memoria.`,
  ],
  [
    `La penalità di miss è:`,
    `La metrica che fornisce il tempo per sostituire un blocco nel livello superiore con un nuovo blocco copiato dal livello inferiore che contiene il dato cercato`,
  ],
  [
    `Il tempo di hit:`,
    `La metrica che fornisce il tempo che si spende per accedere al livello superiore della gerarchia di memorie nel caso che il dato venga trovato`,
  ],
  [
    `Con il termine Memoria Virtuale si indica:`,
    `Una tecnica di gestione della memoria capace di simulare uno spazio di Memoria principale indirizzabile maggiore di quello fisicamente disponibile, utilizzando spazio della memoria di massa`,
  ],
  [
    `Si verifica un page fault quando:`,
    `Si richiede l\'accesso ad una pagina della Memoria Virtuale che non corrisponde ad una pagina della Memoria principare perché la pagina cercata risiede nella memoria di massa`,
  ],
  [
    `La MMU (Memory Management Unit) è:`,
    `Un dispositivo Hardware per la gestione della Memoria Virtuale che fornisce la traduzione degli indirizzi virtuali in indirizzi fisici della Memoria principale`,
  ],
  [
    `Il parallelismo della tecnica di pipelining per il miglioramento delle prestazioni di un computer consiste:`,
    `Nella  esecuzione in parallelo di più istruzioni come in una catena di montaggio, suddividendo l\'esecuzione di ogni istruzione  in fasi e svolgendo le operazioni di ogni fase in un ciclo di clock.`,
  ],
  [
    `L\'esecuzione di una istruzione del Linguaggio Macchina MIPS nell\'applicazione del pipeling è suddivisa in:`,
    `5 fasi denominate: Fetch, lettura dei registri e decodifica, calcolo effettuato dall\'ALU, lettura/scrittura di un dato in Memoria, scrittura nel blocco dei Registri`,
  ],
  [
    `Per l\'implementazione della tecnica di pipelining è necessario:`,
    `Aggiungere dei registri per memorizzare le informazioni necessarie alla esecuzione in parallelo delle istruzioni`,
  ],
  [
    `Si verifica una criticità strutturale quando:`,
    `Le risorse Hardware presenti non sono in grado di supportare le operazioni richieste da diverse fasi della pipeline in esecuzione`,
  ],
  [
    `Si verifica una criticità sui dati  quando:`,
    `Una fase deve aspettare i risultati delle operazioni eseguite  in un altra fase della pipeline`,
  ],
  [
    `Per risolvere una criticità sui dati:`,
    `Si utilizza la tecnica detta di propagazione (bypassing) che consente all\'istruzione successiva di leggere direttamente i risultati output calcolati dall\'ALU senza dover attendere che siano memorizzati nel blocco dei Registri`,
  ],
  [
    `Si verifica una criticità sul controllo quando:`,
    `Il prelievo di una istruzione nella fase di Fetch dipende dall\'esito del test di una istruzione di salto condizionato in esecuzione nella pipeline`,
  ],
  [
    `Per risolvere una criticità sul controlo:`,
    `Si utilizza una  tecnica di predizione dell\'esito del salto condizionato, che nel caso più semplice consiste nel continuare sempre l\'esecuzione senza effettuare il salto`,
  ],
  [
    `Il termine multicore è riferito a una Architettura:`,
    `In cui è presente più di una Central Processing Unit (CPU)`,
  ],
  [
    `Una General Purpose GPU è:`,
    `Una Unità di elaborazione grafica ad alto parallelismo che offre la possibiltà di programmare un ampio spettro di applicazioni  utilizzando un linguaggio di programmazione tipicamente basato sul Linguaggio C`,
  ],
];
console.log(
  all.replace(/\["/g, "[`").replace(/","/g, "`,`").replace(/\"]/g, "`]")
);
