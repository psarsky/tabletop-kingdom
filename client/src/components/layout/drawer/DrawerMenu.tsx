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
	return (
		<>
			{drawerOpen && (
				<DrawerCloseButton onClick={() => setDrawerOpen(false)}>
					<CloseIconButton />
				</DrawerCloseButton>
			)}
			<Drawer open={drawerOpen}>
				<ButtonContainer>
					<DrawerButton onClick={() => setDrawerOpen(false)} component={Link} to="/">
						Home
					</DrawerButton>
					<DrawerDivider variant="middle" />
					<DrawerButton onClick={() => setDrawerOpen(false)} component={Link} to="/products">
						Products
					</DrawerButton>
					<DrawerDivider variant="middle" />
					<DrawerButton onClick={() => setDrawerOpen(false)} component={Link} to="/user">
						Account
					</DrawerButton>
				</ButtonContainer>
			</Drawer>
		</>
	);
}

export default DrawerMenu;
