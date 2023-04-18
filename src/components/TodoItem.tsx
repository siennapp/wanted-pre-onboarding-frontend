import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck, AiOutlineClose, AiFillEdit } from "react-icons/ai"
import { useEffect, useState } from "react";
import { todoProps } from "../types/todo.types";

interface dataProps {
    data:todoProps,
    onDelete: (id: number) => void;
    onUpdate: (id: number, newTodo: any) => void;
}

function TodoItem({data, onDelete, onUpdate}: dataProps){
    const [isComplete, setComplete] = useState(data?.isCompleted);
    const [newText, setNewText ] = useState(data?.todo);
    
    // todo 수정 여부
    const [isEdit, setEdit] = useState(false);
    // todo update flag
    const [isSubmit, setSubmit ] = useState(false);
   
    
    const onDeleteHandler = () =>{
        onDelete(data.id);
    }
    const onUpdateHandler = (todo:{
        todo: string;
        isCompleted: boolean;
    }) =>{
        onUpdate(data.id, todo);
    }
  
    useEffect(()=>{
        if(isSubmit){
            const newTodos= { todo: newText, isCompleted:isComplete }
            onUpdateHandler(newTodos);
            setSubmit(false);
            setEdit(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isSubmit]);

  
    const onTodoEdit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(newText === '') return false; 
        setSubmit(true);
    }
    const onTodoChange = (event: React.FormEvent<HTMLInputElement>) => {
        const{value} = event.currentTarget;
        setNewText(value);
    }
    const onCompleteToggle = (event: React.FormEvent<HTMLInputElement>)=>{
        const{checked } = event.currentTarget;
        setComplete(checked);
        setSubmit(true);
    }
    const onModify =() => {
        setEdit(true);
    }
    const onCancel= () => {
        setNewText (data.todo)
        setEdit(false);
    }
   
    return (
        <li className="todo-item">
            <input type="checkbox"
                id={`check${data.id}`} 
                name="isCompleted" 
                checked={data.isCompleted} 
                onChange={onCompleteToggle}
            />
             <label htmlFor={`check${data.id}`}><AiOutlineCheck size={12}/></label>
            {isEdit?(
                <div>
                    <form onSubmit={onTodoEdit}>
                        <input 
                            type="text" 
                            name="todo" 
                            data-testid="modify-input" 
                            value={newText} 
                            onChange={onTodoChange}
                        />
                        <button data-testid="modify-submit" type="submit"><AiFillEdit size="18" /></button>
                    </form>
                    <button data-testid="cancel-button" onClick={onCancel}><AiOutlineClose size="18" /></button>
                </div>
            ):(
                <div>
                    <span className="todo-text">{data.todo}</span>
                    <button data-testid="modify-button" onClick={onModify}><AiOutlineEdit size="18" /></button>
                    <button data-testid="delete-button" onClick={onDeleteHandler}><AiOutlineDelete size="18" /></button>
                </div>
            )}
        </li>
    )
}

export default TodoItem;