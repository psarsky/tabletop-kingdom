import { Box, styled, Typography } from "@mui/material";

import theme from "../../util/theme";

const ItemSliderContainer = styled(Box)(() => ({
	background: theme.palette.secondary.main,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	width: "90%",
	maxWidth: "1200px",
	height: "100%",
	marginBottom: "30px",
	padding: "40px 0px 40px 0px",
	borderRadius: "10px",
}));

const SliderTitle = styled(Typography)(() => ({
	fontSize: "36px",
	color: theme.palette.text.primary,
	lineHeight: 1.5,
	marginBottom: "10px",
	[theme.breakpoints.down("md")]: {
		fontSize: "24px",
	},
}));

const SliderControlContainer = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
	width: "100%",
	height: "100%",
	padding: "0px 20px",
}));

const SlideContainer = styled(Box)(() => ({
    display: "flex", 
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    overflow: "hidden",
}))

const MessageText = styled(Typography)(() => ({
	color: theme.palette.text.primary,
}));

export { ItemSliderContainer, SliderTitle, SliderControlContainer, SlideContainer, MessageText };
