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
import { useDrawerMenuContext } from "../../../context/DrawerMenuContext";

function HeaderMobile(props: { matches: boolean }): JSX.Element {

    const { setOpen } = useDrawerMenuContext();

	return (
		<HeaderContainer>
			<IconBtn onClick = {() => setOpen(true)}>
				<MenuIcon />
			</IconBtn>
			<MenuButton component={Link} to="/">
				<Title>
					Tabletop
					<br />
					Kingdom
				</Title>
			</MenuButton>
			<IconBtn>
				<SearchIcon />
			</IconBtn>
			<Actions matches={props.matches} />
		</HeaderContainer>
	);
}

export default HeaderMobile;
