import api from "./api";

interface newTodoInterface {
    todo: string;
    isCompleted: boolean;
}
export const getTodosApi = async () => {
    const data = await api.get("/todos");
    return data;
};

export const createTodoApi = async (todo:any) => {
    const data = await api.post("/todos", todo);
    return data;
};


export const updateTodosApi = async (id: number, newTodo:newTodoInterface) => {
    const data = await api.put(`/todos/${id}`, newTodo);
    return data;
};

export const deleteTodoApi = async (id: number) => {
    const data = await api.delete(`/todos/${id}`);
    return data;
};