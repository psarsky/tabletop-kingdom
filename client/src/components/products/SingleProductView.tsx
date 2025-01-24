import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Button, TextField, CardContent, Rating, Alert } from "@mui/material";

import fetchFromServer from "../../hooks/fetchFromServer";
import { ProductInterface, ReviewInterface } from "../../util/interfaces";
import { ContentFill } from "../../styles/layout/ContentContainer";
import {
	ProductContainer,
	ProductContent,
	ProductDetailsContainer,
	ProductImage,
	ProductName,
	ProductPrice,
	ProductDesctiption,
	JustifiedContainer,
	CartButton,
	ProductDivider,
	ReviewContainer,
	ReviewList,
	ReviewItem,
} from "../../styles/products/SingleProductViewStyle";

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

function ProductDetails(): JSX.Element {
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

	const handleReviewTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setReview(e.target.value);

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

	if (error)
		return (
			<ContentFill>
				<Alert severity="error">{error}</Alert>
			</ContentFill>
		);

	if (!product)
		return (
			<ContentFill>
				<Typography variant="h2">No product to show</Typography>
			</ContentFill>
		);

	const { title, thumbnail, price, description, stock, rating } = product;

	return (
		<ProductContainer>
			<ProductContent>
				<ProductImage image={thumbnail} />
				<ProductDetailsContainer>
					<JustifiedContainer>
						<ProductName>{title}</ProductName>
						<ProductPrice>${price.toFixed(2)}</ProductPrice>
					</JustifiedContainer>
					<ProductDivider orientation="horizontal" flexItem />
					<ProductDesctiption>{description}</ProductDesctiption>
					<ProductDivider orientation="horizontal" flexItem />
					<JustifiedContainer>
						<Rating value={rating} readOnly precision={0.5} />
						<ProductDesctiption>In stock: {stock}</ProductDesctiption>
						<CartButton
							variant="contained"
							color="primary"
							disabled={product.stock <= 0}
							onClick={handleAddToCart}
						>
							Add to cart
						</CartButton>
					</JustifiedContainer>
				</ProductDetailsContainer>
			</ProductContent>
			<ReviewContainer>
				<ProductName>Reviews</ProductName>
				<ReviewList>
					{Array.isArray(reviews) &&
						reviews.map((rev) => (
							<ReviewItem key={rev.id}>
								<CardContent>
									<Rating value={rev.rating} readOnly precision={0.5} />
									<Typography variant="body1">{rev.comment}</Typography>
									<Typography variant="caption">- {rev.name}</Typography>
								</CardContent>
							</ReviewItem>
						))}
				</ReviewList>
				<form onSubmit={handleReviewSubmit} style={{ marginTop: "20px" }}>
					<TextField
						label="Add a Review"
						variant="outlined"
						fullWidth
						value={review}
						onChange={handleReviewTextChange}
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
			</ReviewContainer>
		</ProductContainer>
	);
}

export default ProductDetails;
