import { clientsideFetch } from "@/src/api/clientside-fetch";
import { useEffect, useState } from "react";
// Needs listing somewhere
const XLSX_API_PATH = "api/query/xlsx/get";

let loading = false;

type UseData = {
	url: string;
	api: string; // type
	dataId: string;
};

// this is only for XLSX data / really just a temporary fix
export const useData = (props: UseData) => {
	const { url, api, dataId } = props;
	const [data, setData] = useState<unknown | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			loading = true;
			// try catch
			try {
				const data = await clientsideFetch({
					// type
					url: api,
					searchParams: {
						url: url,
					},
				});
				loading = false;
				// format?
				setData(data);
			} catch (error) {
				// Should pass an error message or something / log / etc etc
				setData({});
			}
		};
		fetchData();
		// BECAUSE ITS A PROP - yes
		// Do not use props as direct dependencies in a useEffect
	}, [api, url]);

	return {
		data,
		// better than this but
		results: data ? data[dataId] : undefined,
		loading,
		error: null,
	};
};
