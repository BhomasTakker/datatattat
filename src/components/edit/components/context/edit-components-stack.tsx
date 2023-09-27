// argument for own file / big argument / that's the whole point

import { useContext } from "react";
import { ComponentsContext } from "./components.context";
import { PageStateContext } from "../../page/context/state/page-state.context";
import { Stack } from "@mui/material";
import { EditComponentContainer } from "../../component/edit-component.container";
import { useFormContext } from "react-hook-form";

export const ComponentsStack = () => {
	const { deleteComponent, moveComponent, componentsFormId } =
		useContext(ComponentsContext);
	const { pageComponentsId } = useContext(PageStateContext);
	const { getValues } = useFormContext();
	const components = getValues(componentsFormId);
	// strikes me as a bad smell if components
	const renderComponents = components.map((component: any, i: number) => {
		return (
			<Stack direction="row" key={i}>
				<EditComponentContainer
					objectKey={`${pageComponentsId}.${i}`}
					onDelete={() => deleteComponent(i)}
					onMove={(dir) => moveComponent(dir, i)}
				/>
			</Stack>
		);
	});
	return <ul>{renderComponents}</ul>;
};
