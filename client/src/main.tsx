import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App.tsx";
import theme from "./util/theme.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>
);
