import React, { FC } from "react";
import { MainFooter } from "./MainFooter";
import { MainHeader } from "./MainHeader";

type Props = {
	children: React.ReactNode;
};

export const Layout: FC<Props> = (props) => {
	return (
		<>
			<MainHeader />
			<>{props.children}</>
			<MainFooter />
		</>
	);
};
