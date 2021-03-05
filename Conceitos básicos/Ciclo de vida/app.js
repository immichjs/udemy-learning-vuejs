let app = new Vue({
    el: '#app',
    data: {
        name: 'Michel'
    },
    methods: {
        changeName() {
            this.name = 'Mich'
        },
        destroyInstance() {
            app.$destroy()
        }
    },
    created() {
        console.log('Instância criada')
    },
    mounted() {
        console.log('Instância montada')
    },
    updated() {
        console.log('Instância atualizada')
    },
    destroyed() {
        console.log('Instância foi destruída')
    }
})