import {
	styled,
	Typography,
	List,
	ListItemIcon,
	Box,
	IconButton,
	Divider,
	ListItemButton,
	Button,
	Theme,
	ButtonProps,
} from "@mui/material";
import { LinkProps } from "react-router-dom";

type MenuButtonProps = ButtonProps & LinkProps;

const HeaderContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
	background: theme.palette.primary.main,
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	padding: theme.spacing(0.25, 2),
}));

const Title = styled(Typography)(({ theme }: { theme: Theme }) => ({
	fontSize: "3rem",
	fontFamily: "Uncial Antiqua",
	fontWeight: 600,
	padding: "4px",
	flexGrow: 1,
	color: theme.palette.text.primary,
}));

const MyList = styled(List)((props: { type: string; theme: Theme }) => ({
	color: props.theme.palette.text.primary,
	display: props.type === "row" ? "flex" : "block",
	flexGrow: 3,
	justifyContent: "center",
	alignItems: "center",
	margin: "0",
	padding: "0",
}));

const MenuButton = styled(Button)<MenuButtonProps>(({ theme }: { theme: Theme }) => ({
	color: theme.palette.text.primary,
	justifyContent: "center",
	minHeight: "100px",
}));

const MenuButton2 = styled(Button)(({ theme }: { theme: Theme }) => ({
	color: theme.palette.text.primary,
	justifyContent: "center",
	minHeight: "100px",
	minWidth: "100px",
}));

const ListIcon = styled(ListItemIcon)(({ theme }: { theme: Theme }) => ({
	color: theme.palette.text.primary,
	display: "flex",
	justifyContent: "center",
}));

const ListButton = styled(ListItemButton)((_props: { component: any; to: string }) => ({
	textDecoration: "none",
	color: "inherit",
	justifyContent: "center",
	minHeight: "60px",
	minWidth: "100px",
}));

const ActionIconsContainerDesktop: React.FC<{
	children: React.ReactNode;
}> = styled(Box)(() => ({
	flexGrow: 0,
}));

const ActionIconsContainerMobile: React.FC<{
	children: React.ReactNode;
}> = styled(Box)(({ theme }: { theme: Theme }) => ({
	background: theme.palette.secondary.main,
	display: "flex",
	alignItems: "center",
	position: "fixed",
	bottom: 0,
	left: 0,
	padding: "0 8px",
	width: "100%",
	zIndex: 1000,
	borderTop: `1px solid ${theme.palette.secondary.main}`,
}));

const IconBtn = styled(IconButton)(({ theme }: { theme: Theme }) => ({
	color: theme.palette.text.primary,
}));

const MenuDivider = styled(Divider)(({ theme }: { theme: Theme }) => ({
	backgroundColor: theme.palette.text.primary,
}));

export {
	HeaderContainer,
	Title,
	MyList,
	MenuButton,
	MenuButton2,
	ListIcon,
	ListButton,
	ActionIconsContainerDesktop,
	ActionIconsContainerMobile,
	MenuDivider,
	IconBtn,
};
