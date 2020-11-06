<template>
  <div class="checkbox">
    <input
      :id="id"
      :checked="modelValue"
      type="checkbox"
      @input="$emit('input', $event.target.checked)"
      @click="$emit('click', $event)"
    />

    <label :for="id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { nanoid } from 'nanoid'

export default defineComponent({
  name: 'Checkbox',
  props: {
    modelValue: Boolean,
    checked: Boolean,
  },
  setup() {
    const id = nanoid()

    return { id }
  },
})
</script>

<style lang="scss" scoped>
.checkbox {
  position: relative;
  width: 28px;
  height: 28px;

  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 28px;
    height: 28px;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 50%;

    &:after {
      top: 8px;
      left: 7px;
      height: 6px;
      width: 12px;
      opacity: 0;
      position: absolute;
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      content: '';
      transform: rotate(-45deg);
    }
  }

  input {
    visibility: hidden;

    &:checked + label {
      background-color: #66bb6a;
      border-color: #66bb6a;

      &:after {
        opacity: 1;
      }
    }
  }
}
</style>
