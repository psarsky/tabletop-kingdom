import { useEffect } from "react";

import { FetchProps } from "../util/interfaces";

function useFetchFromServer(props: FetchProps) {
	const { url, dependencies, onFetch, timeout } = props;
	useEffect(() => {
		const fetchFromServer = async () => {
			fetch(url)
				.then((res: Response) => res.json())
				.then((data: any) => {
					console.log("Fetched:", data);
					if (onFetch) {
						onFetch(data);
					}
				})
				.catch((error) => {
					console.error("Error while fetching data:", error);
				});
		};

		setTimeout(() => {
			fetchFromServer();
		}, timeout);
	}, dependencies);
}

export default useFetchFromServer;
