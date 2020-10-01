const STORAGE_KEY = 'TODOS'

export const getStorage = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

export const setStorage = (todos: Todo[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}
