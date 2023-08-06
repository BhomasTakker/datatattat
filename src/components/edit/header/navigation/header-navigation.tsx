import { Box, Button, Stack } from "@mui/material";
import { useCallback, useContext } from "react";
import { HeaderStateContext } from "../context/form/state/header-state.context";

export const HeaderNavigation = () => {
	const { navigation, setRoute } = useContext(HeaderStateContext);

	const renderNavigationLinks = useCallback(() => {
		return navigation.map((link) => {
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
	}, [navigation, setRoute]);

	return (
		<Box>
			<Stack direction="row">{renderNavigationLinks()}</Stack>
		</Box>
	);
};
