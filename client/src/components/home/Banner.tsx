import { useMediaQuery } from "@mui/material";

import {
	BannerContainer,
	BannerContent,
	BannerDescription,
	BannerImage,
	BannerImageM,
	BannerImageS,
	BannerTitle,
} from "../../styles/home/BannerStyle";
import theme from "../../util/theme";

function Banner(): JSX.Element {
	const matchesM: boolean = useMediaQuery(theme.breakpoints.down("md"));
	const matchesS: boolean = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<BannerContainer>
			{matchesS ? (
				<BannerImageS src="https://picsum.photos/id/237/500/500" />
			) : matchesM ? (
				<BannerImageM src="https://picsum.photos/id/237/500/500" />
			) : (
				<BannerImage src="https://picsum.photos/id/237/500/500" />
			)}
			<BannerContent>
				<BannerTitle variant="h2">New Prints!!</BannerTitle>
				<BannerDescription variant="subtitle1">
					eeeeee
				</BannerDescription>
			</BannerContent>
		</BannerContainer>
	);
}

export default Banner;
