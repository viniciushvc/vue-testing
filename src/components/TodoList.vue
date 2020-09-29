<template>
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
      :class="{ done: todo.done }"
      @click="$emit('click', todo)"
    >
      {{ todo.text }}

      <span @click.stop="$emit('delete', todo)">Delete</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

<style lang="scss" scoped>
.done {
  text-decoration: line-through;
}
</style>
