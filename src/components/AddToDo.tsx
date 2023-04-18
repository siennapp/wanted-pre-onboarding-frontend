import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { createTodoApi } from "../api/todoApi";

function AddToDo ({
    setFetching
}:{
    setFetching: React.Dispatch<React.SetStateAction<boolean>>
}){
    
    const [toDo, setToDo] = useState({ todo:''});
   
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const{value} = event.currentTarget;
        setToDo({todo:value});
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();
        
        if(toDo.todo === '') return false; 
       
        createTodoApi(toDo).then((res)=>{ setFetching(true)});
        setToDo({todo:''});
      
    }
    
    return(
        <form className="todo-add-form" onSubmit={onSubmit}>
            <input 
                type="text"
                value={toDo.todo}
                placeholder="add to do item"
                data-testid="new-todo-input" 
                onChange={onChange}
            />
            <button data-testid="new-todo-add-button"><AiOutlinePlus size="20"/></button>
        </form>

    )
}
export default AddToDo;