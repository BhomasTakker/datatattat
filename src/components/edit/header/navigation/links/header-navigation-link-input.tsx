import { ArrayControls } from "@/src/components/forms/edit/ArrayControls";
import { NavLinkData } from "@/src/components/header/nav-links/NavLink";
import { TextInputWithControl } from "@/src/components/input/TextInput";
import { Box, Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { useEffect } from "react";

type Props = {
	link: NavLinkData;
	name: string;
	moveHandler: (dir: number) => void;
	deleteHandler: () => void;
};

export const HeaderNavigationLinkInput = ({
	link,
	name,
	moveHandler,
	deleteHandler,
}: Props) => {
	const { route: linkRoute, label, key } = link;
	const route = linkRoute.split("/").filter(Boolean).join("/");
	const routeToShow = route.split("/").pop();

	return (
		<Stack direction="row">
			<Box paddingLeft={MARGINS.SMALL} width="100%">
				<TextInputWithControl
					key={routeToShow}
					inputProps={{
						disableUnderline: true,
					}}
					name={`${name}.label`}
					defaultValue={label}
				/>
			</Box>
			<Box width="100%" marginLeft={MARGINS.SMALL} paddingLeft={MARGINS.SMALL}>
				<TextInputWithControl
					key={routeToShow}
					name={`${name}.route`}
					inputProps={{
						disableUnderline: true,
					}}
					defaultValue={`${routeToShow}`}
					required
				/>
			</Box>
			<Box width="100%">
				<ArrayControls onDelete={deleteHandler} onMove={moveHandler} />
			</Box>
		</Stack>
	);
};
