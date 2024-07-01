import { Stack, Button } from "@mui/material";
import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { HeaderStateContext } from "../context/form/state/header-state.context";

export const HeaderControls = () => {
	const { addLink } = useContext(HeaderStateContext);
	return (
		<Stack maxWidth={"20rem"}>
			<Button color="secondary" onClick={addLink} startIcon={<AddIcon />}>
				Add Link
			</Button>
			<Button type="submit" variant="contained" color="secondary">
				Save Header
			</Button>
		</Stack>
	);
};
