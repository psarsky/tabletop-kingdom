import { Container } from "@mui/material";

import { Outlet } from "react-router-dom";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const Layout = () => {
	return (
		<Container sx={{ minHeight: "100vh", overflow: "auto" }}>
			<Header />
			<Outlet />
			<Footer />
		</Container>
	);
};

export default Layout;
