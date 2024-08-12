import { PageLayoutComponents } from "config/content/page-containers/page-containers.map";

// ['BASE:CONFIG']
export const CONFIG = {
	props: {},
	// We should have a 'type' for this
	// Root type or something
	type: "PAGE:DISPLAY",
	// We would almost certainly want the label & the identifier
	// but then that could just return the object itself ??
	// just the simplest way forward / refactor if and when you need to
	select: [PageLayoutComponents.STACK, PageLayoutComponents.GRID],
	info: "SelectContainer",
	label: "Select Container",
};

// not here
