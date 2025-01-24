import { Box, Link, Typography } from "@mui/material";

import theme from "../util/theme";

function NoPage(): JSX.Element {
	return (
		<Box
			sx={{
				background: (theme) => theme.palette.background.default,
				color: (theme) => theme.palette.primary.main,
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
				sx={{ color: theme.palette.secondary.main, textAlign: "center" }}
			>
				404
			</Typography>
			<Typography
				variant="h4"
				sx={{
					color: (theme) => theme.palette.secondary.main,
					textAlign: "center",
				}}
			>
				You have wandered too far, weary traveler.
			</Typography>
			<Typography variant="h5" sx={{ textAlign: "center" }}>
				<Link
					href="/"
					underline="none"
					sx={{
						color: theme.palette.secondary.main,
						"&:hover": {
							color: (theme) => theme.palette.text.primary,
						},
					}}
				>
					Take me back to a safer place.
				</Link>
			</Typography>
		</Box>
	);
}

export default NoPage;
