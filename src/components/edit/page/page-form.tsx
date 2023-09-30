import { Box, Button } from "@mui/material";
import { PageContent } from "./content/page-content";

export const PageForm = () => {
	console.log("ISSUE:12345", "PAGE:FORM");
	return (
		<Box>
			<PageContent />
			<Box>
				<Button type="submit" variant="contained" color="primary">
					Save Page
				</Button>
			</Box>
		</Box>
	);
};
