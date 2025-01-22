import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";

import App from "./App.tsx";
import { theme } from "./util/theme.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CssBaseline />
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>
);
