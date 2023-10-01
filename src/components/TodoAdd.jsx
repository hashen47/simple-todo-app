import { useContext, useState } from "react"
import { dispatchContext } from "../contexts/Context.js";


export default function TodoAdd() {
  const [text, setText] = useState('')
  const dispatch = useContext(dispatchContext);

  return (
    <div className='flex flex-row items-center justify-center mt-10 mb-10'>
      <input 
        type="text" 
        className="border-none outline outline-gray-300 outline-2 w-3/4 max-w-xl h-11 rounded-lg box-border p-2 focus:outline-4 focus:outline-blue-200"
        placeholder='Enter the Task'
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button 
        className='flex justify-center items-center pl-5 pr-5 ml-2 h-12 bg-blue-700 rounded-lg font-bold text-white hover:bg-blue-500'
        onClick={() => {
          if (text.trim() == "") {
            alert("can't add empty todos");
            return;
          }

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
