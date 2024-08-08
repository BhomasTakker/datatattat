// @ts-nocheck / FIX ME
import { Box, Button, Stack } from "@mui/material";
import {
	ArrayInputContext,
	ArrayInputContextProvider,
} from "./state/array-state.context";
import { ArrayControls } from "@/src/components/forms/edit/ArrayControls";
import { useCallback, useContext } from "react";
import { useFormContext } from "react-hook-form";
import { MARGINS } from "config/styles/styles.config";
import { UnknownObject } from "@/src/components/content-display/data-visualization/d3/types";
import AddIcon from "@mui/icons-material/Add";
import { inputMap } from "../input.map";
import { uniqueNumber } from "@/src/utils/math";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";

type ArrayInput = {
	id: string;
	input: UnknownObject; // we need types for this
};

const ArrayInputControl = () => {
	const { deleteInput, moveInput, addInput, id, input } =
		useContext(ArrayInputContext);
	const { getValues } = useFormContext();
	const renderInputs = useCallback(() => {
		const inputs = (getValues(id) as (typeof input)[]) || [];

		if (!Array.isArray(inputs)) {
			return [];
		}

		// if not an array ditch / we need map / dodgy data kills us

		return inputs.map((value, index: number) => {
			const name = `${id}.${index}`;
			const { info, label, type, ...rest } = input;
			const Component = inputMap.get(type);

			return (
				<Stack key={uniqueNumber()} direction="row">
					<Box width="100%">
						<Component
							// id and name have to come after rest spread because we are building the object key
							{...rest}
							info={info}
							label={label}
							id={name}
							name={name}
						/>
					</Box>

					<ArrayControls
						onDelete={() => deleteInput(index)}
						onMove={(dir: number) => moveInput(dir, index)}
					/>
				</Stack>
			);
		});
	}, [deleteInput, getValues, id, input, moveInput]);
	return (
		<Stack gap={MARGINS.SMALL} marginBottom={MARGINS.LARGE}>
			{renderInputs()}
			<Button color="secondary" onClick={addInput} startIcon={<AddIcon />}>
				Add Input
			</Button>
		</Stack>
	);
};

export const ArrayInput = ({ id, input }: ArrayInput) => {
	const { label } = input;

	return (
		<ArrayInputContextProvider value={{ id, input }}>
			<Title text={label} variant={TitleVariant.EDIT_COMPONENT} />
			<ArrayInputControl />
		</ArrayInputContextProvider>
	);
};
