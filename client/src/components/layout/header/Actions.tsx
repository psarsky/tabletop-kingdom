import { Divider, ListItemButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { Link as RouterLink } from "react-router-dom";

import {
	MyList,
	ListIcon,
	ActionIconsContainerMobile,
	ActionIconsContainerDesktop,
} from "../../../styles/layout/HeaderStyle";
import theme from "../../../util/theme";

function Actions(props: { matches: boolean }): JSX.Element {
	const Component = props.matches
		? ActionIconsContainerMobile
		: ActionIconsContainerDesktop;

	return (
		<Component>
			<MyList type="row">
				<Divider
					orientation="vertical"
					flexItem
					sx={{ bgcolor: theme.palette.text.primary }}
				/>
				<ListItemButton
					component={RouterLink}
					to="/cart"
					sx={{
						textDecoration: "none",
						color: "inherit",
						justifyContent: "center",
					}}
				>
					<ListIcon>
						<ShoppingCartIcon />
					</ListIcon>
				</ListItemButton>
				<Divider
					orientation="vertical"
					flexItem
					sx={{ bgcolor: theme.palette.text.primary }}
				/>
				<ListItemButton
					component={RouterLink}
					to="/favorites"
					sx={{
						textDecoration: "none",
						color: "inherit",
						justifyContent: "center",
					}}
				>
					<ListIcon>
						<FavoriteIcon />
					</ListIcon>
				</ListItemButton>
				<Divider
					orientation="vertical"
					flexItem
					sx={{ bgcolor: theme.palette.text.primary }}
				/>
				<ListItemButton
					component={RouterLink}
					to="/account"
					sx={{
						textDecoration: "none",
						color: "inherit",
						justifyContent: "center",
					}}
				>
					<ListIcon>
						<PersonIcon />
					</ListIcon>
				</ListItemButton>
				<Divider
					orientation="vertical"
					flexItem
					sx={{ bgcolor: theme.palette.text.primary }}
				/>
			</MyList>
		</Component>
	);
}

export default Actions;
