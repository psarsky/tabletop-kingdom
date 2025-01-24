import { Box, styled, Typography, Theme } from "@mui/material";

const BannerContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
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

const BannerImage = styled("img")(() => ({
	width: "400px",
	height: "400px",
	borderRadius: "10px",
}));

const BannerImageM = styled("img")(() => ({
	width: "300px",
	height: "300px",
	borderRadius: "10px",
}));

const BannerImageS = styled("img")(() => ({
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

const BannerTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
	...theme.typography.h4,
	color: theme.palette.text.primary,
	lineHeight: 1.5,
	marginBottom: "20px",
	[theme.breakpoints.down("md")]: {
		...theme.typography.h5,
	},
}));

const BannerDescription = styled(Typography)(({ theme }: { theme: Theme }) => ({
	color: theme.palette.text.primary,
	lineHeight: 1.25,
	margin: "10px 0",
	[theme.breakpoints.down("md")]: {
		lineHeight: 1.15,
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
