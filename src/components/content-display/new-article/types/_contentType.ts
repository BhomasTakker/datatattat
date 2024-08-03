export type ContentType = "video" | "audio" | "article";

type BaseContentType = {
	contentType?: ContentType;
	mediaPlayer?: undefined;
};

type VideoContentType = {
	contentType: "video";
	mediaPlayer: boolean;
} & BaseContentType;

type AudioContentType = {
	contentType: "audio";
	mediaPlayer: boolean;
} & BaseContentType;

type ArticleContentType = {
	contentType?: "article";
} & BaseContentType;

export type ContentTypeInterface =
	| VideoContentType
	| AudioContentType
	| ArticleContentType;
