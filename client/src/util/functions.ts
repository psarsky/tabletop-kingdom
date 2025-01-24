const truncateText = (text: string | null | undefined, maxLength: number): string =>
	text && text.length > maxLength ? `${text.slice(0, maxLength)}...` : text || "";

export { truncateText };
