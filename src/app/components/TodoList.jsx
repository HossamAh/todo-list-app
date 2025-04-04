import { useDispatch, useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

export default function TodoList({}){
    const todos = useSelector(state => state.todos.values);
    let completedTodos = todos.filter(todo=>todo.isCompleted===true);
    let incompletedTodos = todos.filter(todo=>todo.isCompleted===false);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h1>My Todos</h1>
            <NewTodoForm />
            <h3>Completed:</h3>
            {completedTodos.map((todo)=>
                <TodoListItem key={todo.id} todo={todo}  />
            )
            }
            <h3>Incompleted:</h3>
            {incompletedTodos.map((todo)=>
                <TodoListItem key={todo.id} todo={todo}  />
            )
            }
            
        </div>
    );
}