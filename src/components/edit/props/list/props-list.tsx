import { useContext } from "react";
import { PageComponentPropsContext } from "../context/component-props.context";
import { Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { InputFactory } from "@/src/components/edit/inputs/factory/input.factory";
import { PageStateContext } from "../../page/context/state/page-state.context";
import { log } from "@/src/lib/logger";

export const PropsList = () => {
	// type props
	const { props, propsId } = useContext(PageComponentPropsContext);
	// Sort props type out

	return (
		<Stack marginLeft={MARGINS.LARGE} gap={MARGINS.SMALL}>
			{props.map((prop) => {
				log(
					{ code: "P10-5698", context: "PROPS", message: "PROP:DATA" },
					{ prop }
				);
				const { id } = prop;
				const inputFormId = `${propsId}.${id}`;

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
