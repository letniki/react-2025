import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {TodoComponent} from "../todoComponent/TodoComponent.tsx";


export const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then((data: ITodo[]) => setTodos(data))
    }, []);
    return (
        <div>
            {todos.map(todo => (<TodoComponent key={todo.id} todo={todo}/>))}
        </div>
    );
};

