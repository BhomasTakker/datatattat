import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { EditSubHeader } from "./EditSubHeader";
import { HeaderDataType } from "../sub/types";
import { EditNavigationDisplay } from "./EditNavigationDisplay";
import HomeIcon from "@mui/icons-material/Home";
import { EditContext } from "@/src/context/edit-context";
import { SubHeadersList } from "../sub/SubHeadersList";
import { useFormContext } from "react-hook-form";

let count = 0;

const initialHeaderData = {
	homeIcon: <HomeIcon />,
	nav: [],
};

export const HeaderEdit = () => {
	const { reset } = useFormContext();
	const [headersArray, setHeadersArray] = useState<HeaderDataType[]>([]); //subHeaders
	const [headerData, setHeaderData] =
		useState<HeaderDataType>(initialHeaderData); //type this

	const editCtx = useContext(EditContext);
	const { currentPage } = editCtx; //Should call it current route

	//Clean all this the hell up!
	useEffect(() => {
		const fetchHeaderData = async () => {
			const response = await fetch(`../api/header${currentPage}`);
			const headers = await response.json();

			//if null
			const showEdit = !!headers[0];

			const filteredHeaders = headers.filter(
				(header: HeaderDataType | null) => header !== null
			);

			setHeaderData(showEdit ? { ...filteredHeaders[0] } : null);

			if (showEdit) {
				filteredHeaders.shift();
			}
			setHeadersArray([...filteredHeaders]);
			//Create and call a proper reset function
			//We'll need to reset more than nav
			reset(
				{
					nav: [],
				},
				{
					keepErrors: true,
					keepDirty: true,
				}
			);
		};
		fetchHeaderData();
	}, [currentPage]); //headersArray,

	//////////////////////////////////////////////
	// useEffect();
	//Save header id / page data in edit context
	//If there is no header id for this page show create header button
	//If there is then load it AND all parent headers
	//We can only edit current header but can navigate - thus changing current page & updating header
	//page form listens for a change in header id
	//If so set header id
	//(We need to have a disabled input that still works as part of a form)
	//Create a with - we don't want to edit
	//////////////////////////////////////////////////

	const addLinkHandler = () => {
		const { nav } = headerData;
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

	const createHeaderHandler = () => {
		console.log("Create Header");
		const newLink = {
			route: "",
			label: `link${count}`,
		};
		count++;
		//clear current form header data
		reset(
			{
				nav: [],
			},
			{
				keepErrors: true,
				keepDirty: true,
			}
		);

		setHeaderData({ ...initialHeaderData, nav: [newLink] });
	};

	return (
		<>
			{/* Not suitable for mobile at the moment (just the current edit sub headr) - just went for the easy route - there is no responsivity */}
			{/* List */}
			{/* EditSubHeaderList - minus current header */}
			{/* We don't want to edit them just allow 'navigation' */}

			{/* <SubHeadersList headersArray={headers} /> */}
			{headersArray ? (
				<SubHeadersList headersArray={[...headersArray]} />
			) : (
				<></>
			)}
			{/* CurrentHeader */}

			{headerData ? (
				<>
					<EditSubHeader headerData={{ ...headerData }} />
					<EditNavigationDisplay nav={[...headerData.nav]} />
					<Button onClick={addLinkHandler}>Add Link</Button>
					<Button type="submit" variant="contained" color="primary">
						Save Header
					</Button>
				</>
			) : (
				<></>
			)}
			{!headerData ? (
				<Button
					variant="contained"
					color="primary"
					onClick={createHeaderHandler}
				>
					Create Header
				</Button>
			) : (
				<></>
			)}
			{/* {headerData ? <EditSubHeader headerData={headerData} /> : <></>} */}
			{/* <SubHeadersList headersArray={subnav} /> */}
			{/* Where we again need an array management component */}
			{/* {headerData ? <EditNavigationDisplay nav={headerData.nav} /> : <></>}
			<Button onClick={addLinkHandler}>Add Link</Button>
			<Button type="submit" variant="contained" color="primary">
				Save Header
			</Button> */}
		</>
	);
};
