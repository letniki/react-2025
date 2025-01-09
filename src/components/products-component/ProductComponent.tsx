import {IProduct} from "../../models/IProducts.ts";

interface IProductProps {
    product: IProduct
}

export const ProductComponent = ({product}: IProductProps) => {
    return (
        <div>
            Id: {product.id}. price: {product.price} $ Title: {product.title}
            <img src={product.thumbnail} alt={product.title}/>
        </div>
    );
};

