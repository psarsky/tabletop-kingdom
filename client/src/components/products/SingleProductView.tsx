import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {
	Container,
	Grid2,
	Typography,
	Button,
	TextField,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Rating,
	Alert,
	useTheme,
} from "@mui/material";
import fetchFromServer from "../../hooks/fetchFromServer";
import { ProductInterface, ReviewInterface } from "../../util/interfaces";

const addReview = async (productId: string, reviewContent: string): Promise<void> => {
	const response = await fetch(`http://localhost:3000/products/id/${productId}/reviews`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ content: reviewContent }),
	});

	if (!response.ok) {
		throw new Error(response.statusText);
	}
};

const addToCart = (productId: string): void => {
	const cart = JSON.parse(localStorage.getItem("cart") || "[]") as {
		id: string;
		quantity: number;
	}[];

	const existingItem = cart.find((item) => item.id === productId);

	if (existingItem) {
		existingItem.quantity += 1;
	} else {
		cart.push({ id: productId, quantity: 1 });
	}

	localStorage.setItem("cart", JSON.stringify(cart));
};

const ProductDetails: React.FC = () => {
	const theme = useTheme();
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<ProductInterface | null>(null);
	const [reviews, setReviews] = useState<ReviewInterface[] | []>([]);
	const [review, setReview] = useState("");
	const [error, setError] = useState("");
	const params = useParams();

	fetchFromServer({
		url: `http://localhost:3000/products/id/${params.id}`,
		onFetch: (data: ProductInterface) => {
			setProduct(data);
		},
		timeout: 1000,
	});

	fetchFromServer({
		url: `http://localhost:3000/products/id/${params.id}/reviews`,
		onFetch: (data: ReviewInterface[]) => {
			setReviews(data);
		},
		timeout: 1000,
	});

	const handleAddToCart = () => {
		try {
			addToCart(id!);
			alert("Product added to cart!");
		} catch (error) {
			setError("Error adding product to cart.");
		}
	};

	const handleReviewSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (review.trim()) {
			addReview(id!, review)
				.then(() => {
					setReview("");
					alert("Review submitted!");
				})
				.catch((error) => setError("Error submitting review: " + error.message));
		} else {
			setError("Review cannot be empty.");
		}
	};

	if (error) return <Alert severity="error">{error}</Alert>;

	if (!product) return null;

	const { title, thumbnail, price, description, stock, rating } = product;

	return (
		<Container>
			<Grid2 container spacing={4}>
				<Grid2>
					<Card>
						<CardMedia
							component="img"
							image={thumbnail}
							alt={title}
							sx={{ height: "500px", width: "500px" }}
						/>
					</Card>
				</Grid2>
				<Grid2>
					<Typography variant="h4">{title}</Typography>
					<Typography variant="h6" color="textSecondary">
						${price.toFixed(2)}
					</Typography>
					<Typography variant="body1" paragraph>
						{description}
					</Typography>
					<Typography variant="body2" color="textSecondary">
						In stock: {stock}
					</Typography>
					<Rating value={rating} readOnly precision={0.5} />
					<CardActions>
						<Button variant="contained" color="primary" onClick={handleAddToCart}>
							Add to Cart
						</Button>
					</CardActions>
				</Grid2>
			</Grid2>

			<Typography variant="h5" marginTop={4}>
				Reviews
			</Typography>
			{Array.isArray(reviews) &&
				reviews.map((rev) => (
					<Card
						key={rev.id}
						sx={{ bgcolor: theme.palette.secondary.main, margin: "10px 0" }}
					>
						<CardContent>
							<Typography variant="body1">{rev.comment}</Typography>
							<Typography
								variant="caption"
								sx={{ bgcolor: theme.palette.secondary.main }}
							>
								- {rev.name}
							</Typography>
						</CardContent>
					</Card>
				))}

			<form onSubmit={handleReviewSubmit} style={{ marginTop: "20px" }}>
				<TextField
					label="Add a Review"
					variant="outlined"
					fullWidth
					value={review}
					onChange={(e) => setReview(e.target.value)}
					multiline
					rows={3}
				/>
				<Button
					type="submit"
					variant="contained"
					color="secondary"
					style={{ marginTop: "10px" }}
				>
					Submit Review
				</Button>
			</form>
		</Container>
	);
};

export default ProductDetails;
