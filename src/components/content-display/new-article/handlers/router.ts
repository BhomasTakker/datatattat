import { ArticleProps } from "../types";

export const routeHandler =
	(router: any) =>
	(e: React.MouseEvent<HTMLElement>, { src }: ArticleProps) => {
		router.push(src);
	};
