import { useState } from "react";

const TodoForm = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState("");
    const [empytValue, setEmtyValue] = useState("");

    //Form için hanfle oluşturuyorum
    const handleSubmit = (e) => {
        e.preventDefault();

        //Boş değer girildiği zaman empty value ye textteki yazıyı set editorum
        //when an empty , set text
        if (inputValue.trim() === "") {
            setEmtyValue("Please enter a todo item.");
            return;
        }
        
        onAdd(inputValue.trim());
        setInputValue("");
        //Boş değilse boş değer set ediyorum
        //when an empy, set empty value
        setEmtyValue("");
    };

    return (
        <div>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="bg-comet-950 text-cherokee-50 border rounded-md py-1 px-3  flex-grow"
                    placeholder="Add new task..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-goldenrod-200 font-semibold border-dallas-950 border-2 hover:bg-blue-700 text-white py-1 px-3 rounded-md w-full sm:w-auto"
                >
                    Add Todo
                </button>
            </form>
            {/* Boş değer girilirse uyarı gelir*/}
            {/* if an emty value enterd, print text  */}
            {empytValue && <div className="flex justify-center text-geraldine-700 mt-1">{empytValue}</div>}
        </div>
    );
};

export default TodoForm;
