import { Typography } from "@mui/material";

import ContentContainer from "../styles/layout/ContentContainer";

function Cart(): JSX.Element {
	const cart = localStorage.getItem("cart");

	return (
		<ContentContainer>
			<Typography>{cart}</Typography>
		</ContentContainer>
	);
}

export default Cart;
