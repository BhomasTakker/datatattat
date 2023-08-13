import { NumberInputWithControl } from "./number-input";
import { SelectInput } from "./select/select-input";
import { TextInput } from "./text/text-input";
import { TextToggleInput } from "./text/text-toggle-input";

export const inputMap = new Map<string, any>([
	["text", TextInput],
	["number", NumberInputWithControl],
	["text-toggle", TextToggleInput],
	["select", SelectInput],
]);
