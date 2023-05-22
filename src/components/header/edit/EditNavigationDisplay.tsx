import { Box, Stack, Typography } from "@mui/material";
import React, { ReactElement, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { TextInputWithControl } from "../../input/TextInput";
import { NavLinkData } from "../nav-links/NavLink";
import { ArrayControls } from "../../forms/edit/ArrayControls";

type FunctionsProp = {
	//We 'probably' want the ability to get and update the form data more easily
	//utils / lib class/interface for react-hook-forms
	//We have the form wrapper we use - DTAFormProvider
	onDelete: (item: any) => void;
	onMove: (item: any, dir: number) => void;
};

type NavigationProps = {
	nav: NavLinkData[];
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
	const { setValue, getValues } = useFormContext();
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
					name={`${name}.route`}
					inputProps={{
						disableUnderline: true,
					}}
					defaultValue={`${routeToShow}`}
					required
				/>
			</Box>
			{/* Add remove / move up, down, etc / load array controls */}
			<ArrayControls onDelete={onDelete} onMove={onMove} />
		</Stack>
	);
};

//Absolutely split these two components
//This where
export const EditNavigationDisplay = ({ nav = [] }: NavigationProps) => {
	const { setValue, getValues, watch } = useFormContext();
	const navFormComponents = watch("nav") || [];

	useEffect(() => {
		setValue("nav", nav);
		//nav itself blows up in a never ending
		//setValue nav will create a new nav blowing us up
	}, [setValue, nav.length]);
	console.log({ navFormComponents });

	const navLinks: ReactElement[] = navFormComponents.map(
		(link: NavLinkData, i: number) => {
			//We may not want to use index (in name) here - if/when we come to allow moving of the position
			//This will cause issues probably use name - but name could clash...

			const onDelete = () => {
				const updatedNavFormComponents = navFormComponents; //form
				// const
				console.log({ navFormComponents });
				updatedNavFormComponents.splice(i, 1);
				setValue("nav", updatedNavFormComponents);
				console.log({ updatedNavFormComponents });
			};
			const onMove = (id: number, dir: number) => {
				// const updatedNav = move(nav, link, dir);
				// setHeaderData({ ...headerData, nav: [...updatedNav] });
				const updatedNavFormComponents = [...navFormComponents];
				console.log({ navFormComponents });
				updatedNavFormComponents.splice(id, 1);

				const formItem = getValues(`nav.${id}`);

				updatedNavFormComponents.splice(id + dir, 0, formItem);
				setValue("nav", updatedNavFormComponents);
				console.log({ updatedNavFormComponents });
			};

			return (
				<NavLink
					link={link}
					name={`nav.${i}`}
					key={`nav.${i}`}
					functions={{ onDelete, onMove: (dir: number) => onMove(i, dir) }}
				/>
			);
		}
	);
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
