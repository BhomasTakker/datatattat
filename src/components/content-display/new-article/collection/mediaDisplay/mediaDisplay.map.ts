import { getYouTubeRenderObject } from "./source-objects/youtube";

type MediaDisplayMapOptions = "youtube";

type MediaDisplayMapFunctionProps = typeof getYouTubeRenderObject;

export const mediaDisplayMap = new Map<
	MediaDisplayMapOptions,
	MediaDisplayMapFunctionProps
>([["youtube", getYouTubeRenderObject]]);
