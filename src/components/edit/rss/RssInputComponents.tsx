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

export const EditSelectInput = ({
	endpoints,
	id,
	label,
}: EditSelectInputProps) => {
	return (
		<WithInfo infoId="RssEndpoint">
			<SelectInputWithControl label={label} name={id} fullWidth={true} required>
				{createSelectInputList(endpoints)}
			</SelectInputWithControl>
		</WithInfo>
	);
};

export const EditTextInput = ({ id, label }: EditTextInputProps) => {
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
};
