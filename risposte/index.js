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
  [`I diritti patrimoniali sono:`, `disponbili e prescrittibili`],
  [
    "Il data breach:",
    "si realizza con una divulgazione di dati all'interno di un ambiente (fisico o informatico) privo di misure di sicurezze",
  ],
  [
    `I diritti personali:`,
    `ineriscono strettamente alla persona e soltanto da questa sono esercitabili`,
  ],
  [
    `In caso di professionista non associato:`,
    `il titolare sarà il professionista`,
  ],
  [
    `L'Editto di Nantes del 1563:`,
    `Contribuisce a consolidare il sistema dei privilegi in Francia`,
  ],
  [
    `I "dati personali" sono:`,
    `	tutte le informazioni che assumono rilevanza per la individuazione dell'identità dell'individuo, anche in rete`,
  ],
  [
    `I diritti della personalità:`,
    `realizzano esigenze di carattere esistenziale e, mediatamente, anche materiale`,
  ],
  [
    `Per la teoria monistica:`,
    `È configurabile un unico diritto della personalità`,
  ],
  [
    `I diritti inviolabili dell'uomo:`,
    `sono parte integrante dell'ordine pubblio sia interno sia europeo`,
  ],
  [
    `Il potere di disposizione delle situazioni personali:`,
    `trova un limite invalicabile nel rispetto del valore della dignità umana`,
  ],
  [
    `Per la teoria atomistica:`,
    `i diritti della personalità sarebbero sempre tipici`,
  ],
  [
    `Per \"assolutezza\" si intende che:`,
    `i diritti della personalità sono tutelabili erga omnes`,
  ],
  [`Il nascituro:`, `può essere titolare di situazioni esistenziali`],
  [
    `Il principio di reciprocità:`,
    `non riguarda anche i diritti inviolabili della persona`,
  ],
  [`Il diritto alla vita:`, `È il primo dei diritti inviolabili dell'uomo`],
  [`Il diritto alla vita:`, `spetta anche al concepito`],
  [`Il diritto alla salute:`, `È inscindibile unità psicofisica`],
  [
    `Il diritto alla salute:`,
    `ha rilievo anche nei rapporti civili quale parametro della liceità e della illiceità dei comportamenti`,
  ],
  [
    `Il c.d. diritto di non nascere se non sano:`,
    `non è riconsciuto nel nostro ordinamento`,
  ],
  [
    `Per libertà del trattamento sanitario si intende che:`,
    `il diritto alla salute è rimesso all'autodeterminazione del suo titolare`,
  ],
  [`Il nome:`, `È modificabile`],
  [
    `Onore e reputazione:`,
    `vanno valutati in relazione alla personalità dell'interessato`,
  ],
  [
    `Una notizia lesiva dell'altrui reputazione:`,
    `È pubblicabile solo se vera, \"utile socialmente\" e \"continente\"`,
  ],
  [
    `La lesione dell'altrui integrità morale:`,
    `È tutelabile sia con tecniche risarcitorie sia con tecniche inibitorie`,
  ],
  [
    `La pubblicazione dell'immagine altrui:`,
    `È ammessa solo se vi è l'assenso della persona ritratta`,
  ],
  [
    `Il consenso:`,
    `non è richiesto se la riproduzione è giustificata dalla notorietà o dalla carica pubblica della persona ritratta`,
  ],
  [
    `Il consenso alla pubblicazione della propria immagine:`,
    `può essere manifestato in forma espressa o tacita`,
  ],
  [`Il diritto all'immagine:`, `ha autonoma rilevanza`],
  [`L'immagine:`, `È un bene giuridico anche patrimoniale`],
  [
    `Il diritto all'identità personale:`,
    `comprende tutti i profili caratterizzanti la personalità dell'individuo`,
  ],
  [
    `Il diritto all'identità personale:`,
    `implica che i profili della propria personalità siano divulgati nel rispetto del principio di verità`,
  ],
  [
    `L'identità digitale:`,
    `È l'identità informatica che ciascun soggetto crea, talvolta anche con dati di fantasia`,
  ],
  [
    `La tutela dell'identità si realizza:`,
    `verificando in concreto lo strumento più adeguato al tipo di lesione`,
  ],
  [
    `Il diritto di rettifica:`,
    `È strumento di tutela della persona e ha portata generale`,
  ],
  [
    `Il diritto al nome:`,
    `E' disciplinato agli artt. 6 e ss. c.c., ed è uno dei diritti della personalità riconosciuti e garantiti dalla Costituzione`,
  ],
  [
    `Il diritto all'immagine:`,
    `E' un diritto tutelato sia dal Codice civile che dal Codice penale`,
  ],
  [
    `I dati personali:`,
    `Si dividono in quattro categorie: dati sensibili, dati semi sensibili, dati comuni e dati giudiziari`,
  ],
  [
    `Il primo intervento normativo per disciplinare il diritto alla protezione dei dati personali:`,
    `E' individuabile a metà degli anni '90 con la legge 31 dicembre 1996 n. 675`,
  ],
  [
    `Nel mese di giugno 2003:`,
    `E' stato approvato dal Consiglio dei Ministri il Testo Unico in materia di protezione dei dati personali, denominato Codice in materia di protezione dei dati personali o, più brevemente, Codice Privacy`,
  ],
  [
    `Il direct marketing:`,
    `E' una tecnica di marketing attraverso la quale aziende e enti, organizzazioni pubbliche e no profit, comunicano direttamente con clienti e utenti finali`,
  ],
  [
    `Nell'ambito della tutela dei dati personali e della privacy, all'art. 29 del Codice della privacy:`,
    `Viene individuato il soggetto che risulta essere il responsabile o data processor del trattamento dei dati personali`,
  ],
  [
    `La figura dell'incaricato:`,
    `Identifica tutti i collaboratori, praticanti, dipendenti, e in genere qualsiasi soggetto che non sia dotato di quell'autonomia propria del titolare e che non abbia ricevuto una designazione a responsabile del trattamento da parte del titolare`,
  ],
  [
    `Il Regolamento generale per la protezione dei dati personali:`,
    `E' la normativa europea n. 2016/679 in materia di protezione dei dati (General Data Protection Regulation o GDPR)`,
  ],
  [
    `Con il GDPR:`,
    `I titolari del trattamento dovranno identificare la base giuridica del trattamento (ad esempio il consenso dell'interessato) e documentarla`,
  ],
  [
    `La direttiva 95/46/CE:`,
    `E' stato il primo atto normativo europeo che ha segnato la strada per una normativa europea di protezione dati personali`,
  ],
  [
    `Quali tra questi non è uno degli obiettivi che il legislatore europeo ha inteso perseguire con l'emanazione della direttiva 95/46/CE:`,
    `La liberalizzazione dell'utilizzo dei dati personali per finalità di marketing`,
  ],
  [
    `La direttiva 95/46/CE non si applica:`,
    `Quando il trattamento di dati personali sia effettuato per finalità esclusivamente personali da parte di soggetti privati`,
  ],
  [`La direttiva 95/46/CE:`, `E' stata attuata in italia con l. 675/1996`],
  [
    `L'obbligo di notifica di alcuni trattamenti al Garante:`,
    `Era previsto per alcune tipologie di trattamento contraddistinte da un livello di rischio elevato per i diritti e le libertà degli interessati`,
  ],
  [
    `Ai sensi del Codice della privacy nella sua versione pubblicata in Gazzetta Ufficiale, il responsabile del trattamento:`,
    `Poteva essere sia interno che esterno`,
  ],
  [
    `Quali tra queste misure minime di sicurezza non erano contemplate nell'Allegato B del Codice della privacy:`,
    `Pseudonimizzazione dei dati`,
  ],
  [
    `Il D.lgs. 196/2003 (Codice della privacy):`,
    `E' stato novellato dal D.lgs. 101/2018`,
  ],
  [
    `Ai sensi del D.lgs. 101/2018, minori…:`,
    `Possono fornire autonomamente il proprio consenso se si tratta di servizi della società dell'informazione se infraquattordicenni`,
  ],
  [
    `Quale tra i principi del GDPR scardina il concetto di protezione dati descritto dall'Allegato B?:`,
    `Responsabilizzazione`,
  ],
  [
    `Il regolamento privacy:`,
    `È direttamente applicabile in tutti gli stati membri`,
  ],
  [
    `Il regolamento privacy:`,
    `È già entrato in vigore ma sarà applicabile a partire dal 25 maggio 2018`,
  ],
  [
    `Uno dei principi fondamentali per la compliance con il GDPR è il principio di:`,
    `responsabilità o accountability del titolare del trattamento`,
  ],
  [
    `Gli altri principi che il titolare del trattamento deve rispettare sono:`,
    `privacy by design e privacy by default`,
  ],
  [
    `Il data protection officer funge da punto di contatto:`,
    `per il Garante Privacy`,
  ],
  [
    `La nomina del Data Protection Officer:`,
    `È obbligata in determinate situazioni`,
  ],
  [
    `La Direttiva CE 95/46 :`,
    `non specificava né la tipologia né l'entità delle sanzioni`,
  ],
  [
    `Il regolamento privacy:`,
    `prevede sia le violazioni passibili di sanzioni amministrative che i relativi importi`,
  ],
  [`La sanzione deve essere:`, `effettiva, proporzionata e dissuasiva`],
  [
    `La sanzione massima prevista dal regolamento privacy è di:`,
    `20 milioni di euro, o per le imprese, fino al 4 % del fatturato mondiale totale annuo dell'esercizio precedente, se superiore.`,
  ],
  [
    `Il diritto alla riservatezza:`,
    `ha fondamento nella clausola generale di tutela della persona ex art. 2 cost`,
  ],
  [
    `La tutela della riservatezza:`,
    `È mutevole e sensibile all'evoluzione del contesto sociale`,
  ],
  [
    `La tutela dell'intimità familiare:`,
    `si atteggia in maniera peculiare, in quanto si fonda sul principio di solidarietà familiare`,
  ],
  [
    `In caso di uso illegittimo dell'immagine del congiunto:`,
    `vige il principio della indisponibilità del decoro altrui`,
  ],
  [`Il segreto epistolare:`, `ammette eccezioni in ambito familiare`],
  [
    `L'utilizzo di dati personali:`,
    `È consentito sono in presenza di adeguate protezioni per la privacy`,
  ],
  [
    `Nei rapporti con la p.a.:`,
    `È riconosciuto il diritto di accesso agli atti amministrativi per la protezione della sfera personale`,
  ],
  [
    `L'interesse alla riservatezza nei rapporti con la p.a.:`,
    `si atteggia quale interesse alla partecipazione al procedimento`,
  ],
  [
    `Il diritto all'autodeterminazione informativa:`,
    `e il diritto di poter gestire i propri dati`,
  ],
  [
    `Per non eccedenza delle informazioni si intede che le stesse debba essere:`,
    `coerenti e non sovrabbondanti rispetto agli obiettivi perseguiti in cncreto`,
  ],
  [
    `Il diritto alla riservatezza:`,
    `È un diritto di creazione giurisprudenziale, inteso come rispetto della vita privata e familiare`,
  ],
  [
    `Il diritto alla protezione dei dati personali:`,
    `rappresenta una evoluzione della privacy resa necessaria dall'avvento delle nuove tecnologie`,
  ],
  [
    `Il diritto alla protezione dei dati personali:`,
    `garantisce l'autodeterminazione decisionale e il controllo sulla circolazione dei propri dati`,
  ],
  [
    `La protezione dei dati:`,
    `È un diritto di rilevanza costituzionale per lo Stato tedesco`,
  ],
  [
    `Le discipline in materia di protezione dei dati:`,
    `mirano a prevenire abusi nell'utilizzazione dei dati personali`,
  ],
  [
    `Il GDPR del 2016:`,
    `ha abrogato la Direttiva UE del 1995 e si occupa di Bg data`,
  ],
  [`Il diritto alla riservatezza:`, `nasce negli Stati Uniti nel 1890`],
  [
    `La prima normativa europea a protezione dei dati è:`,
    `la Direttiva CE n. 46 del 24 ottobre 1995`,
  ],
  [
    `Per dato personale si intende:`,
    `qualsiasi informazione riguardante una persona fisica identifica o identificabile`,
  ],
  [
    `Il concetto di diritto alla privacy:`,
    `È evocato per la prima volta in \"The right to privacy\"`,
  ],
  [
    `Può dirsi che la proprietà industriale:`,
    `Introduce un monopolio temporaneo e una misura \"anticoncorrenziale\"`,
  ],
  [`L'U.E.:`, `Ha competenza esplicita in materia di proprietà intellettuale`],
  [
    `I limiti all'esercizio e alla durata delle prerogative dell'autore sul trovato:`,
    `Sono necessari al fine di garantire il contemperamento degli interessi di sfruttamento economico dell'autore, con l'interesse al libero uso delle informazioni`,
  ],
  [
    `Il regolamento:`,
    `Ha sempre portata generale, è obbligatorio in tutti i suoi elementi ed è  direttamente applicabile in ciascuno Stato membro`,
  ],
  [
    `Per know-how si intende:`,
    `L'insieme delle conoscnze tecniche necessarie per il corretto impiego di  tecnologie, macchine o impianti`,
  ],
  [
    `La Direttiva 96/9 CE è riguarda:`,
    `La protezione giuridica delle banche dati`,
  ],
  [
    `Con il caso \"Promusicae\":`,
    `I giudici comunitari si sono pronunciati circa il rapporto tra la normativa a tutela della proprietò intellettuale ed il diritto alla protezione dei dati personali `,
  ],
  [
    `La Promusicae nasce come:`,
    `Un associazione spagnola senza scopo di lucro di editori e produttori, nonché di registrazioni musicalied audiovisive`,
  ],
  [
    `Il \"principio dell'esaurimento\":`,
    `Impone che il titolare dei diritti di proprietà industriale e commerciale, una volta che sia stato commercializzato un bene sul territorio comunitario perda le facoltà di privativa `,
  ],
  [
    `Il discrimen tra regolamento e direttiva può essere rinvenuto nella circostanza che:`,
    `Il regolamento è obbligatorio in tutti i suoi elementi`,
  ],
  [
    `L'actio furti:`,
    `Insieme all'actio iniuriarum componeva il catalogo delle actiones a disposizione dell' autore di un opera, affinchè questi potesse far valere il proprio diritto morale sulla stessa`,
  ],
  [
    `Il valore del contenuto sostanziale di un testo scritto, acquista riconoscimento:`,
    `Nel basso medioevo quale conseguenza della nascita della stampa`,
  ],
  [
    `Con lo Statue of Anne del 1710:`,
    `Agli autori viene concesso il diritto esclusivo di stampa sulle proprie opere, cedibile con atto scrittoA`,
  ],
  [
    `L'Editto di  Nantes del 1563:`,
    `Contribuisce a consolidare il sistema dei privilegi in Francia`,
  ],
  [
    `Nella Roma antica:`,
    `Era avvertita tanto la illegittimità del plagio, quanto l'esigenza di consentire lo sfruttamento economico delle opere letterarie`,
  ],
  [
    `Solo con l'Illuminiso si afferma il principio secondo il quale:`,
    `L'autore ha diritti sia morali che economici sulle opere `,
  ],
  [
    `Il Copiright Act del 1909:`,
    `Rappresenta il momento di massima differenziazione tra il sistema nordamericano e quello continentale`,
  ],
  [
    `L'art. 6-bis della Conv. Di Berna:`,
    `Non è stato attuato dagli Usa sulla base ad una riserva in esse contenuta`,
  ],
  [`Gutenberg fu il \"padre\":`, `Della stampa a caratteri mobili`],
  [
    `Lo Statue of Anne riconosceva agli autori un diritto il quale:`,
    `Durava 14 anni rinnovabili per ulteriori  14 anni`,
  ],
  [`La \"nuova economia\":`, `E' il portato della \"nuova informazione\"`],
  [`Il diritto d'autore:`, `Si fonda sul principio di territorialità`],
  [
    `La Convenzione di Roma del 1980:`,
    `Si applica per i contratti di diritto d'autore`,
  ],
  [
    `La Convenzione di berna del 1886:`,
    `E' stata sottoscritta da oltre 140 paesi`,
  ],
  [
    `La Convenzione Universale del diritto d'autore del 1952:`,
    `Prevede una disciplina meno estesa rispetto alla CUB`,
  ],
  [
    `Il sistema dei GATT:`,
    `Nasce nel 1947 per tutelare il commercio internazionale`,
  ],
  [`La PAIPO:`, `E' un’agenzia specializzata in IP per un’Africa Unita`],
  [
    `Southern African Development Community “SADC”) è:`,
    `È un protocollo che sancisce gli obiettivi della Comunità Africana per lo Sviluppo del Sud Africa a sostegno della produttività`,
  ],
  [
    `La direttiva enforcement:`,
    `Ha comportato significative modifiche alla legge sul diritto d’autore e al codice della proprietà industriale`,
  ],
  [
    `Il regolamento UE 2015/2424 del Parlamento europeo e del Consiglio:`,
    `Modifica il precedente regolamento sul marchio comunitario e assegna all’ufficio preposto alla registrazione sito in Spagna il nome attuale di  (EUIPO)`,
  ],
  [
    `L'esistenza di un right to privacy è sostanzialmente un portato:`,
    `della rivoluzione borghese`,
  ],
  [
    `La convenzione di Roma del 1950 riconosce il diritto:`,
    `di ogni persona al rispetto della sua vita privata`,
  ],
  [
    `Attualmente è in vigore:`,
    `il regolamento Europeo 2016/679 in materia di protezione dei dati personali`,
  ],
  [
    `I soggetti che ruotano attorno al sistema della protezione dei dati personali, sono:`,
    `il titolare, il responsabile, il designato al trattamento, l'interessato e il DPO`,
  ],
  [
    `Il titolare del trattamento è il sogetto:`,
    `cui competono le decisioni in ordine alle finalità, alle modalità del trattamento di dati personali e agli strumenti utilizzati`,
  ],
  [
    `Il responsabile del trattamento è :`,
    `un soggetto che tratta i dati per conto del titolare`,
  ],
  [
    `La nomina del DPO è:`,
    `È obbligatoria nei casi stabiliti dall'art. 37 del Reg. UE 2016/679`,
  ],
  [
    `Il soggetto designato al trattamento:`,
    `può essere solo una persona fisica`,
  ],
  [
    `Le tipologie di dati personali nel Codice Privacy sono:`,
    `i dati identificativi, i dati sensibili, i dati giudiziari`,
  ],
  [
    `I dati sensibili sono oggetto di trattamento solo:`,
    `con il consenso espresso e la forma scritta ad substantiam`,
  ],
  [
    `La raccolta di dati personali di altri individui per uso strettamente personale è:`,
    `libera e consentita`,
  ],
  [`L'informativa deve essere resa per il trattamento dei dati:`, `personali`],
  [
    `La base giuridica del trattamento:`,
    `rappresenta ciò che legittima il trattamento`,
  ],
  [
    `Il consenso:`,
    `È una delle basi giuridiche che può autorizzare il trattamento dei dati personali`,
  ],
  [
    `L'interesse vitale dell'interessato:`,
    `È una delle basi giuridiche del trattamento`,
  ],
  [
    `Le pubbliche amministrazioni:`,
    `non devono richiedere il consenso dell'interessato, purché il trattamento sia effettuato nell'ambito dello svolgimento delle proprie funzioni istituzionali.`,
  ],
  [
    `Il trattamento dei dati personali effettuato senza il consenso:`,
    `può essere sanzionato con una sanzione amministrativa pecuniaria`,
  ],
  [
    `Gli elementi caratteristici della profilazione sono dati:`,
    `dal trattamento di dati personali, effettuato in maniera automatizzata, col fine di valutare determinati aspetti di una determinata persona`,
  ],
  [
    `Viene considerata una best practice:`,
    `redigere un'informativa a più livelli`,
  ],
  [
    `Il trattamento dei dati per finalità di profilazione:`,
    `comporta la predisposizione della DPIA`,
  ],
  [
    `Il consenso:`,
    `deve essere espresso con una dichiarazione o un'azione positiva`,
  ],
  [`Il consenso deve essere informato:`, `sempre`],
  [`L'onere della prova del consenso grava su:`, `titolare`],
  [
    `Se l'esecuzione di un contratto è subordinata alla prestazione del consenso al trattamento dei dati personali:`,
    `Il consenso si presume invalido, salva prova contraria`,
  ],
  [`Un consenso è libero quando:`, `c'è una possibilità di scelta effettiva`],
  [`Il consenso deve essere revocabile:`, `in qualsiasi momento`],
  [
    `Dopo la revoca del consenso:`,
    `Il titolare non può utilizzare una diversa base giuridica per quel trattamento`,
  ],
  [
    `Quando il consenso viene revocato:`,
    `Il trattamento anteriore alla revoca non viene pregiudicato`,
  ],
  [
    `Opt-in:`,
    `significa che il soggetto deve esprimere il consenso con un'azione positiva`,
  ],
  [
    `L'obbligo di opt-in:`,
    `comporta che non sia possibile avere delle caselle pre-spuntate`,
  ],
  [
    `Ai sensi dell'articolo 8 del GDPR consenso al trattamento dei dati fornito da un minore:`,
    `È valido se il minore ha almeno 16 anni nel contesto dell'offerta diretta di servizi della società dell'informazione`,
  ],
  [
    `Se il minore ha meno di 16 anni:`,
    `serve il consenso di un genitore o di chi esercita la responsabilità genitoriale`,
  ],
  [
    `Gli Stati membri:`,
    `possono abbassare letà del consenso digitale fino a 13 anni`,
  ],
  [
    `I minori possono concludere dei contratti:`,
    `nei casi previsti dalla normativa nazionale`,
  ],
  [
    `Il digital kidnapping:`,
    `serve per creare un'identità digitale alternativa`,
  ],
  [
    `L'informativa ai minori:`,
    `deve essere comprensibile per il minore, tenendo conto della sua giovane età`,
  ],
  [
    `Il best interest del minore:`,
    `È poter utilizzare la rete senza essere \"abbindolato\" da chi offre servizi`,
  ],
  [`I social network:`, `prevedono delle età minime`],
  [
    `Per pubblicare le foto di minori sui social:`,
    `serve il consenso di entrambi i genitori`,
  ],
  [
    `La pubblicazione di foto di minori sui social:`,
    `non rientra nella household exemption per i rischi particolari connessi a questa attività`,
  ],
  [
    `Obiettivo del diritto di accesso:`,
    `È restituire agli interessati il controllo sui propri dati`,
  ],
  [
    `L'interessato ha diritto di ottenere:`,
    `conferma sul fatto che vi sia un trattamento di sui dati`,
  ],
  [
    `Se vi è un trattamento, l'interessato:`,
    `ha diritto di ottenere copia dei dati trattati e altre informazioni`,
  ],
  [
    `I destinatari cui saranno comunicati i dati:`,
    `sono un'informazione cui l'interessato ha diritto di accedere`,
  ],
  [
    `Se i dati sono trasferiti a un Paese terzo:`,
    `l'interessato ha diritto di ricevere comunicazione delle garanzie adeguate ex art 46 GDPR`,
  ],
  [
    `Il diritto di accesso:`,
    `può essere esercitato in vari modi, sia telematici che cartacei che a voce`,
  ],
  [
    `Il titolare:`,
    `deve fornire una copia dei dati personali oggetto del trattamento`,
  ],
  [
    `Se l'interessato presenta la richiesta di accesso con mezzi elettronici:`,
    `deve esseregli data risposta con mezzi elettronici`,
  ],
  [
    `Se il diritto di accesso viene esercitato più volte:`,
    `può essere richiesto un contributo ragionevole`,
  ],
  [
    `Il termine per ottemperare alla richiesta di accesso:`,
    `È di un mese, prorogabile massimo di 2`,
  ],
  [`Il diritto di rettifica:`, `È disciplinato dall'art 16 GDPR`],
  [
    `Esercitando il diritto di rettifica, l'interessato:`,
    `può integrare i propri dati personali incompleti`,
  ],
  [`Il diritto di limitazione del trattamento:`, `È stato introdotto dal GDPR`],
  [
    `Si può esercitare il diritto di limitazione del trattamento:`,
    `in alcuni casi tassativamente elencati dall'art 18 GDPR`,
  ],
  [
    `Se i dati personali servono all'interessato per l'accertamento di un diritto in sede giudiziaria:`,
    `il trattamento può essere limitato`,
  ],
  [
    `Il diritto di limitazione del trattamento serve per:`,
    `contestare le modalità di trattamento realizzate dal titolare`,
  ],
  [
    `Quando l'interessato si oppone al trattamento:`,
    `può esserci limitazione del trattamento se si valuta l'interesse legittimo del titolare`,
  ],
  [
    `Il diritto di opposizione:`,
    `riguarda il diritto di opporsi al trattamento`,
  ],
  [
    `Il diritto di opposizione può essere esercitato:`,
    `solo quando il trattamento è trattato ex art 6.1 lettere e) ed f)`,
  ],
  [
    `Quando viene esercitato il diritto di opposizione, il titolare:`,
    `può dimostrare che il suo interesse prevale su quello dell'interessato`,
  ],
  [
    `Il diritto all'oblio:`,
    `tutela l'interesse dell'interessato a essere dimenticato`,
  ],
  [
    `Il diritto sancito dall'articolo 17:`,
    `impone al titolare di cancellare e non trattare più quei dati`,
  ],
  [
    `Il diritto all'oblio può essere esercitato:`,
    `in alcuni casi elencati nell'art 17`,
  ],
  [
    `Tra le eccezioni al diritto all'oblio:`,
    `rientra il caso in cui prevalga il diritto di cronaca`,
  ],
  [
    `Se il titolare ha reso i dati pubblici:`,
    `deve cancellarne qualsiasi link, copia e riproduzione`,
  ],
  [
    `L'obbligo di comunicare la cancellazione ai destinatari:`,
    `incombe sul titolare`,
  ],
  [
    `La deindicizzazione:`,
    `È un tipo particolare di risposta all'esercizio del diritto, a salvaguardia del diritto di cronaca`,
  ],
  [
    `Lo scorrere del tempo:`,
    `È uno dei fattori che vengono considerati per l'accoglimento dell'istanza`,
  ],
  [
    `La CGUE ha stabilito:`,
    `che il motore di ricerca effettua la deindicizzazione solo nelle versioni del suo sistema relative agli Stati membri`,
  ],
  [
    `Se il fatto riguarda una vicenda giudiziaria:`,
    `rileva che l'iter processuale si sia concluso di recente`,
  ],
  [`Il diritto alla portabilità dei dati:`, `È una novità del GDPR`],
  [
    `Il titolare ha diritto di ricevere i dati:`,
    `il diritto alla portabilità non è un diritto del titolare`,
  ],
  [
    `Il vendor lock-in:`,
    `È l'impossibilità di fatto per l'interessato di cambiare gestore perché troppo oneroso`,
  ],
  [
    `Il diritto alla portabilità può essere esercitato:`,
    `solo se il trattamento è effettuato con mezzi automatizzati e sulla base del consenso o per l'esecuzione di un contratto`,
  ],
  [
    `Se il trattamento si basa su ragioni di interesse pubblico:`,
    `la portabilità sarà esclusa`,
  ],
  [
    `Quando trasferire i dati da un titolare a un altro è tecnicamente impossibile:`,
    `il trasferimento non avverrà`,
  ],
  [
    `Il titolare:`,
    `deve informare gli interessati circa la possibilità di esercitare il diritto alla portabilità tramite adeguata informativa`,
  ],
  [`Per fornire le informazioni:`, `il titolare non può chiedere un compenso`],
  [`Il formato dei dati:`, `deve garantire l'interoperabilità`],
  [
    `Il titolare può opporre diniego alla richiesta di portabilità:`,
    `solo in casi tassativi previsti dal GDPR`,
  ],
  [
    `L'informativa privacy serve a:`,
    `mettere l'interessato in condizione di accettare, controllare o rifiutare il trattamento`,
  ],
  [`L'informativa deve essere:`, `concisa e trasparente`],
  [`Il linguaggio dell'informativa deve essere:`, `semplice e chiaro`],
  [
    `Se i dati personali sono raccolti presso l'interessato:`,
    `l'informativa deve essere data prima della raccolta dei dati`,
  ],
  [
    `Se i dati personali sono raccolti presso terzi:`,
    `l'informativa può essere data all'atto della registrazione dei dati`,
  ],
  [
    `I dati raccolti tramite osservazione dell'interessato:`,
    `sono considerati dati raccolti presso l'interessato`,
  ],
  [
    `Rientrano nei dati soggetti a informativa ex art 14 quelli:`,
    `raccolti da fonti accessibili al pubblico`,
  ],
  [
    `I dati di contatto del DPO:`,
    `devono sempre essere contenuti nell'informativa`,
  ],
  [
    `L'informativa ex art 14 GDPR:`,
    `deve indicare la fonte dove sono stati raccolti i dati`,
  ],
  [
    `Non è necessario fornire l'informativa quando:`,
    `l'interessato dispone già delle informazioni`,
  ],
  [`Il registro dei trattamenti:`, `È un documento che tiene il titolare`],
  [`La forma del registro:`, `deve essere scritta, anche elettronica`],
  [`Il Garante:`, `può chiedere l'esibizione del registro`],
  [
    `Le categorie di destinatari:`,
    `devono essere contenute nel registro del titolare`,
  ],
  [
    `Sono obbligati a tenere il registro:`,
    `le imprese o organizzazioni con almeno 250 dipendenti`,
  ],
  [
    `Se il trattamento include dati particolari:`,
    `anche le imprese con meno di 250 dipendenti devono tenere il registro`,
  ],
  [
    `Le imprese con meno di 250 dipendenti:`,
    `possono circoscrivere l'obbligo di redazione del registro alle sole specifiche attività di trattamento individuate`,
  ],
  [
    `Il responsabile:`,
    `tiene un registro per i dati trattati per conto del titolare`,
  ],
  [
    `Se uno stesso soggetto svolge attività di responsabile per più titolari:`,
    `dovrà suddividere il registro in tante sezioni quanti sono i titolari`,
  ],
  [
    `Il sub-responsabile:`,
    `deve tenere un registro per i trattamenti che svolge per conto del responsabile`,
  ],
  [`Il titolare del trattamento:`, `determina mezzi e fini del trattamento`],
  [
    `In caso di azienda persona giuridica:`,
    `il titolare sarà l'azienda stessa`,
  ],
  [
    `In caso di professionista non associato:`,
    `il titolare sarà il professionista`,
  ],
  [
    `Per la nomina del titolare è necessario:`,
    `non è necessario né un atto di nomina né requisiti minimi`,
  ],
  [
    `Il principio di accountability:`,
    `impone al titolare di garantire ed essere in grado di dimostrare che il trattamento è conforme al GDPR, con misure adeguate`,
  ],
  [
    `Contitolarità del trattamento:`,
    `non implica necessariamente uguali responsabilità`,
  ],
  [
    `C'è contitolarità del trattamento:`,
    `quando ci sono decisioni comuni e/o convergenti`,
  ],
  [
    `Se una delle parti non ha accesso ai dati trattati:`,
    `non è detto che non ci sia contitolarità`,
  ],
  [
    `Nel caso \"Fashion-ID\", per il trattamento dei dati dei visitatori del sito da parte di Facebook:`,
    `titolare è Facebook`,
  ],
  [
    `Nel caso \"Fashion-ID\", per il trattamento dei dati dei visitatori per le operazioni di raccolta e trasferimento degli stessi da Fashion ID a Facebook:`,
    `c'è contitolarità`,
  ],
  [
    `Il responsabile esterno:`,
    `affianca il titolare nelle operazioni di trattamento`,
  ],
  [`Il responsabile:`, `può essere sia persona fisica che giuridica`],
  [`L'atto di nomina del responsabile:`, `È un contratto`],
  [`La nomina del responsabile esterno è:`, `facoltativa`],
  [`Il titolare:`, `può verificare periodicamente l'attività del responsabile`],
  [`Le istruzioni date dal titolare:`, `sono vincolanti per il responsabile`],
  [`Il responsabile ha l'obbligo di:`, `tenere un registro del trattamento`],
  [
    `La durata del trattamento:`,
    `deve essere indicata nel contratto di nomina del responsabile`,
  ],
  [
    `La nomina del sub-responsabile:`,
    `È una facoltà del responsabile, se lo prevede il contratto con il titolare`,
  ],
  [
    `L'obbligo di istruzione ex art 29 GDPR:`,
    `È previsto nei confronti dell'incaricato`,
  ],
  [
    `Il RPD è definito come:`,
    `il soggetto incaricato di affiancare il Titolare e il responsabile del trattamento`,
  ],
  [
    `Il RPD può essere:`,
    `esterno con contratto di servizi o dipendente del Titolare`,
  ],
  [
    `Per esercitare il ruolo di RPD un professionista:`,
    `non deve avere  titoli di studio specifici o essere iscritto ad albi professionali particolari`,
  ],
  [
    `La nomina a RPD non è obbligatoria:`,
    `per attività che consistono prevalentemente in trattamento dati all'estero`,
  ],
  [
    `La nomina a RPD volontaria:`,
    `È libera a patto che siano rispettati i requisiti e le condizioni previsti dal GDPR`,
  ],
  [
    `La comunicazione della nomina del RPD:`,
    `Può essere fatta solo con procedura telematica sul sito del Garante`,
  ],
  [
    `Il RPD deve essere coinvolto:`,
    `tempestivamente e adeguatamente in tutte le questioni riguardanti la protezione dei dati personali`,
  ],
  [
    `Il parere del RPD:`,
    `deve ricevere la dovuta considerazione e, se disatteso, è buona prassi documentare la motivazione di una condotta difforme`,
  ],
  [
    `La condizione di indipendenza del RPD:`,
    `deve essere sempre garantita anche nel caso in cui il RPD sia un dipendente`,
  ],
  [
    `Quale di questi non è un compito del RPD:`,
    `la decisione di chi possa essere nominato nominato o meno come autorizzato del trattamento`,
  ],
  [`Il \"data breach\":`, `È una violazione di sicurezza`],
  [`L'accesso ai dati è un data breach:`, `se non autorizzato`],
  [
    `L'obbligo di notifica della violazione:`,
    `È simile a quanto era già previsto dal Codice Privacy`,
  ],
  [
    `Tipologie di violazioni sono:`,
    `violazione di riservatezza, integrità e disponibilità`,
  ],
  [
    `La gravità della lesione:`,
    `può avere diversa intensità per i diritti e le libertà dei vari interessati`,
  ],
  [
    `Vanno notificate:`,
    `le violazioni che possono avere effetti avversi sugli individui`,
  ],
  [
    `Se la violazione avviene nell'organizzazione del responsabile:`,
    `il responsabile notifica al titolare`,
  ],
  [
    `Se la violazione avviene in una Pubblica Amministrazione:`,
    `la notifica va fatta entro 48 ore o 24 ore se la violazione riguarda dati biometrici`,
  ],
  [
    `Se la comunicazione all'interessato richiederebbe sforzi sproporzionati:`,
    `la comunicazione può essere pubblica`,
  ],
  [
    `Nella notifica all'interessato:`,
    `deve essere descritta la natura della violazione`,
  ],
  [
    `Nell'elaborare un codice di condotta dovrebbero essere consultate:`,
    `le parti interessate pertinenti`,
  ],
  [
    `Chi viene incoraggiato ad elaborare e proporre codici di condotta:`,
    `le associazioni o altre organizzazioni rappresentanti le categorie di titolare`,
  ],
  [
    `Quale delle seguenti non è una precisazione contentuta nei codici di condotta:`,
    `modalità di erogazione delle sanzioni`,
  ],
  [
    `Quale delle seguenti è una precisazione contenuta nei codici di condotta:`,
    `le modalità di esercizio dei diritti degli interessati`,
  ],
  [`L'adesione ai codici di condotta è:`, `sempre volontaria`],
  [
    `A cosa non serve un codice di condotta:`,
    `evititare qualsiasi sanzione da parte del Garante`,
  ],
  [
    `Il codice di condotta aumenta la fiducia dell'interessato perchè:`,
    `fonisce garanzie,criteri,misure di sicurezza tecniche e organizzative e indicazioni relative ai diritti dell'interessato`,
  ],
  [
    `Quale di questi non  un requisito di ammissibilità di una bozza di codice da parte dell'autorità di controllo:`,
    `individuazione del meccanismo di erogazione delle sanzioni`,
  ],
  [
    `Un codice di condotta viene approvato quando:`,
    `presenta tutti gli elementi di ammissibilità e supera positivamente l'analisi del proprio contenuto da parte dell'Autorità competente`,
  ],
  [
    `L'ultima fase della procedura di approvazione è:`,
    `pubblicazione del codice`,
  ],
  [
    `I trasferimenti internazionali di dati ai sensi degli artt. 44 e seguenti GDPR sono:`,
    `qualsiasi trasmissione effettuata da un Titolare del trattamento stabilito nel territorio dell'Unione ad un altro Titolare o Responsabile del trattamento stabilito in un Paese Terzo`,
  ],
  [`Il cloud computing:`, `può comportare un trasferimento di dati extra-UE`],
  [
    `La ratio legis di queste norme è:`,
    `assicurarsi che il livello di protezione delle persone fisiche garantito dal GDPR non sia pregiudicato`,
  ],
  [`La decisione di adeguatezza:`, `viene presa dalla Commissione europea`],
  [
    `La Commissione non tiene conto:`,
    `della situazione economica del Paese terzo`,
  ],
  [
    `E' una garanzia che non necessita di autorizzazioni specifiche:`,
    `strumenti giuridici vincolanti e aventi efficacia esecutiva tra le autorità pubbliche`,
  ],
  [
    `E' una garanzia che necessita di autorizzazioni specifiche:`,
    `norme vincolanti d'impresa`,
  ],
  [
    `L'informativa deve contenere:`,
    `l'informazione circa il trasferimento al Paese terzo`,
  ],
  [
    `In caso di esercizio del diritto di accesso:`,
    `il titolare deve comunicare al richiedente quali dati sono stati oggetto di trasferimento`,
  ],
  [
    `Nel registro dei trattamenti, per ciascun trattamento dovranno essere indicati:`,
    `i Paesi destinatari del trasferimento`,
  ],
  [
    `Il Safe Harbor:`,
    `È una serie di principi volti a far rispettare la Direttiva 95/46 nel trasferimento dei dati tra UE e USA`,
  ],
  [`Il caso Schrems:`, `È stato deciso dalla CGUE`],
  [
    `Criticità del Safe Harbor erano:`,
    `sorveglianza statunitense e mancanza di rimedi legali adeguati per le violazioni privacy`,
  ],
  [`Il Privacy Shield:`, `È un nuovo accordo tra UE e USA`],
  [`Le autorità americane:`, `devono collaborare con i Garanti europei`],
  [
    `L'Amministrazione USA:`,
    `ha garantito che l'accesso delle autorità pubbliche ai dati personali sarà soggetto a limiti, garanzie e meccanismi di controllo`,
  ],
  [`La revisione del Privacy Shield:`, `È annuale`],
  [
    `La CGUE nel caso Schrems II:`,
    `ha stabilito che il GDPR si applica ai trasferimenti di dati tra operatori economici stabiliti uno nell'Unione e uno in un Paese terzo anche se questi dati, nel momento del trasferimento o in seguito, potrebbero essere trattati dalle autorità del Paese terzo per fini di difesa o pubblica sicurezza.`,
  ],
  [`La Decisione 2010/87:`, `resta valida`],
  [`La Decisione 2016/1250:`, `È stata invalidata`],
  [`Il periodo transitorio:`, `va dal 31 gennaio 2020 al 31 dicembre 2020`],
  [`Durante il periodo transitorio:`, `si applica il GDPR`],
  [`Dopo la Brexit:`, `il Regno Unito diventa un Paese extra-UE`],
  [`L'\"UK GDPR\":`, `entra in vigore il 31 dicembre 2020`],
  [`I trasferimenti di dati da Regno Unito a UE:`, `sono consentiti`],
  [
    `I trasferimenti di dati da UE a Regno Unito:`,
    `sono soggetti a limitazioni disciplinate dal GDPR`,
  ],
  [`Il Data Protection Act 2018:`, `implementa il GDPR nel Regno Unito`],
  [`Il Data Protection Act 2018 è:`, `una legge nazionale`],
  [
    `L'emanazione di una decisione di adeguatezza del Regno Unito da parte della Commissione:`,
    `È in dubbio dopo la sentenza della CGUE sul caso Schrems II`,
  ],
  [
    `Il CLOUD Act Agreement:`,
    `È un accordo tra Regno Unito e USA che potrebbe compromettere il livello di protezione dei dati`,
  ],
  [
    `Il GDPR:`,
    `Prevede un principio generale di responsabilità del titolare del trattamento`,
  ],
  [
    `Il GDPR disciplina i profili di responsabilità dei soggetti all'art.:`,
    `82`,
  ],
  [
    `Il danno risarcibile derivante dalla lesione dei diritti e delle libertà per effetto di un trattamento illecito di dati personali:`,
    `E' sia patrimoniale che non patrimoniale`,
  ],
  [
    `Il responsabile del trattamento:`,
    `Risponde del danno cagionato dal suo trattamento solo nel caso in cui disattenda gli obblighi normativi e le istruzioni del titolare`,
  ],
  [
    `Titolare e Resposabile rispondono a titolo di responsabilità solidale se:`,
    `Sono coinvolti nel medesimo trattamento e entrambi responsabili del danno`,
  ],
  [
    `IL GDPR:`,
    `Non contempla una responsabilità diretta del DPO nei confronti degli interessati`,
  ],
  [
    `In nel caso in cui il DPO contravvenga ai suoi compiti:`,
    `Risponde contrattualmente innanzi al Titolare`,
  ],
  [
    `L'incaricato del trattamento:`,
    `Non risponde direttamente nei confronti degli interessati`,
  ],
  [
    `Al soggetto designato del trattamento:`,
    `Possono essere delegate funzioni ma non responsabilità ai sensi dell'art. 28 GDPR`,
  ],
  [
    `Nel caso in cui il comportamento negligente di un incaricato abbia comportato un danno agli interessati, il Titolare:`,
    `Può agire in rivalsa nei confronti dell'incaricato`,
  ],
  [
    `Nell'articolo 83 del GDPR:`,
    `sono previsti due tipi di sanzioni, fino a 10 milioni o 2% del fatturato globale dell'esercizio precedente o fino a 20 milioni o 4 % del fatturato globale dell'esercizio precedente`,
  ],
  [
    `La violazione degli obblighi che spettano all'organismo di certificazione:`,
    `viene sanzionata fino a 10 milioni o 2 % del fatturato globale dell'esercizio precedente`,
  ],
  [
    `La violazione dei diritti degli interessati:`,
    `può portare a una sanzione fino a 20 milioni o 4 % del fatturato globale dell'esercizio precedente`,
  ],
  [
    `L'articolo 166 del Codice Privacy:`,
    `È stato novellato per armonizzare la normativa con l'art 83 GDPR`,
  ],
  [
    `Entro 30 giorni dalla contestazione:`,
    `il trasgressore può inviare scritti difensivi`,
  ],
  [
    `Le sanzioni:`,
    `sono determinate secondo principi generali e criteri previsti dall'articolo 83 GDPR`,
  ],
  [`La durata della violazione:`, `incide sulla determinazione della sanzione`],
  [
    `Il carattere doloso o colposo della violazione:`,
    `può essere preso in considerazione dall'Autorità`,
  ],
  [
    `Gli Stati membri:`,
    `possono introdurre nuove sanzioni rispetto a quelle previste dal GDPR`,
  ],
  [
    `L'articolo 171 del Nuovo Codice Privacy:`,
    `introduce una sanzione per la violazione delle disposizioni sul controllo a distanza dei lavoratori`,
  ],
  [
    `In Germania una delle prime sanzioni del Garante privacy riguardava:`,
    `un data breach`,
  ],
  [
    `La prima sanzione del CNIL a Google riguardava:`,
    `mancanza di trasparenza nell'informativa`,
  ],
  [
    `Il garante belga ha stabilito:`,
    `che se si nomina come DPO il direttore del dipartimento di compliance, risk management e internal audit c'è conflitto d'interessi`,
  ],
  [
    `Il consenso prestato da un utente per l'accesso ai dati della sua rubrica:`,
    `non può essere utilizzato per trattare i dati dei soggetti presenti nella rubrica`,
  ],
  [
    `Essere formalmente in regola con i requisiti del GDPR:`,
    `senza una effettiva implementazione dei sistemi di sicurezza non protegge dalle sanzioni`,
  ],
  [`ENI Gas e Luce è stata sanzionata:`, `per telemarketing senza consenso`],
  [`TIM è stata sanzionata:`, `per violazione del principio di accountability`],
  [
    `Il telemarketing aggressivo di Vodafone implicava:`,
    `violazioni relative al consenso degli interessati`,
  ],
  [
    `Google e Amazon sono state multate:`,
    `per violazione della normativa sull'informativa sui cookie`,
  ],
  [
    `La mancata notifica del data breach:`,
    `comporta violazione dell'articolo 33.1 GDPR`,
  ],
  [
    `La tipologia di rischio rilevante ai fini privacy è un rischio che riguarda:`,
    `Il rischio per i diritti e le libertà degli interessati`,
  ],
  [
    `Quali tra questi NON è un possibile scenario di rischio rilevante ai fini privacy:`,
    `Antivirus scaduto`,
  ],
  [
    `Quale è il primo \"step\" da condurre nella analisi dei rischi:`,
    `Individuazione delle minacce`,
  ],
  [`Il rischio si calcola:`, `Gravità x Probabilità`],
  [`La DPIA è disciplinata:`, `All'art. 35 GDPR`],
  [
    `La DPIA deve essere effettuata:`,
    `Quando il trattamento presenta un rischio elevato`,
  ],
  [
    `In capo a quale soggetto è riferito l'obbligo di effettuare una DPIA:`,
    `Il Titolare del trattamento`,
  ],
  [
    `Quale di questi non è uno dei trattamenti elencati nel provvedimento del Garante dell'11 ottobre 2018 per i quali sussiste l'obbligo di procedere a valutazione di impatto:`,
    `Invio di dati tramite comunicazioni elettroniche`,
  ],
  [
    `L'ENISA…:`,
    `E' una agenzia europea che opera in materia di Cybersicurezza`,
  ],
  [
    `Quale di questo non è una area di valutazione del rischio secondo il modello ENISA?:`,
    `Tutele previste dalla legislazione dello stato membro`,
  ],
  [
    `L'European Data Protection Board è:`,
    `un organo europeo indipendente, che contribuisce all'applicazione coerente delle norme sulla protezione dei dati in tutta l'Unione europea e promuove la cooperazione tra le autorità competenti per la protezione dei dati dell'UE`,
  ],
  [
    `Si trovano all'interno dell'EDPB:`,
    `Rappresentanti delle autorità garanti nazionali`,
  ],
  [`L'EDPB ha sede a:`, `Bruxelles`],
  [
    `La Commissione europea:`,
    `può partecipare alle riunioni dell'EDPB senza diritto di voto`,
  ],
  [
    `Non fa parte dei compiti dell'EDPB:`,
    `adottare documenti normativi vincolanti per gli Stati membri`,
  ],
  [
    `L'Autorità di controllo nel GDPR è disciplinata:`,
    `negli articoli 51 e seguenti`,
  ],
  [
    `L'articolo 53 del GDPR stabilisce:`,
    `che l'Autorità di controllo deve essere indipendente`,
  ],
  [
    `Il Garante per la protezione dei dati personali:`,
    `È un'autorità amministrativa indipendente`,
  ],
  [`Il Garante ha un  mandato di:`, `7 anni non rinnovabile`],
  [`Non rientra tra i compiti del Garante:`, `revisionare il GDPR ogni 5 anni`],
  [
    `L'Autorità di controllo capofila è:`,
    `L'Autorità dello Stato dove si trova la sede principale del titolare`,
  ],
  [
    `L'obiettivo del meccanismo dell'Autorità capofila è:`,
    `far sì che le imprese abbiano a che fare con un'unica Autorità di controllo`,
  ],
  [
    `Il meccanismo dell'Autorità di controllo capofila si applica quando:`,
    `il titolare o il responsabile opera in più Stati membri`,
  ],
  [
    `Le Autorità interessate non sono quelle dello Stato dove:`,
    `si trova lo stabilimento principale del titolare`,
  ],
  [
    `Se il titolare ha stabilimenti in più Stati, lo stabilimento principale è:`,
    `il luogo della sua amministrazione centrale nell'UE`,
  ],
  [
    `Se il responsabile ha stabilimenti in più Stati ma non ha l'amministrazione centrale nell'UE, lo stabilimento principale è:`,
    `lo stabilimento del responsabile nell'UE in cui sono condotte le principali attività di trattamento nel contesto delle attività di uno stabilimento del responsabile nella misura in cui tale responsabile è soggetto a obblighi specifici ai sensi del GDPR`,
  ],
  [
    `Il meccanismo di cooperazione è disciplinato:`,
    `dagli articoli 60 e seguenti del GDPR`,
  ],
  [
    `Obiettivo della cooperazione è:`,
    `raggiungere un accordo tra Autorità capofila e Autorità interessate`,
  ],
  [
    `L'assistenza reciproca ex art 61 GDPR comporta:`,
    `che è obbligatoria la la prestazione di assistenza tra Autorità di controllo in tutte le attività connesse al meccanismo dello «sportello unico»`,
  ],
  [
    `Nelle operazioni congiunte tra Autorità di controllo, l'Autorità capofila ha il limite di tempo per coinvolgere le interessate di:`,
    `1 mese`,
  ],
  [
    `La profilazione:`,
    `È qualsiasi forma di trattamento automatizzato di dati personali consistente nell'utilizzo di tali dati personali per valutare determinati aspetti personali relativi a una persona fisica`,
  ],
  [`L'intervento umano nella profilazione:`, `può esserci`],
  [
    `La valutazione della persona:`,
    `È un elemento della profilazione che implica l'individuazione di alcune caratteristiche presenti o future`,
  ],
  [
    `Un processo decisionale automatizzato:`,
    `È la capacità di prendere una decisione impiegando mezzi tecnologici senza coinvolgimento umano, ricorrendo o meno alla profilazione​`,
  ],
  [
    `La multa fatta da un autovelox automaticamente sulla base delle proprie rilevazioni:`,
    `È un processo decisionale automatizzato, senza profilazione`,
  ],
  [
    `Quando avviene un processo decisionale basato unicamente su un trattamento automatizzato:`,
    `servono garanzie supplementari date dall'art 22 GDPR`,
  ],
  [
    `Non può essere una base giuridica per i trattamenti che comportino decisioni basate unicamente su processi automatizzati:`,
    `l'interesse legittimo del titolare`,
  ],
  [
    `Se i trattamenti comportano l'utilizzo di nuove tecnologie:`,
    `deve essere fatta una DPIA`,
  ],
  [`Il software compass:`, `serve per operazioni di giustizia predittiva`],
  [
    `Non è un esempio di trattamento di dati con utilizzo di nuove tecnologie:`,
    `l'indicizzazione dei siti web`,
  ],
  [
    `Per identità personale si intende:`,
    `l'insieme di tutti gli aspetti in grado di descrivere l'identità anche \"virtuale\" di una persona`,
  ],
  [
    `I \"dati personali\" sono:`,
    `tutte le informazioni che assumono rilevanza per la individuazione dell'identità dell'individuo, anche in rete`,
  ],
  [
    `Il trattamento dei dati personali:`,
    `È consentito solo per il tempo strettamente necessario e secondo modalità prestabilite`,
  ],
  [
    `La cd. privacy post-mortem:`,
    `È il diritto del soggetto a controllare cosa sarà della propria reputazione e delle memorie dopo la morte`,
  ],
  [
    `Il Codice privacy:`,
    `prevede che i diritti relativi a persone decedute siano esercitati da chi abbia un interesse proprio, o agisca a tutela dell'interessato`,
  ],
  [
    `L'art. 2-terdecies:`,
    `È espressamente dedicato ai diritti delle persone decedute`,
  ],
  [
    `Gli eredi del defunto:`,
    `non possono gestire, amministrare e consultare tutti i dati del de cuius`,
  ],
  [
    `La dichiarazione dell'interessato ex art. 2-terdecies:`,
    `È una manifestazione di ultima volontà a contenuto non patrimoniale`,
  ],
  [
    `Il profilo meramente commemorativo su facebook:`,
    `consente a parenti ed amici di condividere in esso ricordi`,
  ],
  [
    `Il cd. contatto erede:`,
    `può gestire l'account reso commemorativo, ma non può accedere ad esso, né ai relativi contenuti`,
  ],
  [
    `L'OMPI è:`,
    `Una organizzazione nata sotto l'egida delle Nazioni Unite, allo scopo di promuovere la conclusione dei trattati in materia di Intellectual Property, nonché responsabile della gestione del registro internazionale de brevetti`,
  ],
  [
    `Le norme del Codice Civile in materia di diritto industriale e diritto d'autore sono contenute:`,
    `Nel Libro V`,
  ],
  [
    `Per \"lucro cessante\" deve intendersi:`,
    `una \"componente\" del danno patrimoniale`,
  ],
  [
    `Secondo un recente orientamento della Cassazione:`,
    `Il diritto d'autore si atteggerebbe alla stregua di diritto della persona di rilevanza costituzionale, tale che la sua violazione debba sempre dare luogo a risarcimento del danno non patrimoniale`,
  ],
  [
    `I beni immateriali possono considerarsi:`,
    `Non rivali nell'uso e non escludibili nel consumo`,
  ],
  [
    `Il D.lgs  n. 30 del 2005 (Codice della Proprietà industriale), regola:`,
    `Le norme attinenti il campo dei brevetti e dei marchi`,
  ],
  [
    `Per \"proprieta intellettuale\" si intende:`,
    `L'insieme delle regole giuridiche tese a tutelare i frutti dell'inventiva, dell'ingegno , dell'intelligenza e della creatività umana`,
  ],
  [
    `Per copy-riot si intende:`,
    `La rivolta contro il diritto d'autore, per lo più all'insegna dello sloga \"internet libero\"`,
  ],
  [
    `Per \"avviamento\" può intendersi:`,
    `L'insieme di fattori immateriali idonei a garantire, per l'azienda, un valore nominale maggiore del valore intrinseco`,
  ],
  [
    `Le controversie in materia di proprietà intellettuale:`,
    `Sono decise dalle sezioni specializzate per l'impresa`,
  ],
  [
    `I requisiti minimi neccessari affinchè l'idea possa godere di tutela autorale sono:`,
    `Creatività, soggettività espressivia e novità`,
  ],
  [
    `I \"legal Hybrids\" sono:`,
    `Opere dell'ingegno che, oltre ad essre tutelate dal cpi, presentano anche il valore artistico e carattere creativo`,
  ],
  [
    `Nell'ambito del diritto di autore la tutela nasce:`,
    `Automaticamente, dal momento di creazione ell'opera`,
  ],
  [
    `Uno dei requisiti  per la brevettabilità di un trovato è:`,
    `necessario, come ad eempio l'applicazione industriale del trovato`,
  ],
  [
    `La durata della tutela del diritto d'autore in via generale:`,
    `Si protrae per 70 anni dal momento della morte dell'autore dell'opera`,
  ],
  [
    `Il deposito delle opere autorali presso la \"Società Italiana autori ed Editori\":`,
    `Ha funzione di mera pubblicità dichiarativa`,
  ],
  [
    `La tutela relativa al diritto d'autore viene concessa:`,
    `Ad ogni opera che possegga un minimo di creatività`,
  ],
  [
    `L'industrial design comprende:`,
    `Opere che consistono nella progettazione della forma  di prodotti industriali, destinate a soddisfare bisogni pratici gia conosciute nel settore`,
  ],
  [
    `Testi, immagini e dati di un sito web aziendale:`,
    `Possono essere tutelati dal diritto d'autore`,
  ],
  [`La legge in vigore sul diritto d'autore risale al:`, `1865`],
  [
    `Il collegamento ipertestuale, per poter imporre la \"comunicazione al pubblico\" deve:`,
    `Essere rivolto ad una platea di utenti non presa in considerazione dal titolare del diritto d'autore al momento al momento della autorizzazione`,
  ],
  [
    `Il provider che dovesse riscontrare la sussistenza di un illecito è tenuto a:`,
    `Darne pronta comunicazione alla autorità giudiziaria`,
  ],
  [
    `La prima affermazione, da parte dei giudici europei, dell'idea che gli Stati membri, nella trasposizione delle direttive in materia di diritti di proprietà intellettuale debbano interpretare le stesse garantendo il giusto equilibrio dei diritti fondamentali coinvolti, si trova:`,
    `Nella Sent.Promusicae`,
  ],
  [
    `La proposta di legge A.C. 2520 del  7 luglio 2016:`,
    `Riguarda disposizioni in materia di fornitura di servizi della rete internet`,
  ],
  [
    `Gli ISP si dividono in:`,
    `Access provider, service provider e content provider`,
  ],
  [
    `Affinchè un collegamento ipertestuale possa costituire \"nuova comunicazione\" è necessario:`,
    `Lo scopo di lucro di chi apponga il collocamento e la consapevolezza della illegittimità`,
  ],
  [
    `Il diritto d'autore in internet trova tutela anche:`,
    `Nel d.lgs. N. 68 del 29.04.2003`,
  ],
  [
    `I link contenenti contenuti coperti da copyright:`,
    `Non sempre richiedono la preventiva autorizzazione del titolare del diritto`,
  ],
  [`L'8 marzo 2016:`, `E' stato deciso il caso GS Media`],
  [`Per \"mere conduit\" deve intendersi:`, `L'attività di trasmissione`],
  [
    `Tramite il caso del cartone animato \"Kilari\":`,
    `si conferma la doppia dimesione patrimoniale e non dei diritti della personalità`,
  ],
  [
    `Il linking non autorizzato:`,
    `rappresenta una forma di comunicazione al pubblico che necessita della preventiva autorizzazione del titolare dei diritti`,
  ],
  [
    `Il c.d. Hyperlink:`,
    `integra un atto di comunicazione al pubblico di opera verso un pubblico nuovo perché diverso da quello in origine autorizzato`,
  ],
  [
    `Nel caso \"Stiching Brein\":`,
    `la CGUE ha affermato che la comunicazione al pubblico comprende la messa a disposizione e la gestione di una piattaforma di condivisione che consente la localizzazione delle opere e la loro condivisione`,
  ],
  [
    `La responsabilità del Social Network Facebook:`,
    `È stata riconosciuta per aver concorso con condotta omissiva alle violazioni poste in essere dagli utenti`,
  ],
  [
    `L'hosting passivo:`,
    `È il prestatore di servizi di informazione che si occupadella memorizzazione delle informazioni fornite da un destinario delle stesse`,
  ],
  [
    `Il criterio del \"notice and take down\":`,
    `indica  che l'inerzia protratta in modo ingiustificato è sempre fonte di responsabilità`,
  ],
  [
    `L'art. 13, Dir. 2004/48:`,
    `Prevede per la quantificazione del danno il criterio legato alle conseguenze economiche negative o una somma forfettaria qualora fosse stata richiesta l'autorizzazione all'uso`,
  ],
  [
    `Il creiterio del prezzo del consenso:`,
    `Potrebbe comportare una sorta di \"licenza obbligatoria\" ex post`,
  ],
  [
    `La giurisprudenza sul danno non patrimoniale:`,
    `lo riconosce in re ipsa sulla componente morale del danno`,
  ],
  [
    `Le due sentenze del Trib. Di Milano sul Film \"Tolo Tolo\" di Zalone:`,
    `sono importanti perché rappresentano la terza applicazione della c.d. dynamic injunction`,
  ],
  [
    `Con le due sentenze del Trib. Di Milano sul Film \"Tolo Tolo\" di Zalone:`,
    `il Trib. Di Milano ha ordinato ai fornitori dei servizi di connettività di inibire l'accesso ai nomi di dominio anche in caso di second top level`,
  ],
  [
    `Nel caso \"Allostreaming\":`,
    `la Corte di Cassazione francesce ha sostenuto che possono essere posti in capo agli intermediari i costi per le misure necessarie a evitare future violazioni`,
  ],
  [
    `Nel cao che ha riguardato la Mondadori:`,
    `il Trib. di Milano aveva imposto agli ISP di impostare misure tecniche volte a limitare l'accesso al portale e ai siti \"alias\" dello stesso`,
  ],
  [
    `Le misure tecniche imposte agli ISP nel caso Mondadori:`,
    `sono state imposte anche nel ricorso avviato dalla Lega N. Professionisti Serie A`,
  ],
  [
    `La Commissione UE:`,
    `nelle linee guida sulla Dir. UE 2004/48 ha stabilito che il giudice può emettere provvedimenti volti a evitare che cotenuti illeciti su Internet siano fuiti anche con modalità diverse da quelle attivate in giudizio`,
  ],
  [
    `L'oggetto del contratto:`,
    `rappresenta il bene o il diritto su cui cade il contratto`,
  ],
  [
    `Gli intermediari sono civilmente responsabili:`,
    `In caso dell'inosservazia degli obblighi imposti dalle  direttive europee, dal D. Lgs. 70/2003 e dalle modifiche che le norme europee hanno apportato alla LDA e al CPI`,
  ],
  [
    `Da un certo punto di vista:`,
    `il riconoscimento della responsabilità degli ISP scarichi su di essi il rischio per le condotte di \"autore ignoto\"`,
  ],
  [
    `In sede penale:`,
    `l'Autorità Giudiziaria può richiedere al provider i file di log attraverso cui si idetificano il punto e l'orario di connessione`,
  ],
  [
    `Per Social Network deve intendersi:`,
    `un servizio offerto mediante Internet, generalmente fruibile in maniera gratuita tramite il Web o apposite App per dispositivi mobili, il cui scopo è quello di facilitare la gestione dei rapporti sociali consentendo una comunicazione e condivisione di contenuti in modo semplice e veloce`,
  ],
  [`La normativa dei Social Network:`, `È stabilita dal D. Lgs n. 70/2003`],
  [
    `Attraverso la c.d. profilalazione:`,
    `il Social Network filtra informazioni e propone pubblicità o contenuti che risultano maggiormente affini al profilo utente`,
  ],
  [
    `I soggetti coinvolti nelle piattaforme Social sono:`,
    `l'host provider, l'utente, l'utente non registrato e eventualmente il titolare di servizi proposti tramite la piattaforma`,
  ],
  [
    `Il D.Lgs. N. 70/2003:`,
    `quando è stato emanato voleva favorire la posizione dell'ISP affinchè non subisse conseguenze sui contenuti caricati dagli utenti`,
  ],
  [
    `Tramite la pubblicazione di notizie o affermazioni lesive su Facebook:`,
    `può essere integrato il reato di diffamazione aggravata`,
  ],
  [
    `La giurisprudenza sui c.d. Admin di pagine social:`,
    `ha affermato che questi possono essere ritenuti responsabili penalmente per adesione al post diffamatorio`,
  ],
  [
    `Cambridge Analytica:`,
    `È una società specializzata nel \"microtargeting comportamentale\"`,
  ],
  [
    `\"Thisisyourdigillife\":`,
    `È la App che tramite il Facebook Login accedeva anche a dati degli \"amici\" degli utenti senza consenso`,
  ],
  [
    `Il Garante Privacy per il caso Cambridge Analitics:`,
    `ha accertato la violazione degli artt. 13 e 23 Cod. Privacy applicando una sanzione di 1 milione di Euro a Facebook`,
  ],
  [`Il consenso:`, `E' sempre revocabile`],
  [
    `La dematerialità del contesto dei social network:`,
    `Non esclude la offensività di una condatta con la quale si pubbicano immagini altrui senza il consenso`,
  ],
  [
    `Ai sensi dell'art. 97 l. aut.:`,
    `Il consenso della persona ritratta non occorre quando la riproduzione dell'immagine è giustificata da scopi scientifici`,
  ],
  [
    `Il consenso:`,
    `E' condizione di legittimità del trattamento e deve essere prestato in modo chiaro ed inequivocabile`,
  ],
  [
    `Il titolare del trattamento:`,
    `E' responsabile dei danni per il fatto stesso di aver dato luogo al trattamento, indipendentemente da chi lo abbia materialmente posto in essere`,
  ],
  [
    `Il principio dell'accountability:`,
    `Si fonda sulla responsabilizzazione del titolare/responsabile del trattamento`,
  ],
  [
    `Il criterio dell'età:`,
    `Non è sempre dirimente per riconoscere l'idoneità del soggetto a compiere validamente scelte inerenti la propria esistenza`,
  ],
  [
    `Il consenso al trattamento dei dati personali del minore:`,
    `E' lecito a partire dal compimento del sedicesimo anno d'età`,
  ],
  [
    `L'art. 614 bis c.p.c.:`,
    `Configura una misura coercitiva indiretta accessoria ad un provvedimento di condanna, adattabile anche ai contesti esofamiliari`,
  ],
  [
    `Il titolare o responsabile del trattamento:`,
    `Possono esonerarsi da responsabilità dimostrando il verificarsi di un caso fortuito o di forza maggiore`,
  ],
];
console.log(
  all.replace(/\["/g, "[`").replace(/","/g, "`,`").replace(/\"]/g, "`]")
);
