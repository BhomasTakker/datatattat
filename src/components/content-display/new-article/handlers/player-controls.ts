import { PlayerControls } from "../media-player/Article-media-player";
import { ArticleProps } from "../types/display-types";

export const togglePlay =
	(playerControls: PlayerControls) =>
	(e: React.MouseEvent<HTMLElement>, { src }: ArticleProps) => {
		playerControls.togglePlay();
	};
