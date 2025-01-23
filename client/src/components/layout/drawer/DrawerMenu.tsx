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
import { useDrawerMenuContext } from "../../../context/DrawerMenuContext";
import theme from "../../../util/theme";

function DrawerMenu() {
	const { open, setOpen } = useDrawerMenuContext();
	return (
		<Fragment>
			{open && (
				<DrawerCloseButton onClick={() => setOpen(false)}>
					<CloseIcon
						sx={{
							fontSize: "2.5rem",
							color: theme.palette.secondary.main,
						}}
					/>
				</DrawerCloseButton>
			)}
			<Drawer open={open}>
				<ButtonContainer>
					<DrawerButton
						onClick={() => setOpen(false)}
						component={Link}
						to="/"
					>
						Home
					</DrawerButton>
					<DrawerDivider variant="middle" />
					<DrawerButton
						onClick={() => setOpen(false)}
						component={Link}
						to="/products"
					>
						Products
					</DrawerButton>
					<DrawerDivider variant="middle" />
					<DrawerButton
						onClick={() => setOpen(false)}
						component={Link}
						to="/categories"
					>
						Categories
					</DrawerButton>
					<DrawerDivider variant="middle" />
					<DrawerButton
						onClick={() => setOpen(false)}
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
