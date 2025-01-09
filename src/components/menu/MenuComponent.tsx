
import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/users'}>Users page</Link></li>
            <li><Link to={'/posts'}>Posts page</Link></li>
        </ul>
    );
};
