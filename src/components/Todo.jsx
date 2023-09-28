import { useState, useRef } from "react";
import { useDispatch } from "../contexts/Context.js";
import { flushSync } from "react-dom";


export function Todo({ todo }) {
  const [text, setText] = useState(todo.text);
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <div className='input-group mt-2 mb-2 bg-light-subtle'>
      <div className='input-group-text'>
        <input 
          type="checkbox" 
          className='form-check-input' 
          value={todo.done}
          onChange={e => {
            dispatch({
              type: 'edit',
              todo: {
                ...todo,
                done: e.target.value,
              }
            })
          }}
        />
      </div>

      <input 
        className='form-control' 
        type="text" 
        ref={inputRef}
        value={text}
        disabled={!isEdit}
        onChange={e => {
          setText(e.target.value);
        }}
        />

      {
        isEdit
        ? 
        <button 
          className="btn btn-primary"
          onClick={() => {
            setIsEdit(false);
            dispatch({
              type: 'edit',
              todo: {
                ...todo,
                text: text,
              }
            })
          }}
          >Save</button>
        : 
        <button 
          className="btn btn-success"
          onClick={() => {
            flushSync(() => {
              setIsEdit(true);
            })
            inputRef.current.focus();
          }}
        >Edit</button>
      }
      <button 
        className="btn btn-danger"
        onClick={() => {
          dispatch({
            type: 'delete',
            id: todo.id,
          })
        }}
      >Delete</button>
    </div>
  );
}
