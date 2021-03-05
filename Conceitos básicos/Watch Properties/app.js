new Vue({
    el: '#app',
    data: {
        message: '',
        writing: ''
    },
    watch: {
        message(newValue, oldValue) {
            this.writing = true

            setTimeout(() => {
                this.writing = false
            }, 2000);
        }
    }
})