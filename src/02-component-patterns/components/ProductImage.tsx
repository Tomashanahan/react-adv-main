import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

export function ProductImage({ img = "" }) {
	const { product } = useContext(ProductContext);
	let imgToShow: string;

	if (img) imgToShow = img;
	else if (product.img) imgToShow = product.img;
	else imgToShow = noImage;

	console.log("imgToShow:", imgToShow);
	return <img className={styles.productImg} src={imgToShow} alt="Coffee" />;
}
