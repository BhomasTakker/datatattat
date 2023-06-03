import React, { memo, useEffect, useMemo } from "react";
import { NavLinkData } from "../nav-links/NavLink";
import { Stack, Box } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { UseFormSetValue, FieldValues, useFormContext } from "react-hook-form";
import { ArrayControls } from "../../forms/edit/ArrayControls";
import { TextInputWithControl } from "../../input/TextInput";

type NavLinkProps = {
	link: NavLinkData;
};

type FunctionsProp = {
	//We 'probably' want the ability to get and update the form data more easily
	//utils / lib class/interface for react-hook-forms
	//We have the form wrapper we use - DTAFormProvider
	onDelete: (item: any) => void;
	onMove: (item: any, dir: number) => void;
	setValue: UseFormSetValue<FieldValues>;
};

export const EditNavLinks = memo(
	({ components }: any) => {
		const { setValue, getValues } = useFormContext();

		const onDelete = (i: number) => {
			const updatedNavFormComponents = components; //form

			updatedNavFormComponents.splice(i, 1);
			setValue("nav", updatedNavFormComponents);
		};
		const onMove = (id: number, dir: number) => {
			const updatedNavFormComponents = [...components];

			updatedNavFormComponents.splice(id, 1);

			const formItem = getValues(`nav.${id}`);

			updatedNavFormComponents.splice(id + dir, 0, formItem);
			setValue("nav", updatedNavFormComponents);
		};

		const navLinks = components.map((link: NavLinkData, i: number) => {
			console.log("DRAW COMPONENT");
			return (
				<EditNavLink
					link={link}
					name={`nav.${i}`}
					key={`nav.${i}`}
					functions={{
						setValue,
						onDelete: () => onDelete(i),
						onMove: (dir: number) => onMove(i, dir),
					}}
				/>
			);
		});

		return <Stack gap={MARGINS.SMALL}>{navLinks}</Stack>;
	},
	(prevProps, currentProps) => prevProps.components === currentProps.components
);
EditNavLinks.displayName = "EditNavLinks";

export const EditNavLink = React.memo(
	({
		link,
		name,
		functions,
	}: NavLinkProps & { name: string; functions: FunctionsProp }) => {
		// const { setValue, getValues } = useFormContext();
		const { onDelete, onMove, setValue } = functions;

		//We are getting rendered too many times 3*2
		const route = link.route.split("/").filter(Boolean).join("/"); //remove beginning/trailing slashes
		//
		const routeToShow = route.split("/").pop();

		console.log(
			"If we get re-rendered here we may as well go live on an island somewhere"
		);

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
				<Box paddingLeft={MARGINS.SMALL}>
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
					marginLeft={MARGINS.SMALL}
					paddingLeft={MARGINS.SMALL}
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
	},
	(prevProps, nextProps) => prevProps.link === nextProps.link
);

EditNavLink.displayName = "EditNavLink";
