import { useContext, useState } from "react"
import { dispatchContext } from "../contexts/Context.js";


export default function TodoAdd() {
  const [text, setText] = useState('')
  const dispatch = useContext(dispatchContext);

  return (
    <div className='input-group'>
      <input 
        type="text" 
        className="form-control"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button 
        className='btn btn-primary'
        onClick={() => {
          dispatch({
            type: 'add',
            todo: {
              id: nextId++,
              text: text,
              done: false,
            }
          })
          setText('');
        }}
      >
        Add
      </button>
    </div>
  )
}

let nextId = 5;
