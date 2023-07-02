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
import { TwitterProfile } from "../components/data/social-media/twitter/profile";
import { TwitterProfileEdit } from "../components/data/social-media/twitter/TwitterProfileEdit";
import { TwitterList } from "../components/data/social-media/twitter/list";
import { Tweet } from "../components/data/social-media/twitter/tweet";
import { TwitterListEdit } from "../components/data/social-media/twitter/TwitterListEdit";
import { TweetEdit } from "../components/data/social-media/twitter/TwitterTweetEdit";
import { TikTokCreator } from "../components/data/social-media/tiktok/TikTokCreator";
import { TikTokVideo } from "../components/data/social-media/tiktok/TikTokVideo";
import { TikTokCreatorEdit } from "../components/data/social-media/tiktok/TikTokCreatorEdit";
import { TikTokVideoEdit } from "../components/data/social-media/tiktok/TikTokVideoEdit";
import { Oembed } from "../components/oembed/Oembed";
import { OembedEdit } from "../components/oembed/OembedEdit";
import { Iframe } from "../components/iframe-embeds/Iframe";
import { IframeEdit } from "../components/iframe-embeds/IframeEdit";

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

	["Oembed"]: Oembed,
	["Iframe Embed"]: Iframe,

	//Twitter / load and spread twitter object
	// ["TwitterProfile"]: TwitterProfile,
	// ["TwitterList"]: TwitterList,
	// ["Tweet"]: Tweet,

	// //TikTok
	// ["TikTokCreator"]: TikTokCreator,
	// ["TikTokVideo"]: TikTokVideo,
};

// We need to organise these better
// This is Coillections and Components say?

// ?? We aren't sure of this
// Containers -> Collections -> Components
// DTAStack -> SimpleList -> ArticleStub
export const EDIT_COMPONENTS: any = {
	["Test"]: TempComponentEdit, //can we return a dynamic load i.e. () => dynamic load ('@/components/containers/stack/DTAStack')

	["SimpleList"]: SimpleListEdit,
	["DTAGrid"]: DTAGridEdit,

	["Oembed"]: OembedEdit,
	["Iframe Embed"]: IframeEdit,

	//Should perhaps be SocialMedia/Twitter/these
	//Twitter / load and spread twitter object
	// ["TwitterProfile"]: TwitterProfileEdit,
	// ["TwitterList"]: TwitterListEdit,
	// ["Tweet"]: TweetEdit,

	// //TikTok
	// ["TikTokCreator"]: TikTokCreatorEdit,
	// ["TikTokVideo"]: TikTokVideoEdit,

	// Not here
	["ArticleStub"]: ArticleStubEdit,
	["BasicArticle"]: BasicArticleEdit,
};
