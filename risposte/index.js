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
    "Il principio attivo di un farmaco è:",
    "la molecola responsabile dell'effetto biologico",
  ],
  ["Gli eccipienti:", "sono sostanze prive di attività farmacologica"],
  [
    "La tossicologia studia:",
    "gli effetti dannosi delle sostanze biologicamente attive",
  ],
  ["I farmaci di origine naturale:", "derivano da molecole presenti in natura"],
  ["I farmaci di natura biologica:", "sono macromolecole"],
  ["Sperimentazione CLINICA di fase uno:", "è condotto su volontari sani"],
  [
    "Sperimentazione CLINICA di fase due:",
    "prevede l'arruolamento di  100-300 pazienti",
  ],
  [
    "Sperimentazione CLINICA di fase tre:",
    "prevede l'arruolamento di  1000-3000 pazienti",
  ],
  ["Sperimentazione CLINICA di fase quattro:", "non è obbligatoria"],
  ["La maggior parte dei farmaci ha come principale bersaglio:", "gli enzimi"],
  [
    "Con il concetto di profarmaco si intende:",
    "un farmaco assunto nella sua forma inattiva",
  ],
  [
    "Indica quale tra le seguenti risposte è quella corretta:",
    "maggiore è l'affinità del farmaco per il recettore, maggiore è la probabilità della formazione del complesso F-R e dell induzione della  risposta",
  ],
  [
    "L'EC50:",
    "è la concentrazione capace di indurre una risposta che corrisponde al 50% della massima risposta ottenibile",
  ],
  [
    "Per un farmaco che agisce secondo un meccanismo specifico sono vere le seguenti affermazioni tranne:",
    "a differenza dei farmaci aspecifici l'azione promossa dal farmaco è specifica per un solo evento biologico.",
  ],
  [
    "In una curva dose-risposta quando si raggiunge il plateau:",
    "significa che si raggiunge un'efficacia massima",
  ],
  [
    "Per farmacocinetica si intende:",
    "lo studio dei processi di assorbimento, eliminazione, distribuzione e metabolismo di un farmaco",
  ],
  [
    "I farmaci che superano le varie barriere cellulari attraverso meccanismi di diffusione passiva:",
    "sono caratterizzati da una componente sia idrofila che lipofila",
  ],
  [
    "I farmaci somministrati per via intramuscolare:",
    "sono caratterizzati da un rapido assorbimento",
  ],
  [
    "il pH gastico:",
    "può influenzare l'assobimento di un farmaco; se diminuisce può favorire l'assobimento degli acedi deboli; se aumenta può favorire l'assorbimento delle basi deboli",
  ],
  [
    "Il coefficiente di ripartizione (fase oleosa/fase acquosa):",
    "se alto, indica una molecola lipofila",
  ],
  [
    "Qual è il principale organo coinvolto nel metabolismo dei farmaci?",
    "Fegato",
  ],
  [
    "Quali delle seguenti affermazioni sul CYP450  è sbagliata:",
    "gli enzimi di questo complesso sono responsabili del metabolismo del 5-7% dei farmaci",
  ],
  [
    "La concentrazione plasmatica di un farmaco è :",
    "in equilibrio cinetico con la sua concentrazione nei tessuti",
  ],
  [
    "Il processo di distribuzione di un farmaco dipende:",
    "dal pH; dal grado di lipofilia; dal grado di vascolarizzazione",
  ],
  [
    "La barriera emato-encefalica:",
    "è una membrana che limita la distribuzione dei farmaci nel cervello",
  ],
  [
    "Qual è il principale organo coinvolto nel metabolismo dei farmaci?",
    "Fegato",
  ],
  [
    "Gli effetti tossici e gli effetti terapeutici:",
    "possono manifestarsi alla stessa concentrazione",
  ],
  [
    "Il rapporto rischio/beneficio",
    "si valuta in base all' effetto biologico di ogni sinfgolo farmaco",
  ],
  [
    "Con il termine Idiosincrasia si intende:",
    "una risposta insolita, non riscontrabili nella maggior parte dei pazienti",
  ],
  [
    "Assumere due o più farmaci contemporaneamente:",
    "è presente più di una risposta corretta",
  ],
  [
    "Gli alimenti possono:",
    "aumentare la biodisponibilità dei farmaci, ridurre la biodisponibilità dei farmaci, ritardare  la biodisponibilità dei farmaci",
  ],
  [
    "Gli alimenti possono:",
    "influenzare l'entità della risposta farmacologica di un medicinale",
  ],
  [
    "Generalmente gli alimenti tendono a:  ridurre la velocità di svuotamento gastrico:",
    "ridurre la velocità di svuotamento gastrico",
  ],
  [
    "Un aumento delle secrezioni biliari:",
    "favorisce l'assorbimento di farmaci lipofili",
  ],
  [
    "Alimenti induttori del CYP450:",
    "possono ridurre l'efficacia di un farmaco",
  ],
  [
    "Le sostanze dopanti:",
    "promuovono un miglioramento delle prestazioni fisiche",
  ],
  ["CIO:", "è l'acronimo di una organizzazione non governativa"],
  [
    "WADA:",
    "pubblica la lista delle sostanze e dei metodi proibiti nello sport ogni anno",
  ],
  [
    "La sezione due della lista WADA include:",
    "l'elenco dei principi attivi proibiti",
  ],
  ["Tra le sostanze proibite sempre rientrano:", "beta 2 agonisti"],
  ["L'anfetamina:", "riduce la stanchezza"],
  ["Efedrina:", "è un simpaticomimetico"],
  ["Destrometorfano:", "è un analogo della morfina"],
  ["La morfina:", "è un antidolorifico"],
  ["Gli estrogeni", "sono ormoni"],
  [
    "La Manipolazione chimica/fisica di un campione biologico:",
    "è presente più di una risposta corretta",
  ],
  ["Doping genetico si intende:", "una manipolazione di specifici geni"],
  ["Doping ematico si intende:", "le trasfusioni di sangue"],
  ["Eritropoietina ricombinante:", "aumentare la massa eritrocitaria"],
  ["La camera ipobarica:", "aumenta i livelli dei globuli rossi"],
  ["Il sistema nervoso:", "comprende il sistema nervoso periferico e centrale"],
  ["Il sistema nervoso:", "si divide in centrale e periferico"],
  ["Il soma:", "è il corpo cellulare del neurone"],
  ["I neuroni:", "sono composte da soma assone e dendridi"],
  [
    "I neurotrasmettitori sono:",
    "molecole che si legano a specifici recettori",
  ],
  ["Gli agonisti colinergici", "promuovono un'azione parasimpatica"],
  ["Gli antagonisti colinergici", "promuovono un'azione simpaticomimetica"],
  ["La Scopolamina:", "è un farmaco simpaticomimetico"],
  ["I farmaci simpaticomimetici", "aumentano le secrezioni gastriche"],
  [
    "i recettori del sistema colinergico:",
    "sono suddivisi in muscarinici e nicotinici",
  ],
  ["I recettori beta 1 :", "sono espressi principalmente sul cuore"],
  ["I recettori beta 2 :", "sono espressi principalmente sui polmoni"],
  [
    "I recettori alfa 1:",
    "sono espressi principalmente  sulle terminazioni postsinaptiche dei neuroni",
  ],
  [
    "ll re-uptake del neurotrasmettitore:",
    "promuove il passaggio del neurotrasmettitore dalla fessura sinaptica al terminale presinaptico",
  ],
  ["I recettori alfa:", "si legano ai neurotrasmettitori adrenergici"],
  ["La cocaina:", "è considerata un simpatico mimetico indiretto"],
  [
    "Con il termine tolleranza si intende:",
    "la necessità di aumentare le dosi per ottenere lo stesso effetto farmacologico",
  ],
  [
    "Con il termine di dipendenza  si intende:",
    "quando una sostanza acquista prioritàla nella scala dei bisogni personali",
  ],
  [
    "Con il termine setting si intende:",
    "la situazione ambientale e sociale in cui viene assunta una sostanza psicoattiva",
  ],
  [
    "Con il termine set si intende:",
    "lo stato fisico del soggetto nel momento in cui assume una sostanza psicoattiva",
  ],
  ["Le benzodiazepine a quale classe di farmaci appartengono:", "ansiolitici"],
  [
    "Le benzodiazepine e i barbiturici:",
    "sono farmaci che agiscono potenziando entrambi la trasmissione GABAergica, ma hanno un profilo di sicurezza differente",
  ],
  [
    "Le benzodiazepine sono farmaci:",
    "di natura lipofila e quindi capaci di attraversare la barriera emato-encefalica",
  ],
  [
    "Benzodiazepine e barbiturici:",
    "sono farmaci che agevolano il passaggio intracellulare del cloro",
  ],
  [
    "L'assunzione di alcol insieme ai barbiturici:",
    "può potenziare l'effetto sedativo",
  ],
  [
    "Quale farmaco viene comunemente utilizzato per trattare l'ipertensione:",
    "simpaticolitici",
  ],
  [
    "I farmaci  che promuovono un aumento delle resistenze periferiche:",
    "aumentano la pressione",
  ],
  [
    "Il sistema renina-angiotensina-aldosterone:",
    "se stimolato, induce un aumento di pressione",
  ],
  ["L'aldosterone:", "nessuna risposta è corretta"],
  [
    "Farmaci e nutraceutici inibitori della renina:",
    "hanno un'azione anti-ipertensiva",
  ],
  [
    "I farmaci che agiscono come antagonisti del recettore per l'angiotensina:",
    "rientrano in questa classe i sartani",
  ],
  [
    "Le molecole ad azione inotropa positiva:",
    "inducono un aumento della contrazione cardiaca",
  ],
  [
    'I "vasodilatatori diretti" sono farmaci:',
    "riducono le resistenze periferiche",
  ],
  [
    "Qual è l'effetto principale dei beta-bloccanti nel trattamento dell'insufficienza cardiaca:",
    "riduzione della frequenza cardiaca",
  ],
  [
    "Quali sono alcune delle principali classi di farmaci utilizzati nel trattamento dell'insufficienza cardiaca cronica:",
    "inibitori dell'enzima di conversione dell'angiotensina (ACE)",
  ],
  [
    "I farmaci che agiscono inibendo la ritenzione di sodio e acqua:",
    "sono farmaci che riducono il volume sanguigno",
  ],
  ["I tiazidici:", "bloccano il trasporto di sodio nei tuboli renali"],
  ["Gli inibitori dell'anidrasi carbonica:", "riducono la ritenzione idrica"],
  ["I diuretici osmotici:", "favoriscono l'escrezione di acqua"],
  ["I diuretici dell'ansa:", "inibiscono il simporto di sodio cloro potassio"],
  [
    "La riduzione della sintesi di proteine necessarie alla formazione delle lipoproteine:",
    "può essere ottenuta inibendo specifici fattori di trascrizione",
  ],
  [
    "Gli acidi biliari:",
    "sono sintetizzati dal fegato a partire dal colesterolo",
  ],
  [
    "Il legame tra una resina e gli acidi biliari:",
    "inibisce il riassorbimento intestinale degli acidi biliari",
  ],
  [
    "L'inibizione dell' enzima HMG-Co A reduttasi:",
    "porta ad una ridotta sintesi di colesterolo",
  ],
  [
    "Il mancato riassorbimento degli acidi biliari:",
    "può essere ottenuto con le resine",
  ],
  ["La trombina:", "è un enzima"],
  ["L'antitrombina III:", "inibisce la formazione del coagulo"],
  ["L'eparina:", "inibisce la formazione del coagulo"],
  [
    "Farmaci inibitori della trombossano sintetasi:",
    "inibiscono l'aggregazione piastrinica",
  ],
  ["Il warfarin:", "inibisce la vit K reduttasi"],
  [
    "I glucocorticoidi di sintesi:",
    "sono derivati del cortisolo e possono avere importanti applicazioni farmacologiche, soprattutto dovute alla loro azione antiinfiammatoria",
  ],
  ["il betametasone:", "tutte le risposte sono giuste"],
  [
    "I glucocorticoidi di sintesi:",
    "possono essere indicati nel trattamento dell'asma bronchiale",
  ],
  [
    "gli steroidi endogeni sono:",
    "i glucocorticoidi; i mineral corticoidi; gli ormoni sessuali",
  ],
  [
    "gli effetti collaterali dei glucocorticoidi comprendono:",
    "perdita di potassio; ritardo nella crescita; rischio di ulcere",
  ],
  [
    "In caso di diabete di tipo I viene somministrata insulina ricombinante:",
    "per compensare la carenza di insulina endogena",
  ],
  ["Gli ormoni:", "sono messaggeri chimici che coordinano diverse funzioni"],
  [
    "Gli ormoni endocrini:",
    "a differenza dei paracrini agiscono sulle cellule lontane",
  ],
  ["Gli ormoni peptidici:", "sono molecole idrofile"],
  ["Gli ormoni steroidei sono molecole:", "altamente lipofile"],
  [
    "Gli effetti tossici degli ormoni anabolizzanti:",
    "dipendono dal ruolo fisiologico che gli ormoni endogeni svolgono",
  ],
  [
    "I farmaci corticosteroidi ad azione anabolizzante:",
    "interagiscono con i recettori intracellulari degli ormoni steroidei endogeni",
  ],
  ["gli anabolizzanti posso produrre", "violenza ed aggressività"],
  ["gli ormoni steroidei posso indurre:", "tossicità epatica"],
  [
    "gli steroidi anabolizzanti",
    "possono essere usati per la terapia sostitutiva",
  ],
];


// inserisci dentro a le response fetch [{},{},{}]
a = [
];
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
