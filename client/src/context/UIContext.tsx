import React, { createContext, useContext, useState } from "react";

interface UIContextType {
	drawerOpen: boolean;
	setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
	showSearchBox: boolean;
	setShowSearchBox: React.Dispatch<React.SetStateAction<boolean>>;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

const useUIContext = (): UIContextType => {
	const context = useContext(UIContext);
	if (!context) {
		throw new Error("useUIContext must be used within a UIProvider");
	}
	return context;
};

const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [showSearchBox, setShowSearchBox] = useState(false);

	const value = {
		drawerOpen,
		setDrawerOpen,
		showSearchBox,
		setShowSearchBox,
	};

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export { UIContext, useUIContext, UIProvider };
