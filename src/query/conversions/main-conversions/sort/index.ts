// @ts-nocheck / FIX ME
import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import { map } from "rxjs";

// LOOK AT d3 sorting
// https://d3js.org/d3-array/sort

// Can also create summaries of data
// i.e create counts, and a bunch of shit
// https://d3js.org/d3-array/summarize

// jesus what?, pass key etc
export const alphanumeric = ({}: any) => {
	return map((arr) => arr.sort((a, b) => a["2020_1"] - b["2020_1"]));
};

// I think this can almost certainly be done better with rxjs reduce?
export const numericAscending = ({ key }: any) => {
	return map((arr: UnknownObject[]) => arr.sort((a, b) => a[key] - b[key]));
};
export const numericDescending = ({ key }: any) => {
	return map((arr: UnknownObject[]) => arr.sort((a, b) => b[key] - a[key]));
};
