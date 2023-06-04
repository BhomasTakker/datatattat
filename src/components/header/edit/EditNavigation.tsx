//https://newdevzone.com/posts/how-to-get-a-react-components-size-heightwidth-before-render
import { Box, Button, Stack } from "@mui/material";
import React, { useCallback, useContext } from "react";
import { NavLinkData } from "../nav-links/NavLink";

//has to be within the context to use
import { useWatch } from "react-hook-form";
import { EditContext } from "@/src/context/edit-context";
// import { useUser } from "@/src/hooks/useUser";
// import edit from "@/src/pages/edit";

// type NavigationProps = {
// 	navLinks: NavLinkData[];
// };

//dynamic list from props
export const EditNavigation = () => {
	// const { control, watch } = useFormContext();
	const watchNav: NavLinkData[] = useWatch({
		name: `nav`,
	});
	// const { user } = useUser();
	// const username = user?.username || "";
	const editCtx = useContext(EditContext);
	//doublebind basically when this updates we update
	//Probably shouldn't work like this?
	//Alternative would be listen to self?
	//but this is effectively a small thing
	// const watchNav: NavLinkData[] = watch("nav", []);

	// console.log({ watchNav });

	//navlink clicked
	const onClick = useCallback(
		(route: string) => {
			console.log("Clicked " + route);
			const currentPage = editCtx.currentPage;
			const trimmedRoute = route; //.slice(1);// no need / removed from initial value
			console.log("Clicked currentPage " + currentPage);
			//temporary alert - you will lose any unsaved information
			//Or if route does not == currentRoute?
			//repeat need to outsource the function

			//Need check for spaces??

			if (!route) {
				//show warning alert - no route provided
				return;
			}

			const updateRoute =
				currentPage === "/"
					? `/${trimmedRoute}`
					: `${currentPage}/${trimmedRoute}`;

			editCtx.setCurrentPageHandler(updateRoute);
		},
		[editCtx]
	);

	const drawNavLinks = useCallback(() => {
		//We need to get round this
		//If I use correct variables torerender function
		//We are wildly unperforment
		//Is there a better/proper way
		//Are we risking not rendering when we should?
		//With this we got him - and nip the render
		//Technically
		if (!watchNav) {
			return [];
		}
		return watchNav.map((link, i) => {
			console.log("THIS RENDER");
			const element = (
				// Button to load page
				<Button
					sx={{ color: "black" }}
					onClick={() => onClick(link.route)}
					key={`${link.label}-${i}`}
				>
					{link.label}
				</Button>
			);
			return element;
		});
	}, [watchNav, onClick]);

	return (
		<Box>
			<Stack direction="row">{drawNavLinks()}</Stack>
		</Box>
	);
};
