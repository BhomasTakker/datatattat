import React, { ElementType, ReactElement } from "react";
import styles from "./layout.module.scss";

import { Notification } from "@/components/layout/notifications/Notification";
import { MainHeader } from "../../header/main/MainHeader";
import { UnknownObject } from "@/src/types";
import { MainFooter } from "../../footer/MainFooter";
import { Container } from "@mui/material";

type Style = {
	size: "xs" | "sm" | "md" | "lg" | "xl" | false;
};

type PageData = {
	style: Style;
};

type PageProps = {
	headerData: UnknownObject;
	pageData: PageData;
};

type Props = {
	component: ElementType;
	pageProps: PageProps;
};

export const Layout = ({
	pageProps,
	component: Component,
}: Props): ReactElement => {
	const { headerData, pageData } = pageProps;
	// I don't like doing this / or relying on it
	const { style } = pageData || {};
	const { size = "full" } = style || {};
	const maxWidth = size === "full" ? false : size;

	const disableGutters = false;

	return (
		<div className={styles.root}>
			<Container
				className={styles.container}
				maxWidth={maxWidth}
				disableGutters={disableGutters}
			>
				{/* Could pass a style etc for header */}
				<MainHeader headerData={headerData} />
				<Component {...pageProps} />
				<Notification />
				<MainFooter />
			</Container>
		</div>
	);
};
