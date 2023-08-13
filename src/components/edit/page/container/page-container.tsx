import { ReactElement, useContext } from "react";
import { PageContainerContext } from "../context/container/page-container.context";
import { Box, MenuItem } from "@mui/material";
import { WithInfo } from "../../info/WithInfo";
import { INFO_MARGINS } from "config/styles/styles.config";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import { EditFactoryComponent } from "../../factory/edit-component.factory";
import { SelectInput } from "../../inputs/select/select-input";

const createContainerList = (list: string[]) => {
	return list.map((option: string) => (
		//Add show info synopsis here
		<MenuItem key={option} value={option}>
			{option}
		</MenuItem>
	));
};

// Page Select
// Select your page container component

// Content Container
// Component Container

// this is EditContainer
// BUT what do we need / this isn't a straight refactor
// Don't try and go too far / we can refacator again
// This component does not need to be so dynamic
// create a dynamic component for grid, stack, etc,
// The components are where we need to be dynamic

// Edit Container
export const PageContainer = () => {
	const { container, containerTypeKey, config } =
		useContext(PageContainerContext);
	// We need info
	// label
	const { select, info, label, type } = config;

	console.log("FEATURE:202", "SELECT:INPUT:UPGRADE", "PAGE:CONTAINER", {
		select,
	});
	return (
		<Box>
			<SelectInput
				info={info}
				id={containerTypeKey}
				label={label}
				options={select}
			/>
			<EditFactoryComponent type={type} id={container} />
		</Box>
	);
};
