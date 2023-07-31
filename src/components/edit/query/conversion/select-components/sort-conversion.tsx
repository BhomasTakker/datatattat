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
	props,
}: SelectConversion) => {
	// const { setValue } = useFormContext();
	const { sort, setFormValue } = useContext(ConversionsContext);
	const conversionsList = { ...SORT_MAP, ...sort };

	// This seems to fix the issue we have but...
	// We are rendering far to many times
	// Almost creating a disconnect between react hook form and component
	///////////////////////////////////////////
	// We could watch ourselves ?
	// I feel that would be a horrible loop
	if (value) {
		setFormValue(`${objectKey}.id`, value);
	}

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
				props={props}
			/>
		</Stack>
	);
};
