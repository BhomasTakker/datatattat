import { Stack } from "@mui/material";
import { ParametersType } from "./types";
import { MARGINS } from "config/styles/styles.config";
import { ParameterInputComponent } from "./input/input-component";

const createParametersList = (parameters: ParametersType[]) => {
	return parameters.map((param) => {
		return (
			<ParameterInputComponent key={param.id} parameterConfigData={param} />
		);
	});
};

export const ParametersList = ({
	parameters = [],
}: {
	parameters: ParametersType[];
}) => {
	const parametersList = createParametersList(parameters);
	return (
		<Stack marginLeft={MARGINS.LARGE} gap={MARGINS.SMALL}>
			{parametersList}
		</Stack>
	);
};
