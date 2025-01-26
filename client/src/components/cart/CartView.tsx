import { useState, useEffect } from "react";
import { Typography, Grid2 } from "@mui/material";

import { OrderItemInterface } from "../../util/interfaces";
import ProductCartView from "./ProductCartView";
import {
	CartContainer,
	CartDivider,
	CartTitle,
	CheckoutButton,
	CheckoutContainer,
} from "../../styles/cart/CartStyle";

/**
 * @todo Fix localStorage cart updating
 */
function CartView(): JSX.Element {
	const [cartItems, setCartItems] = useState<OrderItemInterface[]>([]);

	useEffect(() => {
		const storedCart = localStorage.getItem("cart");
		console.log("Stored cart data:", storedCart);
		if (storedCart) {
			try {
				setCartItems(JSON.parse(storedCart));
				console.log("Parsed cart data:", cartItems);
			} catch (error) {
				console.error("Error parsing cart data:", error);
			}
		}
	}, []);

	//useEffect(() => {
	//	localStorage.setItem("cart", JSON.stringify(cartItems));
	//}, [cartItems]);

	const calculateTotal = () =>
		cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

	return (
		<CartContainer>
			<CartTitle variant="h4">Your cart</CartTitle>
			{cartItems.length === 0 ? (
				<CartTitle variant="h6">Cart is empty.</CartTitle>
			) : (
				<>
					<Grid2 container spacing={2}>
						{cartItems.map((item) => (
							<ProductCartView
								key={item.productId}
								item={item}
								cartItems={cartItems}
								setCartItems={setCartItems}
							/>
						))}
					</Grid2>
					<CartDivider />
					<CheckoutContainer>
						<Typography variant="h6">Total: ${calculateTotal().toFixed(2)}</Typography>
						<CheckoutButton variant="contained" color="primary">
							Checkout
						</CheckoutButton>
					</CheckoutContainer>
				</>
			)}
		</CartContainer>
	);
}

export default CartView;
