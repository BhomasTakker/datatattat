// https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json
// https://www.youtube.com/watch?v=2LhoCfjm8R4
import { log } from "@/src/lib/logger";
import { extent, scaleLinear, scaleTime, timeFormat } from "d3";
import { UnknownObject } from "../types";
import { SVGChartWrapper } from "../charts/ui/svg-chart";
import { Line } from "../charts/marks/line";

///////////////////////
import { feature } from "topojson-client";
import { Geo } from "../charts/marks/geo";

type Data = {
	result: UnknownObject;
	responses: number;
	fileSize: string;
	variant: string;
	keys: string[];
};

export type D3Map = {
	data: Data;
	xAxisValue: string;
	yAxisValue: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
};

export const D3Map = ({
	data,
	xAxisValue,
	yAxisValue,
	xAxisLabel = "",
	yAxisLabel = "",
}: D3Map) => {
	const width = 900;
	const height = 600;
	const margin = { top: 0, right: 0, bottom: 0, left: 0 };
	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	const { result } = data;

	const { countries, land } = result.objects;

	// Can do nifty things with this topojson library
	// Convert topojson to geo
	// this should be conversion on server
	// but how would we specify convert this object to features?
	// seems straightforward but should we is the question?
	const countriesFeatures = feature(result, countries);
	const landFeatures = feature(result, land);

	const { features } = countriesFeatures;
	log(
		{ code: "0001:D3:WORLD:MAP", context: "DATA" },
		{ data, geo: feature(result, countries) }
	);

	// mebbe temp - for here for sure
	//

	// result type could perhaps give us how to use
	// topojson for instance

	// return <></>;

	log({ code: "0001:D3:WORLD:MAP", context: "DATA" }, { data });
	return (
		<SVGChartWrapper
			title="This is a Map of the World"
			width={width}
			height={height}
			margin={margin}
		>
			<Geo features={features} />
		</SVGChartWrapper>
	);
};
