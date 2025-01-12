import {IUser} from "../../models/IUser.ts";
import './UserComponent.css'
interface IUserProps {
    user:IUser
}

export const UserComponent = ({user}:IUserProps) => {
    return (
        <div className="block">
            <h2>{user.id}. {user.firstName} {user.lastName}</h2>
            <p>Age:{user.age}</p>
        </div>
    );
};

