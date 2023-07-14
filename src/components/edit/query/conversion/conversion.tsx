import { useWatch } from "react-hook-form";
import { SelectComponent } from "./select-components/select-component";
import { CONVERSION_TYPES } from "./types";
import { SelectFilterConversion } from "./select-components/filter-conversion";
import { SelectSortConversion } from "./select-components/sort-conversion";
import { SelectTransformConversion } from "./select-components/transform-conversion";

type SetConversionType = string | null;

type ConversionProps = {
	conversion: any;
};

type ConversionTypeProps = {
	conversionType: string;
	objectKey: string;
};
export const ConversionType = ({
	conversionType,
	objectKey,
}: ConversionTypeProps) => {
	switch (conversionType) {
		case CONVERSION_TYPES.FILTER:
			return <SelectFilterConversion objectKey={objectKey} />;
		case CONVERSION_TYPES.SORT:
			return <SelectSortConversion objectKey={objectKey} />;
		case CONVERSION_TYPES.TRANSFORM:
			return <SelectTransformConversion objectKey={objectKey} />;
		default:
			return <>Error Component</>;
	}
};

export const Conversion = ({ conversion }: ConversionProps) => {
	// const [conversionType, setConversionType] = useState<SetConversionType>(null);
	const { objectKey } = conversion;
	const selectConversionTypeValue = useWatch({ name: `${objectKey}.id` });
	console.log({ selectConversionTypeValue });

	if (!selectConversionTypeValue) {
		return (
			<SelectComponent
				label="Conversion Id"
				name={`${objectKey}.id`}
				infoId="conversionProvider"
				selectList={CONVERSION_TYPES}
			/>
		);
	}

	return (
		<ConversionType
			conversionType={selectConversionTypeValue}
			objectKey={objectKey}
		/>
	);
};
