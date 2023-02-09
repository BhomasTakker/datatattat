import * as yup from "yup";
import { Validation } from "../i18n/translation";
// newPassword: yup
// 		.string()
// 		.oneOf([yup.ref("oldPassword"), "Passwords must match"])
// 		.required("New password must match existing password"),
// confirmPassword: Yup.string()
//       .when('password', (password, schema) => {
//         if (password || isAddMode) return schema.required('Confirm Password is required');
//       })
//       .oneOf([Yup.ref('password')], 'Passwords must match')
//export validate auth

///////////////////////////////////////////////
//ultimately going to be a very large number?
//need split
export const validate = {
	email: yup
		.string()
		.email(Validation.emailValid)
		.required(Validation.emailRequired),

	username: yup.string().min(2).max(15).required(),

	password: yup
		.string()
		.min(6, Validation.passwordMin)
		.max(15, Validation.passwordMax)
		.required(Validation.passwordRequired),

	oldPassword: yup
		.string()
		.min(6, Validation.passwordMin)
		.max(15, Validation.passwordMax)
		.required(Validation.passwordCurrent),

	newPassword: yup
		.string()
		.min(6, Validation.passwordMin)
		.max(15, Validation.passwordMax)
		.required(Validation.passwordNew),

	confirmPassword: yup
		.string()
		.when("password", (password, schema) => {
			//this if is wrong
			if (password) return schema.required(Validation.passwordConfirm);
		})
		.oneOf([yup.ref("password")], Validation.passwordMatch),
};
