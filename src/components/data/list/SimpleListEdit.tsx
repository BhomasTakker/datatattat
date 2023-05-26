import { COMPONENTS } from "@/src/factories/components";
import { EDIT_WITH } from "@/src/factories/with";
import { Typography, Box } from "@mui/material";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "../../input/SelectInput";
import { createSelectInputList } from "../../input/TextInput";
import { createWithEditComponent } from "../../edit/with-edit-component";

// We need to pass an id through
// a for unique id b
export const SimpleListEdit = ({ objectKey }: BaseEditProps) => {
	const { control } = useFormContext();
	//These are dangerous
	//When set as i.e. an object (_with)
	//if subsequently the _with object checges it counts as this _with changing!
	//Clever but dumb!
	const withComponent = useWatch({
		control,
		name: `${objectKey}._with.type`,
	});

	// console.log({ ONJECT_KEY: objectKey });
	return (
		<Box marginLeft={"2rem"}>
			<Typography variant="h3">SimpleList</Typography>
			<Typography variant="h4">Component Props</Typography>
			<Box marginLeft={"2rem"}>
				<SelectInputWithControl
					label="Component Id"
					name={`${objectKey}.componentProps.componentId`}
					fullWidth={true}
					required
					// onChange={changeHandler}
				>
					{/* //This needs to be item components - i.e. article list item, article card, article stub, etc */}
					{/* Would you / Could you distinguish between list and say layout components - should you */}
					{createSelectInputList(COMPONENTS)}
				</SelectInputWithControl>
			</Box>
			<Typography>With (Select behaviour)</Typography>
			<SelectInputWithControl
				// label="Component Id"
				name={`${objectKey}._with.type`}
				fullWidth={true}
				required
				// onChange={changeHandler}
			>
				{createSelectInputList(EDIT_WITH)}
			</SelectInputWithControl>
			{createWithEditComponent(withComponent, `${objectKey}._with`)}
		</Box>
	);
};
