/**
 * DESCRIZIONE:
 * Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
 * 
 * BONUS:
 * 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
 * 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
 * 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
 * 
 * TIPS:
 * regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
 * il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
 */
import { images } from "./db.js"; // import of a default export

const { createApp } = Vue

createApp({
    data() {
        return {
            revert: false,
            autoplay: null,
            activeImage: 0,
            images: images,
        }
    },
    methods: {
        next() {
            this.activeImage++;
            if (this.activeImage == this.images.length) {
                this.activeImage = 0;
            }
        },
        prev() {
            this.activeImage--;
            if (this.activeImage < 0) {
                this.activeImage = this.images.length - 1;
            }
        },
        changeImage(index) {
            this.activeImage = index;
        },
        stopAutoplay() {
            clearInterval(this.autoPlay)
        },
        restartAutoplay() {
            if (this.revert === true) {
                this.autoPlay = setInterval(this.prev, 3000)
            } else {
                this.autoPlay = setInterval(this.next, 3000)
            }
        },
        revertAutoplay() {
            clearInterval(this.autoPlay)
            if (this.revert === true) {
                this.autoPlay = setInterval(this.next, 3000)
                this.revert = false;
            } else {
                this.autoPlay = setInterval(this.prev, 3000)
                this.revert = true;
            }
        }
    },
    mounted() {
        this.autoPlay = setInterval(this.next, 3000)
    },
}
).mount('#app')