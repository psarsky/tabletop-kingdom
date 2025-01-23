import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import {
	HeaderContainer,
	Title,
	IconBtn,
} from "../../../styles/layout/HeaderStyle";
import Actions from "./Actions";

function HeaderMobile(props: { matches: boolean }): JSX.Element {
	return (
		<HeaderContainer>
			<IconBtn>
				<MenuIcon />
			</IconBtn>
			<Button
				component={Link}
				to="/"
				sx={{ fontFamily: "Uncial Antiqua", justifyContent: "center" }}
			>
				<Title>
					Tabletop
					<br />
					Kingdom
				</Title>
			</Button>
			<IconBtn>
				<SearchIcon />
			</IconBtn>
			<Actions matches={props.matches} />
		</HeaderContainer>
	);
}

export default HeaderMobile;
