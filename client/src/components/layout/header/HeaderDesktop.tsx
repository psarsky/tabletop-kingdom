import { Link } from "react-router-dom";
import { Search } from "@mui/icons-material";

import {
	HeaderContainer,
	Title,
	MenuButton,
	MenuButton2,
} from "../../../styles/layout/HeaderStyle";
import Actions from "./Actions";
import { useUIContext } from "../../../context/UIContext";

function HeaderDesktop(props: { matches: boolean }): JSX.Element {
	const { setShowSearchBox } = useUIContext();
	return (
		<HeaderContainer>
			<MenuButton component={Link} to="/">
				<Title>
					Tabletop
					<br />
					Kingdom
				</Title>
			</MenuButton>
			<MenuButton component={Link} to="/products">
				Products
			</MenuButton>
			<MenuButton component={Link} to="/categories">
				Categories
			</MenuButton>
			<MenuButton2 onClick={() => setShowSearchBox(true)}>
				<Search />
			</MenuButton2>
			<Actions matches={props.matches} />
		</HeaderContainer>
	);
}

export default HeaderDesktop;
