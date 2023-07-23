import { Box, Stack } from "@mui/material";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";
import { WithInfo } from "../../../info/WithInfo";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import { createSelectInputList } from "@/src/components/input/TextInput";
import { ArrayControls } from "@/src/components/forms/edit/ArrayControls";
import { useContext } from "react";
import { ConversionsContext } from "../context/ConversionsContext";

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
	// const { objectKey } = useContext(ConversionsContext);
	// temp - tight coupling - should pass these in
	const { deleteConversion, moveConversion } = useContext(ConversionsContext);
	// console.log({ selectList });
	// console.log({ label }, { name });

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
							onDelete={deleteConversion}
							onMove={moveConversion}
						/>
					</WithInfo>
				</Box>
				{/* <APIComponent componentId={provider} objectKey={`${objectKey}.query`} /> */}
			</Stack>
		</Stack>
	);
};