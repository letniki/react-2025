import {IUser} from "../../models/IUser.ts";

type UserComponentPropType = {
    user:IUser
}

export const UserComponent = ({user} :UserComponentPropType) => {
    return (
        <div>
            {user.id}. {user.name}
        </div>
    );
};

