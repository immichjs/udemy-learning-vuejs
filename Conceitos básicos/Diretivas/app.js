new Vue({
    el: '#app',
    data: {
        title: '<h4>Hello World</h4>',
        name: 'Michel',
        myClass: '',
        inputText: 'Esse texto se altera de forma reativa de acordo com o que é escrito no input abaixo.'
    },
    methods: {
        h1() {
            this.title = '<h1>Change title in h1</h1>'
        },
        h2() {
            this.title = '<h2>Change title in h2</h2>'
        },
        h3() {
            this.title = '<h3>Change title in h3</h3>'
        },
        changeName() {
            this.name = 'Mich'
        }
    }
})