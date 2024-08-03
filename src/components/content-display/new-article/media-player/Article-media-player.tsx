import { useContext, useEffect, useState } from "react";
import { Player } from "../../media-player/Player";
import { ArticleContext } from "../context/article.context";

export interface PlayerControls {
	togglePlay: () => void;
}

interface ArticleMediaPlayer {
	src: string;
}

// On woder click we would like to play pause - i.e. if part of a card
export const ArticleMediaPlayer = ({ src }: ArticleMediaPlayer) => {
	const { setPlayerControls } = useContext(ArticleContext);
	// We may take this in?
	// add controls and use reducer
	const [isPlaying, setIsPlaying] = useState(false);
	const [isLight, setIsLight] = useState(true);

	// onReady - when light has been clicked etc
	// onError - when an error thrown
	// onDuration - updates with the duration - remaining I assume
	// seems onDuration is required since duration would be unknown prior to load
	// see onProgress for remaining duration etc

	const onPlayHandler = () => {
		setIsPlaying(true);
	};

	const onPauseHandler = () => {
		setIsPlaying(false);
	};

	const onStartHandler = () => {
		setIsPlaying(true);
	};

	const onEndedHandler = () => {
		setIsPlaying(false);
	};

	useEffect(() => {
		setPlayerControls({
			togglePlay() {
				// in case
				setIsLight(false);
				setIsPlaying((playing) => !playing);
			},
		});
	}, [setPlayerControls]);

	return (
		<Player
			url={src}
			playing={isPlaying}
			light={isLight}
			onPlay={onPlayHandler}
			onPause={onPauseHandler}
			onEnded={onEndedHandler}
			onStart={onStartHandler}
		/>
	);
};
