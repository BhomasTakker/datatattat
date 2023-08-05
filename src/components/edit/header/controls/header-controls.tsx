import { Stack, Button } from "@mui/material";
import { useContext } from "react";
import { HeaderQueryContext } from "../query/context/header-query.context";
import AddIcon from "@mui/icons-material/Add";

export const HeaderControls = () => {
	const { newLink } = useContext(HeaderQueryContext);
	return (
		<Stack maxWidth={"20rem"}>
			<Button onClick={newLink} startIcon={<AddIcon />}>
				Add Link
			</Button>
			<Button type="submit" variant="contained" color="primary">
				Save Header
			</Button>
		</Stack>
	);
};
