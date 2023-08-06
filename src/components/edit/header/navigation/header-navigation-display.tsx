import { Stack, Typography } from "@mui/material";
import { HeaderNavigationLinks } from "./links/header-navigation-links";

export const HeaderNavigationDisplay = () => {
	return (
		<Stack direction="column">
			<Stack direction="row">
				{/* should do a 'grid' 2 columns - 3 columns label | endpoint | buttons */}
				<Typography minWidth={"200px"}>Label</Typography>
				<Typography minWidth={"200px"}>Endpoint</Typography>
			</Stack>
			<HeaderNavigationLinks />
		</Stack>
	);
};
