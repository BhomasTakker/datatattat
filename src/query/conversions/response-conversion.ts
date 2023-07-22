import { getConversion, mergeConversions } from "./conversions-map";
import { createIterable } from "./create-iterable";
import { createResponse } from "./create-response";
import { MAIN_CONVERSIONS } from "./main-conversions";

// PLAN //
////////////////////////
// Repeat for each conversion list/object
// Build and return the result
////////////////////////////////////////////

const createConversionsMap = (conversionId: string) => {
	const mainConversions = MAIN_CONVERSIONS;
	const queryConversions = getConversion(conversionId) as Map<string, object>;
	return mergeConversions(mainConversions, queryConversions);
};

export const convertResponse = (response: any, conversions: any) => {
	// use array of subs instead of iterable
	// sub / iterable needs to be an object
	// conversion list on that object
	// with an object key
	const {
		response: responseConversion = [],
		iterable = [],
		conversionId,
	} = conversions;

	if (!conversionId) {
		// not a fan
		// better way to protect/deal with this
		return response;
	}

	const conversionsMap = createConversionsMap(conversionId);

	const iterableData = createIterable(response, iterable, conversionsMap);
	const convertedResponse = createResponse(
		iterableData,
		responseConversion,
		conversionsMap
	);

	return convertedResponse;
};
