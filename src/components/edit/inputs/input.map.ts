import { NumberInputWithControl } from "./number-input";
import { SelectInput } from "./select/select-input";
import { SwitchInput } from "./switch/switch-input";
import { TextInput } from "./text/text-input";
import { TextToggleInput } from "./text/text-toggle-input";

// Go over these
// Clean up /reorganize
export const inputMap = new Map<string, any>([
	["text", TextInput],
	["switch", SwitchInput],
	["number", NumberInputWithControl],
	["text-toggle", TextToggleInput],
	["select", SelectInput],
]);
