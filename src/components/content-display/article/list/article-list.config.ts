import { ListProps } from "@mui/material";
import { ArticleListVariant } from "./article-list.controller";
import { ArticleListProps } from "./article-list";

type ConfigType = Omit<ArticleListProps, "data"> & ListProps;

const compactStandard: ConfigType = {
	variant: "compact",
};
const compactScroll: ConfigType = {
	variant: "compact",
	sx: {
		// need provide height
		maxHeight: "100vh",
		overflow: "auto",
	},
};
const expandedStandard: ConfigType = {
	variant: "expanded",
};
const expandedScroll: ConfigType = {
	variant: "expanded",
	sx: {
		maxHeight: "100vh",
		overflow: "auto",
	},
};

const configMap = new Map([
	["compact-standard", compactStandard],
	["compact-scroll", compactScroll],
	["expanded-standard", expandedStandard],
	["expanded-scroll", expandedScroll],
]);

export const getArticleListConfig = (variant: ArticleListVariant) => {
	return configMap.get(variant) || {};
};
