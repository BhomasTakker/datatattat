import { Box, Button, Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { ComponentsContext } from "./context/components.context";
import { PageStateContext } from "../page/context/state/page-state.context";
import { EditComponentContainer } from "../component/edit-component.container";

type ComponentsArrayProps = {
	components: unknown[];
};
// argument for own file
const ComponentsArray = () => {
	const { deleteComponent, moveComponent, components } =
		useContext(ComponentsContext);
	const { pageComponentsId } = useContext(PageStateContext);
	const renderComponents = components.map((component: any, i: number) => {
		return (
			<Stack direction="row" key={i}>
				{/* Clean this guy up */}
				{/* <ComponentEdit
					//This needs to change with re-order
					objectKey={`${pageComponentsId}.${i}`}
					onDelete={() => deleteComponent(i)}
					onMove={(dir) => moveComponent(i, dir)}
				/> */}
				<EditComponentContainer
					objectKey={`${pageComponentsId}.${i}`}
					onDelete={() => deleteComponent(i)}
					onMove={(dir) => moveComponent(i, dir)}
				/>
			</Stack>
		);
	});
	return <ul>{renderComponents}</ul>;
};

export const EditComponents = () => {
	const { addComponent, components } = useContext(ComponentsContext);

	return (
		<Box paddingTop={MARGINS.MIDSMALL} paddingBottom={MARGINS.MIDSMALL}>
			<Button onClick={() => addComponent("", true)} startIcon={<AddIcon />}>
				Add Component
			</Button>
			<ComponentsArray />

			{/* If no components - don't show second button */}
			{components.length > 0 ? (
				<Button onClick={() => addComponent("")} startIcon={<AddIcon />}>
					Add Component
				</Button>
			) : (
				<></>
			)}
		</Box>
	);
};
