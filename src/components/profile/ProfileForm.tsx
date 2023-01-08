import { useRef } from "react";

function ProfileForm(props: any) {
	const oldPasswordRef = useRef<any>();
	const newPasswordRef = useRef<any>();

	const submitHandler = (event: any) => {
		event.preventDefault();
		const enteredOldPassword = oldPasswordRef.current.value;
		const enteredNewPassword = newPasswordRef.current.value;

		console.log({ enteredOldPassword });
		console.log({ enteredNewPassword });

		//check valid
		props.onChangePassword({
			oldPassword: enteredOldPassword,
			newPassword: enteredNewPassword,
		});
	};
	return (
		<form onSubmit={submitHandler}>
			<div>
				<label htmlFor="new-password">New Password</label>
				<input type="password" id="new-password" ref={newPasswordRef} />
			</div>
			<div>
				<label htmlFor="old-password">Old Password</label>
				<input type="password" id="old-password" ref={oldPasswordRef} />
			</div>
			<div>
				<button>Change Password</button>
			</div>
		</form>
	);
}

export default ProfileForm;
