import { componentEditFactory } from "@/src/factories/component-factory";
import { EDIT_COMPONENTS } from "@/src/factories/components";
import {
	MenuItem,
	Box,
	Stack,
	Accordion,
	AccordionDetails,
	IconButton,
} from "@mui/material";
import React, { ReactElement, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { BaseEditProps } from "./types/BaseEdit";
import { SelectInputWithControl } from "../../input/SelectInput";
import { ArrayControls } from "./ArrayControls";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { MARGINS } from "config/styles/styles.config";
import { WithInfo } from "../../edit/info/WithInfo";

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
	const [isCollapsed, setIsCollapsed] = useState(false);
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
	//This feels utilsy - DRY bollocks
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
		<Box
			width={"100%"}
			marginTop={MARGINS.MIDSMALL}
			marginBottom={MARGINS.MIDSMALL}
		>
			{/* I don't really like the label for our purposes 
			I want something more label box then input box
			*/}
			{/* Should be a with - HOC */}

			<Accordion defaultExpanded expanded={!isCollapsed} elevation={0}>
				<Box paddingLeft={MARGINS.LARGE} width={"100%"}>
					<WithInfo info="Nothing here currently!">
						<Stack
							direction={"row"}
							// paddingLeft={MARGINS.LARGE}
							width={"100%"}
							justifyContent="space-between"
						>
							<SelectInputWithControl
								label="Select Component"
								name={`${objectKey}.componentType`}
								fullWidth={true}
								required
							>
								{createComponentList()}
							</SelectInputWithControl>
							{/* Controls? */}
							<Stack direction="row">
								<ArrayControls onDelete={onDelete} onMove={onMove} />
								{/* Maybe not here & isCollapsed is the wrong term - should be isExpanded */}
								<IconButton
									aria-label="expand or collapse"
									onClick={() =>
										setIsCollapsed((currentState) => !currentState)
									}
								>
									{isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
								</IconButton>
							</Stack>
						</Stack>
					</WithInfo>
				</Box>
				<AccordionDetails>{createComponent(component)}</AccordionDetails>
			</Accordion>
		</Box>
	);
};
