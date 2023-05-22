import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { EditComponents } from "../../forms/edit/EditComponents";

//Just a blank Component until DTAStack is given some props say
//We don't mirror the component structure
//We mirror the json structure - always remember that
//At this point - better to create a blank component
export const DTAStackEdit = () => {
	return (
		<Box>
			{/* <Typography variant="h3">DTAStack</Typography> */}
			{/* We can provide an explanation/visual representation of what DTAStack is  */}
			{/* Should pass what the name is from above no? */}
			<EditComponents objectKey={"content"} />
		</Box>
	);
};
