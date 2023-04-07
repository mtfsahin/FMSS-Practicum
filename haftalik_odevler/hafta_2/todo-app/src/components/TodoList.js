import TodoItem from "./TodoItems";

const TodoList = ({ todos, toggleCompleted, deleteTodo }) => {
    return (
        <div className="todo-list h-64 overflow-y-auto">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleCompleted={toggleCompleted}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;

