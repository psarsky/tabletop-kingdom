import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout.tsx";
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import Product from "./pages/Product.tsx";
import Categories from "./pages/Categories.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Orders from "./pages/Orders.tsx";
import User from "./pages/User.tsx";
import NoPage from "./pages/NoPage.tsx";
import { DrawerMenuProvider } from "./context/DrawerMenuContext.tsx";

function App(): JSX.Element {
    return (
		<DrawerMenuProvider>
			<BrowserRouter>
				<Routes>
					<Route path={"/"} element={<Layout />}>
						<Route index element={<Home />} />
						<Route path={"/products"} element={<Products />} />
						<Route path={"/products/:id"} element={<Product />} />
						<Route path={"/categories"} element={<Categories />} />
						<Route path={"/login"} element={<Login />} />
						<Route path={"/register"} element={<Register />} />
						<Route path={"/orders"} element={<Orders />} />
						<Route path={"/user"} element={<User />} />
						<Route path={"*"} element={<NoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</DrawerMenuProvider>
	);
}

export default App;
