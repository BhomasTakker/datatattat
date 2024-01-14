import { Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { useCallback, useContext, useMemo } from "react";
import { HeaderStateContext } from "../../context/form/state/header-state.context";
import { NavLinkData } from "@/src/components/header/nav-links/NavLink";
import { HeaderNavigationLinkInput } from "./header-navigation-link-input";
import { useFormContext } from "react-hook-form";

// InputLinks
export const HeaderNavigationLinks = () => {
	const { moveLink, deleteLink, navigationId } = useContext(HeaderStateContext);
	const { getValues } = useFormContext();

	// Doesn't seem to re-render too often
	// Seems to re-render when required
	const renderNavigationLinks = () => {
		const navigation = (getValues(navigationId) as NavLinkData[]) || [];
		return navigation.map((link: NavLinkData, index: number) => {
			// this nav is a const somewhere
			const name = `${navigationId}.${index}`;

			// console.log("ERROR:223", "HEADER:NAVIGATION:LINKS", "RENDER:LINKS", {
				navigationId,
			});

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
	};

	return <Stack gap={MARGINS.SMALL}>{renderNavigationLinks()}</Stack>;
};
