import { useReducer } from 'react';
import { todoReducer } from '../contexts/todoReducer.js';
import { initialTasks } from "./data.js";
import { todoContext, dispatchContext } from '../contexts/Context.js';


export default function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialTasks);

  return (
    <>
      <todoContext.Provider value={todos}>
        <dispatchContext.Provider value={dispatch}>
          { children }
        </dispatchContext.Provider>
      </todoContext.Provider>
    </>
  )
}


