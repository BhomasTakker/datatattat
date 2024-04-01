import { useWatch } from "react-hook-form";
import { SelectComponent } from "./select-components/select-component";
import { CONVERSION_TYPES, ITERATOR_CONVERSION_TYPES } from "./types";
import { SelectFilterConversion } from "./select-components/filter-conversion";
import { SelectSortConversion } from "./select-components/sort-conversion";
import { SelectTransformConversion } from "./select-components/transform-conversion";
import { SelectGroupConversion } from "./select-components/group-conversion";
import { SelectBinConversion } from "./select-components/bin-conversion";
import { SelectSummarizeConversion } from "./select-components/summarize-conversion";

type SetConversionType = string | null;

type ConversionProps = {
	conversion: any;
	iterable: boolean;
	objectKey: string;
};

type ConversionTypeProps = {
	conversionType: string;
	objectKey: string;
	conversion: any;
};
const ConversionType = ({
	conversionType,
	objectKey,
	conversion,
}: ConversionTypeProps) => {
	const { id, props } = conversion;

	switch (conversionType) {
		case ITERATOR_CONVERSION_TYPES.FILTER:
			return (
				<SelectFilterConversion
					objectKey={objectKey}
					value={id}
					props={props}
				/>
			);
		case ITERATOR_CONVERSION_TYPES.SORT:
			return (
				<SelectSortConversion objectKey={objectKey} value={id} props={props} />
			);
		case CONVERSION_TYPES.TRANSFORM:
			return (
				<SelectTransformConversion
					objectKey={objectKey}
					value={id}
					props={props}
				/>
			);
		case ITERATOR_CONVERSION_TYPES.GROUP:
			return (
				<SelectGroupConversion objectKey={objectKey} value={id} props={props} />
			);
		case ITERATOR_CONVERSION_TYPES.BIN:
			return (
				<SelectBinConversion objectKey={objectKey} value={id} props={props} />
			);
		case ITERATOR_CONVERSION_TYPES.SUMMARIZE:
			return (
				<SelectSummarizeConversion
					objectKey={objectKey}
					value={id}
					props={props}
				/>
			);
		default:
			return <>Error Component</>;
	}
};

export const Conversion = ({
	conversion,
	iterable,
	objectKey,
}: ConversionProps) => {
	const selectConversionTypeValue = useWatch({ name: `${objectKey}.type` });

	// temp / have iterator list, etc
	const selectors = iterable ? ITERATOR_CONVERSION_TYPES : CONVERSION_TYPES;

	if (!selectConversionTypeValue) {
		return (
			<SelectComponent
				label="Conversion Id"
				name={`${objectKey}.type`}
				infoId="conversionProvider"
				selectList={selectors}
			/>
		);
	}

	return (
		<ConversionType
			conversionType={selectConversionTypeValue}
			objectKey={objectKey}
			conversion={conversion}
		/>
	);
};
