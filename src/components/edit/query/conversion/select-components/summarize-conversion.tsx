import { SelectComponent } from "./select-component";
import { SelectConversion } from "../types";
import { useContext, useEffect } from "react";
import { ConversionsContext } from "../context/ConversionsContext";
import { Stack } from "@mui/material";
import { ConversionProps } from "../props/conversion-props";
import { SUMMARIZE_MAP } from "@/src/components/conversions/summarize/summarize-map";

export const SelectSummarizeConversion = ({
	objectKey,
	value,
	props,
}: SelectConversion) => {
	// const { setValue } = useFormContext();
	const { summarize, setFormValue } = useContext(ConversionsContext);
	const conversionsList = { ...SUMMARIZE_MAP, ...summarize };

	// This seems to fix the issue we have but...
	// We are rendering far to many times
	// Almost creating a disconnect between react hook form and component
	///////////////////////////////////////////
	// We could watch ourselves ?
	// I feel that would be a horrible loop
	useEffect(() => {
		if (value) {
			setFormValue(`${objectKey}.id`, value);
		}
	}, [objectKey, setFormValue, value]);

	return (
		<Stack>
			<SelectComponent
				label="Select Summarize Conversion"
				name={`${objectKey}.id`}
				infoId="SelectSummarizeConversion"
				selectList={conversionsList}
			/>
			<ConversionProps
				conversionFormId={`${objectKey}.id`}
				objectKey={objectKey}
				props={props}
			/>
		</Stack>
	);
};
