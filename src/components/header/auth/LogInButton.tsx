import { Button, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";
import React from "react";
import { useAppSelector } from "@/store/hooks";
import { screenSize, ScreenWidth } from "@/store/screen/screenSlice";
import styles from "./LoginButton.module.scss";
import { COLOURS } from "scss/colours/colours.config";

type LoginProps = {
	isDisabled: boolean;
};

export const LogInButton = ({ isDisabled }: LoginProps) => {
	const { push } = useRouter();
	const size = useAppSelector(screenSize);

	const loginHandler = () => {
		if (isDisabled) return;
		push("/auth/signin");
	};

	if (size === ScreenWidth.XS || size === ScreenWidth.SM) {
		return (
			<IconButton
				sx={{ color: COLOURS.textColourDark }}
				aria-label="sign in"
				onClick={loginHandler}
				disabled={isDisabled}
			>
				<PersonIcon />
			</IconButton>
		);
	}

	return (
		<Button
			sx={{ color: COLOURS.textColourDark }}
			startIcon={<PersonIcon />}
			onClick={loginHandler}
			className={styles.root}
			disabled={isDisabled}
		>
			Sign in
		</Button>
	);
};
