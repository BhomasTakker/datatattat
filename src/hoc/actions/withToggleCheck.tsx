import { Box, Checkbox, FormControlLabel, Stack } from "@mui/material";
import { ReactElement, useState } from "react";
import classes from "./withToggleCheck.module.scss";

//What should component type be?
export const withToggleCheck = (Component: any) => {
	return function ComponentWithToggle(props: any): ReactElement {
		const [isChecked, setIsChecked] = useState(props.isChecked || false);

		const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
			setIsChecked(e.target.checked);
		};
		return (
			<Stack direction={"row"} width={"100%"}>
				<Component {...props} disabled={!isChecked} />
				<FormControlLabel
					className={classes.toggle}
					label=""
					control={<Checkbox checked={isChecked} onChange={onChangeHandler} />}
				/>
			</Stack>
		);
	};
};

// export function ComponentWithToggle(props: any): ReactElement {
// 	const [isChecked, setIsChecked] = useState(props.isChecked || false);

// 	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setIsChecked(e.target.checked);
// 	};
// 	return (
// 		<Stack direction={"row"}>
// 			<FormControlLabel
// 				label=""
// 				control={<Checkbox checked={isChecked} onChange={onChangeHandler} />}
// 			/>
// 			<Component {...props} disabled={!isChecked} />
// 		</Stack>
// 	);
// };
