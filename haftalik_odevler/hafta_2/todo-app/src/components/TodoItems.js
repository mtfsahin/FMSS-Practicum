import React from 'react';
import { FaRegCircle, FaCheckCircle, FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
    const { id, text, completed } = todo;

    return (
        <div className="flex items-center py-2 pl-2 border-b-1 border-l-2  pr-2">
            {completed ? (
                <FaCheckCircle
                    className="text-chamois-950 mr-2 cursor-pointer"
                    onClick={() => toggleCompleted(id)}
                />
            ) : (
                <FaRegCircle
                    className="text-chamois-950 mr-2 cursor-pointer"
                    onClick={() => toggleCompleted(id)}
                />
            )}
            {/* Text uzunluğu 30 karakteri geçince ... işareti ile devam etmesini sağladım */}
            <p className={`text-chamois-950 ${completed && 'line-through'}`}>
                {text.length > 30 ? text.substr(0, 30) + "..." : text}
            </p>

            <FaTrash
                className="text-chamois-950 ml-auto cursor-pointer"
                onClick={() => deleteTodo(id)}
            />
        </div>
    );
};

export default TodoItem;
