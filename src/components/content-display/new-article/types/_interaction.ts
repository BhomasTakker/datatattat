// We need to add all possible to Base as undefined
// that way we can filter to all for type safety
// there is probably a better way of doing this
type InteractionType = "display" | "play" | "navigate";

type InteractionBase = {
	interaction: InteractionType;
	displayId: undefined;
};

type DisplayInteraction = {
	interaction: "display";
	displayId: string;
} & InteractionBase;

type PlayInteraction = {
	interaction: "play";
} & InteractionBase;

type NavigateInteraction = {
	interaction: "navigate";
} & InteractionBase;

type Interaction = DisplayInteraction | PlayInteraction | NavigateInteraction;
