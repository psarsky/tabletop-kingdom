import { useContext, useState } from "react";
import { Typography } from "@mui/material";

import { ProductInterface } from "../../util/interfaces";
import useFetchFromServer from "../../hooks/useFetchFromServer";
import { GridContainer, MessageText } from "../../styles/products/ProductGridStyle";
import ContentContainer from "../../styles/layout/ContentContainer";
import ProductCard from "./ProductCard";
import { ProductSearchContext } from "../../context/ProductSearchContext";

function ProductGrid() {
	const [products, setProducts] = useState<ProductInterface[]>([]);
	const productSearchContext = useContext(ProductSearchContext);
	if (productSearchContext === undefined) {
		throw new Error("SearchContext must be used within a SearchProvider");
	}
	const { query } = productSearchContext;

	useFetchFromServer({
		url: `http://localhost:3000/products?&page=1&limit=10&search=${query[1]}&category=${query[0]}`,
		timeout: 1000,
		onFetch: (data: ProductInterface[]) => {
			setProducts(data);
		},
	});

	const productGrid = products.map((product: ProductInterface) => (
		<ProductCard key={product.id} product={product} />
	));

	return (
		<ContentContainer>
			<Typography variant={"h4"} p={4}>
				{query[0] || query[1]
                    ? `You are looking for ${query[1]
                        ? ": \"" + query[1] + "\""
                        : "all products"} in ${query[0]
                            ? "category: " + query[0]
                            : "all categories"}`
					: "All Products"}
			</Typography>
			<GridContainer container spacing={2}>
				{products.length > 0 ? productGrid : <MessageText>Loading items...</MessageText>}
			</GridContainer>
		</ContentContainer>
	);
}

export default ProductGrid;
