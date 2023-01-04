import React from "react";
import {
	AppBar,
	Button,
	Toolbar,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import styles from "./MainHeader.module.css";
import { CatchingPokemon } from "@mui/icons-material";
import Link from "next/link";

export const MainHeader = () => {
	return (
		<AppBar position="static">
			<nav className={styles.nav}>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="logo"
					>
						<CatchingPokemon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						POKEMONAPP
					</Typography>
					<Stack direction={"row"} spacing={2}>
						<Button color="inherit">Features</Button>
						<Button color="inherit">Pricing</Button>
						<Button color="inherit">About</Button>
						<Button color="inherit">Login</Button>
					</Stack>
				</Toolbar>
			</nav>
		</AppBar>
	);
};
