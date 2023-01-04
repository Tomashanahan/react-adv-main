import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

const Lazy1 = lazy(() => import(/* webpackChunkName: "Lazy1" */"../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import(/* webpackChunkName: "Lazy2" */"../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "Lazy3" */"../01-lazyload/pages/LazyPage3"));

type JsxComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JsxComponent> | JsxComponent;
	name: string;
}

export const routes: Route[] = [
	{
		to: "/lazyPage1",
		path: "lazyPage1",
		Component: Lazy1,
		name: "Lazy-1",
	},
	{
		to: "/lazy2",
		path: "lazy2",
		Component: Lazy2,
		name: "Lazy-2",
	},
	{
		to: "/lazy3",
		path: "lazy3",
		Component: Lazy3,
		name: "Lazy-3",
	},
];
