import {ITodo} from "../../models/ITodo.ts";
import "./TodoComponent.css"
interface ITodoComponentProps {
    todo:ITodo
}

export const TodoComponent = ({todo}: ITodoComponentProps) => {

    return (
        <div className="block">
            <h3>Id: {todo.id}. {todo.todo}</h3>
           <p>UserId: {todo.userId}</p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </div>
    );
};

