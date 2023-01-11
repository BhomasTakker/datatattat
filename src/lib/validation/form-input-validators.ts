import * as yup from "yup";
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
		.email("Validation:email-valid")
		.required("Validation:email-required"),

	password: yup
		.string()
		.min(6, "Validation:password-min")
		.max(15, "Validation:password-max")
		.required("Validation:password-required"),

	oldPassword: yup
		.string()
		.min(6, "Validation:password-min")
		.max(15, "Validation:password-max")
		.required("Validation:password-current"),

	newPassword: yup
		.string()
		.min(6, "Validation:password-min")
		.max(15, "Validation:password-max")
		.required("Validation:password-new"),
};
