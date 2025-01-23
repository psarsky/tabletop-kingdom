import { createTheme, Theme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
	palette: {
		primary: {
			main: "#181C14",
		},
		secondary: {
			main: "#3C3D37",
		},
		background: {
			default: "#697565",
		},
		text: {
			primary: "#ECDFCC",
		},
	},
	typography: {
		fontFamily: '"Uncial Antiqua", "serif"',
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: "contained",
				color: "primary",
				disableElevation: true,
			},
		},
		MuiDrawer: {
			styleOverrides: {
				paper: {
                    background: "#181C14",
                    width: "200px",
                    borderRadius: "0px 100px 0px 0px",
                    overflow: "hidden",
				},
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 720,
			md: 1000,
			lg: 1200,
			xl: 1536,
		},
	},
};

const theme: Theme = createTheme(themeOptions);

export default theme;
