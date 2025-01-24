import React, { useContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IconButton, Slide, InputLabel, SelectChangeEvent, MenuItem, Select } from "@mui/material";

import {
	CategorySelector,
	CloseButton,
	CloseIconButton,
	SearchBoxContainer,
	SearchButton,
	SearchField,
} from "../../../styles/layout/SearchBoxStyle";
import { useUIContext } from "../../../context/UIContext";
import { ProductSearchContext } from "../../../context/ProductSearchContext";
import { ProductSearchContextType } from "../../../util/interfaces";
import fetchFromServer from "../../../hooks/fetchFromServer";
import theme from "../../../util/theme";

function SearchBox(): JSX.Element {
	const [search, setSearch] = useState<string>("");
	const [category, setCategory] = useState<string>("");
	const [categories, setCategories] = useState<string[]>([]);
	const { showSearchBox, setShowSearchBox } = useUIContext();
	const navigate: NavigateFunction = useNavigate();
	const productSearchContext: ProductSearchContextType | undefined =
		useContext(ProductSearchContext);
	if (!productSearchContext) {
		throw new Error("ProductSearchContext must be used within a ProductSearchProvider");
	}
	const { setQuery } = productSearchContext;

	fetchFromServer({
		url: "http://localhost:3000/products/categories",
		onFetch: (data: { category: string }[]) => {
			let cats: string[] = data.map((cat: { category: string }) => cat.category);
			setCategories(["", ...cats]);
		},
	});

	const categoryList = categories.map((cat: string) => (
		<MenuItem key={cat} value={cat}>
			{cat ? cat : "All Categories"}
		</MenuItem>
	));

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	const handleSearch = () => {
		setQuery([category, search]);
		navigate(`/products`);
		setShowSearchBox(false);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleCategoryChange = (e: SelectChangeEvent<unknown>) => {
		setCategory(e.target.value as string);
	};

	const handleClose = () => setShowSearchBox(false);

	return (
		<Slide direction="down" in={showSearchBox} timeout={500}>
			<SearchBoxContainer>
				<SearchField
					variant="standard"
					fullWidth
					placeholder="Search..."
					onChange={handleInputChange}
					onKeyDown={handleKeyPress}
					value={search}
				/>
				<CategorySelector variant="standard">
					<InputLabel>Category</InputLabel>
					<Select
						value={category}
						onChange={handleCategoryChange}
						label="Category"
						MenuProps={{
							disablePortal: true,
							PaperProps: {
								style: {
									backgroundColor: theme.palette.background.default,
									color: theme.palette.text.primary,
								},
							},
						}}
					>
						{categoryList}
					</Select>
				</CategorySelector>
				<IconButton onClick={handleSearch}>
					<SearchButton />
				</IconButton>
				<CloseIconButton onClick={handleClose}>
					<CloseButton />
				</CloseIconButton>
			</SearchBoxContainer>
		</Slide>
	);
}

export default SearchBox;
