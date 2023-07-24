// Change to create Sub objects or wot not

import { Observer } from "rxjs";
import {
	subscribeToObservableFromArray,
	subscribeToObservableFromObject,
} from "./observable/observable";
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
	responseKey: string;
	iterable: boolean;
};
// then reduce your array object keys etc
export const createIterable = (
	data: Data,
	//should be an object
	conversionsObject: ConversionsObject,
	conversionsMap: Map<string, object>
) => {
	const { conversions = [], responseKey, iterable } = conversionsObject;
	if (conversions.length === 0) {
		return data;
	}
	const updatedData = cloneDeep(data);

	// you would perhaps vary value assignment?
	const nextHandler = (value: any) => {
		// better way
		updatedData[responseKey] = value;
	};
	const completeHandler = () => {
		console.log("We completed");
	};
	const errorHandler = (err: Error) => {
		console.log("ERROR", err);
	};
	const observer = createObserver(nextHandler, completeHandler, errorHandler);

	let pipeFunctions = createPipeFunctions(conversions, conversionsMap);

	// if dataKey then dataKey or nothing
	// else we are top data
	// do this before calling the function
	// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// WE are only interested in the a to b of it not this logic
	const seedData = data?.[responseKey] ? data[responseKey] : [];

	// prob check not here
	if (iterable) {
		subscribeToObservableFromArray(
			// ugly temp
			seedData,
			observer as Observer<unknown>,
			pipeFunctions
		);
	} else {
		subscribeToObservableFromObject(
			// ugly temp
			seedData,
			observer as Observer<unknown>,
			pipeFunctions
		);
	}

	return updatedData;
};
