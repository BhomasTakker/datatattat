import type { Meta, StoryObj } from "@storybook/react";
import { OpenLayersMap } from "./open-layers";
import {
	CreateProjectionType,
	createProjections,
	getCurrentProjection,
} from "./projections/open-layers.projections";
import { Layer } from "./layers/open-layers.layers";
import { mockOLInteractions } from "./mock/interactions.mock";
import { getMockControls } from "./mock/controls.mock";
import { MapBrowserEvent } from "ol";
import { CreateEvent } from "./hooks/useMapEvent";
// import geo from "./open-layers.mock.geojson";
import { baseLayers } from "./layers/open-layers.layers.mock";
import { CreateViewOptions } from "./view/open-layers.view";
import { transform } from "ol/proj";

const meta: Meta<typeof OpenLayersMap> = {
	component: OpenLayersMap,
};
export default meta;
type Story = StoryObj<typeof OpenLayersMap>;

const projectionDefinition: CreateProjectionType = {
	projection: "EPSG:29901",
	def: "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1 +x_0=200000 +y_0=250000 +ellps=airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +units=m +no_defs +type=crs",
};

// Don't manage projections in the map component
// Projections need initialising before that point
createProjections([projectionDefinition]);

const projections = [projectionDefinition];
const projection = "EPSG:29901";

const overlayLayers: Layer[] = [];

const interactions = mockOLInteractions;
const controls = getMockControls(); // should be the standard

const mockClickEvent = {
	id: "click",
	callback: (e: MapBrowserEvent<UIEvent>) => {},
};
const mockDblClickEvent = {
	id: "dblclick",
	callback: (e: MapBrowserEvent<UIEvent>) => {},
};
const events: CreateEvent[] = [
	mockClickEvent as CreateEvent,
	mockDblClickEvent as CreateEvent,
];

const viewOptions: CreateViewOptions = {
	center: [0, 0],
	projection: getCurrentProjection(),
};

const width = "95vw";
const height = "95vh";

export const Wrapper: Story = {
	args: {
		projection,
		projections,
		baseLayers,
		overlayLayers,
		controls,
		interactions,
		events,
		viewOptions,
		width,
		height,
	},
};
