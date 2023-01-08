import styles from "../styles/styles.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

export function ProductTitle({ title }: { title?: string }) {
	const { product } = useContext(ProductContext);

	return <span className={styles.productDescription}>{title ? title : product.title}</span>;
}
