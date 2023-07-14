import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { SelectComponent } from "./select-component";
import { TRANSFORM_MAP } from "@/src/components/conversions/transform/transform-map";

export const SelectTransformConversion = ({ objectKey }: BaseEditProps) => {
	return (
		<SelectComponent
			label="Select Transform Conversion"
			name={`${objectKey}.conversionId`}
			infoId="SelectTransformConversion"
			selectList={TRANSFORM_MAP}
		/>
	);
};
