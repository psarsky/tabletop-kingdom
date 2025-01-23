import { Box, Button, Divider, styled } from "@mui/material";

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

const DrawerCloseButton = styled(Button)(() => ({
    position: "absolute",
    top: 10,
    left: "250px",
    zIndex: 1999,
}));

export { ButtonContainer, DrawerButton, DrawerDivider, DrawerCloseButton };
