import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import {
	HeaderContainer,
	Title,
	IconBtn,
	MenuButton,
} from "../../../styles/layout/HeaderStyle";
import Actions from "./Actions";
import { useUIContext } from "../../../context/UIContext";

function HeaderMobile(props: { matches: boolean }): JSX.Element {
	const { setDrawerOpen, setShowSearchBox } = useUIContext();

	return (
		<HeaderContainer>
			<IconBtn onClick={() => setDrawerOpen(true)}>
				<MenuIcon />
			</IconBtn>
			<MenuButton component={Link} to="/">
				<Title>
					Tabletop
					<br />
					Kingdom
				</Title>
			</MenuButton>
			<IconBtn onClick={() => setShowSearchBox(true)}>
				<SearchIcon />
			</IconBtn>
			<Actions matches={props.matches} />
		</HeaderContainer>
	);
}

export default HeaderMobile;
