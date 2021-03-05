new Vue({
    el: '#app', // el = Elemento'
    data: {
        title: 'Hello World',
        paragraph: 'Aplicação com Vuejs'
    },
    methods: {
        changeTitle() {
            this.title = 'VueJs na prática'
        }
    }
})