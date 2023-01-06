import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { setDimensions } from "../../../store/screen/screenSlice";

type Props = {
	children: React.ReactNode;
};

//Is this is the wrong aproach?
//I mean it works kinda well and is react based ???
//Would prefer out of react perhaps as not technically specific
export const ScreenController: FC<Props> = ({ children }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		//need to set here since values are initialised to 0, 0 and size defaults to sm
		//This may be a problem in testing?
		//in useEffect tho lol
		dispatch(
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		);
		const resizeHandler = () => {
			dispatch(
				setDimensions({
					width: window.innerWidth,
					height: window.innerHeight,
				})
			);
		};
		window.addEventListener("resize", resizeHandler);

		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, [dispatch]);
	return <>{children}</>;
};
