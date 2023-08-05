import { EditNavigation } from "@/src/components/header/edit/EditNavigation";
import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";
import classes from "./header-sub-header.module.scss";
import { useContext } from "react";
import { HeaderStateContext } from "../context/form/state/header-state.context";

const BackButton = () => {
	const { backPage } = useContext(HeaderStateContext);
	return (
		<Button
			sx={{ color: "black" }}
			onClick={backPage}
			key={"NavigationEditBackButton"}
		>
			Back
		</Button>
	);
};

export const SubHeader = () => {
	return (
		<AppBar position="static">
			<Container>
				<nav>
					<Toolbar className={classes.toolbar}>
						<Stack>
							<BackButton />
						</Stack>

						<Box sx={{ overflow: "hidden" }}>
							<EditNavigation />
						</Box>
						<Stack></Stack>
					</Toolbar>
				</nav>
			</Container>
		</AppBar>
	);
};
