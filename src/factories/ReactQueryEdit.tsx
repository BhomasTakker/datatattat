import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { ReactElement } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { API_EDIT_LIST } from "../api";
import { SelectInputWithControl } from "../components/input/SelectInput";
import {
	createSelectInputList,
	TextInputWithControl,
} from "../components/input/TextInput";

//Also this ??
//Create factory component?
const createAPIComponent = (component: any): ReactElement => {
	console.log({ COMPONENTID: component });
	if (!component) {
		return <></>;
	}

	//Okay our factories aren't exactly doing anything
	// const ApiComponent = withEditFactory(component);
	const ApiComponent = API_EDIT_LIST[component];

	if (!ApiComponent) {
		//Error
		return <div>{component}</div>;
	}

	return <ApiComponent />;
};

export const ReactQueryEdit = () => {
	const { control } = useFormContext();
	const apiComponent = useWatch({
		control,
		name: `apiComponent`,
	});
	return (
		<Container>
			<Typography variant="h4">Query Object</Typography>
			<TextInputWithControl
				label={"queryId"}
				name={"queryId"}
				fullWidth={true}
				variant="outlined"
				disabled={false}
			/>
			<Container>
				<Typography variant="h5">Query Options</Typography>
				{/* KeepPreviousData checkbox */}
				{/* Should have an include/don't include checkbox for the option (With) */}
			</Container>

			<SelectInputWithControl
				label="apiComponent"
				name="apiComponent"
				fullWidth={true}
				required
				// onChange={changeHandler}
			>
				{createSelectInputList(API_EDIT_LIST)}
			</SelectInputWithControl>
			{/* Load API Edit Component */}
			{/* {createAPIComponent} */}
			{createAPIComponent(apiComponent)}
		</Container>
	);
};
