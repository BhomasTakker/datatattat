// https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#un
import { Map, MapBrowserEvent, MapEvent } from "ol";
import { ObjectEvent } from "ol/Object";
import { EventTypes } from "ol/Observable";
import BaseEvent from "ol/events/Event";
import RenderEvent from "ol/render/Event";
import { useEffect } from "react";

type Event =
	| BaseEvent
	| ObjectEvent
	| MapBrowserEvent<UIEvent>
	| MapEvent
	| RenderEvent;

export interface CreateEvent {
	id: EventTypes; // a list of availables
	callback: (event: Event) => void;
}

interface UseMapEventOptions {
	map: Map | null;
	events: CreateEvent[];
}

export const useMapEvent = ({ map, events }: UseMapEventOptions) => {
	useEffect(() => {
		if (!map) {
			return;
		}
		events.forEach((event) => {
			const { id, callback } = event;
			map.on(id, callback);
		});

		return () => {
			events.forEach((event) => {
				const { id, callback } = event;
				map.un(id, callback);
			});
		};
	}, [events, map]);

	return;
};
