import { LinkProps } from "react-router-dom";
import { alpha, Box, Button, Divider, IconButton, styled, Theme, ButtonProps } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

type DrawerButtonProps = ButtonProps & LinkProps;

const ButtonContainer = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
}));

const DrawerButton = styled(Button)<DrawerButtonProps>(({ theme }: { theme: Theme }) => ({
	color: theme.palette.text.primary,
	fontFamily: "Uncial Antiqua",
	justifyContent: "center",
	height: "100px",
}));

const DrawerDivider = styled(Divider)(({ theme }: { theme: Theme }) => ({
	backgroundColor: theme.palette.text.primary,
}));

const DrawerCloseButton = styled(IconButton)(({ theme }: { theme: Theme }) => ({
	position: "absolute",
	top: 5,
	left: "200px",
	zIndex: 1999,
	backgroundColor: "transparent",
	transition: "background-color 0.3s ease",
	"&:hover": {
		backgroundColor: alpha(theme.palette.primary.main, 0.5),
	},
}));

const CloseIconButton = styled(CloseIcon)(({ theme }: { theme: Theme }) => ({
	fontSize: "3rem",
	color: theme.palette.text.primary,
}));

export { ButtonContainer, DrawerButton, DrawerDivider, DrawerCloseButton, CloseIconButton };
