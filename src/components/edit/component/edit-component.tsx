import {
	Accordion,
	AccordionDetails,
	Box,
	IconButton,
	Paper,
	Stack,
} from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { useContext, useState } from "react";
import { ArrayControls } from "../../forms/edit/ArrayControls";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { EditComponentContext } from "./context/edit-component.context";
import { SelectInput } from "../inputs/select/select-input";
import { EDIT_COMPONENTS } from "@/src/factories/components";
import { EditFactoryComponent } from "../factory/edit-component.factory";
import { PageComponentContext } from "../page/component/context/page-component.context";
import { COMPONENT_TYPES_MAP } from "config/edit/component-types.map";

interface EditComponentControls {
	isCollapsed: boolean;
	toggleCollapse: () => void;
}

const EditComponentControls = ({
	isCollapsed,
	toggleCollapse,
}: EditComponentControls) => {
	const { onDelete, onMove } = useContext(EditComponentContext);
	return (
		<Stack direction="row">
			<ArrayControls onDelete={onDelete} onMove={onMove} />
			{/* Maybe not here & isCollapsed is the wrong term - should be isExpanded */}
			<IconButton aria-label="expand or collapse" onClick={toggleCollapse}>
				{isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
			</IconButton>
		</Stack>
	);
};

export const EditComponent = () => {
	const { componentTypeFormId, component } = useContext(EditComponentContext);
	const { components } = useContext(PageComponentContext);
	// if this was in context we wouldn't need to pass
	const [isCollapsed, setIsCollapsed] = useState(false);
	const componentsList = COMPONENT_TYPES_MAP.get(components);

	console.log(
		"FEATURE:404",
		"EDIT:COMPONENT",
		"CREATE:FACTORY",
		{ componentTypeFormId },
		{ component },
		{ components }
	);

	return (
		<Box
			width={"100%"}
			marginTop={MARGINS.MIDSMALL}
			marginBottom={MARGINS.MIDSMALL}
		>
			<Paper elevation={1} sx={{ padding: MARGINS.MIDSMALL }}>
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
					{/* \page factory */}
					{/* */}
					<AccordionDetails>
						<EditFactoryComponent type={components} id={component} />
					</AccordionDetails>
				</Accordion>
			</Paper>
		</Box>
	);
};
