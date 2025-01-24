import {IUser} from "../models/IUser.ts";


interface IUserComponentProps {
    user:IUser
}

export const UserComponent = ({user}:IUserComponentProps) => {
    return (
        <div>
            {user.id} - {user.name}
        </div>
    );
};

