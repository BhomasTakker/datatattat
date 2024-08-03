import { useCallback } from "react";
import { type ClassName } from "../types";

export const useCssClasses = (...classNames: ClassName[]) => {
	const classes = useCallback(() => {
		return classNames.filter((name) => name).join(" ");
	}, [classNames]);

	return classes();
};
