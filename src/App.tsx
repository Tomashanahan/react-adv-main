import { Navigation } from "./routes/Navigation";
import { ProductProvider } from "./02-component-patterns/context/ProductContext";

function App() {
	return (
		<>
			<ProductProvider>
				<Navigation />
			</ProductProvider>
		</>
	);
}

export default App;
