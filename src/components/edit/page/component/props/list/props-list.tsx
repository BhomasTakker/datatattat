import { useContext } from "react";
import { PageComponentPropsContext } from "../context/page-component-props.context";
import { Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { InputFactory } from "@/src/components/edit/inputs/factory/input.factory";
import { PageStateContext } from "../../../context/state/page-state.context";

export const PropsList = () => {
	const { props } = useContext(PageComponentPropsContext);
	const { pagePropsId } = useContext(PageStateContext);

	return (
		<Stack marginLeft={MARGINS.LARGE} gap={MARGINS.SMALL}>
			{props.map((prop) => {
				const { id } = prop;
				const inputFormId = `${pagePropsId}.${id}`;

				const inputProps = { ...prop, id: inputFormId };
				return (
					// Should just be EditInputComponent
					<InputFactory key={id} data={inputProps} />
				);
			})}
		</Stack>
	);
};
