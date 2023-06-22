import { Box, Stack } from "@mui/material";
import React, { ReactElement } from "react";
import { useWatch } from "react-hook-form";
import { API_EDIT_LIST } from "../../../api";
import { BaseEditProps } from "@/components/forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "../../input/SelectInput";
import {
	createSelectInputList,
	TextInputWithControl,
} from "../../input/TextInput";
import { WithInfo } from "@/components/edit/info/WithInfo";
import { Title } from "@/components/ui/title";
import { TitleVariant } from "@/components/types/ui";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";

//Also this ??
//Create factory component?
// args componentId, componentList, objectKey
//Create Factory Component
const createAPIComponent = (
	component: any,
	objectKey: string
): ReactElement => {
	// console.log({ COMPONENTID: component });
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
	// const { control } = useFormContext();
	const apiComponent = useWatch({
		// control,
		name: `${objectKey}.query.apiId`,
	});
	return (
		<Box>
			<WithInfo infoId="APIQuery">
				<Title variant={TitleVariant.EDIT_COMPONENT} text="API Query" />
			</WithInfo>
			<Stack marginLeft={MARGINS.LARGE} gap={MARGINS.SMALL}>
				<WithInfo
					infoId="ReactQueryId"
					marginLeft={INFO_MARGINS.STANDARD_LEFT}
					marginRight={INFO_MARGINS.STANDARD_RIGHT}
				>
					<TextInputWithControl
						label={"queryId"}
						name={`${objectKey}.query.queryId`}
						fullWidth={true}
						// variant="outlined"
						disabled={false}
					/>
				</WithInfo>
				{/* Seperate component - 'should' be EditSelectInput? - It is already - password etc are their own beast  */}
				{/* Add these to Edit/input */}

				<WithInfo infoId="apiComponent" marginLeft={INFO_MARGINS.STANDARD_LEFT}>
					<SelectInputWithControl
						label="apiComponent"
						name={`${objectKey}.query.apiId`}
						fullWidth={true}
						required
						// onChange={changeHandler}
					>
						{createSelectInputList(API_EDIT_LIST)}
					</SelectInputWithControl>
				</WithInfo>
			</Stack>

			{/* <Box>
				<Typography variant="h5">Query Options</Typography>
			</Box> */}
			{/* KeepPreviousData checkbox */}
			{/* Should have an include/don't include checkbox for the option (With) */}

			{/* Do not use WithControl here - we do not need to store this id here */}

			{/* Load API Edit Component */}
			{/* {createAPIComponent} */}
			{createAPIComponent(apiComponent, `${objectKey}.query`)}
		</Box>
	);
};
