import { Accordion, AccordionDetails, Box, Paper } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { useContext, useState } from "react";
import { EditComponentContext } from "./context/edit-component.context";
import { SelectInput } from "../inputs/select/select-input";
import { EditFactoryComponent } from "../factory/edit-component.factory";
import { PageComponentContext } from "../page/component/context/page-component.context";
import { COMPONENT_TYPES_MAP } from "config/edit/component-types.map";
import { EditComponentControls } from "./controls/edit-component.controls";

export const EditComponent = () => {
	const { componentTypeFormId, component } = useContext(EditComponentContext);
	const { components } = useContext(PageComponentContext);
	// if this was in context we wouldn't need to pass
	const [isCollapsed, setIsCollapsed] = useState(false);
	const componentsList = COMPONENT_TYPES_MAP.get(components);

	return (
		<Box
			width={"100%"}
			marginTop={MARGINS.MIDSMALL}
			marginBottom={MARGINS.MIDSMALL}
		>
			<Paper elevation={1} sx={{ padding: MARGINS.MIDSMALL }}>
				{/* Todo: Add proper title */}
				<h1>Component N - {`${component}`}</h1>
				{/* Accordian should be a compound - we should control */}
				<Accordion defaultExpanded expanded={!isCollapsed} elevation={0}>
					<Box paddingLeft={MARGINS.LARGE} width={"100%"}>
						<SelectInput
							info="selectComponent"
							label="Select Component"
							id={componentTypeFormId}
							options={componentsList}
						>
							<EditComponentControls
								isCollapsed={isCollapsed}
								toggleCollapse={() =>
									setIsCollapsed((currentState) => !currentState)
								}
							/>
						</SelectInput>
					</Box>
					<AccordionDetails>
						<EditFactoryComponent type={components} id={component} />
					</AccordionDetails>
				</Accordion>
			</Paper>
		</Box>
	);
};
