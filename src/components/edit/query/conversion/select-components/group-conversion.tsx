import { SelectComponent } from "./select-component";
import { SORT_MAP } from "@/src/components/conversions/sort/sort-map";
import { SelectConversion } from "../types";
import { useContext, useEffect } from "react";
import { ConversionsContext } from "../context/ConversionsContext";
import { Stack } from "@mui/material";
import { ConversionProps } from "../props/conversion-props";
import { GROUP_MAP } from "@/src/components/conversions/group/group-map";

export const SelectGroupConversion = ({
	objectKey,
	value,
	props,
}: SelectConversion) => {
	// const { setValue } = useFormContext();
	const { group, setFormValue } = useContext(ConversionsContext);
	const conversionsList = { ...GROUP_MAP, ...group };

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
				label="Select Group Conversion"
				name={`${objectKey}.id`}
				infoId="SelectGroupConversion"
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
