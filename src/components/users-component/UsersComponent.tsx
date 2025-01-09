import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getAll} from "../../services/api.service.ts";
import {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import UserComponent from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAll<IBaseResponseModel & { users: IUser[] }>('/users')
            .then(({users})=> setUsers(users))
    }, []);
    return (
        <div>
            {
                users.map(user=><UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};