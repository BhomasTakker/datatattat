import React, { ReactElement } from "react";
import { Box, MenuItem } from "@mui/material";
import { SelectInputWithControl } from "../../input/SelectInput";
import { CONTAINERS } from "@/src/factories/containers";
import { useWatch } from "react-hook-form";
import { containerEditFactory } from "@/src/factories/container-factory";
import { BaseEditProps } from "./types/BaseEdit";
import { WithInfo } from "../../edit/info/WithInfo";

//EditPageContainer
//Need provide description for each
export const EditContainer = ({ objectKey }: BaseEditProps) => {
	const containerTypeKey = `${objectKey}.containerType`;
	//need actually set enum of containers keys?
	// const [container, setContainer] = useState<string | undefined>(undefined);
	// const { control } = useFormContext();
	const container = useWatch({
		// control,
		name: containerTypeKey,
	});

	const createContainerList = () => {
		return Object.keys(CONTAINERS).map((container) => (
			//Add show info synopsis here
			<MenuItem key={container} value={container}>
				{container}
			</MenuItem>
		));
	};

	const createContainer = (container: any): ReactElement => {
		if (!container) {
			return <></>;
		}

		const EditContainer = containerEditFactory(container);

		if (!EditContainer) {
			//Error
			return <></>;
		}

		return <EditContainer />;
	};

	return (
		<Box>
			<WithInfo infoId="SelectContainer">
				<SelectInputWithControl
					id="Select Container"
					label="Select Container"
					name={containerTypeKey}
					fullWidth={true}
					variant="filled"
					required
					// onChange={changeHandler}
				>
					{createContainerList()}
				</SelectInputWithControl>
			</WithInfo>
			{/* </Stack> */}
			{createContainer(container)}
		</Box>
	);
};
