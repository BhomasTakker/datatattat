import { useAppSelector } from "@/src/store/hooks";
import { Player } from "../Player";
import { mediaSource } from "@/src/store/media-display/displaySlice";
import { useEffect, useState } from "react";

interface DisplayPlayer {
	url: string;
	id: string;
}

export const DisplayPlayer = ({ url, id }: DisplayPlayer) => {
	const displays = useAppSelector(mediaSource);

	// Take as props / if we would want to change this behaviour
	const autoPlayOnUpdate = true;
	const autoplayOnInitialise = false;

	const [isPlaying, setIsPlaying] = useState(autoplayOnInitialise);

	useEffect(() => {
		setIsPlaying(autoPlayOnUpdate);
	}, [autoPlayOnUpdate, id]);

	return (
		// we may want to send play when dispatch an update src
		<Player
			playing={isPlaying}
			light={false}
			url={displays[id] || url}
			media={""}
		/>
	);
};
