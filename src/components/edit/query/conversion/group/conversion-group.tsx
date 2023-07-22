import { Box, Button, Paper, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { WithInfo } from "../../../info/WithInfo";
import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { MARGINS } from "config/styles/styles.config";
import AddIcon from "@mui/icons-material/Add";
import {
	ConversionsContext,
	ConversionsContextProvider,
} from "../context/ConversionsContext";
import { Conversions } from "../types";
import { Conversion } from "../conversion";
import { useFormContext } from "react-hook-form";

export type ConversionGroupProps = {
	conversion: any;
	objectKey: string;
	iterable?: boolean;
	title: string;
	info: string;
	formId: string;
};

const createConversions = (
	conversions: Conversions,
	iterable: boolean,
	objectKey: string
) => {
	// console.log({ createConversions: conversions });

	return conversions.map((conversion, i) => {
		// here
		// should be `${objectKey}.arrayName.[${i}]`;
		// `${objectKey}.key = apply conversion to

		/// WE ADDED THIS
		const conversionFormId = `${objectKey}.conversions.[${i}]`;
		return (
			<Paper
				elevation={1}
				key={i} //use id or something
				style={{ paddingTop: MARGINS.SMALL, paddingBottom: MARGINS.SMALL }}
			>
				<Conversion
					conversion={conversion}
					iterable={iterable}
					objectKey={conversionFormId}
				/>
			</Paper>
		);
	});
};

type SetState = (conversions: any[]) => void;
const addDefaultConversions = (
	setState: SetState,
	conversions: any[],
	objectKey: string
) => {
	let defaultConversions = [];
	conversions.forEach((conversion) => {
		// console.log({ PUSH: conversion });
		defaultConversions.push({ ...conversion });
	});

	// console.log({ setState: conversions });
	setState(defaultConversions);
};

export const ConversionGroup = ({
	objectKey,
	conversion,
	title,
	info,
	formId,
	iterable = false,
}: ConversionGroupProps) => {
	// create initial default conversions
	const [conversions, setConversions] = useState<Conversions>([]);

	const { setValue } = useFormContext();

	const { id, map = {}, defaultConversions = [] } = conversion;
	const { sort = {}, filter = {}, transform = {} } = conversion;

	// objectKey . formId
	const conversionFormName = `${objectKey}.conversions.${formId}`;
	useEffect(() => {
		console.log("HERE YE", { id });
		console.log("HERE YE", { conversionFormName });

		// this type of thing needs to ba handled better
		setValue(`${conversionFormName}.responseKey`, id);
	}, [conversionFormName, id, setValue]);
	// const conversionFormId = `[${conversions.length}]`;
	// const conversionFormName = `${conversionsId}.${conversionFormId}`;

	const conversionComponents = createConversions(
		conversions,
		iterable,
		conversionFormName
	);
	const { getValues } = useFormContext();

	useEffect(() => {
		// shouldn't really even need the check
		// console.log({ USEEFFECT: defaultConversions });
		// console.log({ USEEFFECT: conversion });
		if (defaultConversions.length > 0) {
			// console.log({ ADD: defaultConversions });
			addDefaultConversions(
				setConversions,
				defaultConversions,
				conversionFormName
			);
		}
	}, [conversionFormName, defaultConversions]);

	const addConversionHandler = () => {
		//
		// setValue(conversionFormName, {});
		let updateConversions = conversions ? [...conversions] : [];
		updateConversions.push({ id: "", type: "" });

		setConversions([...updateConversions]);
		// addConversion(setConversions, { text: "new conversion" });
	};

	const deleteConversionHandler = (ARGS) => {
		const conversionsFormValues = getValues(conversionsId);
		console.log(
			"deleteConversionHandler",
			{ conversionFormName },
			{ conversionsFormValues },
			{ ARGS }
		);
	};
	const moveConversionHandler = (ARGS) => {
		const conversionsFormValues = getValues(conversionsId);
		console.log(
			"moveConversionHandler",
			{ conversionFormName },
			{ conversionsFormValues },
			{ ARGS }
		);
	};

	return (
		// defaults and available conversions added here
		// pass available
		<ConversionsContextProvider
			value={{
				objectKey,
				deleteConversion: deleteConversionHandler,
				moveConversion: moveConversionHandler,
				sort,
				filter,
				transform,
			}}
		>
			<Stack>
				<WithInfo info={info}>
					<Title text={title} variant={TitleVariant.EDIT_COMPONENT}></Title>
				</WithInfo>
				<Stack gap={MARGINS.SMALL}>{conversionComponents}</Stack>
				<Box paddingTop={MARGINS.MIDSMALL} paddingBottom={MARGINS.MIDSMALL}>
					<Button onClick={addConversionHandler} startIcon={<AddIcon />}>
						Add Conversion
					</Button>
				</Box>
			</Stack>
		</ConversionsContextProvider>
	);
};
