import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {
	HeaderContainer,
	Title,
	ListIcon,
} from "../../../styles/layout/HeaderStyle";
import Actions from "./Actions";
import { Link } from "react-router-dom";
import theme from "../../../util/theme";

function HeaderDesktop(props: { matches: boolean }): JSX.Element {
	return (
		<HeaderContainer>
			<Button
				component={Link}
				to="/"
				sx={{
					color: theme.palette.text.primary,
					fontFamily: "Uncial Antiqua",
					justifyContent: "center",
				}}
			>
				<Title>
					Tabletop
					<br />
					Kingdom
				</Title>
			</Button>
			<Button
				component={Link}
				to="/"
				sx={{
					color: theme.palette.text.primary,
					fontFamily: "Uncial Antiqua",
					justifyContent: "center",
				}}
			>
				Home
			</Button>
			<Button
				component={Link}
				to="/products"
				sx={{
					color: theme.palette.text.primary,
					fontFamily: "Uncial Antiqua",
					justifyContent: "center",
				}}
			>
				Products
			</Button>
			<Button
				component={Link}
				to="/categories"
				sx={{
					color: theme.palette.text.primary,
					fontFamily: "Uncial Antiqua",
					justifyContent: "center",
				}}
			>
				Categories
			</Button>
			<Button
				component={Link}
				to="/user"
				sx={{
					color: theme.palette.text.primary,
					fontFamily: "Uncial Antiqua",
					justifyContent: "center",
				}}
			>
				Account
			</Button>
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
