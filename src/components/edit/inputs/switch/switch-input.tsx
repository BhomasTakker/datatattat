import { SwitchInputWithControl } from "@/src/components/input/SwitchInput";
import { WithInfo } from "../../info/WithInfo";
import { log, setCode, setLog } from "@/src/lib/logger";

interface TextInputProps {
	info: string;
	label: string;
	id: string;
	defaultValue: boolean;
}

export const SwitchInput = (props: TextInputProps) => {
	const { info, id, label, defaultValue = false } = props;

	log(
		{ code: "FEATURE:0010", context: "EDIT:PROPS", message: "TEXT:INPUT" },
		{ props },
		"wut?"
	);

	return (
		// name here is wrong I believe
		// should be appended to existing name
		<WithInfo infoId={info}>
			<SwitchInputWithControl
				label={label}
				name={id}
				fullWidth={true}
				disabled={false}
				checked={defaultValue}
			/>
		</WithInfo>
	);
};
