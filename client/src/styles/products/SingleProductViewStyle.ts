import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Divider,
	styled,
	Typography,
	Theme,
} from "@mui/material";

const ProductContainer = styled(Card)(({ theme }: { theme: Theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.text.primary,
	display: "flex",
	flexDirection: "column",
	width: "800px",
	height: "600px",
	margin: "30px",
	cursor: "pointer",
	boxShadow: "0 0 6px rgba(0,0,0,0.22)",
	borderRadius: "10px",
}));

const ProductContent = styled(Box)(() => ({
	display: "flex",
	flexDirection: "row",
	gap: "10px",
	margin: 0,
	padding: 0,
}));

const ProductImage = styled(CardMedia)(() => ({
	backgroundColor: "white",
	width: "500px",
	height: "500px",
}));

const ProductDetailsContainer = styled(CardContent)(() => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	gap: "10px",
	height: "500px",
	width: "300px",
	overflow: "hidden",
}));

const ProductName = styled(Typography)(() => ({
	fontSize: "2rem",
	alignSelf: "flex-start",
	justifySelf: "center",
}));

const ProductPrice = styled(Typography)(() => ({
	textWrap: "nowrap",
	fontWeight: "bold",
	fontSize: "3rem",
	alignSelf: "flex-end",
}));

const ProductDesctiption = styled(Typography)(() => ({}));

const StockRatingContainer = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	width: "100%",
}));

const ProductDivider = styled(Divider)(({ theme }: { theme: Theme }) => ({
	backgroundColor: theme.palette.text.primary,
}));

const CartButton = styled(Button)(({ theme }: { theme: Theme }) => ({
	color: theme.palette.text.primary,
	height: "100px",
	fontSize: "1.5rem",
	fontWeight: "bold",
}));

export {
	ProductContainer,
	ProductDetailsContainer,
	ProductImage,
	ProductContent,
	ProductName,
	ProductPrice,
	ProductDesctiption,
	ProductDivider,
	CartButton,
	StockRatingContainer,
};
