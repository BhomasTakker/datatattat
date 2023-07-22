// We can potentially create logging etc

import {
	CompleteCallback,
	ConversionObserver,
	NextCallback,
	ErrorCallback,
	ConversionMap,
	PipeFunction,
} from "../types";

export const createObserver = (
	nextCallback: NextCallback,
	completeCallback: CompleteCallback,
	errorCallback: ErrorCallback
): ConversionObserver => {
	return {
		next: nextCallback,
		error: errorCallback,
		// onComplete return
		complete: completeCallback,
	};
};

// type PipeFunction[] doesn't work?
type PipeFunctions = any[];

//PipeFunction[] doesn't work?
export const createPipeFunctions = (
	conversions: ConversionMap[],
	conversionsMap: Map<string, object>
) => {
	return conversions.reduce((pipeFunctions: PipeFunctions, { type, id }) => {
		// pass in 'BING' and merge with BASE
		const hash = conversionsMap.get(type) as Map<string, object>;

		console.log({ type });
		console.log({ hash });

		const conversionFunction = hash?.get(id);

		return conversionFunction
			? [...pipeFunctions, conversionFunction]
			: pipeFunctions;
	}, []);
};
