import {
	styled,
	Typography,
	List,
	ListItemButton,
	ListItemIcon,
	Box,
	IconButton,
} from "@mui/material";

import theme from "../../util/theme";

const HeaderContainer = styled(Box)(() => ({
	background: theme.palette.primary.main,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "2px 15px",
}));

const Title = styled(Typography)(() => ({
	fontSize: "3rem",
	fontFamily: "Uncial Antiqua",
	fontWeight: 600,
	padding: "4px",
	flexGrow: 1,
	color: theme.palette.text.primary,
}));

const MyList = styled(List)((props: { type: string }) => ({
	color: theme.palette.text.primary,
	display: props.type === "row" ? "flex" : "block",
	flexGrow: 3,
	justifyContent: "center",
	alignItems: "center",
}));

const ListButton = styled(ListItemButton)(() => ({
	justifyContent: "center",
}));

const ListIcon = styled(ListItemIcon)(() => ({
	color: theme.palette.text.primary,
	display: "flex",
	justifyContent: "center",
}));

const ActionIconsContainerDesktop = styled(Box)(() => ({
	flexGrow: 0,
}));

const ActionIconsContainerMobile = styled(Box)(() => ({
	display: "flex",
	background: theme.palette.secondary.main,
	position: "fixed",
	bottom: 0,
	left: 0,
	padding: "2px 8px",
	width: "100%",
	alignItems: "center",
	zIndex: 1000,
	borderTop: `1px solid ${theme.palette.secondary.main}`,
}));

const IconBtn = styled(IconButton)(() => ({
	color: theme.palette.text.primary,
}));

export {
	HeaderContainer,
	Title,
	MyList,
	ListButton,
	ListIcon,
	ActionIconsContainerDesktop,
	ActionIconsContainerMobile,
	IconBtn,
};
