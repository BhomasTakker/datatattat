import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { setDimensions } from "../../../store/screen/screenSlice";

type Props = {
	children: React.ReactNode;
};

//This is the wrong aproach?
//I mean it works kinda well and is react based ???
//Would prefer out of react perhaps as not technically specific
export const ScreenController: FC<Props> = ({ children }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
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
