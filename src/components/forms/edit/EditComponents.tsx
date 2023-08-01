import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { ComponentEdit } from "../../edit/component/ComponentEdit";
import { BaseEditProps } from "./types/BaseEdit";
import AddIcon from "@mui/icons-material/Add";
import { MARGINS } from "config/styles/styles.config";

// TODO: Create Context
// This or US is where or whereabouts we need the Context creating to manage the array etc

//We need to create a Compound Component
//That is a managed array
//So we can manage the created components
export const EditComponents = ({ objectKey }: BaseEditProps) => {
	const { getValues, setValue } = useFormContext();
	// const watchComponents = watch("content.components") || [];
	const watchComponents = useWatch({ name: "content.components" }) || [];

	const onDelete = (id: number) => {
		const updatedWatchComponents = [...watchComponents];
		updatedWatchComponents.splice(id, 1);
		setValue("content.components", updatedWatchComponents);
	};
	const onMove = (id: number, dir: number) => {
		const updatedWatchComponents = [...watchComponents];
		updatedWatchComponents.splice(id, 1);

		const formItem = getValues(`content.components.${id}`);

		updatedWatchComponents.splice(id + dir, 0, formItem);
		setValue("content.components", updatedWatchComponents);
	};

	//argument to be just create a component
	const renderComponents = watchComponents.map((component: any, i: number) => {
		return (
			<Stack direction="row" key={i}>
				<ComponentEdit
					//This needs to change with re-order
					objectKey={`${objectKey}.components.${i}`}
					onDelete={() => onDelete(i)}
					onMove={(dir) => onMove(i, dir)}
				/>
			</Stack>
		);
	});

	//We have to let the form context lead
	//Modify form context to re-order list
	const addComponentHandlerAtEnd = () => {
		// const components = getValues("content.components") || [];
		setValue("content.components", [...watchComponents, ""]);
	};
	const addComponentHandlerAtBeginning = () => {
		// const components = getValues("content.components") || [];
		// resetField("content.components");
		setValue("content.components", ["", ...watchComponents]);
		// setValue("content.components.0", "");
	};
	return (
		<Box paddingTop={MARGINS.MIDSMALL} paddingBottom={MARGINS.MIDSMALL}>
			<Button onClick={addComponentHandlerAtBeginning} startIcon={<AddIcon />}>
				Add Component
			</Button>
			{renderComponents}
			<Button onClick={addComponentHandlerAtEnd} startIcon={<AddIcon />}>
				Add Component
			</Button>
		</Box>
	);
};
