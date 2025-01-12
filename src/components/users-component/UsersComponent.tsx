import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.ts";
import {IUserResponseModel} from "../../models/IUserResponseModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [searchParams] = useSearchParams({page:'1'});
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage)
            .then(({users}:IUserResponseModel) => setUsers(users))
    }, [searchParams]);
    return (
        <div>
            {
                users.map(user=><UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

