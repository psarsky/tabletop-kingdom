import { Box, Link, Typography } from "@mui/material";

import theme from "../util/theme";

function NoPage() {
	return (
		<Box
			sx={{
				background: theme.palette.background.default,
				color: theme.palette.primary.main,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
                textAlign: "center",
                gap: "3rem",
                height: "100vh",
			}}
		>
			<Typography
				variant="h1"
				sx={{ color: theme.palette.secondary.main }}
			>
				404
			</Typography>
			<Typography
				variant="h4"
				sx={{ color: theme.palette.secondary.main }}
			>
				You have wandered too far, weary traveler.
			</Typography>
			<Typography variant="h5">
				<Link
					href="/"
					underline="hover"
					sx={{ color: theme.palette.text.primary }}
				>
					Take me back to a safer place.
				</Link>
			</Typography>
		</Box>
	);
}

export default NoPage;
