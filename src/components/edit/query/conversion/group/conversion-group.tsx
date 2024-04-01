import { Box, Button, Paper, Stack } from "@mui/material";
import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { WithInfo } from "../../../info/WithInfo";
import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { MARGINS } from "config/styles/styles.config";
import AddIcon from "@mui/icons-material/Add";
import { Conversion as ConversionType, Conversions } from "../types";
import { useFormContext } from "react-hook-form";
import {
	ConversionContextProvider,
	DeleteConversion,
	MoveConversion,
	UpdateConversion,
} from "../context/ConversionContext";
import { ConversionsContext } from "../context/ConversionsContext";
import { Conversion } from "../conversion";

export type ConversionGroupProps = {
	conversion: any;
	objectKey: string;
	iterable?: boolean;
	title: string;
	info: string;
	// formId: string;
};

type ConversionStackProps = {
	conversions: Conversions;
	iterable: boolean;
	objectKey: string;
	deleteHnd: DeleteConversion;
	moveHnd: MoveConversion;
	updateHnd: UpdateConversion;
};

const ConversionsStack = ({
	conversions = [],
	iterable,
	objectKey,
	deleteHnd,
	moveHnd,
	updateHnd,
}: ConversionStackProps) => {
	return (
		<Stack gap={MARGINS.SMALL}>
			{conversions.map((conversion, i) => {
				const conversionFormId = `${objectKey}.conversions.[${i}]`;
				return (
					<Paper
						elevation={1}
						key={i} //use id or something/anything
						style={{ paddingTop: MARGINS.SMALL, paddingBottom: MARGINS.SMALL }}
					>
						<ConversionContextProvider
							value={{
								// @ts-ignore - fix me I'm annoying
								deleteConversion: (e: MouseEvent) =>
									deleteHnd(conversionFormId, i),
								// @ts-ignore
								moveConversion: (dir: number) => moveHnd(dir, i),
								// @ts-ignore
								updateConversion: (data: any) => updateHnd(i, data),
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
			})}
		</Stack>
	);
};

export const ConversionGroup = ({
	objectKey,
	conversion,
	title,
	info,
}: // formId,
ConversionGroupProps) => {
	// create initial default conversions
	const { deleteConversion, moveConversion, addConversion, conversionsFormId } =
		useContext(ConversionsContext);
	const { getValues } = useFormContext();
	const conversions = getValues(conversionsFormId) || [];

	const { id, iterable = false } = conversion || {};

	const deleteConversionHandler = (conversionFormId: string, i: number) => {
		deleteConversion(i);
	};
	// dir is really -1, 1, 0
	const moveConversionHandler = (dir: number, i: number) => {
		moveConversion(dir, i);
	};
	const updateConversionHandler = (i: number, data: ConversionType) => {
		// console.log("updateConversionHandler");
		// When did you comment this out...?
		// updateConversion(i, data);
	};

	const addConversionHandler = () => {
		// default shouldn't be here but as part of context
		addConversion({ id: "", type: "" });
	};

	return (
		<Stack>
			<WithInfo info={info}>
				<Title text={title} variant={TitleVariant.EDIT_COMPONENT}></Title>
			</WithInfo>
			<ConversionsStack
				conversions={conversions}
				iterable={iterable}
				objectKey={objectKey}
				deleteHnd={deleteConversionHandler}
				moveHnd={moveConversionHandler}
				updateHnd={updateConversionHandler}
			/>
			{/* <Stack gap={MARGINS.SMALL}>{conversionComponents}</Stack> */}
			<Box paddingTop={MARGINS.MIDSMALL} paddingBottom={MARGINS.MIDSMALL}>
				<Button onClick={addConversionHandler} startIcon={<AddIcon />}>
					Add Conversion
				</Button>
			</Box>
		</Stack>
	);
};
