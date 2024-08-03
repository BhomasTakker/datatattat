import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { ArticleProps } from "../types";

export const routeHandler =
	(router: AppRouterInstance) =>
	(e: React.MouseEvent<HTMLElement>, { src }: ArticleProps) => {
		router.push(src);
	};
