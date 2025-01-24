import { useEffect, useState } from "react";
import { Slide } from "@mui/material";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";


import {
	ItemSliderContainer,
	MessageText,
	SlideContainer,
	SliderControlContainer,
	SliderTitle,
} from "../../styles/home/ItemSliderStyle";
import { IconBtn } from "../../styles/layout/HeaderStyle";
import { ProductInterface } from "../../util/interfaces";
import useFetchFromServer from "../../hooks/useFetchFromServer";
import ProductSliderCard from "../products/ProductSliderCard";

function ItemSlider(): JSX.Element {
	const [productIndex, setProductIndex] = useState<number>(0);
	const [show, setShow] = useState<boolean>(true);
	const [products, setProducts] = useState<ProductInterface[]>([]);

	useFetchFromServer<ProductInterface[]>({
		url: "http://localhost:3000/products",
		timeout: 1000,
		onFetch: (data: ProductInterface[]) => {
			let random: ProductInterface[] = data.sort(() => 0.5 - Math.random()).slice(0, 5);
			setProducts(random);
		},
		dependencies: [],
	});

	const handleNext = () => {
		setShow(false);
		setTimeout(() => {
			setProductIndex((prev: number) => (prev + 1) % 5);
			setShow(true);
		}, 1000);
	};

	useEffect(() => {
		const intervalID = setInterval(() => {
			handleNext();
		}, 5000) as unknown as number;

		return () => clearInterval(intervalID);
	}, [products, productIndex]);

	return (
		<ItemSliderContainer>
			<SliderTitle>Random items of the day</SliderTitle>
			<SliderControlContainer>
				<IconBtn>
					<NavigateBefore />
				</IconBtn>
				<SlideContainer>
					<Slide
						direction={show ? "left" : "right"}
						in={show}
						timeout={{ enter: 500, exit: 500 }}
					>
						<div>
							{" "}
							{/* Do not change, literally NOTHING ELSE WORKS */}
							{products.length > 0 ? (
								<ProductSliderCard product={products[productIndex]} />
							) : (
								<MessageText>Loading...</MessageText>
							)}
						</div>
					</Slide>
				</SlideContainer>
				<IconBtn onClick={handleNext}>
					<NavigateNext />
				</IconBtn>
			</SliderControlContainer>
		</ItemSliderContainer>
	);
}

export default ItemSlider;
