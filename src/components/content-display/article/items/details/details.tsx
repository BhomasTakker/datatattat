import { Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { Time } from "../time/Time";
import { Details } from "@/src/types/data-structures/base";

export const DetailsComponent = ({
	details,
	showPublished = false,
	showCategories = false,
	showpublishers = false,
	showAuthors = false,
}: {
	details?: Details;
	showPublished?: boolean;
	showCategories?: boolean;
	showpublishers?: boolean;
	showAuthors?: boolean;
}) => {
	const {
		published = null,
		categories = null,
		publishers = null,
		authors = null,
	} = details || {};
	console.log("FETURE:0007", "Details", {
		details,
		published,
		categories,
		publishers,
		authors,
	});
	return (
		<Stack
			direction="row"
			justifyContent={"space-between"}
			marginTop={MARGINS.SMALL}
		>
			{/* do something proper with the time!! */}
			{/* Like we want an image AND avatar component - we want Time - variant age/publish date */}
			{showPublished && <Time time={published} variant="age" />}
			{showCategories && <p>{categories?.join(", ")}</p>}
			{showpublishers && <p>{publishers?.join(", ")}</p>}
			{showAuthors && <p>{authors?.join(", ")}</p>}
		</Stack>
	);
};
