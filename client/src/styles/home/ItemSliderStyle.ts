import { Box, styled, Typography, Theme } from "@mui/material";

const centeredFlex = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const ItemSliderContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
	background: theme.palette.secondary.main,
	...centeredFlex,
	flexDirection: "column",
	width: "90%",
	maxWidth: "1200px",
	height: "100%",
	marginBottom: "30px",
	padding: "40px 0px 40px 0px",
	borderRadius: "10px",
}));

const SliderTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
	fontSize: "36px",
	color: theme.palette.text.primary,
	lineHeight: 1.5,
	marginBottom: "10px",
	[theme.breakpoints.down("md")]: {
		fontSize: "30px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: "24px",
	},
}));

const SliderControlContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "20px",
	width: "100%",
	height: "100%",
	padding: "0px 20px",
	[theme.breakpoints.down("sm")]: {
		padding: "0px 5px",
		gap: "5px",
	},
}));

const SlideContainer = styled(Box)(() => ({
	...centeredFlex,
	width: "100%",
	overflow: "hidden",
}));

const MessageText = styled(Typography)(({ theme }: { theme: Theme }) => ({
	color: theme.palette.text.primary,
}));

export { ItemSliderContainer, SliderTitle, SliderControlContainer, SlideContainer, MessageText };
