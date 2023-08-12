import { SelectInput } from "./select-input";
import { TextInput } from "./text/text-input";
import { TextToggleInput } from "./text/text-toggle-input";

export const inputMap = new Map<string, any>([
	["text", TextInput],
	["text-toggle", TextToggleInput],
	["select", SelectInput],
]);
