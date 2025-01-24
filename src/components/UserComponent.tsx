import {memo} from "react";

export const UserComponent = memo(() => {
    console.log('user');
    return (
        <div>
            user
        </div>
    );
});
// не буде рендеритись, якщо він не буде змінюватись

