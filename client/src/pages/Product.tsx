import ContentContainer from "../styles/layout/ContentContainer";
import SingleProductView from "../components/products/SingleProductView";

function Product(): JSX.Element {
	return (
		<ContentContainer>
			<SingleProductView />
		</ContentContainer>
	);
}

export default Product;
