const Grid = ({ data }: { data: any }) => {
	return <>Grid</>;
};
const Stack = ({ data }: { data: any }) => {
	return <>Stack</>;
};
const Display = ({ data }: { data: any }) => {
	return <>Display</>;
};

export const PAGE_CONTAINERS_MAP = new Map([
	["grid", Grid],
	["stack", Stack],
	["display", Display],
]);
