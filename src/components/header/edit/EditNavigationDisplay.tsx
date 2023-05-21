import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { TextInputWithControl } from "../../input/TextInput";
import { NavLinkData } from "../nav-links/NavLink";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

type FunctionsProp = {
	onDelete: (item: any) => void;
	onMove: (item: any, dir: number) => void;
};

type NavigationProps = {
	nav: NavLinkData[];
	functions: FunctionsProp;
};

type NavLinkProps = {
	link: NavLinkData;
};

//own component / more descriptive name
const NavLink = ({
	link,
	name,
	functions,
}: NavLinkProps & { name: string; functions: FunctionsProp }) => {
	const { setValue } = useFormContext();
	const { onDelete, onMove } = functions;

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

	//Probably want all of these added to a grid
	//just headers and columns
	return (
		<Stack direction="row">
			<Box paddingLeft={"0.5rem"}>
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
			</Box>
			{/* Removed / prefix on route */}
			<Box
				bgcolor={"highlights.light"}
				marginLeft={"0.4rem"}
				paddingLeft={"0.5rem"}
			>
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
			<Stack direction="row">
				<IconButton aria-label="delete" onClick={() => onDelete(link)}>
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="moveUp" onClick={() => onMove(link, -1)}>
					<ArrowUpwardIcon />
				</IconButton>
				<IconButton aria-label="moveDown" onClick={() => onMove(link, 1)}>
					<ArrowDownwardIcon />
				</IconButton>
			</Stack>
		</Stack>
	);
};

export const EditNavigationDisplay = ({
	nav = [],
	functions,
}: NavigationProps) => {
	const navLinks = nav.map((link, i) => {
		//We may not want to use index (in name) here - if/when we come to allow moving of the position
		//This will cause issues probably use name - but name could clash...
		return (
			<NavLink
				link={link}
				name={`nav.${i}`}
				key={`nav.${i}`}
				functions={functions}
			/>
		);
	});
	return (
		<Stack direction="column">
			<Stack direction="row">
				{/* should do a 'grid' 2 columns - 3 columns label | endpoint | buttons */}
				<Typography minWidth={"200px"}>Label</Typography>
				<Typography minWidth={"200px"}>Endpoint</Typography>
			</Stack>
			<Stack gap="0.5rem">{navLinks}</Stack>
		</Stack>
	);
};
