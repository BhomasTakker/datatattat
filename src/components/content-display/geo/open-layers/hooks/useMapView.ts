import { Map as OLMap, View } from "ol";
import { createOpenLayersView } from "../view/open-layers.view";
import { useEffect, useState } from "react";
import { CreateViewOptions } from "../view/types";

interface UseMapView {
	map: OLMap | null;
	options?: CreateViewOptions;
}

export const useMapView = ({ map, options }: UseMapView) => {
	const [view, setView] = useState<View | null>(null);

	useEffect(() => {
		if (!map || view) {
			return;
		}
		setView(
			createOpenLayersView({
				...options,
			})
		);
	}, [map, options, view]);

	useEffect(() => {
		if (!view || !map) {
			return;
		}

		map.setView(view);
	}, [map, view]);
	return { view };
};
