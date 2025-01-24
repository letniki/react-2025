import {useContext} from "react";
import {MyContext} from "../context/ContextProvider.tsx";
import './AA.css'
export const AA = () => {
     const {theme} = useContext(MyContext);
    return (
        <div className={theme}>
            {theme}
        </div>
    );
};

