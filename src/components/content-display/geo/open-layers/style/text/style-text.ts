import Text from "ol/style/Text";

export type StyleText = "Emoji";

type CreateStyleEmoji = {
	text: string;
	scale?: number;
	rotation?: number;
};
// Maybe in a text thing
// getLabel etc
export const createStyleEmoji = ({
	text,
	scale = 1,
	rotation,
}: CreateStyleEmoji) =>
	new Text({
		text,
		justify: "center",
		scale,
		rotation,
	});
type AvailableText = CreateStyleEmoji;
export type CreateText = {
	type: StyleText;
} & AvailableText;

export const createStyleText = ({ type, ...rest }: CreateText) => {
	switch (type) {
		case "Emoji":
			return createStyleEmoji(rest as CreateStyleEmoji);
	}
};
