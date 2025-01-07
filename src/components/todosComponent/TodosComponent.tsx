import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {TodoComponent} from "../todoComponent/TodoComponent.tsx";
import {getTodos} from "../../services/api.service.tsx";


export const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
       getTodos()
           .then((response) => setTodos(response))
    }, []);
    return (
        <div>
            {todos.map(todo => (<TodoComponent key={todo.id} todo={todo}/>))}
        </div>
    );
};

