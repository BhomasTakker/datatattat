// @ts-nocheck / FIX ME
import { UnknownObject } from "../../types";
import { ChartWrapper } from "../../charts/ui/chart";
import { SVGChartWrapper } from "../../charts/ui/svg-chart";
import { MapBackground } from "../base/background";
import { createSequentialScale } from "../../scale/sequential-scale";
import { ChoroplethFeatures } from "./choropleth-features";
import { geoEqualEarth } from "d3";
import { useWorldMap } from "../hooks/useWorldMap";

type D3ChoroplethMap = {
	data: UnknownObject;
	colorKey: string;
	featureJoinKey: string;
	dataJoinKey: string;
};

// We need to set a projection
const projection = geoEqualEarth();

const XLSX_API_PATH = "api/query/xlsx/get";

export const D3ChoroplethMap = ({
	data,
	colorKey,
	featureJoinKey,
	dataJoinKey,
}: D3ChoroplethMap) => {
	const width = 1200;
	const height = 600;
	const margin = { top: 0, right: 0, bottom: 0, left: 0 };

	const { results } = data;

	/////////////////////////////////////////////////////////////////////////
	// This is default background - might need a map of several available
	// If we allow / require loading then it can be anything.
	// Should have default or
	// get file - topo to geo transform
	/////////////////////////////////////////////////////////////////////////
	// use set features or load right?
	// If we provide a bunch - but then we should be hosting and having load?
	// But you are just loading a geojson or topojson of an area
	// We could just say provide the geojson or topojson file url
	/////////////////////////////////////////////////////////////////////////
	// GeoPath expects a geojson set of features
	// You then color those features
	// Or plot points/etc on them
	// We just need the geojson / projection may no even matter
	// Just zoom in
	/////////////////////////////////////////////////////////////////////////
	// const { results: featuresData } = useData({
	// 	url: "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json",
	// 	api: "api/query/file/get",
	// 	dataId: "result",
	// });

	// topo to geo conversion
	// and take/return countries as ___
	// const { countries } = featuresData?.objects || {};
	// const temp = countries ? feature(featuresData, countries) : {};
	// const { features = [] } = temp || {};

	// In this instance we would absolutely need to be dynamic here
	// We are colouring in features - this way we are forcing the user
	// to use countries only
	const { features } = useWorldMap();
	// get colorValue dId from props
	const colorValue = (d: UnknownObject) => d[colorKey] as number;
	// need pass in interpolate value
	const colorScale = createSequentialScale({
		data: results || [],
		scale: colorValue,
	});

	// //////////////////////////////////////////////////////////////////
	// We need to set rules - we can't just expect tpo use any data shape
	// You have to conform to us - until which time that we can provide
	// tools you can use to transform the data
	// So in this case - we expect you to shape one to the other

	///////////////////////////////////
	// What would this be?
	// The join between 2 data sets?
	// Seems like a step a little too far
	// You could call it a simple 'relation' between two data sets
	// Where this area intersects with that data
	// possibly entails / transforming one set of data to provide relational value
	/////////////////////////////////////
	// What if the data is part of features though?
	const rowByFeature = new Map();
	results.forEach((d) => {
		// pass identifier
		rowByFeature.set(d[dataJoinKey], d);
	});

	const joinFunction = (properties: UnknownObject) =>
		properties[featureJoinKey] as string;

	// console.log({ rowByFeature });

	return (
		<ChartWrapper title="This is a Choropleth Map">
			<SVGChartWrapper width={width} height={height} margin={margin}>
				<g>
					<MapBackground
						projection={projection}
						type="Sphere"
						includeBackground
					/>
					<ChoroplethFeatures
						features={features}
						colorScale={colorScale}
						colorValue={colorValue}
						rowByFeature={rowByFeature}
						getFeatureIdentifier={joinFunction}
					/>
				</g>
			</SVGChartWrapper>
		</ChartWrapper>
	);
};
