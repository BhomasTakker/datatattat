import React, { ChangeEvent, ReactElement, useState } from "react";
import { Box, MenuItem } from "@mui/material";
import { SelectInputWithControl } from "../../input/SelectInput";
import { CONTAINERS } from "@/src/factories/containers";
import {
	useFormContext,
	useFieldArray,
	useForm,
	useWatch,
} from "react-hook-form";
import { containerEditFactory } from "@/src/factories/container-factory";

//Need provide description for each
export const EditContainer = () => {
	//need actually set enum of containers keys?
	// const [container, setContainer] = useState<string | undefined>(undefined);
	const { control } = useFormContext();
	const container = useWatch({
		control,
		name: "containerSelect",
	});
	// const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
	// 	{
	// 		control, // control props comes from useForm (optional: if you are using FormContext)
	// 		name: "container", // unique name for your Field Array
	// 	}
	// );

	const createContainerList = () => {
		return Object.keys(CONTAINERS).map((container) => (
			<MenuItem key={container} value={container}>
				{container}
			</MenuItem>
		));
	};

	// const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
	// 	console.log("CHOSEN");
	// 	console.log({ value: e.target.value });
	// 	setContainer(e.target.value);
	// };

	const createContainer = (container: any): ReactElement => {
		if (!container) {
			return <></>;
		}

		const EditContainer = containerEditFactory(container);

		if (!EditContainer) {
			//Error
			return <></>;
		}

		return <EditContainer />;
	};

	return (
		<Box>
			<SelectInputWithControl
				label="Select Container"
				name="containerSelect"
				fullWidth={true}
				required
				// onChange={changeHandler}
			>
				{createContainerList()}
			</SelectInputWithControl>
			{createContainer(container)}
		</Box>
	);
};
