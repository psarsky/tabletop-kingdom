import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#844546",
		},
		secondary: {
			main: "#458483",
		},
	},
	typography: {
		fontFamily: ["Roboto", "serif"].join(","),
		h1: {
			fontSize: "3rem",
			fontWeight: 600,
		},
	},
});

export { theme };
