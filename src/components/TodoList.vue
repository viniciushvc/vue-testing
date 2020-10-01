<template>
  <div v-for="todo in todos" :key="todo.id" class="todos">
    <Checkbox
      v-model="todo.done"
      type="checkbox"
      class="todo-checkbox"
      @click="$emit('click', todo)"
    />

    <div :class="{ 'todo-done': todo.done }" class="todo-text">
      {{ todo.text }}
    </div>

    <Button @click="$emit('delete', todo)">Delete</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Checkbox from '@/components/Checkbox.vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  props: {
    todos: Array,
  },
  emits: ['click', 'delete'],
  components: {
    Checkbox,
    Button,
  },
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
