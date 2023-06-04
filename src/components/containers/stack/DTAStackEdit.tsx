import { Box } from "@mui/material";
import React from "react";
import { EditComponents } from "../../forms/edit/EditComponents";
import { WithInfo } from "../../edit/info/WithInfo";
import { Title } from "../../ui/title";
import { TitleVariant } from "../../types/ui";
import { MARGINS } from "config/styles/styles.config";

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
			{/* <Box marginLeft={MARGINS.MIDSMALL} marginRight={MARGINS.MIDSMALL}> */}
			<WithInfo infoId="DTAStack">
				<Title variant={TitleVariant.EDIT_COMPONENT} text="DTA Stack" />
			</WithInfo>
			{/* </Box> */}
			<EditComponents objectKey={"content"} />
		</Box>
	);
};
