/* eslint-disable react/display-name */
import { Typography } from "@mui/material";
import { ElementType } from "react";
import { Variant } from "@mui/material/styles/createTypography";

//we should have a renderprops folder perhaps and then labels sub folder? etc

//Types folder would get extremely busy no?
export type RenderLabelPropsType = {
	label: string;
	visualWeight?: Variant;
	semanticWeight?: ElementType;
};

//HOC render props function seems a little ott
export const renderLabel = ({
	label,
	visualWeight = "h6",
	semanticWeight = "h6",
}: RenderLabelPropsType) => {
	return () => {
		return (
			<Typography variant={visualWeight} component={semanticWeight}>
				{label}
			</Typography>
		);
	};
};
