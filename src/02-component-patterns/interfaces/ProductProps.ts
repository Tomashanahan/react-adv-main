import { ReactElement } from "react";
import { Product } from "./Product";

export interface ProductProps {
	product: Product;
	children?: ReactElement | ReactElement[];
}
