// argument for own file / big argument / that's the whole point

import { useContext, useEffect, useState } from "react";
import { ComponentsContext } from "./components.context";
import { PageStateContext } from "../../page/context/state/page-state.context";
import { Stack } from "@mui/material";
import { EditComponentContainer } from "../../component/edit-component.container";
import { useFormContext } from "react-hook-form";
import { EditContext } from "@/src/context/edit-context";

// argument for context
// although big argument for consolidating some of the context
export const ComponentsStack = () => {
	const { deleteComponent, moveComponent, componentsFormId } =
		useContext(ComponentsContext);
	const { pageComponentsId } = useContext(PageStateContext);
	const { getValues } = useFormContext();

	const { currentPage } = useContext(EditContext);
	const [renderComponents, setRenderComponents] = useState([]);

	useEffect(() => {
		setRenderComponents((_prev) => {
			const components = getValues(componentsFormId);
			return components.map((component: any, i: number) => {
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
		});
	}, [
		componentsFormId,
		currentPage,
		deleteComponent,
		getValues,
		moveComponent,
		pageComponentsId,
	]);

	return <ul>{renderComponents}</ul>;
};
