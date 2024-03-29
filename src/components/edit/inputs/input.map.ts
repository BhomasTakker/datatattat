import { ConversionsContainer } from "../query/conversion/conversions-container";
import { ArrayInput } from "./array/array-input";
import { ColorInput, ColorInputWithControl } from "./color/color-input";
import { ConversionsInput } from "./conversions/conversions-input";
import { InputIndent } from "./indent/input-indent";
import { NumberInputWithControl } from "./number-input";
import { ObjectSelectInput } from "./object-select/object-select-input";
import { SelectInput } from "./select/select-input";
import { ShowInput } from "./show/show-input";
import { NewSwitchInput, SwitchInput } from "./switch/switch-input";
import { TextInput } from "./text/text-input";
import { TextToggleInput } from "./text/text-toggle-input";
import { InputTitle } from "./title/input-title";

// Go over these
// Clean up /reorganize
// We almost certainly want to add type == component?

//////////////////////////////////////////////////
// Toggle
// Toggle should just be available to add to any input
// As simple as sub-type: 'toggle', toggle-value: true - for on
// If there add else ignore but always go through
///////////////////////////////////////////////////////
// We want multi-input?
// i.e. I need two numbers for max / min
// Or replace string - match & replace
export const inputMap = new Map<string, any>([
	["text", TextInput],
	["switch", NewSwitchInput],
	["number", NumberInputWithControl],
	["text-toggle", TextToggleInput],
	["select", SelectInput],
	["color", ColorInputWithControl],

	["object-select", ObjectSelectInput],

	["show", ShowInput],

	//////////
	["array", ArrayInput],

	// Okay let's play / this can - seemingly easily be used for client side filtering and sorting
	// Would work - can see adding Query etc easily enough
	["conversions", ConversionsInput],

	/////////////Not an input but a title element
	["title", InputTitle],
	["indent", InputIndent],
]);
