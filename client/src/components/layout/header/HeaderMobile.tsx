import { Link } from "react-router-dom";
import { Menu, Search } from "@mui/icons-material";

import { HeaderContainer, Title, IconBtn, MenuButton } from "../../../styles/layout/HeaderStyle";
import Actions from "./Actions";
import { useUIContext } from "../../../context/UIContext";

function HeaderMobile(props: { matches: boolean }): JSX.Element {
	const { setDrawerOpen, setShowSearchBox } = useUIContext();

	const IconButton: React.FC<{
		onClick: () => void;
		icon: React.ReactNode;
    }> = ({ onClick, icon }) => <IconBtn onClick={onClick}>{icon}</IconBtn>;
    
    const handleDrawerOpen = () => setDrawerOpen(true);

    const handleSearchClick = () => setShowSearchBox(true);

	return (
		<HeaderContainer>
			<IconButton onClick={handleDrawerOpen} icon={<Menu />} />
			<MenuButton component={Link} to="/">
				<Title>
					Tabletop
					<br />
					Kingdom
				</Title>
			</MenuButton>
			<IconButton onClick={handleSearchClick} icon={<Search />} />
			<Actions matches={props.matches} />
		</HeaderContainer>
	);
}

export default HeaderMobile;
