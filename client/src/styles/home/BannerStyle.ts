import { Box, styled, Theme, Typography } from "@mui/material";

const BannerContainer = styled(Box)((props: { theme: Theme }) => ({
	backgroundColor: props.theme.palette.secondary.main,
	display: "flex",
	justifyContent: "center",
	width: "90%",
	height: "100%",
	padding: "10px 10px",
	margin: "30px 0px",
	borderRadius: "10px",
	[props.theme.breakpoints.down("sm")]: {
		flexDirection: "column",
		alignItems: "center",
	},
}));

const BannerImage = styled(`img`)((props: { src: string }) => ({
	src: `url(${props.src})`,
	width: "400px",
	borderRadius: "10px",
}));

const BannerImageM = styled(`img`)((props: { src: string }) => ({
	src: `url(${props.src})`,
	width: "250px",
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
	maxWidth: 420,
	padding: "30px",
}));

const BannerTitle = styled(Typography)((props: { theme: Theme }) => ({
	fontSize: "72px",
	color: props.theme.palette.text.primary,
	lineHeight: 1.5,
	marginBottom: "20px",
	[props.theme.breakpoints.down("md")]: {
		fontSize: "42px",
	},
}));

const BannerDescription = styled(Typography)((props: { theme: Theme }) => ({
	color: props.theme.palette.text.primary,
	lineHeight: 1.25,
	lineSpacing: 1.25,
	marginBottom: "3em",
	[props.theme.breakpoints.down("md")]: {
		lineHeight: 1.15,
		lineSpacing: 1.15,
		marginBottom: "1.5em",
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
