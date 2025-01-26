import { Add, Delete, Remove } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";

import { OrderItemInterface } from "../../util/interfaces";

/**
 * @todo Add product fetching for more info
 * @todo Style
 */
function ProductCartView(props: {
	item: OrderItemInterface;
	cartItems: OrderItemInterface[];
	setCartItems: (value: OrderItemInterface[]) => void;
}) {
	const handleAdd = (item: OrderItemInterface): void => {
		const updatedCart = props.cartItems.map((cartItem: OrderItemInterface) =>
			cartItem.productId === item.productId
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
		props.setCartItems(updatedCart);
	};

	const handleRemove = (item: OrderItemInterface): void => {
		const updatedCart = props.cartItems
			.map((cartItem: OrderItemInterface) =>
				cartItem.productId === item.productId
					? { ...cartItem, quantity: cartItem.quantity - 1 }
					: cartItem
			)
			.filter((cartItem: OrderItemInterface) => cartItem.quantity > 0);
		props.setCartItems(updatedCart);
	};

	const handleDelete = (item: OrderItemInterface): void => {
		const updatedCart = props.cartItems.filter(
			(cartItem: OrderItemInterface) => cartItem.productId !== item.productId
		);
		props.setCartItems(updatedCart);
    };

	return (
		<Paper
			elevation={3}
			sx={{ padding: 2, display: "flex", alignItems: "center", width: "1000px" }}
		>
			<Box sx={{ flex: 1 }}>
				<Typography variant="h6">{props.item.productId}</Typography>
				<Typography variant="body2" color="textSecondary">
					Price: ${props.item.price.toFixed(2)}
				</Typography>
			</Box>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<IconButton onClick={() => handleRemove(props.item)}>
					<Remove />
				</IconButton>
				<Typography variant="body1" sx={{ marginX: 1 }}>
					{props.item.quantity}
				</Typography>
				<IconButton onClick={() => handleAdd(props.item)}>
					<Add />
				</IconButton>
			</Box>
			<Typography variant="body1" sx={{ marginX: 2 }}>
				{(props.item.price * props.item.quantity).toFixed(2)} zł
			</Typography>
			<IconButton color="error" onClick={() => handleDelete(props.item)}>
				<Delete />
			</IconButton>
		</Paper>
	);
}

export default ProductCartView;
