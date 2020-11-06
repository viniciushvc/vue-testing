import { computed, ref } from 'vue'
import { getStorage, setStorage } from '@/helpers/storage'

export default function useTodos() {
  /**
   * Original TODO list
   */
  const todos = ref<Todo[]>(getStorage())

  /**
   * Filter type
   */
  const view = ref()

  /**
   * Filtered TODO List
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

    /**
     * Save on localStorage
     */
    setStorage(todos.value)
  }

  /**
   * Set the clicked TODO to done or not
   * @param todo Clicked TODO
   */
  function toggleTodo(todo: Todo) {
    todo.done = !todo.done

    /**
     * Save on localStorage
     */
    setStorage(todos.value)
  }

  /**
   * Delete the the clicked TODO
   * @param todo Clicked TODO
   */
  function deleteTodo(todo: Todo) {
    todos.value = todos.value.filter(item => item.id !== todo.id)

    /**
     * Save on localStorage
     */
    setStorage(todos.value)
  }

  /**
   * Return TODO methods
   */
  return {
    filteredTodos,
    view,
    newTodo,
    toggleTodo,
    deleteTodo,
  }
}
