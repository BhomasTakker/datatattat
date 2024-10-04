import { useAppSelector } from "@/src/store/hooks";
import { Player } from "../Player";
import { mediaSource } from "@/src/store/media-display/displaySlice";
import { useEffect, useRef, useState } from "react";

interface DisplayPlayer {
	url: string;
	id: string;
}

export const DisplayPlayer = ({ url, id }: DisplayPlayer) => {
	const displays = useAppSelector(mediaSource);
	const didMount = useRef(false);
	// Need go over and pass this in whatever
	// currently - if true a display player will play automatically on initialise
	// if false will not play on play
	// Take as props / if we would want to change this behaviour
	const autoPlayOnUpdate = true;

	const autoplayOnInitialise = false;

	const [isPlaying, setIsPlaying] = useState(autoplayOnInitialise);

	// This should be updated
	// get play action from 'message' - then log action as 'done'
	useEffect(() => {
		if (didMount.current) {
			setIsPlaying(autoPlayOnUpdate);
		}
	}, [autoPlayOnUpdate, id]);

	// Almost certainly a better way
	// create a hook at least?
	useEffect(() => {
		if (!didMount.current) {
			didMount.current = true;
		}
	});

	const setPlaying = (isPlaying: boolean) => {
		setIsPlaying(isPlaying);
	};

	return (
		// we may want to send play when dispatch an update src
		<Player
			playing={isPlaying}
			light={false}
			url={displays[id] || url}
			media={""}
			onPlay={() => setPlaying(true)}
			onPause={() => setPlaying(false)}
			onStart={() => setPlaying(true)}
			onStop={() => setPlaying(false)}
		/>
	);
};
