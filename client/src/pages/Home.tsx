import Banner from "../components/home/Banner";
import ItemSlider from "../components/home/ItemSlider";
import ContentContainer from "../styles/layout/ContentContainer";

const Home = () => {
	return (
		<ContentContainer>
            <Banner />
            <ItemSlider />
		</ContentContainer>
	);
};

export default Home;
