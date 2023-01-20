import { testErrorMsg } from "../mockData/auth/constants";

type ErrorType = {
	message: string;
};

//how would you create a dynamic object - I'm being an idiot probably
type UseFormCtxReturnType = {
	control: {};
	formState: {
		errors: {
			testError: ErrorType;
		};
	};
};

//feels ropey! / make better / at least remove the any type!
type RHFType = {
	useFormContext: () => UseFormCtxReturnType;
	Controller: ({
		name,
		control,
		defaultValue,
		render,
	}: any) => () => JSX.Element;
};

const rhf: RHFType = jest.createMockFromModule("react-hook-form");
const useFormContext = () => ({
	control: {},
	formState: {
		errors: {
			testError: {
				message: testErrorMsg,
			},
		},
	},
});
const Controller = ({ name, control, defaultValue, render }: any) => {
	return render({ defaultValue });
};

rhf.useFormContext = useFormContext;
rhf.Controller = Controller;

//Okay not sure module.exports works
//export {} stops linting from complaining
module.exports = rhf;
export {};
