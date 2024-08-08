import { clientsideFetch } from "@/src/api/clientside-fetch";
import { useEffect, useState } from "react";
import { UnknownObject } from "@/src/types";

// from config
const OEMBED_API_PATH = "api/query/new-oembed/get";

// https://oembed.com/
interface Oembed {
	image: string;
	html: string;
}

// useClientSideFetch
// There is almost certainly a better way of getting meta data
export const useOembed = (
	searchParams: UnknownObject,
	load: boolean = false
) => {
	const [oembedData, setOembedData] = useState<Oembed | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	// Can we do this only if on screen? / React lazy on the parent component
	// useElementOnScreen perhaps?
	useEffect(() => {
		const getOembedData = async () => {
			if (loading || error || oembedData) return;
			setLoading(true);
			try {
				const fetchedOembedData = (await clientsideFetch({
					url: OEMBED_API_PATH,
					searchParams,
				})) as Oembed;
				setLoading(false);
				setOembedData(fetchedOembedData);
			} catch (err) {
				setLoading(false);
				setError(err as Error);
			}
		};
		if (load && !loading && !oembedData && !error) getOembedData();
	}, [load, loading, oembedData, setOembedData, error, searchParams]);

	return { oembedData, loading, error };
};
