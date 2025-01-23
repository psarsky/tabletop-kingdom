import { Box, IconButton, styled, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import theme from "../../util/theme";

const SearchBoxContainer = styled(Box)(() => ({
	backgroundColor: theme.palette.background.default,
	opacity: 0.9,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	zIndex: 9999,
}));

const SearchField = styled(TextField)(() => ({
	".MuiInputLabel-root": {
		color: theme.palette.text.primary,
	},
	".MuiInput-root": {
		fontSize: "1rem",
		color: theme.palette.text.primary,
		[theme.breakpoints.up("md")]: {
			fontSize: "2rem",
		},
	},
	".MuiInput-root:before": {
		borderBottom: `1px solid ${theme.palette.text.primary}`,
	},
	padding: "0 0 0 40px",
}));

const SearchButton = styled(SearchIcon)(() => ({
	fontSize: "3rem",
	color: theme.palette.text.primary,
	[theme.breakpoints.down("md")]: {
		fontSize: "2rem",
	},
}));

const CloseButton = styled(CloseIcon)(() => ({
	fontSize: "4rem",
	color: theme.palette.text.primary,
}));

const CloseIconButton = styled(IconButton)(() => ({
	position: "absolute",
	top: 10,
	right: 10,
}));

export {
	SearchBoxContainer,
	SearchField,
	SearchButton,
	CloseButton,
	CloseIconButton,
};
