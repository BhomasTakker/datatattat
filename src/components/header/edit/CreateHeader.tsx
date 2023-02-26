import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { EditNavigationDisplay } from "./EditNavigationDisplay";
import HomeIcon from "@mui/icons-material/Home";
import { DTAFormProvider } from "../../forms/edit/DTAFormProvider";
import { useUser } from "@/src/hooks/useUser";
import { HeaderDataType } from "../sub/types";
import { FieldValues } from "react-hook-form";
import { EditSubHeader } from "../sub/EditSubHeader";

let count = 0;

const initialHeaderData = {
	homeIcon: <HomeIcon />,
	nav: [],
};

//How to do an array of known things?
//This is possible - I saw that when investigating dynamic form validation ... :/
const defaultSchema = {};

//We need to remove the add header button from here
//We need to create additional sub headers at the page level
//i.e. each page without a header will show add header
//We will need remove header but yar
export const CreateHeader = () => {
	const [isShowing, setIsShowing] = useState<boolean>(false);
	const [headerData, setHeaderData] =
		useState<HeaderDataType>(initialHeaderData); //type this

	const { user } = useUser();
	const { nav } = headerData;

	const submitHandler = async (data: FieldValues) => {
		const { _id } = user;
		if (!user) {
			//Error something went wrong
			return;
		}
		const saveData = {
			...data,
			creator: _id,
		};
	};

	if (!isShowing) {
		//Create header or create sub header
		return (
			<Button
				variant="contained"
				color="primary"
				onClick={() => setIsShowing(true)}
			>
				Create Header
			</Button>
		);
	}

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
		<Box>
			<Typography>Create Header</Typography>

			<DTAFormProvider
				defaultSchema={defaultSchema}
				submitHandler={submitHandler}
			>
				{/* We need an EditSubHeader - we don't to go to page on button click - we wan't to open edit for that data */}
				{/* That way we can also use react hooks watch and update our nav without re-rendering everything */}
				{/* This isn't suitable for mobile just yet */}
				{/* Can we set the value of the links by using watch? - probably? */}
				<EditSubHeader headerData={headerData} />
				{/* Where we again need an array management component */}
				<EditNavigationDisplay nav={headerData.nav} />
				<Button onClick={addLinkHandler}>Add Link</Button>
				<Button type="submit" variant="contained" color="primary">
					Save Header
				</Button>
			</DTAFormProvider>
		</Box>
	);
};
