const STORAGE_KEY = 'TODOS'

export const getStorage = () => {
  const todos = localStorage.getItem(STORAGE_KEY)

  if (todos) return JSON.parse(todos)

  return []
}

export const setStorage = (todos: Todo[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}
