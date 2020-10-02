export enum ActionsType {
  ADD_TODO = 'ADD_TODO',
}

export enum MutationsType {
  SET_TODO = 'SET_TODO',
}

export type StateType = {
  todos: Todo[]
}
