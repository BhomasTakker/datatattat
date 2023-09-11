import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

interface TitleListItemProps {
	title: string;
	src: string;
	guid: string;
}

// if you could get variant in here
// then you could specify slim, description on hover, etc
export const TitleListItem = ({ title, src, guid }: TitleListItemProps) => {
	// hack for BING article
	// need update BING
	// or update sky / general RSS
	console.log("FEATURE:754", "TITLE:LIST:ITEM", { title }, { src });

	// how to set this / href
	const onClickHandler = () => {
		console.log(`GO TO ${src}`);
	};

	return (
		<ListItem sx={{ margin: 0, padding: 0 }}>
			{/* If link button - but next? set from somewhere*/}
			<ListItemButton
				// sx={{ margin: 0, padding: 0 }}
				selected={false}
				color={"primary"}
				onClick={onClickHandler}
				component="a"
				href={src}
			>
				<ListItemText primary={title} />
			</ListItemButton>
		</ListItem>
	);
};
