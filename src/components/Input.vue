<template>
  <input
    v-model="content"
    type="text"
    @input="e => $emit('input', e.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Input',
  setup() {
    const content = ref('')

    return { content }
  },
})
</script>

<style lang="scss" scoped>
input {
  padding: 10px;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  display: block;
  border: 1px solid #ccc;
}
</style>
