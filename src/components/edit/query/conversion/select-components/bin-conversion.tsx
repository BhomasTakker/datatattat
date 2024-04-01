import { SelectComponent } from "./select-component";
import { SelectConversion } from "../types";
import { useContext, useEffect } from "react";
import { ConversionsContext } from "../context/ConversionsContext";
import { Stack } from "@mui/material";
import { ConversionProps } from "../props/conversion-props";
import { BIN_MAP } from "@/src/components/conversions/bin/bin-map";

export const SelectBinConversion = ({
	objectKey,
	value,
	props,
}: SelectConversion) => {
	// const { setValue } = useFormContext();
	const { bin, setFormValue } = useContext(ConversionsContext);
	const conversionsList = { ...BIN_MAP, ...bin };

	// This seems to fix the issue we have but...
	// We are rendering far to many times
	// Almost creating a disconnect between react hook form and component
	///////////////////////////////////////////
	// We shouldn't be setting here - useEffectin context?
	useEffect(() => {
		if (value) {
			setFormValue(`${objectKey}.id`, value);
		}
	}, [objectKey, setFormValue, value]);

	return (
		<Stack>
			<SelectComponent
				label="Select Bin Conversion"
				name={`${objectKey}.id`}
				infoId="SelectBinConversion"
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
