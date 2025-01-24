import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

export const UsersComponent = () => {
    console.log('users');
    const [users, setUsers] = useState([]);

    const arr: number[] = useMemo(()=>{
       return [1, 2, 3, 4, 5];
    }, []);
    // буде виконана функція яка поверне в точку arr масив [1, 2, 3, 4, 5]
    // і він буде мемомізований (закешований)

    const foo = useCallback(() =>{
        console.log('test');
    }, [])
    // за допомогою useCallback цю функцію закешували, ця функція відпрацює один раз.
    // Ще один раз UserComponent не відпрацьовує.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value =>setUsers(value))
        return ()=>{
            console.log('unsubscribe');
        }
    }, []);
    return (
        <div>
            users component
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

