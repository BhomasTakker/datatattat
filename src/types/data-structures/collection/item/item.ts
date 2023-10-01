import { BaseInfo, Details, Media, Avatar } from "../../base";

export type CollectionItem = BaseInfo & {
	details?: Details;
	media?: Media;
	avatar?: Avatar;
};
