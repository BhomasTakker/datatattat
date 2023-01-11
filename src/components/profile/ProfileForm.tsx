import { Box, Button } from "@mui/material";
import { PasswordInput } from "../input/PasswordInput";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { validate } from "../../lib/validation/form-input-validators";

const { oldPassword, newPassword } = validate;

//identifiers here HAVE to match the name field of your input
const schema = yup.object().shape({
	oldPassword,
	newPassword,
});

function ProfileForm(props: any) {
	const methods = useForm({ resolver: yupResolver(schema) });

	const submitHandler = (data: any) => {
		props.onChangePassword(data);
		//if return true clear inputs? / or just clear
	};

	return (
		//V temp / need create a user details edit page
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(submitHandler)}>
				<Box>
					<PasswordInput name="oldPassword" label="Current password" />
				</Box>
				<br />
				<br />
				<Box>
					<PasswordInput name="newPassword" label="New password" />
				</Box>
				<Box>
					<Button type="submit">Change Password</Button>
				</Box>
			</form>
		</FormProvider>
	);
}

export default ProfileForm;
