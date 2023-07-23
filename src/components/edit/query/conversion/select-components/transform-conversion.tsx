import { useFormContext } from "react-hook-form";
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
}: SelectConversion) => {
	const { setValue } = useFormContext();
	const { transform } = useContext(ConversionsContext);
	const conversionsList = { ...TRANSFORM_MAP, ...transform };

	useEffect(() => {
		if (value) {
			setValue(`${objectKey}.id`, value);
		}
	}, [objectKey, setValue, value]);

	// When selected if props / show props

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
			/>
		</Stack>
	);
};
