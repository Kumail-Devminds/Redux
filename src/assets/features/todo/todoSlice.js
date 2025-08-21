import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodos = () => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [{ id: 1, text: "Learn Redux Toolkit" }];
};

const initialState = {
  todos: loadTodos(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;