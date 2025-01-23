import { alpha, Box, Button, Divider, IconButton, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import theme from "../../util/theme";

const ButtonContainer = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
}));

const DrawerButton = styled(Button)(
	(_props: { component: any; to: string }) => ({
		color: theme.palette.text.primary,
		fontFamily: "Uncial Antiqua",
		justifyContent: "center",
		height: "100px",
	})
);

const DrawerDivider = styled(Divider)(() => ({
	backgroundColor: theme.palette.text.primary,
}));

const DrawerCloseButton = styled(IconButton)(() => ({
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

const CloseIconButton = styled(CloseIcon)(() => ({
	fontSize: "3rem",
	color: theme.palette.text.primary,
}));

export { ButtonContainer, DrawerButton, DrawerDivider, DrawerCloseButton, CloseIconButton };
