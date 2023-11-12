// don't import from here / this is Viewport size

import { Size } from "@/src/types/viewport";

export type ArticleDisplayVariant = "default" | "display1";

export type ArticleDisplayGetConfig = {
	size: Size;
	variant: ArticleDisplayVariant;
};

export const getConfig = ({ size, variant }: ArticleDisplayGetConfig) => {};
