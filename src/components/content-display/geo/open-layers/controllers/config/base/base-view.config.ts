import { Layer, Layers } from "../../../layers/open-layers.layers";
import { CreateViewOptions } from "../../../view/open-layers.view";

export type CreateBaseViewOptions = {} & CreateViewOptions;

// Do something like this then can use as a base for all
//
export const createBaseViewConfig = (
	options?: CreateBaseViewOptions
): CreateViewOptions => {
	const {
		center = [0, 0],
		zoom = 5,
		maxZoom = 20,
		minZoom = 1,
		// do we need a default - won't it default to chosen - if not should it
		projection = "EPSG:3857",
	} = options || {};

	return {
		center,
		zoom,
		maxZoom,
		minZoom,
		// do we need a default - won't it default to chosen - if not should it
		projection,
	};
};
