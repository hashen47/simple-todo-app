import TodoList from './components/TodoList.jsx'
import TodoAdd from './components/TodoAdd.jsx'
import TodoProvider from './components/TodoProvider.jsx'


function App() {
  return (
    <div className="w-screen md:max-w-6xl md:w-3/4 h-auto min-h-screen flex flex-col bg-slate-100 justify-center box-border pl-5 pr-5">
      <TodoProvider>
        <h1 className='mt-5 flex items-center justify-center text-6xl text-black font-bold'>
          Todo List
        </h1>
        <TodoAdd />
        <TodoList />
      </TodoProvider>
    </div>
  )
}

export default App
