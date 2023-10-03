import { Box, Button } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { ComponentsContext } from "./context/components.context";
import { ComponentsStack } from "./context/edit-components-stack";
import { useFormContext } from "react-hook-form";
// need internationalisation
const LABEL = "Add Component";

export const EditComponents = () => {
	const { addComponent, componentsFormId } = useContext(ComponentsContext);
	const { getValues } = useFormContext();
	const components = getValues(componentsFormId) || [];
	return (
		<Box paddingTop={MARGINS.MIDSMALL} paddingBottom={MARGINS.MIDSMALL}>
			<Button onClick={() => addComponent("", true)} startIcon={<AddIcon />}>
				{LABEL}
			</Button>
			<ComponentsStack />

			{/* If no components - don't show second button */}
			{components.length > 0 ? (
				<Button onClick={() => addComponent("")} startIcon={<AddIcon />}>
					{LABEL}
				</Button>
			) : (
				<></>
			)}
		</Box>
	);
};
