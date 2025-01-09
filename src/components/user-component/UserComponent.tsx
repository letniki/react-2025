import {IUser} from "../../models/IUser.ts";
import "./UserComponent.css"
import {useNavigate} from "react-router-dom";
interface IUserProps {
    user: IUser
}

export const UserComponent = ({user}:IUserProps) => {
    const navigation = useNavigate();
    const onButtonClickNavigate =()=> {
        navigation('/users/'+ user.id + '/carts')
    }

    return (
        <div className="block">
            <h2>{user.id}. {user.firstName} {user.lastName}</h2>
            <p>Age:{user.age}</p>
            <button onClick={onButtonClickNavigate}>Click me</button>
        </div>
    );
};
