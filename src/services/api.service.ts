import {ITodos} from "../models/ITodos.ts";

const baseUrl = import.meta.env.VITE_API_URL;

export const getTodos = async ():Promise<ITodos> =>{
    return await fetch(baseUrl + '/todos')
        .then(value=>value.json())
}