//https://newdevzone.com/posts/how-to-get-a-react-components-size-heightwidth-before-render
import { Box, Button, Stack } from "@mui/material";
import React, { useContext } from "react";
import { NavLinkData } from "./NavLink";

//has to be within the context to use
import { useFormContext } from "react-hook-form";
import { EditContext } from "@/src/context/edit-context";

type NavigationProps = {
	navLinks: NavLinkData[];
};

//dynamic list from props
export const EditNavigation = () => {
	const { watch } = useFormContext();
	const editCtx = useContext(EditContext);
	const watchNav: NavLinkData[] = watch("nav", []);

	console.log({ watchNav });

	const onClick = (route: string) => {
		console.log("Clicked " + route);
		//temporary alert - you will lose any unsaved information
		//Or if route does not == currentRoute?
		editCtx.setCurrentPageHandler(route);
	};

	const drawNavLinks = () => {
		return watchNav.map((link, i) => {
			const element = (
				// Button to load page
				<Button
					sx={{ color: "black" }}
					onClick={() => onClick(link.route)}
					key={link.label}
				>
					{link.label}
				</Button>
			);
			return element;
		});
	};

	return (
		<Box>
			<Stack direction="row">{drawNavLinks()}</Stack>
		</Box>
	);
};
