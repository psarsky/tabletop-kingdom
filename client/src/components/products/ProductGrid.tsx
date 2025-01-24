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
    const queryString = new URLSearchParams();
	if (query[0]) queryString.append("category", query[0]);
    if (query[1]) queryString.append("search", query[1]);

	useFetchFromServer({
		url: `http://localhost:3000/products?&page=1&limit=10&${queryString.toString()}`,
		timeout: 1000,
		onFetch: (data: ProductInterface[]) => {
			setProducts(data);
		},
		dependencies: [query],
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
                {products.length > 0
                    ? productGrid
                    : <MessageText sx={{ mb: "20px" }}>No items to show</MessageText>}
			</GridContainer>
		</ContentContainer>
	);
}

export default ProductGrid;
