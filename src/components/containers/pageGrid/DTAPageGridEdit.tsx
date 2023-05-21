import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import { EditComponents } from "../../forms/edit/EditComponents";

//Just a mirror of DTAStack at the moment
export const DTAPageGridEdit = () => {
	return (
		<Container>
			{/* Will always be content? */}
			<EditComponents objectKey={"content"} />
		</Container>
	);
};
