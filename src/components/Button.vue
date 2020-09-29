<template>
  <button @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
})
</script>

<style lang="scss" scoped>
button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: 1px solid #000;
  outline: none;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #666;
  }
}
</style>
