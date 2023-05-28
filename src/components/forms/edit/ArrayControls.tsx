import DeleteIcon from "@mui/icons-material/Delete";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { IconButton, Stack } from "@mui/material";

export const ArrayControls = ({ onDelete, onMove }: any) => {
	return (
		<Stack direction="row">
			<IconButton aria-label="delete" onClick={onDelete} color="primary">
				<DeleteIcon />
			</IconButton>
			<IconButton
				aria-label="moveUp"
				onClick={() => onMove(-1)}
				color="primary"
			>
				<ArrowUpwardIcon />
			</IconButton>
			<IconButton
				aria-label="moveDown"
				onClick={() => onMove(1)}
				color="primary"
			>
				<ArrowDownwardIcon />
			</IconButton>
		</Stack>
	);
};
