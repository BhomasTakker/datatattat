import { CollectionItem } from "@/src/types/data-structures/collection/item/item";
import {
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Typography,
} from "@mui/material";

// Should be redundant / arrticle-list, and article-list-item

import { ArticleAvatar } from "./avatar/avatar";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { ListItemContextProvider } from "./context/list-item.context";
import { stripHTML } from "@/src/utils/html";
import { useInView } from "react-intersection-observer";

export const SimpleArticle = (collectionItem: CollectionItem) => {
	const { title, avatar, src, description, guid, variant, details } =
		collectionItem;
	// hack for BING article
	// need update BING
	// or update sky / general RSS / chase this up and fix
	const img = avatar ? avatar.src : "";

	// We want to do different things on click and/or hover

	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	const onClickHandler = () => {};

	return (
		<ListItemContextProvider value={{ item: collectionItem }}>
			<ListItem ref={ref}>
				{inView && (
					// {/* If link button - but next? */}
					// {/* Create a compound component which just chooses which to use */}
					<ListItemButton
						selected={false}
						color={"primary"}
						onClick={onClickHandler}
						component="a"
						href={src}
					>
						<ListItemAvatar>
							<ArticleAvatar alt={title} img={img} src={src} />
						</ListItemAvatar>

						<ListItemText
							disableTypography
							primary={<Title text={title} variant={TitleVariant.ARTICLE} />}
							secondary={
								<Typography
									sx={{
										maxWidth: "100%",
										display: "-webkit-box",
										// function to return this data
										// take num lines
										overflow: "hidden",
										textOverflow: "ellipsis",
										WebkitBoxOrient: "vertical",
										WebkitLineClamp: 3,
										maxLines: 3,
									}}
									component="span"
									variant="body2"
									color="text.primary"
								>
									{stripHTML(description)}
								</Typography>
							}
						/>
					</ListItemButton>
				)}
			</ListItem>
		</ListItemContextProvider>
	);
};
