import { Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { ParameterInputComponent } from "./input/input-component";
import { useContext } from "react";
import { ParametersContext } from "./context/ParametersContext";
import { log } from "@/src/lib/logger";
import { InputFactory } from "../../inputs/factory/input.factory";

export const ParametersList = () => {
	const { parameters, objectKey } = useContext(ParametersContext);
	return (
		<Stack marginLeft={MARGINS.LARGE} gap={MARGINS.SMALL}>
			{parameters.map((param) => {
				// Change to using and sharing Inputs with Props
				// Seems to work well
				// All Param inputs have a corresponding Prop/Edit input
				// We can or at least should be able to
				// Remove everything from ParameterInputComponent on down
				log(
					{
						code: "P10-5698",
						context: "PARAMETERS",
						message: "PARAMETER:DATA",
					},
					{ param }
				);
				const { id } = param;
				const inputFormId = `${objectKey}.${id}`;

				// name and id??
				const inputProps = { ...param, id: inputFormId, name: inputFormId };

				return (
					<InputFactory key={id} data={inputProps} />
					// <ParameterInputComponent key={param.id} parameterConfigData={param} />
				);
			})}
		</Stack>
	);
};
