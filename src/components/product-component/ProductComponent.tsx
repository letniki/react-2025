import {IProduct} from "../../models/IProducts.ts";
import './ProductComponent.css'
interface IProductProps {
    product: IProduct
}

export const ProductComponent = ({product}: IProductProps) => {
    return (
        <div>
            <div className='Productbox'>
                <h4>Title: {product.title}</h4>
                <p>Id: {product.id}. price: {product.price} $</p>

            <img className='image' src={product.thumbnail} alt={product.title}/>
            </div>
        </div>
    );
};

