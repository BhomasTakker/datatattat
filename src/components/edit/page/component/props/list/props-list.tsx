import { useContext } from "react";
import { PageComponentPropsContext } from "../context/page-component-props.context";
import { Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { InputFactory } from "@/src/components/edit/inputs/factory/input.factory";
import { PageStateContext } from "../../../context/state/page-state.context";

export const PropsList = () => {
	// type props
	const { props } = useContext(PageComponentPropsContext);
	const { pagePropsId } = useContext(PageStateContext);

	// Sort props type out

	return (
		<Stack marginLeft={MARGINS.LARGE} gap={MARGINS.SMALL}>
			{props.map((prop) => {
				const { id } = prop;
				const inputFormId = `${pagePropsId}.${id}`;

				// name and id??
				const inputProps = { ...prop, id: inputFormId, name: inputFormId };
				return (
					// Should just be EditInputComponent
					<InputFactory key={id} data={inputProps} />
				);
			})}
		</Stack>
	);
};
