import { Button, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "@/store/hooks";
import { screenSize, ScreenWidth } from "@/store/screen/screenSlice";

export const LogInButton = () => {
	const { push } = useRouter();
	const size = useAppSelector(screenSize);

	const loginHandler = () => {
		push("/auth/signin");
	};

	// Check the rerenders on this thing
	// // console.log({ size });

	if (size === ScreenWidth.XS) {
		return (
			<IconButton color="inherit" aria-label="sign in" onClick={loginHandler}>
				<PersonIcon />
			</IconButton>
		);
	}

	return (
		<Button
			startIcon={<PersonIcon />}
			color="inherit"
			onClick={loginHandler}
			className="Login"
		>
			Sign in
		</Button>
	);
};
