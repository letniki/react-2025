import {FC} from "react";
import {ICar} from "../../models/ICar.ts";
import './CarComponent.css'
interface ICarProps {
    car:ICar
}

export const CarComponent:FC<ICarProps> = ({car}) => {
    return (
        <div className='block'>
            <div>{car.id}. {car.brand}</div>
            <div> {car.year} year</div>
            <div>{car.price}$</div>
        </div>
    );
};

