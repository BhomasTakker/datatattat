//https://www.youtube.com/watch?v=djmAUrfMGQs&list=PLC3y8-rFHvwhC-j3x3t9la8-GQJGViDQk&index=9
//Storybook add global decorators
import React, { FC, ReactElement, ReactNode } from "react";

import styles from "./Center.module.css";

type Props = {
	children: ReactNode;
};
//currently a horizontal center
export const Center = ({ children }: Props): ReactElement => {
	return <div className={styles.center}>{children}</div>;
};
