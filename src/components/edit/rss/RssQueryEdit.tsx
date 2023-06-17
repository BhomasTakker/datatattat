import { Box, Stack } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { BaseEditProps } from "@/components/forms/edit/types/BaseEdit";
import {
	TextInputWithControl,
	createSelectInputList,
} from "../../input/TextInput";
import { WithInfo } from "@/components/edit/info/WithInfo";
import { Title } from "@/components/ui/title";
import { TitleVariant } from "@/components/types/ui";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";
import { RSS_CONFIG_LIST } from "../../../rss";
import { useFormContext, useWatch } from "react-hook-form";
import { SelectInputWithControl } from "../../input/SelectInput";

// Probably move these components into their own file
// Not one each just all in one for now
const EndpointSelectInput = ({ endpoints, id, label }: any) => {
	console.log("EndpointSelectInput RENDER!");

	return (
		<WithInfo infoId="RssEndpoint">
			<SelectInputWithControl
				label={label}
				name={id}
				fullWidth={true}
				required
				// onChange={changeHandler}
			>
				{createSelectInputList(endpoints)}
			</SelectInputWithControl>
		</WithInfo>
	);
};

const EndpointTextInput = ({ id, label }: any) => {
	return (
		<WithInfo infoId="RssEndpoint">
			<TextInputWithControl
				label={label}
				name={id}
				fullWidth={true}
				// variant="outlined"
				disabled={false}
			/>
		</WithInfo>
	);
};

/////////////////////////////////////////////////////////
// We are the recursive component
// And we have parameters at this level
/////////////////////////////////////////////////////////

// N.B /////////////////////////
// We need to set value to new default if data object changes
const EndPointInputComponent = ({ data, objectKey, routeId }: any) => {
	const { setValue, getValues, resetField, unregister } = useFormContext();
	const [RecursiveComponent, setRecursiveComponent] = useState(<></>);
	const {
		type,
		id,
		endpoint = false,
		baseUrl,
		postfix = "",
		endpointObjects = {},
		endpoints,
		label,
		defaultEndpoint,
	} = data;
	const formId = `${objectKey}.${id}`;

	// console.log({ data });
	// better name / is not component
	const inputComponent = useWatch({
		name: formId,
		// defaultValue,
	});

	const selectedEndpointObject = endpointObjects[inputComponent];

	//////////////////////////////////////////////////////
	// Okay this is all a little messy
	// currently value can be from a select or text input
	// Value will either be the endpoint or an endpoints id
	// alternative perhaps
	// each select value is an object containing its full url
	const setRouteValue = useCallback(
		(data: any, val: string) => {
			const { baseUrl, endpoints, postfix } = data;
			const directory =
				endpoints && typeof endpoints[val] == "string" ? endpoints[val] : val;
			const selectedEndpoint = `${baseUrl}${directory}${postfix}`;

			setValue(routeId, selectedEndpoint);
		},
		[routeId, setValue]
	);

	useEffect(() => {
		// Tests to set input to default value on change
		// Checks if current value exists in current endpoints
		// if both choices share a field/endpoint then I believe it won't pick default
		if (!inputComponent || typeof endpoints?.[inputComponent] !== "string") {
			setValue(formId, defaultEndpoint);
		}
	}, [formId, defaultEndpoint, setValue, inputComponent, endpoints]);

	useEffect(() => {
		// unregister the form input when its id changes
		// Might require this elsewhere i.e. closer to the input object itself
		return () => {
			unregister(formId);
		};
	}, [formId, unregister]);

	// always set a route value for a default route
	// We should probably specify if an input is required
	useEffect(() => {
		setRouteValue({ baseUrl, endpoints, postfix }, inputComponent);
	}, [baseUrl, endpoints, inputComponent, postfix, setRouteValue]);

	// Create recursive component IF there is an endpointObject for our current chosen endpoint
	useEffect(() => {
		if (selectedEndpointObject) {
			setRecursiveComponent(
				<EndPointInputComponent
					data={selectedEndpointObject}
					routeId={routeId}
					objectKey={objectKey}
				/>
			);
		} else {
			setRecursiveComponent(<></>);
		}
	}, [inputComponent, objectKey, routeId, selectedEndpointObject]);

	// endpointObjects,
	// objectKey,

	////////////////////////////////////////////////
	// At this point we have the data object
	// We can listen for changes to the form 'route' propery and build the full url
	// i.e. setValue route = baseUrl + { formRoute } + postfix
	//////////////////////////////////////////////////////
	// This below pretty much
	//////////////////////////////////////////////////////
	// We need to listen for changes to 'our' id - useWatch ourDataId tick
	// On change if 'route' create route url
	// If our chosen 'endpoint' has an endpoint object
	// then create another EndpointInputComponent

	let Component;
	// Actual switch elsewhere
	// We need add params here?

	//At least move to a function
	switch (type) {
		//We don't update / because endpoint object stays the same?
		case "select":
			Component = (
				<EndpointSelectInput
					endpoints={endpoints}
					label={label}
					// onSelect={onSelect}
					// value={value}
					id={`${objectKey}.${id}`}
				/>
			);
			break;

		case "text":
		default:
			Component = (
				<EndpointTextInput
					label={label}
					// onSelect={onSelect}
					id={`${objectKey}.${id}`}
					// value={value}
				/>
			);
			break;
	}

	return (
		<Stack>
			{Component}
			{RecursiveComponent}
		</Stack>
	);
};

// We get a warning when we change feed
// selectedEndpoint doesn't exist on new thing
// THEN useState updates - after the new 'initial' render
const RSSComponent = ({ componentId, objectKey }: any) => {
	// const { setValue } = useFormContext();
	// create a route form property and set it to ''
	// how then do we set it??
	// if we are a designated end point then set route <- just set id as route / evrything else has a unique id
	// otherwise don't worry about it
	// we at that level will have the relevant inputObject

	// const selectedEndpoint = useWatch({
	// 	name: `${objectKey}.query.endpoint`,
	// });

	const config = RSS_CONFIG_LIST[componentId] || {};
	// const { baseUrl, postfix, endpoints } = config;
	// const [selectedEndpoint, setSelectedEndpoint] = useState<string>(
	// 	config.defaultEndpoint || ""
	// );

	const { endpointInput } = config;

	// useEffect(() => {
	// 	// For select or text - bit of a hack
	// 	// perhaps don't wan't to set this here
	// 	// argument for context perhaps

	// 	// How we set route would need to change
	// 	const endpoint =
	// 		(endpoints && endpoints[selectedEndpoint]) || selectedEndpoint;
	// 	const url = `${baseUrl}${endpoint}${postfix}`;
	// 	setValue(`${objectKey}.route`, url);
	// }, [baseUrl, endpoints, objectKey, postfix, selectedEndpoint, setValue]);

	// useEffect(() => {
	// 	setSelectedEndpoint(config.defaultEndpoint || "");
	// }, [componentId, config.defaultEndpoint]);

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
	console.log("RSS Component Re-render");
	console.log({ componentId });

	const enpointInputComponent = (
		<EndPointInputComponent
			//////////////////////////////////////////////
			// The bug is here - I think - log this out etc
			// When data changes destroy object completely and rewrite!!!
			//////////////////////////////////////////////////////
			data={{ ...endpointInput }}
			// onSelect={setSelectedEndpoint}
			// value={selectedEndpoint}
			objectKey={objectKey}
			routeId={`${objectKey}.route`}
		/>
	);

	return enpointInputComponent;
};

export const RssQueryEdit = ({ objectKey }: BaseEditProps) => {
	// const [rssComponent, setRssComponent] = useState<string>("custom"); //custom as default
	const rssComponent = useWatch({
		// control,
		name: `${objectKey}.query.rssFeed`,
	});
	return (
		<Box>
			<WithInfo infoId="RssQuery">
				<Title variant={TitleVariant.EDIT_COMPONENT} text="RSS Query" />
			</WithInfo>
			<Stack marginLeft={MARGINS.LARGE} gap={MARGINS.SMALL}>
				<WithInfo infoId="rssComponent" marginLeft={INFO_MARGINS.STANDARD_LEFT}>
					{/* <BasicSelectInput
						label="RSS Feed"
						//change to rssQuery or whatever
						id={`${objectKey}.query.rssFeed`}
						value={rssComponent}
						onChange={(e) => setRssComponent(e.target.value)}
					>
						{createSelectInputList(RSS_CONFIG_LIST)}
					</BasicSelectInput> */}
					<SelectInputWithControl
						label="RSS Feed"
						name={`${objectKey}.query.rssFeed`}
						fullWidth={true}
						required
						// onChange={changeHandler}
					>
						{createSelectInputList(RSS_CONFIG_LIST)}
					</SelectInputWithControl>
				</WithInfo>
				<RSSComponent
					componentId={rssComponent}
					objectKey={`${objectKey}.query`}
				/>
			</Stack>
		</Box>
	);
};
