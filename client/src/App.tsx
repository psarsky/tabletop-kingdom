import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import Product from "./pages/Product.tsx";
import Cart from "./pages/Cart.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Orders from "./pages/Orders.tsx";
import User from "./pages/User.tsx";
import NoPage from "./pages/NoPage.tsx";
import { UIProvider } from "./context/UIContext.tsx";
import { ProductSearchProvider } from "./context/ProductSearchContext.tsx";

function App(): JSX.Element {
	return (
		<UIProvider>
			<ProductSearchProvider>
				<BrowserRouter>
					<Routes>
						<Route path={"/"} element={<Layout />}>
							<Route index element={<Home />} />
							<Route path={"/products"} element={<Products />} />
							<Route path={"/products/id/:id"} element={<Product />} />
							<Route path={"/register"} element={<Register />} />
							<Route path={"/login"} element={<Login />} />
							<Route path={"/user"} element={<User />} />
							<Route path={"/cart"} element={<Cart />} />
							<Route path={"/orders"} element={<Orders />} />
							<Route path={"*"} element={<NoPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ProductSearchProvider>
		</UIProvider>
	);
}

export default App;
