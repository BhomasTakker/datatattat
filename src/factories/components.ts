// ALL MISSING CAN BE REMOVED //
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
import { IframelyOembedEdit } from "../components/data/oembed/IframelyOembedEdit";
import { Iframely } from "../components/data/oembed/IFramelyOembed";

//Perhaps needs to be a much better way / I mean DB right
//this could theoretically be millions if you can get user components
//data led somehow

//These are Content Components - ArticleStub / BasicArticle
//We need a seperate 'Content Containers' for SimpleList and Grid - i.e.

// Change to a map
export const COMPONENTS: any = {
	["SimpleList"]: SimpleList,
	["Embedded Object"]: Iframely,

	//rem from here

	["Test"]: Test, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')

	["ArticleStub"]: ArticleStub,
	["DTAGrid"]: DTAGrid,
	["BasicArticle"]: BasicArticle,
};
