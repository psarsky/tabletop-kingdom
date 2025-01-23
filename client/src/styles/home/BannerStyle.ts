import { Box, styled, Typography } from "@mui/material";

import theme from "../../util/theme";

const BannerContainer = styled(Box)(() => ({
	background: theme.palette.secondary.main,
	display: "flex",
    justifyContent: "space-between",
    gap: "30px",
    width: "90%",
    maxWidth: "1200px",
	height: "100%",
	padding: "30px 30px",
	margin: "30px 0px",
	borderRadius: "10px",
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
		alignItems: "center",
	},
}));

const BannerImage = styled(`img`)((props: { src: string }) => ({
	src: `url(${props.src})`,
    width: "400px",
    height: "400px",
	borderRadius: "10px",
}));

const BannerImageM = styled(`img`)((props: { src: string }) => ({
	src: `url(${props.src})`,
    width: "300px",
    height: "300px",
	borderRadius: "10px",
}));

const BannerImageS = styled(`img`)((props: { src: string }) => ({
	src: `url(${props.src})`,
	width: "300px",
	height: "300px",
	borderRadius: "10px",
}));

const BannerContent = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	maxWidth: 700,
}));

const BannerTitle = styled(Typography)(() => ({
	fontSize: "36px",
	color: theme.palette.text.primary,
	lineHeight: 1.5,
	marginBottom: "20px",
	[theme.breakpoints.down("md")]: {
		fontSize: "24px",
	},
}));

const BannerDescription = styled(Typography)(() => ({
	color: theme.palette.text.primary,
	lineHeight: 1.25,
	lineSpacing: 1.25,
	[theme.breakpoints.down("md")]: {
		lineHeight: 1.15,
		lineSpacing: 1.15,
	},
}));

export {
	BannerContainer,
	BannerImage,
	BannerImageM,
	BannerImageS,
	BannerContent,
	BannerTitle,
	BannerDescription,
};
