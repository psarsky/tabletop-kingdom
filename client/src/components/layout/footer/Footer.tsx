import { Box, List, ListItemText, Typography } from "@mui/material";
import { Copyright, Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

import {
	CopyrightElement,
	FooterContainer,
	FooterDivider,
	FooterInfoSectionContainer,
	FooterTitle,
	InfoContainer,
	InfoList,
} from "../../../styles/layout/FooterStyle";

function Footer(): JSX.Element {
	const iconStyle: { mr: number } = { mr: 6 };
	const currentYear: number = new Date().getFullYear();
	return (
		<FooterContainer>
			<FooterInfoSectionContainer>
				<InfoList>
					<FooterTitle variant="body1">About us</FooterTitle>
					<Typography variant="caption">
						Step into our online board game store—a true realm of adventure where every
						enthusiast can find their perfect match. From quick, family-friendly titles
						to deep, strategic epics for seasoned gamers, we guarantee a wide selection,
						great prices, and fast shipping. Let the fun begin!
					</Typography>
					<Box sx={{ mt: 4 }}>
						<Facebook sx={iconStyle} />
						<Instagram sx={iconStyle} />
						<Twitter sx={iconStyle} />
						<YouTube />
					</Box>
				</InfoList>
				<InfoContainer>
					<InfoList>
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
					</InfoList>
					<InfoList>
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
					</InfoList>
				</InfoContainer>
			</FooterInfoSectionContainer>
			<FooterDivider orientation="horizontal" flexItem />
			<CopyrightElement variant="body1">
				<Copyright sx={{ mr: 0.5 }} /> {currentYear}: Tabletop Kingdom
			</CopyrightElement>
		</FooterContainer>
	);
}

export default Footer;
