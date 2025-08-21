import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
        <ul className="list-none">
        {todos.map((todo) => (
            <li key={todo.id} className="mt-4 flex items-center justify-between bg-zinc-800 px-4 py-2 border-b rounded">
            <span>{todo.text}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500">Remove</button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Todos
