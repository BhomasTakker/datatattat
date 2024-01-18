import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import { WithInfo } from "../../info/WithInfo";
import {
	TextInputWithControl,
	TextInputWithControlAndToggle,
	createSelectInputList,
} from "@/src/components/input/TextInput";
import { memo, useMemo } from "react";

type EditSelectInputProps = {
	endpoints: any[];
	id: string;
	label: string;
	info?: string;
	infoId?: string;
};

// type EditTextInputProps = {
// 	id: string;
// 	label: string;
// 	info?: string;
// 	infoId?: string;
// };

// Replace use with edit select
export const EditSelectInput = ({
	endpoints,
	id,
	label,
}: EditSelectInputProps) => {
	// console.log("ISSUE:589", "SELECT:INPUT", { endpoints }, { id }, { label });
	return (
		<WithInfo infoId="RssEndpoint">
			<SelectInputWithControl label={label} name={id} fullWidth={true} required>
				{createSelectInputList(endpoints)}
			</SelectInputWithControl>
		</WithInfo>
	);
};

EditSelectInput.displayName = "EditSelectInput";

// export const EditTextInput = ({ id, label }: EditTextInputProps) => {
// 	return (
// 		<WithInfo infoId="RssEndpoint">
// 			<TextInputWithControl
// 				label={label}
// 				name={id}
// 				fullWidth={true}
// 				disabled={false}
// 			/>
// 		</WithInfo>
// 	);
// };

// type ToggleProps = {
// 	isChecked?: boolean;
// };

// export const EditTextToggleInput = ({
// 	id,
// 	label,
// 	isChecked = false,
// }: EditTextInputProps & ToggleProps) => {
// 	return (
// 		<WithInfo infoId="RssEndpoint">
// 			<TextInputWithControlAndToggle label={label} name={id} fullWidth={true} />
// 		</WithInfo>
// 	);
// };
