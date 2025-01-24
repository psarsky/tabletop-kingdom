import { Link, Typography } from "@mui/material";

import theme from "../util/theme";
import { ContentFill } from "../styles/layout/ContentContainer";

function NoPage(): JSX.Element {
	return (
		<ContentFill>
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
		</ContentFill>
	);
}

export default NoPage;
