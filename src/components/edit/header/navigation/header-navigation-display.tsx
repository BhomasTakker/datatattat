import { Stack, Typography } from "@mui/material";
import { HeaderNavigationLinks } from "./links/header-navigation-links";
import { MARGINS } from "config/styles/styles.config";

export const HeaderNavigationDisplay = () => {
	return (
		<Stack direction="column">
			<Stack direction="row">
				{/* should do a 'grid' 2 columns - 3 columns label | endpoint | buttons */}
				{/* Need just be 50% width */}
				<Typography minWidth={"33%"} marginLeft={MARGINS.SMALL}>
					Label
				</Typography>
				<Typography minWidth={"33%"} marginLeft={MARGINS.SMALL}>
					Endpoint
				</Typography>
			</Stack>
			<HeaderNavigationLinks />
		</Stack>
	);
};
