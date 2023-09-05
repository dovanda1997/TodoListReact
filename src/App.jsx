import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './component/Button'
import TodoForm from './component/TodoForm'
import FilterOption from './component/FilterOption'
import TodoApp from './component/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoApp></TodoApp>
    </>
  )
}

export default App
