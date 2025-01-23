import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
	ButtonContainer,
	DrawerButton,
	DrawerCloseButton,
	DrawerDivider,
} from "../../../styles/layout/DrawerStyle";
import { useUIContext } from "../../../context/UIContext";
import theme from "../../../util/theme";

function DrawerMenu() {
	const { drawerOpen, setDrawerOpen } = useUIContext();
	return (
		<Fragment>
			{drawerOpen && (
				<DrawerCloseButton onClick={() => setDrawerOpen(false)}>
					<CloseIcon
						sx={{
							fontSize: "2.5rem",
							color: theme.palette.secondary.main,
						}}
					/>
				</DrawerCloseButton>
			)}
			<Drawer open={drawerOpen}>
				<ButtonContainer>
					<DrawerButton
						onClick={() => setDrawerOpen(false)}
						component={Link}
						to="/"
					>
						Home
					</DrawerButton>
					<DrawerDivider variant="middle" />
					<DrawerButton
						onClick={() => setDrawerOpen(false)}
						component={Link}
						to="/products"
					>
						Products
					</DrawerButton>
					<DrawerDivider variant="middle" />
					<DrawerButton
						onClick={() => setDrawerOpen(false)}
						component={Link}
						to="/categories"
					>
						Categories
					</DrawerButton>
					<DrawerDivider variant="middle" />
					<DrawerButton
						onClick={() => setDrawerOpen(false)}
						component={Link}
						to="/user"
					>
						Account
					</DrawerButton>
				</ButtonContainer>
			</Drawer>
		</Fragment>
	);
}

export default DrawerMenu;
