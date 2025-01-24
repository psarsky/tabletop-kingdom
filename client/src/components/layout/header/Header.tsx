import { useMediaQuery } from "@mui/material";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import theme from "../../../util/theme";

function Header(): JSX.Element {
	const matches: boolean = useMediaQuery(theme.breakpoints.down("md"));
	return matches ? <HeaderMobile matches={matches} /> : <HeaderDesktop matches={matches} />;
}

export default Header;
