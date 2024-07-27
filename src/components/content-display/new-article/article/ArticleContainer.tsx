import { Article } from "./Article";
import { InView } from "../../../ui/InView";
import { WithMeta } from "../ui/WithMeta";
import { ArticleComponent } from "../types";

interface ArticleSource {
	src: string;
	props: Omit<ArticleComponent, "meta">;
	// type: string; // enum / union of ids
	// size: string; // ids xs, sm, m, l, xl
	// direction: string; // not sure / would be for cards left to right etc
	// style: string; // list of ids - use type and style for x * x variations
}

// Article wrapper
// Pass in type
// Meta may well want to get saved to some context and inView?
// Thinking when props change
export const ArticleContainer = ({ src, props }: ArticleSource) => {
	return (
		<InView
			options={{
				threshold: 0,
				triggerOnce: true,
			}}
		>
			<WithMeta
				src={src}
				load={true}
				component={Article}
				componentProps={props}
			></WithMeta>
		</InView>
	);
};
