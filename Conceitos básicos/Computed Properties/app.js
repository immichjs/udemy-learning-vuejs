new Vue({
    el: '#app',
    data: {
        numClicks: 0
    },
    methods: {
        increment() {
            this.numClicks++
        }
    },
    computed: { // Computed Properties sempre precisam retornar algo.
        contador() {
            return this.numClicks * 2
        }
    }
})