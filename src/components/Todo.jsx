import { useState, useRef } from "react";
import { useDispatch } from "../contexts/Context.js";
import { flushSync } from "react-dom";


export function Todo({ todo }) {
  const [text, setText] = useState(todo.text);
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  return (
    <div className='flex items-center justify-between bg-white pl-5 pr-5 pb-4 pt-4 mt-2 mb-2 rounded-lg w-100 sm:w-3/4 md:w-3/4 lg:w-8/12 border-2 border-gray-400'>
      <input 
        type="checkbox" 
        className='w-8 h-8' 
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

      <input 
        className='h-14 rounded-md box-border pl-4 pr-4 bg-transparent ml-3 mr-3 outline outline-gray-100 outline-4 focus:outline-blue-300 w-full' 
        type="text" 
        ref={inputRef}
        value={text}
        disabled={!isEdit}
        onChange={e => {
          setText(e.target.value);
        }}
        />

      <div
        className="flex"
      >
        {
          isEdit
          ? 
          <button 
            className='flex justify-center items-center p-2 ml-2 w-14 h-14 bg-green-500 rounded-full font-bold text-white hover:bg-green-600'
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
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                <path d="M 20.292969 5.2929688 L 9 16.585938 L 4.7070312 12.292969 L 3.2929688 13.707031 L 9 19.414062 L 21.707031 6.7070312 L 20.292969 5.2929688 z"></path>
              </svg> 
          </button>
          : 
          <button 
            className='flex justify-center items-center p-2 ml-2 w-14 h-14 bg-yellow-500 rounded-full font-bold text-white hover:bg-yellow-600'
            onClick={() => {
              flushSync(() => {
                setIsEdit(true);
              })
              inputRef.current.focus();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill='white' x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
              <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"></path>
            </svg>
          </button>
        }
        <button 
          className='flex justify-center items-center p-2 ml-2 w-14 h-14 bg-red-500 rounded-full font-bold text-white hover:bg-red-600'
          onClick={() => {
            dispatch({
              type: 'delete',
              id: todo.id,
            })
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" fill='white' y="0px" width="48" height="48" viewBox="0 0 64 64">
            <path d="M 28 11 C 26.895 11 26 11.895 26 13 L 26 14 L 13 14 C 11.896 14 11 14.896 11 16 C 11 17.104 11.896 18 13 18 L 14.160156 18 L 16.701172 48.498047 C 16.957172 51.583047 19.585641 54 22.681641 54 L 41.318359 54 C 44.414359 54 47.041828 51.583047 47.298828 48.498047 L 49.839844 18 L 51 18 C 52.104 18 53 17.104 53 16 C 53 14.896 52.104 14 51 14 L 38 14 L 38 13 C 38 11.895 37.105 11 36 11 L 28 11 z M 18.173828 18 L 45.828125 18 L 43.3125 48.166016 C 43.2265 49.194016 42.352313 50 41.320312 50 L 22.681641 50 C 21.648641 50 20.7725 49.194016 20.6875 48.166016 L 18.173828 18 z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
