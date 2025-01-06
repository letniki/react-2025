import {ISimpson} from "../../models/ISimpson.ts";

interface CharacterComponentProps {
    simpson: ISimpson;
    children: React.ReactNode;
}

export const CharacterComponent = ({simpson,children}:CharacterComponentProps) => {
    return (
        <div className="justify-items-center bg-amber-50 text-xl">
            <img src={simpson.photo} alt={simpson.name}/>
            <h1 className="font-bold">{simpson.name} {simpson.surname}</h1>
            <h3>Age: {simpson.age}</h3>
            <p>{children}</p>

        </div>
    );
};