/**
 * @param id - edit object id path - diliminated by '.'
 * @returns - The parent object path of the given object id
 */
export const getParentId = (id: string) => {
	const idAsArray = id.split(".");
	const newIdAsArray = idAsArray.splice(0, idAsArray.length - 1);
	return newIdAsArray.join(".");
};
