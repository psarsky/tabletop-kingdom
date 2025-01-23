import { useNavigate } from "react-router-dom";

import {
	CartButton,
	ProductCardContainer,
	ProductCardContent,
	ProductCardDivider,
	ProductCardDividerBig,
	ProductCardImage,
	ProductDesctiption,
	ProductDetailsContainer,
	ProductName,
	ProductPrice,
	StockRatingContainer,
} from "../../styles/products/ProductCardStyle.ts";
import { ProductInterface } from "../../util/interfaces.ts";

function ProductSliderCard(props: { product: ProductInterface }) {
	const { product } = props;
	const navigate = useNavigate();

	const handleCardClick = () => {
		if (product) {
			navigate(`/product/${product.id}`);
		}
	};

	if (product) {
		return (
			<ProductCardContainer onClick={handleCardClick}>
				<ProductCardContent>
					<ProductCardImage
						component="img"
						image={product.thumbnail}
						alt={product.title}
					/>
					<ProductDetailsContainer>
						<ProductName>
							{product.title.slice(0, 20) +
								(product.title.length > 20 ? "... " : " ")}
						</ProductName>
						<ProductCardDividerBig
							orientation="horizontal"
							flexItem
						/>
						<ProductPrice>{product.price} $</ProductPrice>
						<ProductCardDividerBig
							orientation="horizontal"
							flexItem
						/>
						<ProductDesctiption>
							{product.description}
						</ProductDesctiption>
						<ProductCardDividerBig
							orientation="horizontal"
							flexItem
						/>
						<StockRatingContainer>
							<ProductDesctiption variant="subtitle2">
								In stock: {product.stock}
							</ProductDesctiption>
							<ProductDesctiption>
								Rating: {Math.round(product.rating * 10) / 10} /
								5
							</ProductDesctiption>
						</StockRatingContainer>
					</ProductDetailsContainer>
				</ProductCardContent>
				<ProductCardDivider />
				<CartButton
					variant="contained"
					color="primary"
					disabled={product.stock <= 0}
				>
					Add to cart
				</CartButton>
			</ProductCardContainer>
		);
	}
}

export default ProductSliderCard;
