import { lazy, LazyExoticComponent } from "react";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";

type JsxComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component?: LazyExoticComponent<JsxComponent> | JsxComponent;
	name: string;
}

export const routes: Route[] = [
	{
		to: "/shoppingPage",
		path: "shoppingPage",
		Component: ShoppingPage,
		name: "ShoppingPage",
	},
	{
		to: "/about",
		path: "about",
		// Component: <h1>,
		name: "About",
	},
	{
		to: "/users",
		path: "users",
		// Component: <h1>,
		name: "Users",
	},
];
