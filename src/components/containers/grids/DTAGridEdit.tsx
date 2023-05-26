import { COMPONENTS } from "@/src/factories/components";
import { EDIT_WITH } from "@/src/factories/with";
import { Typography, Container } from "@mui/material";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "../../input/SelectInput";
import { createSelectInputList } from "../../input/TextInput";
import { createWithEditComponent } from "../../edit/with-edit-component";

//GRID IS NOT A CONTAINER !!!!
//NOT THIS GRID ANYHOW
//WE NEED TO DISTINGUISH THIS
//Containers are top level - i.e. DTAStack
//Sub containers are simple grid etc
//Side scrollers, etc
//Then content level i.e. article

// We need to pass an id through
// a for unique id b
export const DTAGridEdit = ({ objectKey }: BaseEditProps) => {
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
		<Container>
			<Typography variant="h3">DTAGrid</Typography>
			<Typography variant="h4">Component Props</Typography>
			<Container>
				{/* Don't need */}
				<SelectInputWithControl
					label="Component Id"
					name={`${objectKey}.componentProps.componentId`}
					fullWidth={true}
					required
					// onChange={changeHandler}
				>
					{createSelectInputList(COMPONENTS)}
				</SelectInputWithControl>
			</Container>
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
		</Container>
	);
};
