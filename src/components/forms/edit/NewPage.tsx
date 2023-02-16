import { useForm, FormProvider } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useUser } from "@/src/hooks/useUser";
import { LoadingSpinner } from "../../loading/LoadingSpinner";
import { Button, Typography, Box } from "@mui/material";
import { TextInputWithControl } from "../../input/TextInput";
import { EditContainer } from "./EditContainer";

import { yupResolver } from "@hookform/resolvers/yup";
import { validate } from "@/lib/validation/form-input-validators";
import * as yup from "yup";
import { EditComponents } from "./EditComponents";

const schema = yup.object().shape({
	route: validate.username,
	//damn id changed - validation may be where it gets tricky?
	//content.container.containerType
	// containerSelect: validate.username,
});

export const NewPage = () => {
	const methods = useForm({ resolver: yupResolver(schema) });
	// const {} = methods;
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
	const debugHandler = () => {
		console.log("DEBUG HANDLER");
		const values = methods.getValues();
		console.log({ values });
	};
	return (
		<Box>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit((data) => submitHandler(data))}>
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
					<EditComponents objectKey={"content.components"} />
					<Box>
						<Button variant="contained" color="primary">
							Create Footer
						</Button>
					</Box>
					<Box>
						<Button type="submit" variant="contained" color="primary">
							Submit
						</Button>
						<Button onClick={debugHandler} variant="contained" color="primary">
							Debug
						</Button>
					</Box>
				</form>
			</FormProvider>
		</Box>
	);
};
