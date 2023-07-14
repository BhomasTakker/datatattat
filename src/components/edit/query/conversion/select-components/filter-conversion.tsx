import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { SelectComponent } from "./select-component";
import { FILTER_MAP } from "@/src/components/conversions/filter/filter-map";

export const SelectFilterConversion = ({ objectKey }: BaseEditProps) => {
	console.log("filterConversions");
	return (
		<SelectComponent
			label="Select Filter Conversion"
			name={`${objectKey}.conversionId`}
			infoId="SelectFilterConversion"
			selectList={FILTER_MAP}
		/>
	);
};
