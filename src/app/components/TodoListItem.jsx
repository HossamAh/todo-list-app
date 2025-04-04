import { useDispatch } from "react-redux";
import { deleteTodo,markTodoAsCompleted } from "../todosSlice";
export default function TodoListItem({todo}){
    const dispatch = useDispatch();

    return (
    <div>
        <h3>{todo.text}</h3>
        {todo.isCompleted &&  <p>Completed</p> }
        {todo.isCompleted ? 
        <button className="p-2 bg-red-600 rounded-2xl" onClick={()=>dispatch(deleteTodo(todo.id))} >Delete </button>:
        <button className="p-2 bg-blue-600 rounded-2xl " onClick={()=>dispatch(markTodoAsCompleted(todo.id))} >Mark as completed </button>
        }
    </div>
 );   
}