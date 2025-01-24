import { Typography } from "@mui/material";

import { ContentFill } from "../styles/layout/ContentContainer";

function Cart(): JSX.Element {
	const cart = localStorage.getItem("cart");

	return (
		<ContentFill>
			<Typography>{cart}</Typography>
		</ContentFill>
	);
}

export default Cart;
