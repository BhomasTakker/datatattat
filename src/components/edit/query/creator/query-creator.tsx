import { ReactElement, useContext, useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useUnregisterForm } from "../../hooks/useUnregisterForm";
import { Box, Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { Parameters } from "../parameters/Parameters";
import { EditSelectInput } from "../input/input-components";
import { ConversionsContainer } from "../conversion/conversions-container";
import { QueryContext } from "../context/query-context";

type QueryBluePrint = {
	id: string;
	label: string;
	setState: boolean; //??
	type: string; // enum
};

type QueryCreatorProps = {
	blueprint: any; // how to type this
	// we need typeObject select, text, etc all have different types
};

// Clean this guy up
// He can be better
export const QueryCreator = ({ blueprint }: QueryCreatorProps) => {
	const { setValue, unregister } = useFormContext();
	const {
		queryFormKey,
		queryIdFormKey,
		parametersFormKey,
		conversionsFormKey,
		providerConfig,
	} = useContext(QueryContext);

	const [RecursiveComponent, setRecursiveComponent] =
		useState<ReactElement | null>(null);

	// console.log({ blueprint });

	const {
		id,
		label,
		type,
		info,
		params,
		queryId,
		conversions,

		// component type specific
		endpoints,

		endpointObjects = {},

		defaultEndpoint, // ?
	} = blueprint;

	const formInputId = `${queryFormKey}.${id}`;

	// better name / is not component / is our value
	const formInputValue = useWatch({
		name: formInputId,
		// defaultValue,
	});

	// may need to revise this
	useUnregisterForm({ name: formInputId });

	const selectedQueryEndpoint = endpointObjects[formInputValue];

	useEffect(() => {
		// If we are not setting form state then duck out
		// if type === none? / undefined
		if (!type) {
			console.log("There is no type!!!", { id }, { selectedQueryEndpoint });
			return;
		}

		// if type !== select <- endpoint select?
		// Tests to set input to default value on change
		// Checks if current value exists in current endpoints
		// if both choices share a field/endpoint then I believe it won't pick default
		if (
			!formInputValue ||
			(endpoints && typeof endpoints?.[formInputValue] !== "string")
		) {
			// console.log("DO WE HERE???", { defaultEndpoint }, { formInputId });
			setValue(formInputId, defaultEndpoint);
		}
	}, [formInputId, defaultEndpoint, setValue, formInputValue, endpoints, type]);

	// always set an api id
	useEffect(() => {
		if (!queryId) {
			return;
		}

		setValue(queryIdFormKey, queryId);
	}, [queryIdFormKey, queryId, setValue, unregister, queryFormKey]);

	// Create recursive component IF there is an endpointObject for our current chosen endpoint
	// If this was a hook in and of itself
	// if anything needed it just call the hook
	useEffect(() => {
		if (selectedQueryEndpoint) {
			setRecursiveComponent(<QueryCreator blueprint={selectedQueryEndpoint} />);
		} else {
			setRecursiveComponent(null);
		}
	}, [formInputValue, queryFormKey, queryIdFormKey, selectedQueryEndpoint]);

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
