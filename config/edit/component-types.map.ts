import { PageComponentContainer } from "@/src/components/edit/page/component/page-component.container";
import { PAGE_COMPONENTS } from "./page/components/page-components.map";
import { CONTENT_COMPONENTS } from "./components/components.map";
import { ContentComponentContainer } from "@/src/components/edit/content/content-component.container";

// COMPONENTS MAP no?
export const COMPONENT_TYPES_MAP = new Map<string, any>([
	["PAGE:DISPLAY", PAGE_COMPONENTS],
	["CONTENT:COMPONENTS", CONTENT_COMPONENTS],
]);

export const COMPONENT_CONTAINERS_MAP = new Map([
	["PAGE:DISPLAY", PageComponentContainer],
	["CONTENT:COMPONENTS", ContentComponentContainer],
]);
