export const D3_BUBBLE_MAP_CHART = {
	id: "BubbleMap",
	info: "Nothing here",
	title: "D3 BubbleMap Component",
	props: [
		{
			id: "D3BubbleMapTitle",
			type: "title",
			title: "D3 Bubble Map Props",
		},
		{
			id: "sizeKey",
			type: "text",
			label: "Size Key",
			info: "Key identifier for the data parameter to use for the size scale",
		},
		{
			note: "this should absolutely be done by conversions transform - convert to lat and lng",
			id: "coordinatesKey",
			type: "text",
			label: "Coordinates Key",
			info: "Key identifier for the coordinates of the bubble",
		},
		{
			id: "maxRadius",
			type: "text",
			label: "Max Radius",
			info: "Maximum Radius of the bubble.  The largest piece of data will equal this.",
		},
	],
};
