import { TextInputWithControl } from "../../../input/TextInput";
import { WithInfo } from "../../info/WithInfo";

interface TextInputProps {
	info: string;
	label: string;
	id: string;
}

export const TextInput = ({ info, label, id }: TextInputProps) => {
	console.log(
		"FEATURE:115",
		"EDIT:PROPS",
		"TEXT:INPUT",
		{ info },
		{ id },
		{ label }
	);
	return (
		<WithInfo infoId={info}>
			<TextInputWithControl
				label={label}
				name={id}
				fullWidth={true}
				disabled={false}
			/>
		</WithInfo>
	);
};
