import { useState } from "react";

const Todo = () => {

    const[todos,setTodos]=useState([]);
    const[inputValue,setInputValue]=useState("");

    const handleSubmit=e=>{
        e.preventDefault()

        if(inputValue.trim()){
            setTodos([...todos,inputValue]);
            setInputValue("")
        }
    }

    const handleChange=e=>{
        setInputValue(e.target.value);
    }

    return(
        <div>
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} placeholder="Add a New Todo" onChange={handleChange}></input>
                <button type="submit">Add todo</button>

            </form>

            <ul>
                {todos.map((todo,index)=>(
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;