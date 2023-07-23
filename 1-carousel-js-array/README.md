# Carousel js-array

Dato un array contenente una lista di cinque immagini, creare un carosello interattivo come nello screenshot allegato.
![carousel-preview](./assets/img/screencapture.png)


## Milestone
- [x] **1. Markup Statico** &rarr; costruire il container e inserire un'immagine grande al centro.
- [x] **2. Markup Dinamico** &rarr; Rimuovere il markup statico e inserire le immagini dinamicamente con un array e un ciclo for che concatena un template literal.
- [x] **3. Active Class** &rarr; Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
*Al termine di questa fase si otterrà lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.*
- [x] **4. Clickable** &rarr; Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
- [x] **5. Image Loop** &rarr; Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
- [x] **6. Thumbnails** &rarr; Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.