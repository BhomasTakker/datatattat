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
		sub = {},
		conversionId,
	} = conversions;

	if (!conversionId) {
		// not a fan
		// better way to protect/deal with this
		return response;
	}

	const conversionsMap = createConversionsMap(conversionId);

	// for each sub component
	console.log({ SUB: sub });
	// const iterableData = createIterable(response, iterable, conversionsMap);

	// put in a function and type / rename createIterable
	let subResponse = response;
	Object.values(sub).forEach((subObject: any) => {
		console.log("ISSUE:305", "CONVERT:RESPOONSE", { subObject });
		subResponse = createIterable(subResponse, subObject, conversionsMap);
	});
	console.log("ISSUE:305", "CONVERT:RESPOONSE", { subResponse });
	console.log("ISSUE:305", "CONVERT:RESPOONSE", { conversionsMap });
	const convertedResponse = createResponse(
		subResponse,
		responseConversion,
		conversionsMap
	);

	// console.log("FEATURE:753", "CONVERT:RESPONSE", "response", { response });
	// console.log("FEATURE:753", "CONVERT:RESPONSE", "subResponse", {
	// 	subResponse,
	// });
	// console.log("FEATURE:753", "CONVERT:RESPONSE", "convertedResponse", {
	// 	convertedResponse,
	// });

	// console.log("FEATURE:753", "CONVERT:RESPONSE", "conversionId", {
	// 	conversionId,
	// });
	// console.log("FEATURE:753", "CONVERT:RESPONSE", "conversionsMap", {
	// 	conversionsMap,
	// });
	// console.log("FEATURE:753", "CONVERT:RESPONSE", "responseConversion", {
	// 	responseConversion,
	// });

	// console.log("FEATURE:753", "CONVERT:RESPONSE", "responseConversion", {
	// 	conversions: responseConversion.conversions,
	// });
	return convertedResponse;
};
