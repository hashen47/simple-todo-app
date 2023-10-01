import { Todo } from "./Todo.jsx"
import { useTodos } from "../contexts/Context.js";


export default function TodoList() {
  const todos = useTodos();
  // console.log(todos);
  const taskList = todos.map(todo => {
    return (
      <Todo 
        key={todo.id}
        todo={todo} 
      />
    )
  })

  return (
    <div className="flex flex-col items-center">
      { taskList }
    </div>
  )
}
