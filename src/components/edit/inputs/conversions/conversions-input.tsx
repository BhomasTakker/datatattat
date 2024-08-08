import { TextInputWithControl } from "@/src/components/input/TextInput";
import { WithInfo } from "../../info/WithInfo";
import { ConversionsContainer } from "../../query/conversion/conversions-container";
import { ConversionObject } from "../../query/conversion/types";

// const subConversion: ConversionObject = {
// 	id: "value",
// 	iterable: true,
// 	map: articleMap,
// 	defaultConversions: [{ id: "toCollectionItem", type: "TRANSFORM" }],

// 	sort: {},
// 	filter: {},
// 	transform: {
// 		toCollectionItem: "toCollectionItem",
// 		toArticle: "toArticle",
// 	},
// };

const responseConversion: ConversionObject = {
	map: {},
	defaultConversions: [],
	sort: {},
	filter: {},
	transform: {},
	iterable: true,
};

// Conversion should be a default - or we split down type
// Default XXX conversion - Iterable Main
const defaultConversion = {
	conversionId: "DEFAULT:XLSX",
	response: responseConversion,
	// really sub objects array
	subConversions: [], // there are none
	// iterable: valueConversion,
};

type ConversionsInput = { info: string; label: string; id: string };
export const ConversionsInput = ({ id }: { id: string }) => {
	return (
		<WithInfo>
			<ConversionsContainer objectKey={id} conversion={defaultConversion} />
		</WithInfo>
	);
};

export const ConversionsInput__ = ({ info, label, id }: any) => {
	return (
		<WithInfo infoId={info}>
			<TextInputWithControl
				label={label}
				name={id}
				fullWidth={true}
				disabled={false}
			/>
		</WithInfo>
	);
};
