import { IconButton, Slide } from "@mui/material";

import { useUIContext } from "../../../context/UIContext";
import {
	CloseButton,
	CloseIconButton,
	SearchBoxContainer,
	SearchButton,
	SearchField,
} from "../../../styles/layout/SearchBoxStyle";

function SearchBox() {
	const { showSearchBox, setShowSearchBox } = useUIContext();

	return (
		<Slide direction="down" in={showSearchBox} timeout={500}>
			<SearchBoxContainer>
				<SearchField
					variant="standard"
					fullWidth
					placeholder="Search..."
				/>
				<IconButton>
					<SearchButton />
				</IconButton>
				<CloseIconButton onClick={() => setShowSearchBox(false)}>
					<CloseButton />
				</CloseIconButton>
			</SearchBoxContainer>
		</Slide>
	);
}

export default SearchBox;
