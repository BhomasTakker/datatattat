import { PropsWithChildren, useContext } from "react";
import { ArticleContext } from "../context/article.context";
import { ArticleProps } from "../types";
import Link from "next/link";

interface WithHandler<T> {
	handlerProps: ArticleProps;
}

export function WithHandler<T>({
	children,
	handlerProps,
}: PropsWithChildren<WithHandler<T>>) {
	// we don't need props, just src
	const { onClickHandler, isLink, props } = useContext(ArticleContext);
	const { src = "#" } = props || {};

	// Argument against this being here
	// We should this OR that
	// but at some point it comes down to a component like this one
	// show this or show that
	// Rename the component WithLinkOrHandler
	if (isLink) {
		return <Link href={src}>{children}</Link>;
	}

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
