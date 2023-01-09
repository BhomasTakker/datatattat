import React, { FC } from "react";
import { MainFooter } from "../footer/MainFooter";
import { MainHeader } from "../header/MainHeader";
import { Container } from "@mui/material";

import { Notification } from "./notifications/Notification";

type Props = {
	children: React.ReactNode;
};

export const Layout: FC<Props> = (props) => {
	return (
		<>
			<MainHeader />
			<Container>{props.children}</Container>
			<Notification />
			<MainFooter />
		</>
	);
};
