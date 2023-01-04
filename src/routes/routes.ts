import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"));

type JsxComponent = () => JSX.Element;

interface Route {
	to: string;
	path: string;
	Component: LazyExoticComponent<JsxComponent> | JsxComponent;
	name: string;
}

export const routes: Route[] = [
	{
		path: "/lazyLoad/*",
		to: "/lazyLoad/",
		Component: LazyLayout,
		name: "Lazy Layout",
	},
	{
		to: "/noLazy",
		path: "noLazy",
		Component: NoLazy,
		name: "No Lazy",
	},
];
