import { useEffect, Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/layout/header/Header";

function Layout(): JSX.Element {
	useEffect(() => {
		document.title = "Tabletop Kingdom";
	}, []);

	return (
		<Fragment>
			<Header />
            <Outlet />
		</Fragment>
	);
}

export default Layout;
