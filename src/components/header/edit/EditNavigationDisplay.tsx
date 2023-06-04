import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { NavLinkData } from "../nav-links/NavLink";
import { EditNavLinks } from "./EditNavLink";

type NavigationProps = {
	nav: NavLinkData[];
};

//This where
export const EditNavigationDisplay = ({ nav = [] }: NavigationProps) => {
	const { setValue } = useFormContext();

	const navFormComponents =
		useWatch({
			name: `nav`,
		}) || [];

	console.log({ navFormComponents });

	useEffect(() => {
		setValue("nav", nav);
		//nav itself blows up in a never ending
		//setValue nav will create a new nav blowing us up
		//correcter way would be to check length within the effect
	}, [setValue, nav.length]);

	return (
		<Stack direction="column">
			<Stack direction="row">
				{/* should do a 'grid' 2 columns - 3 columns label | endpoint | buttons */}
				<Typography minWidth={"200px"}>Label</Typography>
				<Typography minWidth={"200px"}>Endpoint</Typography>
			</Stack>
			{/* <Stack gap={MARGINS.SMALL}>{navLinks()}</Stack> */}
			<EditNavLinks components={navFormComponents || []} />
		</Stack>
	);
};
