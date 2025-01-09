import {IUser} from "../../models/IUser.ts";

interface IUserProps {
    user: IUser;
}

const UserComponent = ({user}:IUserProps) => {
    return (
        <div>
            <h2>{user.id}-{user.firstName} {user.lastName}</h2>
            <p>Age:{user.age}</p>
        </div>
    );
};

export default UserComponent;