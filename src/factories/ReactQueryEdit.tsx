import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { ReactElement } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { API_EDIT_LIST } from "../api";
import { BaseEditProps } from "../components/forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "../components/input/SelectInput";
import {
	createSelectInputList,
	TextInputWithControl,
} from "../components/input/TextInput";

//Also this ??
//Create factory component?
const createAPIComponent = (
	component: any,
	objectKey: string
): ReactElement => {
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

	return <ApiComponent objectKey={objectKey} />;
};

export const ReactQueryEdit = ({ objectKey }: BaseEditProps) => {
	const { control } = useFormContext();
	const apiComponent = useWatch({
		control,
		name: `${objectKey}.query.apiId`,
	});
	return (
		<Container>
			<Typography variant="h4">Query Object</Typography>
			<TextInputWithControl
				label={"queryId"}
				name={`${objectKey}.query.queryId`}
				fullWidth={true}
				variant="outlined"
				disabled={false}
			/>
			<Container>
				<Typography variant="h5">Query Options</Typography>
				{/* KeepPreviousData checkbox */}
				{/* Should have an include/don't include checkbox for the option (With) */}
			</Container>

			{/* Do not use WithControl here - we do not need to store this id here */}
			<SelectInputWithControl
				label="apiComponent"
				name={`${objectKey}.query.apiId`}
				fullWidth={true}
				required
				// onChange={changeHandler}
			>
				{createSelectInputList(API_EDIT_LIST)}
			</SelectInputWithControl>
			{/* Load API Edit Component */}
			{/* {createAPIComponent} */}
			{createAPIComponent(apiComponent, `${objectKey}.query`)}
		</Container>
	);
};
