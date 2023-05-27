import React from "react";
import { TitleProps, TitleVariant } from "../types/ui";
import Typography from "@mui/material/Typography";
import { MARGINS } from "config/styles/styles.config";

//Should just be Title / not just Edit

const Page = ({ children }: { children: string }) => {
	return (
		<Typography
			variant="h1"
			component="h1"
			marginTop={MARGINS.MIDLARGE}
			marginBottom={MARGINS.MIDLARGE}
		>
			{children}
		</Typography>
	);
};

const EditComponent = ({ children }: { children: string }) => {
	return (
		<Typography
			variant="h3"
			component="h3"
			marginTop={MARGINS.MIDSMALL}
			marginBottom={MARGINS.MIDSMALL}
		>
			{children}
		</Typography>
	);
};

const Sub = ({ children }: { children: string }) => {
	return (
		<Typography
			variant="h5"
			component="h5"
			marginTop={MARGINS.MIDSMALL}
			marginBottom={MARGINS.MIDSMALL}
		>
			{children}
		</Typography>
	);
};
const ComponantHash = {
	Page,
	Sub,
	EditComponent,
};
// Our variants should be main, sub, article, etc
// Should be able to pass down overides for component say
// Definitely overides for margin
export const Title = ({ variant = TitleVariant.PAGE, text }: TitleProps) => {
	const Component = ComponantHash[variant];
	//if typeof Component ... else <></>
	return <Component>{text}</Component>;
};
