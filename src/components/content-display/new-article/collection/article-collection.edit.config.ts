// should be json

import { COMPONENT_DETAILS } from "config/edit/components/component-details.config";
import {
	ArticleComponentOptions,
	ArticleVariant,
	ArticleVariantOptions,
} from "./stack/configs/article-components";
import { EditInputs } from "@/src/components/edit/inputs/input.map";

const gridVariantOptions = [
	{
		id: "variantType",
		type: EditInputs.select,
		// input array from somewhere
		options: ["stack-columns"],
		label: "Stack Variant",
		info: "ArticleStackVariant",
	},
];
const stackVariantOptions = [
	{
		id: "variantType",
		type: EditInputs.select,
		// input array from somewhere
		options: ["stack-columns"],
		label: "Stack Variant",
		info: "ArticleStackVariant",
	},
];
const listVariantOptions = [
	{
		id: "variantType",
		type: EditInputs.select,
		// input array from somewhere
		options: ["stack-columns"],
		label: "Stack Variant",
		info: "ArticleStackVariant",
	},
];
const carouselVariantOptions = [
	{
		id: "variantType",
		type: EditInputs.select,
		// input array from somewhere
		options: ["stack-columns"],
		label: "Stack Variant",
		info: "ArticleStackVariant",
	},
];

type ArticleVariantProps =
	| typeof gridVariantOptions
	| typeof stackVariantOptions
	| typeof listVariantOptions
	| typeof carouselVariantOptions;

const articleVariantMap = new Map<string, ArticleVariantProps>([
	[ArticleVariant.grid, gridVariantOptions],
	[ArticleVariant.stack, stackVariantOptions],
	[ArticleVariant.list, listVariantOptions],
	[ArticleVariant.carousel, carouselVariantOptions],
]);

export const ARTICLE_COLLECTION = {
	id: "ArticleCllection",
	info: "ArticleCllection",
	title: "Article Collection",

	props: [
		...COMPONENT_DETAILS,
		{
			type: EditInputs.title,
			title: "Collection Props",
		},
		// {
		// 	id: "variant",
		// 	type: EditInputs.select,
		// 	// input array from somewhere
		// 	options: ["grid", "list", "stack", "carousel"],
		// 	label: "Collection Variant",
		// 	info: "ArticleCollectionVariant",
		// },
		{
			id: "variant",
			type: EditInputs.objectSelect,
			// get from somewhere
			options: ArticleVariantOptions,
			optionId: "variantTypeObject",
			label: "Collection Variant",
			info: "ArticleCollectionVariant",
			optionsMap: articleVariantMap,
		},
		{
			id: "card",
			type: EditInputs.select,
			options: ArticleComponentOptions,
			label: "Display Component",
			info: "Show a 'Display' component as the first item.",
		},
		{
			id: "display",
			type: EditInputs.switch,
			label: "Display Component",
			info: "Show a 'Display' component as the first item.",
		},
		{
			id: "columns",
			type: EditInputs.number,
			max: 4,
			min: 1,
			label: "Max number of columns",
			info: "Number of stack columns when full screen.",
		},
	],
};
