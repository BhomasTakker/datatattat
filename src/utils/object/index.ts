import { UnknownObject } from "@/src/components/content-display/new-article/types";

/**
 * Clone using json parse & stringify
 *
 * @param obj Object to clone
 * @returns Cloned Object
 * @WARN Inherent issues cloning objects like this
 */
export const cloneDeepSerializable = (obj: unknown) => {
	return JSON.parse(JSON.stringify(obj));
};

/**
 * Clone given object including all children
 * @param obj - any/unknown
 * @returns cloned object
 * @note Uses structuredClone
 * @note Fallbacks to cloneDeepSerializable if no structuredClone
 */
export const cloneDeep = (obj: unknown) => {
	// return cloneDeepSerializable(obj);
	// node 17
	return structuredClone ? structuredClone(obj) : cloneDeepSerializable(obj);
};

/**
 * Check if given parameter is an Object
 *
 * @param obj - any
 * @returns true / false
 * @note Arrays | null != Object
 */
export const isObject = (obj: any) => {
	return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
};

/**
 * Check if given parameter is an Array
 *
 * @param obj - any
 * @returns true / false
 */
export const isArray = (obj: any) => {
	return typeof obj === "object" && Array.isArray(obj) && obj !== null;
};

/** 
* Object Utils: 'flatten' destructure child objects into it's parent
****
* @remarks
* First proper comments
* 
* @WARNING Nested object key vals will overwrite
* parent object key vals of the same name 
* 
* @WARNING Ignores arrays 
*
* @param obj - The nested object
*
* @returns Single layered object
****
* @todo create with flatten objects contained in arrays
@beta
*/
export const destructureChildObjects = (obj: any) => {
	let newObject = {};
	for (const prop in obj) {
		if (isObject(obj[prop])) {
			newObject = { ...newObject, ...destructureChildObjects(obj[prop]) };
		} else {
			newObject = { ...newObject, [prop]: obj[prop] };
		}
	}

	return { ...newObject };
};

type Accumulator = UnknownObject;

export const filterObjectByKeys = (obj: UnknownObject, values: string[]) => {
	return Object.keys(obj).reduce((acc, val) => {
		if (values.includes(val)) acc[val] = obj[val];
		return acc;
	}, {} as Accumulator);
};
