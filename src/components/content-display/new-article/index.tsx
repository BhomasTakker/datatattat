import { useInView } from "react-intersection-observer";
import { useMeta } from "../article/items/hooks/useMeta";
import { Display } from "./display/Display";

interface ArticleSource {
	src: string;
	type: string; // enum / union of ids
	size: string; // ids xs, sm, m, l, xl
	direction: string; // not sure / would be for cards left to right etc
	style: string; // list of ids - use type and style for x * x variations
}

// Article wrapper
// Pass in type
export const DisplayArticle = ({ src }: ArticleSource) => {
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const { meta, loading, error } = useMeta(src, inView);

	// We wrap with meta loader etc
	// We then load as required the particular Article Component
	// Then pass meta data to it
	// Is it better to pass title, description, etc (I think it is)
	return <div ref={ref}>{inView && meta && <Display meta={meta} />}</div>;
};
