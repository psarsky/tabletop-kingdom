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
import { truncateText } from "../../util/functions.ts";

function ProductCard(props: { product: ProductInterface }): JSX.Element {
	const { product } = props;
	const navigate = useNavigate();

	const handleCardClick = () => {
		if (product) {
			navigate(`/products/id/${product.id}`);
		}
	};

	const roundedRating: number | "_" = product.rating ? Math.round(product.rating * 10) / 10 : "_";

	return (
		<ProductCardContainer onClick={handleCardClick}>
			<ProductCardContent>
				<ProductCardImage image={product.thumbnail} />
				<ProductDetailsContainer>
					<ProductName>{truncateText(product.title, 20)}</ProductName>
					<ProductCardDividerBig orientation="horizontal" flexItem />
					<ProductPrice>${product.price}</ProductPrice>
					<ProductCardDividerBig orientation="horizontal" flexItem />
					<ProductDesctiption>{product.description}</ProductDesctiption>
					<ProductCardDividerBig orientation="horizontal" flexItem />
					<StockRatingContainer>
						<ProductDesctiption variant="subtitle2">
							In stock: {product.stock}
						</ProductDesctiption>
						<ProductDesctiption>Rating: {roundedRating} / 5</ProductDesctiption>
					</StockRatingContainer>
				</ProductDetailsContainer>
			</ProductCardContent>
			<ProductCardDivider />
			<CartButton variant="contained" color="primary" disabled={product.stock <= 0}>
				Add to cart
			</CartButton>
		</ProductCardContainer>
	);
}

export default ProductCard;
