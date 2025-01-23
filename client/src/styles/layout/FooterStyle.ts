import { Box, Divider, styled, Typography } from "@mui/material";

import theme from "../../util/theme";

const FooterContainer = styled(Box)(() => ({
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

const FooterInfoSectionContainer = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
	gap: theme.spacing(4),
	flexDirection: "row",
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
}));

const FooterTitle = styled(Typography)(() => ({
	textTransform: "uppercase",
	marginBottom: "1em",
}));

const InfoList = styled(Box)(() => ({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	mr: { md: 2 },
}));

const InfoContainer = styled(Box)(() => ({
	flex: 1,
	display: "flex",
	mx: { md: 2 },
}));

const FooterDivider = styled(Divider)(() => ({
    backgroundColor: theme.palette.text.primary,
}));

const CopyrightElement = styled(Typography)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

export {
	FooterContainer,
	FooterInfoSectionContainer,
	FooterTitle,
	InfoList,
    InfoContainer,
    FooterDivider,
    CopyrightElement
};
