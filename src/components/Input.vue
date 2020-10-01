<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    modelValue: String,
    placeholder: String,
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
