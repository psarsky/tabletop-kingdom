import React, { createContext, useContext, useState } from "react";

import { UIContextType } from "../util/interfaces";

const UIContext = createContext<UIContextType | undefined>(undefined);

const useUIContext = () => {
	const context: UIContextType | undefined = useContext(UIContext);
	if (!context) {
		throw new Error("useUIContext must be used within a UIProvider");
	}
	return context;
};

const UIProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const [showSearchBox, setShowSearchBox] = useState<boolean>(false);

	const value: UIContextType = {
		drawerOpen,
		setDrawerOpen,
		showSearchBox,
		setShowSearchBox,
	};

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export { UIContext, useUIContext, UIProvider };
