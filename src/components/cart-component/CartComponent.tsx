import {ICart} from "../../models/ICart.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";
import './CartComponent.css'
interface ICartProps {
    cart: ICart;
}

const CartComponent = ({cart}:ICartProps) => {
    return (
        <div>
            <h3>Cart Id: {cart.id} - Total: {cart.total} $</h3>
        <div className='carts'>

            {cart.products.map(product => <ProductComponent key={product.id} product={product}/>)}
        </div>
        </div>
    );
};

export default CartComponent;