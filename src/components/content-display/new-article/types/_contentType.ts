type ContentType = "video" | "audio" | "article";

type BaseContentType = {
	contentType: ContentType;
	mediaPlayer: undefined;
};

type VideoContentType = {
	contentType: "video";
} & BaseContentType;

type AudioContentType = {
	contentType: "audio";
	mediaPlayer: boolean;
} & BaseContentType;

type ArticleContentType = {
	contentType: "article";
	mediaPlayer: boolean;
} & BaseContentType;

type ContentTypeInterface =
	| VideoContentType
	| AudioContentType
	| ArticleContentType;
