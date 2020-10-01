<template>
  <div class="checkbox">
    <input
      :id="id"
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
    // https://v3.vuejs.org/guide/migration/v-model.html#overview
    modelValue: Boolean,
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
  width: 31px;
  height: 29px;

  label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 28px;
    left: 0;
    position: absolute;
    top: 0;
    width: 28px;

    &:after {
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      content: '';
      height: 6px;
      left: 7px;
      opacity: 0;
      position: absolute;
      top: 8px;
      transform: rotate(-45deg);
      width: 12px;
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
