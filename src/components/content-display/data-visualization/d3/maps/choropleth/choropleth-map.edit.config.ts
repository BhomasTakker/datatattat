export const D3_CHOROPLETH_MAP_CHART = {
	id: "ChoroplethMap",
	info: "Nothing here",
	title: "D3 Choropleth Map Component",
	props: [
		{
			id: "D3ChoroplethMapTitle",
			type: "title",
			title: "D3 Choropleth Map Props",
		},
		{
			id: "colorKey",
			type: "text",
			label: "Color Key",
			info: "Identifier of the value to use to calculate color",
		},
		{
			id: "featureJoinKey",
			type: "text",
			label: "Feature Join Key",
			info: "Identifier of the value that links the data with the feature(country, region, etc)",
		},
		{
			id: "dataJoinKey",
			type: "text",
			label: "Data Join Key",
			info: "Identifier of the value that links the data with the feature(country, region, etc)",
		},
	],
};
