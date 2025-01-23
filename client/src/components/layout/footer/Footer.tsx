import { Box, Divider, List, ListItemText, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { FooterTitle } from "../../../styles/layout/FooterStyle";
import theme from "../../../util/theme";
import { Copyright } from "@mui/icons-material";

function Footer() {
	return (
		<Box
			sx={{
				background: theme.palette.primary.main,
				color: theme.palette.text.primary,
				display: "flex",
				flexDirection: "column",
				gap: 4,
				p: { xs: 4, md: 6 },
				mb: { sm: "60px", md: "0" },
				fontSize: { xs: "12px", md: "14px" },
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					gap: 4,
					flexDirection: { xs: "column", md: "row" },
				}}
			>
				<Box
					sx={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						mr: { md: 2 },
					}}
				>
					<FooterTitle variant="body1">About us</FooterTitle>
					<Typography variant="caption">
						Step into our online board game store—a true realm of
						adventure where every enthusiast can find their perfect
						match. From quick, family-friendly titles to deep,
						strategic epics for seasoned gamers, we guarantee a wide
						selection, great prices, and fast shipping. Let the fun
						begin!
					</Typography>
					<Box sx={{ mt: 4 }}>
						<FacebookIcon sx={{ mr: 6 }} />
						<InstagramIcon sx={{ mr: 6 }} />
						<TwitterIcon sx={{ mr: 6 }} />
						<YouTubeIcon />
					</Box>
				</Box>
				<Box sx={{ flex: 1, display: "flex", mx: { md: 2 } }}>
					<Box
						sx={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							mx: { md: 2 },
						}}
					>
						<FooterTitle variant="body1">Information</FooterTitle>
						<List>
							<ListItemText>
								<Typography lineHeight={2} variant="caption">
									About Us
								</Typography>
							</ListItemText>
							<ListItemText>
								<Typography lineHeight={2} variant="caption">
									Order Tracking
								</Typography>
							</ListItemText>
							<ListItemText>
								<Typography lineHeight={2} variant="caption">
									Privacy &amp; Policy
								</Typography>
							</ListItemText>
							<ListItemText>
								<Typography lineHeight={2} variant="caption">
									Terms &amp; Conditions
								</Typography>
							</ListItemText>
							<ListItemText>
								<Typography lineHeight={2} variant="caption">
									Contact Us
								</Typography>
							</ListItemText>
						</List>
					</Box>
					<Box
						sx={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							ml: { md: 2 },
						}}
					>
						<FooterTitle variant="body1">My Account</FooterTitle>
						<List>
							<ListItemText>
								<Typography lineHeight={2} variant="caption">
									Login
								</Typography>
							</ListItemText>
							<ListItemText>
								<Typography lineHeight={2} variant="caption">
									Account
								</Typography>
							</ListItemText>
							<ListItemText>
								<Typography lineHeight={2} variant="caption">
									Orders
								</Typography>
							</ListItemText>
							<ListItemText>
								<Typography lineHeight={2} variant="caption">
									Reviews
								</Typography>
							</ListItemText>
							<ListItemText>
								<Typography lineHeight={2} variant="caption">
									Wishlist
								</Typography>
							</ListItemText>
						</List>
					</Box>
				</Box>
			</Box>
			<Divider
				orientation="horizontal"
				flexItem
				sx={{ bgcolor: theme.palette.text.primary }}
			/>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography
					variant="body1"
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Copyright sx={{ mr: 0.5 }} /> {new Date().getFullYear()}
					{": "}Tabletop Kingdom
				</Typography>
			</Box>
		</Box>
	);
}

export default Footer;
