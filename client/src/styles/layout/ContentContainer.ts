import { styled, Box, Theme } from "@mui/material";

const ContentContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
	background: theme.palette.background.default,
	color: theme.palette.primary.main,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	padding: "2px 8px",
}));

const ContentFill = styled(Box)(({ theme }: { theme: Theme }) => ({
	background: theme.palette.background.default,
	color: theme.palette.primary.main,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	gap: "3rem",
	height: "100vh",
}));




export { ContentContainer, ContentFill };
