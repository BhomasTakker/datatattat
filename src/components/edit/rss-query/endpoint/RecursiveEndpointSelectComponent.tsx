import { Stack } from "@mui/material";
import { QueryInputFactoryComponent } from "../input/QueryInputFactoryComponent";
import { Parameters } from "../parameters/Parameters";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { useUnregisterForm } from "../../hooks/useUnregisterForm";
import { useFormContext, useWatch } from "react-hook-form";

// How to make this more dynamic
// abstract its use for RSS and standard queries?
// Rename to RSSEndpointSelectComponent
export const RecursiveEndpointSelectComponent = ({
	data,
	objectKey,
	routeId,
}: any) => {
	const { setValue } = useFormContext();
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

	// better name required
	// form id suggests id of the whole form

	// We should pass this in
	const formId = `${objectKey}.${id}`;

	// console.log({ data });
	// better name / is not component / is our value
	const inputComponent = useWatch({
		name: formId,
		// defaultValue,
	});

	// is there any reason why we would return a value?
	// Even if error etc - i.e. nope nothing registered by that name?
	useUnregisterForm({ name: formId });

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

	// always set a route value for a default route
	// We should probably specify if an input is required
	useEffect(() => {
		setRouteValue({ baseUrl, endpoints, postfix }, inputComponent);
	}, [baseUrl, endpoints, inputComponent, postfix, setRouteValue]);

	// Create recursive component IF there is an endpointObject for our current chosen endpoint
	useEffect(() => {
		if (selectedEndpointObject) {
			setRecursiveComponent(
				<RecursiveEndpointSelectComponent
					data={selectedEndpointObject}
					routeId={routeId}
					objectKey={objectKey}
				/>
			);
		} else {
			setRecursiveComponent(null);
		}
	}, [inputComponent, objectKey, routeId, selectedEndpointObject]);

	return (
		<Stack>
			<QueryInputFactoryComponent
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
