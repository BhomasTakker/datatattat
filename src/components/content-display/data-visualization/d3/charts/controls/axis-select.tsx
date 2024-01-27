import Box from "@mui/material/Box";
import { MARGINS } from "config/styles/styles.config";
import {
	SelectComponent,
	SelectComponentOption,
} from "../../ui/SelectComponent";

type AxisSelect = {
	xOptions: SelectComponentOption[];
	yOptions: SelectComponentOption[];
	selectedXValue: string;
	selectedYValue: string;
	setSelectedXValue: (str: string) => void;
	setSelectedYValue: (str: string) => void;
	showXAxis?: boolean;
	showYAxis?: boolean;
};

export const AxisSelect = ({
	xOptions,
	yOptions,
	showXAxis = true,
	showYAxis = true,
	selectedXValue,
	selectedYValue,
	setSelectedXValue,
	setSelectedYValue,
}: AxisSelect) => {
	if (!showXAxis && !showYAxis) {
		return <></>;
	}

	return (
		<Box
			display="flex"
			flexDirection="row"
			width={800}
			gap={MARGINS.MIDSMALL}
			marginLeft={MARGINS.MIDSMALL}
			marginRight={MARGINS.MIDSMALL}
			marginBottom={MARGINS.MIDSMALL}
		>
			{showXAxis && (
				<SelectComponent
					id="x-axis"
					label="Select XAxis"
					options={xOptions}
					selected={selectedXValue}
					onSelect={(evt) => setSelectedXValue(evt.target.value)}
				/>
			)}
			{showYAxis && (
				<SelectComponent
					id="y-axis"
					label="Select YAxis"
					options={yOptions}
					selected={selectedYValue}
					onSelect={(evt) => setSelectedYValue(evt.target.value)}
				/>
			)}
		</Box>
	);
};
