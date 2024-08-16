import { EditInputs } from "@/src/components/edit/inputs/input.map";

const displayLayoutOptions: any[] = [];

enum GridLayout {
	DISPLAY = "display",
}

const layoutMap = new Map<string, any>([
	[GridLayout.DISPLAY, displayLayoutOptions],
]);

export const GRID = {
	id: "grid",
	info: "grid",
	title: "Grid",
	// if used then type it etc / I would be certain this isn't used
	// omg lol
	components: "CONTENT:COMPONENTS",
	props: [
		{
			type: EditInputs.objectSelect,
			id: "layout",
			label: "Grid Layout",
			info: "Choose the grid layout",
			options: [GridLayout.DISPLAY],
			optionsMap: layoutMap,
		},
	],
} as const;
