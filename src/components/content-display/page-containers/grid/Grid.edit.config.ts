import { EditInputs } from "@/src/components/edit/inputs/input.map";

export const GRID = {
	id: "grid",
	info: "grid",
	title: "Grid",
	// if used then type it etc / I would be certain this isn't used
	// components: "CONTENT:COMPONENTS",
	props: [
		{
			type: EditInputs.objectSelect,
			id: "layout",
			label: "Grid Layout",
			info: "Choose the grid layout",
			options: [],
			optionsMap: [],
		},
	],
} as const;
