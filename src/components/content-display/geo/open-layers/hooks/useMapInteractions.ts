import { Map as OLMap } from "ol";
import { useEffect } from "react";
import {
	SetDragAndDropInteractionOptions,
	setDragAndDropInteraction,
} from "../interactions/drag-and-drop";
import {
	SetDragBoxInteractionOptions,
	setDragBoxInteraction,
} from "../interactions/drag-box.interaction";
import {
	SetModifyInteractionOptions,
	setModifyInteraction,
} from "../interactions/modify";
import {
	SetSelectInteractionOptions,
	setSelectInteraction,
} from "../interactions/select";

type Interactions = "Select" | "DragBox" | "Modify" | "DragAndDrop";

type CreateInteractionsOptions =
	| SetSelectInteractionOptions
	| SetDragBoxInteractionOptions
	| SetModifyInteractionOptions
	| SetDragAndDropInteractionOptions;

export type CreateInteraction = {
	id: Interactions;
	options?: CreateInteractionsOptions;
};

const interactionsMap = new Map<Interactions, any>([
	["Select", setSelectInteraction],
	["DragBox", setDragBoxInteraction],
	["Modify", setModifyInteraction],
	["DragAndDrop", setDragAndDropInteraction],
]);

interface UseMapInteractions {
	map: OLMap | null;
	interactions?: CreateInteraction[];
}
export const useMapInteractions = ({
	map,
	interactions = [],
}: UseMapInteractions) => {
	useEffect(() => {
		if (!map) {
			return;
		}
		interactions.forEach((interaction) => {
			const { id, options } = interaction;
			const initInteraction = interactionsMap.get(id);
			if (!initInteraction) {
				return;
			}
			map.addInteraction(initInteraction(options));
		});
	}, [interactions, map]);
};
