import { clientsideFetch } from "@/src/api/clientside-fetch";
import { useEffect, useState } from "react";

// from config
const METADATA_API_PATH = "api/query/html/meta/get";

interface Meta {
	image: string;
	title: string;
	description: string;
}

// There is almost certainly a better way of getting meta data
export const useMeta = (src: string, load: boolean = false) => {
	const [meta, setMeta] = useState<Meta | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	// Can we do this only if on screen? / React lazy on the parent component
	// useElementOnScreen perhaps?
	useEffect(() => {
		const getMeta = async () => {
			setLoading(true);
			try {
				const meta = (await clientsideFetch({
					url: METADATA_API_PATH,
					searchParams: { url: src },
				})) as Meta;
				// console.log("999", { meta });
				setLoading(false);
				setMeta(meta);
			} catch (err) {
				setLoading(false);
				setError(err as Error);
				// fallback ?
			}
		};
		// if we return null we could loop?
		if (load && !loading && !meta && !error) getMeta();
	}, [load, loading, meta, setMeta, src, error]);
	return { meta, loading, error };
};
