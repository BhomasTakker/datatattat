import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";

export const UserButton = () => {
	const onClick = () => {
		//open user drop down
	};

	return (
		<IconButton color="inherit" aria-label="user" onClick={onClick}>
			<PersonIcon />
		</IconButton>
	);
};
