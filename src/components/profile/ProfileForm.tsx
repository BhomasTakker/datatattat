import { Box, Button } from "@mui/material";
import { useRef } from "react";
import { PasswordInput } from "../input/PasswordInput";

function ProfileForm(props: any) {
	const oldPasswordRef = useRef<any>();
	const newPasswordRef = useRef<any>();

	const submitHandler = (event: any) => {
		event.preventDefault();
		const enteredOldPassword = oldPasswordRef.current.value;
		const enteredNewPassword = newPasswordRef.current.value;

		//check valid
		props.onChangePassword({
			oldPassword: enteredOldPassword,
			newPassword: enteredNewPassword,
		});
	};
	return (
		//V temp / need create a user details edit page
		<form onSubmit={submitHandler}>
			<Box>
				<PasswordInput ref={oldPasswordRef} label="Current password" />
			</Box>
			<Box>
				<PasswordInput ref={newPasswordRef} label="New password" />
			</Box>
			<Box>
				<Button type="submit">Change Password</Button>
			</Box>
		</form>
	);
}

export default ProfileForm;
