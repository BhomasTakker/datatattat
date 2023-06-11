import { Box, Stack } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import { BaseEditProps } from "@/components/forms/edit/types/BaseEdit";
import { createSelectInputList } from "../../input/TextInput";
import { WithInfo } from "@/components/edit/info/WithInfo";
import { Title } from "@/components/ui/title";
import { TitleVariant } from "@/components/types/ui";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";
import { RSS_CONFIG_LIST, RSS_EDIT_LIST } from "../../../rss";
import { BasicSelectInput } from "../../input/BasicSelectInput";
import { BasicTextInput } from "../../input/BasicTextInput";
import { useFormContext } from "react-hook-form";

//Also this ??
//Create factory component?
// args componentId, componentList, objectKey
//Create Factory Component

//Don't load an edit component
//get config and build one off of it
// const createRSSComponent = (
// 	component: any,
// 	objectKey: string
// ): ReactElement => {
// 	// console.log({ COMPONENTID: component });
// 	if (!component) {
// 		return <></>;
// 	}

// 	const config = RSS_CONFIG_LIST[component];

// 	//Okay our factories aren't exactly doing anything
// 	// const ApiComponent = withEditFactory(component);
// 	const RssComponent = RSS_EDIT_LIST[component];

// 	if (!RssComponent) {
// 		//Error
// 		return <div>{component}</div>;
// 	}

// 	return <></>;
// 	//  <RssComponent objectKey={objectKey} />;
// };

//WithInfo away from here?
// Probably doesn't really matter much
const EndpointSelectInput = ({ endpoints, onSelect, value, id }: any) => {
	return (
		<WithInfo infoId="RssEndpoint">
			<BasicSelectInput
				label="Endpoint"
				id={id}
				value={value}
				onChange={(e) => onSelect(e.target.value)}
			>
				{createSelectInputList(endpoints)}
			</BasicSelectInput>
		</WithInfo>
	);
};

const EndpointTextInput = ({ onSelect, id, value }: any) => {
	return (
		<WithInfo infoId="RssEndpoint">
			<BasicTextInput
				onChange={(e) => onSelect(e.target.value)}
				label="Endpoint"
				value={value}
				id={id}
			/>
		</WithInfo>
	);
};

const EndPointInputComponent = ({ data, onSelect, value, objectKey }: any) => {
	const { type } = data;

	switch (type) {
		case "select":
			return (
				<EndpointSelectInput
					endpoints={data.endpoints}
					onSelect={onSelect}
					value={value}
					id={`${objectKey}.query.rssId`}
				/>
			);

		case "text":
		default:
			return (
				<EndpointTextInput
					onSelect={onSelect}
					id={`${objectKey}.query.rssId`}
					value={value}
				/>
			);
	}
};

// We get a warning when we change feed
// selectedEndpoint doesn't exist on new thing
// THEN useState updates - after the new 'initial' render
const RSSComponent = ({ componentId, objectKey }: any) => {
	const { setValue } = useFormContext();

	const config = RSS_CONFIG_LIST[componentId] || {};
	const [selectedEndpoint, setSelectedEndpoint] = useState<string>(
		config.defaultEndpoint || ""
	);

	const { endpointInput } = config;

	useEffect(() => {
		const { baseUrl, postfix, endpoints } = config;
		// For select or text - bit of a hack
		// perhaps don't wan't to set this here
		// argument for context perhaps

		const endpoint =
			(endpoints && endpoints[selectedEndpoint]) || selectedEndpoint;
		const url = `${baseUrl}${endpoint}${postfix}`;
		setValue(`${objectKey}.route`, url);
	}, [config, objectKey, selectedEndpoint, setValue]);

	useEffect(() => {
		setSelectedEndpoint(config.defaultEndpoint || "");
	}, [componentId, config.defaultEndpoint]);

	if (!componentId) {
		return <></>; //errorComponent
	}

	console.log({ RSS_CONFIG_LIST });
	console.log({ componentId });
	console.log({ config });

	///////////////////////////////////////
	// There has to be an endpoint input
	// if select provide available endpoints and default
	// if text take input
	// if params are available provide an array
	////////////////////////////
	// createEndpointInput
	// pass in setEndpoint & inputObject - see BBC
	// if params then create inputs / string, number, select
	// form the rss feed url
	// theoretically params only available with with certain endpoints
	// check if endpoint object for 'sub' object
	////////////////////////////
	// All rss feeds will just require a 'config'
	/////////////////////
	// Need a response conversion
	///////////////////////////////////////////////

	const enpointInputComponent = (
		<EndPointInputComponent
			data={endpointInput}
			onSelect={setSelectedEndpoint}
			value={selectedEndpoint}
			objectKey={objectKey}
		/>
	);
	// const endpoints = (
	// 	// <Box marginLeft={MARGINS.LARGE}>
	// 	<WithInfo infoId="RssEndpoint">
	// 		<BasicSelectInput
	// 			label="Endpoint"
	// 			// name={`${objectKey}.query.rssId`}
	// 			id={`${objectKey}.query.rssId`}
	// 			// defaultValue=
	// 			value={selectedEndpoint}
	// 			onChange={(e) => setSelectedEndpoint(e.target.value)}
	// 		>
	// 			{createSelectInputList(config.endpoints)}
	// 		</BasicSelectInput>
	// 	</WithInfo>
	// 	// </Box>
	// );

	return enpointInputComponent;
};

export const RssQueryEdit = ({ objectKey }: BaseEditProps) => {
	const [rssComponent, setRssComponent] = useState<string>("custom"); //custom as default

	// const { control } = useFormContext();
	// const rssComponent = useWatch({
	// 	// control,
	// 	name: `${objectKey}.query.rssId`,
	// });
	console.log({ rssComponent });
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
						label="RSS Feed"
						// name={`${objectKey}.query.rssId`}
						id={`${objectKey}.query.rssId`}
						// defaultValue=
						value={rssComponent}
						onChange={(e) => setRssComponent(e.target.value)}
					>
						{createSelectInputList(RSS_CONFIG_LIST)}
					</BasicSelectInput>
				</WithInfo>
				<RSSComponent
					componentId={rssComponent}
					objectKey={`${objectKey}.query`}
				/>
			</Stack>

			{/* {createRSSComponent(rssComponent, `${objectKey}.query`)} */}
		</Box>
	);
};
