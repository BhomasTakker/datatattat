import { TextInputWithControlAndToggle } from "@/src/components/input/TextInput";
import { WithInfo } from "../../info/WithInfo";

type TextInputProps = {
	id: string;
	label: string;
	info?: string;
	infoId?: string;
};

type ToggleProps = {
	isChecked?: boolean;
};

export const TextToggleInput = ({
	id,
	info,
	label,
	isChecked = false,
}: TextInputProps & ToggleProps) => {
	return (
		<WithInfo infoId={info}>
			<TextInputWithControlAndToggle label={label} name={id} fullWidth={true} />
		</WithInfo>
	);
};
