import { OperatorFunction } from "rxjs";

export type NextCallback = (data: any) => void;
export type CompleteCallback = (data: any) => void;
export type ErrorCallback = (err: Error) => void;

export interface ConversionObserver {
	next: NextCallback;
	complete: CompleteCallback;
	error: ErrorCallback;
}

export type ConversionMap = {
	type: string;
	id: string;
	props?: any;
};

export type PipeFunction = OperatorFunction<any, unknown>;
