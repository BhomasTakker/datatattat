import { Box, Stack } from "@mui/material";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";
import { WithInfo } from "../../../info/WithInfo";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import { createSelectInputList } from "@/src/components/input/TextInput";
import { ArrayControls } from "@/src/components/forms/edit/ArrayControls";
import { useContext } from "react";
import { ConversionContext } from "../context/ConversionContext";

type SelectComponentProps = {
	label: string;
	name: string;
	infoId: string;
	selectList: any; // map
};

// arrayControls / collapsible
// onDelete, onMove
// onCollapseToggle
export const SelectComponent = ({
	label,
	name,
	infoId,
	selectList,
}: SelectComponentProps) => {
	const { deleteConversion, moveConversion } = useContext(ConversionContext);

	return (
		<Stack width={"100%"}>
			{/* This should just be a component */}
			<Stack gap={MARGINS.SMALL}>
				<Box marginLeft={MARGINS.LARGE}>
					<WithInfo infoId={infoId} marginLeft={INFO_MARGINS.STANDARD_LEFT}>
						<SelectInputWithControl
							label={label}
							name={name}
							fullWidth={true}
							required
						>
							{/* transform */}
							{createSelectInputList(selectList)}
						</SelectInputWithControl>
						{/* if? */}
						<ArrayControls
							// Add the actual functions to the context
							// Does anything else make sense?
							// we need to run through these types! They are very wrong
							onDelete={() => deleteConversion(name)}
							onMove={moveConversion}
						/>
					</WithInfo>
				</Box>
				{/* <APIComponent componentId={provider} objectKey={`${objectKey}.query`} /> */}
			</Stack>
		</Stack>
	);
};
