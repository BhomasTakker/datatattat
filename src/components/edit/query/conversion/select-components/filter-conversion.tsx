import { SelectComponent } from "./select-component";
import { FILTER_MAP } from "@/src/components/conversions/filter/filter-map";
import { SelectConversion } from "../types";
import { useContext, useEffect } from "react";
import { ConversionsContext } from "../context/ConversionsContext";
import { Stack } from "@mui/material";
import { ConversionProps } from "../props/conversion-props";

export const SelectFilterConversion = ({
	objectKey,
	value,
	props,
}: SelectConversion) => {
	const { filter, setFormValue } = useContext(ConversionsContext);
	const conversionsList = { ...FILTER_MAP, ...filter };

	useEffect(() => {
		if (value) {
			setFormValue(`${objectKey}.id`, value);
		}
	}, [objectKey, setFormValue, value]);

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
				props={props}
			/>
		</Stack>
	);
};
