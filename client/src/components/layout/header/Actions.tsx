import { Divider } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

import {
	MyList,
	ListButton,
	ListIcon,
	ActionIconsContainerMobile,
	ActionIconsContainerDesktop,
} from "../../../styles/layout/HeaderStyle";
import theme from "../../../util/theme";

function Actions(props: { matches: boolean }): JSX.Element {
	const Component = props.matches
		? ActionIconsContainerMobile
		: ActionIconsContainerDesktop;

	return (
		<Component>
			<MyList type="row">
				<Divider
					orientation="vertical"
					flexItem
					sx={{ bgcolor: theme.palette.text.primary }}
				/>
				<ListButton>
					<ListIcon>
						<ShoppingCartIcon />
					</ListIcon>
				</ListButton>
				<Divider
					orientation="vertical"
					flexItem
					sx={{ bgcolor: theme.palette.text.primary }}
				/>
				<ListButton>
					<ListIcon>
						<FavoriteIcon />
					</ListIcon>
				</ListButton>
				<Divider
					orientation="vertical"
					flexItem
					sx={{ bgcolor: theme.palette.text.primary }}
				/>
				<ListButton>
					<ListIcon>
						<PersonIcon />
					</ListIcon>
				</ListButton>
				<Divider
					orientation="vertical"
					flexItem
					sx={{ bgcolor: theme.palette.text.primary }}
				/>
			</MyList>
		</Component>
	);
}

export default Actions;
