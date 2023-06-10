import { Box, Stack } from "@mui/material";
import React, { ReactElement, useState } from "react";
import { useWatch } from "react-hook-form";
import { API_EDIT_LIST } from "../api";
import { BaseEditProps } from "@/components/forms/edit/types/BaseEdit";
import {
	SelectInput,
	SelectInputWithControl,
} from "../components/input/SelectInput";
import {
	createSelectInputList,
	TextInputWithControl,
} from "../components/input/TextInput";
import { WithInfo } from "@/components/edit/info/WithInfo";
import { Title } from "@/components/ui/title";
import { TitleVariant } from "@/components/types/ui";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";
import { RSS_EDIT_LIST, RSS_LIST } from "../rss";
import { BasicSelectInput } from "../components/input/BasicSelectInput";

//Also this ??
//Create factory component?
// args componentId, componentList, objectKey
//Create Factory Component
const createRSSComponent = (
	component: any,
	objectKey: string
): ReactElement => {
	// console.log({ COMPONENTID: component });
	if (!component) {
		return <></>;
	}

	//Okay our factories aren't exactly doing anything
	// const ApiComponent = withEditFactory(component);
	const RssComponent = RSS_EDIT_LIST[component];

	if (!RssComponent) {
		//Error
		return <div>{component}</div>;
	}

	return <RssComponent objectKey={objectKey} />;
};

export const RssQueryEdit = ({ objectKey }: BaseEditProps) => {
	const [rssComponent, setRssComponent] = useState<string>("bbcRssNewsFeed"); //custom as default
	// const { control } = useFormContext();
	// const rssComponent = useWatch({
	// 	// control,
	// 	name: `${objectKey}.query.rssId`,
	// });
	return (
		<Box>
			<WithInfo infoId="RssQuery">
				<Title variant={TitleVariant.EDIT_COMPONENT} text="RSS Query" />
			</WithInfo>
			<Stack marginLeft={MARGINS.LARGE} gap={MARGINS.SMALL}>
				{/* <WithInfo
					infoId="RssQueryId"
					marginLeft={INFO_MARGINS.STANDARD_LEFT}
					marginRight={INFO_MARGINS.STANDARD_RIGHT}
				>
					<TextInputWithControl
						label={"rssId"}
						name={`${objectKey}.query.queryId`}
						fullWidth={true}
						// variant="outlined"
						disabled={false}
					/>
				</WithInfo> */}
				{/* Seperate component - 'should' be EditSelectInput? - It is already - password etc are their own beast  */}
				{/* Add these to Edit/input */}

				{/* Select input withOUT control */}
				{/* Within the given edit component set `${objectKey}.query.rssId`  */}
				<WithInfo infoId="rssComponent" marginLeft={INFO_MARGINS.STANDARD_LEFT}>
					{/* <SelectInputWithControl
						label="rssComponent"
						name={`${objectKey}.query.rssId`}
						fullWidth={true}
						required
						// onChange={changeHandler}
					>
						{createSelectInputList(RSS_EDIT_LIST)}
					</SelectInputWithControl> */}
					<BasicSelectInput
						label="rssComponent"
						// name={`${objectKey}.query.rssId`}
						id={`${objectKey}.query.rssId`}
						// defaultValue=
						value={rssComponent}
						onChange={(e) => setRssComponent(e.target.value)}
					>
						{createSelectInputList(RSS_EDIT_LIST)}
					</BasicSelectInput>
				</WithInfo>
			</Stack>

			{createRSSComponent(rssComponent, `${objectKey}.query`)}
		</Box>
	);
};
