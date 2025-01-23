import { createContext, useContext, useState, ReactNode } from "react";

type DrawerMenuContextType = {
	open: boolean;
	setOpen: (value: boolean) => void;
};

const DrawerMenuContext = createContext<DrawerMenuContextType | undefined>(
	undefined
);

const useDrawerMenuContext = (): DrawerMenuContextType => {
	const context = useContext(DrawerMenuContext);
	if (!context) {
		throw new Error(
			"useDrawerMenuContext must be used within a DrawerMenuProvider"
		);
	}
	return context;
};

const DrawerMenuProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [open, setOpen] = useState(false);
	const value = { open, setOpen };

	return (
		<DrawerMenuContext.Provider value={value}>
			{children}
		</DrawerMenuContext.Provider>
	);
};

export { DrawerMenuContext, useDrawerMenuContext, DrawerMenuProvider };
