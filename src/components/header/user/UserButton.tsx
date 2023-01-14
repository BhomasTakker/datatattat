//https://mui.com/material-ui/react-menu/
import { Box, Divider, Icon, IconButton, Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import { logout } from "../../../lib/auth";
import { useRouter } from "next/router";

export const UserButton = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const router = useRouter();

	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const routeHandler = (route: string) => {
		router.push(route);
		handleClose(); //no wait just close?
	};

	//list should be elsewhere perhaps
	return (
		<Box>
			<IconButton
				color="inherit"
				aria-label="user"
				onClick={handleClick}
				aria-controls={open ? "demo-customized-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
			>
				<PersonIcon />
			</IconButton>
			<Menu
				elevation={0}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem onClick={() => routeHandler("/profile")} disableRipple>
					Profile
				</MenuItem>
				<MenuItem onClick={() => routeHandler("/user/settings")} disableRipple>
					Settings
					<SettingsIcon />
				</MenuItem>
				<Divider sx={{ my: 0.5 }} />
				<MenuItem onClick={() => logout(handleClose)} disableRipple>
					Logout
				</MenuItem>
			</Menu>
		</Box>
	);
};
