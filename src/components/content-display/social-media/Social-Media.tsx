import { setDangerously } from "@/src/utils/react/set-dangerously";
import { useOembed } from "./hooks/useOembed";
import { createOembedObject } from "./oembed-object.factory";
import styles from "./SocialMedia.module.scss";
import { InView } from "../../ui/InView";

/////////////////////////////////////
// Rename me
// This is an OembedObject
// We probably want an EmbedObject
// Could easily be the same thing?
// Create embed object - just returns a 'builder'
/////////////////////////////////////
export const SocialMedia = ({ data, socialSelect, ...rest }: any) => {
	// const { ref, width, height } = useComponentSize<HTMLDivElement>();

	// we could return an actual component from this and use that
	// useful for - embedding
	const { script: SocialScript, searchParams } = createOembedObject({
		params: rest,
		id: socialSelect,
	});

	const { oembedData } = useOembed(searchParams, true);
	if (!oembedData) {
		return null;
	}

	const { html } = oembedData;
	return (
		<InView
			options={{
				threshold: 0,
				triggerOnce: true,
			}}
		>
			<div className={styles.root}>
				{SocialScript && <SocialScript />}
				<div
					className={styles.content}
					dangerouslySetInnerHTML={setDangerously(html, socialSelect)}
				></div>
			</div>
		</InView>
	);
};
