import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {getTodos} from "../../services/api.service.ts";
import {TodoComponent} from "../todoComponent/TodoComponent.tsx";

export const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        getTodos()
            .then(({todos})=> setTodos(todos)
            )
    }, []);
    return (
        <div>
            {
                todos.map(todo=><TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

