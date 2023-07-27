import { SelectComponent } from "./select-component";
import { SORT_MAP } from "@/src/components/conversions/sort/sort-map";
import { SelectConversion } from "../types";
import { useFormContext, useWatch } from "react-hook-form";
import { useContext, useEffect } from "react";
import { ConversionsContext } from "../context/ConversionsContext";
import { Stack } from "@mui/material";
import { ConversionProps } from "../props/conversion-props";
import { ConversionContext } from "../context/ConversionContext";

export const SelectSortConversion = ({
	objectKey,
	value,
}: SelectConversion) => {
	const { setValue } = useFormContext();
	const { updateConversion } = useContext(ConversionContext);
	const { sort } = useContext(ConversionsContext);
	const conversionsList = { ...SORT_MAP, ...sort };
	const conversionId = useWatch({ name: `${objectKey}.id` });

	useEffect(() => {
		if (value) {
			console.log("Call update ID");
			updateConversion({ id: value });
			setValue(`${objectKey}.id`, value);
		}
	}, [objectKey, setValue, value]);

	useEffect(() => {
		console.log("Call update ID");
		if (conversionId) {
			updateConversion({ id: conversionId });
		}
	}, [conversionId]);

	return (
		<Stack>
			<SelectComponent
				label="Select Sort Conversion"
				name={`${objectKey}.id`}
				infoId="SelectSortConversion"
				selectList={conversionsList}
			/>
			<ConversionProps
				conversionFormId={`${objectKey}.id`}
				objectKey={objectKey}
			/>
		</Stack>
	);
};
