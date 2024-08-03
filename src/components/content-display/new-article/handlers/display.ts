import { setMediaSource } from "@/src/store/media-display/displaySlice";
import store from "@/src/store/store";
import { ArticleProps } from "../types";

type Dispatch = typeof store.dispatch;

export const displayHandler =
	(dispatch: Dispatch) =>
	(e: React.MouseEvent<HTMLElement>, { displayId, src }: ArticleProps) => {
		// log warning
		if (!displayId) return;
		dispatch(setMediaSource({ key: displayId, value: src }));
	};
