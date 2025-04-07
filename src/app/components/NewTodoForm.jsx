'use client'
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {createTodo} from "../Thunks/todosThunk";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function NewTodoForm({}){
    const inputRef = useRef('');
    const [ inputState,setInputState] = useState('');
    const dispatch = useDispatch();
    return (

        <div className="flex mb-4 w-full justify-center items-center">
            <input className="w-[80%] p-2 pl-10 text-sm text-gray-700 bg-white rounded" placeholder="Add a new todo..." type="text" ref={inputRef} />
            <button className="cursor-pointer  bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={()=>
                 dispatch(createTodo({text:inputRef.current.value,isCompleted:false}))}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            
        </div>
    );
    
}