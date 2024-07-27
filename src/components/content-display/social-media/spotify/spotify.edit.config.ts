import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { SpotifyEmbedType } from "./spotify.config";

const routeInput = {
	type: EditInputs.text,
	id: "route",
	label: "route",
	info: "route",
};

const routeOptions = [routeInput];

type SpotifyVariantProps = typeof routeOptions;

const spotifyVariantMap = new Map<string, SpotifyVariantProps>([
	[SpotifyEmbedType.route, routeOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [SpotifyEmbedType.route],
	// optionId: "embedObject",
	label: "Content Type",
	info: "Spotify ContentType",
	optionsMap: spotifyVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "spotifyRoot",
};

export const SPOTIFY_ROOT = [contentSelect, setQueryId];
