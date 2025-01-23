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
	description: string;
	category: string;
	thumbnail: string;
	rating: number;
	count: number;
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

export interface FetchProps {
	url: string;
	dependencies?: any[];
	onFetch?: (data: any) => void;
	timeout: number;
}
