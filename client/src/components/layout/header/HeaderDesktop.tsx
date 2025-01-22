import { ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {
	HeaderContainer,
	Title,
	MyList,
	ListButton,
	ListIcon,
} from "../../../styles/layout/HeaderStyle";
import Actions from "./Actions";

function HeaderDesktop(props: { matches: boolean }): JSX.Element {
	return (
		<HeaderContainer>
			<Title>
				Tabletop
				<br />
				Kingdom
			</Title>
			<MyList type="row">
				<ListItemText primary="Home" />
				<ListItemText primary="Products" />
				<ListItemText primary="Categories" />
				<ListItemText primary="Account" />
				<ListButton>
					<ListIcon>
						<SearchIcon />
					</ListIcon>
				</ListButton>
			</MyList>
			<Actions matches={props.matches} />
		</HeaderContainer>
	);
}

export default HeaderDesktop;
