import {FC, memo} from "react";

export const UserComponent: FC<{ foo: () => void, arr?: number[] }> = memo(({arr}) => {
    console.log('user');
    console.log(arr);
    return (
        <div>
            user
        </div>
    );
});
// memo буде кешувати функцію, тільки якщо в неї не змінюються пропси, але тут пропси змінюються.

// Не буде рендеритись, якщо він не буде змінюватись

