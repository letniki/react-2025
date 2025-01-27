import {IUser} from "../models/IUser.ts";
import {IPost} from "../models/IPost.ts";
import {IComment} from "../models/IComment.ts";

const baseUrl ='https://jsonplaceholder.typicode.com';

export const getAllUsers = async(): Promise<IUser[]>=>{
    return await fetch(`${baseUrl}/users`)
        .then(value => value.json());
}
export const getAllPosts = async(): Promise<IPost[]>=>{
    return await fetch(`${baseUrl}/posts`)
        .then(value =>value.json());
}
export const getAllComments = async(): Promise<IComment[]>=>{
    return await fetch(`${baseUrl}/comments`)
        .then(value => value.json());
}