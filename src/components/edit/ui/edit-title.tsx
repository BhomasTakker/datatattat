import React from "react";
import { EditTitleProps, TitleVariant } from "../types/ui";
import Typography from "@mui/material/Typography";

const Page = ({ children }: { children: string }) => {
	return (
		<Typography
			variant="h1"
			component="h1"
			marginTop="2rem"
			marginBottom="2rem"
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
			marginTop="1.5rem"
			marginBottom="1.5rem"
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
			marginTop="1rem"
			marginBottom="1rem"
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
//Our variants should be main, sub, article, etc
// Should be able to pass down overides for component say
export const Title = ({
	variant = TitleVariant.PAGE,
	text,
}: EditTitleProps) => {
	const Component = ComponantHash[variant];
	return <Component>{text}</Component>;
};
