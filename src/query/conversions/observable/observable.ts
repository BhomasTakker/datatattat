import { Observer, OperatorFunction, from, of, toArray } from "rxjs";
import { ConversionObserver, PipeFunction } from "../types";

type Response = any;
// TBF probably sounds stupid
// but would be perfect to make an Observable class
// set observer / call subscribe, etc
export const subscribeToObservableFromObject = (
	response: Response,
	observer: Observer<unknown>,
	pipeFunctions: OperatorFunction<any, unknown>[]
) => {
	const observable$ = of(response);
	observable$.pipe(...(pipeFunctions as [])).subscribe(observer);
};
export const subscribeToObservableFromArray = (
	response: Response,
	observer: Observer<unknown>,
	pipeFunctions: OperatorFunction<any, unknown>[]
) => {
	const observable$ = from(response);
	observable$.pipe(...(pipeFunctions as []), toArray()).subscribe(observer);
};
