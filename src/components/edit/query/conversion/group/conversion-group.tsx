import { Box, Button, Paper, Stack } from "@mui/material";
import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { WithInfo } from "../../../info/WithInfo";
import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { MARGINS } from "config/styles/styles.config";
import AddIcon from "@mui/icons-material/Add";
import { Conversions } from "../types";
import { Conversion } from "../conversion";
import { useFormContext } from "react-hook-form";
import {
	ConversionContextProvider,
	DeleteConversion,
	MoveConversion,
} from "../context/ConversionContext";
import { cloneDeep } from "@/src/utils/object";
import { ConversionsContext } from "../context/ConversionsContext";

export type ConversionGroupProps = {
	conversion: any;
	objectKey: string;
	iterable?: boolean;
	title: string;
	info: string;
	formId: string;
};

// Probably convert to an actual component
// I feel this is a lot of our issues in general?
// React can't manage this effectively no?
// i.e. if we 'move' a component they all have to be re-rendered
const createConversions = (
	conversions: Conversions,
	iterable: boolean,
	objectKey: string,
	deleteHnd: DeleteConversion,
	moveHnd: MoveConversion
) => {
	return conversions.map((conversion, i) => {
		// I don't think this would work with a unique id
		// This is getting recalled every change
		// We are functionally relying on that behavour
		const conversionFormId = `${objectKey}.conversions.[${i}]`;
		return (
			<Paper
				elevation={1}
				key={i} //use id or something
				style={{ paddingTop: MARGINS.SMALL, paddingBottom: MARGINS.SMALL }}
			>
				{/* Pass conversion data? / iterable? / whatever else */}
				{/* Technically - could call function in ConversionsContext to update conversions no? */}
				{/* Exactly yes - We are just a component right - and therefore could call ConversionsContext */}
				<ConversionContextProvider
					value={{
						// @ts-ignore - fix me I'm annoying
						deleteConversion: (e: MouseEvent) => deleteHnd(conversionFormId, i),
						// @ts-ignore
						moveConversion: (dir: number) => moveHnd(dir, conversionFormId, i),
					}}
				>
					<Conversion
						conversion={conversion}
						iterable={iterable}
						objectKey={conversionFormId}
					/>
				</ConversionContextProvider>
			</Paper>
		);
	});
};

export const ConversionGroup = ({
	objectKey,
	conversion,
	title,
	info,
	formId,
}: ConversionGroupProps) => {
	// create initial default conversions
	const {
		deleteConversion,
		moveConversion,
		addConversion,
		addConversions,
		conversions,
	} = useContext(ConversionsContext);

	const { getValues, setValue, unregister } = useFormContext();

	const {
		id,
		map = {},
		defaultConversions = [],
		iterable = false,
	} = conversion || {};
	// const { sort = {}, filter = {}, transform = {} } = conversion || {};

	// objectKey . formId
	const conversionFormName = `${objectKey}.conversions.${formId}`;
	useEffect(() => {
		setValue(`${conversionFormName}.responseKey`, id);
		setValue(`${conversionFormName}.iterable`, iterable);
	}, [conversionFormName, id, iterable, setValue]);

	const deleteConversionHandler = (conversionFormId: string, i: number) => {
		const handler = () => {
			console.log("We got called ");
			unregister(conversionFormId, { keepValue: false });
		};

		deleteConversion(i, handler);
	};
	// dir is really -1, 1, 0
	const moveConversionHandler = (
		dir: number,
		conversionFormId: string,
		i: number
	) => {
		moveConversion(dir, i);
	};

	const conversionComponents = createConversions(
		conversions,
		iterable,
		conversionFormName,
		deleteConversionHandler,
		moveConversionHandler
	);

	useEffect(() => {
		if (defaultConversions.length > 0) {
			addConversions(defaultConversions);
		}
		// I believe we need to useContext addConversions
	}, []);

	const addConversionHandler = () => {
		addConversion({ id: "", type: "" });
	};

	return (
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
	);
};
