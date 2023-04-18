import { deleteTodoApi, updateTodosApi } from "../api/todoApi";
import { todoProps } from "../types/todo.types";
import TodoItem from "./TodoItem";

function TodoList({ todos , setFetching }:{
    todos: todoProps[];
    setFetching: React.Dispatch<React.SetStateAction<boolean>>;
  }){

    const onDelete = (id: number) => {
        deleteTodoApi(id).then(()=> setFetching(true));
    }
    const onUpdate = ( id: number, newTodo: any) => {
        updateTodosApi(id,newTodo).then(()=>{
            setFetching(true);
        })
    }

    return (
        <ul>
           {todos.map((data) => {
                return(
                    <TodoItem 
                        key={data.id}
                        data={data}
                        onDelete={onDelete} 
                        onUpdate={onUpdate}
                    /> 
                )
            })}
        </ul>
    )

}
export default TodoList;