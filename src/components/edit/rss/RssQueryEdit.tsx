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
			{/* <BasicSelectInput
				label="Endpoint"
				id={id}
				value={value}
				onChange={(e) => onSelect(e.target.value)}
			>
				{createSelectInputList(endpoints)}
			</BasicSelectInput> */}
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
			{/* <BasicTextInput
				onChange={(e) => onSelect(e.target.value)}
				label="Endpoint"
				value={value}
				id={id}
			/> */}
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
	const { setValue, resetField, unregister } = useFormContext();
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
	// console.log({ data });
	// better name
	const inputComponent = useWatch({
		name: `${objectKey}.${id}`,
		// defaultValue,
	});

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

			console.log({ MUG: id });
			// console.log({ ARRGGGHH: typeof endpoints[val] });
			// console.log({ OOOOHHH: endpoints[val] });
			console.log({ YEEEAAAA: directory });
			console.log({ PAH: selectedEndpoint });
			console.log({ SET_routeId: routeId });
			setValue(routeId, selectedEndpoint);
		},
		[routeId, setValue]
	);

	useEffect(() => {
		// console.log("NEW RENDER THING ");
		// console.log("data.defaultValue ", data.defaultEndpoint);
		// console.log({ data });

		setValue(`${objectKey}.${id}`, defaultEndpoint);

		// This works for this but we probably need it on our actual inputs?
		// This works but...
		// We may well need it on every thing registered / which would be inputs and custom
		return () => {
			unregister(`${objectKey}.${id}`);
		};
	}, [defaultEndpoint, id, objectKey, setValue, unregister]);

	useEffect(() => {
		setRouteValue({ baseUrl, endpoints, postfix }, inputComponent);
	}, [baseUrl, endpoints, inputComponent, postfix, setRouteValue]);

	// console.log("UPDATED outer ", endpointObjects);
	useEffect(() => {
		// console.log("UPDATED ", id);

		// setRouteValue({ baseUrl, endpoints, postfix }, inputComponent);
		// const selectedEndpoint = `${baseUrl}${inputComponent}${postfix}`;
		// setValue(routeId, selectedEndpoint);

		// For select or text - bit of a hack
		// perhaps don't wan't to set this here
		// argument for context perhaps
		if (endpointObjects[inputComponent]) {
			const newData = endpointObjects[inputComponent];
			//need check new endpoint object

			//just added for now - it makes sense
			// setValue(routeId, "");
			//recurse
			setRecursiveComponent(
				<EndPointInputComponent
					data={newData}
					routeId={routeId}
					objectKey={objectKey}
				/>
			);
		} else {
			setRecursiveComponent(<></>);
		}

		//data object getting updated every change
		// parent components re-rendered when they shouldn't have been?
		// should really check the data required to be passed
	}, [inputComponent, objectKey, routeId]);

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

	// console.log("RENDER SELECT OUTER");
	// console.log({ endpoint: data.endpoints });

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
