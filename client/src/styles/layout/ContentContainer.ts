import { styled, Box } from "@mui/material";

import theme from "../../util/theme";

const ContentContainer = styled(Box)(() => ({
    background: theme.palette.background.default,
    color: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	padding: "2px 8px",
}));

export default ContentContainer;
