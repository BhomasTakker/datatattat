import { AppBar, Box, Container, Stack, Toolbar, Button } from "@mui/material";
import React, { ReactElement, useContext } from "react";
import classes from "./EditNavigationMenu.module.scss";
import { EditNavigation } from "./EditNavigation";
import { EditContext } from "@/src/context/edit-context";
import { useUser } from "@/src/hooks/useUser";

export type EditNavigationMenuProps = {
	prefix?: () => ReactElement | ReactElement[];
	postfix?: () => ReactElement | ReactElement[];
	styles?: {
		readonly [key: string]: string;
	};
};

const BackButton = () => {
	const { user } = useUser();
	const username = user?.username || "";
	const editCtx = useContext(EditContext);

	const currentPage = editCtx.currentPage;

	//editCtx.setCurrentPageHandler(`/users/${username}${route}`);
	const onClickHandler = () => {
		if (currentPage === `/users/${username}`) {
			return;
		}
		let pages = currentPage?.split("/");
		pages?.pop();
		// pages?.join('/');
		const backPage = pages?.join("/") || "";

		editCtx.setCurrentPageHandler(backPage);
	};

	return (
		<Button
			sx={{ color: "black" }}
			onClick={() => onClickHandler()}
			key={"NavigationEditBackButton"}
		>
			Back
		</Button>
	);
};

//This is not really up to standard - not going to work as the main header in mobile - i.e. desktop only
export const EditNavigationMenu = ({
	prefix = () => <></>,
	postfix = () => <></>,
	styles = classes,
}: EditNavigationMenuProps) => {
	//Edit Navigation Props - not including nav
	return (
		<AppBar position="static">
			<Container>
				<nav>
					<Toolbar className={styles.toolbar}>
						<Stack direction="row">
							<>
								<BackButton />
								{prefix()}
							</>
						</Stack>
						{/* name or something */}
						<Box sx={{ overflow: "hidden" }}>
							<EditNavigation />
						</Box>
						<Stack direction={"row"} spacing={2}>
							{/* {showMore && <MoreButton onClickHandler={showMenuHandler} />} */}
							{postfix()}
						</Stack>
					</Toolbar>
				</nav>
			</Container>
		</AppBar>
	);
};
