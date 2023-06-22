import { Box, Stack } from "@mui/material";
import React, { ReactElement, useCallback, useEffect, useState } from "react";
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
import { Parameters } from "./parameters/Parameters";
import { EditSelectInput, EditTextInput } from "./RssInputComponents";
import { useUnregisterForm } from "../hooks/useUnregisterForm";

/////////////////////////////////////////////////////////
// We are the recursive component
// And we have parameters at this level
/////////////////////////////////////////////////////////

type RSSQueryComponentProps = {
	id: string;
	label: string;
	type: string;
	objectKey: string;
	options: any[];
};
const RSSQueryComponent = ({
	id,
	label,
	options,
	type,
	objectKey,
}: RSSQueryComponentProps) => {
	// const { type, id, label, options } = data;
	// const { objectKey, updateParameters } = useContext(ParametersContext);
	const parameterId = `${objectKey}.${id}`;

	// const parameterFormState = useWatch({
	// 	name: parameterId,
	// });

	switch (type) {
		case "text":
			console.log("RERENDERED THIS BUGGER");
			return <EditTextInput id={parameterId} label={label} />;

		case "select":
			return (
				<EditSelectInput endpoints={options} id={parameterId} label={label} />
			);
		default:
			return <></>;
	}
};
// N.B /////////////////////////
// We need to set value to new default if data object changes
const EndPointInputComponent = ({ data, objectKey, routeId }: any) => {
	const { setValue, unregister } = useFormContext();
	const [RecursiveComponent, setRecursiveComponent] =
		useState<ReactElement | null>(null);
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
		params,
	} = data;
	const formId = `${objectKey}.${id}`;

	// console.log({ data });
	// better name / is not component / is our value
	const inputComponent = useWatch({
		name: formId,
		// defaultValue,
	});

	// is there any reason why we would return a value?
	// Even if error etc - i.e. nope nothing registered by that name?
	useUnregisterForm(formId);

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

	// default Values need a big think over
	useEffect(() => {
		// Tests to set input to default value on change
		// Checks if current value exists in current endpoints
		// if both choices share a field/endpoint then I believe it won't pick default
		if (
			!inputComponent ||
			(endpoints && typeof endpoints?.[inputComponent] !== "string")
		) {
			console.log("DO WE HERE???");
			setValue(formId, defaultEndpoint);
		}
	}, [formId, defaultEndpoint, setValue, inputComponent, endpoints]);

	// Should probably convert into a hook
	// we need this elsewhere
	// useEffect(() => {
	// 	// unregister the form input when its id changes
	// 	// Might require this elsewhere i.e. closer to the input object itself
	// 	return () => {
	// 		unregister(formId);
	// 	};
	// }, [formId, unregister]);

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
			setRecursiveComponent(null);
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

	// let Component;
	// Actual switch elsewhere
	// We need add params here?

	//At least move to a function
	// switch (type) {
	// 	//We don't update / because endpoint object stays the same?
	// 	case "select":
	// 		Component = (
	// 			<EditSelectInput
	// 				endpoints={endpoints}
	// 				label={label}
	// 				id={`${objectKey}.${id}`}
	// 			/>
	// 		);
	// 		break;

	// 	case "text":
	// 	default:
	// 		Component = <EditTextInput label={label} id={`${objectKey}.${id}`} />;
	// 		break;
	// }

	return (
		<Stack>
			{/* {Component} */}
			<RSSQueryComponent
				id={id}
				objectKey={objectKey}
				label={label}
				type={type}
				options={endpoints}
			/>
			{RecursiveComponent ? (
				RecursiveComponent
			) : (
				<Parameters params={params} objectKey={objectKey} />
			)}
		</Stack>
	);
};

// We get a warning when we change feed
// selectedEndpoint doesn't exist on new thing
// THEN useState updates - after the new 'initial' render
// RSS Query Component
const RSSComponent = ({ componentId, objectKey }: any) => {
	const config = RSS_CONFIG_LIST[componentId] || {};

	const { endpointInput } = config;

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
			data={{ ...endpointInput }}
			objectKey={objectKey}
			routeId={`${objectKey}.route`}
		/>
	);

	return enpointInputComponent;
};

// RSS Query Select
export const RssQueryEdit = ({ objectKey }: BaseEditProps) => {
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
					<SelectInputWithControl
						label="RSS Feed"
						name={`${objectKey}.query.rssFeed`}
						fullWidth={true}
						required
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
