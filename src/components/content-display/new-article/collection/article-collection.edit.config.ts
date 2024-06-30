// should be json

import { COMPONENT_DETAILS } from "config/edit/components/component-details.config";
import {
	ArticleComponentOptions,
	ArticleVariant,
	ArticleVariantOptions,
} from "./stack/configs/article-components";
import { EditInputs } from "@/src/components/edit/inputs/input.map";

// We need to split this file up!!!
export enum StackVariant {
	columns = "stack-columns",
	scroller = "stack-scroller",
}

const stackColumnsVariantOptions = [
	{
		id: "card",
		type: EditInputs.select,
		options: ArticleComponentOptions,
		label: "Display Component",
		info: "The card type.",
	},
	// dependent upon type
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
];
const stackScrollerVariantOptions = [
	{
		id: "card",
		type: EditInputs.select,
		options: ArticleComponentOptions,
		label: "Card",
		info: "The card type to use`.",
	},
	// dependent upon type
	{
		id: "cardSize",
		type: EditInputs.select,
		options: ["sm", "md", "lg"],
		label: "Card Size",
		info: "The minimum size that each card should be.",
	},
	{
		id: "limit",
		type: EditInputs.number,
		min: 0,
		label: "Max articles",
		info: "Number of articles to show - 0 means all",
	},
];

type StackVariantProps =
	| typeof stackColumnsVariantOptions
	| typeof stackScrollerVariantOptions;

const stackVariantMap = new Map<string, StackVariantProps>([
	[StackVariant.scroller, stackScrollerVariantOptions],
	[StackVariant.columns, stackColumnsVariantOptions],
]);

const gridVariantOptions = [
	{
		id: "variantType",
		type: EditInputs.select,
		// input array from somewhere
		options: ["grid-standard"],
		label: "Grid Variant",
		info: "ArticleGridVariant",
	},
	{
		id: "gridType",
		type: EditInputs.select,
		options: ["bbc-style", "oneTwoFour"],
		label: "Display Component",
		info: "Test grid",
	},
];
const stackVariantOptions = [
	{
		id: "variantType",
		type: EditInputs.objectSelect,
		// get from somewhere
		options: ["stack-columns", "stack-scroller"],
		optionId: "stackVariantObject",
		label: "Stack Variant",
		info: "ArticleStackVariant",
		optionsMap: stackVariantMap,
	},
	// {
	// 	id: "variantType",
	// 	type: EditInputs.select,
	// 	// input array from somewhere
	// 	options: ["stack-columns", "stack-scroller"],
	// 	label: "Stack Variant",
	// 	info: "ArticleStackVariant",
	// },
];
const listVariantOptions = [
	{
		id: "variantType",
		type: EditInputs.select,
		// input array from somewhere
		options: ["list-standard"],
		label: "List Variant",
		info: "ArticleListVariant",
	},
	{
		id: "listStyle",
		type: EditInputs.select,
		// input array from somewhere
		options: ["standard", "topN"],
		label: "List Style",
		info: "ArticleListStyleVariant",
	},
	{
		id: "columns",
		type: EditInputs.number,
		max: 4,
		min: 1,
		label: "Max number of columns",
		info: "Number of stack columns when full screen.",
	},
	{
		id: "limit",
		type: EditInputs.number,
		min: 0,
		label: "Max Articles",
		info: "Number of articles in the list. 0 is all.",
	},
	{
		id: "display",
		type: EditInputs.switch,
		label: "Display Component",
		info: "Show a 'Display' component as the first item.",
	},
];
const carouselVariantOptions = [
	{
		id: "variantType",
		type: EditInputs.select,
		// input array from somewhere
		options: ["carousel-display"],
		label: "Carousel Variant",
		info: "ArticleCarouselVariant",
	},
	{
		id: "limit",
		type: EditInputs.number,
		min: 0,
		label: "Max Articles",
		info: "Number of articles in the list. 0 is all.",
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
	],
};
