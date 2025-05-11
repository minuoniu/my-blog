<template>
  <div>
    <h1>生命周期</h1>
  </div>
</template>

<script>
export default {
  name: 'LifecycleView',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  updated() {
    console.log('updated')
  },
  unmounted() {
    console.log('unmounted')
  }
}

</script>

<style lang="scss" scoped>

</style>
