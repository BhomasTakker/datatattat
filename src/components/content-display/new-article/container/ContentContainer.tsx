import { PropsWithChildren } from "react";
import { As, Size, Style } from "../types";
import styles from "./ContentContainer.module.scss";
import { useCssClasses } from "../hooks/useCssClasses";

interface ContentContainer {
	as?: As;
	classes?: string;
	style?: Style;
	size?: Size;
}

export const ContentContainer = ({
	as = "div",
	classes = "",
	children,
	style = "display",
	size = "md",
}: PropsWithChildren<ContentContainer>) => {
	const root = useCssClasses(styles.root, classes);
	const As = as;
	return <As className={root}>{children}</As>;
};
