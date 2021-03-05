Vue.component('arcade-jogo', {
    data() {
        return {
            jogos: [
                { name: 'Street Fighter 2'},
                { name: 'SNK vs Capcom: Chaos'},
                { name: 'The King of Fighters 98'},
                { name: 'The King of Fighters 2002'}
            ]
        }
    },
    template: `<div>
                    <div class="jogo" v-for="jogo in jogos">
                        <p>{{ jogo.name }}</p>
                    </div>
               </div>`
})

Vue.component('ComponentPai', {
    template: `<div>
                    <p>Texto do componente pai</p>
                    <ComponentFilho></ComponentFilho>
                    <ComponentFilho></ComponentFilho>
               <div>`
})

Vue.component('ComponentFilho', {
    template: `<div>
                    <p>Texto do componente filho</p>
               <div>`
})

new Vue({
    el: '#app',
    data: {
        title: 'Meus Jogos Favoritos',
        bounce: false
    },
    component: [
        'componentepai',
        'componentefilho'
    ]
})