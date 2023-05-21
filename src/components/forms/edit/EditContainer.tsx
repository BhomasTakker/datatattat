import React, { ReactElement } from "react";
import { Box, MenuItem } from "@mui/material";
import { SelectInputWithControl } from "../../input/SelectInput";
import { CONTAINERS } from "@/src/factories/containers";
import { useFormContext, useWatch } from "react-hook-form";
import { containerEditFactory } from "@/src/factories/container-factory";
import { BaseEditProps } from "./types/BaseEdit";

//EditPageContainer
//Need provide description for each
export const EditContainer = ({ objectKey }: BaseEditProps) => {
	const containerTypeKey = `${objectKey}.containerType`;
	//need actually set enum of containers keys?
	// const [container, setContainer] = useState<string | undefined>(undefined);
	const { control } = useFormContext();
	const container = useWatch({
		control,
		name: containerTypeKey,
	});

	const createContainerList = () => {
		return Object.keys(CONTAINERS).map((container) => (
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
			<SelectInputWithControl
				label="Select Container"
				name={containerTypeKey}
				fullWidth={true}
				required
				// onChange={changeHandler}
			>
				{createContainerList()}
			</SelectInputWithControl>
			{createContainer(container)}
		</Box>
	);
};
