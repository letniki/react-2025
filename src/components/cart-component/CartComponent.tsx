import {ICart} from "../../models/ICart.ts";

interface ICartProps {
    cart: ICart;
}

const CartComponent = ({cart}:ICartProps) => {
    return (
        <div>
            {cart.id}-{cart.total}
        </div>
    );
};

export default CartComponent;