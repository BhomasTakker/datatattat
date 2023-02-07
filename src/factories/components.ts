import { Test } from "@/components/content/tempComponent";

// export enum COMPONENT_TYPES {
// 	STACK = "STACK",
// }

//Perhaps needs to be a much better way
//this could theoretically be millions if you can get user components
//data led somehow
export const COMPONENTS = {
	["Test"]: Test, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')
};
