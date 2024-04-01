import { Observer, OperatorFunction, from, of, toArray } from "rxjs";
import { ConversionObserver, PipeFunction } from "../types";

type Response = any;
// TBF probably sounds stupid
// but would be perfect to make an Observable class
// set observer / call subscribe, etc
export const subscribeToObservableFromObject = (
	response: Response,
	observer: Observer<unknown>,
	pipeFunctions: OperatorFunction<any, unknown>[],
	// think not applicable
	sortFunctions: OperatorFunction<any, unknown>[],
	groupFunctions: OperatorFunction<any, unknown>[],
	binFunctions: OperatorFunction<any, unknown>[],
	summarizeFunctions: OperatorFunction<any, unknown>[]
) => {
	const observable$ = of(response);
	// I think we add summarize here
	observable$.pipe(...(pipeFunctions as [])).subscribe(observer);
};
export const subscribeToObservableFromArray = (
	response: Response,
	observer: Observer<unknown>,
	pipeFunctions: OperatorFunction<any, unknown>[],
	sortFunctions: OperatorFunction<any, unknown>[],
	groupFunctions: OperatorFunction<any, unknown>[],
	binFunctions: OperatorFunction<any, unknown>[],
	summarizeFunctions: OperatorFunction<any, unknown>[]
) => {
	const observable$ = from(response);
	// Not for sort
	// We should return an array from sort no?
	// sort functions should be called after filters
	// filter, transform, sort
	observable$
		.pipe(
			...(pipeFunctions as []),
			toArray(),
			// We're cheating
			// create an array and then perform transforms to that
			// i.e. D3 / for sort this seems wrong?
			// (we were using standard arrays for sort...)
			// Unless we are using D3 for sort
			...(sortFunctions as []),
			...(groupFunctions as []),
			...(binFunctions as [])
		)
		.subscribe(observer);
};
