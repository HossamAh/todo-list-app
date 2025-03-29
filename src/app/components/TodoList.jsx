import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

export default function TodoList({completedTodos,incompletedTodos,onCompletedClicked,onDeleteClicked,onCreateClicked}){
    
    
    return (
        <div>
            <h1>My Todos</h1>
            <NewTodoForm onCreateClicked={onCreateClicked}/>
            <h3>Completed:</h3>
            {completedTodos.map((todo)=>
                <TodoListItem key={todo.id} todo={todo}  onDeleteClicked={onDeleteClicked}/>
            )
            }
            <h3>Incompleted:</h3>
            {incompletedTodos.map((todo)=>
                <TodoListItem key={todo.id} todo={todo} onCompletedClicked={onCompletedClicked} />
            )
            }
            
        </div>
    );
}