export interface OrderInterface {
	id: number;
	total: number;
	userId: number;
	products: OrderItemInterface[];
}

export interface OrderItemInterface {
	productId: number;
	quantity: number;
	price: number;
}

export interface ProductInterface {
	id: number;
	title: string;
	price: number;
	description?: string;
	category: string;
	thumbnail: string;
	rating?: number;
	count?: number;
	stock: number;
}

export interface ReviewInterface {
	id: number;
	productId: number;
	userId: number;
	rating: number;
	comment: string;
	createdAt: string;
	updatedAt: string;
}

export interface UserInterface {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	address: string;
	postalCode: string;
	city: string;
	phone?: string;
	role: "user" | "admin";
}

export interface UIContextType {
	drawerOpen: boolean;
	setDrawerOpen: (open: boolean) => void;
	showSearchBox: boolean;
	setShowSearchBox: (open: boolean) => void;
}

export interface FetchProps<T> {
	url: string;
	dependencies?: React.DependencyList;
	onFetch?: (data: T) => void;
	timeout?: number;
}
