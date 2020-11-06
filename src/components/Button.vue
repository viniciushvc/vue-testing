<template>
  <button @click="$emit('click', $event)" :class="classStyles()">
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
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    function classStyles() {
      return [{ fullWidth: props.fullWidth }]
    }

    return { classStyles }
  },
})
</script>

<style lang="scss" scoped>
button {
  background-color: var(--bg);
  color: var(--color);
  padding: 10px 20px;
  border: 1px solid #000;
  outline: none;
  transition: var(--transition);
  cursor: pointer;
  border-radius: var(--borderRadius);

  &:hover {
    background-color: #666;
  }
}

.fullWidth {
  width: 100%;
}
</style>
