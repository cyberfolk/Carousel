# js-array-carousel

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

## MILESTONE 1

Creare il markup statico: costruire il container e inserire un'immagine grande al centro.

## MILESTONE 2

Rimuovere il markup statico e inserire tutte le immagini dinamicamente servendoci di un array e un semplice ciclo for che concatena un template literal.

Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

Al termine di questa fase si otterrà lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

## MILESTONE 3

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

## BONUS

- Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
- Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
- Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
