new Vue({
    el: '#app',
    data: {
        newName: '',
        names: []
    },
    methods: {
        addName() {
            this.names.push(this.newName)
            this.newName = ''
        }
    },
    filters: { // Filtros sempre precisam retornar algo.
        toUpperCase(value) {
            return value.toUpperCase()
        }
    }
})