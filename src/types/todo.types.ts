export interface newTodoProps{
    todo: string;
    isCompleted: boolean;
}
export interface todoProps {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}
export interface todoListProps {
    data:todoProps,
    onDelete: (id: number) => void;
    onUpdate: (id: number, newTodo: any) => void;
}