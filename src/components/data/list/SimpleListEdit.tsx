import { COMPONENTS } from "@/src/factories/components";
import { EDIT_WITH } from "@/src/factories/with";
import { withEditFactory } from "@/src/factories/with-factory";
import { Typography, Container, MenuItem } from "@mui/material";
import React, { ReactElement } from "react";
import { useFormContext, useWatch } from "react-hook-form";
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
const createWithEditComponent = (component: any): ReactElement => {
	console.log({ COMPONENTID: component });
	if (!component) {
		return <></>;
	}

	const EditComponent = withEditFactory(component);

	if (!EditComponent) {
		//Error
		return <div>{component}</div>;
	}

	return <EditComponent />;
};

// We need to pass an id through
// a for unique id b
export const SimpleListEdit = () => {
	const { control } = useFormContext();
	const withComponent = useWatch({
		control,
		name: `componentWith`,
	});
	return (
		<Container>
			<Typography variant="h3">SimpleList</Typography>
			<Typography variant="h4">Component Props</Typography>
			<Container>
				<SelectInputWithControl
					label="Component Id"
					name="componentId"
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
				name="componentWith"
				fullWidth={true}
				required
				// onChange={changeHandler}
			>
				{createSelectInputList(EDIT_WITH)}
			</SelectInputWithControl>
			{createWithEditComponent(withComponent)}
		</Container>
	);
};
