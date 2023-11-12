// Don't like having getConfig here and continuiously being made

import { ListItemProps } from "@mui/material";
import { ViewportSize } from "../../card/article-card.wrapper";
import { ArticleListItemProps } from "./aticle-list-item";
type ConfigType = Omit<ArticleListItemProps, "item"> & ListItemProps;
export type ArticleListItemVariant = "compact" | "expanded";

// this likely needs a think
// Either props AND variant
// or an impossible number of variants
// Some of these props being defaults
// So compact - but maxLines, showAvatar, publisher, published, or author
const compact: ConfigType = {
	direction: "row",
	avatarSize: "sm",
	titleMaxLines: 1,
	useAvatar: true,
	showDescription: false,
	descriptionMaxLines: 1,
	showPublished: true,
	showAuthor: false,
	showPublisher: false,
	// divider: true,
	// disableGutters: true,
	// disablePadding: true,
	sx: { paddingY: 0 },
};

const expanded: ConfigType = {
	direction: "column",
	avatarSize: "md",
	titleMaxLines: 1,
	useAvatar: true,
	showDescription: true,
	descriptionMaxLines: 3,
	showPublished: true,
	showAuthor: false,
	showPublisher: true,
	// divider: true,
};

const getVariant = new Map<string, ConfigType>([
	["compact", compact],
	["expanded", expanded],
]);
// Have a set naming conventionand generic get
export const getArticleListItemConfig = (
	variant: ArticleListItemVariant,
	size?: ViewportSize
) => {
	return getVariant.get(variant) || expanded;
};
