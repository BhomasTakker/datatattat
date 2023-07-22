import { SelectComponent } from "./select-component";
import { SORT_MAP } from "@/src/components/conversions/sort/sort-map";
import { SelectConversion } from "../types";
import { useFormContext } from "react-hook-form";
import { useContext, useEffect } from "react";
import { ConversionsContext } from "../context/ConversionsContext";

export const SelectSortConversion = ({
	objectKey,
	value,
}: SelectConversion) => {
	const { setValue } = useFormContext();
	const { sort } = useContext(ConversionsContext);
	const conversionsList = { ...SORT_MAP, ...sort };

	useEffect(() => {
		if (value) {
			setValue(`${objectKey}.id`, value);
		}
	}, [objectKey, setValue, value]);

	return (
		<SelectComponent
			label="Select Sort Conversion"
			name={`${objectKey}.id`}
			infoId="SelectSortConversion"
			selectList={conversionsList}
		/>
	);
};
