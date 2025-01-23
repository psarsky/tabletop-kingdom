import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

import {
	MyList,
	ListIcon,
	ActionIconsContainerMobile,
	ActionIconsContainerDesktop,
	MenuDivider,
	ListButton,
} from "../../../styles/layout/HeaderStyle";

function Actions(props: { matches: boolean }): JSX.Element {
	const Component = props.matches
		? ActionIconsContainerMobile
		: ActionIconsContainerDesktop;

	return (
		<Component>
			<MyList type="row">
				<MenuDivider orientation="vertical" flexItem />
				<ListButton component={Link} to="/cart">
					<ListIcon>
						<ShoppingCartIcon />
					</ListIcon>
				</ListButton>
				<MenuDivider orientation="vertical" flexItem />
				<ListButton component={Link} to="/favorites">
					<ListIcon>
						<FavoriteIcon />
					</ListIcon>
				</ListButton>
				<MenuDivider orientation="vertical" flexItem />
				<ListButton component={Link} to="/account">
					<ListIcon>
						<PersonIcon />
					</ListIcon>
				</ListButton>
				<MenuDivider orientation="vertical" flexItem />
			</MyList>
		</Component>
	);
}

export default Actions;
