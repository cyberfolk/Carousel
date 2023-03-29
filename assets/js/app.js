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

const { createApp } = Vue

createApp({
    data() {
        return {
            autoplay: "",
            activeImage: 0,
            images: [
                {
                    image: './assets/img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: './assets/img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: './assets/img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: './assets/img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: './assets/img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
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
    },
    mounted() {
        this.autoPlay = setInterval(this.next, 3000)
    },
}
).mount('#app')


/* // Bonus 2 Autoplay carousel
// - increment the active slide value every 3 seconds
let autoplay;
autoplay = setInterval(next, 3000)

// Bonus 3 Start stop carousel
// - on mouse enter inside the slider stop the autoplay
const slider_dom_element = document.querySelector('.slider')
slider_dom_element.addEventListener('mouseenter', () => {

  clearInterval(autoplay)

})
// - on mouse leave restart the autoplay
slider_dom_element.addEventListener('mouseleave', () => {
  autoplay = setInterval(next, 3000)
})

// Invert the autoplay on button click
// - attach event listener to the revert button
// - when clicked stop the autoplay
// - restart the autoplay using the prev callback

document.querySelector('button.revert').addEventListener('click', () => {
  console.log('clicket on revert');
  clearInterval(autoplay)
  autoplay = setInterval(prev, 3000)
})
 */