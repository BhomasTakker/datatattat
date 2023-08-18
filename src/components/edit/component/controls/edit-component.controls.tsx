import { useContext } from "react";
import { EditComponentContext } from "../context/edit-component.context";
import { IconButton, Stack } from "@mui/material";
import { ArrayControls } from "@/src/components/forms/edit/ArrayControls";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface EditComponentControls {
	isCollapsed: boolean;
	toggleCollapse: () => void;
}

export const EditComponentControls = ({
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
