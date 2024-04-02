// @ts-nocheck / FIX ME
import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import { Box } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { inputMap } from "../input.map";

type InputIndentProps = {
	indent: number;
	inputs: UnknownObject[];
	id: string;
};

// Wouldn't work like this
// Would need children
export const InputIndent = ({ indent, inputs, id }: InputIndentProps) => {
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

	return <Box marginLeft={MARGINS.MIDLARGE}>{renderChildren()}</Box>;
};
