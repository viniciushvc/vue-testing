import { computed, ref } from 'vue'

export default function useTodos() {
  /**
   * Original array list
   */
  const todos = ref<Todo[]>([])

  /**
   * Filter type
   */
  const view = ref()

  /**
   * Show filtered TODOS
   */
  const filteredTodos = computed(() => {
    switch (view.value) {
      case 'actives':
        return todos.value.filter(todo => !todo.done)
      case 'done':
        return todos.value.filter(todo => todo.done)
      default:
        return todos.value
    }
  })

  /**
   * Add new TODO to list
   * @param text text entered by the user
   */
  function newTodo(text: string) {
    if (!text) return

    todos.value.push({
      id: new Date().valueOf(),
      text,
    })
  }

  /**
   * Set clicked TODO to done or not
   * @param todo Clicked TODO
   */
  function toggleTodo(todo: Todo) {
    todo.done = !todo.done
  }

  /**
   * Delete clicked TODO
   * @param todo Clicked TODO
   */
  function deleteTodo(todo: Todo) {
    todos.value = todos.value.filter(item => item.id !== todo.id)
  }

  /**
   * Return const and functions to View HOME
   */
  return {
    filteredTodos,
    view,
    newTodo,
    toggleTodo,
    deleteTodo,
  }
}
