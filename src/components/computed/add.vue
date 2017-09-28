<template>
    <div class="add">
        <button @click='add'>+按钮</button>
    </div>
</template>
<script>
export default {
  name: 'add',
  methods: {
    add () {
      this.$store.dispatch('add', 10)
      console.log(this.$store.state.count)
    }
  }
}
</script>

