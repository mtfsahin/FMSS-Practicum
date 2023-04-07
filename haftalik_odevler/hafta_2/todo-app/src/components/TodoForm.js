import { useState } from "react";

const TodoForm = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        onAdd(inputValue.trim());
        setInputValue("");
    };

    return (
        <form className="flex gap-4" onSubmit={handleSubmit}>
            <input
                type="text"
                className="border-gray-400 border rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                placeholder="Add new task..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md"
            >
                Add
            </button>
        </form>
    );
};

export default TodoForm;
