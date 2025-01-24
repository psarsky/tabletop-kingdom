import Banner from "../components/home/Banner";
import ItemSlider from "../components/home/ItemSlider";
import { ContentContainer } from "../styles/layout/ContentContainer";

function Home(): JSX.Element {
	return (
		<ContentContainer>
			<Banner />
			<ItemSlider />
		</ContentContainer>
	);
};

export default Home;
