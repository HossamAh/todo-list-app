export default function TodoListItem({todo,onCompletedClicked,onDeleteClicked}){
 return (
    <div>
        <h3>{todo.text}</h3>
        {todo.isCompleted &&  <p>Completed</p> }
        {todo.isCompleted ? 
        <button className="p-2 bg-red-600 rounded-2xl" onClick={()=>onDeleteClicked(todo.id)} >Delete </button>:
        <button className="p-2 bg-blue-600 rounded-2xl " onClick={()=>onCompletedClicked(todo.id)} >Mark as completed </button>
        }
    </div>
 );   
}