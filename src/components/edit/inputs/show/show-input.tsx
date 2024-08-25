import { ControlledSwitchInput } from "@/src/components/input/SwitchInput";
import { WithInfo } from "../../info/WithInfo";
import { useFormContext, useWatch } from "react-hook-form";
import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import { inputMap } from "../input.map";
import { useContext, useEffect } from "react";
import { PageStateContext } from "../../page/context/state/page-state.context";
import { getParentId } from "@/src/utils/edit";

interface ShowInputProps {
	info: string;
	label: string;
	id: string;
	defaultValue: boolean;
	inputs: UnknownObject[];
}

// Somewhere - we are re-rendering with value as undefined
// So we do not render children
// The switch itself is controlled by data
// So it remains correct
export const ShowInput = (props: ShowInputProps) => {
	const { info, id, label, defaultValue = false, inputs = [] } = props;
	const { getValue: getPageData } = useContext(PageStateContext);
	const { setValue } = useFormContext();
	const value = useWatch({
		name: id,
	});

	// It's gross but the approach appears to work
	//////////////////////////////////////////////////
	// Hack / if unset / undefined / check pageData
	// Needs testing...
	// What if just empty string?
	//////////////////////////////////////////////////
	useEffect(() => {
		if (value === undefined) {
			const val = getPageData(id);
			if (!val) return;

			setValue(id, val);

			const parentId = getParentId(id);

			// We need to reset our dependents data too
			inputs.forEach(({ id: inputId }) => {
				const newInputId = `${parentId}.${inputId}`;
				const val = getPageData(newInputId);
				// context should be setting
				if (val) setValue(newInputId, val);
			});
		}
	}, [getPageData, id, inputs, setValue, value]);

	const renderChildren = () => {
		const newId = getParentId(id);

		return inputs.map((input) => {
			const { id: inputId, info, label, type, ...rest } = input;
			const Component = inputMap.get(type as string) || <></>;
			return (
				<Component
					key={inputId}
					info={info}
					label={label}
					id={`${newId}.${inputId}`}
					name={`${newId}.${inputId}`}
					{...rest}
				/>
			);
		});
	};

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
			{value && renderChildren()}
		</>
	);
};
