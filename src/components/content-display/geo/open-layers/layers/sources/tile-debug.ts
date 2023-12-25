import TileDebug from "ol/source/TileDebug";

export interface TileDebugOptions {}
// These all extend from the same base
export const createTileDebugSource = (options: TileDebugOptions) => {
	const {} = options || {};

	return new TileDebug({});
};
