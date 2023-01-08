import { createContext } from "react";
import useProduct from "../hooks/useProduct";
import { Product } from "../interfaces/Product";
import photo from "../assets/coffee-mug.png";

interface ProductContextProps {
	counter: number;
	product: Product;
	increaseBy: (value: number) => void;
}

const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);

export const ProductProvider: React.FC = ({ children }) => {
	const { counter, increaseBy } = useProduct();

	const product: Product = { id: "1", title: "Tomy provider", img: photo };

	return <ProductContext.Provider value={{ increaseBy, counter, product }}>{children}</ProductContext.Provider>;
};

export default ProductContext;
