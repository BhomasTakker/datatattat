import { DTAStack } from "@/components/containers/stack/DTAStack";
import { DTAStackEdit } from "../components/containers/stack/DTAStackEdit";
import { DTAGrid } from "../components/containers/grids/DTAGrid";
import { DTAGridEdit } from "../components/containers/grids/DTAGridEdit";
import { DTAPageGrid } from "../components/containers/pageGrid/DTAPageGrid";
import { DTAPageGridEdit } from "../components/containers/pageGrid/DTAPageGridEdit";

// export enum CONTAINER_TYPES {
// 	STACK = "STACK",
// }

//We should call these dislay containers
export const CONTAINERS: any = {
	["DTAStack"]: DTAStack, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')
	["DTAPageGrid"]: DTAPageGrid,
	//NOT HERE / it would be here
	//DTA Grid - would be the entire pages content
	// ["DTAGrid"]: DTAGrid,
};

export const EDIT_CONTAINERS: any = {
	["DTAStack"]: DTAStackEdit, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')
	["DTAPageGrid"]: DTAPageGridEdit,
};
