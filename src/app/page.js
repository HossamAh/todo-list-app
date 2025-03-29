'use client'
import { useState } from 'react';
import TodoList from './components/TodoList.jsx'
export default function Home() {
  const [completedTodos,setCompletedTodos] = useState([
    {id:1,text:"task one",isCompleted:true},
    {id:2,text:"task two",isCompleted:true},
    {id:3,text:"task three",isCompleted:true},
    {id:4,text:"task four",isCompleted:true},
  ]);
  const [incompletedTodos,setIncompletedTodos] = useState([
    {id:1,text:"task one",isCompleted:false},
    {id:2,text:"task two",isCompleted:false},
    {id:3,text:"task three",isCompleted:false},
    {id:4,text:"task four",isCompleted:false},
  ]);


  function onDeleteClicked(id){
          console.log("delete clicked");
          setCompletedTodos(completedTodos.filter((todo)=>todo.id !== id));
          console.log(completedTodos);
      }
      function onCompletedClicked(id){
          let targetIndex =incompletedTodos.findIndex((todo)=>todo.id === id);
          let newTodo = {...incompletedTodos[targetIndex],id:completedTodos[completedTodos.length-1].id+1,isCompleted:true};
          setCompletedTodos([...completedTodos,newTodo]);
          console.dir(completedTodos,{deptth:null});
          setIncompletedTodos(incompletedTodos.filter((todo)=>todo.id !== id));
      }
      function onCreateClicked(text){
          console.log(text.value);
          let todo = {id:incompletedTodos[incompletedTodos.length -1].id+1 , text:text.value,isComplete:false};
          setIncompletedTodos((prevState)=>[...prevState,todo]);
          text.value = '';
      }
  return (
    <div className="bg-white p-4 text-black space-y-4">
      <TodoList
    completedTodos={completedTodos}
    incompletedTodos={incompletedTodos}
    onCompletedClicked={onCompletedClicked}
    onDeleteClicked={onDeleteClicked}
    onCreateClicked={onCreateClicked}
/>
    </div>
  );
}
