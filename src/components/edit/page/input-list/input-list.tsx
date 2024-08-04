// Refactor of some of edit?
// We should just be able to use a single input-list for all edit no?
// Effectively in edit configs
// for any object nested or otherwise you specify an input-list

// probably need to unregister form value

import { Stack } from "@mui/material";
import { InputFactory } from "../../inputs/factory/input.factory";
import { UnknownObject } from "@/src/types";

// We want Inputs of any type?
// Or any Inputs of any or set types etc
type InputType<T> = {
	[key: string]: any;
};

interface Props {
	inputs: InputType<any>[];
	objectKey: string;
}

type Config = {
	props: UnknownObject[];
};

type InputList = {
	objectKey: string;
	config: Config;
};

export const InputList = ({ objectKey, config }: InputList) => {
	const { props } = config;
	return <EditInputList objectKey={objectKey} inputs={props} />;
};

export const EditInputList = ({ inputs, objectKey }: Props) => {
	return (
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
