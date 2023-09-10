// We can potentially create logging etc

import { tap } from "rxjs";
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
	return conversions.reduce(
		(pipeFunctions: PipeFunctions, { type, id, props = {} }) => {
			// pass in props
			// pass in 'BING' and merge with BASE
			console.log(
				"ISSUE:305",
				"CREATE:PIPE:FUNCTIONS",
				{ type },
				{ id },
				{ props }
			);
			const hash = conversionsMap.get(type) as Map<string, object>;
			console.log("ISSUE:305", "CREATE:PIPE:FUNCTIONS", { hash });

			console.log({ type });
			console.log({ hash });

			//Cal the function?
			const conversionFunction = hash?.get(id) as (props: any) => void;

			const pipeFunction = conversionFunction
				? conversionFunction(props)
				: tap(() => {
						console.log("ISSUE:305", "No conversion functio");
				  });

			// call function here? with props
			// to return usable conversion function

			console.log({ conversionFunction });
			console.log({ conversionFunctionid: id });
			console.log("ISSUE:305", "CREATE:PIPE:FUNCTIONS", { props });
			console.log("ISSUE:305", "CREATE:PIPE:FUNCTIONS", { conversionFunction });
			console.log("ISSUE:305", "CREATE:PIPE:FUNCTIONS", {
				result: conversionFunction(props),
			});
			console.log("ISSUE:305", "CREATE:PIPE:FUNCTIONS", { pipeFunction });
			console.log("ISSUE:305", "CREATE:PIPE:FUNCTIONS", { pipeFunctions });
			return pipeFunction ? [...pipeFunctions, pipeFunction] : pipeFunctions;
		},
		[]
	);
};
