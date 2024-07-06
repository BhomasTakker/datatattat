import { Box, Button, Stack } from "@mui/material";
import { useContext } from "react";
import { HeaderQueryContext } from "../context/query/header-query.context";
import { SubHeadersList } from "@/src/components/header/sub/SubHeadersList";
import { MARGINS } from "config/styles/styles.config";
import { HeaderControls } from "../controls/header-controls";
import { HeaderStateContext } from "../context/form/state/header-state.context";
import { SubHeader } from "../sub-header/header-sub-header";
import { HeaderNavigationDisplay } from "../navigation/header-navigation-display";

const SubHeaders = () => {
	const { subHeaders } = useContext(HeaderQueryContext);

	return subHeaders ? <SubHeadersList headersArray={subHeaders} /> : <></>;
};

const HeaderEdit = () => {
	const { currentHeader } = useContext(HeaderQueryContext);

	return currentHeader ? (
		<Stack gap={MARGINS.MIDSMALL}>
			{/* Go through these - dont pass - these need wrapping in NavContext*/}
			<SubHeader />
			<HeaderNavigationDisplay />
			{/* <EditNavigationDisplay nav={[...currentHeader.nav]} /> */}

			<HeaderControls />
		</Stack>
	) : (
		<></>
	);
};

// At the moment there is always a current header
const CreateHeader = () => {
	const { currentHeader } = useContext(HeaderQueryContext);
	const { createHeader } = useContext(HeaderStateContext);

	return !currentHeader ? (
		<Button variant="contained" color="secondary" onClick={createHeader}>
			Create Header
		</Button>
	) : (
		<></>
	);
};

export const HeaderLayout = () => {
	return (
		<Box>
			<SubHeaders />
			<HeaderEdit />
			<CreateHeader />
		</Box>
	);
};
