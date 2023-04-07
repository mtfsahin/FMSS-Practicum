import React, { useState } from "react";
import Button from "../components/Button";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [completedCount, setCompletedCount] = useState(0);

  const addTodo = (todoText) => {
    const newTodo = { id: Math.random(), text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    if (todos.find((todo) => todo.id === id)?.completed) {
      setCompletedCount((count) => count - 1);
    }
  };

  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    const completedTodo = updatedTodos.find((todo) => todo.id === id)?.completed;
    if (completedTodo) {
      setCompletedCount((count) => count + 1);
    } else {
      setCompletedCount((count) => count - 1);
    }
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
    setCompletedCount(0);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
  });


  return (
    <section className="flex flex-col items-center justify-center min-h-screen/2 bg-chamois-100">
    <div className="w-full max-w-md mx-auto my-12 px-4">
      <h1 className="text-center text-4xl font-bold text-chamois-950 mb-8">
        Retro Todo List
      </h1>
      <TodoForm onAdd={addTodo} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 w-full">
        <div className="text-xs font-bold text-gray-500 md:mr-4">
          Completed ({completedCount})
        </div>
        <div className="flex  mt-2 md:mt-0">
          <Button
            onClick={() => setFilter("all")}
            selected={filter === "all"}
            className="px-3 py-1 mr-1 mb-1 text-xs font-bold text-gray-500"
          >
            All
          </Button>
          <Button
            onClick={() => setFilter("active")}
            selected={filter === "active"}
            className="px-3 py-1 mr-1 mb-1 text-xs font-bold text-gray-500"
          >
            Active
          </Button>
          <Button
            onClick={() => setFilter("completed")}
            selected={filter === "completed"}
            className="px-3 py-1 mr-1 mb-1 text-xs font-bold text-gray-500"
          >
            Completed
          </Button>
        </div>
        <Button
          onClick={clearCompleted}
          className="mt-2 md:mt-0 rounded-full px-3 py-1 text-xs font-bold text-white bg-red-500 hover:bg-red-600"
        >
          Clear Completed
        </Button>
      </div>

    </div>
  </section>
  )
}

export default Todo;
