import { useCallback, useEffect, useState } from "react";
import { getTodosApi } from "../../api/todoApi"; 
import AddToDo from "../../components/AddToDo"; 
import TodoList from "../../components/TodoList";
import { todoProps } from "../../types/todo.types"; 

function Todo(){
    //api실행시 isFetching true값으로 변환하여 useEffect 실행
    const [isFetching, setFetching] = useState(true); 
    const [todos, setTodos ] = useState<todoProps[]>([]);
   
    const getTodos = useCallback(async () => {
        const res = await getTodosApi();
        setTodos(res.data);
      }, []);
   
      useEffect(() => {
        if(isFetching){
            getTodos();
            setFetching(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [isFetching]);

    return(
        <div className="container">
            <div className="wrap">
                <div className="todo-box">
                    <h1>Todo List</h1>
                    <AddToDo setFetching={setFetching} />
                    <TodoList todos={todos} setFetching={setFetching} />
                </div>
            </div>
        </div>
    )
}
export default Todo;