import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

interface TitleListItemProps {
	title: string;
	src: string;
	guid: string;
}

// Should be redundant / arrticle-list, and article-list-item

// if you could get variant in here
// then you could specify slim, description on hover, etc
export const TitleListItem = ({ title, src, guid }: TitleListItemProps) => {
	const onClickHandler = () => {};

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
