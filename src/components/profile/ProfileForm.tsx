import { Box, Button } from "@mui/material";
import { PasswordInput } from "../input/PasswordInput";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//identifiers here HAVE to match the name field of your input
const schema = yup.object().shape({
	oldPassword: yup
		.string()
		.min(6, "Password must be at least 6 characters")
		.max(15, "Password must be at most 15 characters")
		.required("Current password is required"),
	newPassword: yup
		.string()
		.min(6, "Password must be at least 6 characters")
		.max(15, "Password must be at most 15 characters")
		.required("New password is required"),
});
// newPassword: yup
// 		.string()
// 		.oneOf([yup.ref("oldPassword"), "Passwords must match"])
// 		.required("New password must match existing password"),
// confirmPassword: Yup.string()
//       .when('password', (password, schema) => {
//         if (password || isAddMode) return schema.required('Confirm Password is required');
//       })
//       .oneOf([Yup.ref('password')], 'Passwords must match')

function ProfileForm(props: any) {
	const methods = useForm({ resolver: yupResolver(schema) });

	const submitHandler = (data: any) => {
		console.log({ data });
		const { oldPassword, newPassword } = data;

		props.onChangePassword(data);
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
