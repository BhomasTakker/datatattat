import { PageDisplayStack } from "@/src/components/content-display/page-containers/stack/Stack";

const Grid = ({ data }: { data: any }) => {
	return <>Grid</>;
};

const Display = ({ data }: { data: any }) => {
	return <>Display</>;
};

export const PAGE_CONTAINERS_MAP = new Map([
	["Grid", Grid],
	["Stack", PageDisplayStack],
	["Display", Display],
]);
