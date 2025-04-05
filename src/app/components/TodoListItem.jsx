import { useDispatch } from "react-redux";
import { deleteTodo,markTodoAsCompleted } from "../Thunks/todosThunk";
export default function TodoListItem({todo}){
    const dispatch = useDispatch();

    return (
    <div className="flex flex-col items-center justify-center bg-gray-600 rounded-xl p-2 min-w-[200px] my-3">
        <h3>{todo.text}</h3>
        {todo.isCompleted &&  <p>Completed</p> }
        {todo.isCompleted ? 
        <button className="p-2 bg-red-600 rounded-2xl" onClick={()=>dispatch(deleteTodo(todo._id))} >Delete </button>:
        <button className="p-2 bg-blue-600 rounded-2xl " onClick={()=>dispatch(markTodoAsCompleted(todo._id))} >Mark as completed </button>
        }
    </div>
 );   
}