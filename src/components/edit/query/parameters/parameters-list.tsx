import { Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { ParameterInputComponent } from "./input/input-component";
import { useContext } from "react";
import { ParametersContext } from "./context/ParametersContext";

export const ParametersList = () => {
	const { parameters } = useContext(ParametersContext);
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
