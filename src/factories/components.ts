import { Test } from "@/components/content/tempComponent";
import { ArticleStub } from "../components/data/articles/ArticleStub";
import { SimpleList } from "../components/data/list/SimpleList";

// export enum COMPONENT_TYPES {
// 	STACK = "STACK",
// }

//Perhaps needs to be a much better way
//this could theoretically be millions if you can get user components
//data led somehow
export const COMPONENTS: any = {
	["Test"]: Test, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')
	["SimpleList"]: SimpleList,
	["ArticleStub"]: ArticleStub,
};
