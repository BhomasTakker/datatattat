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

// Clean this guy up
// He can be better
// First pass more needed
export const QueryCreator = ({}: QueryCreatorProps) => {
	// const { setValue } = useFormContext();
	// I swear this will work
	// You will use that which is closest to you.
	// yeah works - seems no trouble at all
	const { config, selectedQueryConfig } = useContext(CreatorContext);
	console.log({ ID: config.id });
	const {
		queryFormKey,
		queryIdFormKey,
		parametersFormKey,
		conversionsFormKey,
	} = useContext(QueryContext);

	const [RecursiveComponent, setRecursiveComponent] =
		useState<ReactElement | null>(null);

	// blueprint changes between endpoints
	// we cannot use context for it
	const {
		id,
		label,
		type,
		info,
		params,
		conversions,

		// component type specific
		endpoints,
	} = config;

	// This creates a new form key for every 'endpoint' selection
	const formInputId = `${queryFormKey}.${id}`;

	// Create recursive component IF there is an endpointObject for our current chosen endpoint
	// If this was a hook in and of itself
	// if anything needed it just call the hook
	useEffect(() => {
		if (selectedQueryConfig) {
			setRecursiveComponent(
				<CreatorContextProvider value={{ config: selectedQueryConfig }}>
					<QueryCreator />
				</CreatorContextProvider>
			);
		} else {
			setRecursiveComponent(null);
		}
	}, [selectedQueryConfig]);
	//formInputValue, queryFormKey, queryIdFormKey, selectedQueryConfig
	// Neaten this up for sure
	return (
		<Stack>
			{type ? (
				<Box marginLeft={MARGINS.LARGE}>
					<EditSelectInput
						endpoints={endpoints}
						id={formInputId}
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
