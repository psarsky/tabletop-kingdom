import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";
import DrawerMenu from "../components/layout/drawer/DrawerMenu";
import SearchBox from "../components/layout/search/SearchBox";

function Layout(): JSX.Element {
	useEffect(() => {
		document.title = "Tabletop Kingdom";
	}, []);

	return (
		<>
			<Header />
            <Outlet />
            <Footer />
            <DrawerMenu />
            <SearchBox />
		</>
	);
}

export default Layout;
