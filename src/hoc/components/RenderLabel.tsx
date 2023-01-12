import { Typography } from "@mui/material";
import { ElementType } from "react";
import { Variant } from "@mui/material/styles/createTypography";

//Types folder would get extremely busy no?
//Keep where used / refactor if need be?
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
	return function renderLabelHOC() {
		return (
			<Typography variant={visualWeight} component={semanticWeight}>
				{label}
			</Typography>
		);
	};
};
