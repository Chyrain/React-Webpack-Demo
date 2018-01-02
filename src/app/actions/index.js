let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const delTodo = (id) => ({
  type: 'DELTE_TODO',
  id
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})