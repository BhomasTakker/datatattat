// @ts-nocheck / FIX ME
import { WithInfo } from "../../info/WithInfo";

interface RadioInputProps {
	info: string;
	label: string;
	id: string;
	defaultValue: boolean;
	options: string[];
}

export const RadioInput = (props: RadioInputProps) => {
	const { info, id, label, options, defaultValue = false } = props;

	return <WithInfo infoId={info}>{}</WithInfo>;
};
