<template>
  <div
    v-for="todo in todos"
    :key="todo.id"
    class="todos"
    @click="$emit('click', todo)"
  >
    <input :checked="todo.done" type="checkbox" class="todo-checkbox" />

    <div :class="{ 'todo-done': todo.done }" class="todo-text">
      {{ todo.text }}
    </div>

    <button @click.stop="$emit('delete', todo)">Delete</button>
  </div>
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
  emits: ['click', 'delete'],
})
</script>

<style lang="scss" scoped>
.todos {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  padding: 20px;
  margin: 10px 0;
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ddd;

  .todo-checkbox {
    margin-right: 10px;
  }

  .todo-text {
    width: 100%;
  }

  .todo-done {
    text-decoration: line-through;
  }
}
</style>
