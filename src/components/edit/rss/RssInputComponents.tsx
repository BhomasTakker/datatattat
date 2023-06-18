import { memo } from "react";
import { SelectInputWithControl } from "../../input/SelectInput";
import {
	TextInputWithControl,
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
	console.log("BUGGER RERENDERED ME HERE DAMMIT");
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
