import { EditInputs } from "@/src/components/edit/inputs/input.map";
import { AudioMackEmbedType } from "./audio-mack.config";

const artistInput = {
	type: EditInputs.text,
	id: "artist",
	label: "artist",
	info: "artist",
};

const songInput = {
	type: EditInputs.text,
	id: "song",
	label: "song",
	info: "song",
};

const albumInput = {
	type: EditInputs.text,
	id: "album",
	label: "album",
	info: "album",
};

const playlistInput = {
	type: EditInputs.text,
	id: "playlist",
	label: "playlist",
	info: "playlist",
};

const songOptions = [artistInput, songInput];
const playlistOptions = [artistInput, playlistInput];
const albumOptions = [artistInput, albumInput];

type AudioMackVariantProps =
	| typeof songOptions
	| typeof playlistOptions
	| typeof albumOptions;

const audioMackVariantMap = new Map<string, AudioMackVariantProps>([
	[AudioMackEmbedType.song, songOptions],
	[AudioMackEmbedType.album, albumOptions],
	[AudioMackEmbedType.playlist, playlistOptions],
]);

const contentSelect = {
	type: EditInputs.objectSelect,
	id: "embedType",
	options: [
		AudioMackEmbedType.song,
		AudioMackEmbedType.album,
		AudioMackEmbedType.playlist,
	],
	// optionId: "embedObject",
	label: "Content Type",
	info: "AudioMack ContentType",
	optionsMap: audioMackVariantMap,
};

const setQueryId = {
	type: EditInputs.assign,
	id: "queryId",
	value: "audioMackRoot",
};

export const AUDIO_MACK_ROOT = [contentSelect, setQueryId];
