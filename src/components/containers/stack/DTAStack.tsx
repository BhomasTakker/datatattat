import Stack from "@mui/material/Stack";
import React from "react";
import { createComponentsList } from "../../utils/createComponentsList";

type DTAStackProps = {
	data: any;
};

// Literally just create a list of all the components
export const DTAStack = ({ data }: DTAStackProps) => {
	const { components } = data;

	const componentsList = createComponentsList(components);

	return <Stack>{componentsList}</Stack>;
};
