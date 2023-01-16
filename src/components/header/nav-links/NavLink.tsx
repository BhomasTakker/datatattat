//component width
//https://newdevzone.com/posts/how-to-get-a-react-components-size-heightwidth-before-render

import React, { useEffect, useRef, useState } from "react";
import styles from "./NavLink.module.css";
import Link from "next/link";
import { Button } from "@mui/material";
import { useElementOnScreen } from "../../../hooks/useElementOnScreen";

export type NavLinkData = {
	link: string;
	label: string;
};

type NavLinkProps = {
	container: HTMLDivElement | null;
	onIntersect: (data: NavLinkData, isVisible: boolean) => void;
} & NavLinkData;
//need styles, etc
//on hover underline

export const NavLink = ({
	link,
	label,
	container, //should be optional / default to null
	onIntersect,
}: NavLinkProps) => {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	//sort types out...
	const { containerRef, isVisible } = useElementOnScreen({
		root: container,
		rootMargin: "0px",
		threshold: 1.0,
	});

	const king = label === "Home";

	useEffect(() => {
		//this is v hacky //first render is 0 dimensions.width
		//We need the first subsequent re-render - i.e. the first actual render of the component ?
		if (containerRef.current && containerRef.current.offsetWidth > 0) {
			setDimensions({
				width: containerRef.current.offsetWidth,
				height: containerRef.current.offsetHeight,
			});
		}
	}, [containerRef, isVisible]);

	useEffect(() => {
		onIntersect({ link, label }, isVisible as boolean); //? !!
	}, [onIntersect, isVisible, label, link]);

	const width = `${dimensions.width}px`;

	const style = dimensions.width ? { width, minWidth: width } : {};

	return (
		<div ref={containerRef} className={styles.container} style={style}>
			{(isVisible || king) && (
				<Link href={link}>
					<Button className={styles.link} color="inherit">
						{label}
					</Button>
				</Link>
			)}
		</div>
	);
};
