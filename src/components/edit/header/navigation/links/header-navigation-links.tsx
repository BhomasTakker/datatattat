import { Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { useCallback, useContext } from "react";
import { HeaderStateContext } from "../../context/form/state/header-state.context";
import { NavLinkData } from "@/src/components/header/nav-links/NavLink";
import { HeaderNavigationLinkInput } from "./header-navigation-link-input";

// InputLinks
export const HeaderNavigationLinks = () => {
	const { navigation, moveLink, deleteLink, navigationId } =
		useContext(HeaderStateContext);

	const renderNavigationLinks = useCallback(() => {
		return navigation.map((link: NavLinkData, index: number) => {
			// this nav is a const somewhere
			const name = `${navigationId}.${index}`;

			return (
				<HeaderNavigationLinkInput
					key={name}
					link={link}
					name={name}
					deleteHandler={() => deleteLink(index)}
					moveHandler={(dir: number) => moveLink(dir, index)}
				/>
			);
		});
	}, [deleteLink, moveLink, navigation, navigationId]);

	return <Stack gap={MARGINS.SMALL}>{renderNavigationLinks()}</Stack>;
};
