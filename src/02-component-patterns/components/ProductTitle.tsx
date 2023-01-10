import styles from "../styles/styles.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

interface Props {
	title?: string;
	className?: string;
	style?: React.CSSProperties;
}

export function ProductTitle({ title, className, style }: Props) {
	const { product } = useContext(ProductContext);

	return (
		<span style={style} className={`${styles.productDescription} ${className}`}>
			{title ? title : product.title}
		</span>
	);
}
