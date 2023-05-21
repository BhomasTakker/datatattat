import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { TextInputWithControl } from "../../input/TextInput";
import { NavLinkData } from "../nav-links/NavLink";

type NavigationProps = {
	nav: NavLinkData[];
};

type NavLinkProps = {
	link: NavLinkData;
};

//own component / more descriptive name
const NavLink = ({ link, name }: NavLinkProps & { name: string }) => {
	const { setValue } = useFormContext();

	//We are getting rendered too many times 3*2
	const route = link.route.split("/").filter(Boolean).join("/"); //remove beginning/trailing slashes
	//
	const routeToShow = route.split("/").pop();

	//Removed / prefix on route
	useEffect(() => {
		setValue(`${name}.label`, link.label);
		setValue(`${name}.route`, `${routeToShow}`); //route is wildly incorrect?
	}, [link.label, name, routeToShow, setValue]);

	console.log({ route });

	return (
		<Stack direction="row">
			<TextInputWithControl
				// label={"Label"}
				inputProps={{
					disableUnderline: true,
				}}
				// Name needs to be react-hook-form identifier name
				// which feels traumatic
				name={`${name}.label`}
				defaultValue={link.label}
			/>
			{/* Removed / prefix on route */}
			<Box bgcolor={"primary.light"} marginLeft={"0.4rem"}>
				<TextInputWithControl
					// label={"route"}
					name={`${name}.route`}
					inputProps={{
						disableUnderline: true,
					}}
					// Probably shouldn't even be route as a default
					defaultValue={`${routeToShow}`}
					// startAdornment={`users/${username}/`} / we don't need this / when create new ad as default
					// You are allowed to link to someone elses page / will need say a specifier to change
					// i.e. toggle this to allow?
					required
				/>
			</Box>
			{/* Add remove / move up, down, etc */}
		</Stack>
	);
};

export const EditNavigationDisplay = ({ nav = [] }: NavigationProps) => {
	const navLinks = nav.map((link, i) => {
		//We may not want to use index (in name) here - if/when we come to allow moving of the position
		//This will cause issues probably use name - but name could clash...
		return <NavLink link={link} name={`nav.${i}`} key={`nav.${i}`} />;
	});
	return (
		<Stack direction="column">
			<Stack direction="row">
				<Typography minWidth={"200px"}>Label</Typography>
				<Typography minWidth={"200px"}>Endpoint</Typography>
			</Stack>
			<Stack gap="0.5rem">{navLinks}</Stack>
		</Stack>
	);
};
