import CatchingPokemon from "@mui/icons-material/CatchingPokemon";
import { Box, IconButton } from "@mui/material";
import React from "react";

export const DTALogo = () => {
	return (
		<Box>
			<IconButton size="large" edge="start" color="inherit" aria-label="logo">
				<CatchingPokemon />
			</IconButton>
		</Box>
	);
};
