import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {
	HeaderContainer,
	Title,
	ListIcon,
	MenuButton,
} from "../../../styles/layout/HeaderStyle";
import Actions from "./Actions";

function HeaderDesktop(props: { matches: boolean }): JSX.Element {
	return (
		<HeaderContainer>
			<MenuButton component={Link} to="/">
				<Title>
					Tabletop
					<br />
					Kingdom
				</Title>
			</MenuButton>
			<MenuButton component={Link} to="/">
				Home
			</MenuButton>
			<MenuButton component={Link} to="/products">
				Products
			</MenuButton>
			<MenuButton component={Link} to="/categories">
				Categories
			</MenuButton>
			<MenuButton component={Link} to="/user">
				Account
			</MenuButton>
			<Button>
				<ListIcon>
					<SearchIcon />
				</ListIcon>
			</Button>

			<Actions matches={props.matches} />
		</HeaderContainer>
	);
}

export default HeaderDesktop;
