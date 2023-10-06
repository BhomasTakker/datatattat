import {
	ReactElement,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
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

const getRecursiveComponent = (config: any) => {
	if (config) {
		return (
			<CreatorContextProvider value={{ config }}>
				<QueryCreator />
			</CreatorContextProvider>
		);
	} else {
		return null;
	}
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

	const {
		queryFormKey,
		queryIdFormKey,
		endpointsFormKey,
		parametersFormKey,
		conversionsFormKey,
	} = useContext(QueryContext);

	// Could probably just be an array no?
	const [RecursiveComponent, setRecursiveComponent] =
		useState<ReactElement | null>(getRecursiveComponent(selectedQueryConfig));

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

		// component type specific
		endpoints,
	} = config;

	console.log("ISSUE:0003", "QUERY:CREATOR", id);

	// This creates a new form key for every 'endpoint' selection
	const formInputId = `${endpointsFormKey}.${id}`;

	// Create recursive component IF there is an endpointObject for our current chosen endpoint
	useEffect(() => {
		setRecursiveComponent(getRecursiveComponent(selectedQueryConfig));
	}, [selectedQueryConfig]);
	//formInputValue, queryFormKey, queryIdFormKey, selectedQueryConfig
	// Neaten this up for sure

	return (
		<Stack>
			{type ? (
				<Box marginLeft={MARGINS.LARGE}>
					<EditSelectInput
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
