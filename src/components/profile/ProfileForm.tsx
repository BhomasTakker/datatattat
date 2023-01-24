import { Box, Button } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { validate } from "@/lib/validation/form-input-validators";
import { useTranslation } from "next-i18next";
import { ChangePasswordData } from "@/queries/auth/changePassword";
import { PasswordInputWithControl } from "@/components/input/PasswordInput";
import { Profile } from "@/src/lib/i18n/translation";

const { oldPassword, newPassword } = validate;

//identifiers here HAVE to match the name field of your input
const schema = yup.object().shape({
	oldPassword,
	newPassword,
});

type Props = {
	onChangePassword: (passwordData: ChangePasswordData) => Promise<void>;
};

function ProfileForm(props: Props) {
	//probably nicer to use
	const { t } = useTranslation();
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
					<PasswordInputWithControl
						name="oldPassword"
						label={t(Profile.currentPassword) as string}
					/>
				</Box>
				<br />
				<br />
				<Box>
					<PasswordInputWithControl
						name="newPassword"
						label={t(Profile.newPassword) as string}
					/>
				</Box>
				<Box>
					<Button type="submit">{t(Profile.changePassword)}</Button>
				</Box>
			</form>
		</FormProvider>
	);
}

export default ProfileForm;
