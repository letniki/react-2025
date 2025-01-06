import {simpsons} from "../../data/Simpsons.ts";
import {CharacterComponent} from "../characterComponent/CharacterComponent.tsx";


export const FamilyComponent = () => {

    return (
        <div>
            {simpsons.map((simpson,index)=><CharacterComponent simpson={simpson} key={index}>{simpson.info}</CharacterComponent>)}
        </div>
    );
};

