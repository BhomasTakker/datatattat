import { SVGProps } from "react";
import styles from "./text.module.scss";

type TextVariant = "label" | "tick" | "title" | "legend";

export type Text = {
	variant: TextVariant;
	text: string;
	className?: string;
} & SVGProps<SVGTextElement>;

export const Text = ({ text, variant, className = "", ...rest }: Text) => {
	return (
		<text {...rest} className={`${styles[variant]} ${className}`}>
			{text}
		</text>
	);
};
