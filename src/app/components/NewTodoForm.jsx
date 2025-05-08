'use client'
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {createTodo} from "../Thunks/todosThunk";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width:"70%",
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#app');

export default function NewTodoForm({}){
      const [modalIsOpen, setIsOpen] = useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    const inputRef = useRef('');
    const [datetime,setDatetime] = useState(new Date());
    const dispatch = useDispatch();
    return (

        <>

            <button className="cursor-pointer  bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
                <FontAwesomeIcon icon={faPlus} />
            </button>

        <Modal
            isOpen={modalIsOpen}
            onAfterOpen = {afterOpenModal}
            OnRequestClose = {closeModal}
            style={customStyles}
            contentLabel="Todo Form"
        >
            <div className="flex mb-4 w-full justify-center items-center flex-col gap-4">
                <input className="w-[80%] p-2 pl-10 text-sm text-gray-700 bg-white rounded" placeholder="Add a new todo..." type="text" ref={inputRef} />
                <DateTimePicker
                label="deadline picker"
                onChange={(newValue) => setDatetime(newValue)}
                />
                <button className="cursor-pointer  bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" 
                onClick={()=>{
                    dispatch(createTodo({text:inputRef.current.value,deadline:datetime,isCompleted:false}));
                    inputRef.current.value = "";
                    closeModal();
                }}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                
            </div>
        </Modal>    
        </>
    );
    
}