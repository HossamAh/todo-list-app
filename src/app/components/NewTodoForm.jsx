'use client'
import { useRef, useState } from "react";

export default function NewTodoForm({onCreateClicked}){
    const inputRef = useRef('');
    const [ inputState,setInputState] = useState('');
    return (

        <div>
            <input className="bg-black text-white p-1 mx-1 rounded-xl" type="text" ref={inputRef} />
            <button className="p-2 bg-indigo-800 rounded-xl" onClick={()=>{
                 onCreateClicked(inputRef.current);}}>
                Create Todo
            </button>
        </div>
    );
    
}