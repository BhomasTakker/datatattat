import { Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { useCallback, useContext, useMemo } from "react";
import { HeaderStateContext } from "../../context/form/state/header-state.context";
import { NavLinkData } from "@/src/components/header/nav-links/NavLink";
import { HeaderNavigationLinkInput } from "./header-navigation-link-input";

// InputLinks
export const HeaderNavigationLinks = () => {
	const { navigation, moveLink, deleteLink, navigationId } =
		useContext(HeaderStateContext);

	const linkOrder = navigation.map(({ key }) => key);
	const navLinksOrder = linkOrder.join("|");
	const navLength = navigation.length;

	const renderNavigationLinks = useCallback(() => {
		return navigation.map((link: NavLinkData, index: number) => {
			// this nav is a const somewhere
			const name = `${navigationId}.${index}`;

			console.log("ERROR:103", { navLinksOrder });

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
	}, [deleteLink, moveLink, navLinksOrder, navigation, navigationId]);

	////////////////////////////////////////////
	//// HACK //////////////////////////////////
	// Understand but this doesn't seem right
	// We are data driven - whenever navigation changes we are rerendered
	// When inputting data we lose focus because the thing gets rerendered
	// We need to rerender when input order changes
	// but when value changes / form input component takes care of itself
	// So only update when order changes / doesn't seem great
	const navigationLinks = useMemo(
		() => renderNavigationLinks(),
		[renderNavigationLinks, navLinksOrder, navLength]
	);

	return <Stack gap={MARGINS.SMALL}>{navigationLinks}</Stack>;
};
