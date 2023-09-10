// Change to create Sub objects or wot not

import { Observer } from "rxjs";
import { subscribeToObservableFromObject } from "./observable/observable";
import { createObserver, createPipeFunctions } from "./observer/observer";
import { ConversionMap } from "./types";
import { cloneDeep } from "@/src/utils/object";

// absolutely we could create a very efficient way to do this
// with subObjects array and main response data
// for now simplest way forward

type Data = any;
type DataKey = string; // better way? - one of 'these' keys
type Conversions = ConversionMap[];

type ConversionsObject = {
	conversions: Conversions;
	responseKey?: string;
	iterable: boolean;
};
// then reduce your array object keys etc
export const createResponse = (
	data: Data,
	conversionsObject: ConversionsObject,
	conversionsMap: Map<string, object>
) => {
	const { conversions = [], iterable } = conversionsObject;

	// console.log("FEATURE:753", "CREATE:RESPONSE", { data });
	// console.log("FEATURE:753", "CREATE:RESPONSE", { conversionsObject });
	// console.log("FEATURE:753", "CREATE:RESPONSE", { conversionsMap });
	// console.log("FEATURE:753", "CREATE:RESPONSE", { conversions });
	if (conversions.length === 0) {
		return data;
	}

	// Change 1
	let updatedData;
	console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", { conversionsMap });

	const nextHandler = (value: any) => {
		// Change 2
		updatedData = value;
		// console.log("FEATURE:753", "NEXT:HANDLER", value);
	};
	const completeHandler = () => {
		console.log("Response completed");
	};
	const errorHandler = (err: Error) => {
		console.log("ERROR", err);
	};
	const observer = createObserver(nextHandler, completeHandler, errorHandler);

	let pipeFunctions = createPipeFunctions(conversions, conversionsMap);

	// Change 3
	const seedData = data || {};

	// Change 4
	subscribeToObservableFromObject(
		// ugly temp
		seedData,
		observer as Observer<unknown>,
		pipeFunctions
	);

	// console.log("FEATURE:753", "CREATE:RESPONSE", { updatedData });

	return updatedData;
};
