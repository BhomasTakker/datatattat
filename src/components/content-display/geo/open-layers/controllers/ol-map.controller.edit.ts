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
			// input array from somewhere
			options: ["point", "choropleth", "heatmap", "line"],
			label: "Map Variant",
			info: "MapTypeVariant",
		},
		// Each variant will need a different config
		// We will need to create a map array for mapping colors etc
		// need select baselayer
		// Add overlay layers
		// set view
		// projection
		// legend
	],
} as const;
