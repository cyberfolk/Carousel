/* Consegna:
 * Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
 *
 * MILESTONE 1
 * Per prima cosa, creiamo il markup statico:
 * costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
 *
 * MILESTONE 2
 * Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
 * Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
 * Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
 *
 * MILESTONE 3
 * Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
 *
 * BONUS 1
 * Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
 *
 * BONUS 2
 * Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
 * Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
 *
 * TOOLTIP 1
 * Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.
 * Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
 *
 * TOOLTIP 2
 * Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
 * Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
 * Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
 */

const DB_IMG = ["./assets/img/01.webp", "./assets/img/02.webp", "./assets/img/03.webp", "./assets/img/04.webp", "./assets/img/05.webp"];
const elImages = document.querySelector(".images");
const elSideShower = document.querySelector(".ms_side_shower");
const elBtnUp = document.querySelector("#up");
const elBtnDown = document.querySelector("#down");
let imgShow = 0;

/* #region popolate first time ...................................... */
for (let i = 0; i < DB_IMG.length; i++) {
  const elImg = document.createElement("img");
  elImg.src = DB_IMG[i];
  elImg.classList.add("ms_not_show");
  elImages.append(elImg);

  const elSideCcell = document.createElement("div");
  elSideCcell.classList.add("ms_side_cell", "ms_opacity");
  elSideShower.append(elSideCcell);
}
popolateSide(unRotateRight(unRotateRight(DB_IMG)));
elImages.children[imgShow].classList.remove("ms_not_show");
elSideShower.children[2].classList.remove("ms_opacity");
/* #rendegion popolate first time ...................................... */

elBtnUp.onclick = function () {
  up();
};

elBtnDown.onclick = function () {
  down();
};

function up() {
  elImages.children[imgShow].classList.add("ms_not_show");
  imgShow++;
  if (imgShow >= DB_IMG.length) {
    imgShow = 0;
  }
  elImages.children[imgShow].classList.remove("ms_not_show");
  popolateSide(unRotateLeft(DB_IMG));
}

function down() {
  elImages.children[imgShow].classList.add("ms_not_show");
  imgShow--;
  if (imgShow < 0) {
    imgShow = DB_IMG.length - 1;
  }
  elImages.children[imgShow].classList.remove("ms_not_show");
  popolateSide(unRotateRight(DB_IMG));
}

function rotateLeft(array) {
  let first = array.shift();
  array.push(first);
  return array;
}

function unRotateRight(array) {
  let last = array.pop();
  array.unshift(last);
  return array;
}

function popolateSide(DB_IMG) {
  for (let i = 0; i < DB_IMG.length; i++) {
    const elImg = document.createElement("img");
    elImg.src = DB_IMG[i];
    elSideShower.children[i].innerHTML = "";
    elSideShower.children[i].append(elImg);
  }
}
