import { Stack, Typography } from "@mui/material";
import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { NavLinkData } from "../nav-links/NavLink";
import { MARGINS } from "config/styles/styles.config";
import { EditNavLink, EditNavLinks } from "./EditNavLink";

type NavigationProps = {
	nav: NavLinkData[];
};

//This where
export const EditNavigationDisplay = ({ nav = [] }: NavigationProps) => {
	const { setValue, getValues, watch } = useFormContext();
	// const [navLinks2, setNavLinks] = useState([]);
	const navFormComponents = watch("nav") || [];

	useEffect(() => {
		setValue("nav", nav);
		//nav itself blows up in a never ending
		//setValue nav will create a new nav blowing us up
		//correcter way would be to check length within the effect
	}, [setValue, nav.length]);
	console.log({ navFormComponents });

	return (
		<Stack direction="column">
			<Stack direction="row">
				{/* should do a 'grid' 2 columns - 3 columns label | endpoint | buttons */}
				<Typography minWidth={"200px"}>Label</Typography>
				<Typography minWidth={"200px"}>Endpoint</Typography>
			</Stack>
			{/* <Stack gap={MARGINS.SMALL}>{navLinks()}</Stack> */}
			<EditNavLinks components={navFormComponents} />
		</Stack>
	);
};
