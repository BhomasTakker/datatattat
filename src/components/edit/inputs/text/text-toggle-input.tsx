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

// redo toggle - it needs to be Toggle and pass type
// There is a much better way of doing this
export const TextToggleInput = ({
	id,
	info,
	label,
	isChecked = false,
}: TextInputProps & ToggleProps) => {
	return (
		<WithInfo infoId={info}>
			{/* Okay this is ridiculous  */}
			<TextInputWithControlAndToggle label={label} name={id} fullWidth={true} />
		</WithInfo>
	);
};
