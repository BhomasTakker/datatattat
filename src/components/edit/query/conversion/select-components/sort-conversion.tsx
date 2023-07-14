import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { SelectComponent } from "./select-component";
import { SORT_MAP } from "@/src/components/conversions/sort/sort-map";

export const SelectSortConversion = ({ objectKey }: BaseEditProps) => {
	return (
		<SelectComponent
			label="Select Sort Conversion"
			name={`${objectKey}.conversionId`}
			infoId="SelectSortConversion"
			selectList={SORT_MAP}
		/>
	);
};
