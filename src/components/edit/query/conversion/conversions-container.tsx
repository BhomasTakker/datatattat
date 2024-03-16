import { Stack } from "@mui/material";
import { ConversionGroup } from "./group/conversion-group";
import { WithInfo } from "../../info/WithInfo";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { ConversionObject } from "./types";
import { capitalize } from "@/src/utils/string";
import { ConversionsContextProvider } from "./context/ConversionsContext";

type ConversionProps = {
	// conversionsObject surely
	conversion: any; //not any
	objectKey: string;
};
// merge with sub & create a component / seperate from here
const MainResponse = ({
	response,
	objectKey,
}: {
	response: any;
	objectKey: string;
}) => {
	// const { getValues, setValue } = useFormContext();
	if (!response) {
		return <></>;
	}

	const { id = "", sort = {}, filter = {}, transform = {} } = response;
	return (
		<ConversionsContextProvider
			value={{
				objectKey,
				// conversions: [],
				sort,
				filter,
				transform,
				// getValues,
				// setValue,
				conversionJson: response,
			}}
			key={id}
		>
			<ConversionGroup
				objectKey={objectKey}
				conversion={response}
				title={"Main"}
				info={"blurb about main part "}
			/>
		</ConversionsContextProvider>
	);
};

const SubComponents = ({
	conversions,
	objectKey,
}: {
	conversions: ConversionObject[];
	objectKey: string;
}) => {
	// const { getValues, setValue } = useFormContext();

	if (!conversions) {
		return <></>;
	}
	if (conversions.length === 0) {
		return <></>;
	}
	// it is known
	// is map known to be good, bad, etc? as opposed to a function, or something
	const returnComponents = conversions.map(
		(conversion: ConversionObject, i: number) => {
			const { id = "", sort = {}, filter = {}, transform = {} } = conversion;
			const formId = `${objectKey}.${id}`;

			return (
				<ConversionsContextProvider
					key={id}
					value={{
						objectKey: formId,
						// conversions: [],
						sort,
						filter,
						transform,
						// getValues,
						// setValue,
						conversionJson: conversion,
					}}
				>
					<ConversionGroup
						objectKey={`${formId}`}
						conversion={conversion}
						title={capitalize(id)}
						info={"We'll need to pass this "}
					/>
				</ConversionsContextProvider>
			);
		}
	);

	return <Stack>{returnComponents}</Stack>;
};

export const ConversionsContainer = ({
	objectKey,
	conversion,
}: ConversionProps) => {
	const { response, conversionId, subConversions } = conversion || {};
	const { setValue } = useFormContext();

	// yeah this shouldn't be here
	useEffect(() => {
		// Probably manage this better with context?
		// ${objectKey}.conversions should really be passed in
		const formId = `${objectKey}.conversionId`;
		setValue(formId, conversionId);
	}, [conversionId, objectKey, setValue]);

	if (!response && !subConversions) {
		return <></>;
	}
	// return <></>;
	return (
		<Stack>
			<WithInfo info="How to modify the data you receive from your query. You can filter, sort, and transform results to suit your needs. Select from a predefined list or create your own.">
				<Title
					text="Response Conversion"
					variant={TitleVariant.EDIT_COMPONENT}
				></Title>
			</WithInfo>
			{/* Probably <ul> */}
			<MainResponse response={response} objectKey={`${objectKey}.response`} />
			<SubComponents
				conversions={subConversions}
				objectKey={`${objectKey}.sub`}
			/>
		</Stack>
	);
};
