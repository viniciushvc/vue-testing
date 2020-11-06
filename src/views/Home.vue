<template>
  <form @submit.prevent="newTodo(input)">
    <Input v-model="input" placeholder="Type and press ENTER" />
  </form>

  <TodoList :todos="filteredTodos" @click="toggleTodo" @delete="deleteTodo" />

  <div class="action-buttons">
    <Button @click="view = ''">All</Button>
    <Button @click="view = 'actives'">Actives</Button>
    <Button @click="view = 'done'">Dones</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

/**
 * TODO modules
 */
import useTodos from '@/modules/todos'

/**
 * Importing components
 */
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
    const input = ref('')
    const { view, filteredTodos, newTodo, toggleTodo, deleteTodo } = useTodos()

    /**
     * Export all useTodos methods to template
     */
    return { view, filteredTodos, newTodo, toggleTodo, deleteTodo, input }
  },
})
</script>

<style lang="scss" scoped>
.action-buttons {
  margin-top: 10px;

  & button {
    margin-right: 10px;
  }
}
</style>
