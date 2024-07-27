import {
	BASE_URL,
	ROOT,
	fallback,
	CodeSandBoxEmbedType,
} from "./CodeSandBox.config";

export const CODE_SANDBOX_ROOT_OEMBED_CREATOR = (queryParams: any) => {
	const { quearyData } = queryParams;
	const { embedType, route } = quearyData;
	let url;

	switch (embedType) {
		case CodeSandBoxEmbedType.route:
			url = new URL(`${ROOT}${route}`);
			break;
		default:
			url = new URL(`${ROOT}${fallback}`);
	}

	const returnParams = {
		url: url.toString(),
		dnt: true,
	};

	return {
		headers: {},
		baseUrl: BASE_URL,
		queryParams: returnParams,
	};
};

export const CODE_SANDBOX_OEMBED_MAP = new Map([
	["codeSandBoxRoot", CODE_SANDBOX_ROOT_OEMBED_CREATOR],
]);
