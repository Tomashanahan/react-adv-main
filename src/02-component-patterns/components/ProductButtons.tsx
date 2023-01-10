import styles from "../styles/styles.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

export function ProductButtons({ className }: { className?: string }) {
	const { increaseBy, counter } = useContext(ProductContext);

	return (
		<div className={`${styles.buttonsContainer} ${className}`}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<div className={styles.countLabel}>{counter}</div>
			<button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
				+
			</button>
		</div>
	);
}
