import { Box, Button, Stack } from "@mui/material";
import { useContext } from "react";
import { HeaderStateContext } from "../context/form/state/header-state.context";
import { useWatch } from "react-hook-form";
import { NavLinkData } from "@/src/components/header/nav-links/NavLink";

/**
 *
 * @returns The Edit Navigation React Component
 */
export const HeaderNavigation = () => {
	const { navigationId, setRoute } = useContext(HeaderStateContext);

	// We need to update after every change
	// We could be smarter about it - only update component when label changes but meh
	// That level of performance optimisation is a moot point
	const navigation = useWatch({ name: navigationId, defaultValue: [] });

	const renderNavigationLinks = () => {
		return navigation.map((link: NavLinkData) => {
			const { label, route } = link;

			return (
				<Button
					sx={{ color: "black" }}
					onClick={() => setRoute(route)}
					key={`${label}`}
				>
					{label}
				</Button>
			);
		});
	};

	return (
		<Box>
			<Stack direction="row">{renderNavigationLinks()}</Stack>
		</Box>
	);
};
