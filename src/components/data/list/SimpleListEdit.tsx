import { COMPONENTS } from "@/src/factories/components";
import { EDIT_WITH } from "@/src/factories/with";
import { withEditFactory } from "@/src/factories/with-factory";
import { Typography, Container, MenuItem } from "@mui/material";
import React, { ReactElement } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "../../input/SelectInput";
import { createSelectInputList } from "../../input/TextInput";

//3rd time use need to create a helper, etc somewhere sensible
//pass in array of values
//At the moment export from SelectInput seems best place
// const createComponentsList = (hash: {}) => {
// 	return Object.keys(hash).map((key) => (
// 		<MenuItem key={key} value={key}>
// 			{key}
// 		</MenuItem>
// 	));
// };

//Also this ??
//Create factory component?
const createWithEditComponent = (
	component: any,
	objectKey: string
): ReactElement => {
	console.log({ COMPONENTID: component });
	if (!component) {
		return <></>;
	}

	const EditComponent = withEditFactory(component);

	if (!EditComponent) {
		//Error
		return (
			<div>
				There was an error
				{/* {component} */}
			</div>
		);
	}

	console.log({ WITH_COMPONENT: objectKey });
	return <EditComponent objectKey={objectKey} />;
};

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
		name: `${objectKey}.selectWithComponent`,
	});

	console.log({ ONJECT_KEY: objectKey });
	return (
		<Container>
			<Typography variant="h3">SimpleList</Typography>
			<Typography variant="h4">Component Props</Typography>
			<Container>
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
				name={`${objectKey}.selectWithComponent`}
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
