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
    <div className="h-full flex flex-col items-center justify-start gap-6 ">
      <h1>My Todos</h1>
      <NewTodoForm />
      { loadingState.completed && loadingState?.successful &&
        <div className="flex justify-between w-2/3 mx-auto">
          <div className="flex flex-col items-center justify-start">
            <h3>Completed:</h3>
            {completedTodos.map((todo) => (
              <TodoListItem key={todo._id} todo={todo} />
            ))}
          </div>
          <div className="flex flex-col items-center justify-start">
            <h3>Incompleted:</h3>
            {incompletedTodos.map((todo) => (
              <TodoListItem key={todo._id} todo={todo} />
            ))}
          </div>
        </div>
      }
      {!loadingState.completed && <p>Loading ...</p>
      }
    </div>
  );
}
