/** Capitalizes first letter only - does not transform any other letter */
export const capitalize = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Converts undescores into spaces - add whatever else
 * Use in conjunction with css capitalize
 * @param str
 * @returns string
 */
export const formatLabel = (str: string) => {
	return str.replace("_", " ");
};
