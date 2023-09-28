export function todoReducer(todos, action) {
  switch(action.type) {
    case 'add': {
      return [
        ...todos,
        action.todo,
      ]
    }
    case 'edit': {
      return todos.map(todo => {
        if (action.todo.id === todo.id) {
          return action.todo
        } else {
          return todo
        }
      })
    }
    case 'delete': {
      return todos.filter(todo => todo.id !== action.id)
    }
  }
}
