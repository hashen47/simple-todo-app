import TodoList from './components/TodoList.jsx'
import TodoAdd from './components/TodoAdd.jsx'
import TodoProvider from './components/TodoProvider.jsx'


function App() {
  return (
    <div 
      className='container-fluid d-flex align-items-center justify-content-center'
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className="row text-center m-5">
        <TodoProvider>
          <h1>
            Todo List
          </h1>
          <TodoAdd />
          <TodoList />
        </TodoProvider>
      </div>
    </div>
  )
}

export default App
