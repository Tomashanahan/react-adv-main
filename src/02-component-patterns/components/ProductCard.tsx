import styles from "../styles/styles.module.css";
import "../styles/custom-styles.css";

import { ReactElement } from "react";
import { Product } from "../interfaces/Product";
import { ProductProvider } from "../context/ProductContext";

export interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
}

function ProductCard({ children, className }: Props) {
	return (
		<ProductProvider>
			<div className={`${styles.productCard} ${className}`}>{children}</div>
		</ProductProvider>
	);
}

export default ProductCard;
