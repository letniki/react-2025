import {FC, memo} from "react";

export const UserComponent:FC<{foo:()=>void}> = memo(() => {
    console.log('user');
    return (
        <div>
            user
        </div>
    );
});
// memo буде кешувати функцію, тільки якщо в неї не змінюються пропси, але тут пропси змінюються
// не буде рендеритись, якщо він не буде змінюватись

