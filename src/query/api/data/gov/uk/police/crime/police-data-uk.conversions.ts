import { map } from "rxjs";
import { StreetCrimeItem, StreetCrimeResponse } from "./police-data-uk.types";
import { destructureChildObjects } from "@/src/utils/object";

// what are props in this instance
const toGISFeatureCollection = (props: any) => {
	return map((data: StreetCrimeResponse) => {
		// // console.log("toGISFeatureCollection ", { props });

		const newData = data.map((item) => {
			// We possibly/probably want to filter redundant data

			// In fairness this is simple to understand
			// As a default specify what needs to go in?
			const { location, category, outcome_status, month, ...rest } = item;

			const { longitude, latitude, street } = location;
			const { id: streetId, name: streetName } = street;

			const { category: conclusion, date: concludedOn } = outcome_status || {};

			// // console.log("WAH WAH WAH WAH", { item });
			// loop in loop in loop - every key in every object
			// Rxjs at the very very least
			// // console.log("WAH WAH WAH WAH", { rest: destructureChildObjects(rest) });

			return {
				crime: category,
				street: streetName,
				month,
				conclusion,
				concludedOn,
				// Shouldn't rid data though - perhaps default filter(in cnversions)
				// ...destructureChildObjects(rest),
				coordinates: [latitude || 0, longitude || 0],
			};
		});
		return {
			responses: data?.length || 0,
			variant: "gis-features",
			// We just have the one table if groups we would need to show multiple tables
			// Probably call it something other than data
			features: newData,
		};
	});
};

/////////////////////////////////
// This isn't used / called
// Data returned IS the array/iterable
//////////////////////////////////////
// perhaps flatten?
// Probably shouldn't do this with data? I dunno
// Kinda just a default though?
// We can have various
const toGISFeatureCollectionItem = (props: any) => {
	// console.log("toGISFeatureCollectionItem ", { props });
	return map((data: StreetCrimeItem) => {
		const { location } = data;
		// console.log("toGISFeatureCollectionItem we do not get here ", { location });
		return {
			...data,
			coordinates: [location.latitude, location.longitude],
		};
	});
};

export const TRANSFORM = new Map<string, object>([
	// spelling toArticle(s)List should change
	["toGISFeatureCollection", toGISFeatureCollection],
	["toGISFeatureCollectionItem", toGISFeatureCollectionItem],
]);

export const SORT = new Map<string, object>([]);

export const FILTER = new Map<string, object>([]);

export const POLICE_DATA_UK_CONVERSIONS = new Map<string, Map<string, object>>([
	["TRANSFORM", TRANSFORM],
	["FILTER", FILTER],
	["SORT", SORT],
]);
