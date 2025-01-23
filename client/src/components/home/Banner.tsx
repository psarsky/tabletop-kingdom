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
import talismanImage from "../../assets/talisman.jpg";

function Banner(): JSX.Element {
	const matchesM: boolean = useMediaQuery(theme.breakpoints.down("md"));
	const matchesS: boolean = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<BannerContainer>
			{matchesS ? (
				<BannerImageS src={talismanImage} />
			) : matchesM ? (
				<BannerImageM src={talismanImage} />
			) : (
				<BannerImage src={talismanImage} />
			)}
			<BannerContent>
				<BannerTitle variant="h2">
					Talisman: Magic and Sword - 5th Edition!
				</BannerTitle>
				<BannerDescription variant="subtitle1">
					The legendary board game is back with updated mechanics and
					stunning artwork! Perfect for seasoned players and newcomers
					alike. Grab your copy today and start your adventure!
				</BannerDescription>
			</BannerContent>
		</BannerContainer>
	);
}

export default Banner;
