const todos = (state = [], action) => {
  console.log('action', action)
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'DELTE_TODO':
      state = [].concat(state || [])
      var i
      for (i = 0; i < state.length; i++) {
        state[i].id === action.id
        break;
      }
      state.splice(i, 1)
      return state
    default:
      return state
  }
}

export default todos