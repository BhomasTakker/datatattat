// Refactor of some of edit?
// We should just be able to use a single input-list for all edit no?
// Effectively in edit configs
// for any object nested or otherwise you specify an input-list

// probably need to unregister form value

import { Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { InputFactory } from "../../inputs/factory/input.factory";

// We want Inputs of any type?
// Or any Inputs of any or set types etc
type InputType<T> = {
	[key: string]: any;
};

interface Props {
	inputs: InputType<any>[];
	objectKey: string;
}

export const EditInputList = ({ inputs, objectKey }: Props) => {
	return (
		// Need to pass
		// marginLeft={MARGINS.LARGE} gap={MARGINS.SMALL}
		<Stack>
			{inputs.map((input) => {
				const { id } = input;
				const inputFormId = `${objectKey}.${id}`;

				const inputProps = { ...input, id: inputFormId, name: inputFormId };
				return <InputFactory key={id} data={inputProps} />;
			})}
		</Stack>
	);
};
