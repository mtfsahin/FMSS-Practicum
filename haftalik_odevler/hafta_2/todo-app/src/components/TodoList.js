import TodoItem from "./TodoItems";

const TodoList = ({ todos, toggleCompleted, deleteTodo }) => {
    return (
        //Todoları listelemek için todos arrayini mapliyoruz ve itemleri listeliyoruz
        //Mapping the todos array to list the items in the TodoList
        <div className="todo-list h-40 sm:h-64 overflow-y-auto pr-5 pt-1 mt-4">
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

