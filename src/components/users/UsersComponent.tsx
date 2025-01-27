import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {userSliceActions} from "../../redux/slices/userSlice/userSlice.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {UserComponent} from "../user/UserComponent.tsx";

export const UsersComponent = () => {
    const {users} = useAppSelector(({userSlice})=>userSlice);
    const dispatch =useAppDispatch();
    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, []);
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

