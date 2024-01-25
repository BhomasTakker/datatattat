import { SVGProps } from "react";
import styles from "./text.module.scss";

type TextVariant = "label" | "tick" | "title";

export type Text = {
	variant: TextVariant;
	text: string;
} & SVGProps<SVGTextElement>;

export const Text = ({ text, variant, ...rest }: Text) => {
	return (
		<text {...rest} className={styles[variant]}>
			{text}
		</text>
	);
};
