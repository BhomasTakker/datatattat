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
// this is a dumb way to go!
const Content = ({ children }: { children: string }) => {
	return (
		<Typography
			variant="h2"
			component="h2"
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
			variant="h4"
			component="h4"
			marginTop={MARGINS.MIDSMALL}
			marginBottom={MARGINS.MIDSMALL}
		>
			{children}
		</Typography>
	);
};

// Should just do one component
// but spread props according to variant
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
const Article = ({ children }: { children: string }) => {
	return (
		<Typography variant="h6" component="h6" marginTop={MARGINS.VSMALL}>
			{children}
		</Typography>
	);
};
const ComponantHash = {
	Page,
	Sub,
	EditComponent,
	Content,
	Article,
};
// Our variants should be main, sub, article, etc
// Should be able to pass down overides for component say
// Definitely overides for margin
const Title = React.memo(
	({ variant = TitleVariant.PAGE, text }: TitleProps) => {
		console.log("RE-RENDER TITLE");
		const Component = ComponantHash[variant];
		//if typeof Component ... else <></>
		return <Component>{text}</Component>;
	}
);
Title.displayName = "Title";
export { Title };
