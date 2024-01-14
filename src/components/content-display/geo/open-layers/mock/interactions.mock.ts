import DragBox, { DragBoxEvent } from "ol/interaction/DragBox";
import { setSelectInteraction } from "../interactions/select";
import { SelectEvent } from "ol/interaction/Select";
import KML from "ol/format/KML";
import GeoJSON from "ol/format/GeoJSON";
import { DragAndDropEvent } from "ol/interaction/DragAndDrop";
import { altKeyOnly, altShiftKeysOnly } from "ol/events/condition";
import { CreateInteraction } from "../hooks/useMapInteractions";
import { log } from "@/src/lib/logger";

const dragBoxCb = (e: DragBoxEvent) => {
	const dragBoxInteraction = e.target as DragBox;
	const extent = dragBoxInteraction.getGeometry().getExtent();
	// const extent = e.coordinate;

	// const interactions = e.mapBrowserEvent.map.getInteractions();

	e.mapBrowserEvent.map.getView().fit(extent);
	// const extent = dragBoxInteraction.getGeometry().getExtent();
	// map.getView().fit(extent as Extent);
};

const selectInteraction = setSelectInteraction({
	cb: (selectEvent) =>
		log({ code: "XXX", context: "selectInteraction" }, { selectEvent }),
});

const formatConstructors = [KML, GeoJSON];

// mocking / selecting these might be difficult?
// if something uses select say
// we are going to need to create that interaction as part of what uses it
export const mockOLInteractions: CreateInteraction[] = [
	{
		id: "DragBox",
		options: { minArea: 64, cb: dragBoxCb, condition: altShiftKeysOnly },
	},
	{
		id: "Select",
		options: {
			cb: (selectEvent: SelectEvent) =>
				log({ code: "XXX", context: "selectInteraction" }, { selectEvent }),
		},
	},
	// {
	// 	id: "Modify",
	// 	options: { cb: (modifyEvent: ModifyEvent) => // log({ code: "XXX", context: "selectInteraction" }, { modifyEvent }) },
	// },
	{
		id: "DragAndDrop",
		options: {
			formatConstructors,
			cb: (dragAndDropEvent: DragAndDropEvent) =>
				log(
					{
						code: "XXX",
						context: "mockOLInteractions",
						message: "drag and drop",
					},
					{ dragAndDropEvent }
				),
		},
	},
];
