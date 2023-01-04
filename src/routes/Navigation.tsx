import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import { routes } from "./routes";

export const Navigation = () => {
	return (
		<Suspense fallback={null}>
			<BrowserRouter>
				<div className="main-layout">
					<nav>
						<ul>
							{routes.map(({ to, name }) => (
								<li key={`${to} + ${Math.random()}`}>
									<NavLink to={to} className={({ isActive }) => (isActive ? "nav-active" : "")}>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<Routes>
						{routes.map(({ to, path, Component }) => (
							<Route key={`${to} + ${Math.random()}`} path={path} element={<Component />} />
						))}

						<Route path="/*" element={<Navigate to={routes[0].to} replace />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Suspense>
	);
};
