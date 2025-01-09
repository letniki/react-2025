import {IProduct} from "./IProducts.ts";

export interface ICart {
	id: number;
	products: IProduct[];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}
