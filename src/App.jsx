import { useState } from 'react'
import './App.css'
import AddTodo from './assets/components/AddTodo'
import Todos from './assets/components/Todos'

function App() {
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
