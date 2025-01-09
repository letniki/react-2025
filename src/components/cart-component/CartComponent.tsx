import {ICart} from "../../models/ICart.ts";
import {ProductComponent} from "../products-component/ProductComponent.tsx";

interface ICartProps {
    cart: ICart;
}

const CartComponent = ({cart}:ICartProps) => {
    return (
        <div>
            Cart Id: {cart.id} - Total: {cart.total}
            {cart.products.map(product => <ProductComponent key={product.id} product={product}/>)}
        </div>
    );
};

export default CartComponent;