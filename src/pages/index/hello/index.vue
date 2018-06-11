<template>
  <div>
    <h2 class="hello">Hello {{name}} </h2>
    <h3>{{num}}</h3>
    <h4>{{price}}</h4>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('moduleB')

export default {
  props: {
    name: {
      type: String,
      default: 'Vue!'
    }
  },
  computed: {
    ...mapState(['num', 'price'])
  },
  methods: {
    ...mapActions(['increment'])
  },
  created() {
    // this.$store.dispatch('moduleA/increment')
    // console.log(this.$store.state)
    // console.log(this.$store.getters)
    setTimeout(this.increment, 1000)
  },
  mounted() {
  }
}
</script>
