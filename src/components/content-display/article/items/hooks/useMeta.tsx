import { clientsideFetch } from "@/src/api/clientside-fetch";
import { useEffect, useState } from "react";

// from config
const METADATA_API_PATH = "api/query/html/meta/get";

interface Meta {
	image: string;
}

// There is almost certainly a better way of getting meta data
// this way is probably terribly unperformant
// I mean we're even launching cromium every time!
// but again this could be available to paying memebers, etc
export const useMeta = (src: string, load: boolean = false) => {
	const [meta, setMeta] = useState<Meta | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	// Can we do this only if on screen?
	// useElementOnScreen perhaps?
	useEffect(() => {
		const getMeta = async () => {
			setLoading(true);
			try {
				const meta = (await clientsideFetch({
					url: METADATA_API_PATH,
					searchParams: { url: src },
				})) as Meta;
				setLoading(false);
				setMeta(meta);
			} catch (err) {
				setLoading(false);
				setError(err as Error);
			}
		};
		if (load && !loading && !meta) getMeta();
	}, [load, loading, meta, setMeta, src]);
	return { meta, loading, error };
};
