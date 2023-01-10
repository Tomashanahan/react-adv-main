import styles from "../styles/styles.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

interface Props {
	title?: string;
	className?: string;
} 

export function ProductTitle({ title, className }: Props) {
	const { product } = useContext(ProductContext);

	return <span className={`${styles.productDescription} ${className}`}>{title ? title : product.title}</span>;
}
