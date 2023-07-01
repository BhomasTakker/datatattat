import { Box, Stack } from "@mui/material";

import { ReactElement, useCallback, useEffect, useState } from "react";
import { useUnregisterForm } from "../../hooks/useUnregisterForm";
import { useFormContext, useWatch } from "react-hook-form";
import { QueryInputFactoryComponent } from "../../rss-query/input/QueryInputFactoryComponent";
import { Parameters } from "../../rss-query/parameters/Parameters";
import { MARGINS } from "config/styles/styles.config";

// How to make this more dynamic
// abstract its use for RSS and standard queries?
// Rename to RSSEndpointSelectComponent
export const APIEndpointSelectComponent = ({ data, objectKey, apiId }: any) => {
	const { setValue } = useFormContext();
	const [RecursiveComponent, setRecursiveComponent] =
		useState<ReactElement | null>(null);
	const {
		type,
		id,
		endpoint = false, // rem
		baseUrl, // not needed in query
		postfix = "", // not needed in query
		//////////////////////////////////
		// should just be if type === none
		setState = true, // record form state
		///////////////////////////////////////
		endpointObjects = {},
		endpoints,
		label,
		defaultEndpoint,
		params,
		apiId: api,
	} = data;

	// better name required
	// form id suggests id of the whole form

	// We should pass this in
	const formId = `${objectKey}.${id}`;

	// better name / is not component / is our value
	const inputComponent = useWatch({
		name: formId,
		// defaultValue,
	});

	// is there any reason why we would return a value?
	// Even if error etc - i.e. nope nothing registered by that name?
	useUnregisterForm({ name: formId });

	const selectedEndpointObject = endpointObjects[inputComponent];

	// default Values need a big think over
	useEffect(() => {
		// If we are not setting form state then duck out
		if (!setState) {
			//with useEffect an early return is not the same as return () => {} cleanup function
			return;
		}
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
	}, [formId, defaultEndpoint, setValue, inputComponent, endpoints, setState]);

	// always set an api id
	useEffect(() => {
		if (!api) {
			return;
		}
		setValue(apiId, api);
	}, [apiId, api, setValue]);

	// Create recursive component IF there is an endpointObject for our current chosen endpoint
	useEffect(() => {
		if (selectedEndpointObject) {
			setRecursiveComponent(
				<APIEndpointSelectComponent
					data={selectedEndpointObject}
					apiId={apiId}
					objectKey={objectKey}
				/>
			);
		} else {
			setRecursiveComponent(null);
		}
	}, [inputComponent, objectKey, apiId, selectedEndpointObject]);

	return (
		<Stack>
			{/* Can be shared */}
			<Box marginLeft={MARGINS.LARGE}>
				<QueryInputFactoryComponent
					id={id}
					objectKey={objectKey}
					label={label}
					type={type}
					options={endpoints}
				/>
			</Box>
			{RecursiveComponent ? (
				RecursiveComponent
			) : (
				<Parameters
					params={params}
					objectKey={`${objectKey}.params`}
					shouldCreateParametersString={false}
					showTitle={true}
				/>
			)}
		</Stack>
	);
};
