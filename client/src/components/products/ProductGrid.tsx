import { useState } from "react";

import { ProductInterface } from "../../util/interfaces";
import useFetchFromServer from "../../hooks/useFetchFromServer";
import { GridContainer, MessageText } from "../../styles/products/ProductGridStyle";
import ContentContainer from "../../styles/layout/ContentContainer";
import ProductCard from "./ProductCard";

function ProductGrid() {
	const [products, setProducts] = useState<ProductInterface[]>([]);

	useFetchFromServer({
		url: "http://localhost:3000/products?limit=15&page=1",
		timeout: 1000,
		onFetch: (data: ProductInterface[]) => {
			setProducts(data);
		},
		dependencies: [],
	});

	const productGrid = products.map((product: ProductInterface) => (
		<ProductCard key={product.id} product={product} />
	));

	return (
		<ContentContainer>
			<GridContainer container spacing={2}>
				{products.length > 0 ? productGrid : <MessageText>Loading items...</MessageText>}
			</GridContainer>
		</ContentContainer>
	);
}

export default ProductGrid;
