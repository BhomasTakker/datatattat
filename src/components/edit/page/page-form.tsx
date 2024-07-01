import { Box, Button } from "@mui/material";
import { PageContent } from "./content/page-content";

export const PageForm = () => {
	return (
		<Box>
			<PageContent />
			<Box>
				<Button type="submit" variant="contained" color="secondary">
					Save Page
				</Button>
			</Box>
		</Box>
	);
};
