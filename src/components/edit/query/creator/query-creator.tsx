import { ReactElement, useContext, useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { Parameters } from "../parameters/Parameters";
import { EditSelectInput } from "../input/input-components";
import { ConversionsContainer } from "../conversion/conversions-container";
import { QueryContext } from "../context/query-context";
import {
	CreatorContext,
	CreatorContextProvider,
} from "../context/creator-context";
import { useWatch } from "react-hook-form";
type QueryBluePrint = {
	id: string;
	label: string;
	setState: boolean; //??
	type: string; // enum
};

type QueryCreatorProps = {
	// blueprint: any; // how to type this
	// we need typeObject select, text, etc all have different types
};

const getRecursiveComponent = (config: any, queryId: string) => {
	if (config) {
		return (
			<CreatorContextProvider value={{ config }} key={queryId}>
				<QueryCreator key={queryId} />
			</CreatorContextProvider>
		);
	} else {
		return null;
	}
};

export const QueryCreator = ({}: QueryCreatorProps) => {
	// Using nested context
	const { config, selectedQueryConfig } = useContext(CreatorContext);

	const {
		queryFormKey,
		queryIdFormKey,
		endpointsFormKey,
		parametersFormKey,
		conversionsFormKey,
	} = useContext(QueryContext);
	const queryId = useWatch({ name: queryIdFormKey });
	// Could probably just be an array no?
	const [RecursiveComponent, setRecursiveComponent] =
		useState<ReactElement | null>(
			getRecursiveComponent(selectedQueryConfig, queryId)
		);

	const endpointsData = useWatch({ name: endpointsFormKey });

	// ??
	// blueprint changes between endpoints
	// we cannot use context for it
	// ??
	const {
		id,
		label,
		type,
		info,
		params,
		conversions,

		endpoints,
	} = config;

	// This creates a new form key for every 'endpoint' selection
	const formInputId = `${endpointsFormKey}.${id}`;

	const formInputValue = useWatch({ name: formInputId });

	// Create recursive component IF there is an endpointObject for our current chosen endpoint
	// Hoo Wee shit this all worked but I don't know why???
	// Problem was keys - update react but items have the same key and no change of props so no change
	// if queryId added as dependency then endless loop but almost okay... suggetsing a guard would work <- but why this loop!!!!!?????
	// Update endpoints and change me - works with new key
	useEffect(() => {
		// Some protection?
		setRecursiveComponent(getRecursiveComponent(selectedQueryConfig, queryId));
	}, [formInputId, selectedQueryConfig, formInputValue, endpointsData]);

	return (
		<Stack>
			{type ? (
				<Box marginLeft={MARGINS.LARGE}>
					<EditSelectInput
						key={queryId}
						endpoints={endpoints}
						id={`${formInputId}`}
						label={label}
						info={info}
					/>
				</Box>
			) : (
				<></>
			)}
			{/* if no recursive - not sure how correct this is */}
			{RecursiveComponent ? (
				RecursiveComponent
			) : (
				<>
					<Parameters params={params} objectKey={parametersFormKey} />
					<ConversionsContainer
						objectKey={conversionsFormKey}
						conversion={conversions}
					/>
				</>
			)}
		</Stack>
	);
};
