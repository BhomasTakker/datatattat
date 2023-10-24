import { SwitchInputWithControl } from "@/src/components/input/SwitchInput";
import { WithInfo } from "../../info/WithInfo";

interface TextInputProps {
	info: string;
	label: string;
	id: string;
}

export const SwitchInput = (props: TextInputProps) => {
	console.log("FEATURE:7000", "EDIT:PROPS", "TEXT:INPUT", { props });
	const { info, id, label } = props;
	return (
		// name here is wrong I believe
		// should be appended to existing name
		<WithInfo infoId={info}>
			<SwitchInputWithControl
				label={label}
				name={id}
				fullWidth={true}
				disabled={false}
			/>
		</WithInfo>
	);
};
