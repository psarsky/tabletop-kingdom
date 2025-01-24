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
	const handleSearchClick = () => setShowSearchBox(true);
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
				See all products
			</MenuButton>
			<MenuButton2 onClick={handleSearchClick}>
				<Search />
			</MenuButton2>
			<Actions matches={props.matches} />
		</HeaderContainer>
	);
}

export default HeaderDesktop;
