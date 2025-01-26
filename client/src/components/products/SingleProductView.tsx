import React, { useState } from "react";
import { Params, useParams } from "react-router-dom";
import { Typography, TextField, CardContent, Rating } from "@mui/material";

import fetchFromServer from "../../hooks/fetchFromServer";
import { ProductInterface, ReviewInterface } from "../../util/interfaces";
import { ContentContainer, ContentFill } from "../../styles/layout/ContentContainer";
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
	MessageText,
	CenteredContainer,
	ReviewForm,
	ReviewSubmitButton,
} from "../../styles/products/SingleProductViewStyle";
import { addReview, addToCart } from "../../util/functions";

/**
 * @todo Add mobile view
 */
function SingleProductView(): JSX.Element {
	const { id } = useParams<{ id: string }>();
	const [product, setProduct] = useState<ProductInterface>();
	const [reviews, setReviews] = useState<ReviewInterface[]>([]);
	const [review, setReview] = useState<string>("");
	const [userRating, setRating] = useState<number>(0);
	const [noItemsMessage, setNoItemsMessage] = useState<string>("Loading...");
	const [noReviewsMessage, setNoReviewsMessage] = useState<string>("Loading...");
	const params: Readonly<Params<string>> = useParams();

	fetchFromServer({
		url: `http://localhost:3000/products/id/${params.id}`,
		onFetch: (data: ProductInterface) => {
			setProduct(data);
			setNoItemsMessage("Item not found.");
		},
		timeout: 1000,
	});

	fetchFromServer({
		url: `http://localhost:3000/products/id/${params.id}/reviews`,
		onFetch: (data: ReviewInterface[]) => {
			setReviews(Array.isArray(data) ? data : []);
			setNoReviewsMessage("No reviews found.");
		},
		timeout: 1000,
	});

	const handleAddToCart = () => {
		try {
			addToCart(parseInt(id!), product!.price);
			alert("Product added to cart!");
		} catch (error: any) {
			alert("Error adding product to cart.");
		}
	};

	const handleReviewTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setReview(e.target.value);

	const handleRatingChange = (_: React.SyntheticEvent<Element, Event>, newValue: number | null) =>
		setRating(newValue || 0);

	const handleReviewSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (review.trim()) {
			addReview(id!, review, userRating)
				.then(() => {
					setReview("");
					setRating(0);
					alert("Review submitted!");
				})
				.catch((error: any) => alert("Error submitting review: " + error.message));
        } else {
            setReview("");
			setRating(0);
			alert("Review cannot be empty.");
		}
	};

	if (!product)
		return (
			<ContentFill>
				<Typography variant="h2">{noItemsMessage}</Typography>
			</ContentFill>
		);

	const { title, thumbnail, price, description, stock, rating } = product;

	const reviewList = reviews.map((review: ReviewInterface) => (
		<ReviewItem key={review.id}>
			<CardContent>
				<Rating value={review.rating} readOnly precision={0.5} />
				<Typography variant="body1">{review.comment}</Typography>
				<Typography variant="caption">- {review.name}</Typography>
			</CardContent>
		</ReviewItem>
	));

	const roundedRating: number | "_" = product.rating ? Math.round(product.rating * 10) / 10 : "_";

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
						<CenteredContainer>
							<Rating value={rating} readOnly precision={0.5} />
							<ProductDesctiption>{roundedRating} / 5</ProductDesctiption>
						</CenteredContainer>
						<CenteredContainer>
							<ProductDesctiption>In stock: {stock}</ProductDesctiption>
							<CartButton
								variant="contained"
								color="primary"
								disabled={product.stock <= 0}
								onClick={handleAddToCart}
							>
								Add to cart
							</CartButton>
						</CenteredContainer>
					</JustifiedContainer>
				</ProductDetailsContainer>
			</ProductContent>
			<ReviewContainer>
				<ProductName>Reviews</ProductName>
				<ReviewList>
					{reviews.length > 0 ? (
						reviewList
					) : (
						<ContentContainer>
							<MessageText sx={{ mb: "20px" }}>{noReviewsMessage}</MessageText>
						</ContentContainer>
					)}
				</ReviewList>
				<ReviewForm component="form" onSubmit={handleReviewSubmit}>
					<Rating
						value={userRating}
						onChange={handleRatingChange}
						precision={0.5}
						size="large"
						style={{ marginBottom: "10px" }}
					/>
					<TextField
						label="Add a Review"
						variant="outlined"
						fullWidth
						value={review}
						onChange={handleReviewTextChange}
						multiline
						rows={3}
					/>
					<ReviewSubmitButton type="submit" variant="contained" color="secondary">
						Submit Review
					</ReviewSubmitButton>
				</ReviewForm>
			</ReviewContainer>
		</ProductContainer>
	);
}

export default SingleProductView;
