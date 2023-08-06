import { Box, Button } from "@mui/material";
// import { PageEdit } from "../../forms/edit/PageEdit";
import { PageContent } from "./content/page-content";

export const PageForm = () => {
	return (
		<Box>
			<PageContent />
			{/* <PageEdit /> */}
			<Box>
				<Button type="submit" variant="contained" color="primary">
					Save Page
				</Button>
			</Box>
		</Box>
	);
};
