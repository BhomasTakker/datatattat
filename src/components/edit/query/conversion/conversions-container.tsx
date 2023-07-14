import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { WithInfo } from "../../info/WithInfo";
import { Box, Button, Paper, Stack } from "@mui/material";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import { createSelectInputList } from "@/src/components/input/TextInput";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Conversion } from "./conversion";
import { ConversionsContextProvider } from "./context/ConversionsContext";
import { useFormContext, useWatch } from "react-hook-form";

type ConversionProps = {
	responseList: any;
	objectKey: string;
};

// Paying creators, blah blah blah
// Paying, etc, users send a post request with all of this guff
// Non paying etc, do all of this on the browser side?

//////////////////////////////////////////////////////
// Start with 0 conversions
// Add conversion
// Select conversion type
//    sort, filter, map, convert
//    select conversion and add any required parameters
//    i.e. sort - select label to sort by, alphanumeric, ascending
//    i.e. filter - topN return the first N - provide N
/////////////////////////////////////////////////////////
type Conversion = any;
type Conversions = Conversion[];

const createConversions = (conversions: Conversions) => {
	return conversions.map((conversion, i) => {
		return (
			<Paper
				elevation={1}
				key={i}
				style={{ paddingTop: MARGINS.SMALL, paddingBottom: MARGINS.SMALL }}
			>
				<Conversion conversion={conversion} />
			</Paper>
		);
	});
};

// const addConversion = (handler: Function, conversion: Conversion) => {

// };

export const ConversionsContainer = ({
	objectKey,
	responseList,
}: ConversionProps) => {
	const [conversions, setConversions] = useState<Conversions>([]);
	const conversionComponents = createConversions(conversions);

	const conversionsId = `${objectKey}.conversions`;
	const conversionFormId = `[${conversions.length}]`;
	const conversionFormName = `${conversionsId}.${conversionFormId}`;

	const { getValues } = useFormContext();
	// const watchComponents = useWatch({ name: conversionFormName }) || [];

	const addConversionHandler = () => {
		//
		// setValue(conversionFormName, {});
		setConversions([...conversions, { objectKey: conversionFormName }]);
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
		<ConversionsContextProvider
			value={{
				objectKey,
				deleteConversion: deleteConversionHandler,
				moveConversion: moveConversionHandler,
			}}
		>
			<Stack>
				<WithInfo info="How to modify the data you receive from your query. You can filter, sort, and transform results to suit your needs. Select from a predefined list or create your own.">
					<Title
						text="Response Conversion"
						variant={TitleVariant.EDIT_COMPONENT}
					></Title>
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
