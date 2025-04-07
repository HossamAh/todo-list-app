import { useDispatch, useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { useEffect } from "react";
import { loadTodos } from "../Thunks/todosThunk";
import { getCompletedTodos,getIncompletedTodos, getTodosLoading } from "../selectors";

export default function TodoList({}) {
  // const todos = useSelector(getTodos);
  let completedTodos = useSelector(getCompletedTodos);
  let incompletedTodos = useSelector(getIncompletedTodos);
  const dispatch = useDispatch();
  const loadingState = useSelector(getTodosLoading);
  
  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <div className="h-full flex flex-col items-start justify-start gap-6 ">
      
      <NewTodoForm />
      { loadingState.completed && loadingState?.successful ?
        <div className="flex flex-col -mx-4 w-full">
          <div className="w-full  p-4">
            <h3 className="text-lg font-bold mb-2">Completed:</h3>
            <ul className="list-none p-4 w-full">
              {completedTodos.map((todo) => (
                <TodoListItem key={todo._id} todo={todo} />
              ))}
            </ul>
          </div>
          
          <div className="w-full  p-4">
            <h3 className="text-lg font-bold mb-2">Incompleted:</h3>
            <ul className="list-none p-4 w-full">
              {incompletedTodos.map((todo) => (
                <TodoListItem key={todo._id} todo={todo} />
              ))}
            </ul>
          </div>
        </div>
      :<p>Loading ...</p>
      }
    </div>
  );
}
