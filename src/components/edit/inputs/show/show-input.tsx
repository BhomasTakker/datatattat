// @ts-nocheck / FIX ME
import {
	ControlledSwitchInput,
	SwitchInputWithControl,
} from "@/src/components/input/SwitchInput";
import { WithInfo } from "../../info/WithInfo";
import { log } from "@/src/lib/logger";
import { useFormContext, useWatch } from "react-hook-form";
import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import { inputMap } from "../input.map";
import { useEffect } from "react";

interface ShowInputProps {
	info: string;
	label: string;
	id: string;
	defaultValue: boolean;
	inputs: UnknownObject[];
}

export const ShowInput = (props: ShowInputProps) => {
	const { info, id, label, defaultValue = false, inputs = [] } = props;
	const value = useWatch({
		name: id,
	});

	const renderChildren = () => {
		// Probably utils
		const idAsArray = id.split(".");
		const newIdAsArray = idAsArray.splice(0, idAsArray.length - 1);
		const newId = newIdAsArray.join(".");

		return inputs.map((input) => {
			const { id: inputId, info, label, type, ...rest } = input;
			const Component = inputMap.get(type) || <></>;
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
