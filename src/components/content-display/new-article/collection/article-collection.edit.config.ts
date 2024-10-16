// should be json

import { COMPONENT_DETAILS } from "config/edit/components/component-details.config";
import {
	ArticleComponentOptions,
	ArticleVariant,
	ArticleVariantOptions,
	InteractionVariant,
} from "./stack/configs/article-components";
import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { EDIT_WITH } from "@/src/factories/with";
import { filterObjectByKeys } from "@/src/utils/object";

// We need to split this file up!!!
export enum StackVariant {
	columns = "stack-columns",
	scroller = "stack-scroller",
}

export enum CarouselVariant {
	standard = "carousel-display",
}

export enum ContentDisplayVariant {
	youtube = "youtube",
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

const carouselStandardVariantOptions = [
	{
		id: "carouselType",
		type: EditInputs.select,
		options: ["scroller", "buttons"],
		label: "Carousel Style",
		info: "The type of carousel.",
	},
];

const contentDisplayYouTubeVariantOptions: any[] = [];

// From here effectvely - create stack, grid, etc edit files
type StackVariantProps =
	| typeof stackColumnsVariantOptions
	| typeof stackScrollerVariantOptions;

const stackVariantMap = new Map<string, StackVariantProps>([
	[StackVariant.scroller, stackScrollerVariantOptions],
	[StackVariant.columns, stackColumnsVariantOptions],
]);

type CarouselVariantProps = typeof carouselStandardVariantOptions;

const carouselVariantMap = new Map<string, CarouselVariantProps>([
	[CarouselVariant.standard, carouselStandardVariantOptions],
]);

type ContentDisplayVariantProps = typeof contentDisplayYouTubeVariantOptions;

const contentDisplayVariantMap = new Map<string, ContentDisplayVariantProps>([
	[ContentDisplayVariant.youtube, contentDisplayYouTubeVariantOptions],
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
];
const carouselVariantOptions = [
	{
		id: "variantType",
		type: EditInputs.objectSelect,
		// input array from somewhere
		options: ["carousel-display"],
		// if no option id we should just add to the current object? / also just call variantObject no
		optionId: "carouselVariantObject",
		label: "Carousel Variant",
		info: "ArticleCarouselVariant",
		optionsMap: carouselVariantMap,
	},
	{
		id: "limit",
		type: EditInputs.number,
		min: 0,
		label: "Max Articles",
		info: "Number of articles in the list. 0 is all.",
	},
];

const contentDisplayVariantOptions = [
	{
		id: "variantType",
		type: EditInputs.objectSelect,
		// input array from somewhere
		options: ["youtube"],
		// if no option id we should just add to the current object? / also just call variantObject no
		optionId: "variantObject",
		label: "Content Display Variant",
		info: "articleContentDisplayVariant",
		optionsMap: contentDisplayVariantMap,
	},
];

const playVariantOptions: any[] = [];
const navigationVariantOptions: any[] = [];
const displayVariantOptions = [
	{
		id: "displayId",
		type: EditInputs.text,
		label: "Display Id",
		info: "Id of the display you want to play/show the content",
	},
];

type InteractionVariantProps =
	| typeof navigationVariantOptions
	| typeof displayVariantOptions
	| typeof playVariantOptions;

type ArticleVariantProps =
	| typeof gridVariantOptions
	| typeof stackVariantOptions
	| typeof listVariantOptions
	| typeof carouselVariantOptions
	| typeof contentDisplayVariantOptions;

const articleVariantMap = new Map<string, ArticleVariantProps>([
	[ArticleVariant.grid, gridVariantOptions],
	[ArticleVariant.stack, stackVariantOptions],
	[ArticleVariant.list, listVariantOptions],
	[ArticleVariant.carousel, carouselVariantOptions],
	[ArticleVariant.contentDisplay, contentDisplayVariantOptions],
]);

const articleInteractionsMap = new Map<string, InteractionVariantProps>([
	[InteractionVariant.navigation, navigationVariantOptions],
]);

const mediaInteractionMap = new Map<string, InteractionVariantProps>([
	[InteractionVariant.display, displayVariantOptions],
	[InteractionVariant.play, playVariantOptions],
]);

const mediaPlayerInput = {
	id: "mediaPlayer",
	type: EditInputs.switch,
	label: "Use Media Player",
	info: "Use a media player in place of image.",
};

const articleInteractions = {
	id: "interaction",
	type: EditInputs.objectSelect,
	// we want different options for article/video etc
	options: ["navigation"],
	label: "Interaction Type",
	info: "On click what do you want to happen?",
	optionsMap: articleInteractionsMap,
};
const mediaInteractions = {
	id: "interaction",
	type: EditInputs.objectSelect,
	// we want different options for article/video etc
	options: ["display", "play"],
	label: "Interaction Type",
	info: "On click what do you want to happen?",
	optionsMap: mediaInteractionMap,
};
const articleTypeOptions = [articleInteractions];
const videoTypeOptions = [mediaInteractions, mediaPlayerInput];
const audioTypeOptions = [mediaInteractions, mediaPlayerInput];

type ContentType =
	| typeof articleTypeOptions
	| typeof videoTypeOptions
	| typeof audioTypeOptions;

const contentTypeMap = new Map<string, ContentType>([
	["article", articleTypeOptions],
	["video", videoTypeOptions],
	["audio", audioTypeOptions],
]);

const contentType = {
	type: EditInputs.objectSelect,
	id: "contentType",
	label: "Content type",
	options: ["article", "video", "audio"],
	info: "The Content Type.",
	optionsMap: contentTypeMap,
};

const acceptedValues = ["new-rss-query", "api-query", "custom-data"];
// This level the data shape is different
// We can say what 'with' objects are available
export const ARTICLE_COLLECTION = {
	id: "ArticleCllection",
	info: "ArticleCllection",
	title: "Article Collection",
	withObject: filterObjectByKeys(EDIT_WITH, acceptedValues),

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
		// add select type here?
		contentType,
		// add from base
		{
			id: "showDetails",
			type: EditInputs.show,
			label: "Show Details",
			info: "Show details object",
			inputs: [
				{
					id: "showPublished",
					type: EditInputs.switch,
					label: "Show Published",
					info: "Show when the article was published.",
				},
				{
					id: "showPublishers",
					type: EditInputs.switch,
					label: "Show Publishers",
					info: "The publishers of the article.",
				},
				{
					id: "showAuthors",
					type: EditInputs.switch,
					label: "Show Authors",
					info: "The authors of the article.",
				},
				{
					id: "showCategories",
					type: EditInputs.switch,
					label: "Show Categories",
					info: "The categories of the article.",
				},
			],
		},
	],
};
