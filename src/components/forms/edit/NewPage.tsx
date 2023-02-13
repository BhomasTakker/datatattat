import {
	useForm,
	FormProvider,
	useFieldArray,
	useWatch,
} from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useUser } from "@/src/hooks/useUser";
import { LoadingSpinner } from "../../loading/LoadingSpinner";
import { Button, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import { TextInputWithControl } from "../../input/TextInput";
import { EditContainer } from "./EditContainer";

import { yupResolver } from "@hookform/resolvers/yup";
import { validate } from "@/lib/validation/form-input-validators";
import * as yup from "yup";
const schema = yup.object().shape({
	endpoint: validate.username,
	containerSelect: validate.username,
});

export const NewPage = () => {
	const methods = useForm({ resolver: yupResolver(schema) });
	const {} = methods;
	//this is wrong
	const [endpoint, setEndpoint] = useState<string>("");
	const { user, isLoading } = useUser();
	// const methods = useForm({});
	// const { basePath, locale, asPath } = useRouter();

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

	return (
		// If creating page we will need to specify route end point i.e. header link / if landing then none
		// Route/endpoint // automatic // username /
		////////////
		//create header button
		// header // link to header - header can be a 'sub' header so has reference to a parent?
		////////////
		// content //
		// select container
		////////////
		//create footer button
		// footer // can be a sub footer? / perhaps most unneccessary
		////////////
		// submit button
		// validate and send - create page
		<Box>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit((data) => console.log({ data }))}>
					{/* Make a link */}
					<Typography>{`When published you will be able to view your page by visiting`}</Typography>
					<Typography>{`${siteOrigin}/${endpoint}`}</Typography>
					{/* If adding an endpoint */}
					<TextInputWithControl
						label={"endpoint"}
						name={"endpoint"}
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
					<EditContainer />
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
				</form>
			</FormProvider>
		</Box>
	);
};
