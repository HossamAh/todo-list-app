import { useDispatch, useSelector } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { useEffect } from "react";
import { loadTodos } from "../Thunks/todosThunk";
import {
  getCompletedTodos,
  getIncompletedTodos,
  getTodosLoading,
} from "../selectors";

export default function TodoList() {
  const completedTodos = useSelector(getCompletedTodos) || []; // Fallback to an empty array
  const incompletedTodos = useSelector(getIncompletedTodos) || []; // Fallback to an empty array
  const dispatch = useDispatch();
  const loadingState = useSelector(getTodosLoading) || "idle"; // Fallback to 'idle'
  const { user, loadingStatus } = useSelector((state) => state.user) || {}; // Fallback to an empty object

  useEffect(() => {
    console.log(user);
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <div className="h-full flex flex-col items-start justify-start gap-6">
      {user ? (
        <>
          <NewTodoForm />
          {loadingState === "completed" ? (
            <div className="flex flex-col  w-full">
              <div className="w-full p-4">
                <h3 className="text-lg font-bold mb-2">Completed:</h3>
                <ul className="list-none p-4 w-full">
                  {completedTodos.map((todo) => (
                    <TodoListItem key={todo._id} todo={todo} />
                  ))}
                </ul>
              </div>

              <div className="w-full p-4">
                <h3 className="text-lg font-bold mb-2">Incompleted:</h3>
                <ul className="list-none p-4 w-full">
                  {incompletedTodos.map((todo) => (
                    <TodoListItem key={todo._id} todo={todo} />
                  ))}
                </ul>
              </div>
            </div>
          ) : loadingState === "failed" ? (
            <p>Error</p>
          ) : (
            <p>Loading ...</p>
          )}
        </>
      ) : (
        <p>Please log in to view your todos.</p>
      )}
    </div>
  );
}