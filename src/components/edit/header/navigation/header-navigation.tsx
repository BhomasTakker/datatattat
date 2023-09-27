import { Box, Button, Stack } from "@mui/material";
import { useCallback, useContext } from "react";
import { HeaderStateContext } from "../context/form/state/header-state.context";
import { useFormContext } from "react-hook-form";
import { NavLinkData } from "@/src/components/header/nav-links/NavLink";

export const HeaderNavigation = () => {
	const { navigationId, setRoute } = useContext(HeaderStateContext);
	const { getValues } = useFormContext();
	const nav = (getValues(navigationId) as NavLinkData[]) || [];

	const renderNavigationLinks = () => {
		return nav.map((link) => {
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
	}; // [nav, setRoute]);

	return (
		<Box>
			<Stack direction="row">{renderNavigationLinks()}</Stack>
		</Box>
	);
};
