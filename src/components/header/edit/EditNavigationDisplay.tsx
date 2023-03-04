import { Stack } from "@mui/material";
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

const NavLink = ({ link, name }: NavLinkProps & { name: string }) => {
	const { setValue } = useFormContext();

	//We are getting rendered too many times 3*2
	const route = link.route.split("/").filter(Boolean).join("/"); //remove beginning/trailing slashes

	useEffect(() => {
		setValue(`${name}.label`, link.label);
		setValue(`${name}.route`, `/${route}`);
	}, [link.label, name, route, setValue]);

	return (
		<Stack direction="row">
			<TextInputWithControl
				label={"Label"}
				// Name needs to be react-hook-form identifier name
				// which feels traumatic
				name={`${name}.label`}
				defaultValue={link.label}
			/>
			<TextInputWithControl
				label={"route"}
				name={`${name}.route`}
				defaultValue={`/${route}`}
				// startAdornment={`users/${username}/`} / we don't need this / when create new ad as default
				// You are allowed to link to someone elses page
				required
			/>
			{/* Add remove / move up, down, etc */}
		</Stack>
	);
};

export const EditNavigationDisplay = ({ nav = [] }: NavigationProps) => {
	const navLinks = nav.map((link, i) => {
		return <NavLink link={link} name={`nav.${i}`} key={`nav.${i}`} />;
	});
	return <Stack>{navLinks}</Stack>;
};
