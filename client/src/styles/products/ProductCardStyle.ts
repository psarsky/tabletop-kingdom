import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Divider,
	styled,
	Typography,
} from "@mui/material";

import theme from "../../util/theme";

const ProductCardContainer = styled(Card)(() => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.text.primary,
	display: "flex",
	flexDirection: "column",
	width: "400px",
	height: "570px",
	margin: "30px",
	cursor: "pointer",
	boxShadow: "0 0 6px rgba(0,0,0,0.22)",
	borderRadius: "10px",
	"&:hover": {
		transform: "scale(1.05)",
		transition: "all 0.2s",
		boxShadow: "0 0 12px rgba(0,0,0,1)",
	},
	[theme.breakpoints.down("sm")]: {
		width: "200px",
		height: "300px",
	},
	[theme.breakpoints.up("lg")]: {
		width: "800px",
		height: "600px",
	},
}));

const ProductCardContent = styled(Box)(() => ({
	display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: 0,
    padding: 0,
    [theme.breakpoints.up("lg")]: {
        flexDirection: "row",
	},
}));

const ProductCardDividerBig = styled(Divider)(() => ({
	backgroundColor: theme.palette.text.primary,
}));

const ProductCardImage = styled(CardMedia)(
	(_props: { component: string; alt: string }) => ({
		backgroundColor: "white",
		width: "400px",
		height: "400px",
		[theme.breakpoints.down("sm")]: {
			width: "200px",
			height: "200px",
		},
		[theme.breakpoints.up("lg")]: {
			width: "500px",
			height: "500px",
		},
	})
);

const ProductDetailsContainer = styled(CardContent)(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "10px",
	height: "100px",
	overflow: "hidden",
	[theme.breakpoints.down("sm")]: {
		height: "50px",
	},
    [theme.breakpoints.up("lg")]: {
        flexDirection: "column",
        height: "500px",
	},
}));

const ProductName = styled(Typography)(() => ({
	fontSize: "1.5rem",
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.8rem",
	},
	[theme.breakpoints.up("lg")]: {
        fontSize: "2rem",
        alignSelf: "flex-start",
        justifySelf: "center",
	},
}));

const ProductPrice = styled(Typography)(() => ({
	textWrap: "nowrap",
	fontWeight: "bold",
	fontSize: "1.6rem",
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.8rem",
	},
	[theme.breakpoints.up("lg")]: {
		fontSize: "3rem",
		alignSelf: "flex-end",
	},
}));

const ProductDesctiption = styled(Typography)(() => ({
    [theme.breakpoints.down("lg")]: {
        display: "none",
    },
}))

const StockRatingContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
        display: "none",
    },
}))

const ProductCardDivider = styled(Divider)(() => ({
	backgroundColor: theme.palette.text.primary,
}));

const CartButton = styled(Button)(() => ({
	color: theme.palette.text.primary,
	height: "100px",
	fontSize: "1.5rem",
	fontWeight: "bold",
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.8rem",
	},
}));

export {
	ProductCardContainer,
	ProductDetailsContainer,
	ProductCardImage,
	ProductCardContent,
	ProductName,
	ProductPrice,
	ProductDesctiption,
	ProductCardDivider,
	CartButton,
	ProductCardDividerBig,
	StockRatingContainer,
};
