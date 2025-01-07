import {ITodo} from "./ITodo.ts";

export interface ITodos {
    todos: ITodo[];
    total: number;
    skip: number;
    limit: number;
}