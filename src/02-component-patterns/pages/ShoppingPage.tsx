import { ProductCard } from "../components";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import { ProductButtons } from "../components/ProductButtons";
import "../styles/custom-styles.css";

function ShoppingPage() {
	return (
		<div>
			<h1>ShoppingPage</h1>
			<hr />
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				<ProductCard product={{ id: "1", title: "Tomy app" }} className="bg-dark">
					<ProductImage />
					<ProductTitle className="text-white text-bold" />
					<ProductButtons className="custom-btn custom-countLabel" />
				</ProductCard>

				<ProductCard product={{ id: "2", title: "Tomy app" }}>
					<ProductImage />
					<ProductTitle title="Tomy" />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
}

export default ShoppingPage;
