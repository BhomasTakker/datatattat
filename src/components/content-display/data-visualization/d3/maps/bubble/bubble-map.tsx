import { feature } from "topojson-client";
import { createSquareRootScale } from "../../scale/square-root-scale";
import { UnknownObject } from "../../types";
import { useData } from "../hooks/useData";
import { ChartWrapper } from "../../charts/ui/chart";
import { SVGChartWrapper } from "../../charts/ui/svg-chart";
import {
	GeoPermissibleObjects,
	ScalePower,
	geoEqualEarth,
	geoGraticule,
	geoPath,
} from "d3";
import styles from "./bubble-map.module.scss";
import { MapBackground } from "../base/background";
import { Features } from "../features/features";
import { Points } from "../points/points";

const XLSX_API_PATH = "api/query/xlsx/get";
const projection = geoEqualEarth();

// We can type this as a Base Points data & unknown object
type Data = {
	results: UnknownObject[];
};

type D3BubbleMap = {
	data: Data;
	sizeKey: string;
	// Should be temp / should be done by transform surely
	// We should just expect lng and lat
	coordinatesKey: string;
	maxRadius: number;
};

export const D3BubbleMap = ({
	data,
	sizeKey,
	coordinatesKey,
	maxRadius,
}: D3BubbleMap) => {
	const { results } = data;
	// needs to be wrapper?
	const width = 1200;
	const height = 600;
	const margin = { top: 0, right: 0, bottom: 0, left: 0 };

	// load / cache? /
	// These should be temp
	// Load via 'new' data load
	const { results: featuresData } = useData({
		url: "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json",
		api: "api/query/file/get",
		dataId: "result",
	});

	const { countries } = featuresData?.objects || {};
	const temp = countries ? feature(featuresData, countries) : {};
	const { features = [] } = temp || {};

	// console.log("BUBBLEMAP", { results });

	// pass in val
	const sizeValue = (d: UnknownObject) => d[sizeKey] as number;

	// For circles no?
	const sizeScale = createSquareRootScale({
		data: results || [],
		scale: sizeValue,
		// pass in maxRadius
		maxRadius,
	});

	//////////////////////////////////////////////////////////////////////////
	// potentially do from an array or whatever but we need to do something
	// 100% Just expect lat, lng from transform
	// User must transform data
	// It is the only way this works
	// Step 1 - use data of correct form
	// Step 2 - give user options to format data
	//////////////////////////////////////////////////////////////////////////
	const getCoords = (d: UnknownObject) => {
		// get from lat lng string
		const coords = (d[coordinatesKey] as string).split(", ");

		return {
			lat: +coords[1],
			lng: +coords[0],
		};
	};

	return (
		// These two outside of here
		// <div className={styles.root}>
		<ChartWrapper title="This is a BubbleMap">
			<SVGChartWrapper width={width} height={height} margin={margin}>
				<g>
					<MapBackground
						projection={projection}
						type={"Sphere"}
						includeGraticule
					/>
					{/* Add Countries or whatever */}
					<Features features={features} />
					<Points
						points={results}
						sizeScale={sizeScale}
						sizeValue={sizeValue}
						getCoords={getCoords}
						projection={projection}
					/>
				</g>
			</SVGChartWrapper>
		</ChartWrapper>
		// </div>
	);
};
