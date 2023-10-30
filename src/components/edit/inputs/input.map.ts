import { NumberInputWithControl } from "./number-input";
import { SelectInput } from "./select/select-input";
import { SwitchInput } from "./switch/switch-input";
import { TextInput } from "./text/text-input";
import { TextToggleInput } from "./text/text-toggle-input";
import { InputTitle } from "./title/input-title";

// Go over these
// Clean up /reorganize
// We almost certainly want to add type == component?
export const inputMap = new Map<string, any>([
	["text", TextInput],
	["switch", SwitchInput],
	["number", NumberInputWithControl],
	["text-toggle", TextToggleInput],
	["select", SelectInput],

	/////////////
	["title", InputTitle],
]);
