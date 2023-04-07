import TodoItem from "./TodoItems";

const TodoList = ({ todos, toggleCompleted, deleteTodo }) => {
    return (
        <div>
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
