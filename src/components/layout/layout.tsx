import React, { FC } from "react";
import { MainFooter } from "../MainFooter";
import { MainHeader } from "../MainHeader";
import { Container } from "@mui/material";

type Props = {
	children: React.ReactNode;
};

export const Layout: FC<Props> = (props) => {
	return (
		<>
			<MainHeader />
			<Container>{props.children}</Container>
			<MainFooter />
		</>
	);
};
