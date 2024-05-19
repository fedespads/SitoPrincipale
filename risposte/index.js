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
    "1. Alcuni degli effetti collaterali associati all’uso degli steroidi anabolizzanti sono",
    "Ginecomastia",
  ],
  [
    "2. Alimenti induttori del CYP450",
    "possono ridurre l'efficacia di un farmaco",
  ],
  [
    "3. Assumere due o più farmaci contemporaneamente",
    "è presente più di una risposta corretta",
  ],
  [
    "4. Benzodiazepine e barbiturici",
    "hanno indici terapeutici differenti e una tossicità diversa",
  ],
  [
    "5. Benzodiazepine e barbiturici",
    "sono farmaci che inibiscono lazione del neurotrasmettitore GABA",
  ],
  [
    "6. Benzodiazepine e barbiturici",
    "sono farmaci che agevolano il passaggio intracellulare del cloro",
  ],
  ["7. CIO", "è l'acronimo di una organizzazione non governativa"],
  [
    "8. Con il concetto di profarmaco si intende",
    "un farmaco assunto nella sua forma inattiva",
  ],
  [
    "9. Con il termine di dipendenza si intende",
    "quando una sostanza acquista priorità la nella scala dei",
  ],
  [
    "10. Con il termine Idiosincrasia si intende",
    "una risposta insolita, non riscontrabili nella maggior parte dei",
  ],
  [
    "11. Con il termine set si intende",
    "lo stato fisico del soggetto nel momento in cui assume una sostanza",
  ],
  [
    "12. Con il termine setting si intende",
    "la situazione ambientale e sociale in cui viene assunta una sostanza",
  ],
  [
    "13. Con il termine tolleranza si intende",
    "la necessità di aumentare le dosi per ottenere lo stesso effetto",
  ],
  ["14. Destrometorfano", "è un analogo della morfina"],
  ["15. Doping ematico si intende", "le trasfusioni di sangue"],
  ["16. Doping genetico si intende", "una manipolazione di specifici geni"],
  [
    "17. Durante i test antidoping i FANS vengono rilevati tramite",
    "Esami del sangue",
  ],
  ["18. Efedrina", "è un simpaticomimetico"],
  ["19. Eritropoietina ricombinante", "aumentare la massa eritrocitaria"],
  [
    "20. Farmaci e nutraceutici inibitori della renina",
    "hanno un'azione anti-ipertensiva",
  ],
  [
    "21. Farmaci inibitori della trombossano sintetasi",
    "inibiscono l'aggregazione piastrinica",
  ],
  [
    "22. Generalmente gli alimenti tendono a",
    "ridurre la velocità di svuotamento gastrico",
  ],
  [
    "23. Gli acidi biliari",
    "sono sintetizzati dal fegato a partire dal colesterolo",
  ],
  ["24. Gli agonisti colinergici", "promuovono un'azione parasimpatica"],
  [
    "25. Gli alimenti possono",
    "aumentare la biodisponibilità dei farmaci, ridurre la biodisponibilità dei",
  ],
  [
    "26. Gli alimenti possono",
    "influenzare l'entità della risposta farmacologica di un medicinale",
  ],
  ["27. gli anabolizzanti posso produrre", "violenza ed aggressività"],
  ["28. Gli antagonisti colinergici", "promuovono un'azione simpaticomimetica"],
  [
    "29. Gli antagonisti dell'aldosterone",
    "è presente più di una risposta corretta",
  ],
  ["30. Gli eccipienti", "sono sostanze prive di attività farmacologica"],
  [
    "31. gli effetti collaterali dei glucocorticoidi comprendono",
    "perdita di potassio; ritardo nella crescita;",
  ],
  [
    "32. Gli effetti tossici degli ormoni anabolizzanti",
    "dipendono dal ruolo fisiologico che gli ormoni endogeni",
  ],
  [
    "33. Gli effetti tossici e gli effetti terapeutici",
    "possono manifestarsi alla stessa concentrazione",
  ],
  ["34. Gli estrogeni", "sono ormoni"],
  [
    "35. Gli inibitori dell'anidrasi carbonica",
    "riducono la ritenzione idrica",
  ],
  [
    "36. Gli inibitori selettivi del re-uptake della serotonina",
    "nessuna risposta è corretta",
  ],
  [
    "37. Gli ormoni endocrini",
    "a differenza dei paracrini agiscono sulle cellule lontane",
  ],
  ["38. Gli ormoni peptidici", "sono molecole idrofile"],
  ["39. gli ormoni steroidei posso indurre", "tossicità epatica"],
  ["40. Gli ormoni steroidei sono molecole", "altamente lipofile"],
  [
    "41. Gli ormoni steroidei",
    "sono molecole endogene che regolano la trascrizione di specifici geni",
  ],
  ["42. Gli ormoni", "sono messaggeri chimici che coordinano diverse funzioni"],
  [
    "43. Gli steroidi anabolizzanti",
    "possono essere usati per la terapia sostitutiva",
  ],
  ["44. Gli steroidi anabolizzanti", "tutte le risposte sono corrette"],
  [
    "45. gli steroidi endogeni sono",
    "i glucocorticoidi; i mineral corticoidi; gli ormoni sessuali",
  ],
  [
    "46. I vasodilatatori diretti sono farmaci",
    "riducono le resistenze periferiche",
  ],
  [
    "47. I corticosteroidi",
    "esercitano un'azione antiinfiammatoria e un'azione regolatoria dell’equilibrio",
  ],
  [
    "48. I diuretici dell'ansa",
    "inibiscono il simporto di sodio cloro potassio",
  ],
  ["49. I diuretici osmotici", "favoriscono l'escrezione di acqua"],
  ["50. I FANS", "possono indurre un effetto antiaggregante piastrinico"],
  [
    "51. I FANS",
    "Sono potenti antiinfiammatori e inibiscono l’aggregazione piastrinica",
  ],
  [
    "52. I farmaci anti-MAO",
    "inibiscono l'enzima di degradazione della dopamina",
  ],
  [
    "53. I farmaci antinfiammatori steroidei e non steroidei",
    "riducono le concentrazioni delle prostaglandine",
  ],
  [
    "54. i farmaci Beta agonisti",
    "Inibiscono la contrazione dei muscoli lisci delle vie aeree",
  ],
  [
    "55. I farmaci Beta2-agonisti ad azione rapida",
    "è presente più di una risposta corretta.",
  ],
  [
    "56. I farmaci che agiscono come antagonisti del recettore per l'angiotensina",
    "rientrano in questa classe i",
  ],
  [
    "57. I farmaci che agiscono inibendo la ritenzione di sodio e acqua",
    "sono farmaci che riducono il volume",
  ],
  [
    "58. I farmaci che promuovono un aumento delle resistenze periferiche",
    "aumentano la pressione",
  ],
  [
    "59. I farmaci che superano le varie barriere cellulari attraverso meccanismi di diffusione passiva",
    "sono",
  ],
  [
    "60. I farmaci corticosteroidi ad azione anabolizzante",
    "interagiscono con i recettori intracellulari degli",
  ],
  ["61. I farmaci di natura biologica", "sono macromolecole"],
  [
    "62. I farmaci di origine naturale",
    "derivano da molecole presenti in natura",
  ],
  ["63. I farmaci diuretici", "nessuna risposta è corretta"],
  ["64. I farmaci simpaticomimetici", "aumentano le secrezioni gastriche"],
  [
    "65. I farmaci somministrati per via intramuscolare",
    "sono caratterizzati da un rapido assorbimento",
  ],
  [
    "66. I glucocorticoidi di sintesi",
    "sono derivati del cortisolo e possono avere importanti applicazioni",
  ],
  [
    "67. I glucocorticoidi di sintesi",
    "possono essere indicati nel trattamento dell'asma bronchiale",
  ],
  ["68. I neuroni", "sono composte da soma assone e dendriti"],
  [
    "69. I neurotrasmettitori sono",
    "molecole che si legano a specifici recettori",
  ],
  [
    "70. I processi di distribuzione",
    "sono dipendenti dalle caratteristiche chimo fisiche del farmaco",
  ],
  [
    "71. I recettori alfa 1",
    "sono espressi principalmente sulle terminazioni postsinaptiche dei neuroni",
  ],
  ["72. I recettori alfa", "si legano ai neurotrasmettitori adrenergici"],
  [
    "73. I recettori alfa",
    "si trovano sulle cellule innervate dal sistema nervoso simpatico",
  ],
  ["74. I recettori beta 1", "sono espressi principalmente sul cuore"],
  ["75. I recettori beta 2", "sono espressi principalmente sui polmoni"],
  [
    "76. i recettori del sistema colinergico",
    "sono suddivisi in muscarinici e nicotinici",
  ],
  ["77. I recettori nicotinici", "nessuna risposta è corretta"],
  ["78. I tiazidici", "bloccano il trasporto di sodio nei tuboli renali"],
  ["79. il betametasone", "tutte le risposte sono giuste"],
  [
    "80. Il blocco dei recettori dei leucotrieni",
    "porta ad un sollievo dei sintomi legati all'asma",
  ],
  [
    "81. Il coefficiente di ripartizione (fase oleosa/fase acquosa)",
    "se alto, indica una molecola lipofila",
  ],
  [
    "82. Il concetto di biodisponibilità indica",
    "Misura la velocità e l’estensione con cui un farmaco raggiunge",
  ],
  [
    "83. Il flusso di una sostanza da un compartimento a un altro è",
    "favorito dal gradiente di concentrazione",
  ],
  [
    "84. Il legame tra una resina e gli acidi biliari",
    "inibisce il riassorbimento intestinale degli acidi biliari",
  ],
  [
    "85. Il mancato riassorbimento degli acidi biliari",
    "può essere ottenuto con le resine",
  ],
  [
    "86. Il meccanismo d'azione dei farmaci beta antagonisti è",
    "Si legano ai recettori beta-adrenergici",
  ],
  ["87. Il meccanismo d'azione dell’aspirina è", "Nessuna risposta è corretta"],
  [
    "88. Il metabolismo di primo passaggio",
    "è un metabolismo che avviene prima che la sostanza entri nella",
  ],
  [
    "89. Il pH gastrico",
    "può influenzare l'assorbimento di un farmaco; se diminuisce può favorire",
  ],
  [
    "90. Il principale meccanismo d’azione degli steroidi anabolizzanti consista nel",
    "Agire come agonista dei",
  ],
  [
    "91. Il principale organo coinvolto nel metabolismo dei farmaci è",
    "Fegato",
  ],
  [
    "92. Il principale sito di azione dei farmaci tiazidici nel sistema renale è",
    "Tubulo contorto distale",
  ],
  [
    "93. Il principio attivo di un farmaco è",
    "la molecola responsabile dell'effetto biologico",
  ],
  [
    "94. Il processo di distribuzione di un farmaco dipende",
    "dal pH; dal grado di lipofilia; dal grado di",
  ],
  [
    "95. Il rapporto rischio/beneficio",
    "si valuta in base all' effetto biologico di ogni singolo farmaco",
  ],
  [
    "96. Il sistema nervoso parasimpatico induce",
    "Diminuzione della frequenza cardiaca e riduzione della",
  ],
  [
    "97. Il sistema nervoso simpatico induce",
    "è presente più di una risposta corretta",
  ],
  [
    "98. Il sistema nervoso",
    "comprende il sistema nervoso periferico e centrale",
  ],
  ["99. Il sistema nervoso", "si divide in centrale e periferico"],
  [
    "100. Il sistema renina-angiotensina-aldosterone",
    "se stimolato, induce un aumento di pressione",
  ],
  ["101. Il soma", "è il corpo cellulare del neurone"],
  [
    "102. Il termine emivita di un farmaco identifica",
    "Il tempo necessario a ridurre del 50 percento la",
  ],
  [
    "103. Il testosterone",
    "è una molecola esogena capace di indurre molteplici effetti tossici",
  ],
  [
    "104. Il trasporto cellulare che richiede ATP è definito",
    "Trasporto Attivo",
  ],
  [
    "105. Il volume di distribuzione di un farmaco rappresenta",
    "Un volume virtuale in cui il farmaco è",
  ],
  ["106. Il warfarin", "inibisce la vit K reduttasi"],
  [
    "107. In caso di diabete di tipo I viene somministrata insulina ricombinante",
    "per compensare la carenza di",
  ],
  [
    "108. In quale fase il farmaco passa dalla sede di applicazione al sangue",
    "Nessuna risposta è corretta",
  ],
  [
    "110. In una curva dose-risposta quando si raggiunge il plateau",
    "significa che si raggiunge un'efficacia",
  ],
  [
    "111. Indica quale tra le seguenti risposte è quella corretta",
    "maggiore è l'affinità del farmaco per il",
  ],
  [
    "112. Indica quale tra le seguenti risposte è quella corretta",
    "maggiore è l’efficacia del farmaco per il",
  ],
  [
    "113. Indicare il meccanismo d'azione dei farmaci antiinfiammatori non steroidei FANS",
    "Inibizione",
  ],
  [
    "114. Indicare il meccanismo d'azione principale dei farmaci tiazidici",
    "Inibizione di specifici trasportatori",
  ],
  ["ipetipidemie", "inibiscono l'assorbimento intestinale degli acidi biliari"],
  [
    "116. Indicare il principale meccanismo d'azione dei corticosteroidi inalatori nel trattamento dell'asma",
    "",
  ],
  [
    "117. Indicare il ruolo dei farmaci tiazidici nel trattamento dell'ipertensione",
    "Ridurre le resistenze",
  ],
  [
    "118. Indicare la classe di farmaci di prima scelta per il trattamento dell'asma a lungo termine",
    "non è",
  ],
  [
    "sublinguale",
    "l'assorbimento è più veloce rispetto alla somministrazione per bocca",
  ],
  [
    "120. Inibitori dell’enzima di conversione dell’angiotensina ACE",
    "possono essere usati per favorire la",
  ],
  [
    "121. La barriera emato-encefalica",
    "è una membrana che limita la distribuzione dei farmaci nel cervello",
  ],
  ["122. La camera ipobarica", "aumenta i livelli dei globuli rossi"],
  ["123. La cocaina", "è considerata un simpatico mimetico indiretto"],
  ["124. La cocaina", "potenzia la trasmissione nervosa monoamminergica"],
  [
    "125. La concentrazione plasmatica di un farmaco è",
    "in equilibrio cinetico con la sua concentrazione nei",
  ],
  ["126. La Creatina", "non è considerata una sostanza dopante"],
  ["127. La fosfocreatina", "È presente più di una risposta corretta"],
  [
    "128. La maggior parte dei farmaci ha come principale bersaglio",
    "gli enzimi",
  ],
  [
    "129. La Manipolazione chimica/fisica di un campione biologico",
    "è presente più di una risposta corretta",
  ],
  ["130. La morfina", "è un antidolorifico"],
  [
    "131. La riduzione della sintesi di proteine necessarie alla formazione delle lipoproteine",
    "può essere",
  ],
  ["132. La Scopolamina", "è un farmaco simpaticomimetico"],
  [
    "133. La sezione due della lista WADA include",
    "l'elenco dei principi attivi proibiti",
  ],
  [
    "134. La tossicologia studia",
    "gli effetti dannosi delle sostanze biologicamente attive",
  ],
  ["135. La trombina", "è un enzima"],
  [
    "136. L'acetilcolina è",
    "Il principale neurotrasmettitore del sistema nervoso parasimpatico",
  ],
  [
    "137. L'affinità del farmaco al recettore bersaglio",
    "influenza l'andamento della curva dose-risposta",
  ],
  ["138. L'aldosterone", "nessuna risposta è corretta"],
  ["139. L'anfetamina", "riduce la stanchezza"],
  ["140. L'antitrombina III", "inibisce la formazione del coagulo"],
  [
    "141. L'assunzione di alcol insieme ai barbiturici",
    "favorisce la sedazione del SNC",
  ],
  [
    "142. L'assunzione di alcol insieme ai barbiturici",
    "può potenziare l'effetto sedativo",
  ],
  [
    "143. Le benzodiazepine a quale classe di farmaci appartengono",
    "ansiolitici",
  ],
  [
    "144. Le benzodiazepine e i barbiturici",
    "sono farmaci che agiscono potenziando entrambi la trasmissione",
  ],
  [
    "145. Le benzodiazepine e i barbiturici",
    "potenziano la trasmissione inibitoria GABAergica",
  ],
  [
    "146. Le benzodiazepine sono farmaci",
    "di natura lipofila e quindi capaci di attraversare la barriera ematoencefalica",
  ],
  [
    "147. Le benzodiazepine sono farmaci",
    "è una classe di farmaci con attività ansiolitica, caratterizzati da un",
  ],
  [
    "148. Le molecole ad azione inotropa positiva",
    "inducono un aumento della contrazione cardiaca",
  ],
  [
    "149. Le sostanze dopanti",
    "promuovono un miglioramento delle prestazioni fisiche",
  ],
  [
    "150. L'EC50",
    "è la concentrazione capace di indurre una risposta che corrisponde al 50% della massima",
  ],
  [
    "151. L'efficacia massima di un farmaco viene calcolata",
    "valutando il valore più alto che si raggiunge sull'",
  ],
  ["152. L'eparina", "inibisce la formazione del coagulo"],
  [
    "153. L'inibizione dell'enzima HMG-Co A reduttasi",
    "porta ad una ridotta sintesi di colesterolo",
  ],
  [
    "154. ll re-uptake del neurotrasmettitore",
    "promuove il passaggio del neurotrasmettitore dalla fessura",
  ],
  [
    "155. Molecole che inducono una depressione del sistema nervoso centrale",
    "sono dei sedativi",
  ],
  [
    "156. Per farmacocinetica si intende",
    "lo studio dei processi di assorbimento, eliminazione, distribuzione e",
  ],
  [
    "157. Per farmacocinetica si intende",
    "come l'organismo agisce sul farmaco",
  ],
  [
    "tranne",
    "a differenza dei farmaci aspecifici l'azione promossa dal farmaco è specifica per un solo",
  ],
  [
    "163.Qual è l'effetto principale dei beta-bloccanti nel trattamento dell'insufficienza cardiaca",
    "riduzione",
  ],
  [
    "166.Quale affermazione relativa agli steroidi anabolizzanti di sintesi è falsa",
    "sono molecole modificate",
  ],
  [
    "167.Quale definizione riferita agli ormoni anabolizzanti è errata",
    "favorisce il catabolismo proteico",
  ],
  [
    "172.Quale farmaco viene comunemente utilizzato per trattare l'ipertensione",
    "simpaticolitici",
  ],
  [
    "173.Quali delle seguenti affermazioni sul CYP450 è sbagliata",
    "gli enzimi di questo complesso sono",
  ],
  [
    "cardiaca cronica",
    "inibitori dell'enzima di conversione dell'angiotensina (ACE)",
  ],
  [
    "176. Sperimentazione CLINICA di fase due",
    "prevede l'arruolamento di 100-300 pazienti",
  ],
  ["177. Sperimentazione CLINICA di fase quattro", "non è obbligatoria"],
  [
    "178. Sperimentazione CLINICA di fase tre",
    "prevede l'arruolamento di 1000-3000 pazienti",
  ],
  ["179. Sperimentazione CLINICA di fase uno", "è condotto su volontari sani"],
  ["180. Tra le sostanze proibite sempre rientrano", "beta 2 agonisti"],
  [
    "181. Un aumento delle secrezioni biliari",
    "favorisce l'assorbimento di farmaci lipofili",
  ],
  [
    "182. Uno degli effetti principali dell’attivazione del sistema nervoso parasimpatico è",
    "diminuzione della",
  ],
  [
    "183. Uno degli effetti principali dell’attivazione del sistema nervoso simpatico è",
    "è presente più di una",
  ],
  [
    "185. Uno degli effetti principali dell'attivazione del sistema nervoso simpatico è",
    "è presente più di una",
  ],
  [
    "186. WADA",
    "pubblica la lista delle sostanze e dei metodi proibiti nello sport ogni anno",
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
