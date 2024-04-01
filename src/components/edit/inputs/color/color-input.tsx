// @ts-nocheck / FIX ME
import { withControl } from "@/src/hoc/components/forms/withControl";
import { WithInfo } from "../../info/WithInfo";
import { MuiColorInput } from "mui-color-input";
import { WithLabel } from "@/src/components/forms/edit/input/WithLabel";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface ColorInputProps {
	info: string;
	label: string;
	field?: ControllerRenderProps<FieldValues, string> | {};
	id: string;
}

export const ColorInput = ({
	info,
	label,
	id,
	field = {},
}: ColorInputProps) => {
	return (
		<WithInfo infoId={info}>
			<WithLabel label={label} htmlFor={id}>
				{/* not sure how we can set a default value 
						without using setValue */}
				<MuiColorInput id={id} name={id} {...field} format="hex" />
			</WithLabel>
		</WithInfo>
	);
};

export const ColorInputWithControl = withControl(ColorInput);
