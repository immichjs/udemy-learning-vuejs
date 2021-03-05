new Vue({
    el: '#app',
    data: {
        text: 'Before change text'
    },
    methods: {
        changeText() {
            this.text = 'After change text'
        }
    }
})