/** Capitalizes first letter only - does not transform any other letter */
export const capitalize = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};
