import { Layer } from "../../../layers/open-layers.layers";
import { OpenLayersMapProps } from "../../../open-layers";
import { createBaseLayerConfig } from "./base-layer.config";
import { createBaseViewConfig } from "./base-view.config";

export interface CreateOLBaseMapConfig
	extends Omit<OpenLayersMapProps, "baseLayers" | "width" | "height"> {
	baseLayer?: Layer;
	baseLayers?: Layer[];
	width?: string;
	height?: string;
}

export const createOLBaseMapConfig = (
	options?: CreateOLBaseMapConfig
): OpenLayersMapProps => {
	const {
		baseLayer,
		overlayLayers,
		baseLayers,
		viewOptions,
		interactions,
		controls,
		events,
		width = "98vw",
		height = "95vh",
	} = options || {};
	return {
		// given baseLayer OR baseLayers OR default baseLayer
		baseLayers: baseLayers || [createBaseLayerConfig(baseLayer)],
		// multiple / pass layer data return array

		overlayLayers,
		viewOptions: createBaseViewConfig(viewOptions),

		// if we leave blank we get the defaults
		interactions,
		controls,
		events,
		// projections
		// If we provide none we shoud get the default
		// interactions
		// controls
		// events
		width,
		height,
	};
};
