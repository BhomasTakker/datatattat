// @ts-nocheck / FIX ME
// https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json
// https://www.youtube.com/watch?v=2LhoCfjm8R4

// Sample Points for countries
// https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv

import { log } from "@/src/lib/logger";
import { UnknownObject } from "../types";
import { SVGChartWrapper } from "../charts/ui/svg-chart";

///////////////////////
import { feature } from "topojson-client";
import { Geo } from "../charts/marks/geo";
import { ChartWrapper } from "../charts/ui/chart";
import { useData } from "./hooks/useData";
import { createSquareRootScale } from "../scale/square-root-scale";

const XLSX_API_PATH = "api/query/xlsx/get";

type Data = {
	result: UnknownObject;
	responses: number;
	fileSize: string;
	variant: string;
	keys: string[];
};

export type D3Map = {
	data: Data;
};

// data can be for api data?
// We would need to convert into features, points, etc
export const D3Map = ({ data }: D3Map) => {
	const width = 1200;
	const height = 600;
	const margin = { top: 0, right: 0, bottom: 0, left: 0 };

	////////////////////////////////////////
	// But darn this would be easy...
	// So you could just - in edit Add Data
	// Data of type xlsx - provide url, conversions, etc
	// Assign to a prop -- i.e. features
	////////////////////////////////////////
	// Then IF component is expecting data from somewhere
	// You can make that field a requirement, etc
	// i.e. features = xlsx, points = csv
	// This feels like it solves our nagging issue
	// BUT requires decent changes
	///////////////////////////////////////////
	// And a source file as xlsx or csv? - this is the point - we just want data
	// If creating client side fetching should wrap the component
	// -- It IS client side fetching though --
	// We could/should - send as initial page data if we can.
	// We need to have a default set of features for the background - map
	// if data load data for points features etc
	const { results: featuresData } = useData({
		url: "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json",
		api: "api/query/file/get",
		dataId: "result",
	});

	// if points then load - frontend and assign
	const { results: pointsData } = useData({
		url: "https://missingmigrants.iom.int/sites/g/files/tmzbdl601/files/2024-01/Missing_Migrants_Global_Figures_allData.xlsx",
		api: XLSX_API_PATH,
		dataId: "results",
	});

	// We will need to convert received into points
	const { results: points } = useData({
		url: "https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv",
		api: XLSX_API_PATH,
		// if expected xlsx then we shouldn't need this
		dataId: "results",
	});

	////////////////////////////////////////////////////
	/////// For Bubble Map///////////
	// I guess we would just be expecting an identifier perhaps a max radius
	// Prop /
	// const sizeValue = (d: UnknownObject) => d["population"] as string;
	const sizeValue = (d: UnknownObject) =>
		d["Total Number of Dead and Missing"] as string;

	// For bubble map
	// Don't be cute just - d3-bubble-map
	// provide expected/required data - done
	const sizeScale = createSquareRootScale({
		data: pointsData || [],
		scale: sizeValue,
		maxRadius: 20,
	});

	/////////////////////////////////////////////////
	// getFeatures from source? specify 'countries'
	// get those from source as features
	/////////////////////////////////////////////////
	// topo to geo conversions
	// we are now bypassing with
	const { countries } = featuresData?.objects || {};
	const temp = countries ? feature(featuresData, countries) : {};
	const { features = [] } = temp || {};
	///////////////////////////////////////////

	// console.log("0006", { pointsData });
	// mebbe temp - for here for sure
	//

	// result type could perhaps give us how to use
	// topojson for instance

	// return <></>;

	log({ code: "0001:D3:WORLD:MAP", context: "DATA" }, { points });
	return (
		// These two outside of here
		<ChartWrapper title="This is a Map of the World">
			<SVGChartWrapper width={width} height={height} margin={margin}>
				{/* We could effectively call this BubbleMap */}
				<Geo
					// We can pass this in as map say
					features={features}
					//
					points={pointsData}
					// pointsSizeScale
					// pointSizeValue
					sizeScale={sizeScale}
					sizeValue={sizeValue}
				/>
			</SVGChartWrapper>
		</ChartWrapper>
	);
};
