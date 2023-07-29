import { SelectComponent } from "./select-component";
import { FILTER_MAP } from "@/src/components/conversions/filter/filter-map";
import { SelectConversion } from "../types";
import { useFormContext, useWatch } from "react-hook-form";
import { useContext, useEffect } from "react";
import { ConversionsContext } from "../context/ConversionsContext";
import { Stack } from "@mui/material";
import { ConversionProps } from "../props/conversion-props";
import { ConversionContext } from "../context/ConversionContext";

export const SelectFilterConversion = ({
	objectKey,
	value,
}: SelectConversion) => {
	const { setValue } = useFormContext();
	const { updateConversion } = useContext(ConversionContext);
	const { filter, setFormValue } = useContext(ConversionsContext);
	const conversionsList = { ...FILTER_MAP, ...filter };
	const conversionId = useWatch({ name: `${objectKey}.id` });

	useEffect(() => {
		if (value) {
			console.log("Call update ID");
			// updateConversion({ id: value });
			setFormValue(`${objectKey}.id`, value);
		}
	}, [objectKey, setValue, value]);

	console.log("filterConversions");
	return (
		<Stack>
			<SelectComponent
				label="Select Filter Conversion"
				name={`${objectKey}.id`}
				infoId="SelectFilterConversion"
				selectList={conversionsList}
			/>
			<ConversionProps
				conversionFormId={`${objectKey}.id`}
				objectKey={objectKey}
			/>
		</Stack>
	);
};
