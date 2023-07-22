import { useWatch, useFormContext } from "react-hook-form";
import { SelectComponent } from "./select-components/select-component";
import { CONVERSION_TYPES, ITERATOR_CONVERSION_TYPES } from "./types";
import { SelectFilterConversion } from "./select-components/filter-conversion";
import { SelectSortConversion } from "./select-components/sort-conversion";
import { SelectTransformConversion } from "./select-components/transform-conversion";
import { useEffect } from "react";

type SetConversionType = string | null;

type ConversionProps = {
	conversion: any;
	iterable: boolean;
	objectKey: string;
};

type ConversionTypeProps = {
	conversionType: string;
	objectKey: string;
	value: string | undefined;
};
export const ConversionType = ({
	conversionType,
	objectKey,
	value,
}: ConversionTypeProps) => {
	switch (conversionType) {
		case ITERATOR_CONVERSION_TYPES.FILTER:
			return <SelectFilterConversion objectKey={objectKey} value={value} />;
		case ITERATOR_CONVERSION_TYPES.SORT:
			return <SelectSortConversion objectKey={objectKey} value={value} />;
		case CONVERSION_TYPES.TRANSFORM:
			return <SelectTransformConversion objectKey={objectKey} value={value} />;
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
	const { setValue } = useFormContext();
	const { id, type } = conversion;

	useEffect(() => {
		if (type) {
			setValue(`${objectKey}.type`, type);
		}
	}, [type, objectKey, setValue]);

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

	// console.log({ HEREYA: id });
	return (
		<ConversionType
			conversionType={selectConversionTypeValue}
			objectKey={objectKey}
			value={id}
		/>
	);
};
