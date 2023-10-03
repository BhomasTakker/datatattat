import { useContext } from "react";
import { ComponentsContext } from "./components.context";
import { PageStateContext } from "../../page/context/state/page-state.context";
import { Stack } from "@mui/material";
import { EditComponentContainer } from "../../component/edit-component.container";
import { useFormContext } from "react-hook-form";

// argument for context
// although big argument for consolidating some of the context
export const ComponentsStack = () => {
	const { deleteComponent, moveComponent, componentsFormId } =
		useContext(ComponentsContext);
	const { pageComponentsId } = useContext(PageStateContext);
	const { getValues } = useFormContext();

	// We need this to re-render on add comnponent
	// When tried to reduce renders we get a bug with add component
	const components = getValues(componentsFormId) || [];
	const ComponentsStack = components.map((component: any, i: number) => {
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

	return <ul>{ComponentsStack}</ul>;
};
