//component width
//https://newdevzone.com/posts/how-to-get-a-react-components-size-heightwidth-before-render

import React, { useContext, useEffect, useState } from "react";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import { BaseLink } from "./BaseLink";

//
import { EditContext } from "@/src/context/edit-context";
import { Button } from "@mui/material";
import { useUser } from "@/src/hooks/useUser";

export type NavLinkData = {
	route: string;
	label: string;
	key?: string;
};

const intersectionFunction = (
	entries: IntersectionObserverEntry[]
): boolean => {
	const [entry] = entries;
	const { boundingClientRect: client, intersectionRect: mask } = entry;

	return mask.width >= client.width;
};

type NavLinkProps = {
	container: HTMLDivElement | null;
	onIntersect: (data: NavLinkData, isVisible: boolean) => void;
} & NavLinkData;
//need styles, etc
//on hover underline
//looks like a withIntersection to me <- behaviour
export const NavLink = ({
	route,
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
		intersectionFunction,
		//pass intersection function
	});

	const editCtx = useContext(EditContext);
	const { user } = useUser();
	const username = user?.username || "";

	//All items disappear on scroll - even the tiniest bit of scroll...
	const king = label === "News"; //immovable / set as prop

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

	//Go over / rendering too often / better but flicker on scroll - when off screen it's flickering...
	//don't remove when off screen by scroll
	//only check when resizing? - oof
	useEffect(() => {
		onIntersect({ route, label }, isVisible as boolean); //? !!
	}, [onIntersect, isVisible, label, route]);

	////////////////////////////////////////////////////////////////////////////
	//We are setting width and min-width to a dynamic value(on second render :|)
	//So we can set the width on the div - see non 0 guard
	//In order that when removed the div doesn't resize to 0px and retrigger the IntersectionObserver
	//Ultimately because we don't want to set all links to a uniform width ...
	//Could probably be done better / but at least clean up / go over / etc ////
	////////////////////////////////////////////////////////////////////////////
	const width = `${dimensions.width}px`;
	const style = dimensions.width ? { width, minWidth: width } : {};

	//Does seem very wrong!
	const editClickHandler = (route: string) => {
		// console.log("Clicked " + route);
		//temporary alert - you will lose any unsaved information
		//Or if route does not == currentRoute?
		//repeat need to outsource the function
		const usernameIndex = route.indexOf(`/users/${username}`);
		if (usernameIndex === 0) {
			editCtx.setCurrentPageHandler(route);
		}
	};

	//If Edit Context exists replace BaseLink with an EditLink
	//That just passes route to context
	//Not the greatest thing to do but it is the simplest
	//Then edit subheaders will 'navigate' correctly
	//refactor
	if (editCtx.currentPage) {
		// // console.log({ editCtx });
		return (
			<div ref={containerRef} style={style}>
				{(isVisible || king) && (
					<Button
						sx={{ color: "black" }}
						onClick={() => editClickHandler(route)}
						key={label}
					>
						{label}
					</Button>
				)}
			</div>
		);
	}
	//////////////////////////////////
	return (
		<div ref={containerRef} style={style}>
			{(isVisible || king) && <BaseLink link={route} label={label} />}
		</div>
	);
};
