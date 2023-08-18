import Container from "@mui/material/Container";
import React from "react";
import { EditComponentsContainer } from "../../edit/components/edit-components.container";

//Just a mirror of DTAStack at the moment
export const DTAPageGridEdit = () => {
	return (
		<Container>
			{/* Will always be content? */}
			{/* <EditComponents objectKey={"content"} /> */}
			<EditComponentsContainer objectKey={"content"} />
		</Container>
	);
};
