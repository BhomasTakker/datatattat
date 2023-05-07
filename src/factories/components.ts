import { Test } from "@/components/content/tempComponent";
import { TempComponentEdit } from "../components/content/TempComponent.edit";
import { ArticleStub } from "../components/data/articles/ArticleStub";
import { ArticleStubEdit } from "../components/data/articles/ArticleStubEdit";
import { SimpleList } from "../components/data/list/SimpleList";
import { SimpleListEdit } from "../components/data/list/SimpleListEdit";
import { BasicArticle } from "../components/data/articles/BasicArticle";
import { BasicArticleEdit } from "../components/data/articles/BasicArticleEdit";

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
	["BasicArticle"]: BasicArticle,
};

export const EDIT_COMPONENTS: any = {
	["Test"]: TempComponentEdit, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')
	["SimpleList"]: SimpleListEdit,
	["ArticleStub"]: ArticleStubEdit,
	["BasicArticle"]: BasicArticleEdit,
};
