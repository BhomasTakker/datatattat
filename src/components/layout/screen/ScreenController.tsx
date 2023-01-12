import React, { ReactElement, useEffect, ReactNode } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { setDimensions } from "../../../store/screen/screenSlice";

type Props = {
	children: ReactNode;
};

export const ScreenController = ({ children }: Props): ReactElement => {
	const dispatch = useAppDispatch();

	//We should check dimensions against set breakpoints here and only update redux when we have to
	//i.e. sm, md, lg, etc
	//at the moment we are just polluting redux

	useEffect(() => {
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
