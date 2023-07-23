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