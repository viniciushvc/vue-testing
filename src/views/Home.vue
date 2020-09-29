<template>
  <form @submit.prevent="addNewTodo">
    <input v-model="newTodo" ref="input" type="text" />

    <button type="submit">Submit</button>
  </form>

  <ul>
    <li
      v-for="(todo, i) in listTodos"
      :key="i"
      :class="{ finished: todo.done }"
      @click="toggleDone(todo)"
    >
      {{ todo.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const newTodo = ref('')
    const listTodos = ref<Array<T>>([])

    function addNewTodo() {
      if (!newTodo.value) return

      listTodos.value.push({
        text: newTodo.value,
      })

      newTodo.value = ''
    }

    function toggleDone(todo: any) {
      todo.done = !todo.done
    }

    return { newTodo, listTodos, addNewTodo, toggleDone }
  },
})
</script>

<style lang="scss" scoped>
.finished {
  text-decoration: line-through;
}
</style>
