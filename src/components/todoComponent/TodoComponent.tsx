import {ITodo} from "../../models/ITodo.ts";
import './TodoComponent.css'
interface TodoComponentProps {
    todo: ITodo
}
export const TodoComponent = ({todo}:TodoComponentProps) => {
    return (
        <div className='block'>
            <h3>{todo.id}. {todo.title}</h3>
            <p>UserId: {todo.userId}</p>
            <p>Completed: <b>{todo.completed ? "Yes" : "No"}</b></p>
        </div>
    );
};
