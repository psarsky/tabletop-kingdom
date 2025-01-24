import { Box, Divider, styled, Typography, Theme } from "@mui/material";

const FooterContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
	background: theme.palette.primary.main,
	color: theme.palette.text.primary,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: theme.spacing(4),
	padding: theme.spacing(4, 6),
	marginBottom: "0",
	fontSize: "14px",
	[theme.breakpoints.down("md")]: {
		marginBottom: "60px",
		fontSize: "12px",
	},
}));

const FooterInfoSectionContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	gap: theme.spacing(4),
	flexDirection: "row",
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
	},
}));

const FooterTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
	textTransform: "uppercase",
	marginBottom: theme.spacing(2),
}));

const InfoList = styled(Box)(({ theme }: { theme: Theme }) => ({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginRight: theme.spacing(2),
}));

const InfoContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
	flex: 1,
	display: "flex",
	margin: theme.spacing(0, 2),
}));

const FooterDivider = styled(Divider)(({ theme }: { theme: Theme }) => ({
	backgroundColor: theme.palette.text.primary,
}));

const CopyrightElement = styled(Typography)(() => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

export {
	FooterContainer,
	FooterInfoSectionContainer,
	FooterTitle,
	InfoList,
	InfoContainer,
	FooterDivider,
	CopyrightElement,
};
