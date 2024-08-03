// https://www.npmjs.com/package/react-player
// Floating player / good lords
// That is for display
// https://developer.chrome.com/blog/watch-video-using-picture-in-picture/
// https://googlechrome.github.io/samples/picture-in-picture/
import ReactPlayer, { ReactPlayerProps } from "react-player";
import styles from "./Player.module.scss";
import { Styles } from "@/src/types/scss";
import { useCssClasses } from "../new-article/hooks/useCssClasses";
import { useState } from "react";

interface Player extends ReactPlayerProps {
	styleSheet?: Styles;
	classes?: string;
	// remove maybe
	media?: string;

	url: string;
	light?: boolean;
	controls?: boolean;
	loop?: boolean;
	playing?: boolean;
}

export const Player = ({
	url,
	light = true,
	controls = true,
	loop = false,
	playing = false,
	classes = "",
	styleSheet = {},
	media,

	onEnded,
	onPlay,
	onPause,
	onStart,
}: Player) => {
	// const [pip, setPip] = useState(false);
	const width = "100%";
	const height = "100%";
	const root = useCssClasses(styles.root, styleSheet?.root, classes);

	// 'styles' or user set
	// pip not available with youtube etc
	// Is only if actual file - mp4 etc
	// const pipEnabled = "pictureInPictureEnabled" in document;

	return (
		<div className={root}>
			<ReactPlayer
				url={url}
				width={width}
				height={height}
				light={light}
				controls={controls}
				loop={loop}
				playing={playing}
				// pip={pip}
				onPause={onPause}
				onPlay={onPlay}
				onEnded={onEnded}
				onStart={onStart}
			/>
		</div>
	);
};
