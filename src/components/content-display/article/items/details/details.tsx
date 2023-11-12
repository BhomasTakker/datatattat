import { Stack, Typography } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { Time } from "../time/Time";
import { Details } from "@/src/types/data-structures/base";
import { DetailsVariant } from "./details.css-data";
import { CSS } from "@/src/css/text";

interface DetailsTextProps {
	children: React.ReactNode;
}

const DetailsText = ({ children }: DetailsTextProps) => {
	return (
		<Typography
			sx={{
				...CSS.maxLines({ maxLines: 1 }),
			}}
		>
			{children}
		</Typography>
	);
};

export type DetailsVariantType = "space-between" | "stack";

export interface DetailsComponentProps {
	details?: Details;
	showPublished?: boolean;
	showCategories?: boolean;
	showpublishers?: boolean;
	showAuthors?: boolean;
	variant?: DetailsVariantType;
	// divider?: boolean;
}

export const DetailsComponent = ({
	details,
	showPublished = false,
	showCategories = false,
	showpublishers = false,
	showAuthors = false,
	// divider = true,
	variant = "space-between",
}: DetailsComponentProps) => {
	const {
		published = null,
		categories = null,
		publishers = null,
		authors = null,
	} = details || {};

	const variantProps = DetailsVariant.get(variant);

	return (
		<Stack
			data-testid="details"
			{...variantProps}
			// divider={React Element}
		>
			{/* do something proper with the time!! */}
			{/* Like we want an image AND avatar component - we want Time - variant age/publish date */}
			{showPublished && <Time time={published} variant="age" />}
			{showCategories && <DetailsText>{categories?.join(", ")}</DetailsText>}
			{showpublishers && <DetailsText>{publishers?.join(", ")}</DetailsText>}
			{showAuthors && <DetailsText>{authors?.join(", ")}</DetailsText>}
		</Stack>
	);
};
