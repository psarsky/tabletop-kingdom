import { OrderItemInterface } from "./interfaces";

const truncateText = (text: string | null | undefined, maxLength: number): string =>
	text && text.length > maxLength ? `${text.slice(0, maxLength)}...` : text || "";

const addReview = async (productId: string, reviewContent: string, rating: number): Promise<void> => {
	const response = await fetch(`http://localhost:3000/products/id/${productId}/reviews`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ content: reviewContent, rating }),
	});

	if (!response.ok) {
		throw new Error(response.statusText);
	}
};

const addToCart = (productId: number, price: number): void => {
	const cart = JSON.parse(localStorage.getItem("cart") || "[]") as OrderItemInterface[];

	const existingItem = cart.find((item: OrderItemInterface) => item.productId === productId);

	if (existingItem) {
		existingItem.quantity += 1;
	} else {
		cart.push({ productId: productId, quantity: 1, price: price });
	}

	localStorage.setItem("cart", JSON.stringify(cart));
};

export { truncateText, addReview, addToCart };
