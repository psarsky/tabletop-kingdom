import { Box, Button, Divider, styled, Typography } from "@mui/material";

const CartContainer = styled(Box)(() => ({
	padding: 2,
	width: "1000px",
	minHeight: "75vh",
}));

const CartTitle = styled(Typography)(() => ({
	marginTop: "50px",
	marginBottom: "50px",
	textAlign: "center",
}));

const CartDivider = styled(Divider)(() => ({
	margin: "20px 0",
	height: "2px",
}));

const CheckoutContainer = styled(Box)(() => ({
	textAlign: "right",
}));

const CheckoutButton = styled(Button)(() => ({
	marginTop: "20px",
}));

export { CartContainer, CartTitle, CartDivider, CheckoutContainer, CheckoutButton };
