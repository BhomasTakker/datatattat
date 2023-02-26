import { Box, Button } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ComponentEdit } from "../../containers/stack/ComponentEdit";
import { BaseEditProps } from "./types/BaseEdit";

//We need to create a Compound Component
//That is a managed array
//So we can manage the created components
export const EditComponents = ({ objectKey }: BaseEditProps) => {
	const { watch, getValues, setValue } = useFormContext();
	const watchComponents = watch("content.components") || [];

	const renderComponents = watchComponents.map((component: any, i: number) => {
		return (
			<ComponentEdit
				key={i}
				//This needs to change with re-order
				objectKey={`${objectKey}.components.${i}`}
			/>
		);
	});

	//We have to let the form context lead
	//Modify form context to re-order list
	const addComponentHandler = () => {
		const components = getValues("content.components") || [];
		setValue("content.components", [...components, ""]);
	};
	return (
		<Box>
			{renderComponents}
			<Button onClick={addComponentHandler}>Add Component</Button>
		</Box>
	);
};
