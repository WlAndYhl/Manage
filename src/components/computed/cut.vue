<template>
  <div class="cut">
      <button @click="cut">-按钮</button>
  </div>
</template>
<script>
export default {
  name: 'cut',
  methods: {
    cut () {
      this.$store.dispatch('cut', 10)
      console.log(this.$store.state.count)
    }
  }
}
</script>

