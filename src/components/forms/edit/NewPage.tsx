import React, { useEffect, useState } from "react";
import { useUser } from "@/src/hooks/useUser";
import { LoadingSpinner } from "../../loading/LoadingSpinner";
import { Button, Typography, Box } from "@mui/material";
import { TextInputWithControl } from "../../input/TextInput";
import { EditContainer } from "./EditContainer";

import { validate } from "@/lib/validation/form-input-validators";
import { EditComponents } from "./EditComponents";
import { DTAFormProvider } from "./DTAFormProvider";

import * as yup from "yup";

//This is how we would have to do it I think
//We would need to construct the yup object and add required fields
//With howevr you use arrays
const defaultSchema = {
	route: validate.username,
	content: yup.object().shape({
		container: yup.object().shape({
			containerType: validate.username,
		}),
	}),
	// content.container.containerType: validate.username,
};

export const NewPage = () => {
	//this is wrong
	const [endpoint, setEndpoint] = useState<string>("");
	const { user, isLoading } = useUser();

	// Is this okay?
	// not in testing etc?
	const siteOrigin = window.location.origin;

	useEffect(() => {
		if (user) {
			setEndpoint(user.username);
		}
	}, [user]);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	const submitHandler = (data: any) => {
		console.log("SUBMIT HANDLER");
		console.log({ data });
	};

	return (
		<Box>
			<DTAFormProvider
				defaultSchema={defaultSchema}
				submitHandler={submitHandler}
			>
				{/* Make a link */}
				<Typography>{`When published you will be able to view your page by visiting`}</Typography>
				<Typography>{`${siteOrigin}/${endpoint}`}</Typography>
				{/* If adding an endpoint */}
				<TextInputWithControl
					label={"endpoint"}
					name={"route"}
					fullWidth={true}
					variant="outlined"
					disabled={false}
				/>
				{/* Do without Box (unneccessary div) */}
				<Box>
					<Button variant="contained" color="primary">
						Create Header
					</Button>
				</Box>
				{/* pass in name - fieldArray? */}
				{/* Probably wouldn't add the final dot here but when used no? */}
				<EditContainer objectKey={`content.container`} />
				<EditComponents objectKey={"content"} />
				<Box>
					<Button variant="contained" color="primary">
						Create Footer
					</Button>
				</Box>
				<Box>
					<Button type="submit" variant="contained" color="primary">
						Submit
					</Button>
				</Box>
			</DTAFormProvider>
		</Box>
	);
};
