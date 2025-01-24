import { Link } from "react-router-dom";
import { ReceiptLong, ShoppingCart, Person } from "@mui/icons-material";

import {
	MyList,
	ListIcon,
	ActionIconsContainerMobile,
	ActionIconsContainerDesktop,
	MenuDivider,
	ListButton,
} from "../../../styles/layout/HeaderStyle";

function Actions(props: { matches: boolean }): JSX.Element {
	const Component: React.FC<{
		children: React.ReactNode;
	}> = props.matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

	const NavigationButton: React.FC<{
		to: string;
		Icon: JSX.Element;
	}> = ({ to, Icon }) => (
		<ListButton component={Link} to={to}>
			<ListIcon>{Icon}</ListIcon>
		</ListButton>
	);

	return (
		<Component>
			<MyList>
				<MenuDivider orientation="vertical" flexItem />
				<NavigationButton to="/cart" Icon={<ShoppingCart />} />
				<MenuDivider orientation="vertical" flexItem />
				<NavigationButton to="/orders" Icon={<ReceiptLong />} />
				<MenuDivider orientation="vertical" flexItem />
				<NavigationButton to="/user" Icon={<Person />} />
				<MenuDivider orientation="vertical" flexItem />
			</MyList>
		</Component>
	);
}

export default Actions;
