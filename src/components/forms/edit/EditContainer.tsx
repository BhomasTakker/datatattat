import React, { ReactElement } from "react";
import { Box, MenuItem } from "@mui/material";
import { SelectInputWithControl } from "../../input/SelectInput";
import { CONTAINERS } from "@/src/factories/containers";
import { useWatch } from "react-hook-form";
import { containerEditFactory } from "@/src/factories/container-factory";
import { BaseEditProps } from "./types/BaseEdit";
import { WithInfo } from "../../edit/info/WithInfo";
import { INFO_MARGINS } from "config/styles/styles.config";

//EditPageContainer
//Need provide description for each
export const EditContainer = ({ objectKey }: BaseEditProps) => {
	console.log("FEATURE:205", { objectKey });
	const containerTypeKey = `${objectKey}.containerType`;
	//need actually set enum of containers keys?
	// const [container, setContainer] = useState<string | undefined>(undefined);
	// const { control } = useFormContext();
	const container = useWatch({
		// control,
		name: containerTypeKey,
	});
	console.log("FEATURE:205", { containerTypeKey }, { container });
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
			<WithInfo
				infoId="SelectContainer"
				marginLeft={INFO_MARGINS.STANDARD_LEFT}
			>
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
