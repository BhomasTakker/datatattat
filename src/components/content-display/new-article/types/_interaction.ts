// We need to add all possible to Base as undefined
// that way we can filter to all for type safety
// there is probably a better way of doing this

export enum InteractionTypes {
	DISPLAY = "display",
	PLAY = "play",
	NAVIGATE = "navigation",
}

type InteractionType =
	| InteractionTypes.DISPLAY
	| InteractionTypes.NAVIGATE
	| InteractionTypes.PLAY;

type InteractionBase = {
	interaction?: InteractionType;
	displayId?: string;
};

export type DisplayInteraction = {
	interaction: InteractionTypes.DISPLAY;
	displayId: string;
} & InteractionBase;

type PlayInteraction = {
	interaction: InteractionTypes.PLAY;
} & InteractionBase;

type NavigateInteraction = {
	interaction?: InteractionTypes.NAVIGATE;
} & InteractionBase;

export type Interaction =
	| DisplayInteraction
	| PlayInteraction
	| NavigateInteraction;
