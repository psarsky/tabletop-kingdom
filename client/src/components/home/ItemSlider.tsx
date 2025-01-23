import { useEffect, useState } from "react";
import { Box, Slide } from "@mui/material";

import {
	ItemSliderContainer,
	MessageText,
} from "../../styles/home/ItemSliderStyle";

const messages: string[] = [
	"asdasdasdasdasdasdfasdfg",
	"Asdfgasdgasdgadfgsdgafg",
	"Adfasdgsdfghbnsdfbhxfgjn",
];

function ItemSlider() {
	const [messageIndex, setMessageIndex] = useState<number>(0);
	const [show, setShow] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setShow(false);
		}, 4000);

		const intervalID = setInterval(() => {
			setMessageIndex((prev: number) => (prev + 1) % messages.length);
			setShow(true);
			setTimeout(() => {
				setShow(false);
			}, 4000);
		}, 5000);

		return () => clearInterval(intervalID);
	}, []);

	return (
		<ItemSliderContainer>
			<Slide
				direction={show ? "left" : "right"}
				in={show}
				timeout={{ enter: 500, exit: 100 }}
			>
				<Box display="flex" justifyContent="center" alignItems="center">
					<MessageText>{messages[messageIndex]}</MessageText>
				</Box>
			</Slide>
		</ItemSliderContainer>
	);
}

export default ItemSlider;
