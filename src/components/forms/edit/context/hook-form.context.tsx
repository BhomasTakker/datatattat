import { Button } from "@mui/material";
import { Context, ReactNode, createContext, useContext } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { HeaderFormContext } from "../../../edit/header/context/form/header-form.context";

interface IContext {
	submit: (data: unknown) => void;
}

type HookFormState = {
	debug?: boolean;
	context: Context<{
		submit: (data: FieldValues) => void;
	}>;
};

type HookFormInterface = {};

const initialState: HookFormState & HookFormInterface = {
	debug: false,
	context: createContext({ submit: (data: FieldValues) => {} }),
};

// Should be used by body as well
export const HookFormContextProvider = ({
	value,
	children,
}: {
	value: HookFormState;
	children: ReactNode;
}) => {
	const methods = useForm();
	const { debug, context } = value || {};

	const { submit } = useContext(context);

	const debugHandler = () => {
		console.log("ISSUE:0004", "CONTEXT:GROUP", "HOOK:FORM", {
			values: methods.getValues(),
		});
	};

	return (
		// Would you always spread given value here?
		<HookFormContext.Provider value={{ ...value, debug }}>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit((data) => submit(data))}>
					{children}
				</form>
				{debug ? <Button onClick={debugHandler}>Debug</Button> : <></>}
			</FormProvider>
		</HookFormContext.Provider>
	);
};

export const HookFormContext = createContext({ ...initialState });
