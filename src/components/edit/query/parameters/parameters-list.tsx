import { Stack } from "@mui/material";
import { ParametersType } from "./types";
import { MARGINS } from "config/styles/styles.config";
import { ParameterInputComponent } from "./input/input-component";

export const ParametersList = ({
	parameters = [],
}: {
	parameters: ParametersType[];
}) => {
	return (
		<Stack marginLeft={MARGINS.LARGE} gap={MARGINS.SMALL}>
			{parameters.map((param) => {
				return (
					<ParameterInputComponent key={param.id} parameterConfigData={param} />
				);
			})}
		</Stack>
	);
};
