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
import useFetchFromServer from "../../../hooks/useFetchFromServer";
import theme from "../../../util/theme";

function SearchBox(): JSX.Element {
	const [search, setSearch] = useState<string>("");
	const { showSearchBox, setShowSearchBox } = useUIContext();
	const productSearchContext: ProductSearchContextType | undefined =
		useContext(ProductSearchContext);
	const navigate: NavigateFunction = useNavigate();

	if (!productSearchContext) {
		throw new Error("ProductSearchContext must be used within a ProductSearchProvider");
	}

	const { query, setQuery } = productSearchContext;

	const handleSearch = () => {
		setQuery([query[0], search]);
		navigate(`/products`);
		setShowSearchBox(false);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};
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
				<CategorySelect />
				<IconButton onClick={handleSearch}>
					<SearchButton />
				</IconButton>
				<CloseIconButton onClick={() => setShowSearchBox(false)}>
					<CloseButton />
				</CloseIconButton>
			</SearchBoxContainer>
		</Slide>
	);
}

function CategorySelect(): JSX.Element {
	const [categories, setCategories] = useState<string[]>([]);
	const productSearchContext: ProductSearchContextType | undefined =
		useContext(ProductSearchContext);
	if (!productSearchContext) {
		throw new Error("ProductSearchContext must be used within a ProductSearchProvider");
	}
	const { query, setQuery } = productSearchContext;

	useFetchFromServer({
		url: "http://localhost:3000/products/categories",
		onFetch: (data: { category: string }[]) => {
			let cats: string[] = data.map((cat: { category: string }) => cat.category);
			setCategories(["", ...cats]);
		},
	});

	return (
		<CategorySelector variant="standard">
			<InputLabel>Category</InputLabel>
			<Select
				value={query[0]}
				onChange={(e: SelectChangeEvent<unknown>) =>
					setQuery([e.target.value as string, query[1]])
				}
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
				{categories.map((cat: string) => (
					<MenuItem key={cat} value={cat}>
						{cat ? cat : "All Categories"}
					</MenuItem>
				))}
			</Select>
		</CategorySelector>
	);
}

export default SearchBox;
