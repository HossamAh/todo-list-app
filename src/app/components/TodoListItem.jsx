import { useDispatch } from "react-redux";
import { deleteTodo,markTodoAsCompleted } from "../Thunks/todosThunk";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck , faTrash } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime)
export default function TodoListItem({todo}){
    const dispatch = useDispatch();

    return (
    <li className="bg-white rounded shadow-md p-4 mb-4 w-full flex flex-col md:flex-row gap-2 justify-between items-center">
        <h3 className="text-gray-600">{todo.text}</h3>
        <div className="flex gap-2">
        {!todo.isCompleted && <p className="bg-green-100 text-green-800 text-xs font-bold rounded px-2 py-1 flex items-center justify-center" >{dayjs(todo.deadline).fromNow()}</p> }
        <div className="flex gap-1">

        {todo.isCompleted? <p className="bg-green-100 text-green-800 text-xs font-bold rounded px-2 py-1 flex items-center justify-center" >Completed</p> : <p className="flex justify-center items-center bg-red-100 text-red-800 text-xs font-bold rounded px-2 py-1"> Incompleted</p>}
        
        
        {todo.isCompleted ? 
        <button className="cursor-pointer  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch(deleteTodo(todo._id))} >
            <FontAwesomeIcon icon={faTrash}/>
        </button>
        :
        <>
        <button className="cursor-pointer  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch(markTodoAsCompleted(todo._id))} >
            <FontAwesomeIcon icon={faCheck}/>    
        </button>
        <button className="cursor-pointer  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>dispatch(deleteTodo(todo._id))} >
            <FontAwesomeIcon icon={faTrash}/>
        </button>
        </>
        }
        </div>
        </div>

    </li>
 );   
}