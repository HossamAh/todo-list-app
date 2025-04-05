'use client'
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {createTodo} from "../Thunks/todosThunk";
export default function NewTodoForm({}){
    const inputRef = useRef('');
    const [ inputState,setInputState] = useState('');
    const dispatch = useDispatch();
    return (

        <div>
            <input className="bg-black text-white p-1 mx-1 rounded-xl" type="text" ref={inputRef} />
            <button className="p-2 bg-indigo-800 rounded-xl" onClick={()=>
                 dispatch(createTodo({text:inputRef.current.value,isCompleted:false}))}>
                Create Todo
            </button>
        </div>
    );
    
}