import { ContentContainer } from "../styles/layout/ContentContainer";
import CartView from "../components/cart/CartView";

function Cart(): JSX.Element {
	return (
		<ContentContainer>
			<CartView />
		</ContentContainer>
	);
}

export default Cart;
