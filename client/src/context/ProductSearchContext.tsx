import { createContext, useState } from "react";

import { ProductSearchContextType } from "../util/interfaces";

const ProductSearchContext = createContext<ProductSearchContextType | undefined>(undefined);

const ProductSearchProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [query, setQuery] = useState<string[]>(["", ""]);
	const value: ProductSearchContextType = { query, setQuery };
	return <ProductSearchContext.Provider value={value}>{children}</ProductSearchContext.Provider>;
};

export { ProductSearchContext, ProductSearchProvider };
