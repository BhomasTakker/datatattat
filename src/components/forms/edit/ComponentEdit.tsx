import { componentEditFactory } from "@/src/factories/component-factory";
import { EDIT_COMPONENTS } from "@/src/factories/components";
import {
	MenuItem,
	Container,
	Box,
	Stack,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import React, { ReactElement } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { BaseEditProps } from "./types/BaseEdit";
import { SelectInputWithControl } from "../../input/SelectInput";
import { ArrayControls } from "./ArrayControls";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type inputFuncs = {
	onDelete: () => void;
	onMove: (dir: number) => void;
};

//Move out of DTAStack folder
export const ComponentEdit = ({
	objectKey,
	onDelete,
	onMove,
}: BaseEditProps & inputFuncs) => {
	const { control } = useFormContext();
	const component = useWatch({
		control,
		name: `${objectKey}.componentType`,
	});
	const createComponentList = () => {
		return Object.keys(EDIT_COMPONENTS).map((container) => (
			<MenuItem key={container} value={container}>
				{container}
			</MenuItem>
		));
	};
	const createComponent = (component: any): ReactElement => {
		// console.log({ COMPONENTID: component });
		if (!component) {
			return <></>;
		}

		const EditComponent = componentEditFactory(component);

		if (!EditComponent) {
			//Error
			return <div>{component}</div>;
		}

		return <EditComponent objectKey={objectKey} />;
	};
	return (
		//replace all/most containers with bax marginLeft - but use a 'config' for values
		<Box marginLeft={"2rem"}>
			{/* I don't really like the label for our purposes 
			I want something more label box then input box
			*/}
			{/* Should be a with - HOC */}
			<Accordion defaultExpanded>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Stack direction={"row"}>
						<SelectInputWithControl
							label="Select Component"
							name={`${objectKey}.componentType`}
							fullWidth={true}
							required
						>
							{createComponentList()}
						</SelectInputWithControl>

						<ArrayControls onDelete={onDelete} onMove={onMove} />
					</Stack>
				</AccordionSummary>
				{/*  */}
				<AccordionDetails>{createComponent(component)}</AccordionDetails>
			</Accordion>
		</Box>
	);
};
