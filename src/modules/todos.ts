import { ref } from 'vue'

export default function useTodos() {
  const todos = ref<Todo[]>([])

  function newTodo(todo: string) {
    todos.value.push({
      id: new Date().valueOf(),
      text: todo,
    })
  }

  function toggleTodo(todo: Todo) {
    todo.done = !todo.done
  }

  function deleteTodo(todo: Todo) {
    todos.value = todos.value.filter(item => item.id !== todo.id)
  }

  return {
    todos,
    newTodo,
    toggleTodo,
    deleteTodo,
  }
}
