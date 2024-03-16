import { ControlledSwitchInput } from "@/src/components/input/SwitchInput";
import { WithInfo } from "../../info/WithInfo";
import { log, setCode, setLog } from "@/src/lib/logger";
import { useWatch } from "react-hook-form";

interface TextInputProps {
	info: string;
	label: string;
	id: string;
	defaultValue: boolean;
}

export const SwitchInput = (props: TextInputProps) => {
	const { info, id, label, defaultValue = false } = props;
	// const value = useWatch({
	// 	name: id,
	// });

	log(
		{ code: "0909", context: "EDIT:PROPS", message: "TEXT:INPUT" },
		{ props },
		"wut?"
	);

	return (
		// name here is wrong I believe
		// should be appended to existing name
		<WithInfo infoId={info}>
			<ControlledSwitchInput
				label={label}
				id={id}
				name={id}
				// fullWidth={true}
				disabled={false}
				// checked={value}
			/>
		</WithInfo>
	);
};

import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";

interface ShowInputProps {
	info: string;
	label: string;
	id: string;
	defaultValue: boolean;
}

export const NewSwitchInput = (props: ShowInputProps) => {
	const { info, id, label, defaultValue = false } = props;
	const value = useWatch({
		name: id,
	});

	return (
		<>
			<WithInfo infoId={info}>
				<ControlledSwitchInput
					label={label}
					name={id}
					id={id}
					// fullWidth={true}
					disabled={false}
					checked={value}
				/>
			</WithInfo>
		</>
	);
};
