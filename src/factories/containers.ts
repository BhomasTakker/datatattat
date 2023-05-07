import { DTAStack } from "@/components/containers/stack/DTAStack";
import { DTAStackEdit } from "../components/containers/stack/DTAStackEdit";
import { DTAGrid } from "../components/containers/grids/DTAGrid";
import { DTAGridEdit } from "../components/containers/grids/DTAGridEdit";

// export enum CONTAINER_TYPES {
// 	STACK = "STACK",
// }

export const CONTAINERS: any = {
	["DTAStack"]: DTAStack, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')
	["DTAGrid"]: DTAGrid,
};

export const EDIT_CONTAINERS: any = {
	["DTAStack"]: DTAStackEdit, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')
	["DTAGrid"]: DTAGridEdit,
};
