import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { WithInfo } from "../../info/WithInfo";
import { Box, Stack } from "@mui/material";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import { createSelectInputList } from "@/src/components/input/TextInput";

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

export const Conversion = ({ objectKey, responseList }: ConversionProps) => {
	return (
		// <ParametersContextProvider value={{ objectKey }}>
		<Stack>
			<WithInfo info="How to modify the data you receive from your query. You can filter, sort, and transform results to suit your needs. Select from a predefined list or create your own.">
				<Title
					text="Response Conversion"
					variant={TitleVariant.EDIT_COMPONENT}
				></Title>
			</WithInfo>
			{/* This should just be a component */}
			<Stack gap={MARGINS.SMALL}>
				<Box marginLeft={MARGINS.LARGE}>
					<WithInfo
						infoId="conversionProvider"
						marginLeft={INFO_MARGINS.STANDARD_LEFT}
					>
						<SelectInputWithControl
							label="Conversion Id"
							name={`${objectKey}.conversion.id`}
							fullWidth={true}
							required
						>
							{createSelectInputList({
								none: "none",
								...responseList,
								custom: "custom",
							})}
						</SelectInputWithControl>
					</WithInfo>
				</Box>
				{/* <APIComponent componentId={provider} objectKey={`${objectKey}.query`} /> */}
			</Stack>
		</Stack>
	);
};
