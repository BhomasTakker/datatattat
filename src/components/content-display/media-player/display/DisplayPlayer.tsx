import { useAppSelector } from "@/src/store/hooks";
import { Player } from "../Player";
import { mediaSource } from "@/src/store/media-display/displaySlice";

interface DisplayPlayer {
	url: string;
	id: string;
}

export const DisplayPlayer = ({ url, id }: DisplayPlayer) => {
	const displays = useAppSelector(mediaSource);

	return (
		// we may want to send play when dispatch an update src
		<Player
			playing={false}
			light={false}
			url={displays[id] || url}
			media={""}
		/>
	);
};
