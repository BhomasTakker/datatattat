import { Tab, Tabs } from "@mui/material";
import React from "react";
import { TabLink } from "../../navigation/TabLink";

//dynamic list from props
export const Navigation = () => {
	return (
		<Tabs
			value={0}
			onChange={(e, val) => console.log(val)}
			aria-label="site navigation tabs"
			// indicatorColor="primary"
		>
			<TabLink href="/" label="Home"></TabLink>
			<TabLink href="/profile" label="Profile"></TabLink>
			<TabLink href="/auth" label="Redirect"></TabLink>
		</Tabs>
	);
};
