import './App.css'
import { TodoList } from './TodoList'

function App() {
  const list = ["ice", "fire", "earth", "pino"]

  return (
    <>
    <TodoList list={list}></TodoList>
    </>
  )
}

export default App