import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { HeaderContainer, Title, IconBtn } from "../../../styles/layout/HeaderStyle";
import Actions from "./Actions";

function HeaderMobile(props: { matches: boolean }): JSX.Element {
	return (
		<HeaderContainer>
			<IconBtn>
				<MenuIcon />
			</IconBtn>
			<Title textAlign="center" variant="h4">
				Tabletop
				<br />
				Kingdom
			</Title>
			<IconBtn>
				<SearchIcon />
			</IconBtn>
			<Actions matches={props.matches} />
		</HeaderContainer>
	);
}

export default HeaderMobile;
