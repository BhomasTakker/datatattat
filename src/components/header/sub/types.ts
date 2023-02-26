import { ReactElement } from "react";
import { NavLinkData } from "../nav-links/NavLink";

//declared elsewhere as any...
export type HeaderDataType = {
	nav: NavLinkData[];
	//Elem: new() => React.Component<any, any> / if passing an unstantiated Element
	homeIcon?: ReactElement; //should be section title perhaps / and/or - i.e. News
};

export type SubHeaderProps = {
	headerData: HeaderDataType;
};
