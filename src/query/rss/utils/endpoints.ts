import { baseRSSConversion } from "../rss-feed.config";

interface BasicEndpoint {
	id: string;
	queryId?: string;
	conversions?: any;
	params?: any[];
	info?: string;
}
export const createBasicEndpoint = ({
	id,
	queryId = id,
	conversions = baseRSSConversion,
	params = [],
	info = "",
}: BasicEndpoint) => ({
	id,
	queryId,
	conversions,
	params,
	info,
});

interface CreateSelectEndpoint {
	id: string;
	label: string;
	endpoints: any;
	defaultEndpoint: string;
	endpointObjects?: any;
}

// Do we need endpoint objects?
export const createSelectEndpoint = ({
	id,
	queryId = id,
	conversions = baseRSSConversion,
	params = [],
	info = "",
	label,
	endpoints,
	defaultEndpoint,
	endpointObjects = {},
}: CreateSelectEndpoint & BasicEndpoint) => ({
	...createBasicEndpoint({ id, queryId, conversions, params, info }),
	type: "select",
	label,

	endpoints,
	endpointObjects,
	defaultEndpoint,
});
