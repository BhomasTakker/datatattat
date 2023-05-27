import Page from "@/models/Page";
import { Typography } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { TextVariant, TextProps } from "../types/ui";
import { ReactNode } from "react";

const Description = ({ children }: { children: ReactNode }) => {
	return (
		<Typography
			variant="body1"
			component="span"
			marginTop={MARGINS.SMALL}
			marginBottom={MARGINS.SMALL}
		>
			{children}
		</Typography>
	);
};
const ComponantHash = {
	Description,
};
// Our variants should be main, sub, article, etc
// Should be able to pass down overides for component say
// Definitely overides for margin
export const Text = ({ variant = TextVariant.DESCIPTION, text }: TextProps) => {
	const Component = ComponantHash[variant];
	//if typeof Component ... else <></>
	return <Component>{text}</Component>;
};
