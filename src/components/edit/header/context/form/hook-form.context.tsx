// Should really make a plop file

import { Button } from "@mui/material";
import { ReactNode, createContext, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { HeaderFormContext } from "./header-form.context";

type HookFormState = {
	debug?: boolean;
};

type HookFormInterface = {};

const initialState: HookFormState & HookFormInterface = {
	debug: false,
};

export const HookFormContextProvider = ({
	value,
	children,
}: {
	value?: HookFormState;
	children: ReactNode;
}) => {
	const methods = useForm();
	const { submit } = useContext(HeaderFormContext);
	const { debug } = value || {};

	console.log("FEATURE:105", "CONTEXT:GROUP", "HOOK:FORM", { debug });

	const debugHandler = () => {
		console.log("DEBUG HANDLER");
		console.log({ values: methods.getValues() });
		console.log({ errors: methods.formState.errors });
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
