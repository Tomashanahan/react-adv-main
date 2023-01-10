import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

interface Props {
	img?: string;
	className?: string;
	style?: React.CSSProperties;
}

export function ProductImage({ img, className, style }: Props) {
	const { product } = useContext(ProductContext);
	let imgToShow: string;

	if (img) imgToShow = img;
	else if (product.img) imgToShow = product.img;
	else imgToShow = noImage;

	return <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow} alt="Coffee" />;
}
