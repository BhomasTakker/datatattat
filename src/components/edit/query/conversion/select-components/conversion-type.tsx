import { Box, Stack } from "@mui/material";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";
import { WithInfo } from "../../../info/WithInfo";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import { CONVERSION_TYPES } from "../types";
import { createSelectInputList } from "@/src/components/input/TextInput";
import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";

export const SelectConversionType = ({ objectKey }: BaseEditProps) => {
	// const { objectKey } = useContext(ConversionsContext);

	return (
		<Stack>
			{/* This should just be a component */}
			<Stack gap={MARGINS.SMALL}>
				<Box marginLeft={MARGINS.LARGE}>
					<WithInfo
						infoId="conversionProvider"
						marginLeft={INFO_MARGINS.STANDARD_LEFT}
					>
						<SelectInputWithControl
							label="Conversion Id"
							name={`${objectKey}.id`}
							fullWidth={true}
							required
						>
							{/* transform */}
							{createSelectInputList(CONVERSION_TYPES)}
						</SelectInputWithControl>
					</WithInfo>
				</Box>
				{/* <APIComponent componentId={provider} objectKey={`${objectKey}.query`} /> */}
			</Stack>
		</Stack>
	);
};
