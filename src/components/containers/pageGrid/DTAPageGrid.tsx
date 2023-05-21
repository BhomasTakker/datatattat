import Stack from "@mui/material/Stack";
import React from "react";
import { createComponentsList } from "../../utils/createComponentsList";

type DTAPageGridProps = {
	data: any;
};

// Literally just create a list of all the components
export const DTAPageGrid = ({ data }: DTAPageGridProps) => {
	const { components } = data;

	const componentsList = createComponentsList(components);

	return <Stack>{componentsList}</Stack>;
};
