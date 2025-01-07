import {ITodo} from "../models/ITodo.ts";

export const getTodos = async ():Promise<ITodo[]> =>{
    return await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(value => value.json());
}