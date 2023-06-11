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

// Probably move these components into their own file
// Not one each just all in one for now
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
	///////////////////////////////////////
	// There has to be an endpoint input
	// if select provide available endpoints and default
	// if text take input
	// if params are available provide an array
	////////////////////////////
	// createEndpointInput
	// if params then create inputs / string, number, select
	// form the rss feed url
	// theoretically params only available with with certain endpoints
	// check if endpoint object for 'sub' object
	////////////////////////////

	const enpointInputComponent = (
		<EndPointInputComponent
			data={endpointInput}
			onSelect={setSelectedEndpoint}
			value={selectedEndpoint}
			objectKey={objectKey}
		/>
	);

	return enpointInputComponent;
};

export const RssQueryEdit = ({ objectKey }: BaseEditProps) => {
	const [rssComponent, setRssComponent] = useState<string>("custom"); //custom as default

	return (
		<Box>
			<WithInfo infoId="RssQuery">
				<Title variant={TitleVariant.EDIT_COMPONENT} text="RSS Query" />
			</WithInfo>
			<Stack marginLeft={MARGINS.LARGE} gap={MARGINS.SMALL}>
				<WithInfo infoId="rssComponent" marginLeft={INFO_MARGINS.STANDARD_LEFT}>
					<BasicSelectInput
						label="RSS Feed"
						id={`${objectKey}.query.rssId`}
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
		</Box>
	);
};
