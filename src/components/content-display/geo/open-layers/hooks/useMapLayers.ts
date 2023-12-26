import { Map as OLMap } from "ol";

import { useEffect, useState } from "react";
import {
	Layer,
	LayerModules,
	initialiseLayers,
} from "../layers/open-layers.layers";

interface UseMapLayers {
	map: OLMap | null;

	baseLayers: Layer[];
	overlayLayers?: Layer[];
}

export const useMapLayers = ({
	map,
	baseLayers,
	overlayLayers = [],
}: UseMapLayers) => {
	const [baseMapLayers, setBaseMapLayers] = useState<LayerModules[]>([]);
	const [overlayMapLayers, setOverlayMapLayers] = useState<LayerModules[]>([]);

	useEffect(() => {
		if (!map) {
			return;
		}

		setBaseMapLayers(initialiseLayers({ map, layers: baseLayers }));
		setOverlayMapLayers(initialiseLayers({ map, layers: overlayLayers }));
	}, [baseLayers, map, overlayLayers]);

	useEffect(() => {
		if (!map) {
			return;
		}

		map.setLayers([...baseMapLayers, ...overlayMapLayers]);
	}, [baseMapLayers, map, overlayMapLayers]);

	return { baseLayers: baseMapLayers, overlayLayers: overlayMapLayers };
};
