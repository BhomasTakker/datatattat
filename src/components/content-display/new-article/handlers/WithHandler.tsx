import { PropsWithChildren, useContext } from "react";
import { ArticleContext } from "../context/article.context";
import { ArticleProps } from "../types";

interface WithHandler<T> {
	handlerProps: ArticleProps;
}

export function WithHandler<T>({
	children,
	handlerProps,
}: PropsWithChildren<WithHandler<T>>) {
	const { onClickHandler } = useContext(ArticleContext);

	return (
		<div
			onClick={(event: React.MouseEvent<HTMLElement>) =>
				onClickHandler(event, handlerProps)
			}
		>
			{children}
		</div>
	);
}
