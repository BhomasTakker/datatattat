import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { ComponentEdit } from "../../containers/stack/ComponentEdit";
import { BaseEditProps } from "./types/BaseEdit";

//We need to create a Compound Component
//That is a managed array
//So we can manage the created components
export const EditComponents = ({ objectKey }: BaseEditProps) => {
	const [components, setComponents] = useState<JSX.Element[]>([]);

	const addComponentHandler = () => {
		setComponents((state) => {
			return [
				...state,
				<ComponentEdit
					key={state.length}
					//This needs to change with re-order
					objectKey={`${objectKey}.components.${state.length}`}
				/>,
			];
		});
	};
	return (
		<Box>
			{components}
			<Button onClick={addComponentHandler}>Add Component</Button>
		</Box>
	);
};
