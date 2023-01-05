//https://www.youtube.com/watch?v=djmAUrfMGQs&list=PLC3y8-rFHvwhC-j3x3t9la8-GQJGViDQk&index=9
//Storybook add global decorators
import React, { FC } from "react";

import styles from "./Center.module.css";

type Props = {
	children: React.ReactNode;
};

export const Center: FC<Props> = (props) => {
	return <div className={styles.center}>{props.children}</div>;
};
