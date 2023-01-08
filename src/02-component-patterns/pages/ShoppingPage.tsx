import { ProductCard } from "../components";
import { ProductImage } from "../components/ProductImage";
import { ProductTitle } from "../components/ProductTitle";
import { ProductButtons } from "../components/ProductButtons";

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
				<ProductCard product={{ id: "1", title: "Tomy app" }}>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
					{/* <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
				</ProductCard>
			</div>
		</div>
	);
}

export default ShoppingPage;
