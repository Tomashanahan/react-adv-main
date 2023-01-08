import styles from "../styles/styles.module.css";

import { ProductProps } from "../interfaces";

function ProductCard({ children }: ProductProps) {
	return <div className={styles.productCard}>{children}</div>;
}

export default ProductCard;
