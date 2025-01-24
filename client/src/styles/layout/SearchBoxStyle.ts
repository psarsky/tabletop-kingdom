import {
	Box,
	FormControl,
	IconButton,
	styled,
	TextField,
	Theme,
} from "@mui/material";
import { Search, Close } from "@mui/icons-material";

const SearchBoxContainer = styled(Box)(({ theme }: { theme: Theme }) => ({
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

const SearchField = styled(TextField)(({ theme }: { theme: Theme }) => ({
	"& .MuiInputLabel-root": {
		color: theme.palette.text.primary,
	},
	"& .MuiInput-root": {
		color: theme.palette.text.primary,
		fontSize: "2rem",
	},
	"& .MuiInput-root:before": {
		borderBottom: `1px solid ${theme.palette.text.primary}`,
	},
	padding: "0 0 0 40px",
}));

const SearchButton = styled(Search)(({ theme }: { theme: Theme }) => ({
	fontSize: "3rem",
	color: theme.palette.text.primary,
	[theme.breakpoints.down("md")]: {
		fontSize: "2rem",
	},
}));

const CloseButton = styled(Close)(({ theme }: { theme: Theme }) => ({
	fontSize: "4rem",
	color: theme.palette.text.primary,
}));

const CloseIconButton = styled(IconButton)(() => ({
	position: "absolute",
	top: 10,
	right: 10,
}));

const CategorySelector = styled(FormControl)(({ theme }: { theme: Theme }) => ({
	width: "200px",
	"& .MuiInputLabel-root": {
		color: theme.palette.text.primary,
	},
	"& .MuiInput-root": {
		color: theme.palette.text.primary,
		fontSize: "1.3rem",
	},
	"& .MuiInput-root:before": {
		borderBottom: `1px solid ${theme.palette.text.primary}`,
	},
}));

export {
	SearchBoxContainer,
	SearchField,
	SearchButton,
	CloseButton,
	CloseIconButton,
	CategorySelector,
};
