import { Box, Button, Stack } from "@mui/material";
import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { MARGINS } from "config/styles/styles.config";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { ComponentsContext } from "./context/components.context";
import { ComponentEdit } from "../component/ComponentEdit";

type ComponentsArrayProps = BaseEditProps & {
	components: unknown[];
};

const ComponentsArray = ({ objectKey, components }: ComponentsArrayProps) => {
	const { deleteComponent, moveComponent } = useContext(ComponentsContext);
	const renderComponents = components.map((component: any, i: number) => {
		return (
			<Stack direction="row" key={i}>
				{/* Clean this guy up */}
				<ComponentEdit
					//This needs to change with re-order
					objectKey={`${objectKey}.components.${i}`}
					onDelete={() => deleteComponent(i)}
					onMove={(dir) => moveComponent(i, dir)}
				/>
			</Stack>
		);
	});
	return <ul>{renderComponents}</ul>;
};

export const EditComponents = ({ objectKey }: BaseEditProps) => {
	const { addComponent, components } = useContext(ComponentsContext);
	return (
		<Box paddingTop={MARGINS.MIDSMALL} paddingBottom={MARGINS.MIDSMALL}>
			<Button onClick={() => addComponent("", true)} startIcon={<AddIcon />}>
				Add Component
			</Button>
			<ComponentsArray objectKey={objectKey} components={components} />
			<Button onClick={() => addComponent("")} startIcon={<AddIcon />}>
				Add Component
			</Button>
		</Box>
	);
};
