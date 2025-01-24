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
	Container,
    FormControl,
    FormControlProps
} from "@mui/material";

const centeredFlex = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const ProductContainer = styled(Container)(({ theme }: { theme: Theme }) => ({
	backgroundColor: theme.palette.background.default,
	color: theme.palette.text.primary,
	display: "flex",
	flexDirection: "column",
	margin: "30px",
}));

const ProductContent = styled(Card)(({ theme }: { theme: Theme }) => ({
	background: theme.palette.background.default,
	...centeredFlex,
	flexDirection: "column",
	gap: "30px",
	boxShadow: "0 0 0 rgb(0,0,0)",
}));

const ProductImage = styled(CardMedia)(() => ({
	backgroundColor: "white",
	width: "500px",
	height: "500px",
	borderRadius: "10px",
}));

const ProductDetailsContainer = styled(CardContent)(() => ({
	...centeredFlex,
	flexDirection: "column",
	gap: "30px",
}));

const ProductName = styled(Typography)(() => ({
	fontSize: "2rem",
}));

const ProductPrice = styled(Typography)(() => ({
	textWrap: "nowrap",
	fontWeight: "bold",
	fontSize: "3rem",
}));

const ProductDesctiption = styled(Typography)(() => ({}));

const JustifiedContainer = styled(Box)(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	width: "100%",
}));

const CenteredContainer = styled(Box)(() => ({
    ...centeredFlex,
    gap: "20px",
}));

const ProductDivider = styled(Divider)(({ theme }: { theme: Theme }) => ({
	backgroundColor: theme.palette.text.primary,
}));

const CartButton = styled(Button)(({ theme }: { theme: Theme }) => ({
	color: theme.palette.text.primary,
	height: "60px",
	fontSize: "1.5rem",
	fontWeight: "bold",
}));

const ReviewContainer = styled(Box)(() => ({
	...centeredFlex,
	flexDirection: "column",
	gap: "30px",
}));

const ReviewList = styled(Box)(() => ({
	...centeredFlex,
	flexDirection: "column",
	gap: "10px",
	minWidth: "800px",
}));

const ReviewItem = styled(Card)(({ theme }: { theme: Theme }) => ({
	background: theme.palette.secondary.main,
	margin: "10px 0",
	width: "100%",
}));

const ReviewForm = styled(FormControl)<FormControlProps>(() => ({
    marginTop: "20px",
    width: "100%",
    maxWidth: "800px"
}))

const ReviewSubmitButton = styled(Button)(({ theme }: { theme: Theme }) => ({
    color: theme.palette.text.primary, marginTop: "10px" 
}))

const MessageText = styled(Typography)(({ theme }: { theme: Theme }) => ({
	color: theme.palette.text.primary,
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
    JustifiedContainer,
    CenteredContainer,
	ReviewContainer,
	ReviewList,
    ReviewItem,
    ReviewForm,
    ReviewSubmitButton,
    MessageText
};
