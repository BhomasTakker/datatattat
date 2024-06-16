type ClassName = string | undefined | null;

export const addCssClass = (className: ClassName) => {
	return className ? ` ${className}` : "";
};

export const addCssClasses = (classNames: ClassName[]) => {
	return classNames.filter((name) => name).join(" ");
};
