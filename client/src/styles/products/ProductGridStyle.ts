import { Grid2, styled, Typography, Theme } from "@mui/material";

const centeredFlex = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const GridContainer = styled(Grid2)(() => ({
	...centeredFlex,
	width: "100%",
	margin: 0,
	padding: 0,
}));

const Item = styled(Grid2)(() => ({
	...centeredFlex,
	flexDirection: "column",
}));

const MessageText = styled(Typography)(({ theme }: { theme: Theme }) => ({
	color: theme.palette.text.primary,
}));

export { Item, GridContainer, MessageText };
