import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";

import {
	ButtonContainer,
	CloseIconButton,
	DrawerButton,
	DrawerCloseButton,
	DrawerDivider,
} from "../../../styles/layout/DrawerStyle";
import { useUIContext } from "../../../context/UIContext";

function DrawerMenu(): JSX.Element {
	const { drawerOpen, setDrawerOpen } = useUIContext();

	const handleDrawerClose = () => setDrawerOpen(false);

	return (
		<>
			{drawerOpen && (
				<DrawerCloseButton onClick={handleDrawerClose}>
					<CloseIconButton />
				</DrawerCloseButton>
			)}
			<Drawer open={drawerOpen}>
				<ButtonContainer>
					<DrawerButton onClick={handleDrawerClose} component={Link} to="/">
						Home
					</DrawerButton>
					<DrawerDivider variant="middle" />
					<DrawerButton onClick={handleDrawerClose} component={Link} to="/products">
						Products
					</DrawerButton>
					<DrawerDivider variant="middle" />
					<DrawerButton onClick={handleDrawerClose} component={Link} to="/user">
						Account
					</DrawerButton>
				</ButtonContainer>
			</Drawer>
		</>
	);
}

export default DrawerMenu;
