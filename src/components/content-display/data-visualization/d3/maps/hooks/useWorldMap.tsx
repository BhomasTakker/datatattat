// Basic, quick, and easy / needs to be user led map / features / vase map

import { feature } from "topojson-client";
import { useData } from "./useData";

export const useWorldMap = () => {
	const {
		results: featuresData,
		loading,
		error,
	} = useData({
		url: "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json",
		api: "api/query/file/get",
		dataId: "result",
	});

	const { countries } = featuresData?.objects || {};
	const temp = countries ? feature(featuresData, countries) : {};
	const { features = [] } = temp || {};

	return {
		loading,
		error,
		features,
	};
};
