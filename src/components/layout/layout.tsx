import React, { FC, ReactElement, ReactNode } from "react";
import { MainFooter } from "../footer/MainFooter";
import { MainHeader } from "../header/MainHeader";
import { Container } from "@mui/material";

import { Notification } from "./notifications/Notification";

type Props = {
	children: ReactNode;
};

export const Layout = ({ children }: Props): ReactElement => {
	return (
		<>
			<MainHeader />
			<Container>{children}</Container>
			<Notification />
			<MainFooter />
		</>
	);
};
