import { SelectComponent } from "./select-component";
import { TRANSFORM_MAP } from "@/src/components/conversions/transform/transform-map";
import { SelectConversion } from "../types";
import { useContext, useEffect } from "react";
import { ConversionsContext } from "../context/ConversionsContext";
import { Stack } from "@mui/material";
import { ConversionProps } from "../props/conversion-props";

// create a single one...
export const SelectTransformConversion = ({
	objectKey,
	value,
	props,
}: SelectConversion) => {
	// const { setValue } = useFormContext();
	const { transform, setFormValue } = useContext(ConversionsContext);
	const conversionsList = { ...TRANSFORM_MAP, ...transform };

	useEffect(() => {
		if (value) {
			setFormValue(`${objectKey}.id`, value);
		}
	}, [objectKey, setFormValue, value]);

	return (
		<Stack>
			<SelectComponent
				label="Select Transform Conversion"
				// pass full key in
				name={`${objectKey}.id`}
				infoId="SelectTransformConversion"
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
