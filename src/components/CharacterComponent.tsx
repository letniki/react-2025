import {ISimpsons} from "../models/ISimpsons.ts";

interface CharacterComponentProps {
    simpson: ISimpsons;
    children: React.ReactNode;
}

export const CharacterComponent = ({simpson,children}:CharacterComponentProps) => {
    return (
        <div>
            <h1>{simpson.name} {simpson.surname}</h1>
            <h3>Age: {simpson.age}</h3>
            <p>{children}</p>
            <img src={simpson.photo} alt={simpson.name}/>
        </div>
    );
};