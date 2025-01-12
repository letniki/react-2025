import {IUserResponseModel} from "../models/IUserResponseModel.ts";

const baseUrl = "https://dummyjson.com";

export const getUsers = async (page: string) :Promise<IUserResponseModel> =>{
    if(+page<0){
        return await fetch(baseUrl + '/users')
            .then(res => res.json())
    }
    const limit: number = 30;
    const skip: number = limit * (+page) - limit;
    return await fetch(baseUrl + '/users'+'?skip=' + skip)
        .then(res => res.json())
}