<template>
  <div class="main">
      <Add></Add>
      <Cut></Cut>
      <Display></Display>
  </div>
</template>
<script>
import Add from './add.vue'
import Cut from './cut.vue'
import Display from './display.vue'
export default {
  name: 'main',
  components: {
    Add,
    Cut,
    Display
  }
}
</script>
