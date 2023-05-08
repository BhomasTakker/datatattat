import { Test } from "@/components/content/tempComponent";
import { TempComponentEdit } from "../components/content/TempComponent.edit";
import { ArticleStub } from "../components/data/articles/ArticleStub";
import { ArticleStubEdit } from "../components/data/articles/ArticleStubEdit";
import { SimpleList } from "../components/data/list/SimpleList";
import { SimpleListEdit } from "../components/data/list/SimpleListEdit";
import { BasicArticle } from "../components/data/articles/BasicArticle";
import { BasicArticleEdit } from "../components/data/articles/BasicArticleEdit";
import { DTAGrid } from "../components/containers/grids/DTAGrid";
import { DTAGridEdit } from "../components/containers/grids/DTAGridEdit";

// export enum COMPONENT_TYPES {
// 	STACK = "STACK",
// }

//Perhaps needs to be a much better way
//this could theoretically be millions if you can get user components
//data led somehow

//These are Content Components - ArticleStub / BasicArticle
//We need a seperate 'Content Containers' for SimpleList and Grid - i.e.
export const COMPONENTS: any = {
	["Test"]: Test, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')
	["SimpleList"]: SimpleList,
	["ArticleStub"]: ArticleStub,
	["DTAGrid"]: DTAGrid,
	["BasicArticle"]: BasicArticle,
};

export const EDIT_COMPONENTS: any = {
	["Test"]: TempComponentEdit, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')
	["SimpleList"]: SimpleListEdit,
	["ArticleStub"]: ArticleStubEdit,
	["DTAGrid"]: DTAGridEdit,
	["BasicArticle"]: BasicArticleEdit,
};
