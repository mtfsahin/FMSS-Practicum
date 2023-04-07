import { useState } from "react";
import Button from "../components/Button"
import TodoList from "../components/TodoList"
import TodoForm from "@/components/TodoForm"

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = { id: Math.random(), text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <section className="">
      <div className="max-w-md mx-auto my-12">
        <h1 className="text-center text-4xl font-bold text-chamois-950 mb-8">
          Retro Todo List
        </h1>
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
        />
      </div>
    </section>
  )
}

export default Todo;
