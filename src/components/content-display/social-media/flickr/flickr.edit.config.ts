import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { FlickrEmbedType } from "./flickr.config";
// Theres a lot more controls available
// https://developer.flickr.com/api/oembed/videos

const userInput = {
	type: EditInputs.text,
	id: "user",
	label: "user",
	info: "user",
};

const pageInput = {
	type: EditInputs.text,
	id: "page",
	label: "page",
	info: "page",
};

const userOptions = [userInput];
const pageOptions = [pageInput];

type FlickrVariantProps = typeof userOptions | typeof pageOptions;

const flickrVariantMap = new Map<string, FlickrVariantProps>([
	[FlickrEmbedType.user, userOptions],
	[FlickrEmbedType.page, pageOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [FlickrEmbedType.user, FlickrEmbedType.page],
	// optionId: "embedObject",
	label: "Content Type",
	info: "Flickr ContentType",
	optionsMap: flickrVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "flickrRoot",
};

export const FLICKR_ROOT = [contentSelect, setQueryId];
