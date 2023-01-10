import styles from "../styles/styles.module.css";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

interface Props {
	className?: string;
	style?: React.CSSProperties;
}

export function ProductButtons({ className, style }: Props) {
	const { increaseBy, counter } = useContext(ProductContext);

	return (
		<div style={style} className={`${styles.buttonsContainer} ${className}`}>
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
