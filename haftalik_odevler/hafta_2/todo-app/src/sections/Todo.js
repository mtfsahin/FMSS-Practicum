import React, { useState } from "react";
import Button from "../components/Button";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { IoMdClose, IoIosSquareOutline } from "react-icons/io"



const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [completedCount, setCompletedCount] = useState(0);


  // 3 statik todo ekleme
  const initialTodos = [
    { id: Math.random(), text: "Complate Fmss Practicum", completed: false },
    { id: Math.random(), text: "Learn React", completed: true },
    { id: Math.random(), text: "Learn Next", completed: true },
    { id: Math.random(), text: "Read Tailwind Css Documantation", completed: false },
    { id: Math.random(), text: "Learn Next", completed: false },
    { id: Math.random(), text: "Read a book", completed: false },
    { id: Math.random(), text: "Watch a movie", completed: false },


  ];

  // sayfa yüklendiğinde statik todoları yükle
  useState(() => {
    setTodos(initialTodos);
  }, []);


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
    <section className="flex flex-col items-center justify-center mt-2 sm:mt-8 bg-pearl-lusta-50 border-4 rounded-xl border-bracken-950 shadow-2xl drop-shadow-4xl ">
      <div className="bg-geraldine-400 h-11 rounded-t-lg rounded-tr-lg flex w-full p-1 border-b-4 ">
        <div className="flex-1 pl-3 font-bold border-chestnut-700 mt-1">
          Todo List
        </div>
        <div className="flex flex-row p-1">
          <IoIosSquareOutline size={23} className="mr-2" />
          <IoMdClose size={24} className="mr-1" />
        </div>
      </div>

      <div className="w-full max-w-md mx-auto my-12 px-4">
        <h1 className="font-retro text-center text-4xl font-bold text-chamois-950 mb-8">
          Retro Todo List
          <div className="text-sm font-bold md:mr-4 mt-3">
            Completed ({completedCount})
          </div>
        </h1>



        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={filteredTodos}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
        />
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 sm:mt-10 w-full">

          <div className="flex  mt-2 md:mt-0 ">
            <Button
              onClick={() => setFilter("all")}
              selected={filter === "all"}
              className={`px-3 py-1 mr-1 mb-1 text-xs font-bold rounded-none ${filter === "all"
                  ? "text-silver-tree-800 bg-silver-tree-200"
                  : ""
                }`}
            >
              All
            </Button>
            <Button
              onClick={() => setFilter("active")}
              selected={filter === "active"}
              className={`px-3 py-1 mr-1 mb-1 text-xs font-bold rounded-none ${filter === "active"
                  ? "text-silver-tree-800 bg-silver-tree-200"
                  : ""
                }`}
            >
              Active
            </Button>
            <Button
              onClick={() => setFilter("completed")}
              selected={filter === "completed"}
              className={`px-3 py-1 mr-1 mb-1 text-xs font-bold rounded-none ${filter === "completed"
                  ? "text-silver-tree-800 bg-silver-tree-200"
                  : ""
                }`}
            >
              Completed
            </Button>
          </div>
          <Button
            onClick={clearCompleted}
            className="mt-2 md:mt-0 rounded-full px-3 py-1 text-xs font-bold text-white bg-geraldine-300 hover:bg-geraldine-600 hover:text-geraldine-50"
          >
            Clear Completed
          </Button>
        </div>

      </div>
    </section>

  )
}

export default Todo;
