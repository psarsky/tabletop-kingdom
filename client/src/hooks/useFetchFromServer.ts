import { useEffect } from "react";

import { FetchProps } from "../util/interfaces";

function useFetchFromServer<T>(props: FetchProps<T>): void {
    const { url, dependencies = [], onFetch, timeout = 0 } = props;
    console.log("Fetching data from:", url);

	useEffect(() => {
		const fetchFromServer = async (): Promise<void> => {
			fetch(url)
				.then((res: Response) => res.json())
				.then((data: T) => {
					console.log("Fetched:", data);
					if (onFetch) onFetch(data);
				})
				.catch((error: any) => {
					console.error("Error while fetching data:", error);
				});
		};
		const timer: number = setTimeout(fetchFromServer, timeout);
		return () => clearTimeout(timer);
	}, dependencies);
}

export default useFetchFromServer;
