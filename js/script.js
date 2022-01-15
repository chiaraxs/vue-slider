new Vue({
    el: '#app',
    data: {
        title: 'Vue Slider',
        currentIndex: 0, // fisso currentIndex a 0, in modo da poterlo incrementare e decrementare
        timer: 0, // setto timer a 0 per autoplay
        images: [
            {
                name: 'Summer dawns ',
                imageLink: 'https://unsplash.it/600/300?image=92'
            },
            {
                name: 'Spring dreams',
                imageLink: 'https://unsplash.it/600/300?image=90'
                },
            {
                name: 'Winterfall',
                imageLink: 'https://unsplash.it/600/300?image=123'
            },
            {
                name: 'Pacefull cliffs',
                imageLink: 'https://unsplash.it/600/300?image=323'
            },
            {
                name: 'Wayland Wood',
                imageLink: 'https://unsplash.it/600/300?image=795'
            }
        ] 
    },
    methods: {
        nextImage: function () {
            this.currentIndex++; // incrementa index -> nextImage

            if(this.currentIndex > this.images.length -1){
                this.currentIndex = 0; // lo slider riparte da capo in incremento
            } 
        },
        prevImage: function () {
            this.currentIndex--; // decremanta index -> prevImage

            if(this.currentIndex < 0){
                this.currentIndex = this.images.length -1; // lo slider riparte da capo in decremento
            }
        },
        resetAutoPlay: function () {
            clearInterval(this.timer);
            this.autoplay(clock); // stoppa autoplay in mouseover su img
        },
        restartAutoPlay: function () {
            this.autoplay(); // l'autoplay riparte in mouseleave su img
        },
        autoplay: function () {
            let clock = this;
            this.timer = setInterval(function() {
                clock.nextImage();
            }, 3000); // ogni 3 sec lo slider switcha image -> timer change con SetInterval -> il this diventerà la nextImage ogni 3 sec
        },
    },
    created: function () {
        this.autoplay();
    }
});


// BONUS:
// 1- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 2- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce 
// (può essere utile inserire un elemento nell’html che indichi all’utente che lo slider è in pausa, per esempio un’icona)