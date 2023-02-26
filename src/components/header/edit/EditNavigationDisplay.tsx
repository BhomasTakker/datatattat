import { useUser } from "@/src/hooks/useUser";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { memo } from "react";
import { TextInput, TextInputWithControl } from "../../input/TextInput";
import { NavLinkData } from "../nav-links/NavLink";
import { HeaderDataType } from "../sub/types";

type NavigationProps = {
	nav: NavLinkData[];
};

type NavLinkProps = {
	link: NavLinkData;
};

const NavLink = ({ link, name }: NavLinkProps & { name: string }) => {
	//Thi is probably terribly inefficient / It wasn't/isn't good
	//We could simplify it
	const { user } = useUser();
	//nicer than ternary / get on the tip of tongue
	const username = user?.username || "";

	console.log({ name: `${name}.label` });

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
				defaultValue={link.route}
				startAdornment={`users/${username}/`}
				required
			/>
			{/* Add remove / move up, down, etc */}
		</Stack>
	);
};

//Better name navigationDisplay??
//EditNavigationDisplay
//
//We need to re-render whenever the order changes
//note - if we are watching the nav array
//then any change in that array will re-render everything?
export const EditNavigationDisplay = ({ nav }: NavigationProps) => {
	const navLinks = nav.map((link, i) => {
		return <NavLink link={link} name={`nav.${i}`} key={`nav.${i}`} />;
	});
	return <Stack>{navLinks}</Stack>;
};
