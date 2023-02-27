import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { EditSubHeader } from "../sub/EditSubHeader";
import { HeaderDataType } from "../sub/types";
import { EditNavigationDisplay } from "./EditNavigationDisplay";
import HomeIcon from "@mui/icons-material/Home";

let count = 0;

const initialHeaderData = {
	homeIcon: <HomeIcon />,
	nav: [],
};

export const HeaderEdit = () => {
	const [headerData, setHeaderData] =
		useState<HeaderDataType>(initialHeaderData); //type this
	const { nav } = headerData;

	//////////////////////////////////////////////
	// useEffect();
	//Save header id / page data in edit context
	//If there is no header id for this page show create header button
	//If there is then load it AND all parent headers
	//We can only edit current header but can navigate - thus changing current page
	//page form listens for a change in header id
	//If so set header id
	//(We need to have a disabled input that still works as part of a form)
	//Create a with - we don't want to edit
	//////////////////////////////////////////////////

	const addLinkHandler = () => {
		//If a user creates 2 links of the same name you will get a key error
		//May need to pass key?
		const newLink = {
			route: "",
			label: `link${count}`,
		};

		//it's a bit cheap I'll admit
		count++;

		setHeaderData({ ...headerData, nav: [...nav, newLink] });
	};

	return (
		<>
			{/* Not suitable for mobile at the moment - just went for the easy route - there is no responsivity */}
			<EditSubHeader headerData={headerData} />
			{/* Where we again need an array management component */}
			<EditNavigationDisplay nav={headerData.nav} />
			<Button onClick={addLinkHandler}>Add Link</Button>
			<Button type="submit" variant="contained" color="primary">
				Save Header
			</Button>
		</>
	);
};
