import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ICart} from "../../models/ICart.ts";
import {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import CartComponent from "../cart-component/CartComponent.tsx";
import {cartService} from "../../services/api.service.tsx";

const CartsComponent = () => {
    const [carts, setCarts] = useState<ICart[]>([])
    const {id} = useParams();
    useEffect(() => {
        if(id){


      cartService.getCartOfUser(id)
            .then(({carts} :ICartResponseModel)=>setCarts(carts))
        }
    }, [id]);
    return (
        <div>
            {carts.map(cart=><CartComponent key={cart.id} cart={cart}/>)}
        </div>
    );
};

export default CartsComponent;