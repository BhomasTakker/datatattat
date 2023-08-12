import React, { ReactElement } from "react";
import { Box, MenuItem } from "@mui/material";
import { SelectInputWithControl } from "../../input/SelectInput";
import { CONTAINERS } from "@/src/factories/containers";
import { useWatch } from "react-hook-form";
import { containerEditFactory } from "@/src/factories/container-factory";
import { BaseEditProps } from "./types/BaseEdit";
import { WithInfo } from "../../edit/info/WithInfo";
import { INFO_MARGINS } from "config/styles/styles.config";

///////////////////////////////////////////////
// FEATURE:110 DYNAMIC:EDIT
// This is the first initialisation of a dynamic / data led edit component
// Pass in a config / id that is the root level of all pages
// Title / info / props / etc
// Effectively Select Page Type / Page Container
////////////////////////////////////////////////
// Container / Context
// We would have a context / A select context or some such
// So would/could our children
////////////////////////////////////////////////
// Get containers - list of selectable types
// Create Select Button <- Actually create a proper edit select component
// We're going to need to create a new factory <- pass in config for options
// On select show i.e. DTAStack / DTAGrid config / options / props / etc
//////////////////////////////////////////////////////////////
// Next step is components list <- but all possibilities will have components
// Config of type etc can set/specify max / min amount
// So just show components ?
// Could type of components vary between things?
// Yes - almost certainly
// For now don't assume - DTAStack will specify a component list
// Passing in any requirements, etc
//////////////////////////////////////////////////

// EditPageContainer
// Need provide description for each
export const EditContainer = ({ objectKey }: BaseEditProps) => {
	const containerTypeKey = `${objectKey}.containerType`;
	//need actually set enum of containers keys?
	// const [container, setContainer] = useState<string | undefined>(undefined);
	// const { control } = useFormContext();
	const container = useWatch({
		// control,
		name: containerTypeKey,
	});

	const createContainerList = () => {
		return Object.keys(CONTAINERS).map((container) => (
			//Add show info synopsis here
			<MenuItem key={container} value={container}>
				{container}
			</MenuItem>
		));
	};

	const createContainer = (container: any): ReactElement => {
		if (!container) {
			return <></>;
		}

		// Call it something else!
		const EditContainer = containerEditFactory(container);

		if (!EditContainer) {
			//Error
			return <></>;
		}

		return <EditContainer />;
	};

	return (
		<Box>
			<WithInfo
				infoId="SelectContainer"
				marginLeft={INFO_MARGINS.STANDARD_LEFT}
			>
				<SelectInputWithControl
					id="Select Container"
					label="Select Container"
					name={containerTypeKey}
					fullWidth={true}
					variant="filled"
					required
				>
					{createContainerList()}
				</SelectInputWithControl>
			</WithInfo>
			{createContainer(container)}
		</Box>
	);
};
