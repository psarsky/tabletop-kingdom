import { Box, styled, Theme, Typography } from "@mui/material";
import theme from "../../util/theme";

const ItemSliderContainer = styled(Box)((props: { theme: Theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "90%",
	height: "100%",
	marginBottom: "30px",
	padding: "20px 0px 20px 0px",
	overflow: "hidden",
	borderRadius: "10px",
	background: props.theme.palette.secondary.main,
	[props.theme.breakpoints.down("md")]: {
		padding: "40px 0px 40px 0px",
	},
}));

const MessageText = styled(Typography)((props: { theme: Theme }) => ({
	fontSize: "1.5rem",
	color: props.theme.palette.text.primary,
	[theme.breakpoints.up("md")]: {
		fontSize: "3rem",
	},
}));

export { ItemSliderContainer, MessageText };
