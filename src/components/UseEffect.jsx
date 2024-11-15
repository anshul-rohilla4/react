import { useState, useEffect } from "react";

const UseEffect = () => {

    const[data,setData]=useState([]);

    useEffect(()=>{
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos")

            const data=await response.json()
            
            if(data && data.length) setData(data);
        }
        getData();
    },[])
    return(
        <div>
            <ul>
                {/* {data.map(todo=>(
                    if(!todo.completed){
                        <li key={todo.id}>{todo.title}</li>
                    }
                ))} */}
                {data
                .filter((todo)=>!todo.completed) //it filters the todos that are completed ie true(display the !completed )
                .map((todo)=>(
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
};

export default UseEffect;
