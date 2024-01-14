export const OLMAP = {
	id: "OLMap",
	info: "",
	title: "Open Layers Map",
	props: [
		{
			type: "title",
			title: "Map Properties",
		},
		{
			id: "variant",
			type: "select",
			// input array from somewhere / this whole thing should be taken from a db / but how performant would that be?
			options: ["point", "choropleth", "heatmap", "line"],
			label: "Map Variant",
			info: "MapTypeVariant",
		},
		// Would prefer to put view stuff in an object
		{
			label: "Latitude",
			info: "MapViewLatitude",
			id: "latitude",
			type: "number",
			min: -90,
			max: 90,
		},
		{
			label: "Longitude",
			info: "MapViewLongitude",
			id: "longitude",
			type: "number",
			min: -90,
			max: 90,
		},
		// {
		// 	// [minx, miny, maxx, maxy]
		// 	id: 'extent'
		// },
		{
			label: "Zoom",
			info: "MapViewZoom",
			id: "zoom",
			type: "number",
			max: 20,
			min: 1,
		},
		{
			label: "Max Zoom",
			info: "MapViewMaxZoom",
			id: "maxZoom",
			type: "number",
			max: 20,
			min: 1,
		},
		{
			label: "Min Zoom",
			info: "MapViewMinZoom",
			id: "minZoom",
			type: "number",
			max: 20,
			min: 1,
		},
		// {
		// 	id: 'projection'
		// },
		// Each variant will need a different config
		// We will need to create a map array for mapping colors etc
		// need select baselayer
		// Add overlay layers
		// set view
		// projection
		// legend
	],
} as const;
