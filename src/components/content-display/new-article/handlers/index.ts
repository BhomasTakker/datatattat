import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { ArticleProps } from "../types";
import { displayHandler } from "./display";
import { routeHandler } from "./router";

import store from "@/src/store/store";
import { PlayerControls } from "../media-player/Article-media-player";
import { togglePlay } from "./player-controls";
import { log } from "@/src/lib/logger";

type Dispatch = typeof store.dispatch;

type HandlerContext = {
	router: AppRouterInstance;
	dispatch: Dispatch;
	playerControls: PlayerControls | null;
};

const noop = (_e: React.MouseEvent<HTMLElement>, _p: ArticleProps) => {
	log({ code: "#0001", context: "noop", message: "noop handler called" });
};

export const getHandler = (ctx: HandlerContext, interaction: string) => {
	switch (interaction) {
		case "navigation":
			return routeHandler(ctx.router);
		case "display":
			return displayHandler(ctx.dispatch);
		case "play":
			// there's a better way of doing thid
			if (ctx?.playerControls) return togglePlay(ctx.playerControls);

			return noop;
		// you need return else you would fall through any others
		default:
			return noop;
	}
};
