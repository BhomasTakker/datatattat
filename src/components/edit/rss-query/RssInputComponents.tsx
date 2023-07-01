import { memo } from "react";
import { SelectInputWithControl } from "../../input/SelectInput";
import {
	TextInputWithControl,
	TextInputWithControlAndToggle,
	createSelectInputList,
} from "../../input/TextInput";
import { WithInfo } from "../info/WithInfo";

type EditSelectInputProps = {
	endpoints: any[];
	id: string;
	label: string;
	info?: string;
	infoId?: string;
};

type EditTextInputProps = {
	id: string;
	label: string;
	info?: string;
	infoId?: string;
};

export const EditSelectInput = memo(
	({ endpoints, id, label }: EditSelectInputProps) => {
		return (
			<WithInfo infoId="RssEndpoint">
				<SelectInputWithControl
					label={label}
					name={id}
					fullWidth={true}
					required
				>
					{createSelectInputList(endpoints)}
				</SelectInputWithControl>
			</WithInfo>
		);
	}
);

EditSelectInput.displayName = "EditSelectInput";

export const EditTextInput = memo(({ id, label }: EditTextInputProps) => {
	return (
		<WithInfo infoId="RssEndpoint">
			<TextInputWithControl
				label={label}
				name={id}
				fullWidth={true}
				disabled={false}
			/>
		</WithInfo>
	);
});

EditTextInput.displayName = "EditTextInput";

type ToggleProps = {
	isChecked?: boolean;
};

export const EditTextToggleInput = memo(
	({ id, label, isChecked = false }: EditTextInputProps & ToggleProps) => {
		return (
			<WithInfo infoId="RssEndpoint">
				<TextInputWithControlAndToggle
					label={label}
					name={id}
					fullWidth={true}
				/>
			</WithInfo>
		);
	}
);

EditTextToggleInput.displayName = "EditTextToggleInput";

// export const EditEndpointTextInput =
// 	({ id, label, isChecked = false }: EditTextInputProps & ToggleProps) => {
// 		return (
// 			<WithInfo infoId="RssEndpoint">
// 				<TextInputWithControlAndToggle
// 					label={label}
// 					name={id}
// 					fullWidth={true}
// 				/>
// 			</WithInfo>
// 		);
// 	};
