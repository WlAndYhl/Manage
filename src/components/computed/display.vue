<template>
  <div class="display">
    {{count}}
  </div>
</template>
<script>
export default {
  name: 'display',
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

