import { Collection, Map } from "ol";
import View, { ViewOptions } from "ol/View";
import Control from "ol/control/Control";
import Interaction from "ol/interaction/Interaction";
import BaseLayer from "ol/layer/Base";
import LayerGroup from "ol/layer/Group";
import { useEffect, useRef, useState } from "react";

interface UseMapOptions {
	// target: HTMLElement | undefined; // can be string
	layers?: BaseLayer[] | Collection<BaseLayer> | LayerGroup;
	view?: View | Promise<ViewOptions>;
	controls?: Collection<Control> | Control[];
	interactions?: Collection<Interaction> | Interaction[];
}

export const useMap = ({
	// We are assumning that you would never want to change target
	// target,
	layers,
	view,
	controls,
	interactions,
}: UseMapOptions) => {
	const mapElement = useRef();
	const [map, setMap] = useState<Map | null>(null);

	useEffect(() => {
		const initialMap = new Map({
			target: mapElement.current,
			layers,
			view,
			// A blank array removes default controls
			controls,
			// same would be for interactions
			interactions,

			// Understand this better
			keyboardEventTarget: document,
		});
		setMap(initialMap);
		// we do need a way of updating
		// but that is done by updating layers I believe
		return () => initialMap.setTarget(undefined);
	}, [controls, interactions, layers, view]);

	// Return error if error
	return { map, ref: mapElement };
};
