<template>
  <b-container>
    <b-row align-v="center">
      <Card v-for="(curso, index) in cursos" :key="index" :name="curso.name"></Card>
    </b-row>
  </b-container>
</template>

<script>

import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  data() {
    return {
      cursos: []
    }
  },
  mounted() {
        this.fetchData()
  },
  components: {
    Card
  },
  methods: {
    async fetchData() {
        const res = await fetch('cursos.json')
        const val = await res.json()
        this.cursos = val
        console.log(this.cursos)
    }
  }
}
</script>
