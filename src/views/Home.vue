<template>
  <form @submit.prevent="newTodo(input)">
    <Input v-model="input" type="text" />

    <Button type="submit">Submit</Button>
  </form>

  <TodoList :todos="todos" @click="toggleTodo" @delete="deleteTodo" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import useTodos from '@/modules/todos'

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import TodoList from '@/components/TodoList.vue'

export default defineComponent({
  components: {
    Input,
    Button,
    TodoList,
  },
  setup() {
    const input = ref('foda-se')

    const { todos, newTodo, toggleTodo, deleteTodo } = useTodos()

    return { input, todos, newTodo, toggleTodo, deleteTodo }
  },
})
</script>
