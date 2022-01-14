new Vue({
    el: '#app',
    data: {
        title: 'Vue Slider',
        currentIndex: 0, // fisso currentIndex a 0
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
        }

    }
});