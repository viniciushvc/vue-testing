<template>
  <input
    v-model="content"
    type="text"
    :placeholder="placeholder"
    @input="e => $emit('input', e.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    placeholder: {
      type: String,
    },
  },
  setup() {
    const content = ref('')

    return { content }
  },
})
</script>

<style lang="scss" scoped>
input {
  display: block;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  border: 1px solid #ccc;
}
</style>
