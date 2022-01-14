new Vue({
    el: '#app',
    data: {
        title: 'Vue Slider',
        currentIndex: 0,
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
            this.currentIndex++;
        },
        prevImage: function () {
            this.currentIndex--;
        }

    }
});